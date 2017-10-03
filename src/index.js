import React from "react";
import ReactDOM from "react-dom";

import { ApolloClient } from "apollo-client";
import Link from "apollo-link-http";
import Cache from "apollo-cache-inmemory";
import { ApolloProvider } from "react-apollo";

import "./styles/index.css";
import AppContainer from "./components/app";
import registerServiceWorker from "./registerServiceWorker";

const client = new ApolloClient({
  link: new Link({
    uri: `https://v7mnw3m03.lp.gql.zone/graphql`
  }),
  // cache: new Cache()
  // for SSR, use:
  cache: new Cache().restore(window.__APOLLO_STATE__ || {})
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <AppContainer />
  </ApolloProvider>,
  document.getElementById("root")
);

registerServiceWorker();
