import React from "react";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { style } from "../styles/Header.styles";
export default function Header() {
  return (
    <Nav>
      <Logo className="logo">Home</Logo>
      <User>
        <Avatar size="small" icon={<UserOutlined />} />
        <UserLogin>로그인</UserLogin>
      </User>
    </Nav>
  );
}

const { Nav, Logo, User, UserLogin } = style;
