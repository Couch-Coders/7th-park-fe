import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 32px 40px;
`;

const Logo = styled.h1`
  font-size: 14px;
  color: #595959;
`;

const User = styled.div`
  font-size: 14px;
  color: #595959;
`;

const UserLogin = styled.span`
  display: inline-block;
  margin-left: 10px;
`;

export const style = {
  Nav,
  Logo,
  User,
  UserLogin,
};
