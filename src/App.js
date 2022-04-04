import React, { useState, useEffect } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";

import "antd/dist/antd.min.css";
import DetailPage from "./pages/DetailPage";
import MainPage from "./pages/MainPage";
import MyPage from "./pages/MyPage";
import "./styles/antdCustomStyle.css";
import AuthProviders from "./contexts/AuthProviders";
import "../src/styles/globalStyle.css";
function App() {
  return (
    <div className="App">
      <AuthProviders>
        <HashRouter>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/mypage" element={<MyPage />} />
            <Route path="/detail" element={<DetailPage />} />
          </Routes>
        </HashRouter>
      </AuthProviders>
    </div>
  );
}

export default App;
