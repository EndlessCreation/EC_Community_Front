import '../lib/styles/global.css';
import { CssBaseline } from '@mui/material';
import { AppProps } from 'next/app';
import React, { FC } from 'react';
import { wrapper } from '../store';
import '@fontsource/noto-sans-kr';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'codemirror/lib/codemirror.css';
import '@toast-ui/editor/dist/toastui-editor.css';
import { loadAuth } from '../module/auth';

function onloadAuth() {
  try {
    const auth = localStorage.getItem('auth');
    if (!auth) return;
    wrapper.getStaticProps((store) => (): any => {
      store.dispatch(loadAuth(JSON.parse(auth)));
    });
  } catch (e) {
    console.log('localStorage is not working');
  }
}
onloadAuth();

const WrappedApp: FC<AppProps> = ({ Component, pageProps }) => (
  <>
    <CssBaseline />
    <Component {...pageProps} />
  </>
);

export default wrapper.withRedux(WrappedApp);
