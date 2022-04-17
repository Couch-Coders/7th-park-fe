import React, { useState, useEffect } from 'react';
import { Input, Tag, Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import BestParkSlide from '../components/BestParkSlide/BestParkSlide';
import ParkList from '../components/ParkList/ParkList';
// import SearchForm from '../components/Search/SearchForm';
// import SearchInput from '../components/Search/SearchInput';

// import SearchFilter from '../components/Search/SearchFilter';
import Header from '../components/Header';
import Footer from '../components/Footer';

import { style } from '../styles/SearchForm.styles';
// import { style } from '../../styles/SearchFilter.styles';

export default function MainPage() {
  const { Search } = Input;
  // 검색
  //   const [notices, setNotices] = useState([]);
  const [parkData, setParkData] = useState([]);
  const [search, setSearch] = useState(null);
  const [loading, setLoading] = useState(false);

  // 지역 필터
  const [area, setArea] = useState([]);

  // const { onSearch } = props;

  const [searchText, setSearchText] = useState('');

  const handleSetSearch = e => {
    const text = e.target.value;
    setSearchText(text);
    setSearch(text);
  };

  const handleEnterKeyPressed = e => {
    if (e.key === 'Enter') {
      // onSearch(searchText);
    }
  };

  //   function handleSetSearch(e) {
  //     setSearch(e.target.value);
  //   }

  const onClick = ({ key }) => {
    setArea(key);
    console.log(`Click on item ${key}`);
  };

  console.log(area, 'area');

  const menu = (
    <Menu onClick={onClick}>
      <Menu.Item key="강남구">#강남구</Menu.Item>
      <Menu.Item key="강동구">#강동구</Menu.Item>
      <Menu.Item key="강북구">#강북구</Menu.Item>
      <Menu.Item key="강서구">#강서구</Menu.Item>
      <Menu.Item key="관악구">#관악구</Menu.Item>
      <Menu.Item key="광진구">#광진구</Menu.Item>
      <Menu.Item key="구로구">#구로구</Menu.Item>
      <Menu.Item key="금천구">#금천구</Menu.Item>
      <Menu.Item key="노원구">#노원구</Menu.Item>
      <Menu.Item key="도봉구">#도봉구</Menu.Item>
      <Menu.Item key="동대문구">#동대문구</Menu.Item>
      <Menu.Item key="동작구">#동작구</Menu.Item>
      <Menu.Item key="마포구">#마포구</Menu.Item>
      <Menu.Item key="서대문구">#서대문구</Menu.Item>
      <Menu.Item key="서초구">#서초구</Menu.Item>
      <Menu.Item key="성동구">#성동구</Menu.Item>
      <Menu.Item key="성북구">#성북구</Menu.Item>
      <Menu.Item key="송파구">#송파구</Menu.Item>
      <Menu.Item key="양천구">#양천구</Menu.Item>
      <Menu.Item key="영등포구">#영등포구</Menu.Item>
      <Menu.Item key="용산구">#용산구</Menu.Item>
      <Menu.Item key="은평구">#은평구</Menu.Item>
      <Menu.Item key="종로구">#종로구</Menu.Item>
      <Menu.Item key="중구">#중구</Menu.Item>
      <Menu.Item key="중랑구">#중랑구</Menu.Item>
    </Menu>
  );

  return (
    <div>
      <Header />

      <SearchTitle>공원 어디로 갈까?</SearchTitle>
      <Search
        onChange={handleSetSearch}
        // onChange={handleInput}
        onKeyPress={handleEnterKeyPressed}
        type="text"
        value={searchText}
        placeholder="공원 이름을 검색해 주세요."
        // placeholder={handleInput}
        // onSearch={onSearch}
        // onChange={handleChange}
        // onChange={event => setQuery(event.target.value)}
        enterButton
      />

      <Dropdown overlay={menu}>
        <button
          type="button"
          className="ant-dropdown-link"
          onClick={e => e.preventDefault()}
        >
          지역을 선택해 주세요 <DownOutlined />
        </button>
      </Dropdown>

      <SearchTag>
        <SearchResultText>‘성동구’로 검색한 결과입니다.</SearchResultText>
      </SearchTag>
      <SearchFilterBtn>
        <button type="button">별점순</button>
        <button type="button">거리순</button>
      </SearchFilterBtn>

      {/* <SearchFilter /> */}
      <BestParkSlide />
      <ParkList search={search} area={area} />
      <Footer />
    </div>
  );
}
const { SearchTitle, SearchTag, SearchResultText, SearchFilterBtn } = style;
