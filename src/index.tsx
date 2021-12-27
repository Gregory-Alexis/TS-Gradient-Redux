import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./redux/app/store";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FullScreenPage from "./components/GradientCard/FullScreen/FullScreenPage";
import React from "react";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/gradient/:id" element={<FullScreenPage />} />
        </Routes>
      </Provider>
    </BrowserRouter>
    ,
  </React.StrictMode>,
  document.getElementById("root")
);
