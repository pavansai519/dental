// /src/app/not-found.tsx

import ErrorPage from '@/components/error';
import Wrapper from '@/layout/Wrapper';
import React from 'react';

export default function NotFound() {
  return (
    <Wrapper>
      <ErrorPage />
    </Wrapper>
  );
}
