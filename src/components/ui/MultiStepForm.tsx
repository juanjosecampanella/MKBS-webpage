import { useState } from "react";
import { Input } from "./input";

export default function MultiStepForm() {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        Name: "",
        Correo: "",
        celular: "",
        empresa: "",
        inversionMensual: [] as string[],
        disposicion: ""
    })


    return (
        <div className="relative flex flex-col justify-start px-10 py-28 w-full max-w-xl mx-auto min-h-[500px] gap-1">
            {/* 🔹 Stepper fijo arriba */}
            <div className="flex items-center justify-center ">
                {/* Step 1 */}
                <div
                    className={`w-8 h-8 flex items-center justify-center rounded-full text-white font-bold
        ${step >= 1 ? "bg-blue-600" : "bg-gray-300"}`}
                >
                    1
                </div>
                <div className={`flex-1 h-1 ${step >= 2 ? "bg-blue-600" : "bg-gray-300"}`}></div>
                {/* Step 2 */}
                <div
                    className={`w-8 h-8 flex items-center justify-center rounded-full text-white font-bold
        ${step >= 2 ? "bg-blue-600" : "bg-gray-300"}`}
                >
                    2
                </div>
            </div>

            <div className="relative flex-1">
                {/* Paso 1 */}
                <div
                    className={`absolute inset-0 transition-opacity duration-500 flex flex-col justify-center 
      ${step === 1 ? "opacity-100" : "opacity-0 pointer-events-none"}`}
                >
                    <div className="w-full max-w-md mx-auto space-y-6">
                        <Input id="Name" label="Nombre Completo" name="Name" />
                        <Input id="Correo" label="Correo Electrónico" name="Correo" />
                        <Input id="celular" label="Celular" name="celular" />
                        <Input id="empresa" label="Nombre de la Empresa" name="empresa" />

                        <button
                            type="button"
                            onClick={() => setStep(2)}
                            className="w-full bg-indigo-600 text-white rounded-xl py-3 font-semibold hover:bg-indigo-700 transition"
                        >
                            Siguiente
                        </button>
                    </div>
                </div>

                {/* Paso 2 */}
                <div
                    className={`absolute inset-0 transition-opacity duration-500 flex flex-col justify-center 
      ${step === 2 ? "opacity-100" : "opacity-0 pointer-events-none"}`}
                >
                    <div className="w-full max-w-md mx-auto space-y-6">
                        <div>
                            <label className="block text-slate-700 text-base font-semibold mb-2">
                                ¿Cuál es tu rango de inversión mensual en marketing digital?
                            </label>
                            <div className="flex flex-col space-y-2">
                                <label className="flex items-center space-x-2 text-slate-700 text-sm">
                                    <input type="checkbox" name="inversionMensual" value="menos5M" />
                                    <span>Menos de 5M COP</span>
                                </label>
                                <label className="flex items-center space-x-2 text-slate-700 text-sm">
                                    <input type="checkbox" name="inversionMensual" value="entre5y10M" />
                                    <span>Entre 5M y 10M</span>
                                </label>
                                <label className="flex items-center space-x-2 text-slate-700 text-sm">
                                    <input type="checkbox" name="inversionMensual" value="mas10M" />
                                    <span>Más de 10M</span>
                                </label>
                            </div>
                        </div>

                        <div>
                            <label className="block font-semibold text-slate-700 text-base mb-4">
                                ¿Cuánto estás dispuesto a invertir en marketing?
                            </label>
                            <div className="flex flex-col space-y-2">
                                <label className="flex items-center space-x-2">
                                    <input type="radio" name="disposicion" value="menos5M" />
                                    <span>Menos de 5M</span>
                                </label>
                                <label className="flex items-center space-x-2">
                                    <input type="radio" name="disposicion" value="entre5y10M" />
                                    <span>Entre 5M y 10M</span>
                                </label>
                                <label className="flex items-center space-x-2">
                                    <input type="radio" name="disposicion" value="mas10M" />
                                    <span>Más de 10M</span>
                                </label>
                            </div>
                        </div>

                        <div className="flex space-x-4">
                            <button
                                type="button"
                                onClick={() => setStep(1)}
                                className="w-1/2 bg-gray-300 text-gray-800 rounded-xl py-3 font-semibold hover:bg-gray-400 transition"
                            >
                                Atrás
                            </button>
                            <button
                                type="submit"
                                className="w-1/2 bg-indigo-600 text-white rounded-xl py-3 font-semibold hover:bg-indigo-700 transition"
                            >
                                Enviar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}
