import React from 'react';
import Patient from '@/components/patient/AUTHENTICATE_CASE';
import Wrapper from '@/layout/Wrapper';

export const metadata = {
  title: "Patient - Mahalakshmi Dental Lab",
};

const index = () => {
  return (
    <Wrapper>
      <Patient />
    </Wrapper>
  );
};

export default index;