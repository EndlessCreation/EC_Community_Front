import { Box } from '@mui/material';
import React from 'react';
import Main from '../components/Main';
import MainLayout from '../layouts/MinLayout';

type ProjectPageProps = {};

const ProjectPage = ({}: ProjectPageProps) => {
  return (
    <MainLayout>
      <Main />
    </MainLayout>
  );
};

export default ProjectPage;
