/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Box, styled } from '@mui/material';
import PannelCard from '../Card/PannelCard';
import { Text } from '../common';
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';
import { testUser1 } from '../../types';

type NoticeProps = {
  noticeList: Array<any> | null;
};

const Notice = ({ noticeList }: NoticeProps) => {
  return (
    <Wrapper>
      <SectionTitle>
        <PriorityHighIcon className="titleIcon" />
        <Text className="title">공지사항</Text>
      </SectionTitle>
      <PannelCard
        list={
          noticeList || [
            { title: '공지1', author: testUser1, createdAt: new Date('2021-12-17') },
            { title: '공지2', author: testUser1, createdAt: new Date('2021-12-17') },
            { title: '공지3', author: testUser1, createdAt: new Date('2021-12-17') },
            { title: '공지4', author: testUser1, createdAt: new Date('2021-12-17') },
          ]
        }
      />
    </Wrapper>
  );
};

export default Notice;

const Wrapper = styled(Box)(css`
  width: 100%;
  min-height: 100%;
  height: fit-content;
  padding: 2rem;
`);

const SectionTitle = styled(Box)(css`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;

  & .titleIcon {
    width: 1.8rem;
    height: 1.8rem;
    margin-right: 0.5rem;
  }

  & .title {
    font-size: 1.8rem;
    font-weight: bold;
  }
`);
