import type { AppProps } from 'next/app';
import { ApolloProvider } from '@apollo/client';
import client from '@graphql/apollo-client';

import GlobalStyle from '@styles/globalStyles';
import { theme } from '@styles/theme';
import { ThemeProvider } from 'styled-components';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default MyApp;
