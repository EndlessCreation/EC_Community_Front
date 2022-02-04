import { displayData,scrollData, storyBoard, interaction } from "./type";

class PlayData{
        displayData : displayData= {
            innerWidth: 0,
            innerHeight: 0,
            type: null,
            
        };
        scrollData: scrollData = {
            wholeScroll: 0,
            currentScroll: 0,
            section: null,
        };
        storyBoard: Array<storyBoard> = [];
        interaction: Array<interaction> = [];
}

// object import하면 읽기전용이라 값을 수정할수가 읎다
const playData = new PlayData();
export default playData;




// export let displayData: displayData = {
//     innerWidth: 0,
//     innerHeight: 0,
//     type:null,
// };

// export let scrollData: scrollData = {
//     wholeScroll: 0,
//     currentScroll: 0,
//     section:null,
// };
// export let storyBoard: storyBoard = [];

// export let interaction = [];



