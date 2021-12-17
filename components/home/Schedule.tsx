/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Box } from '@mui/material';
import { ResponsiveLayout, Section, Text } from '../common';
import HomeHead from './HomeHead';

type ScheduleProps = {};

const Schedule = ({}: ScheduleProps) => {
  return (
    <Box>
      <HomeHead
        title="Schedule"
        description="Endless Creation의 활동 계획을 소개합니다"
        src="https://images.unsplash.com/photo-1506784983877-45594efa4cbe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1468&q=80"
      />

      <ResponsiveLayout>
        <Section>
          <Text className="title">주요 일정</Text>
          {/* @TODO 주요 일정 이미지 삽입 */}
          추가 예정입니다...
        </Section>
      </ResponsiveLayout>

      <ResponsiveLayout>
        <Section>
          <Text className="title">세부 일정</Text>
          {/* @기획 후 이미지 삽입 */}
          추가 예정입니다...
        </Section>
      </ResponsiveLayout>
    </Box>
  );
};

export default Schedule;
