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

export { default as PostCard } from './PostCard';
export { default as TagList } from './TagList';
