import { Box } from '@mui/material';
import React from 'react';
import Main from '../components/Main';
import MainLayout from '../layouts/MinLayout';

type AboutPageProps = {};

const AboutPage = ({}: AboutPageProps) => {
  return (
    <MainLayout>
      <Main />
    </MainLayout>
  );
};

export default AboutPage;
