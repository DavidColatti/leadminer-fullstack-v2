import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import UserProvider from "./providers/UserProvider";
import App from "./App";
import "./assets/scss/main.scss";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

let apolloUri;

process.env.NODE_ENV === "production"
  ? (apolloUri = `${window.location.origin}/graphql`) // this should be production endpoint
  : (apolloUri = "http://localhost:4000/graphql");

const client = new ApolloClient({
  uri: apolloUri,
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ApolloProvider client={client}>
        <UserProvider>
          <App />
        </UserProvider>
      </ApolloProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
