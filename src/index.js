import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./i18n";
import { Provider } from "react-redux";
import reportWebVitals from "./reportWebVitals";

import store from "./store";
import { FontSizeProvider } from "./pages/Context/FontSizeContext";

import { PublicClientApplication } from "@azure/msal-browser";
import { MsalProvider } from "@azure/msal-react";
import { msalConfig } from "./authConfig";
import LayOutContext from "./pages/Context/LayOutContext";
import InsertContext from "./pages/Context/InsertContext";

const msalInstance = new PublicClientApplication(msalConfig);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <React.Fragment>
      <BrowserRouter>
        <FontSizeProvider>
          <LayOutContext>
            <InsertContext>
              <App />
            </InsertContext>
          </LayOutContext>
        </FontSizeProvider>
      </BrowserRouter>
    </React.Fragment>
  </Provider>
);

reportWebVitals();
