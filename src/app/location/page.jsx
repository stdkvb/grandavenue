'use client';
import React, { useState, useRef, useCallback, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { useTitle } from '@/src/hooks';
import useSWR from 'swr';
import Modal from 'react-modal';
import PageWrapper from '@/src/components/PageWrapper';

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const points = [
  {
    id: 0,
    title: 'Парк-50-летия',
    icon: 'url("/images/park.svg")',
    left: `51%`,
    top: `31%`,
  },
  {
    id: 1,
    title: 'Яй',
    icon: 'url("/images/playground.svg")',
    left: `36%`,
    top: `24%`,
  },

  {
    id: 2,
    title: 'Центральный',
    icon: 'url("/images/playground.svg")',
    left: `13%`,
    top: `51%`,
  },
  {
    id: 3,
    title: 'Мир',
    icon: 'url("/images/playground.svg")',
    left: `75%`,
    top: `21%`,
  },
  {
    id: 4,
    title: 'Уфа-Арена',
    icon: 'url("/images/playground.svg")',
    left: `11%`,
    top: `35%`,
  },
  {
    id: 5,
    title: 'Парк-Якутова',
    icon: 'url("/images/park.svg")',
    left: `4%`,
    top: `34%`,
  },
  {
    id: 6,
    title: 'Ласточка',
    icon: 'url("/images/school.svg")',
    left: `19%`,
    top: `39%`,
  },
  {
    id: 7,
    title: 'Солнечный-круг',
    icon: 'url("/images/school.svg")',
    left: `27%`,
    top: `45%`,
  },
  {
    id: 8,
    title: '№1',
    icon: 'url("/images/school.svg")',
    left: `59%`,
    top: `53%`,
  },
  {
    id: 9,
    title: 'ТинькоффХолл',
    icon: 'url("/images/playground.svg")',
    left: `42%`,
    top: `43%`,
  },
];

const Location = () => {
  useTitle('GrandAvenue | Расположение');

  //get data
  const { data, error, isLoading } = useSWR(
    'https://grandavenue.ru/api/location',
    fetcher
  );
  // console.log(data);

  //data for gallery
  const objects = data && !isLoading && data.data.objects;

  //scroll base point into view
  useEffect(() => {
    document.getElementById('base').scrollIntoView();
  }, []);

  //modal control
  const [isOpen, setIsOpen] = useState(false);
  const [currentPoint, setCurrentPoint] = useState(null);

  const customStyles = {
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      zIndex: '2',
    },
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      padding: '0',
      borderRadius: '0',
      border: 'none',
    },
  };

  const onModalOpen = (point) => {
    setIsOpen(true);
    setCurrentPoint(point);
  };

  const onModalClose = () => {
    setIsOpen(false);
    setCurrentPoint(null);
  };

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
    <PageWrapper>
      <section className='page location'>
        <div className='location__wrapper'>
          <div className='location__map'>
            <div
              className='location__background'
              style={{
                backgroundImage: `url(/images/map-desktop.png)`,
              }}
            ></div>
            <img
              className='location__background-mobile'
              src='images/map-mobile.png'
            />
            <div
              className='location__base'
              id='base'
              style={{
                backgroundImage: `url("/images/base.svg")`,
              }}
            ></div>
            {points.map((point) => (
              <div
                key={point.id}
                onClick={() => onModalOpen(objects[`${point.id}`])}
                id={point.title}
                className='location__point'
                style={{
                  backgroundImage: `${point.icon}`,
                  left: `${point.left}`,
                  top: `${point.top}`,
                }}
              ></div>
            ))}
          </div>
        </div>

        <h1>{data && !isLoading && data.data.title}</h1>
        <p>{data && !isLoading && data.data.additionalText}</p>
        <Modal
          isOpen={isOpen}
          onRequestClose={() => setIsOpen(false)}
          style={customStyles}
          ariaHideApp={false}
        >
          <div className='gallery__close' onClick={onModalClose}></div>
          <div className='gallery'>
            <div className='container'>
              <h2>{currentPoint && currentPoint.title}</h2>
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
              {currentPoint &&
                currentPoint.images.map((image) => (
                  <SwiperSlide key={image.id}>
                    <img src={'https://grandavenue.ru' + image} alt='photo' />
                  </SwiperSlide>
                ))}
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
                {currentPoint &&
                  currentPoint.images.map((image) => (
                    <SwiperSlide key={image.id}>
                      <Image
                        src={'https://grandavenue.ru' + image}
                        fill={true}
                        alt='photo'
                      />
                    </SwiperSlide>
                  ))}
              </Swiper>
              <div
                className='swiper-button-prev prev-arrow'
                onClick={handlePrev}
              />
              <div
                className='swiper-button-next next-arrow'
                onClick={handleNext}
              />
            </div>
          </div>
        </Modal>
      </section>
    </PageWrapper>
  );
};

export default Location;
