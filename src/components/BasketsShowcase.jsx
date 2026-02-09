import { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, MessageCircle, X } from 'lucide-react';
import Button3D from './ui/Button3D';
import FadeIn from './ui/FadeIn';

export default function BasketsShowcase() {
    const scrollRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const [selectedImage, setSelectedImage] = useState(null);

    const handleScroll = () => {
        if (scrollRef.current) {
            const { scrollLeft, clientWidth } = scrollRef.current;
            // Calculate active index based on scroll position + half card width for better centering accuracy
            const index = Math.round(scrollLeft / 324); // 300px min-width + 24px gap approx
            setActiveIndex(index);
        }
    };

    const openModal = (image) => setSelectedImage(image);
    const closeModal = () => setSelectedImage(null);

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
                        Antes de montar, a Vanessa escuta. A história. O motivo. A intenção por trás do presente.
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
                                onClick={() => openModal(basket.image)}
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
                        href="https://wa.me/5516992572063?text=Olá,%20gostaria%20de%20ver%20o%20catálogo%20completo!"
                        variant="green"
                        className="w-full md:w-auto text-base md:text-lg"
                    >
                        <MessageCircle className="w-5 h-5 md:w-6 md:h-6" />
                        <span>Ver catálogo completo no WhatsApp</span>
                    </Button3D>
                </div>
            </div>

            {/* Image Modal */}
            {selectedImage && (
                <div
                    className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 backdrop-blur-sm"
                    onClick={closeModal}
                >
                    <button
                        className="absolute top-4 right-4 text-white hover:text-amber-500 transition-colors"
                        onClick={closeModal}
                    >
                        <X className="w-8 h-8 md:w-10 md:h-10" />
                    </button>
                    <div
                        className="relative max-w-4xl w-full max-h-[90vh] flex items-center justify-center"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <img
                            src={selectedImage}
                            alt="Visualização ampliada"
                            className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
                        />
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
