import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ApolloClient, ApolloProvider } from "@apollo/client";
import { cache } from "./cache";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";

const client = new ApolloClient({
  cache,
  uri: "https://mana-vis-api.herokuapp.com/",
});

const theme = createMuiTheme({
  spacing: (mul: number) => mul * 4,
  palette: {
    primary: {
      main: "#2196f3",
    },
    secondary: {
      main: "#ffc400",
    },
    background: {
      default: "#ebebeb",
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
