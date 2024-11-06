import HeroSection from "../../components/Home/HeroSection";
import ServiceSection from "../../components/Home/ServiceSection";
import Navigation from "../../components/Navigation/Navigation";
import Stats from "../../components/Home/Stats";
import AboutSection from "../../components/Home/AboutSection";
import HowItWorksSection from "../../components/Home/HowItWorksSection";
import CallToActionSection from "../../components/Home/CTASection";
import Footer from "../../components/Home/Footer";
import IconSection from "../../components/Home/IconSection";

export default function Home() {
    return (
        <main className="w-full overflow-x-hidden font-main min-h-screen bg-dark-500">
            <Navigation />
            <HeroSection />
            <div id="serivce-section">
                <ServiceSection />
            </div>
            <Stats />
            <AboutSection />
            <IconSection />
            <HowItWorksSection />
            <CallToActionSection />
            <Footer />
        </main>
    );
}
