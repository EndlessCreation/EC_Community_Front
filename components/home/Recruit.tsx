/** @jsxImportSource @emotion/react */
import { useCallback, useState } from 'react';
import { css } from '@emotion/react';
import { Box, styled } from '@mui/material';
import { ResponsiveLayout, Section, Text } from '../common';
import HomeHead from './HomeHead';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, { AccordionSummaryProps } from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import PersonSearchRoundedIcon from '@mui/icons-material/PersonSearchRounded';
import GroupsRoundedIcon from '@mui/icons-material/GroupsRounded';
import HowToRegRoundedIcon from '@mui/icons-material/HowToRegRounded';

import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
import { StepIconProps } from '@mui/material/StepIcon';
import Head from 'next/head';

const wantList = [
  '소속에 상관없이, 개발자 / 디자이너로 활동이 가능한 분',
  '협업하며 창작하는 즐거움을 경험하고 싶으신 분',
  '다양한 사람들과 폭넓고 깊이 있는 네트워킹을 원하시는 분',
];

const QnAList = [
  {
    id: 100,
    summary: '[공통] 활동 기간은 어떻게 되나요?',
    detail:
      '3월부터 시작하여 12월까지 활동하게 되어요. 크게 1학기와 2학기 활동으로 나누어져 있고, 세부 활동 계획은 추후 모집 공고를 통해 확인하실 수 있어요!',
  },
  {
    id: 150,
    summary: '[공통] 개발부와 학술부 모집의 차이가 무엇인가요?',
    detail:
      '개발부는 주로 팀 프로젝트 위주로 진행하고, 학술부는 세미나와 스터디 위주로 진행합니다.',
  },
  {
    id: 200,
    summary: '[공통] 시험 기간에도 활동하나요?',
    detail: '시험 기간 2주간은 동아리 활동을 하지 않아요. ',
  },
  {
    id: 300,
    summary: '[공통] 개발하는 분야가 정해져 있나요?',
    detail:
      '개발 분야가 정해져 있지 않아요! 웹, 앱, 게임, 보안 등 다양한 분야의 개발을 하고 있어요!',
  },
  {
    id: 400,
    summary: '[공통] 대회에도 참여하나요?',
    detail:
      '2학기 활동인 EC:Advance 활동을 대회를 목표로 프로젝트를 진행 할 수 있어요. 1학기에 대회에 참가 하고싶으신 분은 마음이 맞는 팀원과 함께 대회에 참가하셔도 좋아요.',
  },
  {
    id: 500,
    summary: '[공통] 2학기에도 동아리원 모집이 있나요?',
    detail: 'EC:Advance를 진행하기 위한 팀원이 부족한 경우 추가 모집을 할 계획이에요.',
  },
];

const steps1 = [
  { id: 100, label: '서류 접수', date: '2.12 ~ 2.25' },
  { id: 200, label: '면접 일정', date: '2.20 or 2.27 or 3.6' },
  { id: 300, label: '최종합격', date: '2.21 or 2.28 or 3.7' },
];

const steps2 = [
  { id: 100, label: '서류 접수', date: '2.28 ~ 3.4' },
  { id: 200, label: '면접 일정', date: '3.6' },
  { id: 300, label: '최종합격', date: '3.7' },
];

type RecruitProps = {};

