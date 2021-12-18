/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Box, Grid, Paper, styled } from '@mui/material';
import { testProject1, testProject2, testUser1, testUser2, testUser3 } from '../../types';
import { Text } from '../common';
import SimpleActivityList from './SimpleActivityList';
import SimpleUserList from './SimpleUserList';
import TodayChart from './TodayChart';

type AdminMainProps = {};

const AdminMain = ({}: AdminMainProps) => {
  return (
    <Wrapper>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Item>
            <Text className="title">Today</Text>
            <TodayChart />
          </Item>
        </Grid>
        <Grid item xs={12} md={6}>
          <Item>
            <Text className="title">회원</Text>
            <SimpleUserList userList={[testUser1, testUser2, testUser3]} />
          </Item>
        </Grid>
        <Grid item xs={12} md={6}>
          <Item>
            <Text className="title">활동</Text>
            <SimpleActivityList projectList={[testProject1, testProject2]} />
          </Item>
        </Grid>
      </Grid>
    </Wrapper>
  );
};

export default AdminMain;

const Wrapper = styled(Grid)(css`
  width: 100%;
  min-height: 100%;
  height: fit-content;
  padding: 2rem;
`);

const Item = styled(Paper)(css`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  height: 100%;

  & .title {
    font-size: 1.3rem;
    font-weight: bold;
    margin-bottom: 1rem;
  }
`);
