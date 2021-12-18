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
import { User } from '../../types';

type SimpleUserListProps = {
  userList: Array<User>;
};

const SimpleUserList = ({ userList }: SimpleUserListProps) => {
  return (
    <Wrapper>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>이름</TableCell>
              <TableCell>이메일</TableCell>
              <TableCell>직책</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {userList.map((user) => (
              <TableRow key={user.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell
                  component="th"
                  scope="row"
                  sx={{ display: 'flex', alignItems: 'center' }}
                >
                  <Avatar src={user.image} sx={{ marginRight: '1rem' }} />
                  {user.name}
                </TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.role![0]}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Wrapper>
  );
};

export default SimpleUserList;

const Wrapper = styled(Box)(css``);
