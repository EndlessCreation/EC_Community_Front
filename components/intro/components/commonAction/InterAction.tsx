/** @jsxImportSource @emotion/react */
import React, { ReactChild, useEffect, useRef, RefObject } from 'react';
import { componentInit, componentSetting } from '../../source/settings/setComponent';
import { storyBoard } from '../../source/utils/type';

const InterAction = ({
  refProp,
  initValue,
  children,
}: {
  refProp: RefObject<HTMLDivElement>;
  initValue: storyBoard;
  children: ReactChild | Array<ReactChild>;
}) => {
  const { playId, startPoint, playLength, actionList } = initValue;
  componentInit({ playId, startPoint, playLength, actionList });

  useEffect(() => {
    componentSetting({ playId, ref: refProp });
  });
  return <div ref={refProp}>{children}</div>;
};

export default InterAction;
