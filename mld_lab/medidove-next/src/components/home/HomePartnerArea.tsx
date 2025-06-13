import React from 'react';
import Image, { StaticImageData } from 'next/image';
import counter_icon_1 from "@/assets/img/about/cercon.jpeg";
import counter_icon_2 from "@/assets/img/about/ivoclar.jpeg";
import counter_icon_3 from "@/assets/img/about/3m_lava.jpeg"; 

interface DataType {
  id: number;
  icon: StaticImageData;
  title: string;
  sm_des: string;
}[]

const counter_data: DataType[] = [
  {
    id: 1,
    icon: counter_icon_1,
    title: "CERCON",
    sm_des: "Cercon is a high-strength, translucent zirconia ceramic used in dental restorations for durable, aesthetic crowns and bridges.",
  },
  {
    id: 2,
    icon: counter_icon_2,
    title: "IVOCLAR VIVODANT",
    sm_des: "Ivoclar Vivodent offers high-quality acrylic teeth for dentures, known for natural aesthetics, durability, and precise functional performance.",
  },
  {
    id: 3,
    icon: counter_icon_3,
    title: "3M LAVA",
    sm_des: "3M Lava is a premium zirconia material used in dental crowns and bridges, offering strength, translucency, and natural aesthetics.",
  },
]

const HomePartnerArea = () => {
  return (
    <>
      <section className="counter-wraper pt-10 pb-30 gray-bg">
        <div className="container">
          <h2 className="text-center mb-60">AUTHORISED PARTNER</h2>
          <div className="row">
            {counter_data.map((item, i) =>
              <div key={i} className="col-lg-4 col-md-6 text-center">
                <div className="single-couter mb-30">
                  <Image src={item.icon}  className="partner-logo-img" alt="theme-pure"/>
                  <div className="counter-text-box">
                    <br/>
                    <h3>{item.title}</h3>
                    <p>{item.sm_des}</p>
                  </div>
                </div>
              </div>
            )} 
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePartnerArea;