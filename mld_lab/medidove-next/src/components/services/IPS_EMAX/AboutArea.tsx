import Image from "next/image";
import hiring_img_1 from "@/assets/img/services/emax.jpg";
 
interface about_content_type {
  title: string;
  sm_des_1: string;
  sm_des_2: string;
}
const about_content: about_content_type = {
  title: "IPS EMAX",
  sm_des_1: "IPS Empress and the Esthetic RevolutionSM held the promise of better dentistry, the promise of changing the lives of dentists and most importantly patients. Today, there is a technological revolution happening in dentistry that presents new opportunities for high strength laboratory fabricated restorations. For the first time, the Esthetic Revolution and Technological Revolution have aligned propelling dentistry to a new horizon.",
  sm_des_2: "Today, IPS e.max takes Empress to the max. Designed with simplicity and versatility in mind, IPS e.max allows you to select the most appropriate material - either high strength zirconium oxide or high strength glass ceramic - and the ideal fabrication technique for the case you are completing. A single layering ceramic, IPS e.max Ceram, offers simplicity – ultimately delivering outstanding esthetics, and predictable shade matching even with difficult combination cases.",
};
const {title, sm_des_1, sm_des_2 } = about_content;
 
const AboutArea = () => {
  return (
    <>
      <section className="about-area pt-50 pb-30">
        <div className="container">
          <div className="row g-0 hire-bg-2">
            <div className="col-xl-6 col-lg-6">
              <div className="hire-img">
                <Image className="img" src={hiring_img_1} style={{width: "100%", height: "450px"}} alt="theme-pure" />
              </div>
            </div>
            <div className="col-xl-6 col-lg-7">
              <div className="about-right-side pt-20 mb-20">
                <div className="about-title mb-20">
                  <h1>{title}</h1>
                </div>
                <div className="about-text">
                  <p>{sm_des_1}</p>
                  <p>{sm_des_2}</p>
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