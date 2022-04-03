import React from "react";
import { Card } from "antd";
import { style } from "../../styles/ParkCard.styles";
import { Rate } from "antd";

const { Meta } = Card;
export default function ParkCard(props) {
  return (
    <ParkCardContainer>
      <Card
        hoverable
        style={{ width: 278, height: 173, padding: 0 }}
        cover={
          <img
            alt="example"
            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
            style={{ height: 131 }}
          />
        }
      >
        <Meta title={props.title} />
        <Rate allowHalf defaultValue={2.5} />
      </Card>
    </ParkCardContainer>
  );
}
const { ParkCardContainer } = style;
