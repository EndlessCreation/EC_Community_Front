/** @jsxImportSource @emotion/react */
import React, { useEffect, useRef } from 'react';
import playData from '../source/utils/playData';
import { css } from '@emotion/react';
import { storyBoard } from '../source/utils/type';
import { calStartPoint, calPlayLength } from '../source/utils/utils';

const titleInit = (playId: number) => {
  const titleStory: storyBoard = {
    playId: playId,
    DOM: null,
    startScrollValue: 0,
    endScrollValue: 0,
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
            startRatio: 0.7,
            endRatio: 1,
            value: [
              [1, 0, 0, 1, 0, 0],
              [2, 0, 0, 2, 0, 0],
            ],
          },
        ],
      },
    ],
  };
  //playData 인스턴스에 정보 등록
  playData.storyBoard[playId] = titleStory;
};

const Title = ({ playId }: { playId: number }) => {
  const titleRef = useRef<HTMLDivElement>(null);
  //   console.log('title');

  titleInit(playId);

  useEffect(() => {
    //title 컴포넌트의 기본 정보 세팅,
    const displayData = playData.displayData;
    const thisStory = playData.storyBoard[playId];
    //storyBoard에 인터랙션 등록
    if (titleRef.current && titleRef && thisStory) {
      thisStory.DOM = titleRef.current;
      thisStory.startScrollValue = calStartPoint(displayData.innerHeight, thisStory.startPoint);
      thisStory.playLength = calPlayLength(displayData.innerHeight, thisStory.playLength);
      thisStory.endScrollValue = thisStory.startScrollValue + thisStory.playLength;
    }
  });
  return (
    <div ref={titleRef} css={titleStyle}>
      <div>안녕 하세요?</div>
    </div>
  );
};

export default Title;

const titleStyle = css`
  position: fixed;
  z-index: 1;
  top: 50vh;
  left: 50vw;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 20px;
`;
