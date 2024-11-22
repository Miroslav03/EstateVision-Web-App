import { Route, Routes } from "react-router-dom";
import { Suspense, useEffect, useState, lazy } from "react";
import Loader from "./components/Loader/Loader";
import { HelmetProvider } from "react-helmet-async";

const Home = lazy(() => import("./pages/Home/Home"));
const Services = lazy(() => import("./pages/Services/Services"));
const AboutUs = lazy(() => import("./pages/AboutUs/AboutUs"));
const ContactUs = lazy(() => import("./pages/ContactUs/ContactUs"));
const Pricing = lazy(() => import("./pages/Pricing/Pricing"));

export default function App() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setIsLoading(false);
        }, 1000);

        return () => clearTimeout(timeout);
    }, []);

    if (isLoading) {
        return <Loader />;
    }

    return (
        <HelmetProvider>
            <Suspense fallback={<Loader />}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/prices" element={<Pricing />} />
                    <Route path="/about" element={<AboutUs />} />
                    <Route path="/contact" element={<ContactUs />} />
                </Routes>
            </Suspense>
        </HelmetProvider>
    );
}
