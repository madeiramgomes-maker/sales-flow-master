import { ArrowRight, User, UserCheck, FileText, CheckCircle2, Handshake } from "lucide-react";

const steps = [
  {
    icon: User,
    title: "Lead Entra",
    description: "SDR assume",
    color: "sdr",
  },
  {
    icon: UserCheck,
    title: "Qualificação",
    description: "CRM + Cadência",
    color: "sdr",
  },
  {
    icon: Handshake,
    title: "SQL Qualificado",
    description: "Filipe recebe",
    color: "leader",
  },
  {
    icon: FileText,
    title: "Documentos",
    description: "CS assume",
    color: "cs",
  },
  {
    icon: CheckCircle2,
    title: "Pré-aprovação",
    description: "Doc. aprovada",
    color: "cs",
  },
  {
    icon: Handshake,
    title: "Fechamento",
    description: "Filipe finaliza",
    color: "leader",
  },
];

const colorClasses = {
  sdr: {
    bg: "bg-sdr/10",
    icon: "text-sdr",
    border: "border-sdr/30",
  },
  cs: {
    bg: "bg-cs/10",
    icon: "text-cs",
    border: "border-cs/30",
  },
  leader: {
    bg: "bg-leader/10",
    icon: "text-leader",
    border: "border-leader/30",
  },
};

export function ProcessFlow() {
  return (
    <div className="w-full">
      <h2 className="font-display text-2xl font-bold text-foreground mb-8 text-center">
        Fluxo do Processo
      </h2>

      {/* Desktop Flow */}
      <div className="hidden lg:flex items-center justify-between gap-2">
        {steps.map((step, index) => {
          const Icon = step.icon;
          const colors = colorClasses[step.color as keyof typeof colorClasses];

          return (
            <div key={index} className="flex items-center">
              <div
                className={`flow-step border ${colors.border} ${colors.bg} animate-slide-up`}
                style={{ animationDelay: `${800 + index * 100}ms` }}
              >
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg ${colors.bg}`}>
                    <Icon className={`w-5 h-5 ${colors.icon}`} />
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-foreground">{step.title}</p>
                    <p className="text-xs text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              </div>
              {index < steps.length - 1 && (
                <ArrowRight className="w-5 h-5 text-muted-foreground/50 mx-1 flex-shrink-0" />
              )}
            </div>
          );
        })}
      </div>

      {/* Mobile/Tablet Flow */}
      <div className="lg:hidden grid grid-cols-2 md:grid-cols-3 gap-4">
        {steps.map((step, index) => {
          const Icon = step.icon;
          const colors = colorClasses[step.color as keyof typeof colorClasses];

          return (
            <div
              key={index}
              className={`flow-step border ${colors.border} ${colors.bg} animate-slide-up`}
              style={{ animationDelay: `${800 + index * 100}ms` }}
            >
              <div className="flex items-center gap-3">
                <div className={`p-2 rounded-lg ${colors.bg}`}>
                  <Icon className={`w-5 h-5 ${colors.icon}`} />
                </div>
                <div>
                  <p className="font-semibold text-sm text-foreground">{step.title}</p>
                  <p className="text-xs text-muted-foreground">{step.description}</p>
                </div>
              </div>
              {index < steps.length - 1 && (
                <div className="absolute -right-3 top-1/2 -translate-y-1/2 hidden md:block">
                  <span className="text-muted-foreground/40 text-lg">→</span>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
