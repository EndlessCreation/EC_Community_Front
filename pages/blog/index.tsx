import React from 'react';
import BlogList from '../../components/home/BlogList';
import MainLayout from '../../components/layouts/HomeLayout';

const BlogListPage = () => {
  return (
    <MainLayout>
      <BlogList />
    </MainLayout>
  );
};

export default BlogListPage;
