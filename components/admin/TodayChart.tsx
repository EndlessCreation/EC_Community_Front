/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Box, styled } from '@mui/material';
import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer } from 'recharts';
import { Text } from '../common';

const data = [
  { day: '11일', amount: 0 },
  { day: '12일', amount: 300 },
  { day: '13일', amount: 600 },
  { day: '14일', amount: 800 },
  { day: '15일', amount: 1500 },
  { day: '16일', amount: 2000 },
  { day: '17일', amount: 2400 },
  { day: '18일', amount: 2550 },
  { day: '19일', amount: 2700 },
];

type TodayChartProps = {};

const TodayChart = ({}: TodayChartProps) => {
  return (
    <ResponsiveContainer height={200}>
      <LineChart
        data={data}
        margin={{
          top: 16,
          right: 16,
          bottom: 0,
          left: 44,
        }}
      >
        <XAxis dataKey="day" stroke="#474747" style={{ color: '#474747' }} />
        <YAxis stroke="#474747" style={{ color: '#474747' }}>
          <Label
            offset={20}
            position="left"
            style={{
              textAnchor: 'middle',
              fill: '#474747',
            }}
          >
            방문 수
          </Label>
        </YAxis>
        <Line
          isAnimationActive={false}
          type="monotone"
          dataKey="amount"
          stroke="#000000"
          dot={false}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default TodayChart;
