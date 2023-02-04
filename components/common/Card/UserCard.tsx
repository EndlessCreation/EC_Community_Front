/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Avatar, Box, Card, styled } from '@mui/material';
import { User } from '../../../lib/types';
import { TagList, Text } from '..';

const UserCard = ({ user, ...props }: { user: User; [k: string]: any }) => {
  return (
    <CardWrapper elevation={3} {...props}>
      <Box className="image">
        <Avatar src={user.image} />
      </Box>
      <Box className="profile">
        <Text className="name">{user.name}</Text>
        <TagList tags={user.role || []} />
        <Text className="email">{user.email}</Text>
      </Box>
    </CardWrapper>
  );
};

export default UserCard;

const CardWrapper = styled(Card)(css`
  width: 100%;
  height: 9.375rem;
  display: flex;

  & .image {
    flex: 4;
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
    flex: 5;
    display: flex;
    padding: 1rem;
    flex-direction: column;

    & .name {
      font-size: 2rem;
    }

    & .role {
      margin-top: 0.2rem;
      width: fit-content;
      padding: 0.1rem 0.6rem;
      font-size: 1.1rem;
      border-radius: 5px;
      background-color: #408048;
      color: white;
    }

    & .email {
      margin-top: auto;
      color: #757575;
    }
  }
`);
