import React from 'react';

const ContactMap = () => {
  return (
    <>
      <section className="map-area">
        <div id="contact-map" className="contact-map">
          <div style={{ width: '100%', }}>
            <iframe
              title="Contact"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.325335947161!2d78.39592267493722!3d17.4919764834131!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb919327e6be8f%3A0x3019b79b02cec357!2sMahalakshmi%20Dental%20lab!5e0!3m2!1sen!2sin!4v1749032235202!5m2!1sen!2sin"
              style={{ width: '100%' }}
              height={672}
              allowFullScreen={true}
              loading="lazy"
            ></iframe>

          </div>
        </div>
      </section>
    </>
  );
};

export default ContactMap;