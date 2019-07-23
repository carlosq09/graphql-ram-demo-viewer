import App from './App';
import React from "react";
import { render } from "react-dom";

import client from "./client"

import { ApolloProvider } from "react-apollo";

render(<ApolloProvider client={client}><App /></ApolloProvider>, document.getElementById('root'));
