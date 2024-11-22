import CallToActionSection from "../../components/Home/CTASection";
import Footer from "../../components/Home/Footer";
import Navigation from "../../components/Navigation/Navigation";
import PricingSection from "../../components/Pricing/PricingSection";
import { Helmet } from "react-helmet-async";
import PricingMetadata from "../../SEO/PricingMetadata";

export default function Pricing() {
    return (
        <main className="w-full overflow-x-hidden font-main min-h-screen bg-dark-500">
            <PricingMetadata />
            <Navigation />
            <PricingSection />
            <CallToActionSection />
            <Footer />
        </main>
    );
}
