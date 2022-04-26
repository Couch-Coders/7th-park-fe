import React from 'react';
import { Button, Rate } from 'antd';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { style } from '../../styles/ReviewItem.styles';

export default function ReviewItem({ review }) {
  console.log(`넘어온 리뷰`);
  console.log(review);
  return (
    <ReviewItemContainer>
      <ReviewItemCard>
        <ReviewID>p3illi</ReviewID>
        <div className="flex align-items-center">
          <Rate allowHalf defaultValue={2.5} />
          <ReviewDate>2021. 09. 12</ReviewDate>
          <ReviewLike>
            <i>
              <FontAwesomeIcon icon={faThumbsUp} />
            </i>
            20
          </ReviewLike>
        </div>
        <ReviewContent>
          식당도 만족스럽고 공원도 깔끔해서 힐링하다가 가요 ㅎㅎ
        </ReviewContent>
      </ReviewItemCard>
      <ReviewBtns>
        <Button>수정</Button>
        <Button>삭제</Button>
      </ReviewBtns>
    </ReviewItemContainer>
  );
}
const {
  ReviewItemContainer,
  ReviewItemCard,
  ReviewID,
  ReviewDate,
  ReviewLike,
  ReviewContent,
  ReviewBtns,
} = style;
