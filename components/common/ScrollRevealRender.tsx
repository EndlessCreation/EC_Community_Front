import React, { useEffect, useRef, useState } from 'react';

import { useWindowScrollEvent } from '../../lib/hooks/useWindowScrollEvent';
import { checkIsInViewport } from '../../lib/util/checkIsInViewport';

export type ScrollRevealRenderProps = {
  children: React.ReactNode;
};

function ScrollRevealRender({ children }: ScrollRevealRenderProps) {
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

  return <div ref={elemRef}>{isInViewPort ? children : null}</div>;
}

export default ScrollRevealRender;
