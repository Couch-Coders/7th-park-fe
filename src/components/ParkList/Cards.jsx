import React from 'react';
import { Link } from 'react-router-dom';
import { List, Card, Rate } from 'antd';

export default function Cards({ item }) {
  const { Meta } = Card;
  return (
    <Link key={item.pidx} to={`/detail/${item.pidx}`}>
      <List.Item>
        <Card
          hoverable
          style={{ width: 278, height: 173, padding: 0 }}
          cover={
            <img alt={item.pname} src={item.pimg} style={{ height: 131 }} />
          }
        >
          <Meta title={item.pname} />
          <Rate allowHalf defaultValue={item.pavgRate} />
        </Card>
      </List.Item>
    </Link>
  );
}
