/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import {
  Box,
  Divider,
  ListItemIcon,
  ListItemText,
  MenuItem,
  MenuList,
  styled,
} from '@mui/material';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import LoginIcon from '@mui/icons-material/Login';
import { Text } from '../components/common';
import { useRouter } from 'next/dist/client/router';

type CommunityNavProps = {};

const CommunityNav = ({}: CommunityNavProps) => {
  const router = useRouter();
  return (
    <StyledMenuList dense>
      <Text className="title">
        Endless Creation
        <br />
        Community
      </Text>

      <Divider />

      <StyledMenuItem
        onClick={() => {
          router.push('/community/login');
        }}
      >
        <ListItemIcon>
          <LoginIcon className="icon" />
        </ListItemIcon>
        <ListItemText>로그인</ListItemText>
      </StyledMenuItem>

      <Divider />

      <StyledMenuItem
        onClick={() => {
          router.push('/community/notice');
        }}
      >
        <ListItemIcon>
          <PriorityHighIcon className="icon" />
        </ListItemIcon>
        <ListItemText>공지사항</ListItemText>
      </StyledMenuItem>
      <StyledMenuItem
        onClick={() => {
          router.push('/community/question');
        }}
      >
        <ListItemIcon>
          <QuestionAnswerIcon className="icon" />
        </ListItemIcon>
        <ListItemText>질문</ListItemText>
      </StyledMenuItem>
      <StyledMenuItem
        onClick={() => {
          router.push('/community/activity');
        }}
      >
        <ListItemIcon>
          <DirectionsRunIcon className="icon" />
        </ListItemIcon>
        <ListItemText>활동</ListItemText>
      </StyledMenuItem>
      <StyledMenuItem className="copyright">
        <ListItemText>Copyright ⓒ Endless Creation 2021</ListItemText>
      </StyledMenuItem>
    </StyledMenuList>
  );
};

export default CommunityNav;

const StyledMenuList = styled(MenuList)(css`
  position: fixed;
  width: 14.5rem;
  height: 100%;
  background: #2d581a;
  color: #d1e0ca;
  display: flex;
  flex-direction: column;

  & .title {
    text-align: center;
    padding: 1rem 0;
    font-size: 1.4rem;
    font-weight: bold;
  }
`);

const StyledMenuItem = styled(MenuItem)(css`
  height: 3.125rem;
  &:hover {
    background: #35691f;
  }

  & .MuiTypography-root {
    font-size: 1rem;
    font-weight: 600;
    font-family: 'Noto Sans KR';
  }

  & .icon {
    width: 1.6rem;
    height: 1.6rem;
    color: #d1e0ca;
    margin-right: 1rem;
  }

  &.copyright {
    margin-top: auto;
    & .MuiTypography-root {
      font-size: 0.3rem;
      text-align: right;
    }
    color: #bfccb9;
  }
`);
