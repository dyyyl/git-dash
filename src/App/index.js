import { ApolloProvider } from '@apollo/react-hooks';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import React, { useState } from 'react';

import Document from 'shared/components/Document';
import Form from 'shared/components/Form';
import GlobalStyle from 'shared/styles/GlobalStyle';

import Layout from './Layout';

const App = () => {
  const [isQueriable, setIsQueriable] = useState(false);
  const [searchName, setSearchName] = useState('');

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
      <Layout>
        <h1>GITHUB DASH</h1>
        <Form setIsQueriable={setIsQueriable} setSearchName={setSearchName} />
        {isQueriable ? <Document searchName={searchName} /> : null}
        <GlobalStyle />
      </Layout>
    </ApolloProvider>
  );
};

export default App;
