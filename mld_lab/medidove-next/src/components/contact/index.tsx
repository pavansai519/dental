
import Header from '@/layout/header/Header';
import React from 'react';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import ContactArea from './ContactArea';
import ContactFormArea from './ContactFormArea';
import ContactMap from './ContactMap';
import Footer from '@/layout/footer/Footer';

const Contact = () => {
  return (
    <>
      <Header />
      <main>
        <Breadcrumb sub_title='We are here for your care.' title='Contact Us' page='Contact' />
        <ContactArea />
        <ContactFormArea />
        <ContactMap />
      </main>
      <Footer />
    </>
  );
};

export default Contact;