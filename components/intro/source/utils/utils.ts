//각종 계산들을 모아놓은 파일,

import { action } from './type';

//인터렉션 컴포넌트 높이 계산
export const calStartPoint = (innerHeight: number, startPoint: number) => {
  return innerHeight * startPoint;
};
export const calPlayLength = (innerHeight: number, playLength: number) => {
  if (playLength === 0) {
    return innerHeight;
  }
  return innerHeight * playLength;
};

export const calProgressRatio = ({
  start,
  end,
  progress,
}: {
  start: number;
  end: number;
  progress: number;
}) => {
  return (progress - start) / (end - start);
};

export const calCssValue = ({
  startRatio,
  endRatio,
  progressRatio,
  value,
}: {
  startRatio: number;
  endRatio: number;
  progressRatio: number;
  value: [number, number];
}) => {
  let partRatio: number = calProgressRatio({
    start: startRatio,
    end: endRatio,
    progress: progressRatio,
  });
  let cssValue: number = partRatio * value[1] + (1 - partRatio) * value[0];
  return cssValue;
};
export const makeAsync = async (callback: () => void) => {
  callback();
};

export const sliceRGBA = (colorData: string) => {
  //# 붙이는거 안붙이는거 체크
  const startIndex = colorData[0] === '#' ? 1 : 0;
  let rgba = [
    colorData.slice(startIndex, startIndex + 2),
    colorData.slice(startIndex + 2, startIndex + 4),
    colorData.slice(startIndex + 4, startIndex + 6),
    colorData.slice(startIndex + 6, startIndex + 8) || 'FF', //a값 없으면 FF로 고정
  ];
  return rgba.map((value) => parseInt(`0x${value}`));

  // rgba -> [ r, g ,b ,a ] 10진수로 리턴
};

export const initValue = ({
  playId,
  startPoint,
  playLength,
  actionList,
}: {
  playId: string;
  startPoint: number;
  playLength: number;
  actionList: Array<action>;
}) => ({
  startPoint: startPoint,
  playLength: playLength,
  startScrollValue: 0,
  endScrollValue: 0,
  DOM: null,
  playId: playId,
  actionList: actionList,
});
