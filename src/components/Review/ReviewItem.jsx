import React from 'react';
import { Button, Rate } from 'antd';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { style } from '../../styles/ReviewItem.styles';

export default function ReviewItem({ review: r }) {
  return (
    <ReviewItemContainer>
      <ReviewItemCard>
        <ReviewID>{r.unickname}</ReviewID>
        <div className="flex align-items-center">
          <Rate allowHalf defaultValue={r.rrate} />
          <ReviewDate>{r.rdate}</ReviewDate>
          <ReviewLike>
            <i>
              <FontAwesomeIcon icon={faThumbsUp} />
            </i>
            {r.rlikeCnt}
          </ReviewLike>
        </div>
        <ReviewContent>{r.rdesc}</ReviewContent>
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
