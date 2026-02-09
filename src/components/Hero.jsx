import { MessageCircle } from 'lucide-react';

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center pt-24 pb-12 md:pt-32 md:pb-20 px-4 bg-stone-50 overflow-hidden">
            {/* Background Image Placeholder - To be replaced with real image */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-linear-to-r from-stone-50 via-stone-50/90 to-transparent z-10"></div>
                {/* <img src="/hero-bg.jpg" alt="Hero Background" className="w-full h-full object-cover" /> */}
            </div>

            <div className="container mx-auto z-20 relative grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                <div className="space-y-6 md:space-y-8 max-w-2xl">
                    <h1 className="text-4xl md:text-6xl font-serif font-medium text-stone-900 leading-tight">
                        Cestas gourmet criadas para <span className="italic text-amber-700">encantar</span>
                    </h1>

                    {/* Mobile Image - Visible only on small screens, between headline and text */}
                    <div className="md:hidden block relative h-[300px] w-full bg-stone-200 rounded-xl overflow-hidden shadow-lg my-6">
                        <img src="/imgs/hero/imghero.webp" alt="EuroBox Gourmet Cesta" className="w-full h-full object-cover" />
                    </div>

                    <p className="text-lg md:text-xl text-stone-600 leading-relaxed max-w-lg">
                        Personalizadas com cuidado, pensadas a partir da sua história e entregues rapidamente em Ribeirão Preto — inclusive aos domingos.
                    </p>

                    <a
                        href="https://wa.me/5516999999999?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20as%20cestas!" // Placeholder number
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white text-base md:text-lg font-medium px-6 py-3 md:px-8 md:py-4 rounded-full transition-all hover:shadow-lg transform hover:-translate-y-1 w-full md:w-auto justify-center"
                    >
                        <MessageCircle className="w-5 h-5 md:w-6 md:h-6" />
                        <span>Falar com a Vanessa no WhatsApp</span>
                    </a>
                </div>

                {/* Visual Aspect - Right side image or composition (Desktop) */}
                <div className="hidden md:block relative h-[600px] w-full bg-stone-200 rounded-2xl overflow-hidden shadow-2xl">
                    <img src="/imgs/hero/imghero.webp" alt="EuroBox Gourmet Cesta" className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700" />
                </div>
            </div>
        </section>
    );
}
