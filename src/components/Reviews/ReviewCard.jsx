import React from "react";
import { Button, Rate } from "antd";
import { style } from "./ReviewCard.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";

export default function ReviewCard() {
  return (
    <ReviewCardContainer>
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
    </ReviewCardContainer>
  );
}

const {
  ReviewCardContainer,
  ReviewItemCard,
  ReviewID,
  ReviewDate,
  ReviewLike,
  ReviewContent,
  ReviewBtns,
} = style;
