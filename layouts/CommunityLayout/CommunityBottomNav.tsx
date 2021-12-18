/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { BottomNavigation, BottomNavigationAction, Box, styled } from '@mui/material';
import { useState } from 'react';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

type CommunityBottomNavProps = {};

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
        <NavItem label="활동" icon={<DirectionsRunIcon />} />
        <NavItem label="질문" icon={<QuestionAnswerIcon />} />
        <NavItem label="공지사항" icon={<PriorityHighIcon />} />
        <NavItem label="마이페이지" icon={<AccountCircleIcon />} />
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
