//스크롤 관련 세팅 코드는 여기에

import playData from '../utils/playData';
import { sectionElem } from '../utils/type';

//스토리보드 인터렉션 참조해서 전체 스크롤 크기 설정
export const setWholeHeight = () => {
  const rootDOM: HTMLElement = document.querySelector('#intro-root')!;
  const section: Array<sectionElem> = playData.scrollData.section!;
  const wholeScroll = section[section.length - 1] && section[section.length - 1].endPoint;
  if (wholeScroll) {
    rootDOM.style.height = `${wholeScroll}px`;
  }
  playData.scrollData.wholeScroll = wholeScroll;
};
