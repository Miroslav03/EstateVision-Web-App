import { useEffect, useRef } from "react";
import Footer from "../../components/Home/Footer";
import Navigation from "../../components/Navigation/Navigation";
import DroneSection from "../../components/Services/DroneSection";
import ModelSection from "../../components/Services/ModelSection";
import StaticPhotography from "../../components/Services/StaticPhotography";
import { useSearchParams } from "react-router-dom";

export default function Services() {
    const modelSectionRef = useRef();
    const staticPhotographyRef = useRef();
    const droneSectionRef = useRef();

    const [searchParams] = useSearchParams();

    // Initial load scroll to section
    useEffect(() => {
        const section = searchParams.get("section");

        if (!section) return;

        let targetRef;
        if (section === "modelSection") {
            targetRef = modelSectionRef;
        } else if (section === "staticPhotography") {
            targetRef = staticPhotographyRef;
        } else if (section === "droneSection") {
            targetRef = droneSectionRef;
        }

        if (targetRef && targetRef.current) {
            targetRef.current.scrollIntoView();
        }
    }, [searchParams, modelSectionRef, staticPhotographyRef, droneSectionRef])

    return (
        <main className="w-full overflow-x-hidden font-main min-h-screen bg-dark-500">
            <Navigation />
            <ModelSection id="model-section" modelSectionRef={modelSectionRef} />
            <StaticPhotography id="static-photography" staticPhotographyRef={staticPhotographyRef} />
            <DroneSection id="drone-section" droneSectionRef={droneSectionRef}/>
            <Footer />
        </main>
    );
}
