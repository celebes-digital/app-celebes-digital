import { Link } from "@inertiajs/react";
import { Instagram } from "lucide-react";

export default function Footer() {
    return (
        <div className="font-jakarta bg-primary text-white">
            <div className="container space-y-5 px-5 py-6 md:flex md:items-center md:justify-between md:space-y-0">
                <h4 className="text-center text-sm font-medium md:text-left">
                    Copyright © 2024 Celebesdigital | Powered by Celebesdigital
                </h4>
                <ul className="flex items-center justify-center gap-4 md:justify-start">
                    <li>
                        <Link href="/" className="group">
                            <img
                                src="/assets/image/icons/meta.svg"
                                width={18}
                                className="transition duration-200 group-hover:-translate-y-1"
                                alt="meta"
                            />
                        </Link>
                    </li>
                    <li>
                        <Link href="/" className="group">
                            <img
                                src="/assets/image/icons/tiktok.svg"
                                width={16}
                                className="transition duration-200 group-hover:-translate-y-1"
                                alt="tiktok"
                            />
                        </Link>
                    </li>
                    <li>
                        <Link href="/" className="group">
                            <img
                                src="/assets/image/icons/youtube.svg"
                                width={18}
                                className="transition duration-200 group-hover:-translate-y-1"
                                alt="youtube"
                            />
                        </Link>
                    </li>
                    <li>
                        <Link href="/" className="group">
                            <Instagram className="duration-20 h-4 w-4 transition group-hover:-translate-y-1" />
                        </Link>
                    </li>
                    <li>
                        <Link href="/" className="group">
                            <img
                                src="/assets/image/icons/linkedin.svg"
                                width={17}
                                className="transition duration-200 group-hover:-translate-y-1"
                                alt="linkedin"
                            />
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}
