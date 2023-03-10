import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

//store
import { Provider as ReduxProvider } from "react-redux";
//reducer
import { Provider } from "./provider";
import {store} from "./store";

ReactDOM.render(
  <React.Fragment>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <ReduxProvider store={store}>
        <Provider>
          <App />
        </Provider>
      </ReduxProvider>
    </BrowserRouter>
  </React.Fragment>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
