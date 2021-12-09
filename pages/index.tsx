import { NextPage } from 'next';
import React from 'react';
import Main from '../components/Main';
import MainLayout from '../layouts/MinLayout';

type MainPageProps = NextPage & {};

const MainPage = ({}: MainPageProps) => {
  return (
    <MainLayout>
      <Main />
    </MainLayout>
  );
};

export default MainPage;
