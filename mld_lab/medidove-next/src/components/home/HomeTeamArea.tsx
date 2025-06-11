'use client'
import Image from 'next/image';
import Slider from 'react-slick';
import React, { useRef } from 'react';
import TeamTwoData from '@/data/TeamTwodata';
const setting = {
  dots: true,
  infinite: false,
  speed: 300,
  arrows: false,
  slidesToShow: 6,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }

  ]
}

const HomeTeamArea = () => {
  const sliderRef = useRef<Slider | null>(null);
  return (
    <>
      <section className="team-area pt-50 pb-50">
        <div className="container">
          <Slider {...setting} ref={sliderRef} className="row team-activation" >
            {TeamTwoData.map((item, i) =>
              <div key={i} className="col-xl-12">
                <div className="team-box pos-rel mb-50 text-center">
                  <div className="team-thumb mb-2">
                    <Image src={item.img} alt="theme-pure" />
                  </div>
                  <div className="team-author-info">
                    <span className="job-title d-block">{item.job_title}</span>
                  </div>
                </div>
              </div>
            )}
          </Slider>
        </div>
      </section>
      
    </>
  );
};

export default HomeTeamArea;