import { useInView } from "@/hooks/useInView"

export default function Testimonials() {
    const { ref, isVisible } = useInView()

    return (
        <div className="py-20 font-jakarta">
            <div className="space-y-5">
                <h2 className="relative w-fit mx-auto text-3xl font-bold leading-[120%] md:text-4xl lg:text-[42px]">
                    Suara Mereka, Bukti Kami
                </h2>
                <p className="font-semibold text-center">
                    Kisah Sukses Klien Kami dalam Kata Mereka Sendiri
                </p>
            </div>
        </div>
    )
}

// function TestimonialCard({testimonial}: {testimonial: }){
//     return (
//         <div>
//             <img src="" alt="" />
//             <p>{}</p>
//         </div>
//     )
// }