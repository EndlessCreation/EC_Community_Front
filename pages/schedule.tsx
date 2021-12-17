import React from 'react';
import Schedule from '../components/home/Schedule';
import MainLayout from '../layouts/MinLayout';

type SchedulePageProps = {};

const SchedulePage = ({}: SchedulePageProps) => {
  return (
    <MainLayout>
      <Schedule />
    </MainLayout>
  );
};

export default SchedulePage;
