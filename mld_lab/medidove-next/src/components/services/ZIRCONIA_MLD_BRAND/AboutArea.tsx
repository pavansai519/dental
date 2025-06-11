import Image from "next/image";
import hiring_img_1 from "@/assets/img/services/zirconi.jpg";
 
interface about_content_type {
  title: string;
  sm_des_1: string;
  sm_des_2: string;
}
const about_content: about_content_type = {
  title: "ZIRCONIA - MLD BRAND",
  sm_des_1: "Zirconia is an innovative system for esthetic metal-free crowns and bridges. The reliability of zircon restorations is backed by more than five years of proven clinical success. The system is used to fabricate anterior or posterior single units or multi-unit bridge restorations out of translucent, biocompatible zirconia, the strongest and toughest dental ceramic.",
  sm_des_2: "Milled crown made of zircon crystal or so-called zircon crown is the most modern solution of tooth-crowning. Also this solution includes a basic construction that is milled of zircon crystal and it is then covered with plastic porcelain. Advantage of this method is the fact that zircon ceramic is very firm and it can be applied to more serious dentition defects, i.e. loss of 3-4 neighbouring teeth.",
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
                <Image className="img" src={hiring_img_1} style={{width: "100%", height: "380px"}} alt="theme-pure" />
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