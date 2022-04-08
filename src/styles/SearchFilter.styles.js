import styled from 'styled-components';
import { Button } from 'antd';

const SearchFilterContainer = styled.div`
  max-width: 855px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

const SearchTag = styled.div`
  margin-top: 20px;
`;

const SearchResultText = styled.div`
  margin-top: 20px;
`;

const SearchFilterBtn = styled.div`
  button {
    cursor: pointer;
    border: none;
    outline: none;
    background-color: transparent;
  }
`;

export const style = {
  SearchFilterContainer,
  SearchTag,
  SearchResultText,
  SearchFilterBtn,
};
