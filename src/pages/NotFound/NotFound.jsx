import Navigation from "../../components/Navigation/Navigation";
import NotFoundSection from "../../components/NotFound/NotFoundSection";

export default function NotFound() {
    return (
        <main className="w-full overflow-x-hidden font-main min-h-screen bg-dark-500">
            <Navigation />
            <NotFoundSection />
        </main>
    );
}
