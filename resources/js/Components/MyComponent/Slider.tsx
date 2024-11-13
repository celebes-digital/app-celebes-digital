import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../../../css/slider.css'

// import required modules
import { Autoplay, EffectCoverflow } from 'swiper/modules';

export default function Slider() {
    return (
        <Swiper
            effect={'coverflow'}
            grabCursor={true}
            slidesPerView={'auto'}
            initialSlide={2}
            loop={true}
            centeredSlides={true}
            autoplay={true}
            coverflowEffect={{
                rotate: 0,
                stretch: -3,
                depth: 400,
                modifier: 1,
                slideShadows: true,

            }}
            modules={[EffectCoverflow, Autoplay]}
            className="mySwiper"
        >
            <SwiperSlide>
                <img src="/assets/image/karyawan_1.png" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="/assets/image/karyawan_1.png" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="/assets/image/karyawan_1.png" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="/assets/image/karyawan_1.png" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="/assets/image/karyawan_1.png" />
            </SwiperSlide>
        </Swiper>
    );
}