const Recruit: React.FunctionComponent<RecruitProps> = () => {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange = useCallback((panel: string) => {
    return (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };
  }, []);
  return (
    <Box>
      <Head>
        <title>EC: 지원하기</title>
      </Head>
      <HomeHead
        title="Recruit"
        description="Endless Creation에 지원하고 싶으신가요?"
        src="https://images.unsplash.com/photo-1521791055366-0d553872125f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80"
      />

      <ResponsiveLayout>
        <Section>
          <Text className="title">2022년도 모집 일정</Text>
          <Box className="recruit" sx={{ display: 'flex', flexDirection: 'column', gap: '50px' }}>
            <Process>
              <Box className="head">
                <Text className="title">개발부</Text>
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSd3B49FzoEf-oUrxeC8vOMOkR1ubfbfv-0SaiGdbxnCYvQeqQ/viewform?usp=sf_link"
                  target="_blank"
                  rel="noreferrer"
                >
                  지원하러 가기
                </a>
              </Box>
              <Stepper
                alternativeLabel
                activeStep={steps1.length}
                connector={<ColorlibConnector />}
              >
                {steps1.map((item, index) => (
                  <Step key={index}>
                    <StepLabel StepIconComponent={ColorlibStepIcon}>
                      <Text css={{ fontWeight: 'bold' }}>{item.label}</Text>
                      <Text>{item.date}</Text>
                    </StepLabel>
                  </Step>
                ))}
              </Stepper>
            </Process>
            <Process>
              <Box className="head">
                <Text className="title">학술부</Text>
              </Box>
              <Stepper
                alternativeLabel
                activeStep={steps1.length}
                connector={<ColorlibConnector />}
              >
                {steps2.map((item, index) => (
                  <Step key={index}>
                    <StepLabel StepIconComponent={ColorlibStepIcon}>
                      <Text css={{ fontWeight: 'bold' }}>{item.label}</Text>
                      <Text>{item.date}</Text>
                    </StepLabel>
                  </Step>
                ))}
              </Stepper>
            </Process>
          </Box>
        </Section>

        <Section>
          <Text className="title">이런 분을 찾아요</Text>
          <WantList>
            {wantList.map((item, index) => (
              <Text key={index}>
                <PlayArrowIcon />
                &nbsp;{item}
              </Text>
            ))}
          </WantList>
        </Section>

        <Section>
          <Text className="title">자주 묻는 질문</Text>
          <div>
            {QnAList.map((item) => {
              const { id, summary, detail } = item;
              return (
                <Accordion
                  key={id}
                  expanded={expanded === `panel${id}`}
                  onChange={handleChange(`panel${id}`)}
                >
                  <AccordionSummary aria-controls={`panel${id}d-content`} id={`panel${id}d-header`}>
                    <Typography>Q : {summary}</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>A : {detail}</Typography>
                  </AccordionDetails>
                </Accordion>
              );
            })}
          </div>
        </Section>
      </ResponsiveLayout>
    </Box>
  );
};

export default Recruit;

const Process = styled(Box)(css`
  display: flex;
  align-items: center;
  @media screen and (max-width: 768px) {
    margin-top: 2rem;
    flex-direction: column;
  }

  & .head {
    width: 8rem;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media screen and (max-width: 768px) {
      margin-bottom: 1.5rem;
    }

    & .title {
      font-weight: bold;
      font-size: 1.25rem;
    }
  }

  & .MuiStepper-root {
    flex: 1;

    @media screen and (max-width: 768px) {
      width: 100%;
    }
  }
`);

const WantList = styled(Box)(css`
  display: flex;
  flex-direction: column;
  & p {
    display: flex;
    align-items: center;
    font-size: 1.4rem;
    margin-bottom: 1rem;
  }
`);

const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 17,
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage:
        'linear-gradient(95deg, rgba(119,184,50,1) 5%, rgba(30,153,41,1) 52%, rgba(59,186,113,1) 98%)',
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage:
        'linear-gradient(95deg, rgba(119,184,50,1) 5%, rgba(30,153,41,1) 52%, rgba(59,186,113,1) 98%)',
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 3,
    border: 0,
    backgroundColor: theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
    borderRadius: 1,
  },
}));

const ColorlibStepIconRoot = styled('div')<{
  ownerState: { completed?: boolean; active?: boolean };
}>(({ theme, ownerState }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#ccc',
  zIndex: 1,
  color: '#fff',
  width: 40,
  height: 40,
  display: 'flex',
  borderRadius: '50%',
  justifyContent: 'center',
  alignItems: 'center',
  ...(ownerState.active && {
    backgroundImage:
      'linear-gradient(95deg, rgba(119,184,50,1) 5%, rgba(30,153,41,1) 52%, rgba(59,186,113,1) 98%)',
    boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
  }),
  ...(ownerState.completed && {
    backgroundImage:
      'linear-gradient(95deg, rgba(119,184,50,1) 5%, rgba(30,153,41,1) 52%, rgba(59,186,113,1) 98%)',
  }),
}));

function ColorlibStepIcon(props: StepIconProps) {
  const { active, completed, className } = props;

  const icons: { [index: string]: React.ReactElement } = {
    1: <PersonSearchRoundedIcon />,
    2: <GroupsRoundedIcon />,
    3: <HowToRegRoundedIcon />,
  };

  return (
    <ColorlibStepIconRoot ownerState={{ completed, active }} className={className}>
      {icons[String(props.icon)]}
    </ColorlibStepIconRoot>
  );
}

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: '4px',
  '&:before': {
    display: 'none',
  },
  '& + &': {
    marginTop: '15px',
  },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '1rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: '#f3f3f3',
  borderRadius: 'inherit',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    '& > p': {
      fontWeight: 'bold',
    },
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  boxSizing: 'border-box',
  padding: `${theme.spacing(2)} ${parseInt(theme.spacing(3)) + 14.39}px`,
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));
