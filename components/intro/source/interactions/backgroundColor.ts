import { cssUpdateProps } from '../utils/type';
import { calCssValue, sliceRGBA } from '../utils/utils';

export default function valBackgroundColor({
  DOM,
  interActionProp,
  progressRatio,
}: cssUpdateProps) {
  const { startRatio, endRatio, value } = interActionProp;

  const prevRGBA = sliceRGBA(value[0]);
  const nextRGBA = sliceRGBA(value[1]);
  const color = [];
  for (let i = 0; i < 4; i++) {
    let RGBAvalue = calCssValue({
      startRatio,
      endRatio,
      progressRatio,
      value: [prevRGBA[i], nextRGBA[i]],
    });
    color[i] = RGBAvalue.toFixed(0);
  }
  //   console.log(color, DOM);
  if (DOM) DOM.style.backgroundColor = `rgba(${color[0]},${color[1]},${color[2]},${color[3]})`;
}
