import React from 'react';
import { Viewer as TuiViewer, ViewerProps } from '@toast-ui/react-editor';
import '@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css';
import 'prismjs/themes/prism.css';
import Prism from 'prismjs';
// @ts-ignore
import codeSyntaxHighlight from '@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight-all.js';

export interface TuiViewerWithForwardedProps extends ViewerProps {
  forwardedRef?: React.MutableRefObject<TuiViewer>;
}

const Viewer = (props: TuiViewerWithForwardedProps) => (
  <TuiViewer
    {...props}
    ref={props.forwardedRef}
    plugins={[[codeSyntaxHighlight, { highlighter: Prism }]]}
  />
);

export default Viewer;
