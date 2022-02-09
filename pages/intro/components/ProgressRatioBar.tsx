/** @jsxImportSource @emotion/react */

import React, { useEffect, useRef } from 'react';
import playData from '../source/utils/playData';
import { css } from '@emotion/react';
import { storyBoard } from '../source/utils/type';
import { calStartPoint, calPlayLength } from '../source/utils/utils';

const progressRatioInit = (playId: number) => {
  const titleStory: storyBoard = {
    playId: playId,
    DOM: null,
    startScrollValue: 0,
    endScrollValue: 0,
    startPoint: 0,
    playLength: 10,
    actionList: [
      {
        type: 'matrix',
        interActionProps: [
          {
            //시작비율, 끝비율, (0~1) 실제값,
            startRatio: 0,
            endRatio: 1,
            value: [
              [1, 0, 0, 1, 0, 0],
              [1, 0, 0, 1, 100, 100],
            ],
          },
        ],
      },
    ],
  };
  //playData 인스턴스에 정보 등록
  playData.storyBoard[playId] = titleStory;
};

const ProgressRatioBar = ({ playId }: { playId: number }) => {
  const progressBarRef = useRef<HTMLDivElement>(null);

  progressRatioInit(playId);
  useEffect(() => {
    const displayData = playData.displayData;
    const thisStory = playData.storyBoard[playId];
    //storyBoard에 인터랙션 등록
    if (progressBarRef.current && progressBarRef && thisStory) {
      thisStory.DOM = progressBarRef.current;
      thisStory.startScrollValue = calStartPoint(displayData.innerHeight, thisStory.startPoint);
      thisStory.playLength = calPlayLength(displayData.innerHeight, thisStory.playLength);
      thisStory.endScrollValue = thisStory.startScrollValue + thisStory.playLength;
    }
  });

  return (
    <div css={progressBar}>
      <div css={cursorStyle} ref={progressBarRef}></div>
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
