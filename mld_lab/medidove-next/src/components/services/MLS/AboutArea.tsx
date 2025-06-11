import Image from "next/image";
import hiring_img_1 from "@/assets/img/services/mls.jpeg";
import Link from "next/link";
 
interface about_content_type {
  title: string;
  sm_des_1: string;
  sm_des_2: string;
}
const about_content: about_content_type = {
  title: "MLS",
  sm_des_1: "Additive Manufacturing is a 3D printing process that builds up parts layer. It doesn't matter whether you are producing crowns and bridges or removable partial dentures, with Additive Manufacturing solutions you always get exceptional value for money. Laboratories and manufacturing services providers can thus work much more efficiently.",
  sm_des_2: "Additive Manufacturing has been available to produce crowns and bridges since 2005. With over 60 installed systems worldwide, it is the most widespread solution on the market. Around 6.8 million units are currently being produced with these machines every year. Proof enough that the hardware and process have established themselves in dental technology. The CE-certified material EOS CobaltChrome SP2 (CE 0537) and the EOSINT M 270 system are used for the digital production of crowns and bridges. Both elements of the process chain come from EOS and satisfy the high quality standards for medical products. The finished products comply with the relevant standards EN 1641 as well as EN ISO 22674.",
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
              <div className="about-right-side pt-20 mb-40">
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