import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import reducers from "./reducers/rootReducer";
import { createStore, applyMiddleware, compose } from "redux";
// import { createStore, applyMiddleware, componse } from "redux";
const store = createStore(reducers, compose(applyMiddleware(thunk)));
// const store = createStore(reducers);

ReactDOM.render(
  <Provider store={store}  >
    <App />
   </Provider>
  ,
  document.getElementById("root")
);
