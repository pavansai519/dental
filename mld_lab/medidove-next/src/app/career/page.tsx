import React from 'react';
import Doctor from '@/components/career';
import Wrapper from '@/layout/Wrapper';

export const metadata = {
  title: "Career - Mahalakshmi Dental Lab",
};

const index = () => {
  return (
    <Wrapper>
      <Doctor />
    </Wrapper>
  );
};

export default index;