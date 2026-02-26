import { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, MessageCircle, X } from 'lucide-react';
import Button3D from './ui/Button3D';
import FadeIn from './ui/FadeIn';

export default function BasketsShowcase() {
    const scrollRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const [selectedIndex, setSelectedIndex] = useState(null);

    const handleScroll = () => {
        if (scrollRef.current) {
            const { scrollLeft, clientWidth } = scrollRef.current;
            // Calculate active index based on scroll position + half card width for better centering accuracy
            const index = Math.round(scrollLeft / 324); // 300px min-width + 24px gap approx
            setActiveIndex(index);
        }
    };

    const openModal = (index) => setSelectedIndex(index);
    const closeModal = () => setSelectedIndex(null);

    const nextImage = (e) => {
        e.stopPropagation();
        setSelectedIndex((prev) => (prev + 1) % baskets.length);
    };

    const prevImage = (e) => {
        e.stopPropagation();
        setSelectedIndex((prev) => (prev - 1 + baskets.length) % baskets.length);
    };

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
                <FadeIn className="text-center max-w-3xl mx-auto mb-8 md:mb-16">
                    <h2 className="text-3xl md:text-4xl font-serif text-stone-900 mb-4 md:mb-6">Cada cesta começa com uma <span className="italic text-amber-700">conversa</span>.</h2>
                    <p className="text-lg text-stone-600">
                        Antes de montar, eu escuto. A história. O motivo. A intenção por trás do presente.
                        A partir disso, cada detalhe é escolhido com cuidado.
                    </p>
                </FadeIn>

                <div className="relative group">
                    <button
                        onClick={() => scroll('left')}
                        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white transition-all hidden md:block -ml-4"
                    >
                        <ChevronLeft className="w-6 h-6 text-stone-800" />
                    </button>

                    <div
                        ref={scrollRef}
                        onScroll={handleScroll}
                        className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory scrollbar-hide px-4"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                        {baskets.map((basket, index) => (
                            <div
                                key={index}
                                className="min-w-[300px] md:min-w-[350px] bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow snap-start flex-shrink-0 cursor-pointer"
                                onClick={() => openModal(index)}
                            >
                                <div className="h-64 overflow-hidden relative group">
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors z-10 flex items-center justify-center">
                                        <MessageCircle className="text-white opacity-0 group-hover:opacity-100 transition-opacity transform scale-75 group-hover:scale-100" />
                                    </div>
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

                    {/* Standard Mobile Experience: iOS-style Pagination Dots */}
                    <div className="flex justify-center gap-2 mt-4 md:hidden">
                        {baskets.map((_, index) => (
                            <div
                                key={index}
                                className={`h-2 rounded-full transition-all duration-300 ${index === activeIndex ? 'w-6 bg-amber-600' : 'w-2 bg-stone-300'
                                    }`}
                            />
                        ))}
                    </div>
                </div>

                <div className="mt-12 text-center">
                    <Button3D
                        href="https://api.whatsapp.com/send/?phone=5516992572063&text=Ol%C3%A1%2C+vim+pelo+site+e+gostaria+de+um+or%C3%A7amento+personalizado.&type=phone_number&app_absent=0"
                        variant="green"
                        className="w-full md:w-auto text-base md:text-lg"
                    >
                        <MessageCircle className="w-5 h-5 md:w-6 md:h-6" />
                        <span>Ver catálogo completo no WhatsApp</span>
                    </Button3D>
                </div>
            </div>

            {/* Image Modal */}
            {selectedIndex !== null && (
                <div
                    className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-2 sm:p-4 backdrop-blur-md transition-opacity duration-300"
                    onClick={closeModal}
                >
                    <button
                        className="absolute top-4 sm:top-6 right-4 sm:right-6 z-60 text-stone-300 hover:text-white bg-black/50 hover:bg-black/80 p-2 sm:p-3 rounded-full transition-all"
                        onClick={closeModal}
                        aria-label="Fechar galeria"
                    >
                        <X className="w-6 h-6 sm:w-8 sm:h-8" />
                    </button>

                    <button
                        className="absolute left-2 sm:left-8 top-1/2 -translate-y-1/2 z-60 text-stone-300 hover:text-white bg-black/50 hover:bg-black/80 p-2 sm:p-3 rounded-full transition-all"
                        onClick={prevImage}
                        aria-label="Foto anterior"
                    >
                        <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
                    </button>

                    <button
                        className="absolute right-2 sm:right-8 top-1/2 -translate-y-1/2 z-60 text-stone-300 hover:text-white bg-black/50 hover:bg-black/80 p-2 sm:p-3 rounded-full transition-all"
                        onClick={nextImage}
                        aria-label="Próxima foto"
                    >
                        <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
                    </button>

                    <div
                        className="relative w-full h-full max-w-6xl flex flex-col items-center justify-center py-12 px-12 sm:px-24"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <img
                            src={baskets[selectedIndex].image}
                            alt={baskets[selectedIndex].title}
                            className="max-w-full max-h-full object-contain rounded-lg shadow-2xl transition-transform duration-300"
                            style={{ maxHeight: '80vh' }}
                        />
                        <div className="absolute bottom-6 sm:bottom-10 left-0 right-0 text-center pointer-events-none">
                            <span className="bg-black/70 text-white px-5 py-2 sm:px-6 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium tracking-wide backdrop-blur-md shadow-lg border border-white/10">
                                {baskets[selectedIndex].title} <span className="text-stone-400 mx-2">|</span> {selectedIndex + 1} de {baskets.length}
                            </span>
                        </div>
                    </div>
                </div>
            )}

            <style jsx>{`
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
            `}</style>
        </section>
    );
}
