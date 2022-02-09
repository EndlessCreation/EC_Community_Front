/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Box, Button, Card, Grid, styled } from '@mui/material';
import { CooperationIcon, GrowthIcon, SharingIcon } from '../../public/svgs';
import { ResponsiveLayout, InteractionLayout, Section, Text } from '../common';
import { testActivity1, testActivity2 } from '../../types';
import { ActivityDetailCard } from '../Card';
import Slider from 'react-slick';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useEffect, useState } from 'react';
import { addEvent, initSettingAfterRender, initSettingBeforeRender } from './source/settings';
import playData from './source/utils/playData';
import IntroContainer from './components/IntroContainer';
import CountUp from 'react-countup';

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
  const [isRender, setIsRender] = useState<boolean>(false);
  // console.log('index');

  //index의 useEffect 먼저 실행,
  useEffect(() => {
    console.log('index before Render');
    try {
      initSettingBeforeRender();
      addEvent();
      setIsRender(true);
    } catch (e) {
      console.log(e);
    }
  }, []);

  useEffect(() => {
    try {
      if (isRender) {
        initSettingAfterRender();
        console.log('index after Render');
        console.log(playData);
      }
    } catch (e) {
      console.log(e);
    }
  }, [isRender]);

  return (
    <>
      <IntroContainer id="intro-root">
        {isRender ? (
          <>
            {/* 첫 화면*/}
            <InteractionLayout>
              <Top id="back-to-top-anchor">
                <Box>
                  <Text className="title">Endless Creation</Text>
                  <Box>
                    <Text>신입 기수 모집중(~4.21)</Text>
                    <Text>32기 여러분들을 기다리고 있어요!</Text>
                    <Button className="recruit">모집 내용 자세히 보기</Button>
                  </Box>
                </Box>
              </Top>
            </InteractionLayout>

            {/* EC 소개*/}
            <InteractionLayout>
              <Introduction>
                <Text className="title">
                  <span>E</span>
                  ndless
                  <span> C</span>reation
                </Text>

                <Box className="content">
                  <Text className="text">
                    사람과 컴퓨터를 사랑하는 동아리로,
                    <Text>창립한지 32년째 되는 역사깊은 동아리입니다</Text>
                  </Text>

                  <Text className="text">
                    올해 2022년부터는
                    <Text>컴퓨터 공학과 학생들을 대상으로 하는</Text>
                    <Text>개발 관련 학술동아리가 아닌</Text>
                  </Text>

                  <Text className="text">
                    서울과학기술대학교 전교생을 대상으로
                    <Text>사용자를 위한 서비스를 기획하고 제작하는 동아리로 나아가고자 합니다</Text>
                  </Text>

                  {/* <iframe
              src="https://www.youtube.com/embed/6QosveEmeqg"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            /> */}
                </Box>
              </Introduction>
            </InteractionLayout>

            {/* About */}
            <InteractionLayout
              css={css`
                background-attachment: fixed;
                background-image: url('/img/dividerBackground.jpg');
                background-repeat: no-repeat;
                background-size: cover;
                background-position: center;
              `}
            >
              <About>
                <Text className="title">
                  <span>A</span>bout
                  <Text className="subTitle">32년 째 멈추지 않는 열정</Text>
                </Text>

                <Grid container spacing={8} css={{ marginTop: '2rem' }} className="content">
                  <Grid item xs={12} md={4} container justifyContent="center">
                    <StatusCard elevation={2}>
                      <CountUp
                        duration={2}
                        start={new Date().getFullYear()}
                        end={1991}
                        className="cardTitle"
                        suffix="년"
                      />
                      <Text className="description">창립일</Text>
                    </StatusCard>
                  </Grid>
                  <Grid item xs={12} md={4} container justifyContent="center">
                    <StatusCard elevation={2}>
                      <CountUp duration={2} end={45} className="cardTitle" suffix="명" />
                      <Text className="description">활동 멤버</Text>
                    </StatusCard>
                  </Grid>
                  <Grid item xs={12} md={4} container justifyContent="center">
                    <StatusCard elevation={2}>
                      <CountUp duration={2} end={80} className="cardTitle" suffix="개" />
                      <Text className="description">누적 프로젝트</Text>
                    </StatusCard>
                  </Grid>
                </Grid>
              </About>
            </InteractionLayout>

            <InteractionLayout>
              <ResponsiveLayout
                css={{
                  background: '#f2f2f2',
                }}
              >
                {/*다음과 같은 가치를 추구합니다*/}
                <Identity>
                  <Text className="title">
                    <span>I</span>dentity
                    <Text className="subTitle">다음과 같은 가치를 추구합니다</Text>
                  </Text>
                  <Box className="content">
                    <Box className="symbol">
                      <GrowthIcon width="7.5rem" height="7.5rem" className="icon" />
                      <Text className="iconTitle">Growth</Text>
                      <Text className="description">
                        EC는 동아리원 모두의 성장을 격려하고 응원합니다.
                      </Text>
                    </Box>

                    <Box className="symbol">
                      <SharingIcon width="7.5rem" height="7.5rem" className="icon" />
                      <Text className="iconTitle">Sharing</Text>
                      <Text className="description">
                        EC는 개인의 지식과 경험을 공유하는 장이 되어줍니다.
                      </Text>
                    </Box>

                    <Box className="symbol">
                      <CooperationIcon width="7.5rem" height="7.5rem" className="icon" />
                      <Text className="iconTitle">Cooperation</Text>
                      <Text className="description">
                        EC는 더 나은 학습 환경을 위해 함께 고민하고 협력합니다.
                      </Text>
                    </Box>
                  </Box>
                </Identity>
              </ResponsiveLayout>
            </InteractionLayout>

            {/*  액티비티 */}
            <InteractionLayout>
              <ResponsiveLayout css={{ backgroundColor: '#F2F2F2' }}>
                <Activity>
                  <Text className="title">
                    <span>A</span>ctivity
                  </Text>
                  <Grid container spacing={6} className="wrapper">
                    <Grid item xs={12} md={6} container justifyContent="center">
                      <ActivityCard
                        src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                        elevation={2}
                      >
                        <Box className="filter">
                          <Text className="title">Networking</Text>
                          <Text className="description">
                            다양한 분야의 사람들과 정보를 공유합니다.
                          </Text>
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
                          <Text className="description">
                            팀 프로젝트를 통해 협업 능력을 키웁니다.
                          </Text>
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
                          <Text className="description">
                            회원들과 서로의 지식과 경험을 공유합니다.
                          </Text>
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
                </Activity>
              </ResponsiveLayout>
            </InteractionLayout>

            {/* 프로젝트 */}
            <InteractionLayout>
              <ResponsiveLayout>
                <Project>
                  <Text className="title">
                    <span>P</span>roject
                  </Text>

                  <StyledSlider {...settings} className="content">
                    <div>
                      <ActivityDetailCard activity={testActivity1} />
                    </div>
                    <div>
                      <ActivityDetailCard activity={testActivity2} />
                    </div>
                  </StyledSlider>
                  <Button className="more">자세히 보기</Button>
                </Project>
              </ResponsiveLayout>
            </InteractionLayout>

            {/* contact us */}
            <InteractionLayout>
              <ResponsiveLayout>
                <Contact>
                  <Text className="title">
                    <span>C</span>ontact us
                  </Text>
                  <Box className="content">
                    <Box className="link">
                      <Text className="title">깃헙</Text>
                      <Text className="description">Github</Text>
                    </Box>

                    <Box className="link">
                      <Text className="title">인스타</Text>
                      <Text className="description">Instagram</Text>
                    </Box>

                    <Box className="link">
                      <Text className="title">카카오톡 채널</Text>
                      <Text className="description">KakaoTalk</Text>
                    </Box>
                  </Box>
                </Contact>
              </ResponsiveLayout>
            </InteractionLayout>
          </>
        ) : (
          <></>
        )}
      </IntroContainer>
    </>
  );
};

