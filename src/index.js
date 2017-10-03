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
    uri: `https://api.graph.cool/simple/v1/cj7lvqnej074f0168gpa04872`
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
