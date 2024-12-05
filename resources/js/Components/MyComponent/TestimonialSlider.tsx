import { Testimoni } from "@/types";
import Marquee from "react-fast-marquee";

export default function TestimonialSlider({
    testimonials,
}: {
    testimonials: Testimoni[];
}) {
    return (
        <>
            {testimonials.length > 0 ? (
                <div className="testimonial relative">
                    <div className="absolute left-0 top-0 z-20 h-full w-10 bg-gradient-to-r from-[#F8F8F8] to-[#f8f8f800]"></div>
                    <Marquee autoFill={true} pauseOnHover={true}>
                        {testimonials.map((testimonial, i) => (
                            <TestimonialCard
                                testimonial={testimonial}
                                key={i}
                            />
                        ))}
                    </Marquee>
                    <div className="absolute right-0 top-0 z-20 h-full w-10 bg-gradient-to-r from-[#f8f8f800] to-[#F8F8F8]"></div>
                </div>
            ) : (
                <p className="text-center">
                    Belum ada testimoni yang ditambah.
                </p>
            )}
        </>
    );
}

function TestimonialCard({ testimonial }: { testimonial: Testimoni }) {
    return (
        <div className="mr-5 h-fit min-w-[340px] max-w-[340px] space-y-7 rounded-xl border p-5 shadow-md">
            <img
                src={`/storage/${testimonial.image}`}
                loading="lazy"
                alt={testimonial.fullname}
                className="h-16 w-16 rounded-full"
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
