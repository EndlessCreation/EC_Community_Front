import { Box } from '@mui/material';
import React from 'react';
import Main from '../components/Main';
import MainLayout from '../layouts/MinLayout';

type MemberPageProps = {};

const MemberPage = ({}: MemberPageProps) => {
  return (
    <MainLayout>
      <Main />
    </MainLayout>
  );
};

export default MemberPage;
