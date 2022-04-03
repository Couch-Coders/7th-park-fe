import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Tabs, Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import ParkList from "../components/ParkList/ParkList";
export default function MyPage() {
  const { TabPane } = Tabs;
  function callback(key) {
    console.log(key);
  }

  return (
    <div>
      <Header />
      <div className="container">
        <div className="flex">
          <Avatar size={64} icon={<UserOutlined />} />
          UserName
        </div>
        <Tabs defaultActiveKey="1" onChange={callback}>
          <TabPane tab="내가 좋아하는 공원" key="1">
            <b>내가 좋아하는 공원</b>
            <div>
              <ParkList />
            </div>
          </TabPane>
          <TabPane tab="내 리뷰" key="2">
            <b>내 리뷰</b>
          </TabPane>
        </Tabs>
      </div>
      <Footer />
    </div>
  );
}
