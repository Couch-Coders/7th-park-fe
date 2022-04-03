import React from "react";
import { List } from "antd";
import { style } from "../../styles/ParkList.styles";
import ParkCard from "./ParkCard";
export default function ParkList() {
  const data = [
    {
      title: "Title 1",
    },
    {
      title: "Title 2",
    },
    {
      title: "Title 3",
    },
    {
      title: "Title 4",
    },
    {
      title: "Title 5",
    },
    {
      title: "Title 6",
    },
    {
      title: "Title 6",
    },
    {
      title: "Title 6",
    },
    {
      title: "Title 6",
    },
    {
      title: "Title 6",
    },
    {
      title: "Title 6",
    },
    {
      title: "Title 6",
    },
  ];

  return (
    <CardListContainer>
      <List
        grid={{
          gutter: 16,
          xs: 1,
          sm: 2,
          md: 3,
          lg: 3,
          xl: 3,
          xxl: 3,
        }}
        dataSource={data}
        renderItem={(item) => (
          <List.Item>
            <ParkCard title={item.title} />
          </List.Item>
        )}
      />
    </CardListContainer>
  );
}

const { CardListContainer } = style;
