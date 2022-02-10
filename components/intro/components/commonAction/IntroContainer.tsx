/** @jsxImportSource @emotion/react */

import React from 'react';
import styled from '@emotion/styled';

type IntroContainer = {
  children: Array<React.ReactChild> | React.ReactChild;
  id: string;
};

const IntroContainer = ({ children, id, ...props }: IntroContainer) => {
  return (
    <IntroLayout id={id} {...props}>
      {children}
    </IntroLayout>
  );
};

export default IntroContainer;

const IntroLayout = styled.div`
  position: relative;
  top: 0;
  left: 0;
  background-color: grey;
`;
