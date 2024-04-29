
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import tradly from 'tradly';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper.min.css';
import 'swiper/components/pagination/pagination.min.css';
import 'swiper/components/navigation/navigation.min.css';

import SwiperCore, { Autoplay, Pagination, Navigation } from 'swiper/core';
import axios from 'axios';

SwiperCore.use([Autoplay, Pagination, Navigation]);

const Banner2 = ({}) => {
  const [banners, setBanners] = useState(null);
  useEffect(() => {
    window.innerWidth > 850
      ? axios.get(`/api/banners`, { params: { medium: 'web' } }).then((res) => {
          setBanners(res.data.promo_banners);
        })
      : axios.get(`/api/banners`, { params: { medium: 'app' } }).then((res) => {
          setBanners(res.data.promo_banners);
        });
  }, [0]);
  return (
    <>
      <div className="     h-auto mb-9 mx-auto">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
        >
          {banners?.map((banner, i) => {
            return (
              banner.placement == '' && (
                <SwiperSlide
                  key={i}
                  className=" w-full flex flex-col justify-center items-center mb-14"
                >
                  <div className="  relative   ">
                    <img
                      src={banner.image_path}
                      alt="Banner Image"
                      className="w-full      object-contain     rounded-lg "
                    />
                  </div>
                </SwiperSlide>
              )
            );
          })}
        </Swiper>
      </div>
    </>
  );
};

export default Banner2;

