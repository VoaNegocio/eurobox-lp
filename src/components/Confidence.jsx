import { MessageCircle } from 'lucide-react';

export default function Confidence() {
    return (
        <section className="py-12 md:py-24 bg-white text-center">
            <div className="container mx-auto px-4 max-w-4xl">
                <h2 className="text-3xl md:text-4xl font-serif text-stone-900 mb-8 md:mb-12">
                    Quem compra, percebe. <span className="text-amber-700 italic">Quem recebe, sente.</span>
                </h2>

                <p className="text-lg text-stone-600 mb-8 md:mb-16 max-w-2xl mx-auto">
                    As mensagens e avaliações falam de emoção, do alívio de ver a cesta chegar exatamente como foi escolhida, sem “imagem meramente ilustrativa”.
                </p>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* Placeholder for testimonials */}
                    <div className="bg-stone-50 p-8 rounded-2xl shadow-sm text-left">
                        <div className="flex text-amber-500 mb-4">★★★★★</div>
                        <p className="italic text-stone-700 mb-4">"Superou todas as minhas expectativas! A entrega foi super rápida e o cuidado com a embalagem é incrível."</p>
                        <p className="font-bold text-stone-900">- Cliente Satisfeita</p>
                    </div>

                    <div className="bg-stone-50 p-8 rounded-2xl shadow-sm text-left">
                        <div className="flex text-amber-500 mb-4">★★★★★</div>
                        <p className="italic text-stone-700 mb-4">"Salvaram meu domingo! Não sabia onde encontrar um presente de qualidade de última hora."</p>
                        <p className="font-bold text-stone-900">- Cliente Feliz</p>
                    </div>
                </div>

                <div className="mt-12 md:mt-16 text-center">
                    <a
                        href="https://wa.me/5516999999999?text=Quero%20fazer%20parte%20dos%20clientes%20felizes!"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white text-base md:text-lg font-medium px-6 py-3 md:px-8 md:py-4 rounded-full transition-all hover:shadow-lg transform hover:-translate-y-1 w-full md:w-auto justify-center"
                    >
                        <MessageCircle className="w-5 h-5 md:w-6 md:h-6" />
                        <span>Ver mais avaliações</span>
                    </a>
                </div>
            </div>
        </section>
    );
}
