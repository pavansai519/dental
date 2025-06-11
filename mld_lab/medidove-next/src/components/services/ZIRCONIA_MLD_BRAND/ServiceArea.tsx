import Link from "next/link";
 
interface AboutContent {
  title: string;
  features: string[];
}
const about_content: AboutContent = {
  title: "Advantages",
  features: [
    "Low fracture rate indicating minimal chipping smiliar to PFM crowns",
    "Alumina enables light transmission in the esthetic zone",
    "Optimal all-ceramic strength with good esthetics",
    "0.6 mm thickness for general usage in any position",
    "0.4 mm thickness for superior esthetics and translucency",
    "Zirconia for the higher load situations, extremely high flexural strength, 1200 MPa",
    "Long term clinical success data of over 15 years",
    "Natural , vital esthetics",
    "metal-free",
    "8 uit bridge,up to 2 pontics",
    "Biocmpatible-highallergy-risk patients can also have them",
    "Great solution for high-span bridges High esthetic demand",
  ]
}
const {title, features } = about_content
 
const ServiceArea = () => {
  return (
    <>
      <section className="about-area about-area-mid pb-20">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-12 col-md-11">
              <div className="about-right-side pt-25 mb-30">
                <div className="about-title mb-20">
                  <h2>{title}</h2>
                </div>
                <div className="about-text-list mb-40">
                  <ul>
                    {features.map((feature, index) =>
                      <li key={index}>
                        <i className="fa fa-check"></i>{feature}
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