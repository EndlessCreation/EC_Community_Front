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
import Link from 'next/link';
import { useRouter } from 'next/router';
import ActiveLink from './ActiveLink';
import InboxIcon from '@mui/icons-material/Inbox';
import BookIcon from '@mui/icons-material/Book';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import AccountBoxIcon from '@mui/icons-material/AccountBox';

const index = [
  { title: '프로젝트', url: '/project', icon: <InboxIcon /> },
  { title: '블로그', url: '/blog', icon: <BookIcon /> },
  { title: '활동일정', url: '/schedule', icon: <EventAvailableIcon /> },
  { title: '지원하기', url: '/recruit', icon: <AccountBoxIcon /> },
];

const MainNav: React.FC = () => {
  const isScrolled = useScrollTrigger({ disableHysteresis: true, threshold: 50 });
  const [open, setOpen] = useState(false);
  const route = useRouter();

  const toggleMenu = (open: boolean) => (event: any) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setOpen(open);
  };

  return (
    <Header isscrolled={+isScrolled} elevation={+isScrolled}>
      <Link href="/">
        <a>Endless Creation</a>
      </Link>
      <LinkList isscrolled={+isScrolled}>
        {index.map((item) => (
          <ActiveLink key={item.url} href={item.url} activeClassName="active">
            <a className="nav-link">{item.title}</a>
          </ActiveLink>
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
              <StyledListItem key={item.url} button onClick={() => route.push(item.url)}>
                <ListItemIcon css={{ minWidth: '1.25rem' }}>{item.icon}</ListItemIcon>
                <ListItemText primary={item.title} />
              </StyledListItem>
            ))}
          </List>
        </Box>
      </SwipeableDrawer>
    </Header>
  );
};

export default MainNav;

const Header = styled(Box)<any>(
  ({ isscrolled }: any) => css`
    width: 100vw;
    height: 4rem;
    padding: 0 2rem;
    border-radius: 0px;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-between;
    transition: all 0.3s ease;
    background-color: ${isscrolled ? '#ffffffc7' : 'transparent'};
    backdrop-filter: ${isscrolled && 'blur(5px)'};
    z-index: 1000;
    & .menu {
      display: none;
      color: ${isscrolled ? 'black' : 'white'};
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
      color: ${isscrolled ? '#1a1a1a' : '#FFF'};
    }
    @media screen and (max-width: 768px) {
      & .menu {
        display: flex;
      }
    }
  `,
);

const LinkList = styled(Box)<any>(
  ({ isscrolled }: any) => css`
    display: flex;
    height: 100%;
    font-size: 14px;
    & .nav-link {
      height: 100%;
      line-height: 4rem;
      width: 5.9375rem;
      color: ${isscrolled ? '#1a1a1a' : '#ffffff'};
      &:hover {
        color: ${isscrolled ? '#1a1a1a' : '#ededed'};
        font-weight: 900;
      }
      &.active {
        font-weight: 900;
      }
    }
    @media screen and (max-width: 768px) {
      & {
        display: none;
      }
    }
  `,
);

const StyledListItem = styled(ListItem)<any>(
  css`
    & .MuiListItemIcon-root {
      min-width: 2rem;
    }

    & .MuiTypography-root {
      font-weight: bold;
    }
  `,
);
