import Link from "next/link";
const HomeQuoteArea = () => {
  return (
    <>
      <section className="about-area about-area-mid pt-50 pb-50 bg-light">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-8 pt-4 my-3 text-center">
              <h3>Providing Quality Dental Solutions Across The Country</h3>
            </div>
            <div className="col-sm-4 my-3">
              <div className="hero-slider-btn">
                <Link data-animation="fadeInLeft" data-delay=".6s" href="/doctor" className="btn btn-icon btn-icon-blue ml-0"><span>+</span>Get a Quote</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeQuoteArea;