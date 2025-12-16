import { ReactNode } from "react";
import { ChevronDown, ChevronUp, DollarSign, Target, MessageSquare, AlertCircle } from "lucide-react";
import { useState } from "react";

interface OrgCardProps {
  variant: "leader" | "sdr" | "cs";
  name: string;
  role: string;
  subtitle: string;
  icon: ReactNode;
  responsibilities: string[];
  notResponsible?: string[];
  reportTo?: string;
  delay?: number;
  remuneration?: {
    fixed: string;
    commission: string;
  };
  kpis?: string[];
  channels?: string[];
  requirements?: string[];
}

const variantStyles = {
  leader: {
    card: "org-card org-card-leader text-primary-foreground",
    icon: "bg-primary-foreground/20",
    badge: "bg-primary-foreground/20 text-primary-foreground",
    text: "text-primary-foreground/80",
    heading: "text-primary-foreground",
    bullet: "bg-primary-foreground/60",
    expandBtn: "text-primary-foreground/80 hover:text-primary-foreground",
    sectionBorder: "border-primary-foreground/20",
    sectionTitle: "text-primary-foreground/70",
  },
  sdr: {
    card: "org-card org-card-sdr",
    icon: "bg-sdr/10",
    badge: "bg-sdr/10 text-sdr",
    text: "text-muted-foreground",
    heading: "text-foreground",
    bullet: "bg-sdr",
    expandBtn: "text-muted-foreground hover:text-foreground",
    sectionBorder: "border-border",
    sectionTitle: "text-muted-foreground",
  },
  cs: {
    card: "org-card org-card-cs",
    icon: "bg-cs/10",
    badge: "bg-cs/10 text-cs",
    text: "text-muted-foreground",
    heading: "text-foreground",
    bullet: "bg-cs",
    expandBtn: "text-muted-foreground hover:text-foreground",
    sectionBorder: "border-border",
    sectionTitle: "text-muted-foreground",
  },
};

