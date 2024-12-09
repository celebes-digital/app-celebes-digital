import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, EffectCoverflow } from "swiper/modules";
import { ArrowLeft, ArrowRight, Instagram } from "lucide-react";
import { Warrior } from "@/types";
import { useCallback, useRef, useState } from "react";
import { Swiper as SwiperType } from "swiper/types";

export default function Slider({ warriors }: { warriors: Warrior[] }) {
    const sliderRef = useRef<SwiperRef>(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const handlePrev = useCallback(() => {
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slidePrev();
    }, []);

    const handleNext = useCallback(() => {
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slideNext();
    }, []);

    const handleSlideChange = (swiper: SwiperType) => {
        setActiveIndex(swiper.realIndex);
    };

    return (
        <>
            {warriors.length > 0 ? (
                <>
                    <div className="relative">
                        <Swiper
                            ref={sliderRef}
                            effect={"coverflow"}
                            grabCursor={true}
                            slidesPerView={"auto"}
                            centeredSlides={true}
                            autoplay={true}
                            initialSlide={3}
                            loop={true}
                            freeMode={true}
                            coverflowEffect={{
                                rotate: 0,
                                stretch: -3,
                                depth: 400,
                                modifier: 1,
                                slideShadows: true,
                            }}
                            modules={[EffectCoverflow, Autoplay]}
                            className="w-full max-w-screen-md"
                            onSlideChange={handleSlideChange}
                        >
                            {warriors.map((warrior, i) => (
                                <SwiperSlide
                                    className="group relative max-w-80 overflow-hidden rounded-lg after:absolute after:top-0 after:h-full after:w-full after:bg-gradient-to-b after:from-[#292929]/0 after:to-[#292929] after:opacity-0 after:transition after:duration-300 hover:after:opacity-100"
                                    key={i}
                                >
                                    <div className="absolute bottom-5 z-20 hidden w-full flex-col items-center gap-3 pb-4 opacity-0 transition duration-300 group-hover:opacity-100 lg:flex">
                                        <div className="flex items-center gap-2">
                                            <a
                                                href={warrior.instagram}
                                                target="_blank"
                                                className="group text-white"
                                            >
                                                <Instagram className="duration-20 h-10 w-10 transition group-hover:-translate-y-1" />
                                            </a>
                                            <a
                                                href={warrior.linkedin}
                                                target="_blank"
                                                className="group"
                                            >
                                                <img
                                                    src="/assets/image/icons/linkedin.svg"
                                                    loading="lazy"
                                                    width={35}
                                                    className="transition duration-200 group-hover:-translate-y-1"
                                                    alt="linkedin"
                                                />
                                            </a>
                                        </div>
                                    </div>
                                    <img
                                        src={`/storage/${warrior.image}`}
                                        loading="lazy"
                                        className="w-full"
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                        <button
                            type="button"
                            className="absolute left-5 top-1/2 z-30 w-fit -translate-y-1/2 cursor-pointer rounded-full border-2 border-white p-2 text-white transition duration-300 md:border-gray-700 md:text-gray-700 md:hover:bg-gray-100"
                            onClick={handlePrev}
                        >
                            <ArrowLeft />
                        </button>
                        <button
                            type="button"
                            className="absolute right-5 top-1/2 z-30 w-fit -translate-y-1/2 cursor-pointer rounded-full border-2 border-white p-2 text-white transition duration-300 md:border-gray-700 md:text-gray-700 md:hover:bg-gray-50"
                            onClick={handleNext}
                        >
                            <ArrowRight />
                        </button>
                    </div>

                    <div className="mt-10 space-y-3">
                        <h1 className="text-center text-xl font-bold">
                            {warriors[activeIndex].fullname}
                        </h1>
                        <p className="text-center capitalize">
                            {warriors[activeIndex].profession}
                        </p>
                        <div className="flex items-center justify-center gap-2 lg:hidden">
                            <a
                                href={warriors[activeIndex].instagram}
                                target="_blank"
                                className="group"
                            >
                                <Instagram className="duration-20 h-8 w-8 transition group-hover:-translate-y-1" />
                            </a>
                            <a
                                href={warriors[activeIndex].linkedin}
                                target="_blank"
                                className="group"
                            >
                                <svg
                                    width="29"
                                    height="30"
                                    viewBox="0 0 20 21"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="transition duration-200 group-hover:-translate-y-1"
                                >
                                    <path
                                        d="M17.0392 17.5433H14.0775V12.9025C14.0775 11.7958 14.055 10.3717 12.5342 10.3717C10.99 10.3717 10.7542 11.5758 10.7542 12.8208V17.5433H7.7925V8H10.6375V9.30083H10.6758C11.0733 8.55083 12.04 7.75917 13.4842 7.75917C16.485 7.75917 17.04 9.73417 17.04 12.305L17.0392 17.5433ZM4.4475 6.69417C3.49417 6.69417 2.72833 5.9225 2.72833 4.97333C2.72833 4.025 3.495 3.25417 4.4475 3.25417C5.3975 3.25417 6.1675 4.025 6.1675 4.97333C6.1675 5.9225 5.39667 6.69417 4.4475 6.69417ZM5.9325 17.5433H2.9625V8H5.9325V17.5433ZM18.5208 0.5H1.47583C0.66 0.5 0 1.145 0 1.94083V19.0592C0 19.8558 0.66 20.5 1.47583 20.5H18.5183C19.3333 20.5 20 19.8558 20 19.0592V1.94083C20 1.145 19.3333 0.5 18.5183 0.5H18.5208Z"
                                        fill="black"
                                    />
                                </svg>
                            </a>
                        </div>
                    </div>
                </>
            ) : (
                <p className="text-center">Belum ada warrior yang ditambah.</p>
            )}
        </>
    );
}
