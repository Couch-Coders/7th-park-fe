import styled from "styled-components";

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px auto;
  border-bottom: 1px solid #eee;
`;

const NavLeft = styled.div`
  a {
    color: #3caa63;
    font-weight: bold;
    font-size: 20px;
  }
`;

const NavRight = styled.div`
  * {
    margin: 0 5px;
    cursor: pointer;
  }

  .userId {
    color: #259e50;
  }
`;

export const style = {
  NavContainer,
  NavLeft,
  NavRight,
};
