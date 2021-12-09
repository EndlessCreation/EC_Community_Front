/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import {
  Box,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  styled,
  SwipeableDrawer,
  useScrollTrigger,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import InboxIcon from '@mui/icons-material/Inbox';
import Link from 'next/link';

type MainNavProps = {};

const index = [
  { title: '소개', url: '/about' },
  { title: '멤버', url: '/member' },
  { title: '프로젝트', url: '/project' },
  { title: '블로그', url: '/blog' },
  { title: '활동일정', url: '/schedule' },
  { title: '지원하기', url: '/recruit' },
  { title: '커뮤니티', url: '/community' },
];

const MainNav = ({}: MainNavProps) => {
  const isScrolled = useScrollTrigger({ disableHysteresis: true, threshold: 50 });
  const [open, setOpen] = useState(false);

  const toggleMenu = (open: boolean) => (event: any) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setOpen(open);
  };

  return (
    <Header isScrolled={isScrolled} elevation={isScrolled ? 1 : 0}>
      <Link href="/">Endless Creation</Link>
      <LinkList isScrolled={isScrolled}>
        {index.map((item) => (
          <Link key={item.url} href={item.url}>
            {item.title}
          </Link>
        ))}
      </LinkList>
      <IconButton
        className="menu"
        onClick={() => {
          setOpen(true);
        }}
      >
        <MenuIcon className="icon" />
      </IconButton>
      <SwipeableDrawer
        anchor="right"
        open={open}
        onClose={toggleMenu(false)}
        onOpen={toggleMenu(true)}
      >
        <Box onClick={toggleMenu(false)} onKeyDown={toggleMenu(false)}>
          <List>
            {index.map((item) => (
              <ListItem key={item.url} button>
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary={item.title} />
              </ListItem>
            ))}
          </List>
        </Box>
      </SwipeableDrawer>
    </Header>
  );
};

export default MainNav;

const Header = styled(Box)<any>(
  ({ isScrolled }: any) => css`
    width: 100%;
    height: 4rem;
    padding: 0 2rem;
    border-radius: 0px;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-between;
    transition: all 0.3s ease;
    background-color: ${isScrolled ? '#ffffffc7' : 'transparent'};
    backdrop-filter: ${isScrolled && 'blur(5px)'};
    & .menu {
      display: none;
      color: ${isScrolled ? 'black' : 'white'};
      & .icon {
        width: 1.7rem;
        height: 1.7rem;
      }
    }
    & a {
      text-align: center;
      transition: all 0.3s ease;
    }
    & > a {
      font-weight: bold;
      color: ${isScrolled ? '#1a1a1a' : '#FFF'};
    }
    @media screen and (max-width: 768px) {
      & .menu {
        display: flex;
      }
    }
  `,
);

const LinkList = styled(Box)<any>(
  ({ isScrolled }: any) => css`
    display: flex;
    height: 100%;
    & a {
      height: 100%;
      line-height: 4rem;
      width: 5.9375rem;
      color: ${isScrolled ? '#1a1a1a' : '#ededed'};
      &:hover {
        color: ${isScrolled ? 'black' : '#ffffff'};
        font-weight: bold;
      }
    }
    @media screen and (max-width: 768px) {
      & {
        display: none;
      }
    }
  `,
);
