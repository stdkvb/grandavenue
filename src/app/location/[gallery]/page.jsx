'use client';
import React, { useState, useRef, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { useTitle } from '@/src/hooks';
import useSWR from 'swr';

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const Gallery = () => {
  useTitle('GrandAvenue | Галерея');

  //get data
  const { data, error, isLoading } = useSWR(
    'https://grandavenue.ru/api/location',
    fetcher
  );
  console.log(data);

  //swiper control
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const sliderRef = useRef(null);

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  return (
    <>
      <Link href={'/location'} className='gallery__close'></Link>
      <section className='page gallery'>
        <div className='container'>
          <h2>Сквер 50-летия Победы</h2>
        </div>
        <Swiper
          className='gallery__swiper'
          spaceBetween={0}
          slidesPerView={1}
          thumbs={{
            swiper:
              thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
          }}
          modules={[FreeMode, Navigation, Thumbs]}
        >
          {data &&
            !isLoading &&
            data.data.objects.map((item) =>
              item.images.map((image) => (
                <SwiperSlide>
                  <Image
                    src={'https://grandavenue.ru' + image}
                    fill={true}
                    alt='photo'
                  />
                </SwiperSlide>
              ))
            )}
        </Swiper>
        <div className='gallery__preview'>
          <Swiper
            className='gallery__swiper-preview'
            ref={sliderRef}
            onSwiper={setThumbsSwiper}
            spaceBetween={10}
            slidesPerView={2}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Thumbs]}
            loop={true}
          >
            {data &&
              !isLoading &&
              data.data.objects.map((item) =>
                item.images.map((image) => (
                  <SwiperSlide>
                    <Image
                      src={'https://grandavenue.ru' + image}
                      fill={true}
                      alt='photo'
                    />
                  </SwiperSlide>
                ))
              )}
          </Swiper>
          <div className='swiper-button-prev prev-arrow' onClick={handlePrev} />
          <div className='swiper-button-next next-arrow' onClick={handleNext} />
        </div>
      </section>
    </>
  );
};

export default Gallery;
