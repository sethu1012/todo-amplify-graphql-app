import NavigationMenu from '@components/@core/navigation-menu';
import '@styles/tailwind.css';
import Amplify from 'aws-amplify';
import { AppProps } from 'next/app';
import awsConfig from '../aws-exports';

Amplify.configure(awsConfig);

function CustomApp({ Component, pageProps }: AppProps) {
  console.log('[_app.tsx] Loaded');
  return (
    <>
      <div className="border border-gray-200">
        <NavigationMenu />
      </div>
      <Component {...pageProps} />
    </>
  );
}

export default CustomApp;
