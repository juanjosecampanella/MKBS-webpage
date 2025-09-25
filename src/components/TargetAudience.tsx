import { CheckCircle, X } from "lucide-react";

export const TargetAudience = () => {
  const idealClient = [
    "Tienen un equipo interno, pero necesitan dirección real.",
    "Quieren dejar de improvisar y escalar con una estrategia sólida.",
    "Ya invierten en marketing, pero no ven retorno claro.",
    "Buscan delegar sin perder el control.",
    "Necesitan un socio que piense en el negocio, no solo en los clics."
  ];

  const notFor = [
    "Negocios que están comenzando",
    "Quienes aún no han validado su oferta"
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              ¿Para quién es este servicio?
            </h2>
            <p className="text-xl text-muted-foreground">
              Este servicio está diseñado específicamente para empresas que buscan 
              profesionalizar y escalar su marketing digital.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Ideal para */}
            <div className="bg-card border border-border rounded-xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-success/10 rounded-lg flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-success" />
                </div>
                <h3 className="text-2xl font-bold text-card-foreground">
                  Este servicio es para empresas que:
                </h3>
              </div>
              
              <div className="space-y-4">
                {idealClient.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                    <p className="text-muted-foreground">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* No es para */}
            <div className="bg-card border border-border rounded-xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-destructive/10 rounded-lg flex items-center justify-center">
                  <X className="w-6 h-6 text-destructive" />
                </div>
                <h3 className="text-2xl font-bold text-card-foreground">
                  No es para:
                </h3>
              </div>
              
              <div className="space-y-4">
                {notFor.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <X className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                    <p className="text-muted-foreground">
                      {item}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-4 bg-muted rounded-lg">
                <p className="text-sm text-muted-foreground">
                  <strong>Importante:</strong> Este servicio requiere que tu empresa 
                  ya tenga una base sólida y esté lista para escalar de manera profesional.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-12 text-center">
            <div className="bg-primary rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold text-primary-foreground mb-4">
                ¿Tu empresa está lista para dar el siguiente paso?
              </h3>
              <p className="text-lg text-primary-foreground/90 mb-6">
                Si tu respuesta es "sí" a la mayoría de los puntos anteriores, 
                este servicio puede transformar tu marketing digital.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};