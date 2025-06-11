import Image from "next/image";
import hiring_img_1 from "@/assets/img/services/ivoclar.jpeg";
 
interface about_content_type {
  title: string;
  sm_des_1: string;
  sm_des_2: string;
}
const about_content: about_content_type = {
  title: "IVOCLAR PFM",
  sm_des_1: "IPS d.SIGN is simply aesthetics at its very best. The newly developed fluorapatite leucite glass-ceramic materials feature true-to-nature light optical properties and wear behavior. IPS d.SIGN is a unique combination of Fluorapatite and Leucite crystals that disperse light throughout the ceramic in a manner that closely matches that of natural dentition. IPS d.SIGN porcelain exhibits increased brightness and brilliance without added opacity, thus improving shade accuracy. Because it is low-fusing, IPS d.SIGN porcelain exhibits wear characteristics more comparable to natural enamel than feldspathic ceramics.",
  sm_des_2: "The true-to-nature light scattering with the high translucency and brightness of the ceramic enable thorough masking of the metal framework.",
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
                <Image className="img" src={hiring_img_1} style={{width: "100%", height: "420px"}} alt="theme-pure" />
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