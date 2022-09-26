import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";
import App from "./App";
import LoginComponent from "./component/login/LoginComponent";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <HashRouter>
    <App />
    
  </HashRouter>,
  
  document.getElementById("root")
);

serviceWorker.unregister();