import Hero from "@/Components/MyComponent/Hero";
import StudiKasusCard, { Category } from "@/Components/MyComponent/StudiKasusCard";
import GuestLayout from "@/Layouts/GuestLayout";
import { Filter } from "lucide-react";

export default function CaseStudy() {
    return (
        <GuestLayout>
            <Hero title="Studi Kasus" subtitle="Kasus Nyata, Dampak Nyata: Solusi yang Mengubah Industri" />

            <div className="py-20 space-y-5 container">
                <div className="px-5">
                    <div className="border-b gap-5 border-b-black space-y-5 md:space-y-0 pb-2 md:flex md:justify-between md:items-center">
                        <div className="flex items-center gap-2 mb-3">
                            <h4 className="font-semibold">Filter</h4>
                            <Filter className="w-5 h-5" />
                        </div>
                        <ul className="flex flex-wrap items-center gap-2">
                            <li className="mb-3">
                                <Category name="All" href="" />
                            </li>
                            <li className="mb-3">
                                <Category name="UI/UX" href="?category=ui_ux" />
                            </li>
                            <li className="mb-3">
                                <Category name="Website Development" href="?category=website_development" />
                            </li>
                            <li className="mb-3">
                                <Category name="App Development" href="?category=app_development" />
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="flex flex-wrap justify-center gap-3">
                    <StudiKasusCard />
                    <StudiKasusCard />
                    <StudiKasusCard />
                    <StudiKasusCard />
                    <StudiKasusCard />
                    <StudiKasusCard />
                </div>
            </div>
        </GuestLayout>
    )
}