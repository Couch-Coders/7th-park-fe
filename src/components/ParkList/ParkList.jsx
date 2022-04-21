import React, { useState, useEffect } from 'react';
import { List } from 'antd';
import { style } from '../../styles/ParkList.styles';
import useDebounce from '../../hooks/useDebounce';
import useFetch from '../../hooks/useFetch';
import Cards from './Cards';

export default function ParkList(props) {
  // Data 로딩
  const [parksData, error, fetchLoading] = useFetch(
    `http://localhost:3001/parks`, // 임시
  );
  const [loading, setLoading] = useState(false);
  // 검색
  console.log(props, 'props');
  const { search } = props;
  console.log(search, 'search');
  const [isSearch, setIsSearch] = useState();

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

  console.log(searchData);

  return (
    <div>
      <CardListContainer>
        {fetchLoading && <div>잠시만 기다려 주세요...</div>}
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
            renderItem={item => <Cards item={item} />}
          />
        )}
      </CardListContainer>
    </div>
  );
}

const { CardListContainer } = style;
