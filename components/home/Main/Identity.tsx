/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Box, styled } from '@mui/material';
import { ResponsiveLayout, Text } from '../../common';
import { CooperationIcon, GrowthIcon, SharingIcon } from '../../../public/svgs';
import ScrollRevealSlideAnimation from '../../common/ScrollRevealSlideAnimation';
import CountUp from 'react-countup';
import ScrollRevealRender from '../../common/ScrollRevealRender';

type AboutProps = {};

const Identity: React.FunctionComponent<AboutProps> = () => {
  return (
    <Wrapper>
      <ResponsiveLayout css={{ flex: 1, paddingTop: 0, paddingBottom: 0 }}>
        <Content>
          <Text className="title">
            <span>I</span>dentity
          </Text>
          <Box className="container">
            <ScrollRevealSlideAnimation startPosition={1}>
              <Box className="symbol">
                <GrowthIcon width="100%" height="100%" className="icon" />
                <Text className="iconTitle">Growth</Text>
                <Text className="description">
                  EC는 동아리원 모두의 성장을 격려하고 응원합니다.
                </Text>
              </Box>
            </ScrollRevealSlideAnimation>
            <ScrollRevealSlideAnimation startPosition={2}>
              <Box className="symbol">
                <SharingIcon width="100%" height="100%" className="icon" />
                <Text className="iconTitle">Sharing</Text>
                <Text className="description">
                  EC는 개인의 지식과 경험을 공유하는 장이 되어줍니다.
                </Text>
              </Box>
            </ScrollRevealSlideAnimation>
            <ScrollRevealSlideAnimation startPosition={3}>
              <Box className="symbol">
                <CooperationIcon width="100%" height="100%" className="icon" />
                <Text className="iconTitle">Cooperation</Text>
                <Text className="description">
                  EC는 더 나은 학습 환경을 위해 함께 고민하고 협력합니다.
                </Text>
              </Box>
            </ScrollRevealSlideAnimation>
          </Box>
        </Content>
      </ResponsiveLayout>
      <ResponsiveLayout
        css={css`
          height: 12vw;
          background-attachment: fixed;
          background-image: url('/img/dividerBackground.png');
          background-repeat: no-repeat;
          background-size: cover;
          background-position: center;

          @media screen and (max-width: 768px) {
            height: 30vw;
          }
        `}
      >
        <Divider>
          <ScrollRevealRender>
            <Box className="content">
              <CountUp
                duration={1.7}
                start={new Date().getFullYear()}
                end={1991}
                className="title"
                suffix="년"
              />
              <Text className="description">창립일</Text>
            </Box>
          </ScrollRevealRender>
          <ScrollRevealRender>
            <Box className="content">
              <CountUp duration={1.7} end={45} className="title" suffix="명" />
              <Text className="description">활동 멤버</Text>
            </Box>
          </ScrollRevealRender>
          <ScrollRevealRender>
            <Box className="content">
              <CountUp duration={1.7} end={80} className="title" suffix="개" />
              <Text className="description">누적 프로젝트</Text>
            </Box>
          </ScrollRevealRender>
        </Divider>
      </ResponsiveLayout>
    </Wrapper>
  );
};

export default Identity;

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
    padding-top: 4rem;

    @media screen and (max-width: 768px) {
      text-align: center;
    }

    & .title {
      font-size: 2.5rem;
      font-weight: bold;

      & span {
        color: #0eb371;
      }
    }

    & .container {
      font-size: 1.5rem;
      margin-top: 6rem;
      width: 100%;
      display: flex;
      justify-content: space-around;
      align-items: center;

      @media screen and (max-width: 768px) {
        margin-top: 1rem;
        flex-direction: column;
      }

      & .symbol {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        @media screen and (max-width: 768px) {
          margin-top: 1.5rem;
        }

        & .icon {
          width: 7.5rem;
          height: 7.5rem;
          @media screen and (max-width: 768px) {
            width: 4.5rem;
            height: 4.5rem;
          }
        }

        & .iconTitle {
          font-size: 1.2rem;
          font-weight: bold;
          color: black;
          border-bottom: 1px solid #232323;
          margin-top: 0.625rem;
          padding-bottom: 0.5rem;
          margin-bottom: 1.25rem;
          @media screen and (max-width: 768px) {
            margin-top: 0.3rem;
            padding-bottom: 0.2rem;
            margin-bottom: 0.6rem;
          }
        }
      }

      & .description {
        width: 14rem;
        text-align: center;
        font-size: 1rem;
        color: black;
      }
    }
  `,
);

const Divider = styled(Box)<any>(
  css`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;

    & .content {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    & .title {
      font-size: 2rem;
      color: #ffffffc5;
    }

    & .description {
      font-size: 1.2rem;
      color: #ffffffc5;
    }
  `,
);
