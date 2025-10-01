import team from "@/assets/_DSC7245.jpg"
import { InstagramLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons"
import MultiStepForm from "./ui/MultiStepForm";

export const RegistrationForm = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] min-h-screen">
        {/* Lado derecho / Imagen y Contenido Hero - Primero en móvil */}
        <div className="relative w-full min-h-[450px] lg:min-h-screen order-1 lg:order-2">
          <img
            src={team}
            alt="Equipo de marketing digital"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-black/80 lg:bg-gradient-to-r lg:from-black/70 lg:via-black/70 lg:to-black/60" />

          {/* Contenido Hero */}
          <div className="relative h-full flex flex-col items-center justify-center text-center text-white px-6 py-12 lg:px-8">
            <div className="max-w-xl mx-auto space-y-6">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                La Estrategia que tu Empresa Necesita para Crecer
              </h1>

              <div className="w-20 h-1 bg-[hsl(var(--primary))] mx-auto rounded-full" />

              <p className="text-base sm:text-lg lg:text-xl text-gray-200 leading-relaxed">
                En 45 minutos te mostraremos qué está fallando, qué deberías estar haciendo
                y el plan para escalar tus resultados digitales
              </p>

              {/* Iconos sociales - Solo visible en desktop */}
              <div className="hidden lg:flex justify-center space-x-8 pt-6">
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-pink-500 transition-all duration-300 hover:scale-110"
                  aria-label="Instagram"
                >
                  <InstagramLogoIcon className="w-7 h-7" />
                </a>

                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-blue-400 transition-all duration-300 hover:scale-110"
                  aria-label="LinkedIn"
                >
                  <LinkedInLogoIcon className="w-7 h-7" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Lado izquierdo / Formulario - Segundo en móvil */}
        <div className="flex flex-col items-center justify-center px-6 py-12 lg:px-12 order-2 lg:order-1 bg-background">
          <div className="w-full max-w-2xl">
            <div className="mb-8 text-center lg:text-left">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">
                Agendemos una sesión
              </h2>
              <div className="w-16 h-1 bg-[hsl(var(--primary))] mx-auto lg:mx-0 rounded-full" />
            </div>

            <MultiStepForm />

            {/* Iconos sociales - Solo visible en móvil y tablet */}
            <div className="flex lg:hidden justify-center space-x-8 mt-12 pt-8 border-t border-border">
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-pink-500 transition-all duration-300 hover:scale-110"
                aria-label="Instagram"
              >
                <InstagramLogoIcon className="w-7 h-7" />
              </a>

              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-blue-500 transition-all duration-300 hover:scale-110"
                aria-label="LinkedIn"
              >
                <LinkedInLogoIcon className="w-7 h-7" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
