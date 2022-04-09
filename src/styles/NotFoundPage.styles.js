import styled from 'styled-components';

const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;

const NotFoundTitle = styled.div`
  display: block;
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 30px;
`;

const NotFoundNotice = styled.div`
  display: block;
  font-size: 20px;
  margin-bottom: 15px;
`;

const NotFoundText = styled.div`
  display: block;
  font-size: 14px;
  margin-bottom: 20px;
`;

export const style = {
  NotFoundContainer,
  NotFoundTitle,
  NotFoundNotice,
  NotFoundText,
};
