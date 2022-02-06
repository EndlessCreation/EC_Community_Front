//스크롤 관련 세팅 코드는 여기에

import playData from '../utils/playData';
import { sectionElem } from '../utils/type';

//스토리보드 인터렉션 참조해서 전체 스크롤 크기 설정
export const setWholeHeight = () => {
    const rootDOM: HTMLElement = document.querySelector("#root")!;
    const section: Array<sectionElem> = playData.scrollData.section!;
    const wholeScroll = section[section.length - 1].endPoint;

    rootDOM.style.height = `${wholeScroll  + window.innerHeight}px`;

    playData.scrollData.wholeScroll = wholeScroll;
}
