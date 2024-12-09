import Hero from "@/Components/MyComponent/Hero";
import { Button } from "@/Components/ui/button";
import GuestLayout from "@/Layouts/GuestLayout";
import { extractFirstParagraph } from "@/lib/paragrafExtract";
import { Portofolio } from "@/types";
import { Link, useForm } from "@inertiajs/react";
import { SyntheticEvent } from "react";
import toast from "react-hot-toast";

export default function CaseDetail({ portofolio }: { portofolio: Portofolio }) {
    return (
        <GuestLayout>
            <Hero title={portofolio.name} />

            <div className="font-jakarta relative pb-20">
                <img
                    src="/assets/image/halfcircle_2.webp"
                    alt="half circle"
                    className="absolute right-0 top-40"
                    width={80}
                    loading="lazy"
                />
                <div className="container space-y-20 px-5">
                    <div className="space-y-5">
                        <div
                            className={`relative z-20 -mt-20 h-[550px] w-full rounded-md bg-cover bg-center shadow-md`}
                            style={{
                                backgroundImage: `url(/storage/${portofolio.screenshots[0]})`,
                            }}
                        ></div>
                        <div className="flex flex-col gap-2 md:flex-row md:justify-between">
                            <span className="order-2 text-sm font-bold text-black/50 md:order-1">
                                Client: {portofolio.client.name}
                            </span>
                            <span className="order-2 text-sm font-bold text-black/50 md:order-1">
                                Kategori: {portofolio.product.categories.map((category, i) => (
                                    <Link href={`/case?category=${category.slug}`} className="underline">{category.name}{i + 1 !== portofolio.product.categories.length ? ', ' : ''}</Link>
                                ))}
                            </span>
                            <span className="order-1 text-sm font-bold text-black/50 md:order-2">
                                Jenis Produk: <Link href={`/case/${portofolio.product.slug}`} className="underline">{portofolio.product.name}</Link>
                            </span>
                        </div>
                    </div>

                    <div className="mx-auto max-w-screen-lg space-y-5">
                        <div
                            className="space-y-4 text-justify"
                            dangerouslySetInnerHTML={{
                                __html: `${portofolio.description}`,
                            }}
                        />
                    </div>

                    <div className="space-y-5">
                        {portofolio.screenshots
                            .slice(1, portofolio.screenshots.length)
                            .map((screenshot, i) => (
                                <div
                                    className={`relative z-20 h-[550px] w-full rounded-md bg-cover bg-center shadow-md`}
                                    style={{
                                        backgroundImage: `url(/storage/${screenshot})`,
                                    }}
                                    key={i}
                                ></div>
                            ))}
                    </div>
                </div>
            </div>
        </GuestLayout>
    );
}
