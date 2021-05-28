import '../styles/globals.css';

import type { AppProps } from 'next/app';
import { FC } from 'react';

// eslint-disable-next-line react/jsx-props-no-spreading
const MyApp: FC<AppProps> = ({ Component, pageProps }: AppProps) => <Component {...pageProps} />;
export default MyApp;
