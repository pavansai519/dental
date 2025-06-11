import Image from "next/image";
import hiring_img_1 from "@/assets/img/services/night.jpeg";
import hiring_img_2 from "@/assets/img/services/nightguard2.jpg";
import Link from "next/link";
 
interface about_content_type {
  title: string;
  title_1: string;
  sm_des_1: string;
  sm_des_2: string;
  sm_des_3: string;
  sm_des_4: string;
}
const about_content: about_content_type = {
  title: "WHAT IS BRUXISM ?",
  title_1: "NIHTGAURD",
  sm_des_1: "About 50-95% of the population are bruxers, half of whom become chronic enough to require treatment. Bruxism can occur at any time, but it’s most common at night while sleeping. Because it happens during sleep, most people don’t know they brux until their dentist tells them that they are showing signs of bruxing. Often a spouse or family member hears the grinding sound. When diagnosed early, teeth grinding can be treated before it causes permanent damage to the teeth.",
  sm_des_2: "<strong>Causes:</strong> Most often, bruxism is related to stress. It may also be a response to pain elsewhere in the body, or the result of misaligned teeth. Alcohol, caffeine and other stimulants can aggravate the condition, causing more severe grinding or clenching.",
  sm_des_3: "A night guard is an appliance worn over the teeth to relieve head,neck, jaw joint and shoulder pain caused by bruxing and clenching.",
  sm_des_4: "Nightguards protect the teeth from damage done from bruxing. Nightguards are made of a nonallergic material with a clear hard outer and soft inner surface. This material is thermo formed under vaccum for an accurate fit and comfort.",
};
const {title, title_1, sm_des_1, sm_des_2, sm_des_3, sm_des_4} = about_content;
 
const AboutArea = () => {
  return (
    <>
      <section className="about-area pt-50 pb-30">
        <div className="container">
          <div className="row g-0 hire-bg-2">
            <div className="col-xl-5 col-lg-6">
              <div className="hire-img">
                <Image className="img" src={hiring_img_1} style={{width: "100%", height: "350px"}} alt="theme-pure" />
              </div>
            </div>
            <div className="col-xl-7 col-lg-7">
              <div className="about-right-side pt-20 mb-40">
                <div className="about-title mb-20">
                  <h2>{title}</h2>
                </div>
                <div className="about-text">
                  <p>{sm_des_1}</p>
                  <p dangerouslySetInnerHTML={{ __html: about_content.sm_des_2 }} />
                  <br />
                </div>
              </div>
            </div>

            <div className="col-xl-7 col-lg-7">
              <div className="about-right-side pt-40">
                <div className="about-title mb-20">
                  <h2>{title_1}</h2>
                </div>
                <div className="about-text">
                  <p>{sm_des_3}</p>
                  <p>{sm_des_4}</p>
                  <br />
                </div>
              </div>
            </div>
            <div className="col-xl-5 col-lg-6 mb-50">
              <div className="hire-img">
                <Image className="img" src={hiring_img_2} style={{width: "100%", height: "300px"}} alt="theme-pure" />
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