/** @jsxImportSource @emotion/react */
import React, { useEffect, useRef } from 'react';
import playData from '../source/utils/playData';
import { css } from '@emotion/react';
import { calStartPoint, calPlayLength } from '../source/utils/utils';
import { componentInit, componentSetting } from '../source/settings/setComponent';

const initValue = {
  startPoint: 0,
  playLength: 2,
  actionList: [
    {
      //여기서 애니메이션 어떻게 할건지 설정 해주기
      type: 'opacity',
      interActionProps: [
        {
          //시작비율, 끝비율, (0~1) 실제값,
          startRatio: 0,
          endRatio: 0.3,
          value: [0, 1],
        },
        {
          startRatio: 0.7,
          endRatio: 1,
          value: [1, 0],
        },
      ],
    },
    {
      type: 'matrix',
      interActionProps: [
        {
          //시작비율, 끝비율, (0~1) 실제값,
          startRatio: 0,
          endRatio: 0.3,
          value: [
            [1, 0, 0, 1, 0, 0],
            [1, 0, 0, 1, 100, 100],
          ],
        },
        {
          startRatio: 0.5,
          endRatio: 1,
          value: [
            [1, 0, 0, 1, 0, 0],
            [100, 0, 0, 100, 0, 0],
          ],
        },
      ],
    },
  ],
};

const Title = ({ playId }: { playId: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { startPoint, playLength, actionList } = initValue;
  componentInit({ playId, startPoint, playLength, actionList });

  useEffect(() => {
    //title 컴포넌트의 기본 정보 세팅,
    componentSetting({ playId, ref });
  });
  return (
    <div ref={ref} css={titleStyle}>
      <div>안녕 하세요?</div>
    </div>
  );
};

export default Title;

const titleStyle = css`
  position: fixed;
  z-index: 2;
  top: 50vh;
  left: 50vw;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 20px;
`;
