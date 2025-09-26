import { Hero } from "@/components/Hero";
import { ProblemSection } from "@/components/ProblemSection";
import { ServiceDefinition } from "@/components/ServiceDefinition";
import { Methodology } from "@/components/Methodology";
import { TargetAudience } from "@/components/TargetAudience";
import { CaseStudies } from "@/components/CaseStudies";
import { Testimonials } from "@/components/Testimonials";
import { ContactForm } from "@/components/ContactForm";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <ProblemSection />
      <ServiceDefinition /> 
      <Methodology />
      <TargetAudience />
      <CaseStudies />
      <Testimonials />
      <ContactForm />
    </main>
  );
};

export default Index;