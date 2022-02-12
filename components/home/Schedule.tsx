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
        '스터디는 동아리원들이 자율적으로 공부하고 싶은 관심 분야에 대해 스터디 그룹을 구성하여 공부합니다. 신입생 분들의 경우 관심분야 탐색을 위해 개발의 각 분야별(웹 프론트, 모바일, 서버,  게임 등)로 세미나를 진행할 예정입니다. 스터디는 학기마다 공식적으로 모집하며 스터디 진행상황 • 결과를 공유하는 시간을 가집니다.',
    },
    {
      label: '세미나',
      description:
        ' 세미나는 스터디나 개발, 팀프로젝트 등의 과정에서 동아리원들이 스스로 겪었던 경험을 공유하게 됩니다. 학기 초에 시작되는 분야별 세미나의 경우 신입생분들의 원하는 분야 탐색을 위해 동아리 선배님들 또는 각 분야의 테크 리더가 진행합니다. 졸업생 세미나를 통해서는 졸업한 선배들의 취업 준비 이야기를 들을 수 있습니다',
    },
  ],
  develop: [
    {
      label: '토이 프로젝트',
      description:
        '1학기에 동아리원들은 토이 프로젝트 또는 고인물 프로젝트를 진행하게 됩니다. 토이 프로젝트란  아직 프로젝트 경험이 없거나 프로젝트를 완주하기 힘든 동아리원들을 대상으로 간단한 프로젝트를 진행하며 본인의 스킬을 높이는데 주력하는 것을 목표로 합니다.투두 리스트를 만들거나 기존에 이미 존재하는 서비스를 똑같이 따라 만들어 보는 것을 예로 들 수 있습니다 토이 프로젝트를 통해 각 파트 간 협업 이해도를 높일 수 있고, 팀 프로젝트의 프로세스를 경험해볼 수 있습니다.',
    },
    {
      label: '고인물 프로젝트',
      description:
        '고인물 프로젝트란 프로젝트 경험이 있거나 완주가 가능한 동아리원을 대상으로 프로젝트의 기획부터 개발까지 진행하고, 구성원의 포트폴리오로 쓸 수 있을 만큼의 결과물이 나올 수 있게 완주하는 것을 목표로 합니다. 팀 구성의 경우 커뮤니케이션을 통해 마음이 맞는 사람들끼리 팀을 이뤄 프로젝트를 진행하게 되며, 파트 간의 협업과 원활한 커뮤니케이션을 경험해 볼 수 있습니다.',
    },
    {
      label: 'EC Advance',
      description:
        '2학기에 동아리원들은 1학기 활동을 경험을 바탕으로 본격적인 프로젝트를 진행하는 EC:Advance 활동을 진행하게 됩니다. 대회를 나가거나, 실제로 서비스를 배포해보는 목적을 가지고 프로젝트를 진행하게 됩니다. 토이 프로젝트와 고인물 프로젝트로 나누어 진행 되었던 1학기와 다르게 기존 회원들과 신입 회원들이 같이 팀을 이루고 활동하게 됩니다',
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
                            {index < scheduleStpes.study.length - 1 && (
                              <StyledButton
                                next={true}
                                onClick={() => {
                                  setStudyStep(studyStep + 1);
                                }}
                                sx={{ mt: 1, mr: 1 }}
                              >
                                다음
                              </StyledButton>
                            )}
                            {index != 0 && (
                              <StyledButton
                                disabled={index === 0}
                                onClick={() => {
                                  setStudyStep(studyStep - 1);
                                }}
                                sx={{ mt: 1, mr: 1 }}
                              >
                                이전
                              </StyledButton>
                            )}
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
                            {index < scheduleStpes.develop.length - 1 && (
                              <StyledButton
                                css={{ background: '#64cca2' }}
                                next={true}
                                onClick={() => {
                                  setDevelopStep(developStep + 1);
                                }}
                                sx={{ mt: 1, mr: 1 }}
                              >
                                다음
                              </StyledButton>
                            )}
                            {index != 0 && (
                              <StyledButton
                                disabled={index === 0}
                                onClick={() => {
                                  setDevelopStep(developStep - 1);
                                }}
                                sx={{ mt: 1, mr: 1 }}
                              >
                                이전
                              </StyledButton>
                            )}
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

const StyledButton = styled(Button)<any>(
  ({ next }) => css`
    background-color: ${next ? '#64cca2' : 'white'};
    color: ${next ? 'white' : '#3d8065'};

    &:hover {
      background-color: ${next ? '#3d8065' : '64cca2'};
    }
  `,
);
