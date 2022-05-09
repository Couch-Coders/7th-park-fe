import React, { useState, useEffect } from "react";
import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/Navbar/Navbar";
import ParkList from "../../components/Parks/ParkList";
import SearchInput from "../../components/Search/SearchInput";
import { style } from "./MainPage.styles";
import ParkSlide from "../../components/Parks/ParkSlide";
// import Footer from "../../components/Footer/Footer";

import { List, message, Skeleton, Divider } from "antd";

import InfiniteScroll from "react-infinite-scroll-component";

export default function MainPage() {
  // 메인페이지 데이터
  // 1. 로그인 했는지 안했는지 체크 해서 헤더에 보여주기
  // 2. 공원 목록 데이터
  // 3. 리뷰 좋은 순 데이터

  // 메인페이지 기능
  // 1. 검색기능
  // 검색창에 공원이름을 입력하면 검색된다.
  // 2. 지역(구)를 누르면 지역으로 검색한 결과를 출력
  // 3. 별점순, 거리순 을 각각 누르면 목록이 변경된다.
  // 4. 각 공원을 누르면 상세페이지로 이동한다.
  // 5. 슬라이드 기능
  // 6. 공원목록 무한스크롤

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);

  const loadMoreData = () => {
    setPageNumber(pageNumber + 1);
    if (loading) {
      return;
    }
    setLoading(true);
    fetch(`https://parkproj.herokuapp.com/parks?page=${pageNumber}&size=16`)
      .then((res) => res.json())
      .then((body) => {
        setData([...data, ...body.content]);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    loadMoreData();
  }, []);

  return (
    <InfiniteScroll
      dataLength={data.length}
      next={loadMoreData}
      hasMore={data.length < 131}
      endMessage={<Footer />}
      style={{ overflowX: "hidden" }}
    >
      <MainContainer>
        <NavBar />
        <ParkSlide />
        <SearchInput />
        {data && <ParkList data={data} loading={loading} />}
        {/* <Footer /> */}
      </MainContainer>
    </InfiniteScroll>
  );
}
const { MainContainer } = style;