export function OrgCard({
  variant,
  name,
  role,
  subtitle,
  icon,
  responsibilities,
  notResponsible,
  reportTo,
  delay = 0,
  remuneration,
  kpis,
  channels,
  requirements,
}: OrgCardProps) {
  const [expanded, setExpanded] = useState(false);
  const styles = variantStyles[variant];

  return (
    <div
      className={`${styles.card} animate-slide-up`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Header */}
      <div className="flex items-start gap-4 mb-4">
        <div className={`p-3 rounded-xl ${styles.icon}`}>
          {icon}
        </div>
        <div className="flex-1">
          <h3 className={`font-display text-xl font-bold ${styles.heading}`}>
            {name}
          </h3>
          <p className={`font-medium ${variant === "leader" ? "text-primary-foreground/90" : "text-foreground/80"}`}>
            {role}
          </p>
          <span className={`inline-block mt-2 px-3 py-1 rounded-full text-xs font-medium ${styles.badge}`}>
            {subtitle}
          </span>
        </div>
      </div>

      {/* Report To */}
      {reportTo && (
        <p className={`text-sm mb-4 ${styles.text}`}>
          Reporta para: <span className="font-semibold">{reportTo}</span>
        </p>
      )}

      {/* Remuneration */}
      {remuneration && (
        <div className={`mb-4 p-3 rounded-lg ${variant === "leader" ? "bg-primary-foreground/10" : "bg-muted/50"}`}>
          <div className="flex items-center gap-2 mb-2">
            <DollarSign className={`w-4 h-4 ${variant === "leader" ? "text-primary-foreground/70" : "text-foreground/70"}`} />
            <span className={`text-xs font-semibold uppercase tracking-wide ${styles.sectionTitle}`}>
              Remuneração
            </span>
          </div>
          <p className={`text-sm ${styles.text}`}>
            <span className="font-semibold">Fixo:</span> {remuneration.fixed}
          </p>
          <p className={`text-sm ${styles.text}`}>
            <span className="font-semibold">Comissão:</span> {remuneration.commission}
          </p>
        </div>
      )}

      {/* Responsibilities Preview */}
      <div className="space-y-2 mb-4">
        <p className={`text-xs font-semibold uppercase tracking-wide ${styles.sectionTitle}`}>
          Responsabilidades
        </p>
        {responsibilities.slice(0, expanded ? responsibilities.length : 3).map((item, index) => (
          <div key={index} className="flex items-start gap-2">
            <div className={`w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 ${styles.bullet}`} />
            <p className={`text-sm ${styles.text}`}>{item}</p>
          </div>
        ))}
      </div>

      {/* Expanded Content */}
      {expanded && (
        <>
          {/* Channels */}
          {channels && channels.length > 0 && (
            <div className={`mt-4 pt-4 border-t ${styles.sectionBorder}`}>
              <div className="flex items-center gap-2 mb-2">
                <MessageSquare className={`w-4 h-4 ${variant === "leader" ? "text-primary-foreground/70" : "text-foreground/70"}`} />
                <span className={`text-xs font-semibold uppercase tracking-wide ${styles.sectionTitle}`}>
                  Canais de Comunicação
                </span>
              </div>
              <p className={`text-sm ${styles.text}`}>{channels.join(", ")}</p>
            </div>
          )}

          {/* KPIs */}
          {kpis && kpis.length > 0 && (
            <div className={`mt-4 pt-4 border-t ${styles.sectionBorder}`}>
              <div className="flex items-center gap-2 mb-2">
                <Target className={`w-4 h-4 ${variant === "leader" ? "text-primary-foreground/70" : "text-foreground/70"}`} />
                <span className={`text-xs font-semibold uppercase tracking-wide ${styles.sectionTitle}`}>
                  KPIs
                </span>
              </div>
              <div className="space-y-1">
                {kpis.map((kpi, index) => (
                  <p key={index} className={`text-sm ${styles.text}`}>• {kpi}</p>
                ))}
              </div>
            </div>
          )}

          {/* Requirements */}
          {requirements && requirements.length > 0 && (
            <div className={`mt-4 pt-4 border-t ${styles.sectionBorder}`}>
              <div className="flex items-center gap-2 mb-2">
                <AlertCircle className={`w-4 h-4 ${variant === "cs" ? "text-cs" : variant === "sdr" ? "text-sdr" : "text-primary-foreground/70"}`} />
                <span className={`text-xs font-semibold uppercase tracking-wide ${variant === "cs" ? "text-cs" : variant === "sdr" ? "text-sdr" : styles.sectionTitle}`}>
                  Requisitos Obrigatórios
                </span>
              </div>
              <div className="space-y-1">
                {requirements.map((req, index) => (
                  <p key={index} className={`text-sm font-medium ${variant === "cs" ? "text-cs" : variant === "sdr" ? "text-sdr" : styles.text}`}>
                    ⚠️ {req}
                  </p>
                ))}
              </div>
            </div>
          )}

          {/* Not Responsible */}
          {notResponsible && notResponsible.length > 0 && (
            <div className={`mt-4 pt-4 border-t ${styles.sectionBorder}`}>
              <p className={`text-xs font-semibold uppercase tracking-wide mb-2 ${styles.sectionTitle}`}>
                Não é responsável por
              </p>
              <div className="space-y-1">
                {notResponsible.map((item, index) => (
                  <p key={index} className={`text-sm ${styles.text} opacity-70`}>
                    • {item}
                  </p>
                ))}
              </div>
            </div>
          )}
        </>
      )}

      {/* Expand Button */}
      <button
        onClick={() => setExpanded(!expanded)}
        className={`flex items-center gap-1 text-sm font-medium mt-4 transition-colors ${styles.expandBtn}`}
      >
        {expanded ? (
          <>
            <ChevronUp className="w-4 h-4" />
            Ver menos
          </>
        ) : (
          <>
            <ChevronDown className="w-4 h-4" />
            Ver detalhes completos
          </>
        )}
      </button>
    </div>
  );
}
