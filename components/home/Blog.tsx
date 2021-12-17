/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Box, InputAdornment, OutlinedInput, styled } from '@mui/material';
import { ResponsiveLayout } from '../common';
import HomeHead from './HomeHead';
import SearchIcon from '@mui/icons-material/Search';
import { testBlog1 } from '../../types';
import { BlogCard } from '../Card';
import ScrollTop from '../ScrollTop';

type BlogProps = {};

const Blog = ({}: BlogProps) => {
  return (
    <Box>
      <HomeHead
        title="Blog"
        description="기억보단 기록을, EC의 기술 블로그입니다"
        src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
      />

      <ResponsiveLayout>
        <Section>
          <Search
            placeholder="Search..."
            endAdornment={
              <InputAdornment position="end">
                <SearchIcon />
              </InputAdornment>
            }
          />
        </Section>
      </ResponsiveLayout>

      <ResponsiveLayout>
        <BlogList>
          <BlogCard className="blogCard" blog={testBlog1} />
          <BlogCard className="blogCard" blog={testBlog1} />
          <BlogCard className="blogCard" blog={testBlog1} />
        </BlogList>
      </ResponsiveLayout>

      <ScrollTop />
    </Box>
  );
};

export default Blog;

const Section = styled(Box)(css`
  padding: 2rem 4rem;
  display: flex;
  flex-direction: column;
`);

const Search = styled(OutlinedInput)(css``);

const BlogList = styled(Box)(css`
  padding: 2rem 4rem;
  display: flex;
  flex-direction: column;

  & .blogCard + .blogCard {
    margin-top: 2.5rem;
  }
`);
