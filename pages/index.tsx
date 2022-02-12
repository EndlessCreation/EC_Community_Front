import React from 'react';
import Main from '../components/home/Main';
import MainNav from '../components/layouts/HomeLayout/MainNav';
import ScrollTop from '../components/layouts/HomeLayout/ScrollTop';
import Head from 'next/head';

const MainPage = () => {
  return (
    <>
      <Head>
        <title>Endless Creation</title>
      </Head>
      <MainNav />
      <Main />
    </>
  );
};

export default MainPage;
