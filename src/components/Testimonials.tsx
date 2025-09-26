import lCepeda from '@/assets/lcepeda.png';
import scarsaBoutique from '@/assets/scarsa.webp';
import beatrizRodriguez from '@/assets/beatriz-rodriguez.png';

interface TestimonialData {
  name: string;
  role: string;
  feedback: string;
  imgUrl: string;
}

export const Testimonials = () => {
  const testimonials: TestimonialData[] = [
    {
      name: "Laura Cepeda",
      role: "Diseñadora & CEO LCepeda",
      feedback: "“Con MKB dejé de improvisar. Ellos se encargan de toda mi estrategia digital mientras yo me dedico a crear. Hoy sé que cada acción tiene dirección y propósito.”",
      imgUrl: lCepeda, 
    },
    {
      name: "Beatriz Rodríguez",
      role: "Diseñadora de Modas",
      feedback: "“Pensé que venía por contenido y me encontré con una radiografía completa de mi marca. Después de trabajar con MKB, empecé a comunicar con intención… y a vender mucho más.”",
      imgUrl: beatrizRodriguez, 
    },
    {
      name: "Scarsa Colombia",
      role: "Gerente General",
      feedback: "“Pasamos de ser una empresa física a tener presencia digital con marca propia. MKB nos dio estructura, estrategia, nos capacitó y hasta desarrolló nuestra página web. Hoy llevamos nuestro marketing con seguridad.”",
      imgUrl: scarsaBoutique, 
    }
  ];

  return (
    <section className="relative top-[-50px] container mx-auto py-16 px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-white p-8 rounded-xl shadow-md transform transition duration-300 hover:scale-105 hover:shadow-lg">
            <div className="flex items-center mb-6">
              <img
                src={testimonial.imgUrl}
                alt={testimonial.name}
                className="h-20 w-20 rounded-full border-indigo-500 object-contain px-4"
              />
              <div>
                <h3 className="text-2xl font-semibold text-gray-900">{testimonial.name}</h3>
                <p className="text-md font-semibold text-blue-800">{testimonial.role}</p>
              </div>
            </div>
            <p className="text-gray-700 text-lg">{testimonial.feedback}</p>
          </div>
        ))}
      </div>
    </section>
  );
};