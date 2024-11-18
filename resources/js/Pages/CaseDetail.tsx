import Hero from "@/Components/MyComponent/Hero";
import GuestLayout from "@/Layouts/GuestLayout";

export default function CaseDetail() {
    return (
        <GuestLayout>
            <Hero title="UBS" />

            <div className="font-jakarta pb-20">
                <div className="container space-y-20 px-5">
                    <div className="space-y-5">
                        <div className="relative z-20 -mt-20 h-[550px] w-full rounded-md bg-[url('/assets/image/detail_1.png')] bg-cover bg-center shadow-md"></div>
                        <div className="flex flex-col gap-2 md:flex-row md:justify-between">
                            <span className="order-2 text-sm font-bold text-black/50 md:order-1">
                                Client: UBS
                            </span>
                            <span className="order-1 text-sm font-bold text-black/50 md:order-2">
                                Service: UI/UX, Website Development, App
                                Development
                            </span>
                        </div>
                    </div>

                    <div className="mx-auto max-w-screen-lg space-y-5">
                        <p className="font-medium">
                            UBS aims at providing a best-in-class banking app
                            for their private clients. The client turned to the
                            product design experts at Netguru for support in
                            redesigning the app. The goal was to unify payment
                            flows and to design a seamless mobile experience
                            across all mobile banking app features. The KPIs
                            were to improve ratings in the app stores and
                            accelerate the login process.
                        </p>
                        <p className="font-medium">
                            UBS is a multinational investment bank based in
                            Switzerland, active in all major financial centers
                            and with offices in over 50 countries. It is
                            Switzerland’s largest banking institution, the
                            third-largest bank in Europe, and the largest
                            private bank in the world, serving private,
                            corporate, and institutional clients.
                        </p>
                        <p className="font-medium">
                            UBS develops a personal mobile banking application
                            dedicated to their private clients. It allows them
                            to make secure and convenient financial transactions
                            such as paying bills, scanning payment slips, and
                            trading assets, all on their smartphone or tablet.
                        </p>
                    </div>

                    <div className="space-y-5">
                        <div className="relative z-20 h-[550px] w-full rounded-md bg-[url('/assets/image/detail_2.png')] bg-cover bg-center shadow-md"></div>
                        <div className="relative z-20 h-[550px] w-full rounded-md bg-[url('/assets/image/detail_3.png')] bg-cover bg-center shadow-md"></div>
                    </div>
                </div>
            </div>
        </GuestLayout>
    );
}
