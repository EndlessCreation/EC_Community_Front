import { cssUpdateProps } from "../utils/type";
import { calCssValue } from "../utils/utils";



export default function valMatrix({ DOM, interActionProp,progressRatio }: cssUpdateProps) {

    const { startRatio, endRatio,  value } = interActionProp;

    const matrixValue =[];
    if (value[0].length !== 6 || value[1].length !== 6) { 
        console.log("matrix 값 설정 오류 체크좀요")
    }

    
    for (let i = 0; i < value[0].length; i++) {
        if (value[0][i] === value[1][i]) {
            matrixValue[i] = value[0][i];
        }
        else { 
            let valuePair: [number, number] =[value[0][i],value[1][i]];
            matrixValue[i] =  calCssValue({ startRatio , endRatio, progressRatio, value:valuePair }).toFixed(3);
        }
    }


    if (DOM) {

        DOM.style.transform = `matrix(${matrixValue})`
        DOM.style.webkitTransform = `matrix(${matrixValue})`
    }
    
    }