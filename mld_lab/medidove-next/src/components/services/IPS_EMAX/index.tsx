import HeaderOne from '@/layout/header/Header';
import Breadcrumb from '@/components/common/breadcrumb/Breadcrumb';
import React from 'react';
import AboutArea from './AboutArea';
import ServiceArea from './ServiceArea';
import FooterThree from '@/layout/footer/Footer';

const Service = () => {
  return (
    <>
      <HeaderOne />
      <main>
        <Breadcrumb sub_title='We are here for your care.' title='IPS EMAX' page='IPS EMAX' />
        <AboutArea />
        <ServiceArea />
      </main>
      <FooterThree />
    </>
  );
};

export default Service 