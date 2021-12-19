import { useRouter } from 'next/dist/client/router';
import React from 'react';
import BlogContainer from '../../containers/home/BlogContainer';

const BlogPage = () => {
  const { query }: any = useRouter();
  return <BlogContainer id={parseInt(query.id)} />;
};

export default BlogPage;
