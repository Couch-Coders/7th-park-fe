import React, { useState, useContext, useEffect } from 'react';
import { Input, Button } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { style } from '../styles/SignupPage.styles';
import { AuthContext } from '../contexts/AuthProviders';

export default function RegisterPage() {
  const { currentUser } = useContext(AuthContext);
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
        />
        <Input
          className="signupInput"
          size="large"
          placeholder="Nickname"
          prefix={<UserOutlined />}
        />
        <SignupBtn>
          <Button type="primary">회원가입</Button>
        </SignupBtn>
      </SignupContainer>
      <Footer />
    </div>
  );
}

const { SignupContainer, SignupTitle, SignupBtn } = style;
