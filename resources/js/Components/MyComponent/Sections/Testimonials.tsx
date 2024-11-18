import { useInView } from "@/hooks/useInView";
import { Testimoni } from "@/types";

export default function Testimonials({
    testimonials,
}: {
    testimonials: Testimoni[];
}) {
    const { ref, isVisible } = useInView();

    return (
        <div className="font-jakarta py-20">
            <div className="container px-5">
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
                <div className="relative">
                    <div className="scroll-hidden w-full flex gap-3 overflow-x-auto py-10">
                        <div className="w-10 h-full bg-gradient-to-r absolute left-0 top-0 to-[#f8f8f800] from-[#F8F8F8]"></div>
                        {testimonials.length > 0 ? (
                            testimonials.map((testimonial, i) => (
                                <TestimonialCard
                                    testimonial={testimonial}
                                    key={i}
                                />
                            ))
                        ) : (
                            <p>Belum ada data testimoni yang dibuat.</p>
                        )}
                        <div className="w-10 h-full bg-gradient-to-r absolute right-0 top-0 from-[#f8f8f800] to-[#F8F8F8]"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function TestimonialCard({ testimonial }: { testimonial: Testimoni }) {
    return (
        <div className="min-w-[340px] space-y-7 rounded-xl h-fit border p-5 shadow-md">
            <img
                src={`/storage/${testimonial.image}`}
                alt={testimonial.fullname}
                className="w-16 h-16 md:w-20 md:h-20 rounded-full"
            />
            <p className="text-sm md:text-base">{testimonial.message}</p>

            <div className="border-l-4 border-l-primary py-1 pl-3">
                <h4 className="text-lg font-semibold leading-[150%]">
                    {testimonial.fullname}
                </h4>
                <h5 className="text-sm font-semibold leading-[150%] text-black/50">
                    {testimonial.profession}, {testimonial.company}
                </h5>
            </div>
        </div>
    );
}
