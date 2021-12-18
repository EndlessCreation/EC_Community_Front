/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Box, Card, Grid, IconButton, styled } from '@mui/material';
import { Text } from '../common';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import PannelCard from '../Card/PannelCard';
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import { testUser1 } from '../../types';

type CommunityMainProps = {};

const contents = [
  {
    title: '공지사항',
    url: '/community/notice',
    content: (
      <PannelCard
        list={[
          { title: '공지1', author: testUser1, createdAt: new Date('2021-12-17') },
          { title: '공지2', author: testUser1, createdAt: new Date('2021-12-17') },
          { title: '공지3', author: testUser1, createdAt: new Date('2021-12-17') },
          { title: '공지4', author: testUser1, createdAt: new Date('2021-12-17') },
        ]}
      />
    ),
    titleIcon: <PriorityHighIcon className="titleIcon" />,
    xs: 12,
    md: 6,
  },
  {
    title: '함께 해요',
    url: '/community/activity',
    content: (
      <PannelCard
        list={[
          {
            title: '자바스크립트 스터디 같이 해요',
            author: testUser1,
            createdAt: new Date('2021-12-17'),
          },
          {
            title: '익스프레스 스터디 같이 해요',
            author: testUser1,
            createdAt: new Date('2021-12-17'),
          },
          {
            title: '타입스크립트 스터디 같이 해요',
            author: testUser1,
            createdAt: new Date('2021-12-17'),
          },
          { title: 'Next 스터디 같이 해요', author: testUser1, createdAt: new Date('2021-12-17') },
        ]}
      />
    ),
    titleIcon: <DirectionsRunIcon className="titleIcon" />,
    xs: 12,
    md: 6,
  },
  {
    title: '질문 / 답변',
    url: '/community/question',
    content: (
      <PannelCard
        list={[
          { title: '개발 너무 어려워요', author: testUser1, createdAt: new Date('2021-12-17') },
          {
            title: 'React와 사랑에 빠졌어요',
            author: testUser1,
            createdAt: new Date('2021-12-17'),
          },
          { title: '뭐 쓸지 모르겠어요', author: testUser1, createdAt: new Date('2021-12-17') },
        ]}
      />
    ),
    titleIcon: <QuestionAnswerIcon className="titleIcon" />,
    xs: 12,
    md: 12,
  },
  {
    title: '지난 활동',
    url: '/community/activity',
    content: (
      <PannelCard
        list={[
          { title: '모여런 프로젝트', author: testUser1, createdAt: new Date('2021-12-17') },
          { title: '잔디 프로젝트', author: testUser1, createdAt: new Date('2021-12-17') },
        ]}
      />
    ),
    titleIcon: <DirectionsRunIcon className="titleIcon" />,
    xs: 12,
    md: 12,
  },
];

const CommunityMain = ({}: CommunityMainProps) => {
  return (
    <Wrapper container spacing={4}>
      {contents.map((content) => (
        <Grid item xs={content.xs} md={content.md} key={content.title}>
          <SectionTitle>
            {content.titleIcon}
            <Text className="title">{content.title}</Text>
            <IconButton className="goButton">
              <ArrowForwardIosIcon />
            </IconButton>
          </SectionTitle>
          {content.content}
        </Grid>
      ))}
    </Wrapper>
  );
};

export default CommunityMain;

const Wrapper = styled(Grid)(css`
  width: 100%;
  min-height: 100%;
  height: fit-content;
  padding: 2rem;
`);

const SectionTitle = styled(Box)(css`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;

  & .titleIcon {
    margin-right: 0.5rem;
  }

  & .title {
    font-size: 1.2rem;
    font-weight: bold;
  }

  & .goButton {
    margin-left: auto;
    margin-right: 0.1rem;
  }
`);
