import { cssUpdateProps, storyBoard } from "../utils/type";
import { calCssValue, calProgressRatio } from "../utils/utils";
import { valBlur, valOpacity, valPosition, valScale } from "../interactions";



export const runInteractionByType = (story: storyBoard) => {

    const currentScrollValue = window.pageYOffset;
    const { startScrollValue, endScrollValue, actionList, DOM } = story;
    const progressRatio = calProgressRatio({ start: startScrollValue, end: endScrollValue, progress: currentScrollValue });
    
    
    for (let action of actionList) {
        for (let interActionProp of action.interActionProps) {
            const { startRatio, endRatio } = interActionProp;
            if (startRatio < progressRatio && progressRatio < endRatio) {
                DOM && (DOM.style.display = 'block');
                const cssUpdateProps: cssUpdateProps = { DOM, interActionProp, progressRatio};
                switch (action.type) {
                    // case "blur": {
                    //     return valBlur(cssUpdateProps)
                    // }
                    case "opacity": {
                        return valOpacity(cssUpdateProps);
                    }
                    // case "position": {
                    //     return valPosition(cssUpdateProps)

                    // }
                    // case "scale": {
                    //     return valScale(cssUpdateProps)
                    // }
                    default: {
                        console.log('actionList.type = ',)
                        return 0;
                    }
                }
            }
            else {
                continue;
            }
        }
    }
}

export const concealInteraction = (story: storyBoard) => {
    const { DOM } = story!;
    DOM && (DOM.style.display = "none"); 
 }