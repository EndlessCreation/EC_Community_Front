import setDisplay from "../settings/setDisplay";
import {checkCurrentScroll} from "../settings/setScroll";




export const addEvent = () => {
    //초기에 한번 실행하고 이벤트 등록해주어야한다,
    setDisplay();
    window.addEventListener('load', setDisplay);
    window.addEventListener('scroll', checkCurrentScroll);
    window.addEventListener('resize', setDisplay);

    // window.addEventListener('scroll', ()=>{console.log(playData)})
}


