import { motion } from 'framer-motion';

export default function Button3D({
    href,
    children,
    variant = 'green',
    className = '',
    withPulse = false,
    onClick
}) {
    const variants = {
        green: {
            base: 'bg-green-600',
            hover: 'hover:bg-green-500',
            border: 'border-green-800',
            shadow: 'shadow-green-900',
            text: 'text-white'
        },
        amber: {
            base: 'bg-amber-600',
            hover: 'hover:bg-amber-500',
            border: 'border-amber-800',
            shadow: 'shadow-amber-900',
            text: 'text-white'
        }
    };

    const style = variants[variant] || variants.green;

    const Component = href ? motion.a : motion.button;
    const props = href
        ? { href, target: "_blank", rel: "noopener noreferrer" }
        : { onClick };

    const pulseAnimation = withPulse ? {
        scale: [1, 1.05, 1],
        boxShadow: [
            "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
            "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
            "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"
        ],
        transition: {
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse"
        }
    } : {};

    return (
        <Component
            {...props}
            animate={pulseAnimation}
            whileHover={{ y: -2, scale: 1.02 }}
            whileTap={{ y: 2, scale: 0.98, boxShadow: '0px 0px 0px rgba(0,0,0,0)' }}
            className={`
                relative inline-flex items-center justify-center gap-3
                ${style.base} ${style.text} ${style.hover}
                font-bold uppercase tracking-wider
                py-4 px-8 rounded-xl
                border-b-4 ${style.border}
                active:border-b-0 active:mt-1
                transition-all duration-100 ease-in-out
                shadow-lg
                ${className}
            `}
        >
            {children}
        </Component>
    );
}
