import styled from "styled-components";

const ParkDetailContainer = styled.div`
  width: 1000px;
  margin: 0 auto 50px;
`;

const ParkTitle = styled.div`
  margin-bottom: 20px;
  font-size: 24px;
  font-weight: bold;
`;
const ParkDetailTop = styled.div`
  display: flex;
  justify-content: space-between;
`;
const ParkDetailBottom = styled.div`
  font-size: 20px;
  .detailInfo {
    display: flex;
    justify-content: space-between;
    margin: 10px 0;
  }
`;

const ParkImage = styled.div``;

const ParkMap = styled.div``;

export const style = {
  ParkDetailContainer,
  ParkDetailTop,
  ParkDetailBottom,
  ParkTitle,
  ParkImage,
  ParkMap,
};
