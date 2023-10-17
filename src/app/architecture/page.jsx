'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Scrollbar } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';

const Architecture = () => {
  return (
    <Swiper
      className='page architecture'
      modules={[Navigation, Scrollbar]}
      spaceBetween={0}
      slidesPerView={1}
      navigation
      scrollbar={{ draggable: true }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <img
          className='page__background'
          src='https://s3-alpha-sig.figma.com/img/3156/c3e6/0c25c62e0b013a5d723f5ad437f78851?Expires=1698624000&Signature=cOBB6YAEIwbe76J2EWLZaRqHzd4Jk0BJ6tHUUfVh9a1XPlmHJG~IHYtmoGwM48mqg0oKqSLQI9r06CR8neA7DV56qsvNPLv0zB~wAkDOLmFuiJ0ncPSHMTw7OY97AEyHhJZw4KbqlmurN13kbK-zfkKU9rB90pnefMnzr0u69k87k6WLMcMuEMiuksSRPBl6KCDdaZGe2LqiEVLzXlDSRNnCQObFk-uiyy2env6dRQtfZ9xK0Bxc0BHq~lrRTfaG2xVG6cTfjjN1pdtV1eayEcu6Esm8UsW5DIkNCfaYvaCOrh-Pf2TvQddXLAXRbv~EkyAJzUwM3ePM4JcYt3hiow__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
        />
        <div className='container'>
          <p>
            Секции разной высоты с монументальными десятиметровыми колоннами
          </p>
          <h1>Место встреч и узнаваемая достопримечательность</h1>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <img
          className='page__background'
          src='https://s3-alpha-sig.figma.com/img/52b2/d86a/8d282066a7c0934768bb6d9086191fd7?Expires=1698624000&Signature=QudFUg2365IIkGFl6kFW2KIzehrdSyAwqzxGnlc9oMsZ56SlMIopXVzG86YqJoUyWQ237zlraV93Zv2VOQHhtwl19SLeuuC3sMzy5v56wuf4nYPPaA7zlcpBjWxtJoX-eyBbshNKElbT~Nwr5oU0dbfXd-P3ywU28w6vMINZX509iEJk6N0hxR8G1Or1Nwx236vZVpxbCFHfaQh8RCDKdz8e6sWpJFms9FtLbwmLtPdakoz~aPvldk62AHot-OFsZLMmNcnnKf5sdz~0ZIHi2dbQWKReZ7M7y2yPSsBcNPxbwokX8pcu3Il-SM4FWWmS~R1T0IDUObc6aan2Hu39vA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
        />
        <div className='container'>
          <p>
            Просторные лобби с высокими потолками и уникальными дизайнерскими
            решениями
          </p>
          <h1>Grand Hall</h1>
        </div>
      </SwiperSlide>
      ...
    </Swiper>
  );
};

export default Architecture;
