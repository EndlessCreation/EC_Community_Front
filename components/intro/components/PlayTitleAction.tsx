/** @jsxImportSource @emotion/react */
import React, { ReactChild, useEffect, useRef } from 'react';
import { initValue } from '../source/utils/utils';
import { PlayInterAction } from './commonAction';

const actionList = [
  {
    //여기서 애니메이션 어떻게 할건지 설정 해주기
    type: 'matrix',
    interActionProps: [
      {
        //시작비율, 끝비율, (0~1) 실제값,
        startRatio: 0,
        endRatio: 3 * 4 * 0.3 * 0.01,
        value: [
          [1, 0, 0, 1, 0, 0],
          [1, 0, 0, 1, 0, 80],
        ],
      },
      {
        startRatio: 0.09,
        endRatio: 0.5,
        value: [
          [1, 0, 0, 1, 0, 80],
          [80, 0, 0, 80, 0, 80],
        ],
      },
    ],
  },
];

const PlayTitleAction = ({
  playId,
  startPoint,
  playLength,
  children,
}: {
  playId: string;
  startPoint: number;
  playLength: number;
  children: ReactChild | Array<ReactChild>;
}) => {
  const ref = useRef<HTMLDivElement>(null);

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

export default PlayTitleAction;
