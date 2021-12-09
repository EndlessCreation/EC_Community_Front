import { Box } from '@mui/material';
import React from 'react';
import Footer from '../components/Footer';
import MainNav from '../components/MainNav';

type MainLayoutProps = {
  children: React.ReactChild;
};

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <>
      <MainNav />
      {children}
      <Footer />
    </>
  );
};

export default MainLayout;
