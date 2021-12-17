import '../styles/global.css';
import { CssBaseline } from '@mui/material';
import { AppProps } from 'next/app';
import React, { FC } from 'react';
import { wrapper } from '../store';
import '@fontsource/noto-sans-kr';

const WrappedApp: FC<AppProps> = ({ Component, pageProps }) => (
  <>
    <CssBaseline />
    <Component {...pageProps} />
  </>
);

export default wrapper.withRedux(WrappedApp);
