import Header from './Header';
import Footer from './Footer';

export default function Layout({ children }) {
    return (
        <div className="min-h-screen text-stone-800 font-sans selection:bg-amber-100 selection:text-amber-900">
            <Header />
            <main>
                {children}
            </main>
            <Footer />
        </div>
    );
}
