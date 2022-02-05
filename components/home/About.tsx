/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Box, Card, Grid, styled } from '@mui/material';
import { ResponsiveLayout, Section, Text } from '../common';
import HomeHead from './HomeHead';
import CountUp from 'react-countup';
import { testUser1, testUser2, testUser3, testUser4, testUser5, testUser6 } from '../../types';
import { UserCard } from '../Card';
import { FunctionComponent } from 'react';
import Head from 'next/head';

type AboutProps = {};

const About: FunctionComponent<AboutProps> = ({}) => {
  return (
    <Box>
      <Head>
        <title>EC: 소개</title>
      </Head>
      <HomeHead
        title="Endless Creation이란?"
        description="Endless Creation을 소개합니다"
        src="'https://images.unsplash.com/photo-1588269232168-d212b558cea2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80'"
      />

      <ResponsiveLayout>
        <Section>
          <Text className="title">31년 째 멈추지 않는 열정</Text>
          <Grid container spacing={8} css={{ marginTop: '2rem' }}>
            <Grid item xs={12} md={4} container justifyContent="center">
              <StatusCard elevation={2}>
                <CountUp
                  duration={2}
                  start={new Date().getFullYear()}
                  end={1991}
                  className="title"
                  suffix="년"
                />
                <Text className="description">창립일</Text>
              </StatusCard>
            </Grid>
            <Grid item xs={12} md={4} container justifyContent="center">
              <StatusCard elevation={2}>
                <CountUp duration={2} end={45} className="title" suffix="명" />
                <Text className="description">활동 멤버</Text>
              </StatusCard>
            </Grid>
            <Grid item xs={12} md={4} container justifyContent="center">
              <StatusCard elevation={2}>
                <CountUp duration={2} end={80} className="title" suffix="개" />
                <Text className="description">누적 프로젝트</Text>
              </StatusCard>
            </Grid>
          </Grid>
        </Section>

        <Section>
          <Text className="title">풍부한 활동</Text>
          <Grid container spacing={8}>
            <Grid item xs={12} md={6} container justifyContent="center">
              <ActivityCard
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                elevation={2}
              >
                <Box className="filter">
                  <Text className="title">Networking</Text>
                  <Text className="description">다양한 분야의 사람들과 정보를 공유합니다.</Text>
                </Box>
              </ActivityCard>
            </Grid>
            <Grid item xs={12} md={6} container justifyContent="center">
              <ActivityCard
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                elevation={2}
              >
                <Box className="filter">
                  <Text className="title">Project</Text>
                  <Text className="description">팀 프로젝트를 통해 협업 능력을 키웁니다.</Text>
                </Box>
              </ActivityCard>
            </Grid>
            <Grid item xs={12} md={6} container justifyContent="center">
              <ActivityCard
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80"
                elevation={2}
              >
                <Box className="filter">
                  <Text className="title">Seminar</Text>
                  <Text className="description">회원들과 서로의 경험을 공유합니다.</Text>
                </Box>
              </ActivityCard>
            </Grid>
            <Grid item xs={12} md={6} container justifyContent="center">
              <ActivityCard
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
                elevation={2}
              >
                <Box className="filter">
                  <Text className="title">Study</Text>
                  <Text className="description">뜻이 맞는 사람들과 함께 공부합니다.</Text>
                </Box>
              </ActivityCard>
            </Grid>
          </Grid>
        </Section>

        <Section>
          <Text className="title">운영진</Text>
          <Grid container spacing={8}>
            <Grid item xs={6} md={4} container justifyContent="center">
              <UserCard user={testUser1} elevation={2} />
            </Grid>
            <Grid item xs={6} md={4} container justifyContent="center">
              <UserCard user={testUser2} elevation={2} />
            </Grid>
            <Grid item xs={6} md={4} container justifyContent="center">
              <UserCard user={testUser3} elevation={2} />
            </Grid>
            <Grid item xs={6} md={4} container justifyContent="center">
              <UserCard user={testUser4} elevation={2} />
            </Grid>
            <Grid item xs={6} md={4} container justifyContent="center">
              <UserCard user={testUser5} elevation={2} />
            </Grid>
            <Grid item xs={6} md={4} container justifyContent="center">
              <UserCard user={testUser6} elevation={2} />
            </Grid>
          </Grid>
        </Section>
      </ResponsiveLayout>
    </Box>
  );
};

export default About;

const StatusCard = styled(Card)(css`
  width: 100%;
  height: 9.375rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #f3f3f3;
  border-radius: 10px;

  & .title {
    font-size: 2rem;
    font-weight: bold;
  }

  & .description {
    margin-top: 0.5rem;
    font-size: 1.3rem;
  }
`);

const ActivityCard = styled(Card)<any>(
  ({ src }) => css`
    width: 100%;
    height: 15.625rem;
    background-image: url(${src});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 10px;

    &:hover {
      & .title {
        font-size: 2rem;
      }
      & .description {
        visibility: visible;
        transform: translateY(0);
      }
    }

    & .filter {
      padding: 1.5rem;
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      background: linear-gradient(90deg, rgba(0, 0, 0, 0.45) 0%, rgba(0, 0, 0, 0.1) 100%);

      &:hover {
        background: linear-gradient(90deg, rgba(0, 0, 0, 0.75) 0%, rgba(0, 0, 0, 0.3) 100%);
      }
    }

    & .title {
      width: 60%;
      font-size: 2.2rem;
      color: white;
      transition: all 0.4s ease;
      margin-bottom: 1rem;
    }

    & .description {
      font-size: 1.3rem;
      color: #dddddd;
      transition: all 0.4s ease;
      visibility: hidden;
      transform: translateY(12rem);
    }
  `,
);
