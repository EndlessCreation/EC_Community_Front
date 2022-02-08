import playData from "../utils/playData";
import { sectionElem, storyBoard} from "../utils/type";

import { concealInteraction, runInteractionByType } from "./valueControll";



//이 함수를 계속 돌려야한다.
export default function playAction() {
    const storyBoard = playData.storyBoard;
    const section = playData.scrollData.section!;


    //섹션 탐색해서, 현재 실행해야할 id리스트 가져오기
    const idList = getIdListFromSection(section);
    if (idList) {
        for (let i = 0; i < storyBoard.length; i++) {
            const {playId} = storyBoard[i];
            const currentStory: storyBoard = playData.storyBoard[playId];
            //idList 안에 있는 액션들은 실행
            if (idList.some((id) => id === playId)) {
                // 인터랙션 type별로 구분해서 함수실행, 
                runInteractionByType(currentStory);
                continue;
            }
            //없으면 DOM 숨겨주기
            else {
                concealInteraction(currentStory);
                // console.log("noPlay  = ", playId);
            }
        }
    }
}


const getIdListFromSection = (section: Array<sectionElem>) => {
    for (let i of section) {
        if ( i.startPoint < window.pageYOffset &&  window.pageYOffset  < i.endPoint) {
            return i.idList;
        }
    }
}








