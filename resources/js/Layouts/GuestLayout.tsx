import InfobBar from "@/Components/MyComponent/Layout/InfoBar";
import Navbar from "@/Components/MyComponent/Layout/Navbar";
import Footer from "@/Components/MyComponent/Sections/Footer";
import { PropsWithChildren } from "react";

export default function GuestLayout({ children }: PropsWithChildren) {
    return (
        <div className="min-h-screen bg-[#F8F8F8] selection:bg-primary selection:text-white">
            <InfobBar />
            <Navbar />

            <main className="min-h-screen">{children}</main>

            <a href="https://wa.me/6282292877750" className="bg-white rounded-full overflow-hidden fixed bottom-2 right-2 z-20">
                <img src="/assets/image/icons/whatsapp.webp" alt="whatsapp" width={50} />
            </a>

            <Footer />
        </div>
    );
}
