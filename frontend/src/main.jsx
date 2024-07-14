import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import ContextWrapper from './context/ContextWrapper.jsx'
import { Provider } from "react-redux";
import store from "./stores";

ReactDOM.createRoot(document.getElementById("root")).render(

  <Provider store={store}>
    <React.StrictMode>
      <ContextWrapper>
        <App />
      </ContextWrapper>
    </React.StrictMode>
  </Provider>
);
