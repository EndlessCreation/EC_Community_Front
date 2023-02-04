import { css } from '@emotion/react';

export const renderer = {
  question(node: any, context: any) {
    return [
      { type: 'openTag', tagName: 'div', outerNewLine: true, classNames: ['question'] },
      { type: 'html', content: node.literal },
      { type: 'closeTag', tagName: 'div', outerNewLine: true },
    ];
  },
  answer(node: any, context: any) {
    return [
      { type: 'openTag', tagName: 'div', outerNewLine: true, classNames: ['answer'] },
      { type: 'html', content: node.literal },
      { type: 'closeTag', tagName: 'div', outerNewLine: true },
    ];
  },
};

export const editorCss = css`
  .toastui-editor-contents > div {
    display: flex;
    flex-direction: column;
  }

  .toastui-editor-defaultUI {
    border: 0;
  }
  .toastui-editor-defaultUI-toolbar {
    background: white;
  }
  .toastui-editor {
    background: #fafafc;
  }
  .toastui-editor-mode-switch {
    display: none !important;
  }

  .toastui-editor-contents p {
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 30px;
    letter-spacing: 0.2px;
    color: #000000;
    margin-bottom: 1.25rem;
  }

  .toastui-editor-contents .question,
  .toastui-editor-contents .answer {
    box-sizing: border-box;
    min-height: 4.125rem;
    max-width: 53.125rem;
    padding: 1.25rem;
    border-radius: 1.875rem;
    font-size: 1rem;
    font-weight: 600;
    font-family: 'Noto Sans KR';
    margin-bottom: 1.25rem;
    &::before {
      font-size: 1.25rem;
      font-weight: 700;
      margin-right: 1.875rem;
    }
  }

  .toastui-editor-contents .question {
    color: white;
    border-top-left-radius: 0;
    background-color: #474747;
    &::before {
      content: 'Q';
    }
  }

  .toastui-editor-contents .answer {
    margin-left: auto;
    align-self: flex-end;
    border-bottom-right-radius: 0;
    background-color: #f0f0f0;
    &::before {
      content: 'A';
    }
  }

  .toastui-editor-contents::-webkit-scrollbar {
    width: 10px;
  }

  .toastui-editor-contents::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 5px;
  }
`;
