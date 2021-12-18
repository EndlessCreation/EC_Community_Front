/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import {
  Avatar,
  Box,
  Checkbox,
  Pagination,
  Paper,
  styled,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import { useEffect, useState } from 'react';
import { User } from '../../types';
import { Text } from '../common';

type UserManagementProps = {
  userList: Array<User>;
};

const UserManagement = ({ userList }: UserManagementProps) => {
  const [checkList, setCheckList] = useState<Array<boolean> | null>(null);
  useEffect(() => {
    setCheckList(Array.from({ length: userList.length }, () => false));
  }, [userList]);

  if (!checkList) return null;

  const allChecked = checkList.reduce((acc, i) => acc && i);
  return (
    <Wrapper>
      <Text className="title">회원 관리</Text>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <Checkbox
                  checked={allChecked}
                  onChange={() => {
                    setCheckList(checkList.map(() => !allChecked));
                  }}
                />
              </TableCell>
              <TableCell>이름</TableCell>
              <TableCell>기수</TableCell>
              <TableCell>이메일</TableCell>
              <TableCell>기술</TableCell>
              <TableCell>직책</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {userList.map((user, index) => (
              <TableRow key={user.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell component="th" scope="row">
                  <Checkbox
                    checked={checkList[index]}
                    onChange={(e) => {
                      setCheckList(
                        checkList.map((item, thisIndex) =>
                          index === thisIndex ? e.target.checked : item,
                        ),
                      );
                    }}
                  />
                </TableCell>
                <TableCell sx={{ display: 'flex', alignItems: 'center' }}>
                  <Avatar src={user.image} sx={{ marginRight: '1rem' }} />
                  {user.name}
                </TableCell>
                <TableCell>{user.year}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.skills[0]}</TableCell>
                <TableCell>{user.role![0]}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <StyledPagenation count={10} />
    </Wrapper>
  );
};

export default UserManagement;

const Wrapper = styled(Paper)(css`
  padding: 2rem;

  & > .title {
    font-size: 1.2rem;
    font-weight: bold;
    margin-bottom: 1rem;
  }
`);

const StyledPagenation = styled(Pagination)(css`
  width: 100%;
  margin-top: 1rem;
  display: flex;
  justify-content: center;
`);
