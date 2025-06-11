import React from 'react';
import Dentist from '@/components/dentist/DOWNLOAD_RX_FORM';
import Wrapper from '@/layout/Wrapper';

export const metadata = {
  title: "Dentist - Mahalakshmi Dental Lab",
};

const index = () => {
  return (
    <Wrapper>
      <Dentist />
    </Wrapper>
  );
};

export default index;