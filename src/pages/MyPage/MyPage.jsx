import React from "react";
import { style } from "./MyPage.styles";
import NavBar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { Tabs } from "antd";
export const defaultHeaders = {
  "Content-Type": "application/json",
  Accept: "application/json",
};

export default function MyPage() {
  defaultHeaders.Authorization = localStorage.getItem("accessToken");
  const { TabPane } = Tabs;

  function callback(key) {
    console.log(key);
  }

  const getMyPark = async () => {
    try {
      const response = await fetch(`/users/me/parks`, {
        method: "GET",
        headers: defaultHeaders,
      });
      console.log(response, "parks");
    } catch (error) {
      console.log(error);
      throw new Error("Failed to load data");
    }
  };
  getMyPark();

  const getMyReview = async () => {
    try {
      const response = await fetch(`/users/me/reviews`, {
        method: "GET",
        headers: defaultHeaders,
      });
      console.log(response, "reviews");
    } catch (error) {
      console.log(error);
      throw new Error("Failed to load data");
    }
  };
  getMyReview();

  return (
    <MyPageContainer>
      <NavBar />
      <MyPageContent>
        <Tabs defaultActiveKey="1" onChange={callback}>
          <TabPane tab="내가 좋아하는 공원" key="1">
            내가 좋아하는 공원 내용
          </TabPane>
          <TabPane tab="내 리뷰" key="2">
            내 리뷰 내용
          </TabPane>
        </Tabs>
      </MyPageContent>
      <Footer />
    </MyPageContainer>
  );
}
const { MyPageContainer, MyPageContent } = style;
