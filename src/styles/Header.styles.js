import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 32px 40px;
  .link {
    color: #595959;
  }
`;

const Logo = styled.h1`
  font-size: 14px;
`;

const User = styled.div`
  font-size: 14px;
  color: #595959;
`;

const UserLogin = styled.span`
  display: inline-block;
  margin-left: 10px;
  i {
    margin-right: 10px;
  }
  .btn {
    background-color: transparent;
    border: none;
    cursor: pointer;
  }
`;

export const style = {
  Nav,
  Logo,
  User,
  UserLogin,
};
