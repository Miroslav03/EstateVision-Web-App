import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Services from "./pages/Services/Services";

export default function App() {
    return (
        <Routes>
            <Route path="/" Component={Services}/>
        </Routes>
    );
}
