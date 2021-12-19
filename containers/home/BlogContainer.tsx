import React from 'react';
import Blog from '../../components/home/Blog';
import { testBlog1 } from '../../types';

const BlogContainer = ({ id }: { id: number }) => {
  return <Blog blog={testBlog1} />;
};

export default BlogContainer;
