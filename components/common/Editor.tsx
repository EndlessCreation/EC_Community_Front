import { Editor as TuiEditor, EditorProps } from '@toast-ui/react-editor';

export interface TuiEditorWithForwardedProps extends EditorProps {
  forwardedRef?: React.MutableRefObject<TuiEditor>;
}

const Editor = (props: TuiEditorWithForwardedProps) => (
  <TuiEditor {...props} ref={props.forwardedRef} />
);

export default Editor;
