import Image from "next/image";
import hiring_img_1 from "@/assets/img/services/lava3m.jpg";
import Link from "next/link";
 
interface about_content_type {
  title: string;
  sm_des_1: string;
  sm_des_2: string;
}
const about_content: about_content_type = {
  title: "3M LAVA",
  sm_des_1: "3M ESPE innovation now brings you Full Contoured Zirconia restorations. These glazed Zirconia units have no ceramic layering and give you strength and esthetics of Zirconia with minimal tooth reduction.",
  sm_des_2: "Due to their high strength, 3M full contoured restorations are suited for cases with only little inter occlusal space. Now you can restore a tooth with as little as 0.5 mm occlusal reduction in its preparation. You can offer patients with bruxisim a tooth coloured and strong restoration (more than 1000 mpa) without porcelain overlay. With 3M Full contoured restorations, you can now give your patients an adequate tooth coloured replacement of PFM or full cast metal restorations.",
};
const {title, sm_des_1, sm_des_2 } = about_content;
 
const AboutArea = () => {
  return (
    <>
      <section className="about-area pt-50 pb-30">
        <div className="container">
          <div className="row g-0 hire-bg-2">
            <div className="col-xl-4 col-lg-5">
              <div className="hire-img">
                <Image className="img" src={hiring_img_1} style={{width: "100%", height: "320px"}} alt="theme-pure" />
              </div>
            </div>
            <div className="col-xl-8 col-lg-7">
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