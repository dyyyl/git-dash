import { ApolloProvider } from '@apollo/react-hooks';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import GlobalStyle from 'shared/styles/GlobalStyle';

import AppContainer from './AppContainer';
import Document from './Document';
import Form from './Form';

const App = () => {
  const httpLink = new HttpLink({
    uri: 'https://api.github.com/graphql',
    headers: {
      authorization: `bearer ${process.env.REACT_APP_TOKEN}`,
    },
  });

  const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <AppContainer>
        <h1>GITHUB DASH</h1>
        <BrowserRouter>
          <Form />
          <Switch>
            <Route
              exact
              path="/:id"
              render={(props) => (
                <Document match={props.match} /> // eslint-disable-line
              )}
            />
          </Switch>
        </BrowserRouter>
        <GlobalStyle />
      </AppContainer>
    </ApolloProvider>
  );
};

export default App;
