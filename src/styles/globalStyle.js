import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  font-family: "Noto Sans KR", sans-serif;
  }

  /* body,html{overflow-x:hidden} */
  p {
    margin-bottom: 5px;
  }
input {
  border: 0;
  outline: none;
}
button {
  border: 0;
  outline: none;
  background-color: #ffffff;
}
  ul,ol,li {
    list-style: none;
  }

  /* antd */

  .ant-card-meta-title{
    font-size:20px;


     a{     color:#000;}


}


     .ant-card-body{
       .anticon-heart{
         position:absolute;
         right:10px;
      
       }
     }


`;

export default GlobalStyle;
