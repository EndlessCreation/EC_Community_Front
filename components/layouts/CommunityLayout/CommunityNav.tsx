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
import PeopleIcon from '@mui/icons-material/People';
import { Text } from '../../common';
import { useRouter } from 'next/dist/client/router';

type CommunityNavProps = {};

const index = [
  { title: '공지사항', url: '/community/notice', icon: <PriorityHighIcon className="icon" /> },
  { title: '질문/답변', url: '/community/question', icon: <QuestionAnswerIcon className="icon" /> },
  { title: '멤버', url: '/community/member', icon: <PeopleIcon className="icon" /> },
  { title: '활동', url: '/community/activity', icon: <DirectionsRunIcon className="icon" /> },
];

const CommunityNav = ({}: CommunityNavProps) => {
  const router = useRouter();
  return (
    <StyledMenuList dense className="sideNav">
      <Text
        className="title"
        onClick={() => {
          router.push('/community');
        }}
      >
        Endless Creation
        <br />
        Community
      </Text>

      <Divider />

      <StyledMenuItem
        onClick={() => {
          router.push('/login');
        }}
      >
        <ListItemIcon>
          <LoginIcon className="icon" />
        </ListItemIcon>
        <ListItemText>로그인</ListItemText>
      </StyledMenuItem>

      <Divider />

      {index.map((nav) => (
        <StyledMenuItem
          key={nav.url}
          onClick={() => {
            router.push(nav.url);
          }}
        >
          <ListItemIcon>{nav.icon}</ListItemIcon>
          <ListItemText>{nav.title}</ListItemText>
        </StyledMenuItem>
      ))}

      <Box className="copyright">
        <ListItemText>Copyright ⓒ Endless Creation 2021</ListItemText>
      </Box>
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
    cursor: pointer;
  }

  & .copyright {
    margin-top: auto;
    & .MuiTypography-root {
      font-size: 0.2rem;
      text-align: right;
      margin-right: 0.5rem;
    }
    color: #bfccb9;
    user-select: none;
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
`);
