import setDisplay from "./setDisplay";
// import {checkCurrentScroll} from "./setScroll";
import setStorySection from "./setStorySection";
import playAction from "../controller/play";
import { setWholeHeight } from "./setScroll";
import { makeAsync } from "../utils/utils";





export const addEvent = () => {
    window.addEventListener('resize', () => {
        setDisplay();
        setStorySection();
    });
    window.addEventListener('scroll', () => {
        playAction();
});


}



export const initSettingBeforeRender = () => {
    (async () => { 
        await makeAsync(setDisplay);
    })();
  
}

export const initSettingAfterRender = () => {

    (async () => { 
        await makeAsync(setStorySection);
        await makeAsync(setWholeHeight);
    })();
}