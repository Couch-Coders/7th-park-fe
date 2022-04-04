import styled from "styled-components";

const ReviewItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0;
`;
const ReviewItemCard = styled.div``;
const ReviewID = styled.div`
  font-size: 20px;
`;
const ReviewDate = styled.div`
  margin-left: 20px;
`;
const ReviewLike = styled.div`
  margin-left: 20px;
  i {
    margin-right: 10px;
  }
`;
const ReviewContent = styled.div`
  margin: 10px 0;
`;
const ReviewBtns = styled.div`
  button {
    margin: 0 5px;
  }
`;

export const style = {
  ReviewItemContainer,
  ReviewItemCard,
  ReviewID,
  ReviewDate,
  ReviewLike,
  ReviewContent,
  ReviewBtns,
};
