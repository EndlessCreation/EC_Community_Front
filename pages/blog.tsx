import { Box } from '@mui/material';
import React from 'react';
import Main from '../components/Main';
import MainLayout from '../layouts/MinLayout';

type BlogPageProps = {};

const BlogPage = ({}: BlogPageProps) => {
  return (
    <MainLayout>
      <Main />
    </MainLayout>
  );
};

export default BlogPage;
