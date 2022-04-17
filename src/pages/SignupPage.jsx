import React, { useState, useContext, useEffect } from 'react';
import { Input, Button } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { style } from '../styles/SignupPage.styles';
import { AuthContext } from '../contexts/AuthProviders';

export default function RegisterPage() {
  const [userId, setUserId] = useState('');
  const [userNickName, setUserNickName] = useState('');

  const { currentUser } = useContext(AuthContext);

  const onUserIdHandler = event => {
    setUserId(event.currentTarget.value);
  };
  const onUserNickNameHandler = event => {
    setUserNickName(event.currentTarget.value);
  };
  console.log(userId, 'userId');
  console.log(userNickName, 'userNickName');
  const onSubmit = async event => {
    event.preventDefault();
    await fetch('/users/me', {
      method: 'POST',
      body: JSON.stringify({
        gId: userId,
        uNickname: userNickName,
      }),
    })
      .then(response => response.json())
      .then(response => {
        alert('가입되셨습니다.');
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
          <Button type="primary" onSubmit={onSubmit}>
            회원가입
          </Button>
        </SignupBtn>
      </SignupContainer>
      <Footer />
    </div>
  );
}

const { SignupContainer, SignupTitle, SignupBtn } = style;
