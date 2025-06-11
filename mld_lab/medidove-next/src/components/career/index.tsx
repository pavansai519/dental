import Header from '@/layout/header/Header';
import React from 'react';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import Footer from '@/layout/footer/Footer';

const Contact = () => {
  return (
    <>
      <Header />
      <main>
        <Breadcrumb sub_title='We are here for your care.' title='Career' page='Career' />
      </main>
      <Footer />
    </>
  );
};

export default Contact;