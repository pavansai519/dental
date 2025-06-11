import Image from "next/image";
import hiring_img_1 from "@/assets/img/services/zenost.jpg";
 
interface about_content_type {
  title: string;
  sm_des_1: string;
  sm_des_2: string;
  sm_des_3: string;
}
const about_content: about_content_type = {
  title: "ZENOSTAR",
  sm_des_1: "Zenostar is one of the perspectives which we, together with your partner lab, offer you. The new monolithic dental restoration is ideal for crowns and bridges, offering high strength and a natural appearance - all at an extremely economical price. Zenostar stands for the best in customer satisfaction.",
  sm_des_2: "Wieland does everything possible to facilitate the manufacture of dental restorations through new product developments and innovative, future-ready systems. Zenostar is one of the perspectives which we, together with your partner lab, offer you. The new monolithic dental restoration is ideal for crowns and bridges, offering high strength and a natural appearance - all at an extremely economical price. Zenostar stands for the best in customer satisfaction.",
  sm_des_3: "Fabricated in a quality dental lab using the latest CAD/CAM technologies without a veneer and delivering a perfect fit for your patients. Dental restorations made from authentic Zenostar material withstand your chewing force, are long lasting and not susceptible to chipping.",
};
const {title, sm_des_1, sm_des_2, sm_des_3 } = about_content;
 
const AboutArea = () => {
  return (
    <>
      <section className="about-area pt-50 pb-30">
        <div className="container">
          <div className="row g-0 hire-bg-2">
            <div className="col-xl-6 col-lg-6">
              <div className="hire-img">
                <Image className="img" src={hiring_img_1} style={{width: "100%", height: "500px"}} alt="theme-pure" />
              </div>
            </div>
            <div className="col-xl-6 col-lg-7">
              <div className="about-right-side pt-20 mb-20">
                <div className="about-title mb-20">
                  <h2>{title}</h2>
                </div>
                <div className="about-text">
                  <p>{sm_des_1}</p>
                  <p>{sm_des_2}</p>
                  <p>{sm_des_3}</p>
                  <br />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
 
export default AboutArea;