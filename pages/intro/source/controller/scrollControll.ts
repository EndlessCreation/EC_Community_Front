import playData from "../utils/playData";
import playAction from "./play";

export const scrollControll = (callback : () => void) => {
  if (Math.abs(window.pageYOffset - playData.scrollData.currentScroll) > 100) {
    requestAnimationFrame(loop);
  }
  else { 
    playData.scrollData.currentScroll = window.pageYOffset;
    callback();
  }
}









export const loop = () => {
  const acc = 0.05;
  const scrollGap = (window.pageYOffset - playData.scrollData.currentScroll)
  console.log('looop',Math.abs(scrollGap), playData.scrollData.currentScroll, window.pageYOffset)

  playData.scrollData.currentScroll += Math.round(parseInt((scrollGap * acc).toFixed(1)));
  playAction();
  if (Math.abs(scrollGap* acc) < 1) { 
    // console.log('scrollGap cut')
    cancelAnimationFrame(playData.scrollData.rafId);
    return
  }
    if (Math.abs(window.pageYOffset - playData.scrollData.currentScroll) < 2) {
      // console.log('pageYoffset cut')
      cancelAnimationFrame(playData.scrollData.rafId);
    return
    }
    playData.scrollData.rafId = requestAnimationFrame(loop);
  
  };