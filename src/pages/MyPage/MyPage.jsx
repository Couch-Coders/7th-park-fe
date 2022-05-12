import React, { useState, useEffect } from "react";
import { List, Avatar, Space, Button, Form, Input, Rate } from "antd";
import { LikeOutlined } from "@ant-design/icons";
import { style } from "./MyPage.styles";
import NavBar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import ParkCard from "../../components/Parks/ParkCard";
import ReviewCard from "../../components/Reviews/ReviewCard";
import { Tabs } from "antd";
export const defaultHeaders = {
  "Content-Type": "application/json",
  Accept: "application/json",
};

export default function MyPage() {
  const [myPark, setMyPark] = useState([]);
  const [myReview, setMyReview] = useState([]);

  defaultHeaders.Authorization = localStorage.getItem("accessToken");
  const { TabPane } = Tabs;

  function callback(key) {
    console.log(key);
  }
  const IconText = ({ icon, text }) => (
    <Space>
      {React.createElement(icon)}
      {text}
    </Space>
  );
  const getMyPark = async () => {
    try {
      const response = await fetch(`/users/me/parks`, {
        method: "GET",
        headers: defaultHeaders,
      });
      const result = await response.json();
      setMyPark(result);
    } catch (error) {
      console.log(error);
      throw new Error("Failed to load data");
    }
  };

  const getMyReview = async () => {
    try {
      const response = await fetch(`/users/me/reviews`, {
        method: "GET",
        headers: defaultHeaders,
      });
      const result = await response.json();
      setMyReview(result);
      console.log(result);
    } catch (error) {
      console.log(error);
      throw new Error("Failed to load data");
    }
  };

  useEffect(() => {
    getMyPark();
    getMyReview();
  }, []);

  return (
    <MyPageContainer>
      <NavBar />
      <MyPageContent>
        <Tabs defaultActiveKey="1" onChange={callback}>
          <TabPane tab="내가 좋아하는 공원" key="1">
            {myPark && (
              <List
                grid={{
                  gutter: 16,
                  xs: 1,
                  sm: 2,
                  md: 3,
                  lg: 3,
                  xl: 3,
                  xxl: 3,
                }}
                dataSource={myPark.content}
                renderItem={(item) => <ParkCard key={item.pidx} item={item} />}
              />
            )}
          </TabPane>
          <TabPane tab="내 리뷰" key="2">
            {myReview && (
              <List
                itemLayout="vertical"
                size="large"
                pagination={{
                  onChange: (page) => {
                    console.log(page);
                  },
                  pageSize: 8,
                }}
                dataSource={myReview.content}
                renderItem={(item) => (
                  <List.Item
                    key={item.ridx}
                    actions={[
                      <IconText
                        icon={LikeOutlined}
                        text={item.rlikeCnt}
                        key="list-vertical-like-o"
                      />,
                    ]}
                    // extra={
                    //   <img
                    //     width={272}
                    //     alt="logo"
                    //     src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                    //   />
                    // }
                  >
                    <List.Item.Meta
                      avatar={<Avatar src={item.avatar} />}
                      title={item.uidx.unickname}
                    />
                    <Rate disabled defaultValue={item.rrate} />
                    {item.rdesc}
                  </List.Item>
                )}
              />
            )}
          </TabPane>
        </Tabs>
      </MyPageContent>
      <Footer />
    </MyPageContainer>
  );
}
const { MyPageContainer, MyPageContent } = style;
