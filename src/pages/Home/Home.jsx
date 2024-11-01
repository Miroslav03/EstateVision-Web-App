/* eslint-disable no-unused-vars */
import HeroSection from "../../components/Home/HeroSection";
import HeroSection2 from "../../components/Home/HeroSection2";
import ServiceSection from "../../components/Home/ServiceSection";
import Navigation from "../../components/Navigation/Navigation";
import LiveDemoSection from "../../components/Home/LiveDemoSection";
import StaticPhotography from "../../components/Home/StaticPhotography";
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
            <ServiceSection />
            <Stats />
            <AboutSection />
            <IconSection />
            <HowItWorksSection />
            <CallToActionSection />
            <Footer />
            {/*  <LiveDemoSection />
            <StaticPhotography /> */}
        </main>
    );
}
