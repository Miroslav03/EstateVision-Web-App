import React from "react";
import ContactUsSection from "../../components/ContactUs/ContactUsSection";
import Navigation from "../../components/Navigation/Navigation";
import Footer from "../../components/Home/Footer";
import { Helmet } from "react-helmet-async";
import ContactUsMetadata from "../../SEO/ContactUsmetadata";

export default function ContactUs() {
    return (
        <main className="w-full overflow-x-hidden font-main min-h-screen bg-dark-500">
            <ContactUsMetadata />
            <Navigation />
            <ContactUsSection />
            <Footer />
        </main>
    );
}
