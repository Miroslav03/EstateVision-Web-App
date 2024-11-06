import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Services from "./pages/Services/Services";
import AboutUs from "./pages/AboutUs/AboutUs";
import ContactUs from "./pages/ContactUs/ContactUs";

export default function App() {
    return (
        <Routes>
            <Route path="/" Component={Home}/>
            <Route path="/services" Component={Services}/>
            <Route path="/about" Component={AboutUs}/>
            <Route path="/contact" Component={ContactUs}/>
        </Routes>
    );
}
