import React from "react";
import { Button, Rate } from "antd";
import { style } from "../../styles/ReviewItem.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
export default function ReviewItem() {
  return (
    <div>
      <ReviewID>p3illi</ReviewID>
      <div className="flex align-items-center">
        <Rate allowHalf defaultValue={2.5} />
        <ReviewDate>2021. 09. 12</ReviewDate>
        <ReviewLike>
          20
          <FontAwesomeIcon icon={faThumbsUp} />
        </ReviewLike>
      </div>
      <ReviewContent>
        식당도 만족스럽고 공원도 깔끔해서 힐링하다가 가요 ㅎㅎ
      </ReviewContent>
      <ReviewBtns>
        <Button>수정</Button>
        <Button>삭제</Button>
      </ReviewBtns>
    </div>
  );
}
const { ReviewID, ReviewDate, ReviewLike, ReviewContent, ReviewBtns } = style;
