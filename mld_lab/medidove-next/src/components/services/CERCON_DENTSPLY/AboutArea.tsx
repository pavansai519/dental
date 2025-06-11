import Image from "next/image";
import hiring_img_1 from "@/assets/img/services/cercon.jpeg";
import Link from "next/link";
 
interface about_content_type {
  title: string;
  sm_des_1: string;
  sm_des_2: string;
  sm_des_3: string;
}
const about_content: about_content_type = {
  title: "CERCON - DENTSPLY",
  sm_des_1: "Two long-term clinical studies delivered the only clinical proof that the results for Cercon zirconia bridges were comparable to those of metal-ceramic bridges, the gold standard (Sailer et al. 2009). 40-month survival rates were 100%.",
  sm_des_2: "Clinical studies on cantilever bridges (Wolfart et al. 2009) and widespan Cercon bridges (Schmitter et al. 2009) have demonstrated high levels of safety for Cercon in different indications.",
  sm_des_3: "Cercon is the only zirconia material for which the systemic safety of ceramic veneers has been scientifically studied. Extant studies include in vitro and clinical research, but also naturalistic observations (Rinke, IADR 2010).",
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
                <Image className="img" src={hiring_img_1} style={{width: "100%", height: "380px"}} alt="theme-pure" />
              </div>
            </div>
            <div className="col-xl-6 col-lg-7">
              <div className="about-right-side pt-20 mb-40">
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
            <div className="col-sm-8 pt-4 my-3 text-center">
              <h3>Have you question or need any help for work consultant</h3>
            </div>
            <div className="col-sm-4 my-3">
              <div className="hero-slider-btn">
                <Link data-animation="fadeInLeft" data-delay=".6s" href="/contact" className="btn btn-icon btn-icon-blue ml-0"><span>+</span>Contact Us</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
 
export default AboutArea;