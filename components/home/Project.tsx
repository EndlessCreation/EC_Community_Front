/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Box, Grid, styled } from '@mui/material';
import { ResponsiveLayout, Section, Text } from '../common';
import HomeHead from './HomeHead';
import Slider from 'react-slick';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { testActivity1, testActivity2 } from '../../types';
import { ActivityCard, ActivityDetailCard } from '../Card';

const Project = () => {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <ArrowForwardIosIcon />,
    prevArrow: <ArrowBackIosIcon />,
  };

  return (
    <Box>
      <HomeHead
        title="Project"
        description="Endless Creation의 멋진 프로젝트를 만나보세요"
        src="https://images.unsplash.com/photo-1542626991-cbc4e32524cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80"
      />
      <ResponsiveLayout>
        <Section>
          <Text className="title">EC Pick</Text>
          <StyledSlider {...settings}>
            <div>
              <ActivityDetailCard activity={testActivity1} />
            </div>
            <div>
              <ActivityDetailCard activity={testActivity2} />
            </div>
          </StyledSlider>
        </Section>

        <Section>
          <Text className="title">Project</Text>
          <Grid container spacing={4}>
            <Grid item xs={6} md={4}>
              <ActivityCard activity={testActivity1} />
            </Grid>
            <Grid item xs={6} md={4}>
              <ActivityCard activity={testActivity2} />
            </Grid>
            <Grid item xs={6} md={4}>
              <ActivityCard activity={testActivity2} />
            </Grid>
            <Grid item xs={6} md={4}>
              <ActivityCard activity={testActivity2} />
            </Grid>
            <Grid item xs={6} md={4}>
              <ActivityCard activity={testActivity2} />
            </Grid>
          </Grid>
        </Section>
      </ResponsiveLayout>
    </Box>
  );
};

export default Project;

const StyledSlider = styled(Slider)(css`
  margin: 0 4rem;
  & .slick-arrow {
    color: black;

    &:hover {
      color: black;
    }
  }
`);
