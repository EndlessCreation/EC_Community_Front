/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Box, styled } from '@mui/material';
import { CooperationIcon, GrowthIcon, SharingIcon } from '../../public/svgs';
import { ResponsiveLayout, Text } from '../common';
import { testActivity1, testActivity2 } from '../../types';
import { ActivityDetailCard } from '../Card';
import Slider from 'react-slick';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

type MainProps = {};

const Main = ({}: MainProps) => {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <ArrowForwardIosIcon />,
    prevArrow: <ArrowBackIosIcon />,
  };
  return (
    <>
      <Top id="back-to-top-anchor">
        <Box>
          <Text css={{ fontSize: '3.25rem' }}>성장하는 즐거움</Text>
          <Text css={{ fontSize: '4rem' }}>Endless Creation</Text>
          <Text css={{ fontSize: '1.75rem' }}>신입 기수 모집중(~4.21)</Text>
          <Text css={{ fontSize: '1.75rem' }}>32기 여러분들을 기다리고 있어요!</Text>
        </Box>
      </Top>

      <ResponsiveLayout>
        <About>
          <Text className="title">
            <span>A</span>bout
          </Text>
          <Box className="content">
            <Text>
              <span>Endless Creation</span>은 사람과 컴퓨터를 사랑하는 동아리로, 개발하는 재미와
              함께 성장하는 즐거움을 알아갈 수 있는 다양한 활동을 준비하고 있습니다.{' '}
            </Text>
            {/* <iframe
              src="https://www.youtube.com/embed/6QosveEmeqg"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            /> */}
          </Box>
        </About>
      </ResponsiveLayout>

      <ResponsiveLayout
        css={{
          background: '#f2f2f2',
        }}
      >
        <Identity>
          <Box className="content">
            <GrowthIcon width="7.5rem" height="7.5rem" className="icon" />
            <Text className="title">Growth</Text>
            <Text className="description">EC는 동아리원 모두의 성장을 격려하고 응원합니다.</Text>
          </Box>

          <Box className="content">
            <SharingIcon width="7.5rem" height="7.5rem" className="icon" />
            <Text className="title">Sharing</Text>
            <Text className="description">EC는 개인의 지식과 경험을 공유하는 장이 되어줍니다.</Text>
          </Box>

          <Box className="content">
            <CooperationIcon width="7.5rem" height="7.5rem" className="icon" />
            <Text className="title">Cooperation</Text>
            <Text className="description">
              EC는 더 나은 학습 환경을 위해 함께 고민하고 협력합니다.
            </Text>
          </Box>
        </Identity>
      </ResponsiveLayout>

      <ResponsiveLayout
        css={css`
          background-attachment: fixed;
          background-image: url('/img/dividerBackground.jpg');
          background-repeat: no-repeat;
          background-size: cover;
          background-position: center;
        `}
      >
        <Divider>
          <Box className="content">
            <Text className="title">1991</Text>
            <Text className="description">Since</Text>
          </Box>

          <Box className="content">
            <Text className="title">60</Text>
            <Text className="description">활동 멤버</Text>
          </Box>

          <Box className="content">
            <Text className="title">123</Text>
            <Text className="description">누적 프로젝트</Text>
          </Box>
        </Divider>
      </ResponsiveLayout>

      <ResponsiveLayout>
        <Project>
          <Text className="title">
            <span>P</span>roject
            <StyledSlider {...settings}>
              <div>
                <ActivityDetailCard activity={testActivity1} />
              </div>
              <div>
                <ActivityDetailCard activity={testActivity2} />
              </div>
            </StyledSlider>
          </Text>
        </Project>
      </ResponsiveLayout>

      <ResponsiveLayout css={{ backgroundColor: '#F2F2F2' }}>
        <Activity>
          <Text className="title">
            <span>A</span>ctivity
          </Text>
          <Box className="wrapper">
            <Text className="title">잘 하는데</Text>
            <Text className="description">스터디, 세미나, EC어드밴스...</Text>
          </Box>
          <Box className="wrapper">
            <Text className="title">잘 놀기까지</Text>
            <Text className="description">신입생 환영회, 봄 소풍, 창립기념일, MT...</Text>
          </Box>
        </Activity>
      </ResponsiveLayout>
    </>
  );
};

export default Main;

const Top = styled(Box)<any>(
  css`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    & > .MuiBox-root {
      user-select: none;
      & > p {
        color: white;
      }
    }
    @media screen and (max-width: 768px) {
      height: 30rem;
      & iframe {
        display: none;
      }
    }
  `,
);

const About = styled(Box)<any>(
  css`
    width: 100%;
    padding: 3rem 2rem;
    display: flex;
    flex-direction: column;
    & .title {
      font-size: 2.5rem;
      font-weight: bold;
      & span {
        color: #64cca2;
      }
    }
    & .content {
      margin-top: 0.625rem;
      font-size: 1.125rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      & span {
        font-weight: bold;
      }
      & iframe {
        margin-left: 2.5rem;
      }
    }
  `,
);

const Identity = styled(Box)<any>(
  css`
    width: 100%;
    padding: 0 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    & .content {
      width: 12.5rem;
    }
    & .title {
      width: 6.25rem;
      font-size: 1.2rem;
      font-weight: bold;
      color: black;
      border-bottom: 1px solid #232323;
      margin-top: 0.625rem;
      padding-bottom: 0.5rem;
      margin-bottom: 1.25rem;
    }

    & .description {
      font-size: 1rem;
      color: black;
    }
    & .icon {
      width: 7.5rem;
      height: 7.5rem;
    }
  `,
);

const Divider = styled(Box)<any>(
  css`
    width: 100%;
    padding: 2rem;
    height: 10rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    & .content {
      width: 12.5rem;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    & .title {
      font-size: 2.8rem;
      color: white;
    }

    & .description {
      font-size: 1.6rem;
      color: white;
    }
  `,
);

const Project = styled(Box)<any>(
  css`
    width: 100%;
    padding: 3rem 2rem;
    display: flex;
    flex-direction: column;
    & .title {
      font-size: 2.5rem;
      font-weight: bold;
      & span {
        color: #64cca2;
      }
    }
  `,
);

const StyledSlider = styled(Slider)(css`
  margin: 0 4rem;
  & .slick-arrow {
    color: black;

    &:hover {
      color: black;
    }
  }
`);

const Activity = styled(Box)<any>(
  css`
    width: 100%;
    padding: 3rem 2rem;
    display: flex;
    flex-direction: column;
    & > .title {
      font-size: 2.5rem;
      font-weight: bold;
      & span {
        color: #64cca2;
      }
    }

    & .wrapper {
      width: 37.5rem;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      margin-top: 2rem;

      & .title {
        display: flex;
        align-items: center;
        width: 9rem;
        height: 4rem;
        border-right: 2px solid #64cca2;
        margin-right: 1rem;
        font-weight: bold;
        font-size: 1.5rem;
      }

      & .description {
        font-size: 1rem;
        color: #5a5a5a;
      }
    }
  `,
);
