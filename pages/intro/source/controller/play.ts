import playData from "../utils/playData";
import { sectionElem, storyBoard } from "../utils/type";
import { valBlur, valFade, valOpacity, valPosition, valScale } from "../interactions";



//이 함수를 계속 돌려야한다.
export default function playAction() {
    const section = playData.scrollData.section!
    //섹션 탐색해서, 현재 실행해야할 id리스트 가져오기
    const idList = getIdListFromSection(section);
    if (idList) {
        for (let playId of idList) {
            const story: storyBoard = playData.storyBoard[playId];
            //인터랙션 type별로 구분해서 함수실행, 
            const cssValue = switchByType(story)!;
            //DOM에 실제로 속성 적용
            console.log(
                cssValue?cssValue.toFixed(4) : "");

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







const switchByType = ({startScrollValue, endScrollValue, actionList} : storyBoard) => {
    for (let action of actionList) {
        const scrollData:{startScrollValue:number, endScrollValue: number} = {startScrollValue,endScrollValue };
        switch (action.type) {
            // case "blur": {
            //     return valBlur()
            // }
            case "opacity": {
                return valOpacity(scrollData, action.props);
            }
            // case "position": {
            //     return valPosition()

            // }
            // case "scale": {
            //     return valScale()

            // }
            // case "fade": {
            //     return valFade()

            // }
            default: {
                console.log('actionList.type = ',)
                return 0;
            }
        }
    }
}