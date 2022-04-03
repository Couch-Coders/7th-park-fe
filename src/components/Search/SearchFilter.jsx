import React from "react";
import { Tag } from "antd";
import { style } from "../../styles/SearchFilter.styles";
export default function SearchFilter() {
  function log(e) {
    console.log(e);
  }
  return (
    <div>
      <SearchFilterContainer>
        <SearchTag>
          <Tag>#중구</Tag>
          <Tag>#성북구</Tag>
          <Tag>#강남구</Tag>
          <SearchResultText>‘성동구’로 검색한 결과입니다.</SearchResultText>
        </SearchTag>
        <SearchFilterBtn>
          <button>별점순</button>
          <button>거리순</button>
        </SearchFilterBtn>
      </SearchFilterContainer>
    </div>
  );
}
const { SearchFilterContainer, SearchTag, SearchResultText, SearchFilterBtn } =
  style;
