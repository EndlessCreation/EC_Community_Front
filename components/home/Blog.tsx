/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Box, Button, Card, IconButton, styled } from '@mui/material';
import { forwardRef, useCallback, useRef } from 'react';
import editorConfig from '../../lib/config/editorConfig';
import { Blog } from '../../types';
import dynamic from 'next/dynamic';
import { Viewer as ViewerType, ViewerProps } from '@toast-ui/react-editor';
import { TuiViewerWithForwardedProps } from '../common/Viewer';
import { Text } from '../common';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useRouter } from 'next/dist/client/router';

type BlogProps = {
  blog: Blog;
};

const Viewer = dynamic<TuiViewerWithForwardedProps>(() => import('../common/Viewer'), {
  ssr: false,
});

const Blog = ({ blog }: BlogProps) => {
  const router = useRouter();

  return (
    <Wrapper>
      <InnerWrapper elevation={3}>
        <Head>
          <IconButton>
            <ArrowBackIcon
              onClick={() => {
                router.push('/blog');
              }}
            />
          </IconButton>
          <Text className="title">{blog.title}</Text>
        </Head>

        <Viewer initialValue={blog.content} />
      </InnerWrapper>
    </Wrapper>
  );
};

export default Blog;

const Wrapper = styled(Box)(css`
  display: flex;
  justify-content: center;
  padding: 3rem;
  background: #f0f0f0;
`);

const Head = styled(Box)(css`
  display: flex;
  margin-bottom: 1.5rem;
  padding-bottom: 0.8rem;
  border-bottom: 1px solid #aaa;

  & .title {
    margin-left: 1rem;
    font-size: 1.8rem;
    font-weight: bold;
  }
`);

const InnerWrapper = styled(Card)(css`
  padding: 2rem;
  max-width: 50rem;
`);
