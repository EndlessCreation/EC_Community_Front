import playData from "../utils/playData";
import { sectionElem } from "../utils/type";



//이 함수를 계속 돌려야한다.
export default function playAction() {

    //섹션 탐색해서, 현재 실행해야할 id리스트 가져오기
    const idList = getIdListFromSection(playData.scrollData.section!);
    if (idList) {
        for (let playId of idList) {
            // runActionById(playId);
            console.log(playData.interaction[playId]);
            console.log(playData.storyBoard[playId]?.actionList)

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


const switchByType = (type : string) => {
    switch (type) {
        case "blur": { }
        case "opacity": { }
        case "position": { }
        case "scale": { }
        case "fade": { }
    }

    


}
