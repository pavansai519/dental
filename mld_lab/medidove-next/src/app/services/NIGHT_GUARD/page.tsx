import Service from '@/components/services/NIGHT_GUARD';
import Wrapper from '@/layout/Wrapper'; 
import React from 'react';

export const metadata = {
  title: "Services - Mahalakshmi Dental Lab",
};

const index = () => {
  return (
    <Wrapper>
      <Service />      
    </Wrapper>
  );
};

export default index;