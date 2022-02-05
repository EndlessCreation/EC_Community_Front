
//현재 보고있는 기기 디스플레이에 대한 정보, 너비, 높이
export type displayData = {
    type: string | null,
    innerWidth: number,
    innerHeight: number,
};


//전체 스크롤의 길이, 현재 스크롤 위치, 현재 동작중인 인터랙션
export type scrollData = {
    wholeScroll: number,
    currentScroll: number,
    section: Array<sectionElem> | null;
};


//인터렉션 재생 시작점 끝점 DOM에 대한 정보, 변화 X, 이걸조회해서 처음 스크롤상태를 정하고싶었으나
export type storyBoard = {
    playId: number,
    DOM: HTMLElement | HTMLDivElement | null,
    startPoint: number,
    playLength: number,
    startScrollValue: number,
    endScrollValue: number,
    actionList: Array<attribute>,
};



//인터랙션의 속성값들의 상태 변화 O -> 필요없을듯
export type interaction = {
    playId: number,
    progressRatio: number,
    value: {
    }
};



export type attribute = {
    type: string,
    props: Array<interActionProp>
}
export type interActionProp = {
    start: number,
    end: number,
    value: [number,number]
  }
export type sectionElem = {
    
        startPoint: number,
        endPoint:number,
        idList: Array<number>
}

