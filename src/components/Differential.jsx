import { Clock, Heart, CheckCircle, MessageCircle } from 'lucide-react';

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
                <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-serif mb-4 md:mb-6 leading-tight">
                            Surpreender bem, <br />
                            mesmo <span className="text-amber-500 italic">sem planejamento</span>.
                        </h2>
                        <p className="text-stone-300 text-lg mb-8 leading-relaxed">
                            Nem toda surpresa nasce com antecedência. Às vezes ela surge no meio da semana,
                            ou quando você percebe que alguém merece um carinho hoje.
                            A EuroBox está preparada para esses momentos.
                        </p>

                        <a
                            href="https://wa.me/5516999999999?text=Preciso%20de%20uma%20entrega%20rápida!"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 bg-amber-600 hover:bg-amber-700 text-white text-base md:text-lg font-medium px-6 py-3 md:px-8 md:py-4 rounded-full transition-all hover:shadow-lg transform hover:-translate-y-1 w-full md:w-auto justify-center"
                        >
                            <MessageCircle className="w-5 h-5 md:w-6 md:h-6" />
                            <span>Pedir com agilidade</span>
                        </a>
                    </div>

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
        </section>
    );
}
