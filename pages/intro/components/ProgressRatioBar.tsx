/** @jsxImportSource @emotion/react */

import React, { useEffect, useRef } from 'react';
import { css } from '@emotion/react';
import playData from '../source/utils/playData';
import { calProgressRatio } from '../source/utils/utils';

const ProgressRatioBar = ({ playId }: { playId: number }) => {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      const progressRatio = calProgressRatio({
        start: 0,
        end: playData.scrollData.wholeScroll,
        progress: window.pageYOffset,
      });
      cursorRef.current!.style.left = `calc(${progressRatio}*90vw )`;
    });
  });
  return (
    <div css={progressBar}>
      <div css={cursorStyle} ref={cursorRef}></div>
    </div>
  );
};

export default ProgressRatioBar;

const progressBar = css`
  position: fixed;
  top: 90vh;
  width: 90vw;
  left: 5vw;
  height: 2px;
  background-color: black;
`;
const cursorStyle = css`
  position: absolute;
  height: 10px;
  width: 5px;
  border: 1px solid black;
  background-color: #d6f3f8;
`;