export default Main;

const Top = styled(Box)<any>(
  css`
    display: none;
    width: 100%;
    height: 100vh;
    text-align: center;
    color: white;
    font-size: 2rem;
    background-image: url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    & > .MuiBox-root {
      user-select: none;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      backdrop-filter: blur(4px);
      padding-bottom: 4rem;
      & .title {
        font-size: 5rem;
        font-weight: bold;
      }
      & .recruit {
        bottom: -4rem;
        padding: 0.25rem 1.5rem;
        background-color: #ffffff75;
        border-radius: 0.25rem;
        border-bottom: 2px solid white;
        font-weight: bold;
        font-size: 2rem;
        color: #000000;
        :hover {
          background-color: #ffffffda;
        }
      }
    }
    @media screen and (max-width: 768px) {
      height: 100vh;
      & > .MuiBox-root {
        padding: 0;
        & > .title {
          font-size: 3.5rem;
          font-weight: bold;
        }
        & > p {
          font-size: 1.75rem;
        }
        & > .recruit {
          font-weight: bold;
        }
      }
      & iframe {
        display: none;
      }
    }
  `,
);

const Introduction = styled(Box)<any>(
  css`
    display: flex;
    display: none;
    width: 100%;
    height: 100vh;
    padding: 3rem 5rem;
    background-color: white;

    @media screen and (max-width: 768px) {
      display: flex;
      display: none;
      align-items: center;
      justify-content: center;
      text-align: center;
      word-break: keep-all;
    }

    & .title {
      position: fixed;
      top: calc(25% - 0.5rem);
      font-size: 2.5rem;
      font-weight: bold;
      white-space: pre;
      & span {
        color: #0eb371;
      }
    }

    & .content {
      max-width: 75%;
      position: fixed;
      top: calc(30% + 1rem);
      margin-top: 0.625rem;
      display: flex;
      flex-direction: column;
      font-size: 1.5rem;
      & .text {
        position: relative;
        margin-top: 1rem;
      }
      & span {
        font-weight: bold;
      }
      & iframe {
        margin-left: 2.5rem;
      }
    }
  `,
);

