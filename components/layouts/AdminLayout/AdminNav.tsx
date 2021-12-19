/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import {
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  styled,
  Toolbar,
} from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import PeopleIcon from '@mui/icons-material/People';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Text } from '../../common';
import { useRouter } from 'next/dist/client/router';

type AdminNavProps = {
  open: boolean;
  toggleDrawer: () => void;
};

const index = [
  { title: '회원 관리', url: '/admin/user', icon: <PeopleIcon /> },
  { title: '가입 관리', url: '/admin/sign', icon: <CheckCircleIcon /> },
];

const AdminNav = ({ open, toggleDrawer }: AdminNavProps) => {
  const router = useRouter();

  return (
    <Wrapper variant="permanent" open={open}>
      <Toolbar
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
          px: [1],
        }}
      >
        <IconButton onClick={toggleDrawer}>
          <ChevronLeftIcon />
        </IconButton>
      </Toolbar>
      <Divider />
      <List>
        {index.map((nav) => (
          <ListItem
            button
            key={nav.url}
            onClick={() => {
              router.push(nav.url);
            }}
          >
            <ListItemIcon>{nav.icon}</ListItemIcon>
            <Text>{nav.title}</Text>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List></List>
    </Wrapper>
  );
};

export default AdminNav;

const Wrapper = styled(Drawer)<any>(
  ({ open }) => css`
    width: ${open ? '15rem' : '4rem'};
    overflow-x: ${!open && 'hidden'};
    transition: all 0.5s ease;

    & .MuiDrawer-paper {
      position: relative;
      width: ${open ? '15rem' : '4rem'};
      z-index: 999;
      transition: all 0.5s ease;

      & p {
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
      }
    }
  `,
);
