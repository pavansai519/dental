import Image from "next/image";
import hiring_img_1 from "@/assets/img/services/bleaching.jpeg";
import Link from "next/link";
 
interface about_content_type {
  title: string;
  sm_des_1: string;
  sm_des_2: string;
  sm_des_3: string;
}
const about_content: about_content_type = {
  title: "BLEACHING TRAYS",
  sm_des_1: "Most over-the-counter teeth bleaching tray systems come with a week’s worth of trays. Each of the teeth bleaching trays is pre-filled with the appropriate amount of a peroxide-based whitening gel that is similar to what is used in popular whitening strips and other over-the-counter whitening products. Most systems will include a full set of disposable trays; you use two trays per day, one for your bottom teeth and one for your top teeth.",
  sm_des_2: "Over-the-counter teeth bleaching trays are typically made of a flexible material that molds to your teeth. It may not fit perfectly since the mold wasn’t made specifically for your teeth, but it should do the trick and whiten your smile in just a few days.",
  sm_des_3: "While teeth bleaching trays have become very popular, it’s important to note that they typically require a longer application time than most whitening strips and often cannot be worn while you talk on the phone or go about your day. However, Crest 3D White Whitestrips Advanced Vivid uses the innovative Advanced Seal technology that provides advanced adhesion to fit every person’s unique smile . . . and comes off clean leaving no mess behind. You can even drink water while you whiten with Advanced Vivid! No matter what product you choose for whitening, you will appreciate the benefits of having a brighter, whiter smile.",
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
                <Image className="img" src={hiring_img_1} style={{width: "100%", height: "550px"}} alt="theme-pure" />
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