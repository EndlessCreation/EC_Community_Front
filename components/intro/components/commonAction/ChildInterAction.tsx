/** @jsxImportSource @emotion/react */
import React, {
  ReactChild,
  useEffect,
  RefObject,
  JSXElementConstructor,
  ReactElement,
} from 'react';
import { componentInit, componentSetting } from '../../source/settings/setComponent';
import { storyBoard } from '../../source/utils/type';

const ChildrenAction = ({
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

  function isChild(arg: any): arg is ReactElement<any, string | JSXElementConstructor<any>> {
    return typeof arg !== 'string' || arg! == 'number';
  }

  const child = React.Children.map(children, (child) => {
    if (isChild(child))
      return React.cloneElement(child, {
        ref: refProp,
      });
  });
  // console.log(child);
  return <div> {child}</div>;
};

export default ChildrenAction;
