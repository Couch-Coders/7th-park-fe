import React, { useEffect, useState, useMemo } from 'react';
import { Input, Button } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { onAuthStateChanged } from 'firebase/auth';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { style } from '../styles/SignupPage.styles';

import { auth } from '../service/firebase';

export const defaultHeaders = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
};

export default function RegisterPage() {
  const [userId, setUserId] = useState('');
  const [userNickName, setUserNickName] = useState('');

  // const { currentUser } = useContext(AuthContext);
  const [currentUser, setCurrentUser] = useState(null);
  console.log(currentUser, '로그인 한 뒤 회원가입');

  const onUserIdHandler = event => {
    setUserId(event.currentTarget.value);
  };
  const onUserNickNameHandler = event => {
    setUserNickName(event.currentTarget.value);
  };
  console.log(userId, 'userId');
  console.log(userNickName, 'userNickName');

  const onSubmit = async event => {
    console.log('클릭됨');
    event.preventDefault();
    onAuthStateChanged(auth, async user => {
      if (user) {
        //  setCurrentUser(user);
        // 토큰을 가져온다.
        const token = await user.getIdToken();
        console.log(token, 'AuthProvider Token');
        // Header에 인증 정보 추가
        defaultHeaders.Authorization = `Bearer ${token}`;
        setCurrentUser(user);
        // defaultHeaders.ID = user.email;
        // defaultHeaders.NickName = user.displayName;
        // 로그인 시도 (백엔드 API 구현 필요)
        const res = await fetch('/users', {
          method: 'POST',
          headers: defaultHeaders,
          body: JSON.stringify({
            gId: userId,
            uNickname: userNickName,
          }),
        })
          .then(response => response.json())
          .then(response => {
            alert('가입되셨습니다.');
          });
      } else {
        setCurrentUser(null);
      }
    });
  };

  return (
    <div>
      <Header />
      <SignupContainer>
        <SignupTitle>회원가입 페이지</SignupTitle>
        <Input
          className="signupInput"
          size="large"
          placeholder="ID"
          prefix={<UserOutlined />}
          value={userId}
          onChange={onUserIdHandler}
        />
        <Input
          className="signupInput"
          size="large"
          placeholder="Nickname"
          prefix={<UserOutlined />}
          value={userNickName}
          onChange={onUserNickNameHandler}
        />
        <SignupBtn>
          <Button type="primary" onClick={onSubmit}>
            회원가입
          </Button>
        </SignupBtn>
      </SignupContainer>
      <Footer />
    </div>
  );
}

const { SignupContainer, SignupTitle, SignupBtn } = style;
