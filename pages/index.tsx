import { NextPage } from 'next';
import React from 'react';
import Main from '../components/home/Main';
import MainLayout from '../layouts/MainLayout';

const MainPage = () => {
  return (
    <MainLayout>
      <Main />
    </MainLayout>
  );
};

export default MainPage;
