import About from "@/Components/MyComponent/Sections/About";
import FindUs from "@/Components/MyComponent/Sections/FindUs";
import Home from "@/Components/MyComponent/Sections/Home";
import JoinUs from "@/Components/MyComponent/Sections/JoinUs";
import StudiKasus from "@/Components/MyComponent/Sections/StudiKasus";
import Testimonials from "@/Components/MyComponent/Sections/Testimonials";
import Warriors from "@/Components/MyComponent/Sections/Warriors";
import GuestLayout from "@/Layouts/GuestLayout";

export default function Welcome() {
    return (
        <GuestLayout>
            <Home />
            <About />
            <StudiKasus />
            <Warriors />
            <Testimonials />
            <JoinUs />
            <FindUs />
        </GuestLayout>
    );
}
