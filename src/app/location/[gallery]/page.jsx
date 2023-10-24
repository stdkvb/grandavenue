'use client';
import React, { useState, useRef, useCallback } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

const Gallery = () => {
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
    <section className='page gallery'>
      <Swiper
        className='gallery__swiper'
        spaceBetween={0}
        slidesPerView={1}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        modules={[FreeMode, Navigation, Thumbs]}
      >
        <SwiperSlide>
          <Image
            src='https://s3-alpha-sig.figma.com/img/3cdb/4c37/d08ada5dab2561d46fda96abe0dbb504?Expires=1698624000&Signature=kBKU4PBYc-ZnftbAY2735xtG0ESLcDLEcdsl5c4gdRR7l9YfSFO5Lsu1BcTc26vhYuzdFSNPSHrp22nhgtMQ8ayYyjJqF9mkKIVVNwbT4RigdFbzu8a03ARjKvZQZ8jKz3NviCgPPirmp1r-9ldB-51cBIux0H8ljfnEcaeOW9aUS6vgFJxO2hOqY29NVcjey~fonIle3XSISWa-qkgQ21vpoTF-M9k7SNTVzSvW6gzsf4MpvV4hXTTVwwoSFNmeKLN7b5D7i00xgt3G~I6ML~qrCTZnX~mk0cLSyNURfjLLda6-L8PD7mpJkKbZ77FLRnEq9e1cEN69sIBUDQ6Kaw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
            fill={true}
            alt='photo'
          />
          <div className='container'>
            <h2>Сквер 50-летия Победы</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src='https://s3-alpha-sig.figma.com/img/52b2/d86a/8d282066a7c0934768bb6d9086191fd7?Expires=1698624000&Signature=QudFUg2365IIkGFl6kFW2KIzehrdSyAwqzxGnlc9oMsZ56SlMIopXVzG86YqJoUyWQ237zlraV93Zv2VOQHhtwl19SLeuuC3sMzy5v56wuf4nYPPaA7zlcpBjWxtJoX-eyBbshNKElbT~Nwr5oU0dbfXd-P3ywU28w6vMINZX509iEJk6N0hxR8G1Or1Nwx236vZVpxbCFHfaQh8RCDKdz8e6sWpJFms9FtLbwmLtPdakoz~aPvldk62AHot-OFsZLMmNcnnKf5sdz~0ZIHi2dbQWKReZ7M7y2yPSsBcNPxbwokX8pcu3Il-SM4FWWmS~R1T0IDUObc6aan2Hu39vA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4' />
        </SwiperSlide>
        <SwiperSlide>
          <img src='https://s3-alpha-sig.figma.com/img/52b2/d86a/8d282066a7c0934768bb6d9086191fd7?Expires=1698624000&Signature=QudFUg2365IIkGFl6kFW2KIzehrdSyAwqzxGnlc9oMsZ56SlMIopXVzG86YqJoUyWQ237zlraV93Zv2VOQHhtwl19SLeuuC3sMzy5v56wuf4nYPPaA7zlcpBjWxtJoX-eyBbshNKElbT~Nwr5oU0dbfXd-P3ywU28w6vMINZX509iEJk6N0hxR8G1Or1Nwx236vZVpxbCFHfaQh8RCDKdz8e6sWpJFms9FtLbwmLtPdakoz~aPvldk62AHot-OFsZLMmNcnnKf5sdz~0ZIHi2dbQWKReZ7M7y2yPSsBcNPxbwokX8pcu3Il-SM4FWWmS~R1T0IDUObc6aan2Hu39vA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4' />
        </SwiperSlide>
        <SwiperSlide>
          <img src='https://s3-alpha-sig.figma.com/img/3156/c3e6/0c25c62e0b013a5d723f5ad437f78851?Expires=1698624000&Signature=cOBB6YAEIwbe76J2EWLZaRqHzd4Jk0BJ6tHUUfVh9a1XPlmHJG~IHYtmoGwM48mqg0oKqSLQI9r06CR8neA7DV56qsvNPLv0zB~wAkDOLmFuiJ0ncPSHMTw7OY97AEyHhJZw4KbqlmurN13kbK-zfkKU9rB90pnefMnzr0u69k87k6WLMcMuEMiuksSRPBl6KCDdaZGe2LqiEVLzXlDSRNnCQObFk-uiyy2env6dRQtfZ9xK0Bxc0BHq~lrRTfaG2xVG6cTfjjN1pdtV1eayEcu6Esm8UsW5DIkNCfaYvaCOrh-Pf2TvQddXLAXRbv~EkyAJzUwM3ePM4JcYt3hiow__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4' />
        </SwiperSlide>
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
          <SwiperSlide>
            <Image
              src='https://s3-alpha-sig.figma.com/img/3cdb/4c37/d08ada5dab2561d46fda96abe0dbb504?Expires=1698624000&Signature=kBKU4PBYc-ZnftbAY2735xtG0ESLcDLEcdsl5c4gdRR7l9YfSFO5Lsu1BcTc26vhYuzdFSNPSHrp22nhgtMQ8ayYyjJqF9mkKIVVNwbT4RigdFbzu8a03ARjKvZQZ8jKz3NviCgPPirmp1r-9ldB-51cBIux0H8ljfnEcaeOW9aUS6vgFJxO2hOqY29NVcjey~fonIle3XSISWa-qkgQ21vpoTF-M9k7SNTVzSvW6gzsf4MpvV4hXTTVwwoSFNmeKLN7b5D7i00xgt3G~I6ML~qrCTZnX~mk0cLSyNURfjLLda6-L8PD7mpJkKbZ77FLRnEq9e1cEN69sIBUDQ6Kaw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
              fill={true}
              alt='photo'
            />
          </SwiperSlide>
          <SwiperSlide>
            <img src='https://s3-alpha-sig.figma.com/img/52b2/d86a/8d282066a7c0934768bb6d9086191fd7?Expires=1698624000&Signature=QudFUg2365IIkGFl6kFW2KIzehrdSyAwqzxGnlc9oMsZ56SlMIopXVzG86YqJoUyWQ237zlraV93Zv2VOQHhtwl19SLeuuC3sMzy5v56wuf4nYPPaA7zlcpBjWxtJoX-eyBbshNKElbT~Nwr5oU0dbfXd-P3ywU28w6vMINZX509iEJk6N0hxR8G1Or1Nwx236vZVpxbCFHfaQh8RCDKdz8e6sWpJFms9FtLbwmLtPdakoz~aPvldk62AHot-OFsZLMmNcnnKf5sdz~0ZIHi2dbQWKReZ7M7y2yPSsBcNPxbwokX8pcu3Il-SM4FWWmS~R1T0IDUObc6aan2Hu39vA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4' />
          </SwiperSlide>
          <SwiperSlide>
            <img src='https://s3-alpha-sig.figma.com/img/52b2/d86a/8d282066a7c0934768bb6d9086191fd7?Expires=1698624000&Signature=QudFUg2365IIkGFl6kFW2KIzehrdSyAwqzxGnlc9oMsZ56SlMIopXVzG86YqJoUyWQ237zlraV93Zv2VOQHhtwl19SLeuuC3sMzy5v56wuf4nYPPaA7zlcpBjWxtJoX-eyBbshNKElbT~Nwr5oU0dbfXd-P3ywU28w6vMINZX509iEJk6N0hxR8G1Or1Nwx236vZVpxbCFHfaQh8RCDKdz8e6sWpJFms9FtLbwmLtPdakoz~aPvldk62AHot-OFsZLMmNcnnKf5sdz~0ZIHi2dbQWKReZ7M7y2yPSsBcNPxbwokX8pcu3Il-SM4FWWmS~R1T0IDUObc6aan2Hu39vA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4' />
          </SwiperSlide>
          <SwiperSlide>
            <img src='https://s3-alpha-sig.figma.com/img/3156/c3e6/0c25c62e0b013a5d723f5ad437f78851?Expires=1698624000&Signature=cOBB6YAEIwbe76J2EWLZaRqHzd4Jk0BJ6tHUUfVh9a1XPlmHJG~IHYtmoGwM48mqg0oKqSLQI9r06CR8neA7DV56qsvNPLv0zB~wAkDOLmFuiJ0ncPSHMTw7OY97AEyHhJZw4KbqlmurN13kbK-zfkKU9rB90pnefMnzr0u69k87k6WLMcMuEMiuksSRPBl6KCDdaZGe2LqiEVLzXlDSRNnCQObFk-uiyy2env6dRQtfZ9xK0Bxc0BHq~lrRTfaG2xVG6cTfjjN1pdtV1eayEcu6Esm8UsW5DIkNCfaYvaCOrh-Pf2TvQddXLAXRbv~EkyAJzUwM3ePM4JcYt3hiow__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4' />
          </SwiperSlide>
        </Swiper>
        <div className='swiper-button-prev prev-arrow' onClick={handlePrev} />
        <div className='swiper-button-next next-arrow' onClick={handleNext} />
      </div>
    </section>
  );
};

export default Gallery;
