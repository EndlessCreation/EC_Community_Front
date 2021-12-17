import React from 'react';
import About from '../components/home/About';
import MainLayout from '../layouts/MinLayout';

type AboutPageProps = {};

const AboutPage = ({}: AboutPageProps) => {
  return (
    <MainLayout>
      <About />
    </MainLayout>
  );
};

export default AboutPage;
