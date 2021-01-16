import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { createStore } from "redux";
import allReducer from "./reducers";

import { Provider } from "react-redux";

const myStore = createStore(
  allReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <Provider store={myStore}>
      <App />
    </Provider>
  </React.StrictMode>,
  rootElement
);