import Header from '@/layout/header/Header';
import React from 'react';
import Breadcrumb from '@/components/common/breadcrumb/Breadcrumb';
import Footer from '@/layout/footer/Footer';

const Doctor = () => {
  return (
    <>
      <Header />
      <main>
        <Breadcrumb sub_title='We are here for your care.' title='Online Order' page='ONLINE_ORDER' />

      </main>
      <Footer />
    </>
  );
};

export default Doctor;