import React, { useEffect, useRef, useState } from 'react';
import { css, keyframes } from '@emotion/react';
import { styled } from '@mui/material';

import { useWindowScrollEvent } from '../../lib/hooks/useWindowScrollEvent';
import { checkIsInViewport } from '../../lib/util/checkIsInViewport';

export type ScrollRevealSlideAnimationProps = {
  children: React.ReactNode;
  startPosition?: number;
  speed?: number;
};

function ScrollRevealSlideAnimation({
  children,
  startPosition = 1,
  speed = 1.2,
}: ScrollRevealSlideAnimationProps) {
  const elemRef = useRef<HTMLDivElement>(null);
  const [isInViewPort, setIsInViewPort] = useState(checkIsInViewport(elemRef?.current!));

  useEffect(() => {
    // elemRef이 초기에 값이 바로 들어오지 않아
    // elemRef가 undefined가 아닐때 isInViewPort값을 다시 할당한다.
    setIsInViewPort(checkIsInViewport(elemRef?.current!));
  }, [elemRef?.current === undefined]);

  // 스크롤이 될때마다 element가 뷰포트 영역 안인지 체크한다.
  useWindowScrollEvent(() => {
    setIsInViewPort(checkIsInViewport(elemRef?.current!));
  });

  return (
    <Wrapper ref={elemRef} isInViewPort={isInViewPort} startPosition={startPosition} speed={speed}>
      {children}
    </Wrapper>
  );
}

export default ScrollRevealSlideAnimation;

const Wrapper = styled('div')<{
  isInViewPort: boolean;
  startPosition: number;
  speed: number;
}>`
  ${({ isInViewPort, startPosition, speed }) => {
    const [scaleFrom, scaleTo] = [`scale(0)`, `scale(1)`];
    const defaultStyle = css`
      transform: ${scaleFrom};
      opacity: 0;
      width: 100%;
    `;
    const keyframe = keyframes`
        0% { transform: ${scaleFrom}; opacity: 0; }
        ${(100 * (startPosition - 1)) / startPosition}% { transform: ${scaleFrom}; opacity: 0; }
        100% { transform: ${scaleTo}; opacity: 1; }
    `;

    const animationRule = css`
      ${keyframe} ${startPosition / speed}s ease;
    `;

    // isInViewPort가 true라면
    // 방향에 따라 translate(이동) 애니메이션을 실행한다.
    return css`
      ${!isInViewPort && defaultStyle}
      animation: ${isInViewPort && animationRule};
      width: 100%;
    `;
  }}
`;
