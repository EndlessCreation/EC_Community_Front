/** @jsxImportSource @emotion/react */
import React, { ReactChild, useRef } from 'react';
import { initValue } from '../source/utils/utils';
import { PlayChildInterAction } from './commonAction';

const actionListValue = (floatRatio: number) => [
  {
    //여기서 애니메이션 어떻게 할건지 설정 해주기
    type: 'opacity',
    interActionProps: [
      {
        //시작비율, 끝비율, (0~1) 실제값,
        startRatio: 0,
        endRatio: floatRatio,
        value: [0, 1],
      },
    ],
  },
  {
    //여기서 애니메이션 어떻게 할건지 설정 해주기
    type: 'matrix',
    interActionProps: [
      {
        //시작비율, 끝비율, (0~1) 실제값,
        startRatio: 0,
        endRatio: floatRatio,
        value: [
          [1, 0, 0, 1, 0, 0],
          [1, 0, 0, 1, 100, -100],
        ],
      },
      {
        //시작비율, 끝비율, (0~1) 실제값,
        startRatio: floatRatio,
        endRatio: 0.8,
        value: [
          [1, 0, 0, 1, 100, -100],
          [1, 0, 0, 1, 0, -100],
        ],
      },
    ],
  },
  {
    //여기서 애니메이션 어떻게 할건지 설정 해주기
    type: 'matrix',
    interActionProps: [
      {
        //시작비율, 끝비율, (0~1) 실제값,
        startRatio: 0.7,
        endRatio: 0.9,
        value: [
          [1, 0, 0, 1, 0, -100],
          [1, 0, 0, 1, 20, -100],
        ],
      },
    ],
  },
];

const PlayContactUs = ({
  playId,
  startPoint,
  playLength,
  floatRatio,
  children,
}: {
  playId: string;
  startPoint: number;
  playLength: number;
  floatRatio: number;
  children: ReactChild | Array<ReactChild>;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const actionList = actionListValue(floatRatio);
  const value = initValue({
    playId,
    startPoint,
    playLength,
    actionList,
  });

  return (
    <PlayChildInterAction initValue={value} refProp={ref}>
      {children}
    </PlayChildInterAction>
  );
};

export default PlayContactUs;
