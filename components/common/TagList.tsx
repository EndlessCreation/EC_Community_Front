/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Box, styled } from '@mui/material';
import React from 'react';
import { Project } from '../../types';

export const Tag = styled(Box)<any>(css`
  width: fit-content;
  height: 1rem;
  font-size: 0.8rem;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.6rem;
  border-radius: 5px;
  background-color: #2e952a;
  & + & {
    margin-left: 0.5rem;
  }
`);

export const TagList = ({ tags }: { tags: Array<string> }) => {
  return (
    <TagListWrapper>
      {tags.map((tag) => (
        <Tag key={tag}>{tag}</Tag>
      ))}
    </TagListWrapper>
  );
};

export default TagList;

const TagListWrapper = styled(Box)<any>(css`
  width: 100%;
  display: flex;
  overflow: scroll;
  ::-webkit-scrollbar: ;
`);
