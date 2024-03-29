import { css } from '@emotion/react';
import { Box, Card, IconButton, styled } from '@mui/material';
import dynamic from 'next/dynamic';
import { TuiViewerWithForwardedProps } from '@components/common/Viewer';
import { Text } from '@components/common';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useRouter } from 'next/dist/client/router';
import { Post } from 'contentlayer/generated';
import Head from 'next/head';

type BlogProps = {
  post: Post;
};

const Viewer = dynamic<TuiViewerWithForwardedProps>(() => import('./common/Viewer'), {
  ssr: false,
});

const Blog: React.FC<BlogProps> = ({ post }) => {
  const router = useRouter();

  return (
    <Wrapper>
      <Head>
        <title>EC: {post.title}</title>
      </Head>
      <InnerWrapper elevation={3}>
        <Header>
          <IconButton
            onClick={() => {
              router.push('/blog');
            }}
          >
            <ArrowBackIcon />
          </IconButton>
          <Text className="title">{post.title}</Text>
        </Header>
        <Viewer initialValue={post.body.raw} />
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

const Header = styled(Box)(css`
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
