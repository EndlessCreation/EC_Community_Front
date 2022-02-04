/** @jsxImportSource @emotion/react */

import React, { useEffect, useRef } from 'react';
import { css } from '@emotion/react';

const ProgressRatioBar = () => {
  const cursor = useRef<HTMLDivElement>(null);
  const scrollTest = () => {
    console.log(window.pageYOffset);
  };
  useEffect(() => {
    if (cursor.current && cursor) {
      // cursor.current.addEventListener('click', scrollTest);
    }
    return () => {
      // cursor.current.removeEventListener('click', scrollTest);
    };
  });

  return (
    <div css={progressBar}>
      <div css={cursorStyle} ref={cursor}></div>
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
