import React from 'react';
import { Input } from 'antd';
import { style } from '../../styles/SearchForm.styles';

const { Search } = Input;
const onSearch = value => console.log(value);

export default function SearchForm() {
  return (
    <SearchFormContainer>
      <SearchTitle>공원 어디로 갈까?</SearchTitle>
      <Search
        placeholder="공원 이름을 검색해 주세요."
        onSearch={onSearch}
        enterButton
      />
    </SearchFormContainer>
  );
}

const { SearchFormContainer, SearchTitle } = style;
