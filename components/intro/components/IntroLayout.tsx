/** @jsxImportSource @emotion/react */

import React from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

type IntroLayout = {
  children: Array<React.ReactChild> | React.ReactChild;
  id: string;
};

const IntroLayout = ({ children, id, ...props }: IntroLayout) => {
  return (
    <MainLayout id={id} {...props}>
      {children}
    </MainLayout>
  );
};

export default IntroLayout;

const MainLayout = styled.div`
  position: relative;
  top: 0;
  left: 0;
  z-index: -2;
  background-color: grey;
`;
