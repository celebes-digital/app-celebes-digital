import { useInView } from "@/hooks/useInView";
import { Testimoni } from "@/types";
import TestimonialSlider from "../TestimonialSlider";

export default function Testimonials({
    testimonials,
}: {
    testimonials: Testimoni[];
}) {
    const { ref, isVisible } = useInView();

    return (
        <div className="font-jakarta py-20">
            <div className="container px-5 space-y-10">
                <div className="space-y-5">
                    <h2 className="relative mx-auto text-center w-fit text-3xl font-bold leading-[120%] md:text-4xl lg:text-[42px]">
                        Suara{" "}
                        <span className="relative inline-block sm:ml-1 sm:inline">
                            Mereka
                            <svg
                                width="160"
                                ref={ref}
                                height="52"
                                className={`${isVisible ? "draw" : ""} path absolute -bottom-2 right-1/2 w-32 translate-x-1/2 md:-right-[14px] md:bottom-0 md:w-40 md:translate-x-0 lg:bottom-0 lg:right-0`}
                                viewBox="0 0 160 52"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M132.048 4.54366C102.686 0.485032 36.9743 -1.69648 9.02583 22.0465C-25.9098 51.7252 78.7493 52.5109 118.59 47.9202C142.429 45.1735 158 38.453 158 28.7299C158 20.3589 130.961 7.77786 82.0236 10.156"
                                    stroke="#DD0000"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                />
                            </svg>
                        </span>
                        , Bukti Kami
                    </h2>
                    <p className="text-center font-semibold">
                        Kisah Sukses Klien Kami dalam Kata Mereka Sendiri
                    </p>
                </div>
                <TestimonialSlider testimonials={testimonials} />
            </div>
        </div>
    );
}

