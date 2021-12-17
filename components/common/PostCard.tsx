/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Box, Card, Grid, styled } from '@mui/material';
import { Project } from '../../types';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Text } from '.';
import TagList from './TagList';

const PostCard = ({ title, description, image, skills, source, member }: Partial<Project>) => {
  return (
    <CardWrapper container component={Card} elevation={3}>
      <Display item xs={12} md={7}></Display>
      <Description item xs={12} md={5}>
        <Box className="title">
          <Text>{title}</Text>
          <ArrowForwardIosIcon />
        </Box>
        <Box className="skills">
          <TagList tags={['React', 'Node', 'aweqwd']} />
        </Box>
      </Description>
    </CardWrapper>
  );
};

export default PostCard;

const CardWrapper = styled(Grid)<any>(css`
  width: 60.5rem;
  height: 18.75rem;
`);

const Display = styled(Grid)<any>(css`
  flex: 1;
  height: 18.75rem;
`);

const Description = styled(Grid)<any>(css`
  padding: 1rem;
  & .title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 2rem;
  }
`);
