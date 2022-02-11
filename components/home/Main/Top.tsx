/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Box, styled } from '@mui/material';
import { Text } from '../../common';

type TopProps = {};

const Top = ({}: TopProps) => {
  return (
    <Wrapper id="back-to-top-anchor">
      <Box>
        <Text css={{ fontSize: '3.25rem' }}>성장하는 즐거움</Text>
        <Text css={{ fontSize: '4rem' }}>Endless Creation</Text>
        <Text css={{ fontSize: '1.75rem' }}>신입 기수 모집중(~3.6)</Text>
        <Text css={{ fontSize: '1.75rem' }}>32기 여러분들을 기다리고 있어요!</Text>
      </Box>
    </Wrapper>
  );
};

export default Top;

const Wrapper = styled(Box)<any>(
  css`
    width: 100%;
    height: 100vh;
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
  `,
);
