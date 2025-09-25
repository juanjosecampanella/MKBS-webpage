import { AlertTriangle, BarChart3, Users, DollarSign } from "lucide-react";

export const ProblemSection = () => {
  const problems = [
    {
      icon: BarChart3,
      text: "Tienes campañas, pero no sabes si están funcionando bien."
    },
    {
      icon: Users,
      text: "Tu equipo interno necesita dirección, pero nadie lo asume."
    },
    {
      icon: DollarSign,
      text: "No sabes si estás invirtiendo bien tu presupuesto digital."
    },
    {
      icon: AlertTriangle,
      text: "Has trabajado con agencias, pero nadie ve el negocio como tú."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-6 mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
              ¿Tu marketing digital está activo, pero no está{" "}
              <span className="text-accent">alineado con tus metas comerciales?</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {problems.map((problem, index) => {
              const IconComponent = problem.icon;
              return (
                <div 
                  key={index}
                  className="bg-card border border-border rounded-lg p-6 text-left hover:shadow-card transition-shadow duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-destructive/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <IconComponent className="w-5 h-5 text-destructive" />
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {problem.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="bg-gradient-primary rounded-2xl p-8 text-center">
            <p className="text-lg text-primary-foreground font-medium">
              👉 Esta es la señal de que necesitas{" "}
              <span className="font-bold">Dirección Estratégica real, no más tácticas aisladas.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};