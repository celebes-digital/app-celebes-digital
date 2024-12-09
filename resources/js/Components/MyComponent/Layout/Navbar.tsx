import { Link } from "@inertiajs/react";
import { Button } from "../../ui/button";
import {
    Sheet,
    SheetContent,
    SheetTitle,
    SheetTrigger,
} from "@/Components/ui/sheet";
import { Menu } from "lucide-react";

const links = [
    {
        label: "Beranda",
        href: "/#home",
    },
    {
        label: "Tentang Kami",
        href: "/#about",
    },
    {
        label: "Studi Kasus",
        href: "/#case",
    },
    {
        label: "Produk",
        href: "/#produk",
    },
    {
        label: "Warriors",
        href: "/#warriors",
    },
    {
        label: "Galeri",
        href: "/#galeri",
    },
];

export default function Navbar() {
    return (
        <div className="sticky top-0 z-50 bg-white px-5 shadow-md">
            <div className="font-roboto container flex items-center justify-between py-4">
                <Link href="/">
                    <img src="/assets/image/logo.webp" alt="logo" width={140} loading="lazy" />
                </Link>
                <ul className="hidden items-center gap-10 lg:flex">
                    {links.map((link, i) => (
                        <li key={i}>
                            <Link
                                href={link.href}
                                className="text-sm font-medium transition duration-200 hover:text-primary"
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>

                <div className="flex items-center gap-5">
                    <Button
                        variant={"outline"}
                        asChild
                        className="hidden border-2 border-black bg-transparent p-5 transition duration-300 hover:scale-[1.05] hover:bg-black hover:text-white md:flex"
                    >
                        <Link href="/contact">Kontak Kami</Link>
                    </Button>

                    <Sheet>
                        <SheetTrigger className="lg:hidden">
                            <Menu className="h-6 w-6" />
                        </SheetTrigger>
                        <SheetContent className="w-full space-y-5">
                            <SheetTitle>
                                <Link
                                    href="/"
                                    className="absolute left-5 top-5"
                                >
                                    <img
                                        src="/assets/image/logo.webp"
                                        loading="lazy"
                                        alt="logo"
                                        width={140}
                                    />
                                </Link>
                            </SheetTitle>
                            <ul className="space-y-5 pt-10">
                                {links.map((link, i) => (
                                    <li className="text-center" key={i}>
                                        <Link
                                            href={link.href}
                                            key={i}
                                            className="font-medium transition duration-200 hover:text-primary"
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                            <div className="flex justify-center">
                                <Button
                                    variant={"outline"}
                                    asChild
                                    className="border-2 border-black bg-transparent p-5 hover:bg-black hover:text-white md:hidden"
                                >
                                    <Link href="/contact">Kontak Kami</Link>
                                </Button>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </div>
    );
}
