import { useCallback, useState } from 'react';
import { css } from '@emotion/react';
import { Box, styled } from '@mui/material';
import { ResponsiveLayout, Section, Text } from '@components/common';
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
import { developSteps, QnAList, studySteps, wantList } from '@data/local/metadata';

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
          <Text className="title">{new Date().getFullYear()}년도 모집 일정</Text>
          <Box className="recruit" sx={{ display: 'flex', flexDirection: 'column', gap: '50px' }}>
            {/* <Process>
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
            </Process> */}
            <Process>
              <Box className="head">
                <Text className="title">학술부</Text>
              </Box>
              <Stepper
                alternativeLabel
                activeStep={developSteps.length}
                connector={<ColorlibConnector />}
              >
                {studySteps.map((item, index) => (
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
          {QnAList.map((item, index) => (
            <Accordion
              key={index}
              expanded={expanded === `panel${index}`}
              onChange={handleChange(`panel${index}`)}
            >
              <AccordionSummary>
                <Typography>Q : {item.summary}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>A : {item.detail}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
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
