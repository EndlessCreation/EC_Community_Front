/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Box, styled } from '@mui/material';
import { Text } from '../../common';

const contributor = [
  {
    role: '디자인',
    author: ['황인서'],
  },
  {
    role: '프론트엔드',
    author: ['황인서'],
  },
  {
    role: '백엔드',
    author: ['김건훈'],
  },
];

const Footer = () => (
  <Wrapper>
    <Box className="main">
      <Text className="title">Endless Creation</Text>
      {contributor.map((item, i) => (
        <Box className="contributor" key={i}>
          <Text className="role">{item.role}</Text>
          {item.author.map((name, i2) => (
            <Text className="name" key={i2}>
              {name}
            </Text>
          ))}
        </Box>
      ))}
    </Box>
    <Box className="description">
      <Text className="copyright">Copyright ⓒ Endless Creation 2021</Text>
    </Box>
  </Wrapper>
);

export default Footer;

const Wrapper = styled(Box)<any>(
  css`
    width: 100%;
    height: 16rem;
    background: #1d1d1d;
    display: flex;
    justify-content: space-between;
    padding: 2rem calc((100% - 91.5rem) / 2);
    & .main {
      padding-left: 2rem;
      display: flex;
      flex-direction: column;
    }
    & .title {
      color: white;
      font-size: 1.5rem;
      font-weight: bold;
      margin-bottom: auto;
    }
    & .contributor {
      color: #d2d2d2;
      display: flex;
    }
    & .role {
      width: 6.25rem;
    }
    & .name {
    }

    & .description {
      padding-right: 2rem;
      color: #d2d2d2;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
    }

    & .copyright {
      text-align: right;
    }
  `,
);
