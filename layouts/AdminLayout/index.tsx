/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { AppBar, Badge, Box, IconButton, styled, Toolbar } from '@mui/material';
import { Text } from '../../components/common';
import HomeIcon from '@mui/icons-material/Home';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import AdminNav from './AdminNav';

type AdminLayoutProps = {
  children: React.ReactChild;
};

const AdminLayout = ({ children }: AdminLayoutProps) => {
  const [open, setOpen] = useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <Wrapper>
      <Header position="absolute" open={open}>
        <Toolbar
          sx={{
            pr: '24px', // keep right padding when drawer closed
          }}
        >
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer}
            sx={{
              marginRight: '36px',
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Text className="title">EC Admin</Text>
          <IconButton color="inherit">
            <HomeIcon />
          </IconButton>
        </Toolbar>
      </Header>
      <AdminNav open={open} toggleDrawer={toggleDrawer} />
      <Section>{children}</Section>
    </Wrapper>
  );
};

export default AdminLayout;

const Wrapper = styled(Box)(css`
  width: 100%;
  height: 100%;
  display: flex;
`);

const Header = styled(AppBar)<any>(
  ({ open }) => css`
    width: ${open ? 'calc(100% - 240px)' : '100%'};
    margin-left: ${open && '15rem'};
    position: fixed;
    top: 0;
    z-index: 1000;
    transition: all 0.5s ease;

    & .MuiToolbar-root {
      display: flex;
      justify-content: space-between;
    }

    & .title {
      flex: 1;
      font-size: 20px;
      font-weight: bold;
    }
  `,
);

const Section = styled(Box)(css`
  background: #dbdbdb;
  flex: 1;
`);
