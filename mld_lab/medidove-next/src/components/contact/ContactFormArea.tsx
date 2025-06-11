import React from 'react';
import ContactForm from './ContactForm';

const ContactFormArea = () => {
  return (
    <>
      <section className="contact-form-area gray-bg pt-100 pb-100">
        <div className="container">
          <div className="form-wrapper">
            <div className="row align-items-center">
              <div className="col-xl-8 col-lg-8">
                <div className="section-title mb-55">
                  <h1>Contact Form</h1>
                </div>
              </div>
            </div>
            <div className="contact-form">
              <ContactForm /> 
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactFormArea;