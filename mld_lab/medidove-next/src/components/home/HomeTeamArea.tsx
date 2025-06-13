'use client';
import Link from 'next/link';
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
    link: string;
  }[];
}
 
const about_content: AboutContentDatatype = {
  about_data: [
    {
      id: 1,
      cls: "mb-40",
      img: about_icon_1,
      title: "IPS",
      sm_info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.",
      link: "/services/IPS_EMAX",
    },
    {
      id: 2,
      cls: "mb-40",
      img: about_icon_2,
      title: "IMPLANT PROSTHESIS",
      sm_info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.",
      link: "/services/IMPLANT_PROSTHESIS",
    },
    {
      id: 3,
      cls: "mb-30",
      img: about_icon_3,
      title: "IVOCLOR ZENOSTAR",
      sm_info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.",
      link: "/services/ZENOSTAR",
    },
    {
      id: 4,
      cls: "mb-30",
      img: about_icon_4,
      title: "CERCON",
      sm_info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.",
      link: "/services/CERCON_DENTSPLY",
    },
    {
      id: 5,
      cls: "mb-30",
      img: about_icon_5,
      title: "MLS",
      sm_info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.",
      link: "/services/MLS",
    },
    {
      id: 6,
      cls: "mb-30",
      img: about_icon_6,
      title: "MLD ZIRCONIA",
      sm_info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.",
      link: "/services/ZIRCONIA_MLD_BRAND",
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
    slidesToShow: 6,
    slidesToScroll: 0,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
 
  return (
    <section className="about-area about-area-mid pb-20">
      <div className="container">
        <div className="row">
          <Slider {...settings}>
            {about_data.map((item, i) => (
              <div key={i}>
                <div className={`${item.cls} flex flex-col items-center justify-center text-center bg-transparent p-0 shadow-none pt-5`}>
                  <div className="feature-small-icon">
                    <Link href={item.link}>
                      <Image src={item.img} alt={item.title} width={135} height={105}className="w-16 h-16 rounded-full mx-auto object-cover shadow-md"/>
                    </Link>
                  </div>
                 
                  <div className="feature-small-content">
                    <Link href={item.link}>
                      <h6 className="text-lg font-semibold mt-2 hover:underline">
                        {item.title}
                      </h6>
                    </Link>
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
 
 
