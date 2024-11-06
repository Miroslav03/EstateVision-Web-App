import Footer from "../../components/Home/Footer";
import Navigation from "../../components/Navigation/Navigation";
import PricingSection from "../../components/Pricing/PricingSection";

export default function Pricing() {
    return (
        <main className="w-full overflow-x-hidden font-main min-h-screen bg-dark-500">
            <Navigation />
            <PricingSection />
            <Footer />
        </main>
    );
}
