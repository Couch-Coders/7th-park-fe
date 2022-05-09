import React from "react";
import { Input } from "antd";
import { style } from "./SearchInput.styles";

export default function SearchInput() {
  const { Search } = Input;

  const onSearch = (value) => console.log(value);

  return (
    <SearchInputContainer>
      <SearchInputTitle>공원, 어디로 갈까?</SearchInputTitle>
      <Search
        placeholder="공원 이름을 검색해 주세요."
        onSearch={onSearch}
        enterButton
      />
    </SearchInputContainer>
  );
}
const { SearchInputContainer, SearchInputTitle } = style;
