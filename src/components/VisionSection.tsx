import { Target, Database, Clock, Heart, TrendingUp, Users } from "lucide-react";

const principles = [
  {
    icon: Clock,
    title: "Processo Operacional",
    description: "Execução disciplinada, sem improviso",
  },
  {
    icon: Target,
    title: "Cadência Religiosa",
    description: "Seguir exatamente o definido, sem pular etapas",
  },
  {
    icon: Database,
    title: "CRM como Centro",
    description: "Processo pertence ao time, não a uma pessoa",
  },
  {
    icon: Heart,
    title: "Venda Consultiva",
    description: "Não agressiva, foco no cliente",
  },
  {
    icon: TrendingUp,
    title: "Gestão de Pipeline",
    description: "Não fechar no impulso",
  },
  {
    icon: Users,
    title: "Fechamento",
    description: "Papel exclusivo do Filipe",
  },
];

export function VisionSection() {
  return (
    <section className="mb-12 py-8 px-6 bg-card rounded-2xl border border-border">
      <h2 className="font-display text-2xl font-bold text-foreground mb-6 text-center">
        Visão Geral
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {principles.map((principle, index) => {
          const Icon = principle.icon;
          return (
            <div
              key={index}
              className="flex flex-col items-center text-center p-4 rounded-xl bg-muted/30 border border-border/50 animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="p-3 rounded-full bg-leader/10 mb-3">
                <Icon className="w-5 h-5 text-leader" />
              </div>
              <h3 className="font-semibold text-sm text-foreground mb-1">
                {principle.title}
              </h3>
              <p className="text-xs text-muted-foreground">
                {principle.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
