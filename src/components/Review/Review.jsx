import React from 'react';
import { Pagination, Rate, Input } from 'antd';
import { style } from '../../styles/Review.styles';
import ReviewItem from './ReviewItem';
import useFetch from '../../hooks/useFetch';

export default function Review() {
  const [reviewData, error, loading] = useFetch(
    `http://localhost:3001/review`, // 임시
  );

  console.log('확인1');
  console.log(reviewData);
  console.log('확인2');
  const { Search } = Input;

  const onSearch = value => console.log(value);
  return (
    <div className="container">
      <ReviewListContainer>
        <ReviewInputBox>
          <ReviewTitle>Review</ReviewTitle>
          <ReviewRate>
            <div className="flex align-items-center mb-20">
              <ReviewAverage>평점 4.8</ReviewAverage>
              <Rate allowHalf defaultValue={2.5} />
            </div>
          </ReviewRate>
          <div className="flex">
            <Rate allowHalf defaultValue={2.5} />
            <Search
              placeholder="리뷰를 입력해 주세요"
              onSearch={onSearch}
              enterButton="등록"
            />
          </div>
        </ReviewInputBox>
        <ReviewList>
          <ReviewItem />
          <ReviewItem />
          <ReviewItem />
          <ReviewItem />
          <ReviewItem />
          <ReviewItem />
          <Pagination defaultCurrent={1} total={50} />
        </ReviewList>
      </ReviewListContainer>
    </div>
  );
}
const {
  ReviewListContainer,
  ReviewTitle,
  ReviewRate,
  ReviewAverage,
  ReviewInputBox,
  ReviewList,
} = style;
