import { Outlet } from "react-router-dom";
import Footer from "../../components/Home/Footer";
import Navigation from "../../components/Navigation/Navigation";

import ServicesMetadata from "../../SEO/ServicesMetadata";

export default function Services() {
    return (
        <main className="w-full overflow-x-hidden font-main min-h-screen bg-dark-500">
            <ServicesMetadata />
            <Navigation />
            <Outlet />
            <Footer />
        </main>
    );
}
