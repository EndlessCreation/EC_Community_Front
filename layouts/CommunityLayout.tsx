/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Box, styled } from '@mui/material';
import CommunityNav from './CommunityNav';

type CommunityLayoutProps = {
  children: React.ReactChild;
};

const CommunityLayout = ({ children }: CommunityLayoutProps) => {
  return (
    <Wrapper>
      <CommunityNav />
      <Section>{children}</Section>
    </Wrapper>
  );
};

export default CommunityLayout;

const Wrapper = styled(Box)(css`
  height: 100%;
  min-height: 31.25rem;
  display: flex;
`);

const Section = styled(Box)(css`
  flex: 1;
  min-width: 80rem;
  height: fit-content;
  overflow: auto;
`);
