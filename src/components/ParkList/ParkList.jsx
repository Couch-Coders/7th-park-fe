import React, { useState, useEffect } from 'react';
import { List, Card, Rate } from 'antd';
import { Link } from 'react-router-dom';
import { style } from '../../styles/ParkList.styles';

export default function ParkList() {
  const { Meta } = Card;

  const [parksData, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(`http://localhost:3001/detail`);
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`,
          );
        }
        const data = await response.json();
        setData(data);
        console.log(data);
        setError(null);
      } catch (err) {
        setError(err.message);
        setData(null);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);
  console.log(parksData);
  return (
    <CardListContainer>
      {loading && <div>잠시만 기다려 주세요...</div>}
      {error && (
        <div>{`공원 데이터를 가져오는데 문제가 있습니다. - ${error}`}</div>
      )}
      {/* <ul>
        {data &&
          data.map(({ p_idx, p_park }) => (
            <li key={p_idx}>
              <h3>{p_park}</h3>
            </li>
          ))}
      </ul> */}

      {parksData && (
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
          dataSource={parksData}
          renderItem={item => (
            <Link key={item.id} to={`/detail/${item.id}`}>
              <List.Item>
                <Card
                  hoverable
                  style={{ width: 278, height: 173, padding: 0 }}
                  cover={
                    <img
                      alt={item.p_park}
                      src={item.p_img}
                      style={{ height: 131 }}
                    />
                  }
                >
                  <Meta title={item.p_park} />
                  <Rate allowHalf defaultValue={2.5} />
                </Card>
              </List.Item>
            </Link>
          )}
        />
      )}
    </CardListContainer>
  );
}

const { CardListContainer } = style;
