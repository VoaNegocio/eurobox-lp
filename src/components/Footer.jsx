export default function Footer() {
    return (
        <footer className="bg-stone-900 text-stone-400 py-8 md:py-12 border-t border-stone-800">
            <div className="container mx-auto px-4 text-center space-y-4">
                <div className="mb-6 flex justify-center">
                    <img src="/imgs/logo/logo-verde-horizontal.png" alt="EuroBox Gourmet" className="w-[85px] md:w-[250px] h-auto mx-auto" />
                </div>
                <p>📍 Ribeirão Preto</p>
                <p>🚚 Entregas rápidas — inclusive aos domingos (somos os únicos)</p>
                <div className="pt-8 text-sm text-stone-600">
                    © {new Date().getFullYear()} EuroBox Gourmet. Todos os direitos reservados.
                </div>
            </div>
        </footer>
    );
}
