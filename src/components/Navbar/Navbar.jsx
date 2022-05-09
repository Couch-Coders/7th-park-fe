import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { style } from "./Navbar.styles";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { AuthContext } from "../../context/AuthProviders";
import logo from "../../assets/image/logo.png";
import { signInWithGoogle, signOutWithGoogle } from "../../auth/firebaseAuth";

export default function NavBar() {
  const { currentUser } = useContext(AuthContext);

  return (
    <NavContainer>
      <NavLeft>
        <Link to="/">
          <img src={logo} style={{ width: 40 }} /> 공원, 어디로갈까?
        </Link>
      </NavLeft>
      <NavRight>
        {currentUser ? (
          <>
            <i>
              {/* <img src={currentUser.photoURL} /> */}
              <Avatar size="small" src={currentUser.gimg} />
            </i>
            <span className="userId">{`${currentUser.unickname} 님`}</span>
            <button type="button" className="btn" onClick={signOutWithGoogle}>
              로그아웃
            </button>
            <Link className="link" to="/mypage">
              마이페이지
            </Link>
          </>
        ) : (
          <>
            <Avatar size="small" icon={<UserOutlined />} />
            <button type="button" className="btn" onClick={signInWithGoogle}>
              로그인
            </button>
          </>
        )}
      </NavRight>
    </NavContainer>
  );
}

const { NavContainer, NavLeft, NavRight } = style;
