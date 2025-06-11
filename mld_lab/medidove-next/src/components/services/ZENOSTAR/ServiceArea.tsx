import Link from "next/link";
 
interface AboutContent {
  title: string;
  features: string[];
}
const about_content: AboutContent = {
  title: "Advantages",
  features: [
    "Natural appearance through individual shading to match the color of your own teeth",
    "Very strong material means a long-lasting restoration (1600 Mpa Strength)",
    "All-ceramic restoration offers excellent biocompatibility",
    "No discoloration of the gums",
    "High translucence",
    "The latest CAD/CAM processing technology gives the best possible fit",
    "Very cost-effective",
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