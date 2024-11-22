import InfobBar from "@/Components/MyComponent/Layout/InfoBar";
import Navbar from "@/Components/MyComponent/Layout/Navbar";
import Footer from "@/Components/MyComponent/Sections/Footer";
import { PropsWithChildren } from "react";

export default function GuestLayout({ children }: PropsWithChildren) {
    return (
        <div className="min-h-screen bg-[#F8F8F8]">
            <InfobBar />
            <Navbar />

            <main>{children}</main>

            <a href="https://www.whatsapp.com" className="bg-white rounded-full overflow-hidden fixed bottom-2 right-2 z-20">
                <img src="/assets/image/icons/whatsapp.png" alt="whatsapp" width={60} />
            </a>

            <Footer />
        </div>
    );
}
