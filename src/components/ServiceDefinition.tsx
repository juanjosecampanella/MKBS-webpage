import { CheckCircle, Target, BarChart3, TrendingUp, Users } from "lucide-react";

export const ServiceDefinition = () => {
  const features = [
    {
      icon: Target,
      title: "Diagnosticar tu ecosistema digital actual",
      description: "Evaluamos tu presencia, canales activos y oportunidades de mejora."
    },
    {
      icon: BarChart3,
      title: "Definir la hoja de ruta con base en tus objetivos reales",
      description: "Creamos un plan estratégico alineado con tus metas comerciales."
    },
    {
      icon: TrendingUp,
      title: "Ejecutar campañas alineadas con tu posicionamiento",
      description: "Implementamos acciones coherentes con tu marca y objetivos."
    },
    {
      icon: Users,
      title: "Medir, optimizar y tomar decisiones basadas en data",
      description: "Análisis continuo para maximizar el retorno de inversión."
    }
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              ¿Qué es la Dirección Estratégica de Marketing Digital?
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Es un servicio donde asumimos el rol de{" "}
                <span className="font-semibold text-primary">Director de Marketing externo</span> de tu empresa, 
                con visión estratégica, ejecución precisa y foco en resultados.
              </p>
              <p className="text-lg text-muted-foreground">
                Nos integramos con tu equipo interno para:
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div 
                  key={index}
                  className="bg-card border border-border rounded-xl p-6 hover:shadow-card transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-card-foreground mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="bg-card border border-border rounded-2xl p-8 text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <CheckCircle className="w-8 h-8 text-success" />
              <span className="text-2xl font-bold text-card-foreground">
                No somos una agencia más
              </span>
            </div>
            <p className="text-lg text-muted-foreground">
              Somos la dirección estratégica que tu empresa necesita para ejecutar con claridad.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};