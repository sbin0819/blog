import type { AppProps } from 'next/app';
import { ApolloProvider } from '@apollo/client';
import client from '@graphql/apollo-client';

import GlobalStyle from '@styles/globalStyles';
import { theme } from '@styles/theme';
import { ThemeProvider } from 'styled-components';
import { Header } from '@common';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header />
        <Component {...pageProps} />
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default MyApp;
