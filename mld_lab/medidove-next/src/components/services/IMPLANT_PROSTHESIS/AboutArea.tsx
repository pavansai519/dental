import Image from "next/image";
import hiring_img_1 from "@/assets/img/services/implant.jpeg";
import Link from "next/link";
 
interface about_content_type {
  title: string;
  sm_des_1: string;
}
const about_content: about_content_type = {
  title: "IMPLANT PROSTHESIS",
  sm_des_1: "A fixed prosthesis offers benefits from both a functional and esthetic point of view and may be regarded as quite similar to a patient's own natural dentition when compared to alternative treatment options such as complete dentures or implant overdentures. There is a significantly reduced bulk to a fixed prosthesis which is perceived to be more comfortable and since no mucosal support is needed, patients can chew with greater force and eat a wider range of foods. Fixed prostheses lead to a gain of posterior mandibular bone because of the adaptation to higher chewing forces whereas hinging overdentures lead to bone loss in the posterior regions. Patients report enhanced social confidence as a result and reported quality of life satisfaction scores are highest with a fixed implant prosthesis. With all fixed prostheses, the contour should be carefully shaped in order to allow for oral hygiene access as these prostheses cannot be removed by the patient for cleaning. When a fixed prosthesis is close to the oral mucosa, the prosthesis' surface should be smooth and highly polished.",
};
const {title, sm_des_1 } = about_content;
 
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
              <div className="about-right-side pt-20 mb-40">
                <div className="about-title mb-20">
                  <h2>{title}</h2>
                </div>
                <div className="about-text">
                  <p>{sm_des_1}</p>
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