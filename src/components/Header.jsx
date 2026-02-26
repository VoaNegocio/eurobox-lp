import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Início', href: '#home' },
        { name: 'Nossas Cestas', href: '#baskets' },
        { name: 'Diferenciais', href: '#differential' },
        { name: 'Depoimentos', href: '#confidence' },
    ];

    return (
        <motion.header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${isScrolled ? 'bg-[#083123]/95 backdrop-blur-md shadow-lg py-2' : 'bg-transparent py-4'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center">
                {/* Logo */}
                <div className="shrink-0">
                    <a href="#home" className="block w-32 md:w-40 transition-all duration-500">
                        <img
                            src="/imgs/logo/logo-verde-horizontal.png"
                            alt="EuroBox Gourmet"
                            className="w-full h-auto transition-all duration-500"
                        />
                    </a>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className={`text-sm font-medium transition-colors hover:opacity-80 ${isScrolled ? 'text-white' : 'text-stone-800'
                                }`}
                        >
                            {link.name}
                        </a>
                    ))}
                </nav>

                {/* CTA Button */}
                <div className="hidden md:block">
                    <a
                        href="https://api.whatsapp.com/send/?phone=5516992572063&text=Ol%C3%A1%2C+vim+pelo+site+e+gostaria+de+um+or%C3%A7amento.&type=phone_number&app_absent=0"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gradient-to-r from-emerald-600 to-emerald-500 text-white font-bold shadow-lg transition-all duration-300 hover:shadow-emerald-500/40 hover:-translate-y-0.5 hover:scale-105 px-6 py-2.5 rounded-full"
                    >
                        Peça pelo WhatsApp
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className={`md:hidden p-2 transition-colors ${isScrolled ? 'text-white' : 'text-stone-700'}`}
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-[#083123] border-t border-white/10 shadow-lg absolute top-full left-0 right-0 overflow-hidden"
                    >
                        <div className="flex flex-col p-4 space-y-4">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-white font-medium hover:text-emerald-200 transition-colors px-2 py-1"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </a>
                            ))}
                            <a
                                href="https://api.whatsapp.com/send/?phone=5516992572063&text=Ol%C3%A1%2C+vim+pelo+site+e+gostaria+de+um+or%C3%A7amento.&type=phone_number&app_absent=0"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-gradient-to-r from-emerald-600 to-emerald-500 text-white font-bold shadow-lg transition-all duration-300 hover:shadow-emerald-500/40 hover:-translate-y-0.5 hover:scale-105 text-center px-5 py-3 rounded-xl"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Peça pelo WhatsApp
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
}
