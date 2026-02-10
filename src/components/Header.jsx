import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out px-4 flex justify-center ${isScrolled ? 'py-1' : 'py-3 md:py-4'
                }`}
        >
            <div className={`
                w-fit mx-auto transition-all duration-500 ease-in-out overflow-hidden rounded-full
                ${isScrolled
                    ? 'bg-white/90 backdrop-blur-md border border-stone-200/50 shadow-md'
                    : 'bg-white/40 backdrop-blur-sm border border-white/40 shadow-sm'
                }
            `}>
                <div className={`relative z-10 flex justify-center items-center transition-all duration-500 ${isScrolled ? 'px-3 md:px-4 py-1' : 'px-4 md:px-5 py-2'}`}>
                    <motion.div
                        className="relative"
                        initial={false}
                        animate={{
                            width: isScrolled ? '40px' : '50px',
                            filter: isScrolled ? 'drop-shadow(0 1px 2px rgba(0,0,0,0.1))' : 'drop-shadow(0 4px 6px rgba(0,0,0,0.2))'
                        }}
                        transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
                    >
                        <img src="/imgs/logo/logo-verde.png" alt="EuroBox Gourmet" className="w-full h-auto" />
                    </motion.div>
                </div>
            </div>
        </motion.header>
    );
}
