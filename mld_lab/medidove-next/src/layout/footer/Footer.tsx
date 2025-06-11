import React from 'react';
import Link from 'next/link';
import { CopyRight } from '@/components/common/SocialLinks';

interface DataType {
  sm_des: string;
  email: string;
  website: string;
  address: string;
  link_data: {
    title: string;
    links: {
      title: string;
      link: string;
    }[]
  }[];

}

const footer_content: DataType = {
  sm_des: "",
  email: "info@mldentallab.com",
  website: "mldentallab.com",
  address: "MIG 91/1, 3rd Phase KPHB Colony, Kukatpally",

  link_data: [
    {
      title: "Quick Access Links",
      links: [
        { title: "Home", link: "/home" },
        { title: "Patient", link: "/patient/AUTHENTICATE_CASE" },
        { title: "About Us", link: "/about" },
        { title: "Career", link: "/career" },
        { title: "Services", link: "/services/IPS_EMAX" },
        { title: "Contact", link: "/contact" },
        { title: "Dentist", link: "/dentist/REQUEST_QUOTE" },
        { title: "Login", link: "/login" }, 
      ]
    }
  ],
}
const { sm_des, email, website, address, link_data } = footer_content


const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer-top primary-bg footer-map pos-rel pt-50">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-6 col-lg-6 col-md-6">
                <div className="footer-contact-info footer-contact-info-3 mb-20">
                  <div className="footer-logo mb-35">
                    <Link href="/home"><h3 className="text-white">Mahalakshmi Dental Lab</h3></Link>
                  </div>
                  <div className="footer-contact-content mb-5">
                    <p>{sm_des}</p>
                  </div>
                  <div className="footer-emailing">
                    <ul>
                      <li><i className="far fa-envelope"></i>{email}</li>
                      <li><i className="far fa-clone"></i>{website}</li>
                      <li><i className="far fa-flag"></i>{address}</li>
                    </ul>
                  </div>
                </div>
              </div>
              {link_data.map((link, link_i) =>
                <div key={link_i} className="col-xl-6 col-lg-6 col-md-6">
                  <div className="footer-widget mb-10">
                    <div className="footer-title">
                      <h3>{link.title}</h3>
                    </div>
                    <div className="footer-menu footer-menu-2">
                      <ul>
                        {link.links.map((link_item, index) =>
                          <li key={index}><Link href={link_item.link}>{link_item.title}</Link></li>
                        )}
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="footer-bottom pt-25 pb-20">
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="footer-copyright footer-copyright-3 text-center">
                  <p><CopyRight /></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;