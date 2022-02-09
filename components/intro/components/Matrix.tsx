/** @jsxImportSource @emotion/react */
import React, { useEffect, useRef } from 'react';
import playData from '../source/utils/playData';
import { css } from '@emotion/react';
import { storyBoard } from '../source/utils/type';
import { calStartPoint, calPlayLength } from '../source/utils/utils';

const matrixInit = (playId: number) => {
  const contentStory: storyBoard = {
    playId: playId,
    DOM: null,
    startScrollValue: 0,
    endScrollValue: 0,
    startPoint: 3,
    playLength: 4,
    actionList: [
      {
        //여기서 애니메이션 어떻게 할건지 설정 해주기
        type: 'matrix',
        interActionProps: [
          {
            //시작비율, 끝비율, (0~1) 실제값,
            startRatio: 0,
            endRatio: 0.25,
            value: [
              [1, 0, 0, 1, 0, 0],
              [1, 0, 0, 1, 100, 100],
            ],
          },
          {
            startRatio: 0.25,
            endRatio: 0.5,
            value: [
              [1, 0, 0, 1, 100, 100],
              [2, 0, 0, 2, 100, 100],
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
            startRatio: 0.5,
            endRatio: 0.75,
            value: [
              [2, 0, 0, 2, 100, 100],
              [2, 0, 0, 2, 0, 0],
            ],
          },
          {
            startRatio: 0.75,
            endRatio: 1,
            value: [
              [2, 0, 0, 2, 0, 0],
              [1, 0, 0, 2, 0, 0],
            ],
          },
        ],
      },
    ],
  };

  //playData 인스턴스에 정보 등록
  playData.storyBoard[playId] = contentStory;
};

const Matrix = ({ playId }: { playId: number }) => {
  const matrixRef = useRef<HTMLDivElement>(null);

  matrixInit(playId);

  useEffect(() => {
    //content 컴포넌트의 기본 정보 세팅,
    const displayData = playData.displayData;
    const thisStory = playData.storyBoard[playId];
    //storyBoard에 인터랙션 등록
    if (matrixRef.current && matrixRef && thisStory) {
      thisStory.DOM = matrixRef.current;
      thisStory.startScrollValue = calStartPoint(displayData.innerHeight, thisStory.startPoint);
      thisStory.playLength = calPlayLength(displayData.innerHeight, thisStory.playLength);
      thisStory.endScrollValue = thisStory.startScrollValue + thisStory.playLength;
    }
  });
  return (
    <div ref={matrixRef} css={matrixStyle}>
      이건 매트릭스
    </div>
  );
};

export default Matrix;

const matrixStyle = css`
  position: fixed;
  z-index: 1;
  top: 50vh;
  left: 50vw;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
