import about_icon_1 from "@/assets/img/icon/s-fea-icon-1.png";
import about_icon_2 from "@/assets/img/icon/s-fea-icon-2.png";
import about_icon_3 from "@/assets/img/icon/s-fea-icon-3.png";
import about_icon_4 from "@/assets/img/icon/s-fea-icon-4.png";
import Image, { StaticImageData } from "next/image";

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
      img: about_icon_3,
      title: "Prompt Delivery",
      sm_info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.",
    },
    {
      id: 6,
      cls: "mb-30",
      img: about_icon_1,
      title: "Friendly Staff",
      sm_info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.",
    },
  ],
}
const { about_data } = about_content

const AboutAreaHomeTwo = () => {
  return (
    <>
      <section className="about-area about-area-mid pt-50 pb-50">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12">
              <div className="row">
                {about_data.map((item, i) =>
                  <div key={i} className="col-xl-4 col-lg-6 col-md-6">
                    <div className={`feature-box ${item.cls}`}>
                      <div className="feature-small-icon mb-35">
                        <Image src={item.img} alt="theme-pure" />
                      </div>
                      <div className="feature-small-content">
                        <h3>{item.title}</h3>
                        <p>{item.sm_info}</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutAreaHomeTwo;