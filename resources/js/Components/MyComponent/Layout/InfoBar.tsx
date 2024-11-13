import { Link } from "@inertiajs/react";
import { Instagram } from "lucide-react";

export default function InfobBar() {
    return (
        <div className="hidden bg-primary text-white lg:block">
            <div className="container flex items-center justify-between p-5" id="home">
                <ul className="flex items-center gap-4">
                    <li className="flex items-center gap-2 text-xs">
                        <img
                            src="/assets/image/icons/phone.svg"
                            width={18}
                            alt="phone"
                        />
                        <span>+ 62 853-4291-3781</span>
                    </li>
                    <li className="flex items-center gap-2 text-xs">
                        <img
                            src="/assets/image/icons/mail.svg"
                            width={18}
                            alt="mail"
                        />
                        <span>cs@celebesdigital.id</span>
                    </li>
                    <li className="flex items-center gap-2 text-xs">
                        <img
                            src="/assets/image/icons/location-marker.svg"
                            width={18}
                            alt="location-marker"
                        />
                        <span>
                            Jalan Andi Djemma No. 38, Makassar, Sulawesi Selatan
                        </span>
                    </li>
                </ul>
                <ul className="flex items-center gap-4">
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
                </ul>
            </div>
        </div>
    );
}
