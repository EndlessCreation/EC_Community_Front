import setDisplay from './setDisplay';
import setStorySection from './setStorySection';
import playAction from '../controller/play';
import { setWholeHeight } from './setScroll';
import { makeAsync } from '../utils/utils';
import { scrollControll } from '../controller/scrollControll';

export const addEvent = () => {
  window.addEventListener('resize', () => {
    setDisplay();
    setStorySection();
  });
  window.addEventListener('scroll', () => {
    // console.log(window.pageYOffset)
    scrollControll(playAction);
  });
};

export const initSettingBeforeRender = () => {
  (async () => {
    await makeAsync(setDisplay);
  })();
};

export const initSettingAfterRender = () => {
  (async () => {
    await makeAsync(setStorySection);
    await makeAsync(setWholeHeight);
    await makeAsync(playAction);
  })();
};
