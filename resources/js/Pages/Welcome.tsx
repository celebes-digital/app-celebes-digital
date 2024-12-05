import About from "@/Components/MyComponent/Sections/About";
import FindUs from "@/Components/MyComponent/Sections/FindUs";
import Home from "@/Components/MyComponent/Sections/Home";
import JoinUs from "@/Components/MyComponent/Sections/JoinUs";
import Konten from "@/Components/MyComponent/Sections/Konten";
import Products from "@/Components/MyComponent/Sections/Product";
import StudiKasus from "@/Components/MyComponent/Sections/StudiKasus";
import Testimonials from "@/Components/MyComponent/Sections/Testimonials";
import Warriors from "@/Components/MyComponent/Sections/Warriors";
import GuestLayout from "@/Layouts/GuestLayout";
import { Client, KontenProps, Portofolio, Product, Testimoni, Warrior } from "@/types";

export default function Welcome({
    portofolios,
    testimonials,
    clients,
    warriors,
    kontens,
    products
}: {
    portofolios: Portofolio[];
    testimonials: Testimoni[];
    clients: Client[];
    warriors: Warrior[];
    kontens: KontenProps[];
    products: Product[];
}) {
    return (
        <GuestLayout>
            <Home />
            <About clients={clients} />
            <StudiKasus portofolios={portofolios} />
            <Products products={products} />
            <Warriors warriors={warriors} />
            <Testimonials testimonials={testimonials} />
            <JoinUs />
            <Konten kontens={kontens} />
            <FindUs />
        </GuestLayout>
    );
}
