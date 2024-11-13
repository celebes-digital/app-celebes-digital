export default function Hero({ title, subtitle }: { title: string, subtitle?: string }) {
    return (
        <div className="py-32 font-jakarta text-center bg-primary text-white space-y-5 relative overflow-hidden px-5">
            <h1 className="text-3xl font-bold leading-[120%] md:text-4xl lg:text-[42px] z-20 relative">{title}</h1>
            <p className="z-20 relative">{subtitle}</p>
            <img src="/assets/image/halfcircle_4.png" alt="halfcircle" className="absolute left-0 bottom-0 w-32 z-10" />
        </div>
    )
}