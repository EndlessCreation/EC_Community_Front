/** @jsxImportSource @emotion/react */
import React, { ReactChild, useEffect, useRef } from 'react';
import { initValue } from '../source/utils/utils';
import { PlayInterAction } from './commonAction';

const actionListValue = (scale: [number, number], scaleRatio: number) => [
  {
    type: 'matrix',
    interActionProps: [
      //시작비율, 끝비율, (0~1) 실제값,
      {
        startRatio: 0,
        endRatio: scaleRatio,
        value: [
          [scale[0], 0, 0, scale[0], 0, 0],
          [scale[1], 0, 0, scale[1], 0, 0],
        ],
      },
      {
        startRatio: scaleRatio,
        endRatio: 1,
        value: [
          [scale[1], 0, 0, scale[1], 0, 0],
          [scale[1], 0, 0, scale[1], 0, 0],
        ],
      },
    ],
  },
];

const PlayScale = ({
  playId,
  startPoint,
  playLength,
  scale = [0, 1],
  scaleRatio = 1,
  children,
}: {
  playId: string;
  startPoint: number;
  playLength: number;
  scale?: [number, number];
  scaleRatio?: number;

  children: ReactChild | Array<ReactChild>;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const actionList = actionListValue(scale, scaleRatio);
  const value = initValue({
    playId,
    startPoint,
    playLength,
    actionList,
  });
  console.log(playId);
  return (
    <PlayInterAction initValue={value} refProp={ref}>
      {children}
    </PlayInterAction>
  );
};

export default PlayScale;
