/** @jsxImportSource @emotion/react */
import React, { useEffect, useRef } from 'react';
import playData from '../source/utils/playData';
import { css } from '@emotion/react';
import { storyBoard, interaction } from '../source/utils/type';
import { calStartPoint, calPlayLength } from '../source/utils/utils';

const titleInit = (playId: number) => {
  const titleStory: storyBoard = {
    playId: playId,
    DOM: null,
    startScrollValue: 100,
    endScrollValue: 100,
    startPoint: 0,
    playLength: 2,
    actionList: {
      //여기서 애니메이션 어떻게 할건지 설정 해주기
      opacity: [
        {
          //시작비율, 끝비율, (0~1) 실제값,
          start: 0,
          end: 0.3,
          value: [0, 1],
        },
        {
          start: 0.7,
          end: 1,
          value: [1, 0],
        },
      ],
    },
  };
  const titleAnimation: interaction = {
    playId: playId,
    progressRatio: 0,
    value: {},
  };
  //playData 인스턴스에 정보 등록
  playData.storyBoard[playId] = titleStory;
  playData.interaction[playId] = titleAnimation;
};

const Title = ({ playId }: { playId: number }) => {
  const titleRef = useRef<HTMLDivElement>(null);
  //   console.log('title');

  titleInit(playId);

  useEffect(() => {
    //title 컴포넌트의 기본 정보 세팅,
    const displayData = playData.displayData;
    const thisStory = playData.storyBoard[playId];
    const thisAnimation = playData.interaction[playId];
    //storyBoard에 인터랙션 등록
    if (titleRef.current && titleRef && thisStory) {
      thisStory.DOM = titleRef.current;
      thisStory.startScrollValue = calStartPoint(displayData.innerHeight, thisStory.startPoint);
      thisStory.playLength = calPlayLength(displayData.innerHeight, thisStory.playLength);
      thisStory.endScrollValue = thisStory.startScrollValue + thisStory.playLength;
    }
    // if (titleRef.current && titleRef && thisStory && thisAnimation) {
    //   //   thisStory.DOM.addEventListener
    // }
    // console.log(thisStory);
    // console.log(thisAnimation);
  });
  return (
    <div ref={titleRef} css={titleStyle}>
      안녕 하세요?
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
