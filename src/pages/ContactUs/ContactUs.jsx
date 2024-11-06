import React from "react";
import ContactUsSection from "../../components/ContactUs/ContactUsSection";
import Navigation from "../../components/Navigation/Navigation";
import Footer from "../../components/Home/Footer";

export default function ContactUs() {
    return (
        <main className="w-full overflow-x-hidden font-main min-h-screen bg-dark-500">
            <Navigation />
            <ContactUsSection />
            <Footer />
        </main>
    );
}
