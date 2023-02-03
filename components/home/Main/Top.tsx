import { css, keyframes } from '@emotion/react';
import { Box, styled } from '@mui/material';
import { Text } from '@components/common';

const Top: React.FC = () => {
  return (
    <Wrapper id="back-to-top-anchor">
      <Box>
        <Text css={{ fontSize: '3.25rem' }}>성장하는 즐거움</Text>
        <Text css={{ fontSize: '4rem' }}>Endless Creation</Text>
        <Text css={{ fontSize: '1.75rem' }}>32기 본격 활동중!</Text>
        {/* <Button
          className="recruit"
          css={css`
            animation: ${wiggle} 2s linear infinite;
          `}
        >
          <a
            href="https://aluminum-taker-8e2.notion.site/Endless-Creation-32-c4befab271c0452bb26523ea3749afa6"
            target="_blank"
            rel="noreferrer"
          >
            모집 내용 자세히 보기
          </a>
        </Button> */}
      </Box>
    </Wrapper>
  );
};

export default Top;

const Wrapper = styled(Box)<any>(
  css`
    width: 100%;
    height: calc(var(--vh, 1vh) * 100);

    display: flex;
    align-items: center;
    justify-content: center;
    background-image: url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    @media screen and (max-width: 768px) {
      text-align: center;
    }

    & > .MuiBox-root {
      user-select: none;
      & > p {
        color: white;
        font-weight: bold;
      }
    }

    & .recruit {
      bottom: -4rem;
      padding: 0.25rem 1.5rem;
      background-color: #eeeeeec0;
      border-radius: 0.25rem;
      border-bottom: 1px solid white;
      font-weight: bold;
      font-size: 2rem;
      color: #000000;

      :hover {
        background-color: #c9c9c9;
        transition: 0.4s ease;
      }
    }
  `,
);

const wiggle = keyframes`
  0%, 7% {
    transform: rotateZ(0);
  }
  15% {
    transform: rotateZ(-7deg);
  }
  20% {
    transform: rotateZ(5deg);
  }
  25% {
    transform: rotateZ(-6deg);
  }
  30% {
    transform: rotateZ(4deg);
  }
  35% {
    transform: rotateZ(-3deg);
  }
  40%, 100% {
    transform: rotateZ(0);
  }
`;
