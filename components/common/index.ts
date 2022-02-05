/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Box, styled } from '@mui/material';

export const Text = styled('p')(css``);

export const ResponsiveLayout = styled(Box)<any>(
  css`
    width: 100%;
    padding: 2rem calc((100% - 91.5rem) / 2);
  `,
);

export const Section = styled(Box)<any>(
  ({ bgColor }) => css`
    padding: 6rem 4rem 6rem 4rem;
    background-color: ${bgColor ? bgColor : 'inherit'};
    & > .title {
      font-size: 2.5rem;
      font-weight: bold;
      margin-bottom: 2rem;
    }
  `,
);

export { default as PostCard } from '../Card/PostCard';
export { default as TagList } from './TagList';
