'use client';
import React, { useState, useRef, useCallback } from 'react';
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

const Location = () => {
  useTitle('GrandAvenue | Расположение');

  //get data
  const { data, error, isLoading } = useSWR(
    'https://grandavenue.ru/api/location',
    fetcher
  );
  // console.log(data);

  //images for gallery
  const points = data && !isLoading && data.data.objects;

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
              style={{
                backgroundImage: `url("/images/base.svg")`,
              }}
            ></div>
            <div
              onClick={() => onModalOpen(points[0])}
              className='location__point'
              style={{
                backgroundImage: `url("/images/park.svg")`,
                left: `51%`,
                top: `31%`,
              }}
            ></div>
            <div
              onClick={() => onModalOpen(points[1])}
              className='location__point'
              style={{
                backgroundImage: `url("/images/playground.svg")`,
                left: `25%`,
                top: `63%`,
              }}
            ></div>
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
