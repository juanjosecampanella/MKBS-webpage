import { Search, Map, Cog, BarChart3 } from "lucide-react";

export const Methodology = () => {
  const steps = [
    {
      step: "1",
      icon: Search,
      title: "Diagnóstico estratégico",
      description: "Evaluamos tu presencia actual, canales activos y brechas."
    },
    {
      step: "2", 
      icon: Map,
      title: "Hoja de ruta personalizada",
      description: "Definimos las prioridades, objetivos y oportunidades de alto impacto."
    },
    {
      step: "3",
      icon: Cog,
      title: "Ejecución supervisada", 
      description: "Coordinamos campañas, contenidos, pauta y equipo."
    },
    {
      step: "4",
      icon: BarChart3,
      title: "Seguimiento + reporting",
      description: "Reuniones quincenales, informes y dashboards accionables."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Nuestra Metodología
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Un proceso estructurado y probado para transformar tu marketing digital 
              de tácticas dispersas a estrategia cohesiva.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div key={index} className="relative">
                  <div className="bg-card border border-border rounded-xl p-6 hover:shadow-card transition-all duration-300">
                    <div className="flex items-start gap-4">
                      {/* Step Number */}
                      <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg flex-shrink-0">
                        {step.step}
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <IconComponent className="w-6 h-6 text-primary" />
                          <h3 className="text-xl font-semibold text-card-foreground">
                            {step.title}
                          </h3>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Connection Line (except for last item on desktop) */}
                  {index < steps.length - 1 && index % 2 === 0 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-border"></div>
                  )}
                  {index < steps.length - 1 && index % 2 === 1 && (
                    <div className="hidden lg:block absolute top-1/2 -left-4 w-8 h-0.5 bg-border"></div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-subtle border border-border rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Metodología probada con resultados medibles
              </h3>
              <p className="text-muted-foreground text-lg">
                Cada paso está diseñado para generar valor tangible y construir 
                sobre los resultados del anterior.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};