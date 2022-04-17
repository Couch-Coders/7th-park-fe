import styled from 'styled-components';

const SignupContainer = styled.div`
  width: 500px;
  height: 100vh;
  margin: 0 auto;
  .signupInput {
    margin: 10px auto;
  }
`;

const SignupTitle = styled.div`
  width: 500px;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
  text-align: center;
`;

const SignupBtn = styled.div`
  width: 500px;
  /* max-width: 552px; */
  margin: 20px auto;
  text-align: center;
`;

export const style = {
  SignupContainer,
  SignupTitle,
  SignupBtn,
};
