/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Avatar, Box, Card, Grid, styled } from '@mui/material';
import { User } from '../../types';
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
              <UserCard elevation={3}>
                <Box className="image">
                  <Avatar src="https://avatars.githubusercontent.com/u/24623403?v=4" />
                </Box>
                <Box className="profile">
                  <Text className="name">황인서</Text>
                  <Text className="role">코드몽키</Text>
                  <Text className="email">sjsjsj1246@gmail.com</Text>
                </Box>
              </UserCard>
            </Grid>
            <Grid item xs={6} md={4} container justifyContent="center">
              <UserCard elevation={3}>
                <Box className="image">
                  <Avatar src="https://avatars.githubusercontent.com/u/28949165?v=4" />
                </Box>
                <Box className="profile">
                  <Text className="name">김건훈</Text>
                  <Text className="role">인간</Text>
                  <Text className="email">dnatuna123@gmail.com</Text>
                </Box>
              </UserCard>
            </Grid>
            <Grid item xs={6} md={4} container justifyContent="center">
              <UserCard elevation={3}>
                <Box className="image">
                  <Avatar src="https://avatars.githubusercontent.com/u/28949165?v=4" />
                </Box>
                <Box className="profile">
                  <Text className="name">김건훈</Text>
                  <Text className="role">인간</Text>
                  <Text className="email">dnatuna123@gmail.com</Text>
                </Box>
              </UserCard>
            </Grid>
            <Grid item xs={6} md={4} container justifyContent="center">
              <UserCard elevation={3}>
                <Box className="image">
                  <Avatar src="https://avatars.githubusercontent.com/u/28949165?v=4" />
                </Box>
                <Box className="profile">
                  <Text className="name">김건훈</Text>
                  <Text className="role">인간</Text>
                  <Text className="email">dnatuna123@gmail.com</Text>
                </Box>
              </UserCard>
            </Grid>
          </Grid>
        </Section>
      </ResponsiveLayout>

      <ResponsiveLayout>
        <Section>
          <Text className="title">리더</Text>
          <Grid container spacing={4}>
            <Grid item xs={6} md={4} container justifyContent="center">
              <UserCard elevation={3}>
                <Box className="image">
                  <Avatar src="https://avatars.githubusercontent.com/u/24623403?v=4" />
                </Box>
                <Box className="profile">
                  <Text className="name">황인서</Text>
                  <Text className="role">FE 리더</Text>
                  <Text className="email">sjsjsj1246@gmail.com</Text>
                </Box>
              </UserCard>
            </Grid>
            <Grid item xs={6} md={4} container justifyContent="center">
              <UserCard elevation={3}>
                <Box className="image">
                  <Avatar src="https://avatars.githubusercontent.com/u/28949165?v=4" />
                </Box>
                <Box className="profile">
                  <Text className="name">김건훈</Text>
                  <Text className="role">BE 리더</Text>
                  <Text className="email">dnatuna123@gmail.com</Text>
                </Box>
              </UserCard>
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

const UserCard = styled(Card)(css`
  width: 100%;
  height: 9.375rem;
  display: flex;

  & .image {
    flex: 4;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    & .MuiAvatar-root {
      width: 8rem;
      height: 8rem;
    }
  }

  & .profile {
    flex: 5;
    display: flex;
    padding: 1rem;
    flex-direction: column;

    & .name {
      font-size: 2rem;
    }

    & .role {
      margin-top: 0.2rem;
      width: fit-content;
      padding: 0.1rem 0.6rem;
      font-size: 1.1rem;
      border-radius: 5px;
      background-color: #408048;
      color: white;
    }

    & .email {
      margin-top: auto;
      color: #757575;
    }
  }
`);
