import { useState, useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { MessageCircle, Star, X, ZoomIn } from 'lucide-react';
import Button3D from './ui/Button3D';
import FadeIn from './ui/FadeIn';

const clientImages = [
    '/imgs/section-confidence-imgs-videos/cliente-satisfeito1.webp',
    '/imgs/section-confidence-imgs-videos/cliente-satisfeito2.webp',
    '/imgs/section-confidence-imgs-videos/cliente-satisfeito3.webp',
    '/imgs/section-confidence-imgs-videos/cliente-satisfeito4.webp',
    '/imgs/section-confidence-imgs-videos/cliente-satisfeito5.webp',
    '/imgs/section-confidence-imgs-videos/cliente-satisfeito6.webp',
    '/imgs/section-confidence-imgs-videos/cliente-satisfeito7.webp',
];

export default function Confidence() {
    const [width, setWidth] = useState(0);
    const [selectedImage, setSelectedImage] = useState(null);
    const carouselRef = useRef();

    useEffect(() => {
        if (carouselRef.current) {
            setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
        }
    }, []);

    return (
        <section className="py-12 md:py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-4">
                <FadeIn className="text-center max-w-4xl mx-auto mb-12">
                    <h2 className="text-3xl md:text-4xl font-serif text-stone-900 mb-6">
                        Quem compra, percebe. <span className="text-amber-700 italic">Quem recebe, sente.</span>
                    </h2>
                    <p className="text-lg text-stone-600 mb-8 max-w-2xl mx-auto">
                        As mensagens e avaliações falam de emoção, do alívio de ver a cesta chegar exatamente como foi escolhida.
                        Aqui estão alguns registros reais de nossos clientes:
                    </p>
                </FadeIn>

                {/* Draggable Carousel */}
                <FadeIn delay={0.2} className="cursor-grab active:cursor-grabbing">
                    <motion.div ref={carouselRef} className="overflow-hidden">
                        <motion.div
                            drag="x"
                            dragConstraints={{ right: 0, left: -width }}
                            whileTap={{ cursor: "grabbing" }}
                            className="flex gap-6 pb-8"
                        >
                            {clientImages.map((img, index) => (
                                <motion.div
                                    key={index}
                                    className="min-w-[260px] md:min-w-[350px] h-[320px] md:h-[400px] bg-stone-100 rounded-3xl overflow-hidden shadow-md border 
                                               border-stone-100 relative group cursor-pointer"
                                    onClick={() => setSelectedImage(img)}
                                    layoutId={`image-${index}`}
                                >
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 z-10 flex items-center justify-center">
                                        <ZoomIn className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-12 h-12 drop-shadow-md" />
                                    </div>
                                    <img
                                        src={img}
                                        alt={`Cliente Satisfeito ${index + 1}`}
                                        className="w-full h-full object-cover pointer-events-none group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute top-3 right-3 md:top-4 md:right-4 bg-white/90 backdrop-blur-sm px-2 py-1 md:px-3 rounded-full shadow-sm flex items-center gap-1 z-20">
                                        <Star className="w-3 h-3 md:w-4 md:h-4 text-amber-500 fill-amber-500" />
                                        <span className="text-[10px] md:text-xs font-bold text-stone-800">Cliente Real</span>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>
                    <p className="text-center text-sm text-stone-400 mt-2 mb-8 flex items-center justify-center gap-2">
                        ← Arraste para ver mais →
                    </p>
                </FadeIn>

                <div className="text-center mt-8">
                    <Button3D
                        href="https://api.whatsapp.com/send/?phone=5516992572063&text=Ol%C3%A1%2C+vim+pelo+site+e+gostaria+de+um+or%C3%A7amento.&type=phone_number&app_absent=0"
                        variant="green"
                        className="w-full md:w-auto text-base md:text-lg"
                    >
                        <MessageCircle className="w-5 h-5 md:w-6 md:h-6" />
                        <span>Quero viver essa experiência</span>
                    </Button3D>
                </div>
            </div>

            {/* Modal */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedImage(null)}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-md"
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="relative max-w-5xl max-h-[90vh] w-full h-full flex items-center justify-center"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setSelectedImage(null)}
                                className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors z-50 bg-black/20 hover:bg-black/40 rounded-full p-2"
                            >
                                <X size={32} />
                            </button>
                            <img
                                src={selectedImage}
                                alt="Cliente Satisfeito Ampliado"
                                className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
