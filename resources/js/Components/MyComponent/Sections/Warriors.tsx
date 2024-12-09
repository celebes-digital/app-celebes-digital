import { useInView } from "@/hooks/useInView";
import Slider from "../Slider";
import { Warrior } from "@/types";

export default function Warriors({ warriors }: { warriors: Warrior[] }) {
    const { ref, isVisible } = useInView();

    return (
        <div className="relative">
            <img
                src="/assets/image/halfcircle_1.webp"
                alt="half circle"
                className="absolute left-0 top-0"
                loading="lazy"
                width={100}
            />
            <div
                className="font-jakarta container space-y-10 py-20"
            >
                <div className="space-y-7 text-center" id="warriors">
                    <h1 className="text-3xl font-bold leading-[120%] md:text-4xl lg:text-[42px]">
                        Warriors
                    </h1>
                    <p className="font-semibold">
                        Ketemui
                        <span className="relative ml-1">
                            Tenaga Ahli
                            <svg
                                ref={ref}
                                className={`${isVisible ? "draw" : ""} path absolute -bottom-2 right-0 w-20 lg:-bottom-2 lg:-right-1 lg:w-[88px]`}
                                width="122"
                                height="10"
                                viewBox="0 0 122 10"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M3 7C21.0315 4.61936 69.4756 0.808722 119 4.61124"
                                    stroke="#DD0000"
                                    strokeWidth="6"
                                    strokeLinecap="round"
                                />
                            </svg>
                        </span>{" "}
                        di Balik Setiap Proyek Berkualitas
                    </p>
                </div>
                <Slider warriors={warriors} />
            </div>
        </div>
    );
}
