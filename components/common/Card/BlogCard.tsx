/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Avatar, Box, Card, Grid, styled } from '@mui/material';
import { useRouter } from 'next/dist/client/router';
import { Blog } from '../../../lib/types';
import { TagList, Text } from '..';

const BlogCard = ({ blog, ...props }: { blog: Blog; [k: string]: any }) => {
  const router = useRouter();

  return (
    <CardWrapper
      container
      component={Card}
      elevation={2}
      onClick={() => {
        router.push(`/blog/${blog.id}`);
      }}
      {...props}
    >
      <Grid item xs={12} md={10} css={{ height: '100%' }}>
        <Box className="info">
          <Text className="title">{blog.title}</Text>
          <Text className="content">{blog.content}</Text>
          <TagList tags={blog.tags} />
        </Box>
      </Grid>
      <Grid item xs={0} md={2} sx={{ display: { xs: 'none', md: 'flex' } }}>
        <Box className="author">
          <Avatar className="icon" src={blog.author.image} />
          <Text className="name">{blog.author.name}</Text>
          <Text className="date">{blog.createdAt.toLocaleDateString()}</Text>
        </Box>
      </Grid>
    </CardWrapper>
  );
};

export default BlogCard;

const CardWrapper = styled(Grid)<any>(css`
  width: 100%;
  height: 15.625rem;
  padding: 2rem;
  transition: all 0.5s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.01);
    filter: brightness(0.96);
  }

  & .info {
    height: 100%;
    display: flex;
    flex-direction: column;
    & .title {
      font-size: 1.5rem;
      font-weight: bold;
    }

    & .content {
      flex: 1;
      margin-top: 1rem;
      font-size: 0.9rem;
      color: #444444;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      line-height: 1.5rem;
      max-height: 4.5rem;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      margin-bottom: auto;
      color: #3a3a3a;
    }
  }

  & .author {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    & .icon {
      width: 5rem;
      height: 5rem;
    }

    & .name {
      color: #333333;
      font-size: 1rem;
    }

    & .date {
      color: #6b6b6b;
    }
  }
`);
