import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import Favorites from "./pages/Favorites/Favorites";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Header from "./components/Header/Header";
import { Provider } from "react-redux";
import store from "./state/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <HashRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="favorites" element={<Favorites />} />
      </Routes>
    </HashRouter>
  </Provider>
);

reportWebVitals();
