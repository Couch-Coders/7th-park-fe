import React, { useState, useEffect } from 'react';
import BestParkSlide from '../components/BestParkSlide/BestParkSlide';
import ParkList from '../components/ParkList/ParkList';
import SearchInput from '../components/Search/SearchInput';
import SearchFilter from '../components/Search/SearchFilter';

import Header from '../components/Header';
import Footer from '../components/Footer';

import useDebounce from '../hooks/useDebounce';

export default function MainPage() {
  const [notices, setNotices] = useState([]);
  // const [parkData, setParkData] = useState([]);
  const [search, setSearch] = useState(null);
  const [loading, setLoading] = useState(false);

  function handleSetSearch(e) {
    setSearch(e.target.value);
  }

  const debouncedSearch = useDebounce(search, 500);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      setNotices([]);
      const data = await fetch(
        // `http://localhost:3001/parks?${debouncedSearch}`,
        `https://ws-public.interpol.int/notices/v1/red?forename=${debouncedSearch}&resultPerPage=200`,
      ).then(res => res.json());
      setNotices(data._embedded.notices);
      // setParkData(data);
      console.log(data);
      setLoading(false);
    }
    if (debouncedSearch) fetchData();
  }, [debouncedSearch]);

  return (
    <div>
      <input
        type="search"
        placeholder="Search"
        onChange={e => setSearch(e.target.value)}
      />

      {loading && <p>Loading...</p>}

      {notices.map(notice => {
        return (
          <div key={notice.entity_id}>
            {notice._links?.thumbnail?.href && (
              <img
                src={notice._links.thumbnail.href}
                width="100px"
                height="100px"
                alt={notice.name}
              />
            )}
            <div>
              <p>
                {notice.forename} {notice.name}
              </p>

              <p>{notice.date_of_birth}</p>
            </div>
          </div>
        );
      })}
      {/* <div>
        <input type="search" placeholder="search" onChange={handleSetSearch} />

        {parkData.map(park => {
          return (
            <div key={park.id}>
              <div>공원이름{park.p_name}</div>
              <div>공원 주소{park.p_name}</div>
              <div>공원 지역{park.p_zone}</div>
            </div>
          );
        })}
      </div> */}

      <Header />
      <SearchInput />
      <SearchFilter />
      <BestParkSlide />
      <ParkList />
      <Footer />
    </div>
  );
}
