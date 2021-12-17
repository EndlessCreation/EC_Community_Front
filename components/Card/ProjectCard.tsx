/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Box, Card, styled } from '@mui/material';
import { Project } from '../../types';
import { TagList, Text } from '../common';
import GitHubIcon from '@mui/icons-material/GitHub';

const ProjectCard = ({ project, ...props }: { project: Project; [k: string]: any }) => {
  return (
    <CardWrapper {...props} elevation={4}>
      <img className="image" src={project.image || ''} alt=""></img>
      <Box className="info">
        <Text className="title">{project.title}</Text>
        <TagList tags={project.skills} />
        <Text className="description">{project.description}</Text>
        <a href={project.source || ''} target="_black" className="source">
          <GitHubIcon />
        </a>
      </Box>
    </CardWrapper>
  );
};

export default ProjectCard;

const CardWrapper = styled(Card)(css`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  width: 18.75rem;
  height: 25rem;
  transition: all 0.5s ease;
  cursor: pointer;

  & .image {
    width: 100%;
    height: 12.5rem;
    object-fit: contain;
  }

  & .info {
    width: 100%;
    flex: 1;
    padding: 1rem;
    display: flex;
    flex-direction: column;

    & .title {
      font-size: 1.2rem;
      font-weight: bold;
      margin-bottom: 1rem;
    }

    & .description {
      margin-top: 1rem;
      font-size: 0.9rem;
      color: #444444;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      line-height: 1rem;
      max-height: 3rem;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
    }

    & .source {
      margin-top: auto;
    }
  }

  &:hover {
    transform: scale(1.02);
  }
`);
