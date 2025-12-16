import { Crown, Headphones, Users, Building2 } from "lucide-react";
import { OrgCard } from "@/components/OrgCard";
import { ProcessFlow } from "@/components/ProcessFlow";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="py-8 px-4 border-b border-border bg-card">
        <div className="max-w-6xl mx-auto flex items-center gap-4">
          <div className="p-3 rounded-xl bg-leader/10">
            <Building2 className="w-8 h-8 text-leader" />
          </div>
          <div>
            <h1 className="font-display text-2xl md:text-3xl font-bold text-foreground">
              Estrutura Comercial
            </h1>
            <p className="text-muted-foreground text-sm md:text-base">
              Organograma e definição de funções
            </p>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-12">
        {/* Org Chart */}
        <section className="mb-20 relative">
          {/* Leader Card - Centered */}
          <div className="flex justify-center mb-8">
            <div className="w-full max-w-md">
              <OrgCard
                variant="leader"
                name="Filipe"
                role="Ops Manager & Closer"
                subtitle="Liderança Estratégica"
                icon={<Crown className="w-6 h-6 text-primary-foreground" />}
                delay={0}
                responsibilities={[
                  "Ser o dono do processo comercial",
                  "Garantir que a operação siga o modelo definido (cadência + CRM)",
                  "Atuar como closer (fechamento final)",
                  "Receber SQLs qualificados do SDR",
                  "Participar de reuniões estratégicas com SDR e CS",
                  "Analisar pipeline e gargalos",
                  "Ajustar cadências, scripts e critérios de qualificação",
                ]}
                notResponsible={[
                  "Fazer follow-up operacional",
                  "Perseguir documentos",
                  "Executar cadência de lead",
                ]}
              />
            </div>
          </div>

          {/* Connector Visual */}
          <div className="flex justify-center mb-8">
            <div className="flex flex-col items-center">
              <div className="w-0.5 h-8 bg-gradient-to-b from-leader/40 to-border" />
              <div className="w-64 lg:w-[500px] h-0.5 bg-border" />
              <div className="flex justify-between w-64 lg:w-[500px]">
                <div className="w-0.5 h-8 bg-gradient-to-b from-border to-sdr/40" />
                <div className="w-0.5 h-8 bg-gradient-to-b from-border to-cs/40" />
              </div>
            </div>
          </div>

          {/* Team Cards */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* SDR Card */}
            <OrgCard
              variant="sdr"
              name="SDR"
              role="Qualificação / Inside Sales"
              subtitle="Velocidade & Organização"
              icon={<Headphones className="w-6 h-6 text-sdr" />}
              reportTo="Filipe"
              delay={200}
              responsibilities={[
                "Executar 100% da cadência de New Lead",
                "Contatar leads em até 5 minutos",
                "Qualificar: Perfil, Urgência, Renda",
                "Registrar absolutamente tudo no CRM",
                "Entregar SQL limpo e bem classificado",
                "Fazer follow-ups humanos, estratégicos e emocionais",
                "Acompanhar Cliente Parcial (até 21 dias)",
                "Acompanhar fase inicial de Documentos (até 3 meses)",
              ]}
              notResponsible={[
                "Acompanhar lead congelado por longo prazo",
                "Fazer gestão de aprovação",
              ]}
            />

            {/* CS Card */}
            <OrgCard
              variant="cs"
              name="CS"
              role="Customer Success / Conversão"
              subtitle="Conversão Real"
              icon={<Users className="w-6 h-6 text-cs" />}
              reportTo="Filipe"
              delay={400}
              responsibilities={[
                "Garantir envio e aprovação da documentação",
                "Fazer follow-up ativo da documentação",
                "Acompanhar grupos com loan officers",
                "Comunicar-se com secretarias / loan officers",
                "Assegurar cumprimento de marcos e prazos",
                "Levar o cliente até a pré-aprovação",
                "Chat e calls de follow-up",
              ]}
              notResponsible={[
                "Requisito Obrigatório: Inglês fluente",
              ]}
            />
          </div>
        </section>

        {/* Process Flow */}
        <section className="py-12 px-6 bg-card rounded-2xl border border-border">
          <ProcessFlow />
        </section>

        {/* Legend */}
        <section className="mt-12 flex flex-wrap justify-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-leader" />
            <span className="text-sm text-muted-foreground">Liderança / Fechamento</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-sdr" />
            <span className="text-sm text-muted-foreground">Qualificação (SDR)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-cs" />
            <span className="text-sm text-muted-foreground">Customer Success (CS)</span>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-6 px-4 border-t border-border bg-card/50">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-sm text-muted-foreground">
            Estrutura Comercial © {new Date().getFullYear()}
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
