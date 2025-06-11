import HeaderOne from '@/layout/header/Header';
import Breadcrumb from '@/components/common/breadcrumb/Breadcrumb';
import React from 'react';
import AboutArea from './AboutArea';
import FooterThree from '@/layout/footer/Footer';

const Service = () => {
  return (
    <>
      <HeaderOne />
      <main>
        <Breadcrumb sub_title='We are here for your care.' title='IMPLANT PROSTHESIS' page='IMPLANT_PROSTHESIS' />
        <AboutArea />
      </main>
      <FooterThree />
    </>
  );
};

export default Service 