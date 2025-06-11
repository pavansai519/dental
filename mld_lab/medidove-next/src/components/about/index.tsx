import Header from '@/layout/header/Header';
import React from 'react';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import AboutVideoArea from './AboutVideoArea';
import AboutCounterArea from './AboutPartnerArea';
import AboutServiceArea from './AboutServiceArea';
import AboutQuoteArea from './AboutQuoteArea';
import Footer from '@/layout/footer/Footer';

const About = () => {
  return (
    <>
      <Header />
      <main>
        <Breadcrumb sub_title='We are here for your care.' title='About Us' page='About Us' />
        <AboutVideoArea />
        <AboutCounterArea />
        <AboutQuoteArea />
        <AboutServiceArea />
      </main>
      <Footer />
    </>
  );
};

export default About;