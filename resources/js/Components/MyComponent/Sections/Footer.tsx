import { Link } from "@inertiajs/react";
import { Github, Instagram } from "lucide-react";

export default function Footer() {
    return (
        <div className="font-jakarta bg-primary text-white">
            <div className="container space-y-5 px-5 py-6 md:flex md:items-center md:justify-between md:space-y-0">
                <h4 className="text-center text-sm font-medium md:text-left">
                    Copyright © 2024 Celebesdigital | Powered by Celebesdigital
                </h4>
                <ul className="flex items-center justify-center gap-4 md:justify-start">
                    <li>
                        <Link href="https://www.facebook.com/celebesdigital/" className="group">
                            <img
                                src="/assets/image/icons/meta.svg"
                                loading="lazy"
                                width={18}
                                className="transition duration-200 group-hover:-translate-y-1"
                                alt="meta"
                            />
                        </Link>
                    </li>
                    <li>
                        <Link href="https://www.tiktok.com/@celebesdigital" className="group">
                            <img
                                src="/assets/image/icons/tiktok.svg"
                                loading="lazy"
                                width={16}
                                className="transition duration-200 group-hover:-translate-y-1"
                                alt="tiktok"
                            />
                        </Link>
                    </li>
                    <li>
                        <Link href="https://www.youtube.com/@celebesdigital" className="group">
                            <img
                                src="/assets/image/icons/youtube.svg"
                                loading="lazy"
                                width={18}
                                className="transition duration-200 group-hover:-translate-y-1"
                                alt="youtube"
                            />
                        </Link>
                    </li>
                    <li>
                        <Link href="https://www.instagram.com/celebesdigital_id/" className="group">
                            <Instagram className="duration-20 h-[18px] w-[18px] transition group-hover:-translate-y-1" />
                        </Link>
                    </li>
                    <li>
                        <Link href="https://www.linkedin.com/in/celebes-digital-2454b287/?originalSubdomain=id" className="group">
                            <img
                                src="/assets/image/icons/linkedin.svg"
                                loading="lazy"
                                width={17}
                                className="transition duration-200 group-hover:-translate-y-1"
                                alt="linkedin"
                            />
                        </Link>
                    </li>
                    <li>
                        <Link href="https://www.linkedin.com/in/celebes-digital-2454b287/?originalSubdomain=id" className="group">
                            <Github className="duration-20 h-[19px] w-[19px] transition group-hover:-translate-y-1" />
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}
