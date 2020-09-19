import { AppProps } from 'next/app';
import Amplify from 'aws-amplify';
import awsConfig from '../aws-exports';

Amplify.configure(awsConfig);

function CustomApp({ Component, pageProps }: AppProps) {
  console.log('[_app.tsx] Loaded');
  return <Component {...pageProps} />;
}

export default CustomApp;
