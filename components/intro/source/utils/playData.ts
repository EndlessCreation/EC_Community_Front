import { displayData, scrollData, storyBoard } from './type';

export class PlayData {
  displayData: displayData = {
    innerWidth: 0,
    innerHeight: 0,
    type: null,
  };
  scrollData: scrollData = {
    wholeScroll: 0,
    currentScroll: 0,
    section: null,
    rafId: null,
  };
  storyBoard: { [index: string]: storyBoard } = {};
}

// object import하면 읽기전용이라 값을 수정할수가 읎다
const playData: PlayData = new PlayData();
export default playData;
