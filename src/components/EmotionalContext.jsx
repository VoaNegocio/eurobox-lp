import { MessageCircle } from 'lucide-react';
import Button3D from './ui/Button3D';
import FadeIn from './ui/FadeIn';

export default function EmotionalContext() {
    return (
        <section className="relative py-12 md:py-24 px-4 bg-stone-900 text-center overflow-hidden">
            {/* Background Image & Overlay */}
            <div className="absolute inset-0 z-0">
                <img src="/imgs/backgrounds/emotional-bg.png" alt="Textura de cesta gourmet" className="w-full h-full object-cover opacity-40" />
                <div className="absolute inset-0 bg-linear-to-t from-stone-900 via-stone-900/80 to-stone-900/60"></div>
            </div>

            {/* Content Container - Glassmorphism */}
            <FadeIn className="relative z-10 max-w-4xl mx-auto text-center bg-white/10 backdrop-blur-md p-8 md:p-12 rounded-3xl border border-white/20 shadow-2xl">
                <h2 className="text-3xl md:text-4xl font-serif text-white mb-6">
                    "Não é só uma cesta. É o <span className="text-amber-400 italic">cuidado</span> que você enviaria se pudesse ir pessoalmente."
                </h2>
                <div className="space-y-6 text-lg text-stone-100 font-light mb-10">
                    <p>
                        Sabemos que a distância às vezes aperta. Que a correria do dia a dia nos impede de estar presente em momentos especiais.
                    </p>
                    <p>
                        A EuroBox existe para encurtar essa distância. Para transformar sua intenção em um gesto palpável, saboroso e inesquecível.
                    </p>
                </div>

                <Button3D
                    href="https://api.whatsapp.com/send/?phone=5516992572063&text=Ol%C3%A1%2C+vim+pelo+site+e+gostaria+de+um+or%C3%A7amento+personalizado.&type=phone_number&app_absent=0"
                    variant="green"
                    className="w-full md:w-auto text-base md:text-lg"
                >
                    <MessageCircle className="w-5 h-5 md:w-6 md:h-6" />
                    <span>Quero surpreender agora</span>
                </Button3D>
            </FadeIn>
        </section>
    );
}
