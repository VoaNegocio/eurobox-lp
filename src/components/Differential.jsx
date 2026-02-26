import { Clock, Heart, CheckCircle, MessageCircle } from 'lucide-react';
import Button3D from './ui/Button3D';
import FadeIn from './ui/FadeIn';

export default function Differential() {
    const features = [
        {
            icon: <Clock className="w-8 h-8 text-amber-700" />,
            title: "Entrega Rápida",
            description: "Agilidade para não perder o momento da surpresa."
        },
        {
            icon: <CheckCircle className="w-8 h-8 text-amber-700" />,
            title: "Domingos e Feriados",
            description: "A única opção na região preparada para surpreender também no domingo."
        },
        {
            icon: <Heart className="w-8 h-8 text-amber-700" />,
            title: "Cuidado em Cada Detalhe",
            description: "O mesmo capricho, mesmo nos pedidos de última hora."
        }
    ];

    return (
        <section className="relative py-12 md:py-24 bg-stone-900 text-stone-50 overflow-hidden">
            {/* Background Image & Overlay */}
            <div className="absolute inset-0 z-0">
                <img src="/imgs/backgrounds/differential-bg.png" alt="Background velocidade e elegância" className="w-full h-full object-cover opacity-20" />
                <div className="absolute inset-0 bg-linear-to-r from-stone-900 via-stone-900/90 to-stone-900/80"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <FadeIn>
                        <h2 className="text-3xl md:text-4xl font-serif text-white mb-6">
                            Agilidade que <span className="text-amber-400 italic">impressiona</span>.
                        </h2>
                        <p className="text-lg text-stone-200 mb-8 font-light">
                            Esqueceu a data? Decidiu de última hora? Não se preocupe.
                            Não somos uma fábrica industrial. Somos um ateliê ágil.
                            Garantimos a entrega da sua cesta gourmet em tempo recorde,
                            sem perder a elegância e o toque pessoal.
                            A EuroBox está preparada para esses momentos.
                        </p>

                        <Button3D
                            href="https://api.whatsapp.com/send/?phone=5516992572063&text=Ol%C3%A1%2C+vim+pelo+site+e+gostaria+de+um+or%C3%A7amento.&type=phone_number&app_absent=0"
                            variant="amber"
                            className="w-full md:w-auto text-base md:text-lg"
                        >
                            <MessageCircle className="w-5 h-5 md:w-6 md:h-6" />
                            <span>Pedir com agilidade</span>
                        </Button3D>
                    </FadeIn>

                    <div className="space-y-8">
                        {features.map((feature, index) => (
                            <div key={index} className="flex gap-4 items-start">
                                <div className="p-3 bg-stone-800 rounded-full shrink-0">
                                    {feature.icon}
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-1">{feature.title}</h3>
                                    <p className="text-stone-400">{feature.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section >
    );
}
