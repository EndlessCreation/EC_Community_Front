import React from 'react';
import Blog from '../../components/home/Blog';
import { testBlog1, testBlog2 } from '../../types';

const BlogContainer = ({ id }: { id: number }) => {
  return <Blog blog={id === 1 ? testBlog1 : testBlog2} />;
};

export default BlogContainer;
