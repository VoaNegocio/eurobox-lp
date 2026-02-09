import { useRef, useEffect } from 'react';
import { MessageCircle, ChevronsDown } from 'lucide-react';
import Button3D from './ui/Button3D';
import FadeIn from './ui/FadeIn';

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center pt-24 pb-12 md:pt-32 md:pb-20 px-4 bg-stone-50 overflow-hidden">
            {/* Background Image Placeholder - To be replaced with real image */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-linear-to-r from-stone-50 via-stone-50/90 to-transparent z-10"></div>
                {/* <img src="/hero-bg.jpg" alt="Hero Background" className="w-full h-full object-cover" /> */}
            </div>

            <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 md:gap-12 items-center relative z-10">
                <FadeIn className="text-center md:text-left order-2 md:order-1">
                    <div className="inline-block bg-green-100 text-green-800 px-4 py-1 rounded-full text-sm font-semibold mb-4 md:mb-6">
                        🚀 Entrega mais rápida de Ribeirão Preto
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-stone-900 leading-tight mb-4 md:mb-6">
                        Cestas que <span className="text-green-600 italic">emocionam</span>,<br />
                        entregas que <span className="text-amber-600 italic">surpreendem</span>.
                    </h1>
                    <p className="text-lg md:text-xl text-stone-600 mb-6 md:mb-8 font-light">
                        Personalizadas com cuidado, pensadas a partir da sua história e entregues rapidamente em Ribeirão Preto — inclusive aos domingos.
                    </p>

                    <Button3D
                        href="https://wa.me/5516992572063?text=Olá,%20gostaria%20de%20fazer%20um%20pedido!"
                        variant="green"
                        withPulse={true}
                        className="w-full md:w-auto text-lg md:text-xl"
                    >
                        <MessageCircle className="w-6 h-6" />
                        <span>Peça agora no WhatsApp</span>
                    </Button3D>
                </FadeIn>

                {/* Visual Aspect - Right side image or composition (Desktop) */}
                <FadeIn delay={0.2} className="relative h-[300px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl order-1 md:order-2">
                    <img
                        src="/imgs/hero/imghero.webp"
                        alt="Cesta Gourmet Eurobox"
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6 md:p-8">
                        <p className="text-white font-serif text-xl md:text-2xl italic">"Mais que um presente, uma memória."</p>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}
