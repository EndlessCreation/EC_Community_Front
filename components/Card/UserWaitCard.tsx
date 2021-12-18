/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Avatar, Box, Button, Card, styled } from '@mui/material';
import { User } from '../../types';
import { TagList, Text } from '../common';

const UserWaitCard = ({ user, ...props }: { user: User; [k: string]: any }) => {
  return (
    <CardWrapper elevation={3} {...props}>
      <Box className="image">
        <Avatar src={user.image} />
      </Box>
      <Box className="profile">
        <Text className="name">{user.name}</Text>
        <Text className="year">{user.year}기</Text>
        <Text className="email">{user.email}</Text>
      </Box>
      <Box className="sign">
        <Button className="approval">승인</Button>
        <Button className="rejection">거절</Button>
      </Box>
    </CardWrapper>
  );
};

export default UserWaitCard;

const CardWrapper = styled(Card)(css`
  width: 100%;
  height: 9.375rem;
  display: flex;

  & .image {
    flex: 2;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    & .MuiAvatar-root {
      width: 8rem;
      height: 8rem;
    }
  }

  & .profile {
    flex: 3;
    display: flex;
    padding: 1rem;
    flex-direction: column;

    & .name {
      font-size: 2rem;
    }

    & .email {
      margin-top: auto;
      color: #757575;
    }
  }

  & .sign {
    flex: 1;
    display: flex;
    flex-direction: column;

    & .approval,
    .rejection {
      flex: 1;
      border-radius: 0px;
      font-family: 'Noto Sans KR';
      font-weight: bold;
      font-size: 1.2rem;
    }

    & .approval {
      color: #269c17;
    }

    & .rejection {
      color: #c21b1b;
    }
  }
`);
