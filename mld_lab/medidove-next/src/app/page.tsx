import Home from '@/components/home';
import Wrapper from '@/layout/Wrapper';
import React from 'react';

export const metadata = {
  title: "Mahalakshmi Dental Lab",
};

const HomeMain = () => {
  return (
    <Wrapper>
      <Home />
    </Wrapper>
  );
};

export default HomeMain;