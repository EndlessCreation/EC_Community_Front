import React from 'react';
import Blog from '../../components/home/Blog';
import MainLayout from '../../layouts/MinLayout';

type BlogPageProps = {};

const BlogPage = ({}: BlogPageProps) => {
  return (
    <MainLayout>
      <Blog />
    </MainLayout>
  );
};

export default BlogPage;
