import { css } from '@emotion/react';
import { Box, Card, Grid, styled } from '@mui/material';
import { ResponsiveLayout, Text } from '@components/common';
import ScrollRevealSlideAnimation from '@components/common/ScrollRevealSlideAnimation';

const Activity: React.FC = () => {
  return (
    <Wrapper>
      <ResponsiveLayout css={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
        <Content>
          <Text className="title">
            <span>A</span>ctivity
          </Text>
          <Grid container spacing={5}>
            <Grid item xs={12} md={6} container justifyContent="center">
              <ScrollRevealSlideAnimation startPosition={1}>
                <ActivityCard
                  src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                  elevation={2}
                >
                  <Box className="filter">
                    <Text className="title">Networking</Text>
                    <Text className="description">다양한 분야의 사람들과 정보를 공유합니다.</Text>
                  </Box>
                </ActivityCard>
              </ScrollRevealSlideAnimation>
            </Grid>
            <Grid item xs={12} md={6} container justifyContent="center">
              <ScrollRevealSlideAnimation startPosition={2}>
                <ActivityCard
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                  elevation={2}
                >
                  <Box className="filter">
                    <Text className="title">Project</Text>
                    <Text className="description">팀 프로젝트를 통해 협업 능력을 키웁니다.</Text>
                  </Box>
                </ActivityCard>
              </ScrollRevealSlideAnimation>
            </Grid>
            <Grid item xs={12} md={6} container justifyContent="center">
              <ScrollRevealSlideAnimation startPosition={1}>
                <ActivityCard
                  src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80"
                  elevation={2}
                >
                  <Box className="filter">
                    <Text className="title">Seminar</Text>
                    <Text className="description">회원들과 서로 지식과 경험을 공유합니다.</Text>
                  </Box>
                </ActivityCard>
              </ScrollRevealSlideAnimation>
            </Grid>
            <Grid item xs={12} md={6} container justifyContent="center">
              <ScrollRevealSlideAnimation startPosition={2}>
                <ActivityCard
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
                  elevation={2}
                >
                  <Box className="filter">
                    <Text className="title">Study</Text>
                    <Text className="description">뜻이 맞는 사람들과 함께 공부합니다.</Text>
                  </Box>
                </ActivityCard>
              </ScrollRevealSlideAnimation>
            </Grid>
          </Grid>
        </Content>
      </ResponsiveLayout>
    </Wrapper>
  );
};

export default Activity;

const Wrapper = styled(Box)(css`
  height: calc(var(--vh, 1vh) * 100);
  display: flex;
  flex-direction: column;
`);

const Content = styled(Box)<any>(
  css`
    padding: 0 4rem;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    & .title {
      font-size: 2.5rem;
      font-weight: bold;
      margin-bottom: 1rem;

      & span {
        color: #0eb371;
      }
    }
  `,
);

const ActivityCard = styled(Card)<any>(
  ({ src }) => css`
    width: 100%;
    height: 15vw;
    background-image: url(${src});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 10px;
    @media screen and (max-width: 768px) {
      height: 25vw;
    }

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
      @media screen and (max-width: 768px) {
        padding: 1rem;
      }

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

      @media screen and (max-width: 768px) {
        margin-bottom: 0.2rem;
      }
    }

    & .description {
      font-size: 1.3rem;
      color: #ebeaea;
      transition: all 0.4s ease;
      visibility: hidden;
      transform: translateY(12rem);
    }
  `,
);
