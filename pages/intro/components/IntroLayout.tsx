/** @jsxImportSource @emotion/react */

import React from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

type IntroLayout = {
  children: Array<React.ReactChild> | React.ReactChild;
};

const IntroLayout = ({ children }: IntroLayout) => {
  return <MainLayout>{children}</MainLayout>;
};

export default IntroLayout;

const MainLayout = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  top: 0;
  left: 0;
  background-color: blue;
`;
