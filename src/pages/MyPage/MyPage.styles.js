import styled from "styled-components";

const MyPageContainer = styled.div`
  width: 1200px;
  margin: 0 auto;
`;

const MyPageContent = styled.div`
  min-height: 800px;
  .ant-tabs-tab-btn {
    font-size: 18px;
    color: #495056;
  }
  .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn {
    color: #259e50;
  }
  .ant-tabs-content-holder {
    margin-bottom: 30px;
  }
`;

export const style = { MyPageContainer, MyPageContent };
