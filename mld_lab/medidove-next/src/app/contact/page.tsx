import React from 'react';
import Contact from '@/components/contact';
import Wrapper from '@/layout/Wrapper';

export const metadata = {
  title: "Contact - Mahalakshmi Dental Lab",
};

const index = () => {
  return (
    <Wrapper>
      <Contact />
    </Wrapper>
  );
};

export default index;