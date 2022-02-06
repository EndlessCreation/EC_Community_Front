import playData from "../utils/playData";
import { attribute, interActionProp, cssUpdateProps } from "../utils/type";
import { calCssValue, calProgressRatio } from "../utils/utils";




export default function valOpacity({ DOM, cssValue }: cssUpdateProps) {
    if(DOM) DOM.style.opacity = `${cssValue && cssValue.toFixed(4) }`

}

    // const currentScrollValue = window.pageYOffset;
    // const { startScrollValue, endScrollValue } = scrollData;
    // for (let prop of props) {
    //     let ratio = calProgressRatio({start : startScrollValue, end : endScrollValue, progress:currentScrollValue});
    //     let { start, end, value } = prop;
    //     if (start < ratio && ratio < end) { 
    //         return calCssValue({startRatio: start, endRatio: end, progressRatio:ratio, value});
    //     }
    //     else {
    //         continue;            
    //     }
    // }