const About = styled(Box)<any>(
  css`
    display: flex;
    display: none;

    width: 100%;
    height: 100vh;
    background-color: white;
    align-items: center;
    justify-content: center;

    & .title {
      position: fixed;
      top: calc(25% - 2.5rem);
      left: 5rem;
      font-size: 2.5rem;
      font-weight: bold;

      & span {
        color: #0eb371;
      }
      & > .subTitle {
        position: relative;
        font-size: 2rem;
        color: #363636;
      }
    }
    & .cardTitle {
      font-size: 2rem;
      font-weight: bold;
    }

    & .content {
      margin-top: 0;
      font-size: 1.5rem;
    }
    @media screen and (max-width: 768px) {
      text-align: center;
      word-break: keep-all;
      flex-direction: column;
      & .title {
        position: static;
        left: 0;
      }
    }
  `,
);

const Identity = styled(Box)<any>(
  css`
    display: flex;
    /* display: none; */

    height: 100vh;
    width: 100%;
    padding: 0 2rem;
    align-items: center;
    justify-content: center;

    & .title {
      position: fixed;
      top: calc(25% - 2.5rem);
      left: 5rem;
      font-size: 2.5rem;
      font-weight: bold;

      & span {
        color: #0eb371;
      }
      & .subTitle {
        position: relative;
        font-size: 2rem;
        color: #363636;
      }
    }

    & .content {
      width: 100%;
      font-size: 1.5rem;
      display: flex;
      justify-content: space-around;
      align-items: center;
      @media screen and (max-width: 768px) {
        flex-direction: column;
        margin-top: 2rem;
      }
      & .symbol {
        width: 12.5rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        & .icon {
          width: 7.5rem;
          height: 7.5rem;
        }
        & .iconTitle {
          width: 6.25rem;
          font-size: 1.2rem;
          font-weight: bold;
          color: black;
          border-bottom: 1px solid #232323;
          margin-top: 0.625rem;
          padding-bottom: 0.5rem;
          margin-bottom: 1.25rem;
        }
      }
      & .description {
        text-align: center;
        font-size: 1rem;
        color: black;
      }
    }

    @media screen and (max-width: 768px) {
      text-align: center;
      word-break: keep-all;
      flex-direction: column;
      & .title {
        position: static;
        left: 0;
      }
    }
  `,
);

const Activity = styled(Box)<any>(
  css`
    /* display: flex; */
    display: none;
    height: 100vh;
    width: 100%;
    padding: 3rem 5rem;
    flex-direction: column;
    & > .title {
      font-size: 2.5rem;
      font-weight: bold;
      & span {
        color: #64cca2;
      }
    }

    & .wrapper {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      margin-top: 0rem;
      max-height: 100vh;
      & .title {
        display: flex;
        align-items: center;
        width: 9rem;
        height: 4rem;
        margin-right: 1rem;
      }

      & .description {
        font-size: 1rem;
      }
    }
  `,
);
const Project = styled(Box)<any>(
  css`
    display: flex;
    display: none;
    width: 100%;
    height: 100vh;
    padding: 3rem 5rem;

    justify-content: center;
    flex-direction: column;
    & > .title {
      /* position: fixed; */
      /* top: calc(25% - 2.5rem); */
      font-size: 2.5rem;
      font-weight: bold;
      & span {
        color: #64cca2;
      }
    }
    & > .content {
      margin: 4rem 5rem;
      font-size: 1.5rem;
    }
    & > .more {
      max-width: 320px;
      margin: 0 auto;
      padding: 0.25rem 1.5rem;
      background-color: #ffffff75;
      border-radius: 0.5rem;
      border-bottom: 1px solid white;
      font-weight: bold;
      font-size: 2rem;
      position: relative;
      bottom: -4rem;
      color: #000000;
      :hover {
        background-color: #ffffffda;
      }
    }
  `,
);
const StyledSlider = styled(Slider)(css`
  & .slick-arrow {
    color: black;
    &:hover {
      color: black;
    }
  }
`);

const Contact = styled(Box)<any>(
  css`
    display: flex;
    display: none;
    width: 100%;
    padding: 2rem 5rem;
    flex-direction: column;

    /* align-items: center; */

    & > .title {
      /* position: fixed; */
      /* top: calc(25% - 2.5rem); */
      left: 5rem;
      font-size: 2.5rem;
      font-weight: bold;

      & span {
        color: #0eb371;
      }
      & .subTitle {
        position: relative;
        font-size: 2rem;
        color: #363636;
      }
    }

    & .content {
      display: flex;
      justify-content: space-between;
      align-items: center;
      & > .link {
        width: 12.5rem;
        & > .title {
          font-size: 2.8rem;
          color: white;
        }
        & > .description {
          font-size: 1.6rem;
          color: white;
        }
      }
    }
  `,
);

const StatusCard = styled(Card)(css`
  width: 70%;
  height: 9.375rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #f3f3f3;
  border-radius: 5px;

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
    @media screen and (max-width: 768px) {
      height: 100%;
      & .filter {
        padding: 1rem;
      }
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
