'use client'
import Image, { StaticImageData } from 'next/image';
import React, { useState } from 'react';
import icon_1 from "@/assets/img/about/destination-icon-1.png";
import icon_2 from "@/assets/img/about/destination-icon-2.png";
import VideoPopup from '@/modals/VideoPopup';
import about_img from '@/assets/img/about/about-img.jpg';
import about_shape from "@/assets/img/about/about-shape.png";

interface DataType {
  title: string;
  sm_des: string;
  our_feature: {
    id: number;
    img: StaticImageData;
    title: string;
    sm_des: string;
  }[];
}

const about_video_content: DataType = {
  title: "Short Story About Mahalakshmi Dental Laboratory",
  sm_des: "Mahalakshmi Dental Laboratory is a full service lab located in Hyderabad. Since opening in November 28, 2003, we have been providing the dental community with unsurpassed dental restorations and services.",
  our_feature: [
    {
      id: 1,
      img: icon_1,
      title: "Our Mission",
      sm_des: "We believe there are no shortcuts in producing a high quality dental restoration. This means using the best materials, the most talented technicians, and the newest technologies available.",
    },
    {
      id: 2,
      img: icon_2,
      title: "Our Vission",
      sm_des: "We introduce ourselves as a leading Dental Laboratory of Telangana State having more than 15 years of experience in Dental Laboratory Works. Mahalakshmi Dental Lab, a very famous name in the cosmetic dentistry backed by qualified professionals trained in the various fields of dentistry by the world known companies like VITA, Ivoclar Materials of Germany, and therefore can provide quality of International Standards to all our customers.",
    },
  ]
}
const {title, sm_des, our_feature } = about_video_content

const AboutVideoArea = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  return (
    <>
      <section className="about-area pt-50 pb-20">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-5">
              <div className="about-left-side pos-rel mb-20">
                <div className="about-front-img pos-rel">
                  <Image src={about_img} alt="theme-pure" />
                  <a className="popup-video about-video-btn white-video-btn"
                    onClick={() => setIsVideoOpen(true)}
                    style={{ cursor: "pointer" }}
                  ><i className="fas fa-play"></i></a>
                </div>
                <div className="about-shape">
                  <Image src={about_shape} alt="theme-pure" />
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-7">
              <div className="about-right-side pt-55 mb-0">
                <div className="about-title mb-20">
                  <h2>{title}</h2>
                </div>
                <div className="about-text mb-50">
                  <p>{sm_des}</p>
                </div>
                <div className="our-destination">
                  {our_feature.map((item, i) =>
                    <div key={i} className={`single-item ${i === 0 ? "mb-30" : ""}`}>
                      <div className="mv-icon f-left">
                        <Image src={item.img} alt="theme-pure" />
                      </div>
                      <div className="mv-title fix">
                        <h3>{item.title}</h3>
                        <p>{item.sm_des}</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* video modal start */}
      <VideoPopup
        isVideoOpen={isVideoOpen}
        setIsVideoOpen={setIsVideoOpen}
        videoId={'_6QhP3Fa0rU'}
      />
      {/* video modal end */}
    </>
  );
};

export default AboutVideoArea;