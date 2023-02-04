import { Box, Grid } from '@mui/material';
import { ResponsiveLayout, Section, Text } from '@components/common';
import HomeHead from './HomeHead';
import Head from 'next/head';
import { ActivityCard } from './common/Card';
import projects from '@data/local/projects.json';

const Project: React.FC = () => {
  return (
    <Box>
      <Head>
        <title>EC: 프로젝트</title>
      </Head>
      <HomeHead
        title="Project"
        description="Endless Creation의 멋진 프로젝트를 만나보세요"
        src="https://images.unsplash.com/photo-1542626991-cbc4e32524cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80"
      />
      <ResponsiveLayout>
        <Section>
          <Text className="title">Project</Text>
          <Grid container spacing={4}>
            {projects.map((project: any, index) => (
              <Grid key={index} item xs={12} sm={6} md={4}>
                <ActivityCard activity={project} />
              </Grid>
            ))}
          </Grid>
        </Section>
      </ResponsiveLayout>
    </Box>
  );
};

export default Project;
