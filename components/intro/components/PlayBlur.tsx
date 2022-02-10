/** @jsxImportSource @emotion/react */
import { ReactChild, useRef } from 'react';
import { initValue } from '../source/utils/utils';
import { PlayInterAction } from './commonAction';

const actionList = [
  {
    //여기서 애니메이션 어떻게 할건지 설정 해주기
    type: 'blur',
    interActionProps: [
      {
        //시작비율, 끝비율, (0~1) 실제값,
        startRatio: 0,
        endRatio: 1,
        value: [0, 40],
      },
    ],
  },
];

const PlayTitle = ({
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

export default PlayTitle;
