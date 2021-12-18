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
import { Text } from '../../components/common';

type AdminNavProps = {
  open: boolean;
  toggleDrawer: () => void;
};

const AdminNav = ({ open, toggleDrawer }: AdminNavProps) => {
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
        <ListItem button>
          <ListItemIcon>
            <PeopleIcon />
          </ListItemIcon>
          <Text>회원 관리</Text>
        </ListItem>
      </List>
      <Divider />
      <List></List>
    </Wrapper>
  );
};

export default AdminNav;

const Wrapper = styled(Drawer)<any>(
  ({ open }) => css`
    width: ${open ? '240px' : '64px'};
    overflow-x: ${!open && 'hidden'};
    transition: all 0.5s ease;

    & .MuiDrawer-paper {
      position: relative;
      width: ${open ? '240px' : '64px'};
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
