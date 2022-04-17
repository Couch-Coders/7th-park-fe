import React, { useState, useEffect } from 'react';
import { List, Card, Rate } from 'antd';
import { Link } from 'react-router-dom';
import { style } from '../../styles/ParkList.styles';
import useDebounce from '../../hooks/useDebounce';

export default function ParkList(props) {
  console.log(props, 'props');
  const { search } = props;
  console.log(search, 'search');
  const { Meta } = Card;
  const [isSearch, setIsSearch] = useState();
  const [parksData, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // 검색
  const [searchData, setSearchData] = useState([]);
  // const [search, setSearch] = useState(null);
  // const [loading, setLoading] = useState(false);

  const debouncedSearch = useDebounce(search, 1000);
  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      // setNotices([]);
      setSearchData([]);
      const data = await fetch(
        `http://localhost:3001/parks?pname=${debouncedSearch}`,
        // `https://ws-public.interpol.int/notices/v1/red?forename=${debouncedSearch}&resultPerPage=200`,
      ).then(res => res.json());
      // setNotices(data._embedded.notices);
      setSearchData(data);
      console.log(data, 'data');
      setLoading(false);
      setIsSearch(debouncedSearch);
    }
    if (debouncedSearch) fetchData();
  }, [debouncedSearch]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(`http://localhost:3001/parks`);
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`,
          );
        }
        const data = await response.json();
        setData(data);
        // console.log(data);
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

  // useEffect(() => {
  //   console.log(search);
  // }, []);

  // console.log(parksData);
  console.log(searchData);

  return (
    <div>
      <CardListContainer>
        {loading && <div>잠시만 기다려 주세요...</div>}
        {error && (
          <div>{`공원 데이터를 가져오는데 문제가 있습니다. - ${error}`}</div>
        )}

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
            dataSource={isSearch ? searchData : parksData}
            renderItem={item => (
              <Link key={item.pidx} to={`/detail/${item.pidx}`}>
                <List.Item>
                  <Card
                    hoverable
                    style={{ width: 278, height: 173, padding: 0 }}
                    cover={
                      <img
                        alt={item.pname}
                        src={item.pimg}
                        style={{ height: 131 }}
                      />
                    }
                  >
                    <Meta title={item.pname} />
                    <Rate allowHalf defaultValue={item.pavgRate} />
                  </Card>
                </List.Item>
              </Link>
            )}
          />
        )}
      </CardListContainer>
    </div>
  );
}

const { CardListContainer } = style;
