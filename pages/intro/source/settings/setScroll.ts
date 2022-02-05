//스크롤 관련 세팅 코드는 여기에

import playData from '../utils/playData';
import { sectionElem } from '../utils/type';



// export const checkCurrentScroll = () => {
//     console.log(window.pageYOffset);
//     playData.scrollData.currentScroll = window.pageYOffset;
// }


//스토리보드 인터렉션 참조해서 전체 스크롤 크기 설정
export const setWholeHeight = () => {
    const rootDOM: HTMLElement = document.querySelector("#root")!;
    const section:Array<sectionElem> = playData.scrollData.section!;
    console.log(
        section[section.length - 1].endPoint
    );
    rootDOM.style.height = `${section[section.length - 1].endPoint}px`;
    // playData.scrollData.wholeScroll = document.body.scrollHeight;
}
