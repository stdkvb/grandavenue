'use client';
import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCreative, Mousewheel } from 'swiper/modules';
import 'swiper/css/effect-creative';

import Home from '../components/Home';
import Project from '../components/Project';
import Location from '../components/Location';
import Architecture from '../components/Architecture';
import Infrastructure from '../components/Infrastructure';
import Layouts from '../components/Layouts';
import Parking from '../components/Parking';
import Contacts from '../components/Contacts';

const page = () => {
  return (
    <Swiper
      className='page'
      modules={[Mousewheel, EffectCreative]}
      slidesperview='1'
      mousewheel={true}
      direction='vertical'
      speed='1000'
      effect={'creative'}
      creativeEffect={{
        prev: {
          shadow: true,
          translate: [0, '-20%', -1],
        },
        next: {
          translate: [0, '100%', 0],
        },
        // prev: {
        //   shadow: true,
        //   translate: [0, '-100%', 0],
        // },
        // next: {
        //   shadow: true,
        //   translate: [0, '100%', 0],
        // },
      }}
    >
      <SwiperSlide>
        <Home />
      </SwiperSlide>
      <SwiperSlide>
        <Project />
      </SwiperSlide>
      <SwiperSlide>
        <Location />
      </SwiperSlide>
      <SwiperSlide>
        <Architecture />
      </SwiperSlide>
      <SwiperSlide>
        <Infrastructure />
      </SwiperSlide>
      <SwiperSlide>
        <Layouts />
      </SwiperSlide>
      <SwiperSlide>
        <Parking />
      </SwiperSlide>
      <SwiperSlide>
        <Contacts />
      </SwiperSlide>
    </Swiper>
  );
};

export default page;
