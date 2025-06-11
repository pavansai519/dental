import React from 'react';

type DataType = {
  sub_title: string,
  title: string,
  page: string,
}

const Breadcrumb = ({sub_title, title,  page} : DataType) => {
  return (
    <>
      <section className="breadcrumb-bg pt-200 pb-100" style={{backgroundImage: `url(/assets/img/slider/slider-bg-2.jpg)`}}>
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-9 pt-100">
              <div className="page-title">
                <p className="small-text text-white">{sub_title}</p>
                <h1 className="text-white">{title}  </h1>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Breadcrumb;