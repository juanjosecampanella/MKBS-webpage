import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Phone, Mail, Calendar } from "lucide-react";

export const ContactForm = () => {
  const handleContactClick = () => {
    // This would typically open a Tally form or similar
    window.open('https://tally.so/r/your-form-id', '_blank');
  };

  return (
    <section id="contact-form" className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-6 mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground">
              ¿Y tu empresa?
            </h2>
            <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
              Con Merkabah, no improvisas. Diseñamos, dirigimos y ejecutamos una 
              estrategia digital que sí convierte.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* CTA Card */}
            <Card className="p-6 bg-background/95 backdrop-blur-sm border-background/20">
              <div className="space-y-6">
                <div className="p-4 space-y-5">
                  <h3 className="text-2xl font-bold text-card-foreground">
                    Diagnóstico estratégico sin compromiso
                  </h3>
                  <p className="text-muted-foreground">
                    Agenda una sesión de 45 minutos donde analizaremos tu situación actual 
                    y te mostraremos oportunidades específicas para tu empresa.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-primary" />
                    <span className="text-muted-foreground">45 minutos de análisis</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-primary" />
                    <span className="text-muted-foreground">Videollamada personalizada</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-primary" />
                    <span className="text-muted-foreground">Reporte de hallazgos</span>
                  </div>
                </div>

                <Button 
                  variant="hero" 
                  size="lg" 
                  onClick={handleContactClick}
                  className="w-full text-lg h-auto py-4"
                >
                  Quiero una sesión estratégica
                  <ArrowRight className="w-5 h-5" />
                </Button>

                <p className="text-sm text-muted-foreground">
                  * Sin compromiso. Solo empresas que ya invierten en marketing digital.
                </p>
              </div>
            </Card>

            {/* Benefits */}
            <div className="p-7 space-y-6 text-left">
              <h3 className="text-2xl font-bold text-primary-foreground">
                En esta sesión obtendrás:
              </h3>
              
              <div className="space-y-4">
                {[
                  "Diagnóstico completo: QUÉ estás haciendo actualmente y por qué no está funcionando",
                  "Visión estratégica: QUÉ deberías estar haciendo para maximizar resultados",
                  "Plan de acción: QUÉ necesitas específicamente para lograrlo (recursos, procesos, equipo)",
                  "Proyección realista de ROI basada en tu situación actual",
                  "Próximos pasos priorizados para los primeros 90 días"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary-foreground rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                    </div>
                    <p className="text-primary-foreground/90">
                      {benefit}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};