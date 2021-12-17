/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Avatar, Box, Card, Grid, styled } from '@mui/material';
import { Blog } from '../../types';
import { TagList, Text } from '../common';

const BlogCard = ({ blog, ...props }: { blog: Blog; [k: string]: any }) => {
  return (
    <CardWrapper container component={Card} elevation={2} {...props}>
      <Grid item xs={12} md={10}>
        <Box className="info">
          <Text className="title">{blog.title}</Text>
          <Text className="content">{blog.content}</Text>
          <TagList tags={blog.tags} />
        </Box>
      </Grid>
      <Grid item xs={0} md={2} sx={{ display: { xs: 'none', md: 'block' } }}>
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
    transform: scale(1.02);
  }

  & .info {
    height: calc(100% - 4rem);
    display: flex;
    flex-direction: column;
    & .title {
      font-size: 1.5rem;
      font-weight: bold;
    }

    & .content {
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
    height: calc(100% - 4rem);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    & .icon {
      width: auto;
      height: 50%;
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
