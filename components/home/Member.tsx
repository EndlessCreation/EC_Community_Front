/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Avatar, Box, Card, Grid, styled } from '@mui/material';
import { testUser1, testUser2 } from '../../types';
import { UserCard } from '../Card';
import { ResponsiveLayout, Text } from '../common';
import ScrollTop from '../ScrollTop';
import HomeHead from './HomeHead';

type MemberProps = {};

const Member = ({}: MemberProps) => {
  return (
    <Box>
      <HomeHead
        title="Endless Creation이란?"
        description="Endless Creation을 소개합니다"
        src="https://images.unsplash.com/photo-1502444330042-d1a1ddf9bb5b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1473&q=80"
      />

      <ResponsiveLayout>
        <Section>
          <Text className="title">운영진</Text>
          <Grid container spacing={4}>
            <Grid item xs={6} md={4} container justifyContent="center">
              <UserCard user={testUser1} elevation={3} />
            </Grid>
            <Grid item xs={6} md={4} container justifyContent="center">
              <UserCard user={testUser2} elevation={3} />
            </Grid>
            <Grid item xs={6} md={4} container justifyContent="center">
              <UserCard user={testUser1} elevation={3} />
            </Grid>
            <Grid item xs={6} md={4} container justifyContent="center">
              <UserCard user={testUser2} elevation={3} />
            </Grid>
          </Grid>
        </Section>
      </ResponsiveLayout>

      <ResponsiveLayout>
        <Section>
          <Text className="title">리더</Text>
          <Grid container spacing={4}>
            <Grid item xs={6} md={4} container justifyContent="center">
              <UserCard user={testUser2} elevation={3} />
            </Grid>
            <Grid item xs={6} md={4} container justifyContent="center">
              <UserCard user={testUser1} elevation={3} />
            </Grid>
          </Grid>
        </Section>
      </ResponsiveLayout>

      <ScrollTop />
    </Box>
  );
};

export default Member;

const Section = styled(Box)(css`
  padding: 2rem;

  & > .title {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 2rem;
  }
`);