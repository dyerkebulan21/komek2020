import React from 'react';
import { AppInitialProps } from 'next/app';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../app/styles/style.scss';

interface Props extends AppInitialProps {
  Component: any;
}

const MyApp = ({ Component, pageProps }: Props) => <Component {...pageProps} />;

export default MyApp;
