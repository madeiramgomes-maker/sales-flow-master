import { Users, TrendingUp, ArrowRight } from "lucide-react";

export function StructureSection() {
  return (
    <section className="mb-12 py-8 px-6 bg-card rounded-2xl border border-border">
      <h2 className="font-display text-2xl font-bold text-foreground mb-6 text-center">
        Estrutura do Time
      </h2>
      
      <div className="grid md:grid-cols-2 gap-6">
        {/* Current Structure */}
        <div className="p-5 rounded-xl bg-muted/30 border border-border/50">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-lg bg-sdr/10">
              <Users className="w-5 h-5 text-sdr" />
            </div>
            <h3 className="font-semibold text-foreground">Estrutura Atual</h3>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-sdr" />
              <span className="text-sm text-muted-foreground">1 SDR (Qualificação / Inside Sales)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-cs" />
              <span className="text-sm text-muted-foreground">1 CS (Customer Success / Conversão)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-leader" />
              <span className="text-sm text-muted-foreground">Filipe como Ops Manager (temporário)</span>
            </div>
          </div>
        </div>

        {/* Future Growth */}
        <div className="p-5 rounded-xl bg-gradient-to-br from-leader/5 to-cs/5 border border-leader/20">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-lg bg-leader/10">
              <TrendingUp className="w-5 h-5 text-leader" />
            </div>
            <h3 className="font-semibold text-foreground">Crescimento Futuro</h3>
          </div>
          <div className="flex items-center gap-4">
            <div className="space-y-2 flex-1">
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-leader">+1 CS</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-leader">+1 Gestor</span>
              </div>
            </div>
            <ArrowRight className="w-5 h-5 text-muted-foreground/50" />
            <div className="text-right">
              <p className="text-xs text-muted-foreground">Próxima fase</p>
              <p className="text-sm font-semibold text-foreground">Escalar operação</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
