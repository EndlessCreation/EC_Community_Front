/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Box, Fab, styled } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import ScrollTop from '../ScrollTop';
import { ResponsiveLayout, Text } from '../common';

type AboutProps = {};

const About = ({}: AboutProps) => {
  return (
    <Box>
      <Top id="back-to-top-anchor">
        <Box>
          <Text css={{ fontSize: '3.25rem' }}>About</Text>
          <Text css={{ fontSize: '4rem' }}>Endless Creation</Text>
        </Box>
      </Top>

      <ResponsiveLayout></ResponsiveLayout>

      <ScrollTop>
        <Fab size="small">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </Box>
  );
};

export default About;

const Top = styled(Box)<any>(
  css`
    width: 100%;
    height: 31.25rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    & > .MuiBox-root {
      user-select: none;
      & > p {
        color: white;
      }
    }
    @media screen and (max-width: 768px) {
      height: 30rem;
      & iframe {
        display: none;
      }
    }
  `,
);
