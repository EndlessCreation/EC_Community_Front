//모든 컴포넌트의 인터랙션 섹션 나누는거 여기에

import  { PlayData } from "../utils/playData";



const dummyStoryBoardData = [

    {
        startScrollValue: 0,
        endScrollValue: 100,
        playId: 0,
        playLength: 755,
        startPoint: 2,
    },
    {
        startScrollValue: 100,
        endScrollValue: 200,
        playId: 1,
        playLength: 755,
        startPoint: 2,
    },
    {
        startScrollValue: 150,
        endScrollValue: 250,
        playId: 2,
        playLength: 755,
        startPoint: 2,
    },
    {
        startScrollValue: 175,
        endScrollValue: 240,
        playId: 3,
        playLength: 755,
        startPoint: 2,
    },
    {
        startScrollValue: 230,
        endScrollValue: 300,
        playId: 4,
        playLength: 755,
        startPoint: 2,
        
    },
    {
        startScrollValue: 100,
        endScrollValue: 200,
        playId: 5,
        playLength: 755,
        startPoint: 2,
    },
]


//실행 인터랙션 개수가 달라지는거에 따라 섹션 나누기
export default function setStorySection(playData: PlayData) {
    



    console.log(playData);
    // const { storyBoard } = playData;
    const storyBoard = dummyStoryBoardData
    
    //결과 담을 코드
    const section = [];
    //애니메이션 시작점 끝점을 point 객체로 만들어 배열에 담는다
    const pointArr = [];
    //섹션 안에 재생되는 인터랙션 id들, 구간 서치가 끝날때마다 section에 push해준다.
    const temp: Array<number> = [];
    //섹션 시작점 끝점 정보, 구간서치가 끝날때마다 temp랑 같이 section에 push
    const check = { startPoint: 0, endPoint: 0 }
    



    //스토리보드 안에 있는 모든 인터랙션의 시작점 끝점 point로 만들기, type값을 start와 end로 구분해서 넣어준다
    for (let i = 0; i < storyBoard.length; i++) {
       pointArr.push( {point : storyBoard[i].startScrollValue, type:"start", id:storyBoard[i].playId})
       pointArr.push( {point : storyBoard[i].endScrollValue, type:"end", id:storyBoard[i].playId})
    }

    //스크롤 값에 따라 순서대로 정렬
    pointArr.sort((a, b) => {
        return a.point - b.point;
    })


    //포인트배열 전체 순회
    pointArr.forEach((point, index) => {

        //첫번째 point 처리
        if (index === 0) {
            check.startPoint = point.point;
            temp.push(point.id);
        }
        //나머지 점 처리
        else {
            //구간의 endpoint값에, 지금 조회하는 point 값을 넣고 섹션 추가
            check.endPoint = point.point;
            section.push({...check, arr:[...temp]})
            if (point.type === "start") {
            //포인트가 시작점이었을 경우, temp에 id 추가
            // console.log("push" ,point.id)
            temp.push(point.id);
            }
            else {
            //포인트가 끝점이었을 경우 temp에서 해당 Id값 제거
                // console.log("cut", point.id)
            temp = temp.filter((id)=>(id !== point.id));
            }
            //다음구간 서치를 위해 현재 포인트를 다시 시작점으로 만들기
            check.startPoint = point.point;
            check.endPoint = 0;
        }
        // console.log(index, temp)
    })


    //스크롤값이 start == end 인 경우 필터링으로 제거
    section = section.filter((point)=>(point.startPoint !== point.endPoint))
    console.log(section);
    return section;
}

