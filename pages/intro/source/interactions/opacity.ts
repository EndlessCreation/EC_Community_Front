import playData from "../utils/playData";
import { attribute, interActionProp } from "../utils/type";
import { calCssValue, calProgressRatio } from "../utils/utils";




export default function valOpacity( scrollData:{startScrollValue:number, endScrollValue: number}, props:Array<interActionProp> ) {
    const currentScrollValue = window.pageYOffset;
    const { startScrollValue, endScrollValue } = scrollData;
    for (let prop of props) {
        let ratio = calProgressRatio({startScrollValue, endScrollValue,currentScrollValue});
        let { start, end, value } = prop;
        if (start < ratio && ratio < end) { 
            return calCssValue({startRatio: start, endRatio: end, progressRatio:ratio, value});
        }
        else {
            continue;            
        }
    }
}


// export const calcCssValues = (sceneInfo, layoutData, values) => {
//     let rv;

//     // const scrollData = getScrollData(sceneInfo, layoutData, values); //스크롤 데이터 받아오기

//     let yOfCurrent,
//         scrollHeight,
//         sceneScrollRatio,
//         partScrollStart, //startScrollValue
//         partScrollEnd, //endScrollValue
//         partScrollHeight, 
//         partScrollRatio;
    
    
//     const { yOfCurrent: nowY, sceneScrollRatio: sceneRatio } = scrollData;
//     const [startValue, endValue] = values;
//     if (values.length === 3) {
//       const {
//         partScrollStart: start,
//         partScrollEnd: end,
//         partScrollHeight: height,
//       } = scrollData;
//       // 스타트와 앤드가 있는 애니메이션일때, start end 그때의 height 값 가져옴
//       if (
//         nowY >= start && //시작점을 지나고
//         nowY <= end //마지막점을 지나지 않아씅면
//       ) {
//         rv =
//           startValue + // 처음 시작 css값
//           ((nowY - start) / height) * //애니메이션 내에서 이동한 비율에
//             (endValue - startValue); //변화값 크기만큼 곱해줌
//       } else if (nowY < start) {
//         //시작점 안지났으면
//         rv = startValue; //시작밸류
//       } else if (nowY > end) {
//         //end 지났으면
//         rv = endValue; //끝밸류
//       }
//     } else {
//       // start, end값이 없으면
  
//       rv = startValue + sceneRatio * (endValue - startValue); //전체 씬의 스크롤ratio를 반영해서 적용,
//     }
  
//     // console.log("씬 비율 :" + sceneRatio);
//     // console.log(rv);
//     //rv는 0~1 사이의 값을 리턴
  
//     rv = rv.toFixed(4);
//     // console.log(rv);
//     return rv;
//   };
  