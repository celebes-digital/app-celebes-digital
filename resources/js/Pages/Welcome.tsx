import About from "@/Components/MyComponent/Sections/About";
import FindUs from "@/Components/MyComponent/Sections/FindUs";
import Home from "@/Components/MyComponent/Sections/Home";
import JoinUs from "@/Components/MyComponent/Sections/JoinUs";
import StudiKasus from "@/Components/MyComponent/Sections/StudiKasus";
import Testimonials from "@/Components/MyComponent/Sections/Testimonials";
import Warriors from "@/Components/MyComponent/Sections/Warriors";
import GuestLayout from "@/Layouts/GuestLayout";
import { Client, Portofolio, Testimoni, Warrior } from "@/types";

export default function Welcome({
    portofolios,
    testimonials,
    clients,
    warriors,
}: {
    portofolios: Portofolio[];
    testimonials: Testimoni[];
    clients: Client[];
    warriors: Warrior[];
}) {
    return (
        <GuestLayout>
            <Home />
            <About clients={clients} />
            <StudiKasus portofolios={portofolios} />
            <Warriors warriors={warriors} />
            <Testimonials testimonials={testimonials} />
            <JoinUs />
            <FindUs />
        </GuestLayout>
    );
}
