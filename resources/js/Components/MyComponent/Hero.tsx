export default function Hero({
    title,
    subtitle,
}: {
    title: string;
    subtitle?: string;
}) {
    return (
        <div className="font-jakarta relative space-y-5 overflow-hidden bg-primary px-5 py-32 text-center text-white selection:bg-white">
            <h1 className="relative z-20 text-3xl font-bold leading-[120%] md:text-4xl lg:text-[42px] selection:text-primary">
                {title}
            </h1>
            <p className="relative z-20 max-w-screen-lg mx-auto selection:text-primary">{subtitle}</p>
            <img
                src="/assets/image/halfcircle_4.webp"
                loading="lazy"
                alt="halfcircle"
                className="absolute bottom-0 left-0 z-10 w-32"
            />
        </div>
    );
}
