import { useState } from "react";
import { Input } from "./input";
import { Button } from "./button";
import { CheckIcon } from "@radix-ui/react-icons";

export default function MultiStepForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    Name: "",
    Correo: "",
    celular: "",
    empresa: "",
    inversionMensual: [] as string[],
    disposicion: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;

  if (type === "checkbox") {
    let newArray = [...formData.inversionMensual];
    if (checked) {
      newArray.push(value);
    } else {
      newArray = newArray.filter((v) => v !== value);
    }
    setFormData({ ...formData, inversionMensual: newArray });
  } else if (type === "radio") {
    setFormData({ ...formData, [name]: value });
  } else {
    setFormData({ ...formData, [name]: value });
  }
};

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const scriptURL = "https://script.google.com/macros/s/AKfycbyJKyD8MeSwZgvnUnuI51MBlQQQXstvf4raTkZm24Oy2xiKJyXrf1x1AaUP9Xb_EvwFKQ/exec";

  try {
    const response = await fetch(scriptURL, {
      method: "POST",
      mode: "cors",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const result = await response.json();
    console.log("✅ Datos enviados:", result);
    alert("Formulario enviado correctamente");
  } catch (error) {
    console.error("❌ Error:", error);
    alert("Hubo un error al enviar el formulario");
  }
};

  const steps = [
    { label: "Información de contacto", shortLabel: "Personal" },
    { label: "Inversión y Presupuesto", shortLabel: "Inversión" },
  ];

  return (
    <div className="relative flex flex-col justify-start w-full max-w-2xl mx-auto min-h-[550px] gap-8 px-4 sm:px-6 lg:px-8 py-8">
      
      {/* Stepper mejorado */}
      <nav aria-label="Progreso del formulario">
        <ol className="flex items-center justify-between w-full gap-2 sm:gap-4">
          {steps.map((s, index) => {
            const stepIndex = index + 1;
            const isActive = step === stepIndex;
            const isCompleted = step > stepIndex;

            return (
              <li key={index} className="flex items-center flex-1">
                <div className="flex items-center gap-2 sm:gap-3 flex-1">
                  {/* Círculo con animación */}
                  <div
                    className={cn(
                      "flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full font-semibold text-sm sm:text-base shrink-0 transition-all duration-300",
                      isCompleted
                        ? "bg-[hsl(var(--step-completed))] text-green scale-100"
                        : isActive
                        ? "border border-[hsl(var(--step-active))] text-[hsl(var(--step-active))] bg-transparent scale-110"
                        : "bg-muted text-[hsl(var(--step-inactive))] border-2 border-border"
                    )}
                  >
                    {isCompleted ? (
                      <CheckIcon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    ) : (
                      stepIndex
                    )}
                  </div>

                  {/* Texto del paso */}
                  <span
                    className={cn(
                      "text-xs sm:text-sm font-medium transition-colors duration-300",
                      isActive || isCompleted
                        ? "text-foreground"
                        : "text-muted-foreground"
                    )}
                  >
                    <span className="hidden sm:inline">{s.label}</span>
                    <span className="sm:hidden">{s.shortLabel}</span>
                  </span>
                </div>

                {/* Conector entre pasos */}
                {index !== steps.length - 1 && (
                  <div className="flex-1 h-[2px] mx-2 sm:mx-4 bg-border relative overflow-hidden">
                    <div
                      className={cn(
                        "absolute inset-0 bg-[hsl(var(--step-completed))] transition-transform duration-500 origin-left",
                        isCompleted ? "scale-x-100" : "scale-x-0"
                      )}
                    />
                  </div>
                )}
              </li>
            );
          })}
        </ol>
      </nav>

      {/* Contenedor de formularios con animación suave */}
      <div className="relative flex-1 min-h-[460px] overflow-hidden">
        {/* Paso 1: Información Personal */}
        <div
          className={cn(
            "absolute inset-0 transition-all duration-500 ease-in-out",
            step === 1
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-full pointer-events-none"
          )}
        >
          <div className="w-full max-w-lg mx-auto space-y-5">
            <div className="mb-6">
              <h2 className="text-2xl font-semibold text-foreground mb-2">
                Información de contacto
              </h2>
              <p className="text-sm text-muted-foreground">
                Por favor completa tus datos de contacto
              </p>
            </div>

            <Input
              id="Name"
              label="Nombre Completo"
              name="Name"
              value={formData.Name}
              onChange={handleChange}
              placeholder="Ej: Juan Pérez"
              required
            />
            <Input
              id="Correo"
              label="Correo Electrónico"
              name="Correo"
              type="email"
              value={formData.Correo}
              onChange={handleChange}
              placeholder="ejemplo@empresa.com"
              required
            />
            <Input
              id="celular"
              label="Número de Celular"
              name="celular"
              type="tel"
              value={formData.celular}
              onChange={handleChange}
              placeholder="+57 300 123 4567"
              required
            />
            <Input
              id="empresa"
              label="Nombre de la Empresa"
              name="empresa"
              value={formData.empresa}
              onChange={handleChange}
              placeholder="Tu Empresa S.A.S"
              required
            />

            <div className="pt-4">
              <Button
                type="button"
                onClick={() => setStep(2)}
                variant="default"
                size="lg"
                className="w-full"
              >
                Siguiente
              </Button>
            </div>
          </div>
        </div>

        {/* Paso 2: Inversión */}
        <div
          className={cn(
            "absolute inset-0 transition-all duration-500 ease-in-out",
            step === 2
              ? "opacity-100 translate-x-0"
              : "opacity-0 translate-x-full pointer-events-none"
          )}
        >
          <form onSubmit={handleSubmit} className="w-full max-w-lg mx-auto space-y-6">
            <div className="mb-6">
              <h2 className="text-2xl font-semibold text-foreground mb-2">
                Inversión y Presupuesto
              </h2>
              <p className="text-sm text-muted-foreground">
                Ayúdanos a entender tu inversión en marketing
              </p>
            </div>

            {/* Pregunta checkboxes */}
            <div className="space-y-4">
              <label className="block text-base font-medium text-[hsl(var(--form-label))]">
                ¿Cuál es tu rango de inversión mensual en marketing digital?
              </label>
              <div className="space-y-3">
                {[
                  { value: "menos5M", label: "Menos de 5M COP" },
                  { value: "entre5y10M", label: "Entre 5M y 10M COP" },
                  { value: "mas10M", label: "Más de 10M COP" }
                ].map((option) => (
                  <label
                    key={option.value}
                    className="flex items-center space-x-3 cursor-pointer group"
                  >
                    <input
                      type="checkbox"
                      name="inversionMensual"
                      value={option.value}
                      onChange={handleChange}
                      checked={formData.inversionMensual.includes(option.value)}
                      className="w-5 h-5 rounded border-input text-[hsl(var(--primary))] 
                               focus:ring-2 focus:ring-[hsl(var(--form-focus))] focus:ring-offset-2
                               transition-all cursor-pointer"
                    />
                    <span className="text-sm text-foreground group-hover:text-[hsl(var(--primary))] transition-colors">
                      {option.label}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Pregunta radio buttons */}
            <div className="space-y-4 pt-2">
              <label className="block text-base font-medium text-[hsl(var(--form-label))]">
                ¿Cuánto estás dispuesto a invertir en marketing?
              </label>
              <div className="space-y-3">
                {[
                  { value: "menos5M", label: "Menos de 5M COP" },
                  { value: "entre5y10M", label: "Entre 5M y 10M COP" },
                  { value: "mas10M", label: "Más de 10M COP" }
                ].map((option) => (
                  <label
                    key={option.value}
                    className="flex items-center space-x-3 cursor-pointer group"
                  >
                    <input
                      type="radio"
                      name="disposicion"
                      value={option.value}
                      onChange={handleChange}
                      checked={formData.disposicion === option.value}
                      className="w-5 h-5 border-input text-[hsl(var(--primary))]
                               focus:ring-2 focus:ring-[hsl(var(--form-focus))] focus:ring-offset-2
                               transition-all cursor-pointer"
                    />
                    <span className="text-sm text-foreground group-hover:text-[hsl(var(--primary))] transition-colors">
                      {option.label}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Botones de navegación */}
            <div className="flex flex-col sm:flex-row gap-3 pt-6">
              <Button
                type="button"
                onClick={() => setStep(1)}
                variant="outline"
                size="lg"
                className="w-full sm:w-1/2 order-2 sm:order-1"
              >
                Atrás
              </Button>
              <Button
                type="submit"
                variant="default"
                size="lg"
                className="w-full sm:w-1/2 order-1 sm:order-2"
              >
                Enviar Formulario
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

function cn(...inputs: (string | boolean | undefined)[]) {
  return inputs.filter(Boolean).join(" ");
}

