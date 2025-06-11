'use client';
import React from 'react';
import Image, { StaticImageData } from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import about_icon_1 from "@/assets/img/home/online Booking.png";
import about_icon_2 from "@/assets/img/home/Quality Driven.png";
import about_icon_3 from "@/assets/img/home/Research Team.png";
import about_icon_4 from "@/assets/img/home/Quality Materials.png";
import about_icon_5 from "@/assets/img/home/Promt Delvery.png";
import about_icon_6 from "@/assets/img/home/Friendly Staff.png";

interface AboutContentDatatype {
  about_data: {
    id: number;
    cls: string;
    img: StaticImageData;
    title: string;
    sm_info: string;
  }[];
}

const about_content: AboutContentDatatype = {
  about_data: [
    {
      id: 1,
      cls: "mb-40",
      img: about_icon_1,
      title: "Online Booking",
      sm_info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.",
    },
    {
      id: 2,
      cls: "mb-40",
      img: about_icon_2,
      title: "Quality Driven",
      sm_info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.",
    },
    {
      id: 3,
      cls: "mb-30",
      img: about_icon_3,
      title: "Research Team",
      sm_info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.",
    },
    {
      id: 4,
      cls: "mb-30",
      img: about_icon_4,
      title: "Quality Materials",
      sm_info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.",
    },
    {
      id: 5,
      cls: "mb-30",
      img: about_icon_5,
      title: "Prompt Delivery",
      sm_info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.",
    },
    {
      id: 6,
      cls: "mb-30",
      img: about_icon_6,
      title: "Friendly Staff",
      sm_info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.",
    },
  ],
};

const { about_data } = about_content;

const HomeServiceArea = () => {
  return (
    <section className="about-area about-area-mid pb-50">
      <div className="container">
        <Swiper
          modules={[Pagination, Navigation]}
          spaceBetween={30}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
          loop={true}
          breakpoints={{
            768: { slidesPerView: 1 },
            992: { slidesPerView: 2 },
            1200: { slidesPerView: 3 },
          }}
        >
          {about_data.map((item) => (
            <SwiperSlide key={item.id}>
              <div className={`feature-box text-center ${item.cls}`}>
                <div className="feature-small-icon mb-35">
                  <Image src={item.img} alt={item.title} width={60} height={60} />
                </div>
                <div className="feature-small-content">
                  <h3>{item.title}</h3>
                  <p>{item.sm_info}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default HomeServiceArea;
