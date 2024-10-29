import HeroSection from "../../components/Home/HeroSection";
import Navigation from "../../components/Navigation/Navigation";

export default function Home() {
    return (
        <main className="w-full overflow-x-hidden font-main min-h-screen bg-dark-500">
            <Navigation />
            <HeroSection />
        </main>
    );
}
