import Header from '@/layout/header/Header';
import Breadcrumb from '@/components/common/breadcrumb/Breadcrumb';
import LoginArea from './LoginArea'
import Footer from '@/layout/footer/Footer';
import React from 'react';

const Doctor = () => {
  return (
    <>
      <Header />
      <main>
        <Breadcrumb sub_title='We are here for your care.' title='Online Bill Payment' page='ONLINE_BILL_PAYMENT' />
        <LoginArea />
      </main>
      <Footer />
    </>
  );
};

export default Doctor;