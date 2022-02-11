/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Box, Button, Grid, Step, StepContent, StepLabel, Stepper, styled } from '@mui/material';
import Head from 'next/head';
import { useState } from 'react';
import { ResponsiveLayout, Section, Text } from '../common';
import HomeHead from './HomeHead';

const scheduleStpes = {
  study: [
    {
      label: '스터디',
      description:
        '스터디는 자율적으로 ~~ campaign that you create, you can control how much youre willing to spend on clicks and conversions, which networks and geographical locations you want your ads to show on, and more',
    },
    {
      label: '세미나',
      description:
        '세미나는 자율적으로 ~~ campaign that you create, you can control how much youre willing to spend on clicks and conversions, which networks and geographical locations you want your ads to show on, and more',
    },
  ],
  develop: [
    {
      label: '토이 프로젝트',
      description:
        '토이 프로젝트는 자율적으로 ~~ campaign that you create, you can control how much youre willing to spend on clicks and conversions, which networks and geographical locations you want your ads to show on, and more',
    },
    {
      label: '고인물 프로젝트',
      description:
        '고인물 프로젝트는 자율적으로 ~~ campaign that you create, you can control how much youre willing to spend on clicks and conversions, which networks and geographical locations you want your ads to show on, and more',
    },
    {
      label: 'EC Advance',
      description:
        'EC Advance는 자율적으로 ~~ campaign that you create, you can control how much youre willing to spend on clicks and conversions, which networks and geographical locations you want your ads to show on, and more',
    },
  ],
};

type ScheduleProps = {};

const Schedule = ({}: ScheduleProps) => {
  const [studyStep, setStudyStep] = useState(0);
  const [developStep, setDevelopStep] = useState(0);

  return (
    <Box>
      <Head>
        <title>EC: 활동일정</title>
      </Head>
      <HomeHead
        title="Schedule"
        description="Endless Creation의 활동 계획을 소개합니다"
        src="https://images.unsplash.com/photo-1506784983877-45594efa4cbe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1468&q=80"
      />

      <ResponsiveLayout>
        <Section>
          <Grid container spacing={8}>
            <Grid xs={12} md={6} item>
              <ContentBox>
                <Text className="title">학술부</Text>
                <StyledStepper activeStep={studyStep} orientation="vertical">
                  {scheduleStpes.study.map((step, index) => (
                    <Step key={step.label}>
                      <StepLabel StepIconComponent={StepIcon}>{step.label}</StepLabel>
                      <StepContent>
                        <Text>{step.description}</Text>
                        <Box sx={{ mb: 2 }}>
                          <div>
                            <Button
                              variant="contained"
                              onClick={() => {
                                setStudyStep(studyStep + 1);
                              }}
                              sx={{ mt: 1, mr: 1 }}
                            >
                              다음
                            </Button>
                            <Button
                              disabled={index === 0}
                              onClick={() => {
                                setStudyStep(studyStep - 1);
                              }}
                              sx={{ mt: 1, mr: 1 }}
                            >
                              이전
                            </Button>
                          </div>
                        </Box>
                      </StepContent>
                    </Step>
                  ))}
                </StyledStepper>
              </ContentBox>
            </Grid>
            <Grid xs={12} md={6} item>
              <ContentBox>
                <img src="/img/학술부활동사진.png" />
              </ContentBox>
            </Grid>
          </Grid>
        </Section>

        <Section>
          <Grid container spacing={8}>
            <Grid xs={12} md={6} item>
              <ContentBox>
                <img src="/img/개발부활동사진2.png" />
              </ContentBox>
            </Grid>
            <Grid xs={12} md={6} item>
              <ContentBox>
                <Text className="title">개발부</Text>
                <StyledStepper activeStep={developStep} orientation="vertical">
                  {scheduleStpes.develop.map((step, index) => (
                    <Step key={step.label}>
                      <StepLabel StepIconComponent={StepIcon}>{step.label}</StepLabel>
                      <StepContent>
                        <Text>{step.description}</Text>
                        <Box sx={{ mb: 2 }}>
                          <div>
                            <Button
                              variant="contained"
                              onClick={() => {
                                setDevelopStep(developStep + 1);
                              }}
                              sx={{ mt: 1, mr: 1 }}
                            >
                              다음
                            </Button>
                            <Button
                              disabled={index === 0}
                              onClick={() => {
                                setDevelopStep(developStep - 1);
                              }}
                              sx={{ mt: 1, mr: 1 }}
                            >
                              이전
                            </Button>
                          </div>
                        </Box>
                      </StepContent>
                    </Step>
                  ))}
                </StyledStepper>
              </ContentBox>
            </Grid>
          </Grid>
        </Section>
      </ResponsiveLayout>
    </Box>
  );
};

export default Schedule;

const ContentBox = styled(Box)(css`
  & img {
    width: 100%;
  }

  & .title {
    font-size: 2rem;
    font-weight: bold;
  }
`);

const StyledStepper = styled(Stepper)(css`
  margin-top: 2rem;

  & .MuiStepLabel-label {
    font-size: 1.5rem;
  }
`);

const StepIcon = styled('div')<any>(
  ({ active }) => css`
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    background-color: ${active ? '#64cca2' : '#cdcdcd'};
  `,
);
