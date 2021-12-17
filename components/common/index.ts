/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Box, styled } from '@mui/material';

export const Text = styled('p')(css`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
    'Open Sans', 'Helvetica Neue', sans-serif;
`);

export const ResponsiveLayout = styled(Box)<any>(
  css`
    width: 100%;
    padding: 2rem calc((100% - 91.5rem) / 2);
  `,
);

export { default as PostCard } from './PostCard';
export { default as TagList } from './TagList';
