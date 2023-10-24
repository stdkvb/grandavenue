'use client';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Scrollbar } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';

const Infrastructure = () => {
  return (
    <section className='page swiper swiper_wide'>
      <Swiper
        className='page__swiper'
        modules={[Navigation, Scrollbar]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        scrollbar={{ draggable: true }}
      >
        <SwiperSlide>
          <Image
            className='page__background'
            src='https://s3-alpha-sig.figma.com/img/f020/b06a/9d3c168ceb4736ce681481be7485604c?Expires=1698624000&Signature=Gqh9qS2AoGkEBicDM6A433G97EYIhxRaYKNHxlgFQy8Ec8divaumYUplx9FMuCZzQOfV3PAvnUWL~FfJh1tR3A7MTvb9hMG14VxCAW~N58dF7N4kS6tAUasqawbbXPc0zOeD5RLCmJtDph-4EfrUBDQqRpph-fCFyi91Q5Cc-NyMMU~EGdrDRLAH-wCk8ZMdsULxOsecSn~d7dCoBQB~YXEJPYtWnIPlRb2D014T-IbOiq~RK7Vh4bIFiLsRUG5k0ij6BlluIxMS-zeE-ZSD4rKJkluP9pztLk9h3bIUy3zSlZ-0R2Le~s4FetP14Tuqy9jL0ZMBOHpMLZdnFow42Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
            fill={true}
            alt='photo'
          />
          <div className='container'>
            <p>
              Сочетание функциональности и эстетической привлекательности
              в каждом элементе благоустройства, от арт-объектов до детских
              и спортивных площадок
            </p>
            <h1>Эстетика развлечений</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className='page__background'
            src='https://s3-alpha-sig.figma.com/img/8761/47e9/6ade178e82b87dad195e1bf1b4f0bd68?Expires=1698624000&Signature=dKU7c~EptJJskFXaaGXprFAjZO4l26WDPxfazmHWPgubAJUPPqcQ5CeiuOejx8j4aXvuf2HT8aDalF0lYiei9UR5A7D775WyMSc~NtiSy3mtETnnOZYohzm8Jjq6cQsBZfZQLHtp5wluWbatymqnCJb1VWO3PQXyZ-w32EZzanvVKFBF0UhcWaRHxR9hdtQXJIFsMHqYL356~DtrHmwFMqH1XTcPl-an3bC-Omj08VvDDdgz31sGBTlfwlKD9hPrwwHRl4TojkVpUU47O4djEvo-vgdPr7OzsV22So1BJQpBmOirF6SgegFHyUgG3pI4kCavQk2irn4Cev-itpFiVw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
            fill={true}
            alt='photo'
          />
          <div className='container'>
            <p>
              Ресторан и галерея современного искусства на территории комплекса
            </p>
            <h1>Grand Hall</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className='page__background'
            src='https://s3-alpha-sig.figma.com/img/b844/e025/22518951d9a43a4c2e0c09c77598db97?Expires=1698624000&Signature=PBaUVSduf9WNH4Oj~FnH~BbVk-VJ6CADqmU3Ce8iZTlFrA-8DQ4Km86crtgUKAdGCBNZxpMMxjNBnNcZcUEdkzVg3SPfuoMy1N9eTwby1Xto9Wg5bhbcBuRJHCa3s3Rscwh~dqSjD-foSFycWohzJxYH5AJjjPyEbMf-esxV1L6vzdGFQsaazcJHg-HY21qqCs5xSU-FIsR8vSlXdLv-t0Cxb-4CMV5ko~-1Dra1DupJPHSB-AE750QoMyx23hpis4NHtGycggP-24NdA68DxS0xjHmb6DICTYI3ycsZ7xe~RHZvXLOtfbq9wEXlYcPWai2rh08N2U-Cq3SuOMgLmg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
            fill={true}
            alt='photo'
          />
          <div className='container'>
            <p>
              Закрытая безопасная территория со множеством тематических
              зон для развлечений и отдыха
            </p>
            <h1>Grand Hall</h1>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Infrastructure;
