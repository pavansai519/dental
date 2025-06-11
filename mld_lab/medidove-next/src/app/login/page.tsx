import React from 'react';
import Login from '@/components/auth/login';
import Wrapper from '@/layout/Wrapper';

export const metadata = {
  title: "Login - Mahalakshmi Dental Lab",
};


const index = () => {
  return (
    <Wrapper>
      <Login />
    </Wrapper>
  );
};

export default index;