import HeaderOne from '@/layout/header/Header';
import Breadcrumb from '@/components/common/breadcrumb/Breadcrumb';
import React from 'react';
import ServiceArea from './ServiceArea';
import AboutArea from './AboutArea';
import FooterThree from '@/layout/footer/Footer';

const Service = () => {
  return (
    <>
      <HeaderOne />
      <main>
        <Breadcrumb sub_title='We are here for your care.' title='IVOCLAR PFM' page='IVOCLAR_PFM' />
        <AboutArea />
        <ServiceArea />
      </main>
      <FooterThree />
    </>
  );
};

export default Service 