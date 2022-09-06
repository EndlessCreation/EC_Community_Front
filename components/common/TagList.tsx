import { css } from '@emotion/react';
import { Box, styled } from '@mui/material';

type TagListProps = {
  tags: Array<string>;
};

export const TagList: React.FC<TagListProps> = ({ tags }) => {
  return (
    <TagListWrapper>
      <Box className="list">
        {tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </Box>
    </TagListWrapper>
  );
};

export default TagList;

const TagListWrapper = styled(Box)<any>(css`
  width: 100%;
  overflow: hidden;
  &::-webkit-scrollbar {
    display: none;
  }

  & .list {
    width: fit-content;
    display: flex;
  }
`);

export const Tag = styled(Box)<any>(css`
  width: fit-content;
  height: 1rem;
  font-size: 0.8rem;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.8rem 0.6rem;
  border-radius: 5px;
  background-color: #2e952a;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  & + & {
    margin-left: 0.5rem;
  }
`);
