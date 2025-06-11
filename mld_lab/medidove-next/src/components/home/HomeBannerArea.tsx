'use client'
import Link from 'next/link';
import React, { useState } from 'react';

const HomeBannerArea = () => {
  return (
    <>
      <section className="hero-area">
        <div className="hero-slider">
          <div className="slider-active">
            <div className="single-slider slider-height slider-height-2 d-flex align-items-center" style={{backgroundImage: `url(/assets/img/home/ban1.gif)`, backgroundRepeat: "no-repeat", backgroundSize: 'cover ' }}>
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-xl-12 col-lg-6 col-md-10">
                    <div className="hero-text hero-text-2 pt-100">
                      <div className="hero-slider-caption hero-slider-caption-2">
                        <h5 className="white-color" data-animation="fadeInUp" data-delay=".2s">We are here for your care.</h5>
                        <h1 className="white-color" data-animation="fadeInUp" data-delay=".4s">Best Care & Better Dentist</h1>
                      </div>
                      <div className="hero-slider-btn">
                        <Link data-animation="fadeInLeft" data-delay=".6s" href="/about" className="btn btn-icon btn-icon-blue ml-0"><span>+</span>Laern More</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeBannerArea;