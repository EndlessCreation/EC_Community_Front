/** @jsxImportSource @emotion/react */
import React, { useEffect, useRef } from 'react';
import playData from '../source/utils/playData';
import { css } from '@emotion/react';
import { storyBoard } from '../source/utils/type';
import { calStartPoint, calPlayLength } from '../source/utils/utils';

const contentInit = (playId: number) => {
  const contentStory: storyBoard = {
    playId: playId,
    DOM: null,
    startScrollValue: 0,
    endScrollValue: 0,
    startPoint: 2,
    playLength: 2,
    actionList: [
      {
        //여기서 애니메이션 어떻게 할건지 설정 해주기
        type: 'blur',
        interActionProps: [
          {
            //시작비율, 끝비율, (0~1) 실제값,
            startRatio: 0,
            endRatio: 0.5,
            value: [0, 40],
          },
          {
            startRatio: 0.5,
            endRatio: 1,
            value: [40, 0],
          },
        ],
      },
    ],
  };

  //playData 인스턴스에 정보 등록
  playData.storyBoard[playId] = contentStory;
};

const Contents = ({ playId }: { playId: number }) => {
  const contentRef = useRef<HTMLDivElement>(null);

  contentInit(playId);

  useEffect(() => {
    //content 컴포넌트의 기본 정보 세팅,
    const displayData = playData.displayData;
    const thisStory = playData.storyBoard[playId];
    //storyBoard에 인터랙션 등록
    if (contentRef.current && contentRef && thisStory) {
      thisStory.DOM = contentRef.current;
      thisStory.startScrollValue = calStartPoint(displayData.innerHeight, thisStory.startPoint);
      thisStory.playLength = calPlayLength(displayData.innerHeight, thisStory.playLength);
      thisStory.endScrollValue = thisStory.startScrollValue + thisStory.playLength;
    }
  });
  return (
    <div ref={contentRef} css={contentStyle}>
      131232
    </div>
  );
};

export default Contents;

const contentStyle = css`
  position: fixed;
  z-index: 0;
  top: 50vh;
  left: 50vw;
  transform: translate(-50%, -50%);
  width: 50vw;
  height: 50vh;
  color: black;
  font-size: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-size: cover;
  background-image: url('https://images.unsplash.com/photo-1591181520189-abcb0735c65d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1917&q=80');
`;
