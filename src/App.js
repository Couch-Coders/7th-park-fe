import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import DetailPage from "./pages/DetailPage/DetailPage";
import MyPage from "./pages/MyPage/MyPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import AuthProviders from "./context/AuthProviders";

function App() {
  return (
    <>
      <HashRouter>
        <AuthProviders>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/mypage" element={<MyPage />} />
            <Route path="/detail/:pidx" element={<DetailPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </AuthProviders>
      </HashRouter>
    </>
  );
}

export default App;
