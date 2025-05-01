import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import Titile from '../ui/Titile';
import Work from '../ui/Work';

const Works = () => {
    // Создаем реф для экземпляра Swiper
    const swiperRef = useRef(null);

    // Создаем рефы для кнопок
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    return (
        <div className='container1 pb-[80px]'>
            <Titile
                title={'Recent Work'}
                text={'Solving user & business problems since last 15+ years.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}
                titleColor={'#080808'}
            />

            <div className="slider pb-[50px]">

                <Swiper
                    ref={swiperRef}  // Привязываем реф к экземпляру Swiper
                    slidesPerView={2}
                    spaceBetween={32}
                    loop={true}
                    modules={[Navigation]}
                    className="mySwiper"
                    breakpoints={{
                        0: {
                          slidesPerView: 1,
                        },
                        640: {
                          slidesPerView: 2,
                        },
                        1024: {
                          slidesPerView: 3,
                        },
                      }}
                >
                    <SwiperSlide>
                        <Work />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Work />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Work />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Work />
                    </SwiperSlide>
                </Swiper>

                <div className="custom-navigation hidden md:block">
                    {/* Используем onClick для вызова методов Swiper через реф */}
                    <button
                        ref={prevRef}
                        className="swiper-button-prev1"
                        onClick={() => swiperRef.current.swiper.slidePrev()}  // Переключаем слайд на предыдущий
                    >
                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="-0.5" y="0.5" width="28.8929" height="29" rx="14.4464" transform="matrix(-1 0 0 1 28.8931 0)" stroke="#9C9C9C" />
                            <path d="M12.2597 14.3736L16.3793 10.2592C16.7253 9.9136 17.2875 9.9136 17.6335 10.2592C17.9796 10.6048 17.9796 11.1663 17.6335 11.5119L14.1411 15L17.6335 18.4881C17.9796 18.8337 17.9796 19.3952 17.6335 19.7408C17.4605 19.9136 17.2335 20 17.0064 20C16.7793 20 16.5523 19.9136 16.3793 19.7408L12.2597 15.6264C11.9137 15.2808 11.9137 14.7193 12.2597 14.3737L12.2597 14.3736Z" fill="#9C9C9C" />
                        </svg>

                    </button>
                    <button
                        ref={nextRef}
                        className="swiper-button-next1"
                        onClick={() => swiperRef.current.swiper.slideNext()}  // Переключаем слайд на следующий
                    >
                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.5" y="0.5" width="28.8929" height="29" rx="14.4464" stroke="#9C9C9C" />
                            <path d="M17.6333 14.3736L13.5138 10.2592C13.1678 9.9136 12.6056 9.9136 12.2595 10.2592C11.9135 10.6048 11.9135 11.1663 12.2595 11.5119L15.752 15L12.2595 18.4881C11.9135 18.8337 11.9135 19.3952 12.2595 19.7408C12.4325 19.9136 12.6596 20 12.8867 20C13.1137 20 13.3408 19.9136 13.5138 19.7408L17.6333 15.6264C17.9794 15.2808 17.9794 14.7193 17.6333 14.3737L17.6333 14.3736Z" fill="#9C9C9C" />
                        </svg>

                    </button>
                </div>

            </div>

        </div>
    );
}

export default Works;
