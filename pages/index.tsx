import React from 'react';
import IntroMain from '../components/intro/Main';
import MainLayout from '../components/layouts/HomeLayout';
import IntroInterAction from '../components/intro';

const MainPage = () => {
  return (
    <MainLayout>
      <>
        <IntroMain />
      </>
    </MainLayout>
  );
};

export default MainPage;
