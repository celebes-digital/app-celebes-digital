import { useInView } from "@/hooks/useInView";

export default function About() {
    const { ref: svgRef, isVisible } = useInView({
        threshold: 0.5,
        rootMargin: "50px",
    });

    const { ref: svgRef2, isVisible: isVisible2 } = useInView({
        threshold: 0.5,
    });

    const { ref: svgRef3, isVisible: isVisible3 } = useInView({
        threshold: 0.5,
    });

    const { ref: svgRef4, isVisible: isVisible4 } = useInView({
        threshold: 0.5,
    });

    return (
        <div className="font-jakarta relative">
            <img
                src="/assets/image/halfcircle_1.png"
                className="absolute left-0 top-1/3 h-72 -translate-y-1/3"
                alt="half circle"
            />
            <div className="flex flex-col items-center space-y-10 px-5 py-16">
                <p className="w-fit text-center font-semibold leading-[150%] tracking-[2%]">
                    Dipercaya oleh perusahaan besar dan kecil,
                    <span className="relative inline-block sm:ml-1 sm:inline">
                        di mana pun
                        <svg
                            width="160"
                            ref={svgRef}
                            height="52"
                            className={`${isVisible ? "draw" : ""} path absolute -bottom-3 right-1/2 w-[104px] translate-x-1/2 md:-right-3 md:-top-4 md:w-28 md:translate-x-0`}
                            viewBox="0 0 160 52"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M132.048 4.54366C102.686 0.485032 36.9743 -1.69648 9.02583 22.0465C-25.9098 51.7252 78.7493 52.5109 118.59 47.9202C142.429 45.1735 158 38.453 158 28.7299C158 20.3589 130.961 7.77786 82.0236 10.156"
                                stroke="#DD0000"
                                strokeWidth="4"
                                strokeLinecap="round"
                            />
                        </svg>
                    </span>
                </p>
                <div className="scroll-hidden flex items-center gap-10 overflow-x-auto">
                    <img
                        src="/assets/image/google.png"
                        alt="google"
                        className="opacity-30 transition duration-200 hover:opacity-100"
                        width={100}
                    />
                    <img
                        src="/assets/image/microsoft.png"
                        alt="microsoft"
                        className="opacity-30 transition duration-200 hover:opacity-100"
                        width={150}
                    />
                    <img
                        src="/assets/image/apple.png"
                        alt="apple"
                        className="opacity-30 transition duration-200 hover:opacity-100"
                        width={100}
                    />
                    <img
                        src="/assets/image/blackrock.png"
                        alt="blackrock"
                        className="opacity-30 transition duration-200 hover:opacity-100"
                        width={110}
                    />
                    <img
                        src="/assets/image/nvidia.png"
                        alt="nvidia"
                        className="opacity-30 transition duration-200 hover:opacity-100"
                        width={120}
                    />
                </div>
            </div>

            <div className="container px-5 py-20" id="about">
                <div className="grid items-center gap-5 md:grid-cols-2">
                    <div className="space-y-8">
                        <h2 className="relative w-fit text-3xl font-bold leading-[120%] md:text-4xl lg:text-[42px]">
                            Tentang Kami
                            <svg
                                ref={svgRef2}
                                className={`${isVisible2 ? "draw" : ""} path absolute -right-1 bottom-0 w-20 md:w-24 lg:-bottom-1 lg:w-28`}
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
                        </h2>
                        <div className="space-y-5">
                            <p className="text-sm leading-[150%] tracking-[1%] md:text-base">
                                Kami percaya bahwa setiap bisnis adalah unik,
                                begitu juga dengan kebutuhan teknologinya. Oleh
                                karena itu, kami di PT Celebes Solusi Digital
                                tidak hanya mengembangkan aplikasi, tetapi juga
                                menciptakan solusi khusus untuk membantu bisnis
                                Anda tumbuh. Tim kami terdiri dari para ahli
                                berpengalaman di berbagai bidang teknologi,
                                mulai dari pengembangan aplikasi mobile hingga
                                sistem backend kompleks. Kami bangga telah
                                bekerja dengan berbagai industri, termasuk
                                kesehatan, pendidikan, keuangan, dan e-commerce,
                                untuk mengoptimalkan operasi dan meningkatkan
                                pengalaman pengguna.
                            </p>
                            <p className="text-sm leading-[150%] tracking-[1%] md:text-base">
                                Keberhasilan kami didorong oleh tiga nilai inti:
                                inovasi, kualitas, dan kemitraan. Kami terus
                                berinovasi dengan teknologi terbaru, memastikan
                                setiap proyek dikerjakan dengan standar kualitas
                                tertinggi, dan bekerja sama erat dengan klien
                                untuk mencapai hasil terbaik. Berlokasi di
                                Makassar, kami siap membantu mewujudkan visi
                                teknologi Anda dengan solusi aplikasi kustom
                                yang handal dan efektif. Mari bermitra dan bawa
                                bisnis Anda ke level berikutnya!
                            </p>
                        </div>
                    </div>
                    <div className="relative flex justify-center">
                        <svg
                            width="83"
                            ref={svgRef4}
                            height="89"
                            className={`${isVisible4 ? "draw" : ""} path absolute right-1/3 top-10 w-20`}
                            viewBox="0 0 83 89"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M7.2969 37.1053C11.3006 43.3089 24.841 57.7514 46.9736 65.8925"
                                stroke="#DD0000"
                                strokeWidth="7"
                                strokeLinecap="round"
                            />
                            <path
                                d="M11.5697 17.0957C18.3442 27.5946 41.2514 52.0397 78.6842 65.8284"
                                stroke="#DD0000"
                                strokeWidth="7"
                                strokeLinecap="round"
                            />
                        </svg>
                        <svg
                            width="133"
                            ref={svgRef3}
                            className={`${isVisible3 ? "draw" : ""} path absolute bottom-16 left-1/3 w-20 translate-x-1/2`}
                            height="94"
                            viewBox="0 0 133 94"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M128.464 27.7808C109.329 24.5073 57.8926 23.2947 5.2276 44.6322"
                                stroke="#DD0000"
                                strokeWidth="8"
                                strokeLinecap="round"
                            />
                            <path
                                d="M108.617 48.471C94.2537 46.2802 55.317 47.3842 14.4748 69.3266"
                                stroke="#DD0000"
                                strokeWidth="8"
                                strokeLinecap="round"
                            />
                        </svg>
                        <img
                            src="/assets/image/computer.png"
                            className="max-w-full lg:max-w-md"
                            alt="computer"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}