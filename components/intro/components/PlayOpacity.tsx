/** @jsxImportSource @emotion/react */
import React, { ReactChild, useEffect, useRef } from 'react';
import { initValue } from '../source/utils/utils';
import { PlayInterAction } from './commonAction';

const actionListValue = (up: boolean, opacityRatio: number) => [
  {
    type: 'opacity',
    interActionProps: [
      //시작비율, 끝비율, (0~1) 실제값,
      { startRatio: 0, endRatio: opacityRatio, value: up ? [0, 1] : [1, 0] },
      { startRatio: opacityRatio, endRatio: 1, value: up ? [1, 1] : [0, 1] },
    ],
  },
];

const PlayOpacity = ({
  playId,
  startPoint,
  playLength,
  opacityRatio = 1,
  up = false,
  children,
}: {
  playId: string;
  startPoint: number;
  playLength: number;
  opacityRatio?: number;
  up?: boolean;
  children: ReactChild | Array<ReactChild>;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const actionList = actionListValue(up, opacityRatio);
  const value = initValue({
    playId,
    startPoint,
    playLength,
    actionList,
  });

  return (
    <PlayInterAction initValue={value} refProp={ref}>
      {children}
    </PlayInterAction>
  );
};

export default PlayOpacity;
