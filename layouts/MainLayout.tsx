import { Box } from '@mui/material';
import React from 'react';
import Footer from './Footer';
import MainNav from './MainNav';
import ScrollTop from './ScrollTop';

type MainLayoutProps = {
  children: React.ReactChild;
};

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <>
      <MainNav />
      {children}
      <ScrollTop />
      <Footer />
    </>
  );
};

export default MainLayout;
