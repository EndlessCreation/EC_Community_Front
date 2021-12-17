import React from 'react';
import Blog from '../../components/home/Blog';
import Main from '../../components/home/Main';
import MainLayout from '../../layouts/MainLayout';

type BlogPageProps = {};

const BlogPage = ({}: BlogPageProps) => {
  return (
    <MainLayout>
      <Main />
    </MainLayout>
  );
};

export default BlogPage;
