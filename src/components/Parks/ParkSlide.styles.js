import styled from "styled-components";

const ParkSlideContainer = styled.div`
  margin: 50px 0;

  .slick-arrow {
    z-index: 9999;
  }
  .slick-arrow.slick-prev {
    left: 0px;
  }
  .slick-arrow.slick-next {
    right: 0px;
  }
  .slick-list {
    /* padding: 0 50px; */
    margin: 0 -15px;
    overflow: visible;
  }

  .slick-prev,
  .slick-next {
    width: 40px;
    height: 40px;
    /* border: 1px solid #ddd; */
    border-radius: 100%;
    box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
  }
  .slick-prev:before,
  .slick-next:before {
    font-size: 40px;
    opacity: 1;
  }
`;

const ParkSlideTitle = styled.div`
  font-size: 30px;
  font-weight: bold;
  margin: 20px 0;
  color: #495056;
`;
const ParkSlideImg = styled.div`
  padding: 0 3%;
  /* height: 150px; */
  img {
    width: 100%;
  }
`;

export const style = { ParkSlideContainer, ParkSlideTitle, ParkSlideImg };
