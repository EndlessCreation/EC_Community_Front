import { cssUpdateProps, storyBoard } from "../utils/type";
import { calCssValue, calProgressRatio } from "../utils/utils";
import { valBlur, valFade, valOpacity, valPosition, valScale } from "../interactions";



export const runInteractionByType = (story: storyBoard) => {
    const { actionList, DOM } = story;
    const cssValue = getCssValue(story)!;
    const cssUpdateProps : cssUpdateProps = { DOM:DOM, cssValue };
    for (let attribute of actionList) {
        switch (attribute.type) {
            case "blur": {
                // return valBlur(cssUpdateProps)
            }
            case "opacity": {
                return valOpacity(cssUpdateProps);
            }
            case "position": {
                // return valPosition(cssUpdateProps)

            }
            case "scale": {
                // return valScale(cssUpdateProps)

            }
            case "fade": {
                // return valFade(cssUpdateProps)

            }
            default: {
                console.log('actionList.type = ',)
                return 0;
            }
        }
    }
}

const getCssValue = (story: storyBoard) => {
        const currentScrollValue = window.pageYOffset;
        const { startScrollValue, endScrollValue,actionList } = story;
        for (let action of actionList) {
            for (let prop of action.props) {
                let ratio = calProgressRatio({ start: startScrollValue, end: endScrollValue, progress: currentScrollValue });
                if (prop.start < ratio && ratio < prop.end) {
                    return calCssValue({ startRatio: prop.start, endRatio: prop.end, progressRatio: ratio, value:prop.value });
                }
                else {
                    continue;
                }
            }
        }
    }
    

export const concealInteraction = () => {
     
    console.log(123);

 }