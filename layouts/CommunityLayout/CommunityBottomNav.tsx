/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { BottomNavigation, BottomNavigationAction, Box, styled } from '@mui/material';
import { useState } from 'react';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HomeIcon from '@mui/icons-material/Home';

type CommunityBottomNavProps = {};

const index = [
  { title: '홈', url: '/community', icon: <HomeIcon className="icon" /> },
  { title: '질문/답변', url: '/community/question', icon: <QuestionAnswerIcon className="icon" /> },
  { title: '활동', url: '/community/activity', icon: <DirectionsRunIcon className="icon" /> },
  { title: '공지사항', url: '/community/notice', icon: <PriorityHighIcon className="icon" /> },
  { title: '마이페이지', url: '/mypage', icon: <AccountCircleIcon className="icon" /> },
];

const CommunityBottomNav = ({}: CommunityBottomNavProps) => {
  const [value, setValue] = useState(0);

  return (
    <Wrapper className="bottomNav">
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        {index.map((nav) => (
          <NavItem label={nav.title} icon={nav.icon} key={nav.title} />
        ))}
      </BottomNavigation>
    </Wrapper>
  );
};

export default CommunityBottomNav;

const Wrapper = styled(Box)(css`
  border-top: 1px solid #e7e7e7;
`);

const NavItem = styled(BottomNavigationAction)(css`
  color: #6d6d6d;
  &.Mui-selected {
    color: #3b8d18 !important;
  }

  & .MuiSvgIcon-root {
    width: 2rem;
    height: 2rem;
  }

  & .MuiBottomNavigationAction-label {
    margin-top: 0.5rem;
    font-size: 1rem;
  }
`);

/* background: #2d581a;
    background: #35691f; */
