import React from "react";
import { style } from "./Footer.styles";
export default function Footer() {
  return (
    <FooterContainer>
      <p>Copyright 김가람, 박혜원, 양진민, 최재희 All rights reserved.</p>
    </FooterContainer>
  );
}

const { FooterContainer } = style;
