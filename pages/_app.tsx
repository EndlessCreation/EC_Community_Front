import '../lib/styles/global.css';
import { CssBaseline } from '@mui/material';
import { AppProps } from 'next/app';
import React, { FC, useEffect } from 'react';
import { wrapper } from '../store';
import '@fontsource/noto-sans-kr';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'codemirror/lib/codemirror.css';
import '@toast-ui/editor/dist/toastui-editor.css';
import { useRouter } from 'next/router';
import * as ga from '../lib/scripts/ga';

const WrappedApp: FC<AppProps> = ({ Component, pageProps }) => {
  const router = useRouter();

  function setScreenSize() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    console.log(vh);
  }

  useEffect(() => {
    window.addEventListener('resize', setScreenSize);
    return () => {
      window.removeEventListener('resize', setScreenSize);
    };
  }, []);

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      ga.pageview(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <CssBaseline />
      <Component {...pageProps} />
    </>
  );
};

export default wrapper.withRedux(WrappedApp);
