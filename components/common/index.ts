/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Box, styled } from '@mui/material';

export const Text = styled('p')(css``);

type ResponsiveLayoutProps = {
  bgColor?: string;
};
export const ResponsiveLayout = styled(Box)<ResponsiveLayoutProps>(
  ({ bgColor }) => css`
    width: 100%;
    padding: 2rem calc((100% - 91.5rem) / 2);
    background-color: ${bgColor};
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
      & span {
        color: #64cca2;
      }
    }
  `,
);

export const SlideBox = styled(Box)(css`
  position: relative;
  z-index: 1;
`);

export { default as PostCard } from '../Card/PostCard';
export { default as TagList } from './TagList';
export { default as CustomSlider } from './CustomSlider';
