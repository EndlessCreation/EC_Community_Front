//각종 계산들을 모아놓은 파일,


//인터렉션 컴포넌트 높이 계산
export const calStartPoint = (innerHeight: number, startPoint: number) => {
    return innerHeight *startPoint
}
export const calPlayLength = (innerHeight:number, playLength:number) => {
    return innerHeight *playLength
}

export const calProgressRatio = ({ start, end, progress }: {start:number, end:number, progress:number }) => {
    return ((progress - start) / (end - start));
}

export const calCssValue = ({ startRatio, endRatio, progressRatio, value}:{startRatio:number, endRatio:number, progressRatio:number, value:[number,number]}) => {
    let partRatio: number = calProgressRatio({start:startRatio, end:endRatio,progress:progressRatio});
    let cssValue:number = partRatio * value[1] + (1 - partRatio) * value[0];
    return cssValue;
}
export const makeAsync =  async (callback :  ()=>void) => { 
    callback();
}

