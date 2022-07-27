import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import store from "./redux/store/index";
import { BrowserRouter as Router } from "react-router-dom";
import axios from "axios";
import "./index.css";

axios.defaults.baseURL = import.meta.env.VITE_API || "http://localhost:3001";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <Router>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Router>
  </Provider>
);
