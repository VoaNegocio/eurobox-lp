import { useRef } from 'react';
import { ChevronLeft, ChevronRight, MessageCircle } from 'lucide-react';

export default function BasketsShowcase() {
    const scrollRef = useRef(null);

    const baskets = [
        { title: "Cesta Premium", image: "/imgs/carrossel-section3/img1-carrossel.jpg", description: "Sofisticação em cada detalhe." },
        { title: "Café da Manhã", image: "/imgs/carrossel-section3/img2-carrossel.jpg", description: "Comece o dia com carinho." },
        { title: "Happy Hour", image: "/imgs/carrossel-section3/img3-carrossel.jpg", description: "Para momentos de celebração." },
        { title: "Romântica", image: "/imgs/carrossel-section3/img4-carrossel.jpg", description: "Amor em forma de presente." },
        { title: "Gourmet", image: "/imgs/carrossel-section3/img5-carrossel.jpg", description: "Sabores selecionados." },
        { title: "Especial", image: "/imgs/carrossel-section3/img6-carrossel.jpg", description: "Para quem merece o melhor." },
        { title: "Luxo", image: "/imgs/carrossel-section3/img7-carrossel.jpg", description: "Experiência única." },
        { title: "Carinho", image: "/imgs/carrossel-section3/img8-carrossel.jpg", description: "Demonstre seu afeto." },
        { title: "Surpresa", image: "/imgs/carrossel-section3/img9-carrossel.jpg", description: "Inesquecível." },
        { title: "Delícias", image: "/imgs/carrossel-section3/img10-carrossel.jpg", description: "Sabor inigualável." },
        { title: "Encanto", image: "/imgs/carrossel-section3/img11-carrossel.jpg", description: "Feito para encantar." },
        { title: "Momentos", image: "/imgs/carrossel-section3/img12-carrossel.jpg", description: "Crie memórias." },
    ];

    const scroll = (direction) => {
        if (scrollRef.current) {
            const { current } = scrollRef;
            const scrollAmount = 300;
            if (direction === 'left') {
                current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
            } else {
                current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
            }
        }
    };

    return (
        <section className="py-12 md:py-24 bg-stone-50 overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-8 md:mb-16">
                    <h2 className="text-3xl md:text-4xl font-serif text-stone-900 mb-4 md:mb-6">Cada cesta começa com uma <span className="italic text-amber-700">conversa</span>.</h2>
                    <p className="text-lg text-stone-600">
                        Antes de montar, a Vanessa escuta. A história. O motivo. A intenção por trás do presente.
                        A partir disso, cada detalhe é escolhido com cuidado.
                    </p>
                </div>

                <div className="relative group">
                    <button
                        onClick={() => scroll('left')}
                        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white transition-all hidden md:block -ml-4"
                    >
                        <ChevronLeft className="w-6 h-6 text-stone-800" />
                    </button>

                    <div
                        ref={scrollRef}
                        className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory scrollbar-hide px-4"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                        {baskets.map((basket, index) => (
                            <div
                                key={index}
                                className="min-w-[300px] md:min-w-[350px] bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow snap-start flex-shrink-0"
                            >
                                <div className="h-64 overflow-hidden">
                                    <img
                                        src={basket.image}
                                        alt={basket.title}
                                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-stone-800 mb-2">{basket.title}</h3>
                                    <p className="text-stone-600">{basket.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <button
                        onClick={() => scroll('right')}
                        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white transition-all hidden md:block -mr-4"
                    >
                        <ChevronRight className="w-6 h-6 text-stone-800" />
                    </button>
                </div>

                <div className="mt-12 text-center">
                    <a
                        href="https://wa.me/5516999999999?text=Olá,%20gostaria%20de%20ver%20o%20catálogo%20completo!"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white text-base md:text-lg font-medium px-6 py-3 md:px-8 md:py-4 rounded-full transition-all hover:shadow-lg transform hover:-translate-y-1 w-full md:w-auto justify-center"
                    >
                        <MessageCircle className="w-5 h-5 md:w-6 md:h-6" />
                        <span>Ver catálogo completo no WhatsApp</span>
                    </a>
                </div>
            </div>

            <style jsx>{`
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
            `}</style>
        </section>
    );
}
