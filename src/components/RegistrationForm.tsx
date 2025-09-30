import team from "@/assets/_DSC7245.jpg"
import { InstagramLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons"
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { useState } from "react";
import { Input } from "./ui/input";
import { fromMainValueToError } from "recharts/types/state/selectors/axisSelectors";
import { Label } from "./ui/label";
import MultiStepForm from "./ui/MultiStepForm";

export const RegistrationForm = () => {
    const [name, setName] = useState("");

    return (

        <div>
            <div className="grid grid-cols-1 md:grid-cols-[2fr_3fr] min-h-screen bg-white">
                {/* Lado izquierdo */}
                <MultiStepForm></MultiStepForm>
                {/* Lado derecho */}
                <div className="relative h-[700px] w-full">
                    <img
                        src={team}
                        alt="Background"
                        className="w-full h-full object-cover"
                    />

                    <div className="absolute inset-0 bg-black/70"></div>

                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
                        <div className="max-w-2xl mx-auto">
                          
                            <h1 className="text-4xl font-bold mb-2">
                                La Estrategia que tu Empresa Necesita para Crecer en Digital
                            </h1>

                            <p className="text-lg text-gray-200 mb-4">
                                En 45 minutos te mostraremos qué está fallando, qué deberías estar haciendo
                                y el plan para escalar tus resultados digitales
                            </p>

                            {/* Línea divisoria */}
                            <div className="w-24 h-[2px] bg-blue-500 mb-6 mx-auto"></div>

                        
                            <div className="flex justify-center space-x-6">
                              
                                <a
                                    href="https://www.instagram.com/tucuenta"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-300 hover:text-pink-500 transition"
                                >
                                    <InstagramLogoIcon className="w-6 h-6" />
                                </a>

                                <a
                                    href="https://www.linkedin.com/in/tuperfil"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-300 hover:text-blue-500 transition"
                                >
                                    <LinkedInLogoIcon className="w-6 h-6" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}