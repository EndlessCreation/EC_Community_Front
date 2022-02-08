import { cssUpdateProps, storyBoard } from "../utils/type";
import { calProgressRatio } from "../utils/utils";
import { valBlur, valOpacity, valMatrix } from "../interactions";
import playData from "../utils/playData";



export const runInteractionByType = (story: storyBoard) => {

    const currentScrollValue = playData.scrollData.currentScroll;
    // console.log(currentScrollValue)
    const { startScrollValue, endScrollValue, actionList, DOM } = story;
    const progressRatio = calProgressRatio({ start: startScrollValue, end: endScrollValue, progress: currentScrollValue });
    
    
    for (let action of actionList) {
        for (let interActionProp of action.interActionProps) {
            const { startRatio, endRatio } = interActionProp;
            if (startRatio < progressRatio && progressRatio < endRatio) {
                DOM && (DOM.style.display = 'flex');
                const cssUpdateProps: cssUpdateProps = { DOM, interActionProp, progressRatio};
                switch (action.type) {
                    case "blur": {
                        valBlur(cssUpdateProps)
                        continue;
                    }
                    case "opacity": {
                        valOpacity(cssUpdateProps);
                        continue;

                    }
                    case "matrix": {
                        valMatrix(cssUpdateProps);
                        continue;

                    }

                }
            }
        }
    }
}

export const concealInteraction = (story: storyBoard) => {
    const { DOM } = story!;
    DOM && (DOM.style.display = "none"); 
 }