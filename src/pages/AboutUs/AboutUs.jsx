import { Helmet } from "react-helmet-async";
import AboutUsSection from "../../components/AboutUs/AboutUsSection";
import Footer from "../../components/Home/Footer";
import Navigation from "../../components/Navigation/Navigation";
import AboutMetadata from "../../SEO/AboutMetadata";

export default function AboutUs() {
    return (
        <main className="w-full overflow-x-hidden font-main min-h-screen bg-dark-500">
            <AboutMetadata />
            <Navigation />
            <AboutUsSection />
            <Footer />
        </main>
    );
}
