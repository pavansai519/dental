import React from 'react';
import Register from '@/components/auth/register';
import Wrapper from '@/layout/Wrapper';

export const metadata = {
  title: "Register - Mahalakshmi Dental Lab",
};

const index = () => {
  return (
    <Wrapper>
      <Register />
    </Wrapper>
  );
};

export default index;