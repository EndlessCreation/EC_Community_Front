import React from 'react';
import Blog from '../../components/home/Blog';
import Main from '../../components/Main';
import MainLayout from '../../layouts/MinLayout';

type BlogPageProps = {};

const BlogPage = ({}: BlogPageProps) => {
  return (
    <MainLayout>
      <Main />
    </MainLayout>
  );
};

export default BlogPage;
