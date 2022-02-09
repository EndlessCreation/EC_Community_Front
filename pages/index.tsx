import React from 'react';
import Main from '../components/home/Main';
import MainLayout from '../components/layouts/HomeLayout';
import IntroInterAction from '../components/intro';

const MainPage = () => {
  return (
    <MainLayout>
      <>
        <IntroInterAction>
          <>{/* <Main /> */}</>
        </IntroInterAction>
      </>
    </MainLayout>
  );
};

export default MainPage;
