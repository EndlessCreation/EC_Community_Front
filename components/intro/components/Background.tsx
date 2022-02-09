/** @jsxImportSource @emotion/react */
import React, { useEffect, useRef } from 'react';
import { css } from '@emotion/react';
import { componentInit, componentSetting } from '../source/settings/setComponent';

const initValue = {
  startPoint: 2,
  playLength: 3,
  actionList: [
    {
      //여기서 애니메이션 어떻게 할건지 설정 해주기
      type: 'backgroundColor',
      interActionProps: [
        {
          //시작비율, 끝비율, (0~1) 실제값,
          startRatio: 0,
          endRatio: 0.5,
          value: ['#0000E6', '#550066'],
        },
        {
          startRatio: 0.5,
          endRatio: 1,
          value: ['#550066', '#0000E6'],
        },
      ],
    },
  ],
};

const Background = ({ playId }: { playId: number; ref: HTMLDivElement | null }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { startPoint, playLength, actionList } = initValue;
  componentInit({ playId, startPoint, playLength, actionList });

  useEffect(() => {
    componentSetting({ playId, ref });
  });
  return <div ref={ref} css={backgroundStyle} />;
};

export default Background;

const backgroundStyle = css`
  position: fixed;
  z-index: 0;
  width: 100%;
  height: 100%;
`;
