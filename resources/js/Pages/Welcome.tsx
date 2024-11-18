import About from "@/Components/MyComponent/Sections/About";
import FindUs from "@/Components/MyComponent/Sections/FindUs";
import Home from "@/Components/MyComponent/Sections/Home";
import JoinUs from "@/Components/MyComponent/Sections/JoinUs";
import StudiKasus from "@/Components/MyComponent/Sections/StudiKasus";
import Testimonials from "@/Components/MyComponent/Sections/Testimonials";
import Warriors from "@/Components/MyComponent/Sections/Warriors";
import GuestLayout from "@/Layouts/GuestLayout";
import { Client, Portofolio, Testimoni } from "@/types";

export default function Welcome({
    portofolios,
    testimonials,
    clients,
}: {
    portofolios: Portofolio[];
    testimonials: Testimoni[];
    clients: Client[];
}) {
    return (
        <GuestLayout>
            <Home />
            <About clients={clients} />
            <StudiKasus portofolios={portofolios} />
            <Warriors />
            <Testimonials testimonials={testimonials} />
            <JoinUs />
            <FindUs />
        </GuestLayout>
    );
}
