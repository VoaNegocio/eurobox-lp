import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Star } from 'lucide-react';
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
                                               border-stone-100 relative group"
                                >
                                    <img
                                        src={img}
                                        alt={`Cliente Satisfeito ${index + 1}`}
                                        className="w-full h-full object-cover pointer-events-none group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute top-3 right-3 md:top-4 md:right-4 bg-white/90 backdrop-blur-sm px-2 py-1 md:px-3 rounded-full shadow-sm flex items-center gap-1">
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
                        href="https://wa.me/5516992572063?text=Quero%20fazer%20parte%20dos%20clientes%20felizes!"
                        variant="green"
                        className="w-full md:w-auto text-base md:text-lg"
                    >
                        <MessageCircle className="w-5 h-5 md:w-6 md:h-6" />
                        <span>Quero viver essa experiência</span>
                    </Button3D>
                </div>
            </div>
        </section>
    );
}
