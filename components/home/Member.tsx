/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Box, Grid, styled } from '@mui/material';
import { testUser1, testUser2 } from '../../types';
import { UserCard } from '../Card';
import { ResponsiveLayout, Section, Text } from '../common';
import HomeHead from './HomeHead';

type MemberProps = {};

const Member = ({}: MemberProps) => {
  return (
    <Box>
      <HomeHead
        title="Member"
        description="Endless Creation을 이끄는 핵심 멤버를 소개합니다"
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
    </Box>
  );
};

export default Member;
