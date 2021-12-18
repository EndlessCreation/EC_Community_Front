/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Box, styled } from '@mui/material';
import CommunityBottomNav from './CommunityBottomNav';
import CommunityNav from './CommunityNav';

type CommunityLayoutProps = {
  children: React.ReactChild;
};

const CommunityLayout = ({ children }: CommunityLayoutProps) => {
  return (
    <Wrapper>
      <CommunityNav />
      <Section>{children}</Section>
      <CommunityBottomNav />
    </Wrapper>
  );
};

export default CommunityLayout;

const Wrapper = styled(Box)(css`
  height: 100%;
  min-height: 31.25rem;
  display: flex;

  & .bottomNav {
    display: none;
  }

  @media screen and (max-width: 768px) {
    & {
      flex-direction: column;
    }
    & .sideNav {
      display: none;
    }
    & .bottomNav {
      display: block;
    }
  }
`);

const Section = styled(Box)(css`
  flex: 1;
  min-width: 80rem;
  height: fit-content;
  overflow: auto;
`);
