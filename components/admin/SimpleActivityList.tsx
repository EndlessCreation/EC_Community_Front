/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import {
  Avatar,
  Box,
  styled,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import { Project } from '../../types';

type SimpleActivityListProps = {
  projectList: Array<Project>;
};

const SimpleActivityList = ({ projectList }: SimpleActivityListProps) => {
  return (
    <Wrapper>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>제목</TableCell>
              <TableCell>종류</TableCell>
              <TableCell>상태</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {projectList.map((project) => (
              <TableRow key={project.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell
                  component="th"
                  scope="row"
                  sx={{ display: 'flex', alignItems: 'center' }}
                >
                  {project.title}
                </TableCell>
                <TableCell>{project.category}</TableCell>
                <TableCell>{project.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Wrapper>
  );
};

export default SimpleActivityList;

const Wrapper = styled(Box)(css``);
