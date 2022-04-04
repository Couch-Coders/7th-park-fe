import React, { useState, useContext, useEffect } from "react";
import { Avatar } from "antd";
import { Link } from "react-router-dom";
import { UserOutlined } from "@ant-design/icons";
import { style } from "../styles/Header.styles";
import { AuthContext } from "../contexts/AuthProviders";
import { signInWithGoogle, signOutWithGoogle } from "../service/firebase";
export default function Header() {
  const { currentUser } = useContext(AuthContext);
  console.log(currentUser);
  return (
    <Nav>
      <Logo>
        <Link className="link" to="/">
          Home
        </Link>
      </Logo>
      <User>
        <UserLogin>
          {currentUser ? (
            <>
              <i>
                <Avatar size="small" src={currentUser.photoURL} />
              </i>
              <span>{`${currentUser.displayName} 님`}</span>
              <button className="btn" onClick={signOutWithGoogle}>
                로그아웃
              </button>
              <Link className="link" to="/mypage">
                마이페이지
              </Link>
            </>
          ) : (
            <>
              <Avatar size="small" icon={<UserOutlined />} />
              <button className="btn" onClick={signInWithGoogle}>
                로그인
              </button>
            </>
          )}
        </UserLogin>
      </User>
    </Nav>
  );
}

const { Nav, Logo, User, UserLogin } = style;
