import React from 'react';
import { Tag, Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { style } from '../../styles/SearchFilter.styles';

export default function SearchFilter() {
  const onClick = ({ key }) => {
    console.log(`Click on item ${key}`);
  };

  const menu = (
    <Menu onClick={onClick}>
      <Menu.Item key="1">#강남구</Menu.Item>
      <Menu.Item key="2">#강동구</Menu.Item>
      <Menu.Item key="3">#강북구</Menu.Item>
      <Menu.Item key="4">#강서구</Menu.Item>
      <Menu.Item key="5">#관악구</Menu.Item>
      <Menu.Item key="6">#광진구</Menu.Item>
      <Menu.Item key="7">#구로구</Menu.Item>
      <Menu.Item key="8">#금천구</Menu.Item>
      <Menu.Item key="9">#노원구</Menu.Item>
      <Menu.Item key="10">#도봉구</Menu.Item>
      <Menu.Item key="11">#동대문구</Menu.Item>
      <Menu.Item key="12">#동작구</Menu.Item>
      <Menu.Item key="13">#마포구</Menu.Item>
      <Menu.Item key="14">#서대문구</Menu.Item>
      <Menu.Item key="15">#서초구</Menu.Item>
      <Menu.Item key="16">#성동구</Menu.Item>
      <Menu.Item key="17">#성북구</Menu.Item>
      <Menu.Item key="18">#송파구</Menu.Item>
      <Menu.Item key="19">#양천구</Menu.Item>
      <Menu.Item key="20">#영등포구</Menu.Item>
      <Menu.Item key="21">#용산구</Menu.Item>
      <Menu.Item key="22">#은평구</Menu.Item>
      <Menu.Item key="23">#종로구</Menu.Item>
      <Menu.Item key="24">#중구</Menu.Item>
      <Menu.Item key="25">#중랑구</Menu.Item>
    </Menu>
  );

  return (
    <div>
      <SearchFilterContainer>
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
      </SearchFilterContainer>
    </div>
  );
}
const { SearchFilterContainer, SearchTag, SearchResultText, SearchFilterBtn } =
  style;
