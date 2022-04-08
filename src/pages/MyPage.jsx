import React, { useContext } from 'react';
import { Tabs, Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ParkList from '../components/ParkList/ParkList';
import ReviewItem from '../components/Review/ReviewItem';
import { AuthContext } from '../contexts/AuthProviders';
import { style } from '../styles/Mypage.styles';

export default function MyPage() {
  const { TabPane } = Tabs;
  const callback = function callback(key) {
    console.log(key);
  };
  const { currentUser } = useContext(AuthContext);

  return (
    <div>
      <Header />
      <div className="container">
        <div className="flex align-items-center bold">
          {currentUser ? (
            <>
              <i className="mr-10">
                <Avatar size={64} src={currentUser.photoURL} />
              </i>
              {`${currentUser.displayName} 님 반갑습니다.`}
            </>
          ) : (
            <>
              <Avatar size={64} icon={<UserOutlined />} />
              UserName
            </>
          )}
        </div>
        <Tabs defaultActiveKey="1" onChange={callback()}>
          <TabPane tab="내가 좋아하는 공원" key="1">
            <TabTitle>내가 좋아하는 공원</TabTitle>
            <div>
              <ParkList />
            </div>
          </TabPane>
          <TabPane tab="내 리뷰" key="2">
            <TabTitle>내 리뷰</TabTitle>
            <div>
              <ReviewItem />
              <ReviewItem />
              <ReviewItem />
              <ReviewItem />
            </div>
          </TabPane>
        </Tabs>
      </div>
      <Footer />
    </div>
  );
}
const { TabTitle } = style;
