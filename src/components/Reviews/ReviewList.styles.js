import styled from "styled-components";

const ReviewListContainer = styled.div`
  width: 1000px;
  margin: 0 auto 50px;
`;

const ReviewInputContainer = styled.div`
  border-top: 3px solid #d9d9d9;
  border-bottom: 3px solid #d9d9d9;
  padding: 30px 0 45px;
  margin-bottom: 20px;

  .ant-form {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 40px;
  }
  .ant-form-item {
    margin-bottom: 0;
  }

  .ant-form-item-label > label {
    display: none;
  }
  .ant-input-textarea-show-count > .ant-input {
    height: auto;
  }

  .ant-btn-primary {
    margin-left: -135px;
  }
`;
const ReviewInputTitle = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const ReviewInputRate = styled.div`
  font-size: 20px;
  margin: 5px 0;
  b {
    display: inline-block;
    margin-right: 15px;
  }
`;

export const style = {
  ReviewListContainer,
  ReviewInputContainer,
  ReviewInputTitle,
  ReviewInputRate,
};
