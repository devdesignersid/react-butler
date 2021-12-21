import * as React from 'react';
import { Global, CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { prefixer } from 'stylis';

import AppContainer from './AppContiner';
import { GlobalCss } from '@/styles';
import { Banner, Logo } from '@/components';

const App = () => {
  const emotionCache = createCache({
    key: 'react-butler-key',
    stylisPlugins: [prefixer]
  });
  return (
    <CacheProvider value={emotionCache}>
      <AppContainer>
        <Global styles={GlobalCss} />
        <Logo />
        <Banner host="Butler " message="is ready to serve!" />
      </AppContainer>
    </CacheProvider>
  );
};

export default App;
