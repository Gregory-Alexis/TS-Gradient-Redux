import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./redux/app/store";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FullScreenPage from "./components/GradientCard/FullScreen/FullScreenPage";

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/gradient/:id" element={<FullScreenPage />} />
      </Routes>
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
