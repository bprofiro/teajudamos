import type { AppProps } from 'next/app';
import { ToastContainer } from 'react-toastify';

import { Providers } from '~/providers';
import { GlobalStyle } from '~/styles';

import '../styles/lib/react-toastify.css';

function App({ Component, pageProps }: AppProps) {
  return (
    <Providers>
      <Component {...pageProps} />
      <ToastContainer />
      <GlobalStyle />
    </Providers>
  );
}

export default App;
