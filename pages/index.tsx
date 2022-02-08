import React from 'react';
import Main from '../components/home/Main';
import MainLayout from '../components/layouts/HomeLayout';
import Intro from './intro';

const MainPage = () => {
  return (
    <MainLayout>
      <>
        {/* <Intro /> */}
        <Main />
      </>
    </MainLayout>
  );
};

export default MainPage;
