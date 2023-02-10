import { css } from '@emotion/react';
import { Box, styled } from '@mui/material';
import { ResponsiveLayout, Text } from '@components/common';
import ScrollRevealSlideAnimation from '@components/common/ScrollRevealSlideAnimation';
import { clubData } from '@data/local/metadata';

const Introduction: React.FC = () => {
  return (
    <Wrapper>
      <ResponsiveLayout css={{ height: '100%', display: 'flex' }}>
        <Box className="content">
          <Text className="title">
            <span>E</span>
            ndless
            <span> C</span>reation
          </Text>
          <ScrollRevealSlideAnimation startPosition={1}>
            <Text className="text">
              사람과 컴퓨터를 사랑하는 동아리로,
              <br />
              창립한지 {clubData.currentGeneration}년째 되는 역사깊은 동아리입니다
            </Text>
          </ScrollRevealSlideAnimation>
          <ScrollRevealSlideAnimation startPosition={2}>
            <Text className="text">
              올해 2022년부터는
              <br />
              컴퓨터 공학과 학생들을 대상으로 하는
              <br />
              개발 관련 학술동아리가 아닌
            </Text>
          </ScrollRevealSlideAnimation>
          <ScrollRevealSlideAnimation startPosition={3}>
            <Text className="text">
              서울과학기술대학교 전교생을 대상으로
              <br />
              사용자를 위한 서비스를 기획하고 제작하는 동아리로 나아가고자 합니다.
            </Text>
          </ScrollRevealSlideAnimation>
        </Box>
        <Box
          sx={{
            display: { xs: 'none', md: 'none', xl: 'flex' },
            alignItems: 'center',
            paddingTop: '8rem',
          }}
        >
          <img
            src="/img/introduction.png"
            css={css`
              width: 100%;
            `}
          />
        </Box>
      </ResponsiveLayout>
    </Wrapper>
  );
};

export default Introduction;

const Wrapper = styled(Box)<any>(
  css`
    width: 100%;
    height: calc(var(--vh, 1vh) * 100);

    background-color: white;

    @media screen and (max-width: 768px) {
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      word-break: keep-all;
    }

    & .title {
      top: calc(25% - 0.5rem);
      font-size: 2.5rem;
      font-weight: bold;
      & span {
        color: #0eb371;
      }
    }

    & .content {
      padding: 0 4rem;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin-top: 0.625rem;
      font-size: 1.5rem;
      & .text {
        margin-top: 1rem;
        @media screen and (max-width: 768px) {
          margin-top: 4rem;
        }
      }
    }
  `,
);
