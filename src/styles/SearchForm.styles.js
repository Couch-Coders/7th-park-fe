import styled from 'styled-components';

const SearchFormContainer = styled.div`
  width: 855px;
  /* max-width: 552px; */
  margin: 0 auto;
  padding-bottom: 36px;
  border-bottom: 3px solid #d9d9d9;
`;

const SearchTitle = styled.div`
  text-align: center;
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 40px;
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
  SearchFormContainer,
  SearchTitle,
  SearchTag,
  SearchResultText,
  SearchFilterBtn,
};
