import React, { useState, useEffect } from 'react';
import { Input } from 'antd';
import { style } from '../../styles/SearchForm.styles';

const { Search } = Input;

// const onSearch = value => console.log(value);

export default function SearchForm(props) {
  const { onSearch } = props;

  const [searchText, setSearchText] = useState('');

  const handleInput = e => {
    const text = e.target.value;
    setSearchText(text);
  };

  const handleEnterKeyPressed = e => {
    if (e.key === 'Enter') {
      onSearch(searchText);
    }
  };

  // const onChange = event => console.log(event.target.value);
  // console.log(query);
  return (
    // 쓰로틀링은 마지막 함수가 호출된 이후 지정한 시간이 지나기 전에 호출되지 않도록 하는 것입니다.
    // 디바운싱은 연속적인 함수호출중 마지막 혹은 맨처음 함수가 호출되는 것입니다.
    //   디바운스와 쓰로틀링 UI에서 발생하는 이벤트를 제어하는 방법입니다.
    // 과도하게 이벤트 처리 함수(콜백함수)가 호출되지 않도록 하여 부하방지를 위해 쓰이는 방법입니다.

    // 쓰로틀링 (throttling): 사용자가 이벤트를 수행하는 동안 지정된 시간 간격으로 함수를 호출하는 방법입니다.
    // 디바운싱 (debouncing): 사용자가 특정 시간 동안 이벤트를 수행하지 않았을 때 함수를 호출하는 방법입니다.

    <SearchFormContainer>
      <SearchTitle>공원 어디로 갈까?</SearchTitle>
      <Search
        onChange={handleInput}
        onKeyPress={handleEnterKeyPressed}
        type="text"
        value={searchText}
        placeholder="Search your movies"
        // placeholder={handleInput}
        // onSearch={onSearch}
        // onChange={handleChange}
        // onChange={event => setQuery(event.target.value)}
        enterButton
      />
    </SearchFormContainer>
  );
}

const { SearchFormContainer, SearchTitle } = style;
