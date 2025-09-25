import { Button } from "@/components/ui/button";
import { ArrowRight, Banknote, TrendingUp, Users } from "lucide-react";
import heroImage from "@/assets/hero-team.jpg";

export const Hero = () => {
  const scrollToForm = () => {
    const formSection = document.getElementById('contact-form');
    formSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative bg-gradient-subtle min-h-screen flex items-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                Dirección Estratégica de{" "}
                <span className="text-primary font-bold">
                  Marketing Digital
                </span>{" "}
                para Empresas
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                Nos integramos como tu equipo externo de marketing para dirigir, 
                ejecutar y escalar tus resultados digitales.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="hero" 
                size="lg" 
                onClick={scrollToForm}
                className="text-lg px-8 py-4 h-auto bg-gradient-hero text-white hover:opacity-90 transition-opacity"
              >
                Agenda una sesión estratégica
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="text-lg px-8 py-4 h-auto"
              >
                Ver casos de éxito
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Banknote className="w-8 h-8 text-primary" />
                </div>
                <p className="text-sm text-muted-foreground">Estrategia Rentable</p>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <TrendingUp className="w-8 h-8 text-success" />
                </div>
                <p className="text-sm text-muted-foreground">Resultados Medibles</p>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Users className="w-8 h-8 text-accent" />
                </div>
                <p className="text-sm text-muted-foreground">Equipo Integrado</p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-card">
              <img 
                src={heroImage} 
                alt="Equipo de estrategia digital de Merkabah trabajando en sesión estratégica"
                className="w-full h-auto object-cover"
                width={600}
                height={400}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
            
            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-card border border-border rounded-lg p-4 shadow-elegant">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-success rounded-full flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-success-foreground" />
                </div>
                <div>
                  <p className="font-semibold text-card-foreground">+1000% ROI</p>
                  <p className="text-sm text-muted-foreground">Promedio clientes</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};