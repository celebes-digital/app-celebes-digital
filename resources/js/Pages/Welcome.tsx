import About from "@/Components/MyComponent/Sections/About";
import FindUs from "@/Components/MyComponent/Sections/FindUs";
import Galeri from "@/Components/MyComponent/Sections/Galeri";
import Home from "@/Components/MyComponent/Sections/Home";
import JoinUs from "@/Components/MyComponent/Sections/JoinUs";
import Konten from "@/Components/MyComponent/Sections/Konten";
import Products from "@/Components/MyComponent/Sections/Product";
import StudiKasus from "@/Components/MyComponent/Sections/StudiKasus";
import Testimonials from "@/Components/MyComponent/Sections/Testimonials";
import Warriors from "@/Components/MyComponent/Sections/Warriors";
import GuestLayout from "@/Layouts/GuestLayout";
import { Client, Galeri as GaleriProps, KontenProps, Portofolio, Product, Testimoni, Warrior } from "@/types";

export default function Welcome({
    portofolios,
    testimonials,
    clients,
    warriors,
    kontens,
    products,
    galeries
}: {
    portofolios: Portofolio[];
    testimonials: Testimoni[];
    clients: Client[];
    warriors: Warrior[];
    kontens: KontenProps[];
    products: Product[];
    galeries: GaleriProps[]
}) {
    return (
        <GuestLayout>
            <Home />
            <About clients={clients} />
            <StudiKasus portofolios={portofolios} />
            <Products products={products} />
            <Warriors warriors={warriors} />
            <Galeri galeries={galeries} />
            <Konten kontens={kontens} />
            <Testimonials testimonials={testimonials} />
            <JoinUs />
            <FindUs />
        </GuestLayout>
    );
}
