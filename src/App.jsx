import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Services from "./pages/Services/Services";
import AboutUs from "./pages/AboutUs/AboutUs";
import ContactUs from "./pages/ContactUs/ContactUs";
import Pricing from "./pages/Pricing/Pricing";
import Loader from "./components/Loader/Loader";
import { useEffect, useState } from "react";

export default function App() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setIsLoading(false);
        }, 1000);

        return () => clearTimeout(timeout);
    })

    if (isLoading) {
        return <Loader />
    }

    return (
        <Routes>
            <Route path="/" Component={Home}/>
            <Route path="/services" Component={Services}/>
            <Route path="/prices" Component={Pricing}/>
            <Route path="/about" Component={AboutUs}/>
            <Route path="/contact" Component={ContactUs}/>
        </Routes>
    );
}
