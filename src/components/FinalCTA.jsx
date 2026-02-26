
export default function FinalCTA() {
    return (
        <section className="py-24 bg-stone-100 text-center">
            <div className="container mx-auto px-4 max-w-2xl">
                <h2 className="text-3xl font-serif text-stone-900 mb-6">
                    Se você quer transformar um gesto simples em algo <span className="italic text-amber-700">memorável</span>, fale agora comigo.
                </h2>
                <p className="text-lg text-stone-600 mb-12">
                    Ela vai te ajudar a escolher a cesta ideal e cuidar de tudo até a entrega.
                </p>

                <a
                    href="https://api.whatsapp.com/send/?phone=5516992572063&text=Ol%C3%A1%2C+vim+pelo+site+e+gostaria+de+um+or%C3%A7amento+personalizado.&type=phone_number&app_absent=0"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block btn-premium text-lg px-12 py-5 rounded-full"
                >
                    Conversar no WhatsApp
                </a>
            </div>
        </section>
    );
}
