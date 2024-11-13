import { Kasus } from "@/types";
import { Link } from "@inertiajs/react";

export default function StudiKasusCard({ kasus }: { kasus?: Kasus }) {
    return (
        <div className="max-w-sm space-y-3 mb-3 p-2">
            <Link
                href="/case/1/detail"
                className="group relative block overflow-hidden rounded-[10px] after:absolute after:top-0 after:h-full after:w-full after:bg-gradient-to-b after:from-[#292929]/0 after:to-[#292929] after:opacity-0 after:transition after:duration-300 hover:after:opacity-100"
            >
                <img
                    src="/assets/image/card-1.png"
                    className="w-full transition duration-300 group-hover:scale-105"
                    alt="image"
                />
            </Link>
            <div className="space-y-5 p-2">
                <div className="space-y-2">
                    <Link
                        href="/case/1/detail"
                        className="text-2xl font-bold hover:underline"
                    >
                        UBS
                    </Link>
                    <p className="text-sm">
                        Unified payment flows and seamless mobile experience
                        across all mobile banking app features
                    </p>
                </div>
                <div className="flex flex-wrap gap-2">
                    <Category name="UI/UX" href="/" />
                    <Category name="Website Development" href="/" />
                    <Category name="App Development" href="/" />
                </div>
            </div>
        </div>
    );
}

export function Category({ name, href }: { name: string; href: string }) {
    return (
        <Link
            href={href}
            className="h-fit rounded-full border-[1.5px] border-black px-5 py-1.5 text-sm font-medium leading-[150%] tracking-[2%] transition hover:bg-black hover:text-white"
        >
            {name}
        </Link>
    );
}
