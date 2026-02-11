
export default function FinalCTA() {
    return (
        <section className="py-24 bg-stone-100 text-center">
            <div className="container mx-auto px-4 max-w-2xl">
                <h2 className="text-3xl font-serif text-stone-900 mb-6">
                    Se você quer transformar um gesto simples em algo <span className="italic text-amber-700">memorável</span>, fale agora com a Vanessa.
                </h2>
                <p className="text-lg text-stone-600 mb-12">
                    Ela vai te ajudar a escolher a cesta ideal e cuidar de tudo até a entrega.
                </p>

                <a
                    href="https://wa.me/5516992572063?text=Olá,%20gostaria%20de%20fazer%20um%20pedido!"
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
