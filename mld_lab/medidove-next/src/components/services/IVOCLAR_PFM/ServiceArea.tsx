import Link from "next/link";
 
interface AboutContent {
  title: string;
  features: string[];
}
const about_content: AboutContent = {
  title: "Advantages",
  features: [
    "The true-to-nature light scattering with the high translucency and brightness of the ceramic enable thorough masking of the metal framework.",
    "Well-balanced relationship between chroma and brightness similar to the natural counterpart.",
    "Take advantage of any investment opportunity",
    "Firing stability and stability of shade even after several firing cycles",
    "High surface quality, higher antagonist friendliness than other ceramic materials.",
    "Noticeably different processing, simply IPS d.SIGN",
  ]
}
const {title, features } = about_content
 
const ServiceArea = () => {
  return (
    <>
      <section className="about-area about-area-mid pb-20">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-11">
              <div className="about-right-side pt-25 mb-30">
                <div className="about-title mb-20">
                  <h2>{title}</h2>
                </div>
                <div className="about-text-list mb-40">
                  <ul>
                    {features.map((feature, index) =>
                      <li key={index}><i className="fa fa-check"></i><span>{feature}</span>
                      </li>
                    )}
                  </ul>
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
 
export default ServiceArea;