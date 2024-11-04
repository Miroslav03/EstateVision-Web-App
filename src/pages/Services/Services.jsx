import Navigation from "../../components/Navigation/Navigation";
import ModelSection from "../../components/Services/ModelSection";
import StaticPhotography from "../../components/Services/StaticPhotography";

export default function Services() {
    return (
        <main className="w-full overflow-x-hidden font-main min-h-screen bg-dark-500">
            <Navigation />
            <ModelSection />
            <StaticPhotography />
        </main>
    );
}
