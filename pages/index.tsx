import { NextPage } from 'next';
import React from 'react';
import Footer from '../components/Footer';
import MainNav from '../components/MainNav';
import Main from '../components/Main';

type MainPageProps = NextPage & {};

const MainPage = ({}: MainPageProps) => {
  return (
    <>
      <MainNav />
      <Main />
      <Footer />
    </>
  );
};

export default MainPage;
