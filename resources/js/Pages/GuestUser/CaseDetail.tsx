import Hero from "@/Components/MyComponent/Hero";
import GuestLayout from "@/Layouts/GuestLayout";

export default function CaseDetail() {
    return (
        <GuestLayout>
            <Hero title="UBS" />

            <div className="pb-20 font-jakarta">
                <div className="container px-5 space-y-20">
                    <div className="space-y-5">
                        <div className="bg-[url('/assets/image/detail_1.png')] bg-cover relative z-20 shadow-md rounded-md -mt-20 w-full h-[550px] bg-center"></div>
                        <div className="flex flex-col md:flex-row md:justify-between gap-2">
                            <span className="order-2 md:order-1 text-black/50 font-bold text-sm">Client: UBS</span>
                            <span className="order-1 md:order-2 text-black/50 font-bold text-sm">Service: UI/UX, Website Development, App Development</span>
                        </div>
                    </div>

                    <div className="max-w-screen-lg mx-auto space-y-5">
                        <p className="font-medium">
                            UBS aims at providing a best-in-class banking app for their private clients. The client turned to the product design experts at Netguru for support in redesigning the app. The goal was to unify payment flows and to design a seamless mobile experience across all mobile banking app features. The KPIs were to improve ratings in the app stores and accelerate the login process.
                        </p>
                        <p className="font-medium">
                            UBS is a multinational investment bank based in Switzerland, active in all major financial centers and with offices in over 50 countries. It is Switzerland’s largest banking institution, the third-largest bank in Europe, and the largest private bank in the world, serving private, corporate, and institutional clients.
                        </p>
                        <p className="font-medium">
                            UBS develops a personal mobile banking application dedicated to their private clients. It allows them to make secure and convenient financial transactions such as paying bills, scanning payment slips, and trading assets, all on their smartphone or tablet.
                        </p>
                    </div>

                    <div className="space-y-5">
                        <div className="bg-[url('/assets/image/detail_2.png')] bg-cover relative z-20 shadow-md rounded-md w-full h-[550px] bg-center"></div>
                        <div className="bg-[url('/assets/image/detail_3.png')] bg-cover relative z-20 shadow-md rounded-md w-full h-[550px] bg-center"></div>
                    </div>
                </div>
            </div>
        </GuestLayout>
    )
}