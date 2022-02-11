import { cssUpdateProps } from "../utils/type";
import { calCssValue } from "../utils/utils";



export default function valBlur({ DOM, interActionProp, progressRatio}: cssUpdateProps) {

    const { startRatio, endRatio, value } = interActionProp;
    const blurCssValue = calCssValue({ startRatio, endRatio, progressRatio, value });
    if (DOM)
        if (!DOM.firstChild || DOM.firstChild.id !== "blur-filter") {
        const filterElem = document.createElement('div');
        filterElem.id = "blur-filter";
        filterElem.style.width = "100%";
        filterElem.style.height = "100%";
        filterElem.style.position = "absolute";
        filterElem.style.top = "0px";
        filterElem.style.left = "0px";
        DOM.insertBefore(filterElem, DOM.firstChild);


    }



    if (DOM.firstElementChild) {      
            DOM.firstElementChild.style.backdropFilter! = `blur(${blurCssValue && blurCssValue.toFixed(2)}px)`;
            DOM.firstElementChild.style.webkitBackdropFilter = `blur(${blurCssValue && blurCssValue.toFixed(2)}px)`
        }
    }