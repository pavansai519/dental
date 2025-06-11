import Link from "next/link";
 
interface AboutContent {
  title: string;
  features: string[];
  title_2: string;
  features_2: string[];
}

const about_content: AboutContent = {
  title: "Advantages",
  
  features: [
    "Excellent esthetics and high strength (500 MPa*)",
    "Versatile applications and extensive indication range",
    "Minimally invasive preparation and adhesive cementation of crowns with a layer thickness of 1 mm",
    "Clinical long-term success and scientifically documented results",
    "Natural-looking esthetics irrespective of the preparation shade",
    "Adhesive, self-adhesive or conventional cementation depending on the indication",
  ],
  title_2: "Indications",
  features_2: [
    "Veneers (≥ 0.3 mm)",
    "Inlays and onlays",
    "Occlusal veneers, partial crowns",
    "Minimally invasive crowns (≥ 1 mm)",
    "Implant superstructures",
    "Hybrid abutment solutions",
  ],
}

const{title, features, title_2, features_2} = about_content;

const ServiceArea = () => {
  return (
    <>
      <section className="about-area about-area-mid pb-20">
        <div className="container">
          <div className="row">
            <div className="col-xl-7 col-lg-12 col-md-11">
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
            <div className="col-xl-5 col-lg-12 col-md-11">
              <div className="about-right-side pt-25 mb-30">
                <div className="about-title mb-20">
                  <h2>{title_2}</h2>
                </div>
                <div className="about-text-list mb-40">
                  <ul>
                    {features_2.map((feature, index) =>
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