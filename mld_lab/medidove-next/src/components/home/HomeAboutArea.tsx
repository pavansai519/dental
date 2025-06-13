'use client'
import Image, { StaticImageData } from 'next/image';
import React, { useState } from 'react';
import VideoPopup from '@/modals/VideoPopup';
import about_img from '@/assets/img/home/labpic.png';
import about_shape from "@/assets/img/about/about-shape.png";
 
interface DataType {
  title: string;
  sm_des: string;
  sm_des_2: string;
 
}
 
const about_video_content: DataType = {
  title: "",
  sm_des: "Mahalakshmi Dental Laboratory is a full service lab located in Hyderabad. Since opening in November 28, 2003, we have been providing the dental community with unsurpassed dental restorations and services. We believe there are no shortcuts in producing a high quality dental restoration. This means using the best materials, the most talented technicians, and the newest technologies available.",
  sm_des_2: "We introduce ourselves as a leading Dental Laboratory of Telangana State having more than 15 years of experience in Dental Laboratory Works. Mahalakshmi Dental Lab, a very famous name in the cosmetic dentistry backed by qualified professionals trained in the various fields of dentistry by the world known companies like VITA, Ivoclar Materials of Germany, and therefore can provide quality of International Standards to all our customers.",
}
const {title, sm_des, sm_des_2} = about_video_content
 
const HomeAboutArea = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  return (
    <>
      <section className="about-area pt-50 pb-50">
        <div className="container">
          <div className="row">
            <div className="col-xl-5 col-lg-6">
              <div className="about-left-side pos-rel">
                <div className="about-front-img pos-rel " >
                  <Image src={about_img} alt="theme-pure"/>
                </div>
              </div>
            </div>
            <div className="col-xl-7 col-lg-6">
              <div className="about-right-side">
                <div className="about-title">
                  <h2>{title}</h2>
                </div>
                <div className="about-text">
                  <p>{sm_des}</p>
                  <p>{sm_des_2}</p>
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
 
export default HomeAboutArea;