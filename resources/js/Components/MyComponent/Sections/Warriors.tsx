import { useInView } from "@/hooks/useInView";
import Slider from "../Slider";

export default function Warriors() {
    const { ref, isVisible } = useInView();

    return (
        <div className="font-jakarta container py-20 space-y-10" id="warriors">
            <div className="space-y-7 text-center">
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
            <Slider />
        </div>
    );
}
