/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Box, styled } from '@mui/material';
import { ResponsiveLayout, Section, Text } from '../common';
import HomeHead from './HomeHead';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

const wantList = [
  '소속에 상관없이, 개발자 / 디자이너로 활동이 가능한 분',
  '협업하며 창작하는 즐거움을 경험하고 싶으신 분',
  '다양한 사람들과 폭넓고 깊이 있는 네트워킹을 원하시는 분',
];

type RecruitProps = {};

const Recruit = ({}: RecruitProps) => {
  return (
    <Box>
      <HomeHead
        title="Recruit"
        description="Endless Creation에 지원하고 싶으신가요?"
        src="https://images.unsplash.com/photo-1521791055366-0d553872125f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80"
      />

      <ResponsiveLayout>
        <Section>
          <Text className="title">지원 절차</Text>
          {/* @지원 절차 이미지 삽입 */}
          추가 예정입니다...
        </Section>

        <Section>
          <Text className="title">이런 분을 찾아요</Text>
          {/* @지원 절차 이미지 삽입 */}
          <WantList>
            {wantList.map((item, index) => (
              <Text key={index}>
                <PlayArrowIcon />
                {item}
              </Text>
            ))}
          </WantList>
        </Section>

        <Section>
          <Text className="title">자주 묻는 질문</Text>
          {/* @지원 절차 이미지 삽입 */}
          추가 예정입니다...
        </Section>
      </ResponsiveLayout>
    </Box>
  );
};

export default Recruit;

const WantList = styled(Box)(css`
  display: flex;
  flex-direction: column;

  & p {
    display: flex;
    align-items: center;
    font-size: 1.4rem;
    margin-bottom: 1rem;
  }
`);
