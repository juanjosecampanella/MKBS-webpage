import { ArrowUpRight } from "lucide-react";
import constructoraBolivar from '@/assets/constructora-bolivar.png';
import scarsaBoutique from '@/assets/scarsa.webp';
import lCepeda from '@/assets/lcepeda.png';
import sirf from '@/assets/sirf.png';
import lavi from '@/assets/lavi.png';
import bojanini from '@/assets/bojanini.jpeg';

export const CaseStudies = () => {
  const cases = [
    {
      company: "Constructora Bolívar",
      Image: constructoraBolivar,
      challenge: "Gestionar estrategia digital para 3 proyectos inmobiliarios activos.",
      solution: "Dirección creativa y operativa de contenido audiovisual, embudos digitales y análisis de comunicación.",
      result: "3400 leads calificados y procesos estandarizados entre ciudades.",
      metric: "+3400",
      metricLabel: "Leads calificados"
    },
    {
      company: "Scarsa Boutique", 
      Image: scarsaBoutique,
      challenge: "Transformar su operación de tienda física a digital tras cambio de marca.",
      solution: "Acompañamiento completo por más de un año en estrategia de marca y posicionamiento, contenidos, ecommerce, pauta y capacitación del equipo.",
      result: "1600 millones de pesos en ventas digitales en 3 meses. Hoy operan su marketing de forma independiente.",
      metric: "$1600M",
      metricLabel: "Ventas en 3 meses"
    },
    {
      company: "LCepeda",
      Image: lCepeda,
      challenge: "Posicionarla como un referente en el mercado internacional.",
      solution: "Reestructuración estratégica, ecommerce, performance digital y capacitación interna.",
      result: "ROI superior al 1000%. Ventas mensuales de $9.000 USD con $800 USD en pauta.",
      metric: "11",
      metricLabel: "de ROI"
    },
    {
      company: "SIRF",
      Image: sirf,
      challenge: "Estructurar su oferta educativa digital y escalarla comercialmente.",
      solution: "Diagnóstico estratégico, narrativa digital, embudo comercial y pauta.",
      result: "Vendemos más de 140 millones mensuales con un ROI de 28. Oferta digital clara y lista para escalar.",
      metric: "140M+",
      metricLabel: "Ventas mensuales"
    },
    {
      company: "Lavi by Majo Lavi",
      Image: lavi,
      challenge: "No contaba con una estrategia clara ni resultados consistentes.",
      solution: "Plan estratégico, contenido alineado y prueba de pauta dirigida.",
      result: "$24.000 USD en ventas con $2.500 USD de inversión en 1 mes.",
      metric: "$24K",
      metricLabel: "Ventas en 1 mes"
    },
    {
      company: "Bojanini Experts",
      Image: bojanini,
      challenge: "Mejorar el retorno de inversión publicitaria digital.",
      solution: "Dirección de campañas mensuales y optimización de segmentación.",
      result: "13,772 leads calificados en 7 meses con presupuesto fijo de pauta.",
      metric: "13,772",
      metricLabel: "Leads en 7 meses"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Casos de Éxito – Resultados comprobados
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              Conectamos estrategia con resultados. Estas empresas confiaron en Merkabah para 
              dirigir su marketing digital de forma profesional y hoy tienen estructuras claras, 
              equipos empoderados y resultados medibles.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {cases.map((caseStudy, index) => {
              const ImageComponent = caseStudy.Image;
              return (
                <div 
                  key={index}
                  className="bg-card border border-border rounded-xl p-6 hover:shadow-card transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                        <img 
                          src={ImageComponent} 
                          alt={caseStudy.company} 
                          className="w-8 h-8 object-contain" 
                        />
                      </div>
                      <h3 className="text-xl font-bold text-card-foreground">
                        {caseStudy.company}
                      </h3>
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-muted-foreground" />
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-card-foreground mb-2">Reto:</h4>
                      <p className="text-muted-foreground text-sm">
                        {caseStudy.challenge}
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-card-foreground mb-2">Solución:</h4>
                      <p className="text-muted-foreground text-sm">
                        {caseStudy.solution}
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-card-foreground mb-2">Resultado:</h4>
                      <p className="text-muted-foreground text-sm">
                        {caseStudy.result}
                      </p>
                    </div>
                  </div>

                  {/* Metric Highlight */}
                  <div className="mt-6 p-4 bg-gradient-primary rounded-lg">
                    <div className="text-center">
                      <p className="text-2xl font-bold text-primary-foreground">
                        {caseStudy.metric}
                      </p>
                      <p className="text-sm text-primary-foreground/80">
                        {caseStudy.metricLabel}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-16 text-center">
            <div className="bg-gradient-subtle border border-border rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Resultados que hablan por sí mismos
              </h3>
              <p className="text-muted-foreground text-lg">
                Cada caso representa un enfoque personalizado y resultados medibles. 
                Tu empresa podría ser la siguiente historia de éxito.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};