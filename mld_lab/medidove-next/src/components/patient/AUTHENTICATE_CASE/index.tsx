import Header from '@/layout/header/Header';
import React from 'react';
import Breadcrumb from '@/components/common/breadcrumb/Breadcrumb';
import LoginArea from './LoginArea';
import Footer from '@/layout/footer/Footer';

const Patient = () => {
  return (
    <>
      <Header />
      <main>
        <Breadcrumb sub_title='We are here for your care.' title='AUTHENTICATE CASE' page='AUTHENTICATE_CASE' />
        <LoginArea />
      </main>
      <Footer />
    </>
  );
};

export default Patient;