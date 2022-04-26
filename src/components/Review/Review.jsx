import React, { useState } from 'react';
import { Pagination, Rate, Input } from 'antd';
import { style } from '../../styles/Review.styles';
import ReviewItem from './ReviewItem';
import useFetch from '../../hooks/useFetch';

export default function Review() {
  const [reviewData, error, loading] = useFetch(
    `http://localhost:3001/review`, // 임시
  );

  const { Search } = Input;

  const onSearch = value => console.log(value);
  return (
    <div className="container">
      {loading && <div>잠시만 기다려 주세요...</div>}
      {error && (
        <div>{`평점 데이터를 가져오는데 문제가 있습니다. - ${error}`}</div>
      )}
      {reviewData && (
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
            {reviewData[0].content.map(review => {
              return <ReviewItem review={review} />;
            })}
            <Pagination defaultCurrent={1} total={50} />
          </ReviewList>
        </ReviewListContainer>
      )}
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
