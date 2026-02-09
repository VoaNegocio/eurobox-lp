import { MessageCircle } from 'lucide-react';

export default function EmotionalContext() {
    return (
        <section className="relative py-12 md:py-24 px-4 bg-stone-900 text-center overflow-hidden">
            {/* Background Image & Overlay */}
            <div className="absolute inset-0 z-0">
                <img src="/imgs/backgrounds/emotional-bg.png" alt="Textura de cesta gourmet" className="w-full h-full object-cover opacity-40" />
                <div className="absolute inset-0 bg-linear-to-t from-stone-900 via-stone-900/80 to-stone-900/60"></div>
            </div>

            <div className="container mx-auto max-w-3xl space-y-6 md:space-y-8 relative z-10">

                <div className="w-16 h-1 bg-amber-500 mx-auto rounded-full mb-6 md:mb-8 shadow-lg shadow-amber-500/20"></div>

                <h2 className="text-2xl md:text-4xl font-serif text-white leading-snug drop-shadow-sm">
                    "Presentear bem não é só escolher algo bonito. <br />
                    É conseguir <span className="italic text-amber-500">surpreender</span> no momento certo."
                </h2>

                <div className="text-lg md:text-xl text-stone-300 leading-relaxed space-y-6 mb-8 md:mb-12">
                    <p>
                        A EuroBox Gourmet nasceu para transformar gestos simples em experiências memoráveis — mesmo quando o pedido acontece de última hora.
                    </p>
                    <p>
                        Aqui, cada cesta carrega intenção, cuidado e a vontade real de encantar quem recebe.
                    </p>
                </div>

                <a
                    href="https://wa.me/5516999999999?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20as%20cestas!"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white text-base md:text-lg font-medium px-6 py-3 md:px-8 md:py-4 rounded-full transition-all hover:shadow-lg transform hover:-translate-y-1 w-full md:w-auto justify-center"
                >
                    <MessageCircle className="w-5 h-5 md:w-6 md:h-6" />
                    <span>Quero surpreender agora</span>
                </a>
            </div>
        </section>
    );
}
