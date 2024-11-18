import { Testimoni } from "@/types";
import Marquee from "react-fast-marquee";

export default function TestimonialSlider({ testimonials }: { testimonials: Testimoni[] }) {
    return (
        <div className="relative testimonial">
            <div className="w-10 z-20 h-full bg-gradient-to-r absolute left-0 top-0 to-[#f8f8f800] from-[#F8F8F8]"></div>
            <Marquee autoFill={true}>
                {testimonials.map((testimonial, i) => (
                    <TestimonialCard testimonial={testimonial} key={i} />
                ))}
            </Marquee>
            <div className="w-10 z-20 h-full bg-gradient-to-r absolute right-0 top-0 from-[#f8f8f800] to-[#F8F8F8]"></div>
        </div>
    );
}

function TestimonialCard({ testimonial }: { testimonial: Testimoni }) {
    return (
        <div className="min-w-[340px] max-w-[340px] mr-5 space-y-7 rounded-xl h-fit border p-5 shadow-md">
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
