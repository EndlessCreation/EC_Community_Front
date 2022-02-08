/** @jsxImportSource @emotion/react */
import React, { useEffect, useRef } from 'react';
import playData from '../source/utils/playData';
import { css } from '@emotion/react';
import { storyBoard } from '../source/utils/type';
import { calStartPoint, calPlayLength } from '../source/utils/utils';

const backgroundInit = (playId: number) => {
  const backgroundStory: storyBoard = {
    playId: playId,
    DOM: null,
    startScrollValue: 0,
    endScrollValue: 0,
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

  //playData 인스턴스에 정보 등록
  playData.storyBoard[playId] = backgroundStory;
};

const Background = ({ playId }: { playId: number }) => {
  const backgroundRef = useRef<HTMLDivElement>(null);

  backgroundInit(playId);

  useEffect(() => {
    //content 컴포넌트의 기본 정보 세팅,
    const displayData = playData.displayData;
    const thisStory = playData.storyBoard[playId];
    //storyBoard에 인터랙션 등록
    if (backgroundRef.current && backgroundRef && thisStory) {
      thisStory.DOM = backgroundRef.current;
      thisStory.startScrollValue = calStartPoint(displayData.innerHeight, thisStory.startPoint);
      thisStory.playLength = calPlayLength(displayData.innerHeight, thisStory.playLength);
      thisStory.endScrollValue = thisStory.startScrollValue + thisStory.playLength;
    }
  });
  return (
    <div ref={backgroundRef} css={backgroundStyle}>
      날좀보소
    </div>
  );
};

export default Background;

const backgroundStyle = css`
  position: fixed;
  z-index: 0;
  width: 100%;
  height: 100%;
`;
