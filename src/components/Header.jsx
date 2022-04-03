import React, { useState, useContext, useEffect } from "react";
import { Avatar } from "antd";
import { Link } from "react-router-dom";
import { UserOutlined } from "@ant-design/icons";
import { style } from "../styles/Header.styles";
import { AuthContext } from "../contexts/AuthProviders";
import { signInWithGoogle, signOutWithGoogle } from "../service/firebase";
export default function Header() {
  const { currentUser } = useContext(AuthContext);

  return (
    <Nav>
      <Logo>
        <Link to="/">Home</Link>
      </Logo>
      <User>
        <Avatar size="small" icon={<UserOutlined />} />
        <UserLogin>
          {currentUser ? (
            <button onClick={signOutWithGoogle}>로그아웃</button>
          ) : (
            <button onClick={signInWithGoogle}>로그인</button>
          )}
        </UserLogin>
      </User>
    </Nav>
  );
}

const { Nav, Logo, User, UserLogin } = style;
