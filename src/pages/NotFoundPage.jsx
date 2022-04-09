import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { style } from '../styles/NotFoundPage.styles';

export default function NotFoundPage() {
  return (
    <div>
      <Header />
      <NotFoundContainer>
        <NotFoundTitle>공원, 어디로갈까?</NotFoundTitle>
        <NotFoundNotice>페이지가 존재하지 않습니다.</NotFoundNotice>
        <NotFoundText>
          링크를 잘못 입력하셨거나 페이지가 삭제/이동되었을 수 있습니다.
        </NotFoundText>
        <Link to="/">메인화면으로 돌아가기</Link>
      </NotFoundContainer>
      <Footer />
    </div>
  );
}
const { NotFoundContainer, NotFoundTitle, NotFoundNotice, NotFoundText } =
  style;
