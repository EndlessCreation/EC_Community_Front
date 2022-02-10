import { cssUpdateProps, storyBoard } from '../utils/type';
import { calProgressRatio } from '../utils/utils';
import { valBlur, valOpacity, valMatrix, valBackgroundColor } from '../interactions';
import playData from '../utils/playData';

export const runInteractionByType = (story: storyBoard) => {
  const currentScrollValue = playData.scrollData.currentScroll;
  // console.log(currentScrollValue)
  const { startScrollValue, endScrollValue, actionList, DOM } = story;
  const progressRatio = calProgressRatio({
    start: startScrollValue,
    end: endScrollValue,
    progress: currentScrollValue,
  });

  for (let action of actionList) {
    for (let interActionProp of action.interActionProps) {
      const { startRatio, endRatio } = interActionProp;
      if (startRatio < progressRatio && progressRatio < endRatio) {
        if (DOM) {
          DOM.style.visibility = 'visible';
          DOM.style.zIndex = '0';
        }
        const cssUpdateProps: cssUpdateProps = { DOM, interActionProp, progressRatio };
        switch (action.type) {
          case 'blur': {
            valBlur(cssUpdateProps);
            continue;
          }
          case 'opacity': {
            valOpacity(cssUpdateProps);
            continue;
          }
          case 'matrix': {
            valMatrix(cssUpdateProps);
            continue;
          }
          case 'backgroundColor': {
            valBackgroundColor(cssUpdateProps);
            continue;
          }
          default: {
            continue;
          }
        }
      }
    }
  }
};

export const concealInteraction = (story: storyBoard) => {
  const { DOM } = story!;
  if (DOM) {
    DOM.style.zIndex = '-1';
    DOM.style.visibility = 'hidden';
  }
};
