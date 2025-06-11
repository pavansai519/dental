'use client';
import about_icon_1 from "@/assets/img/home/IPS E Max.png";
import about_icon_2 from "@/assets/img/home/IMPLANT PROSTHESIS.png";
import about_icon_3 from "@/assets/img/home/IVOCLOR Zenostar.png";
import about_icon_4 from "@/assets/img/home/CERCON.png";
import about_icon_5 from "@/assets/img/home/MLS.png";
import about_icon_6 from "@/assets/img/home/MLD ZIRCONIA.png";
import Image, { StaticImageData } from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
 
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
      title: "IPS E-Max",
      sm_info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.",
    },
    {
      id: 2,
      cls: "mb-40",
      img: about_icon_2,
      title: "IMPLANT PROSTHESIS",
      sm_info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.",
    },
    {
      id: 3,
      cls: "mb-30",
      img: about_icon_3,
      title: "IVOCLOR ZENOSTAR",
      sm_info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.",
    },
    {
      id: 4,
      cls: "mb-30",
      img: about_icon_4,
      title: "CERCON",
      sm_info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.",
    },
    {
      id: 5,
      cls: "mb-30",
      img: about_icon_5,
      title: "MLS",
      sm_info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.",
    },
    {
      id: 6,
      cls: "mb-30",
      img: about_icon_6,
      title: "MLD ZIRCONIA",
      sm_info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.",
    },
  ],
};
 
const { about_data } = about_content;
 
const AboutAreaHomeTwo = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 4,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 992, // tablet
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576, // mobile
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
 
  return (
    <section className="about-area about-area-mid pt-50 pb-50">
      <div className="container">
        <div className="row">
          <Slider {...settings}>
            {about_data.map((item, i) => (
              <div key={i}>
                <div className={`feature-box ${item.cls} items-center justify-center text-center`}>
                  <div className="feature-small-icon mb-15">
                    <Image src={item.img} alt="theme-pure" />
                  </div>
                  <div className="feature-small-content">
                    <h3 className="text-lg font-semibold mt-2">{item.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};
 
export default AboutAreaHomeTwo;
 
 