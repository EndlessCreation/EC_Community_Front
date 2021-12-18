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
import { Activity } from '../../types';

type SimpleActivityListProps = {
  activityList: Array<Activity>;
};

const SimpleActivityList = ({ activityList }: SimpleActivityListProps) => {
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
            {activityList.map((activity) => (
              <TableRow
                key={activity.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell
                  component="th"
                  scope="row"
                  sx={{ display: 'flex', alignItems: 'center' }}
                >
                  {activity.title}
                </TableCell>
                <TableCell>{activity.category}</TableCell>
                <TableCell>{activity.status}</TableCell>
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
