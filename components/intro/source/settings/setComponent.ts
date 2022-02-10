import { RefObject } from 'react';
import playData from '../utils/playData';
import { action, storyBoard } from '../utils/type';
import { calPlayLength, calStartPoint } from '../utils/utils';

export const componentInit = ({
  playId,
  startPoint,
  playLength,
  actionList,
}: {
  playId: string;
  startPoint: number;
  playLength: number;
  actionList: Array<action>;
}) => {
  const story: storyBoard = {
    playId: playId,
    DOM: null,
    startScrollValue: 0,
    endScrollValue: 0,
    startPoint: startPoint,
    playLength: playLength,
    actionList: [...actionList],
  };
  //playData 인스턴스에 정보 등록
  playData.storyBoard[playId] = story;
};

export const componentSetting = ({
  playId,
  ref,
}: {
  playId: string;
  ref: RefObject<HTMLDivElement>;
}) => {
  //content 컴포넌트의 기본 정보 세팅,
  const displayData = playData.displayData;
  const thisStory = playData.storyBoard[playId];

  //storyBoard에 인터랙션 등록
  if (ref && ref.current && thisStory) {
    thisStory.DOM = ref.current;
    thisStory.startScrollValue = calStartPoint(displayData.innerHeight, thisStory.startPoint);
    thisStory.playLength = calPlayLength(displayData.innerHeight, thisStory.playLength);
    thisStory.endScrollValue = thisStory.startScrollValue + thisStory.playLength;
  }
};
