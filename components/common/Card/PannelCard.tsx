/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Avatar, Box, Card, styled } from '@mui/material';
import { User } from '../../../lib/types';
import { Text } from '..';

type PannelCardProps = {
  list: Array<{ title: string; author: User; createdAt: Date }>;
};

const PannelCard = ({ list }: PannelCardProps) => {
  return (
    <Wrapper elevation={3}>
      {list.map((item, index) => (
        <Item key={index}>
          <Text className="top">{item.title}</Text>
          <Box className="bottom">
            <Avatar src={item.author.image} className="avatar" />
            <Text className="name">{item.author.name}</Text>
            <Text className="date">{item.createdAt.toLocaleDateString()}</Text>
          </Box>
        </Item>
      ))}
    </Wrapper>
  );
};

export default PannelCard;

const Wrapper = styled(Card)(css`
  margin-left: 0.5rem;
`);

const Item = styled(Box)(css`
  padding: 0.5rem;
  border-left: 2px solid #35691f;
  & .top {
    font-size: 1.1rem;
    font-weight: bold;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-bottom: 1rem;
  }

  & .bottom {
    display: flex;
    justify-content: flex-end;
    align-items: center;

    & .avatar {
      width: 1.3rem;
      height: 1.3rem;
      margin-right: 0.4rem;
    }

    & .name {
      font-size: 0.8rem;
      color: #252525;
      margin-right: 1.2rem;
    }

    & .date {
      font-size: 0.8rem;
      color: #727272;
    }
  }

  & + & {
    border-top: 1px solid #d3d3d3;
  }
`);
