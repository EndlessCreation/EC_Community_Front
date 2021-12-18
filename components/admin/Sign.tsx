/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Box, Grid, Paper, styled } from '@mui/material';
import { testUser1, testUser2, testUser3, User } from '../../types';
import { Text } from '../common';
import { UserWaitCard } from '../Card';

type SignProps = {
  waitUser: Array<User>;
};

const Sign = ({ waitUser = [testUser1, testUser2, testUser3] }: SignProps) => {
  return (
    <Wrapper>
      <Text className="title">가입 승인</Text>
      <Grid container spacing={4}>
        {waitUser.map((user) => (
          <Grid item xs={12} key={user.id}>
            <UserWaitCard user={user} />
          </Grid>
        ))}
      </Grid>
    </Wrapper>
  );
};

export default Sign;

const Wrapper = styled(Paper)(css`
  padding: 2rem;

  & > .title {
    font-size: 1.2rem;
    font-weight: bold;
    margin-bottom: 1rem;
  }
`);
