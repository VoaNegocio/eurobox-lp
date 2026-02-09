export default function Header() {
    return (
        <header className="fixed top-0 w-full z-50 py-3 md:py-4 px-4 transition-all duration-300">
            <div className="absolute inset-0 bg-green-800/60 backdrop-blur-md border-b border-white/10 shadow-sm"></div>
            <div className="container mx-auto flex justify-center md:justify-between items-center relative z-10">
                <div className="w-32 md:w-48">
                    <img src="/imgs/logo/logo-verde.png" alt="EuroBox Gourmet" className="w-full h-auto" />
                </div>
                {/* Placeholder for potential navigation or social icons */}
            </div>
        </header>
    );
}
