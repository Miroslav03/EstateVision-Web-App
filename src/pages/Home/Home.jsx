import HeroSection from "../../components/Home/HeroSection";
import ServiceSection from "../../components/Home/ServiceSection";
import Navigation from "../../components/Navigation/Navigation";
import Stats from "../../components/Home/Stats";
import AboutSection from "../../components/Home/AboutSection";
import HowItWorksSection from "../../components/Home/HowItWorksSection";
import CallToActionSection from "../../components/Home/CTASection";
import Footer from "../../components/Home/Footer";
import IconSection from "../../components/Home/IconSection";
import { Helmet } from "react-helmet-async";
import HomeMetadata from "../../SEO/HomeMetadata";
import { useLocation } from "react-router-dom";
import { useEffect, useRef } from "react";

export default function Home() {
    const location = useLocation();
    const serviceRef = useRef();

    useEffect(() => {
        if (location.state?.scrollTo) {
            const section = location.state.scrollTo;

            switch (section) {
                case "services": {
                    serviceRef.current?.scrollIntoView({ behavior: "smooth" });
                    break;
                }
            }
        }
    }, []);

    return (
        <main className="w-full overflow-x-hidden font-main min-h-screen bg-dark-500">
            <HomeMetadata />
            <Navigation />
            <HeroSection />
            <div ref={serviceRef} id="services">
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
