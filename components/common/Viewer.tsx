import React from 'react';
import { Viewer as TuiViewer, ViewerProps } from '@toast-ui/react-editor';

export interface TuiViewerWithForwardedProps extends ViewerProps {
  forwardedRef?: React.MutableRefObject<TuiViewer>;
}

const Viewer = (props: TuiViewerWithForwardedProps) => (
  <TuiViewer {...props} ref={props.forwardedRef} />
);

export default Viewer;
