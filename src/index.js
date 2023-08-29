import React from "react";
import ReactDOM from 'react-dom/client';
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./i18n";
import { Provider } from "react-redux";
import reportWebVitals from './reportWebVitals'

import store from "./store";
import { FontSizeProvider } from "./pages/Context/FontSizeContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Provider store={store}>
      <React.Fragment>
        <BrowserRouter>
          <FontSizeProvider>
            <App />
          </FontSizeProvider>
        </BrowserRouter>
      </React.Fragment>
    </Provider>
);

reportWebVitals();
