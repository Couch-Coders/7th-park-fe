import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import 'antd/dist/antd.min.css';
import DetailPage from './pages/DetailPage';
import MainPage from './pages/MainPage';
import MyPage from './pages/MyPage';
import SignupPage from './pages/SignupPage';
import NotFoundPage from './pages/NotFoundPage';
import './styles/antdCustomStyle.css';
import AuthProviders from './contexts/AuthProviders';
import './styles/globalStyle.css';

function App() {
  return (
    <div className="App">
      <AuthProviders>
        <HashRouter>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/mypage" element={<MyPage />} />
            <Route path="/detail/:id" element={<DetailPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </HashRouter>
      </AuthProviders>
    </div>
  );
}

export default App;
