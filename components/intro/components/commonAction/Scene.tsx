/** @jsxImportSource @emotion/react */
import React, { ReactChild, useEffect, useRef } from 'react';
import { css } from '@emotion/react';
import { componentInit, componentSetting } from '../../source/settings/setComponent';
import { interActionProp } from '../../source/utils/type';

const Scene = ({
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
  const actionList = [
    {
      type: '',
      interActionProps: [
        {
          startRatio: 0,
          endRatio: 1,
          value: [1, 1],
        },
      ],
    },
  ];

  componentInit({ playId, startPoint, playLength, actionList });

  useEffect(() => {
    componentSetting({ playId, ref });
  });
  return (
    <div ref={ref} id={playId} css={sceneStyle}>
      {children}
    </div>
  );
};

export default Scene;

const sceneStyle = css`
  /* display: none; */
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;
