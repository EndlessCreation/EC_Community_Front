/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Box, Card, styled, useScrollTrigger } from '@mui/material';
import { Link } from './common';

type MainNavProps = {};

const index = [
  { title: '소개', url: '/about' },
  { title: '멤버', url: '/member' },
  { title: '포트폴리오', url: '/portfolio' },
  { title: '블로그', url: '/blog' },
  { title: '활동일정', url: '/schedule' },
  { title: '지원하기', url: '/recruit' },
  { title: '커뮤니티', url: '/community' },
];

const MainNav = ({}: MainNavProps) => {
  const isScrolled = useScrollTrigger({ disableHysteresis: true, threshold: 10 });

  return (
    <Header isScrolled={isScrolled}>
      <Link href="/">Endless Creation</Link>
      <LinkList isScrolled={isScrolled}>
        {index.map((item) => (
          <Link key={item.url} href={item.url}>
            {item.title}
          </Link>
        ))}
      </LinkList>
    </Header>
  );
};

export default MainNav;

const Header = styled(Card)<any>(
  ({ isScrolled }: any) => css`
    width: 100%;
    height: 64px;
    padding: 0 32px;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-between;
    transition: all 0.3s ease;
    background-color: ${isScrolled ? 'white' : 'transparent'};
    & > a {
      color: ${isScrolled ? '#1a1a1a' : 'white'};
    }
  `,
);

const LinkList = styled(Box)<any>(
  ({ isScrolled }: any) => css`
    display: flex;
    & a {
      width: 95px;
      color: ${isScrolled ? '#1a1a1a' : '#ededed'};
      &:hover {
        color: ${isScrolled ? 'black' : '#ffffff'};
        font-weight: bold;
      }
    }
  `,
);
