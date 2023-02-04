import { css } from '@emotion/react';
import { Box, styled } from '@mui/material';
import { Text } from '@components/common';

type HomeHeadProps = {
  title: string;
  description?: string;
  src?: string;
};

const HomeHead: React.FC<HomeHeadProps> = ({ title, description, src }) => {
  return (
    <HomeHeadWrapper
      id="back-to-top-anchor"
      src={
        src ||
        'https://images.unsplash.com/photo-1588269232168-d212b558cea2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80'
      }
    >
      <Box className="filter">
        <Text className="title">{title}</Text>
        <Text className="description">{description}</Text>
      </Box>
    </HomeHeadWrapper>
  );
};

export default HomeHead;

const HomeHeadWrapper = styled(Box)<any>(
  ({ src }) => css`
    width: 100%;
    height: 18.75rem;

    background-image: url(${src});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    & .filter {
      height: 100%;
      padding: 2rem calc((100% - 91.5rem) / 2);
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      background: #0000005e;
    }

    & .title {
      padding-left: 2rem;
      font-size: 3rem;
      color: white;
    }

    & .description {
      padding-left: 2rem;
      font-size: 1.4rem;
      color: #e7e7e7;
    }
  `,
);
