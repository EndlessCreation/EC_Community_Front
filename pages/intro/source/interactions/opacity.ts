import { cssUpdateProps } from "../utils/type";
import { calCssValue } from "../utils/utils";

export default function valOpacity({ DOM, interActionProp,progressRatio }: cssUpdateProps) {
    
    const { startRatio, endRatio,  value } = interActionProp;
    const opacityCssValue = calCssValue({ startRatio , endRatio, progressRatio, value });
    if(DOM) DOM.style.opacity = `${opacityCssValue && opacityCssValue.toFixed(4) }`

}
