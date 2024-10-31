/* eslint-disable no-unused-vars */
import HeroSection from "../../components/Home/HeroSection";
import HeroSection2 from "../../components/Home/HeroSection2";
import ServiceSection from "../../components/Home/ServiceSection";
import Navigation from "../../components/Navigation/Navigation";
import LiveDemoSection from "../../components/Home/LiveDemoSection";
import StepByStep from "../../components/Home/StepByStep";

export default function Home() {
    return (
        <main className="w-full overflow-x-hidden font-main min-h-screen bg-dark-500">
            <Navigation />
            <HeroSection />
            <LiveDemoSection />
            <StepByStep />
            <ServiceSection />
        </main>
    );
}
