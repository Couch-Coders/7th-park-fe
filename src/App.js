import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "antd/dist/antd.css";
import DetailPage from "./pages/DetailPage";
import MainPage from "./pages/MainPage";
import MyPage from "./pages/MyPage/MyPage";
import "./styles/antdCustomStyle.css";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="detail" element={<DetailPage />} />
          <Route path="mypage" element={<MyPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
