import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import ThemeProvider from "./utils/ThemeContext";
import App from "./App";
import { Provider } from "react-redux";
import { store } from './store';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </Router>
    </Provider>
  </React.StrictMode>
);
