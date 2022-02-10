/** @jsxImportSource @emotion/react */
import { ReactChild, useRef } from 'react';
import { initValue } from '../source/utils/utils';
import { PlayChildInterAction } from './commonAction';

const actionListValue = (color: [string, string]) => {
  return [
    {
      type: 'backgroundColor',
      interActionProps: [
        //시작비율, 끝비율, (0~1) 실제값,
        { startRatio: 0, endRatio: 1, value: [color[0], color[1]] },
      ],
    },
  ];
};

const PlayBackground = ({
  playId,
  startPoint,
  playLength,
  color,
  children,
}: {
  playId: string;
  startPoint: number;
  playLength: number;
  color: [string, string];
  children: ReactChild | Array<ReactChild>;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const actionList = actionListValue(color);
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

export default PlayBackground;
