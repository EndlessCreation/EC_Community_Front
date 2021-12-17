/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Box } from '@mui/material';
import { ResponsiveLayout, Section } from '../common';
import HomeHead from './HomeHead';

type RecruitProps = {};

const Recruit = ({}: RecruitProps) => {
  return (
    <Box>
      <HomeHead
        title="Member"
        description="Endless Creation을 이끄는 핵심 멤버를 소개합니다"
        src="https://images.unsplash.com/photo-1502444330042-d1a1ddf9bb5b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1473&q=80"
      />

      <ResponsiveLayout>
        <Section></Section>
      </ResponsiveLayout>
    </Box>
  );
};

export default Recruit;
