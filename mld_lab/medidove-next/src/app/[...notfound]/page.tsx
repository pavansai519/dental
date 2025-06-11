import React from 'react';
import ErrorPage from '@/components/error';
import Wrapper from '@/layout/Wrapper';

export const metadata = {
  title: "404 - Mahalakshmi Dental Lab",
};
const index = () => {
  return (
    <Wrapper>
      <ErrorPage />
    </Wrapper>
  );
};

export default index;