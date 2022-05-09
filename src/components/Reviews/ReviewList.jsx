import React, { useRef, useEffect, useState, useContext } from "react";
import useGetParkData from "../../hooks/useGetParkData";
import { List, Avatar, Space, Button, Form, Input, Rate } from "antd";
import { LikeOutlined } from "@ant-design/icons";
import { useParams, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProviders";
// import ReviewCard from "./ReviewCard";

import { style } from "./ReviewList.styles";
// import ReviewInput from "./ReviewInput";

export const defaultHeaders = {
  "Content-Type": "application/json",
  Accept: "application/json",
};

export default function ReviewList({ pavgRate }) {
  // const liRef = useRef(null);
  const { pidx } = useParams();

  const url = `https://parkproj.herokuapp.com/parks/${pidx}/reviews?sort=rDate,desc`;
  const { data, isLoading, hasError, errorMessage } = useGetParkData(url);

  const { currentUser } = useContext(AuthContext);

  const [isReviewUpdated, setIsReviewUpdated] = useState([]);
  const [targetIndex, setTargetIndex] = useState();
  const [rdescValue, setRdescValue] = useState();

  const [form] = Form.useForm();

  defaultHeaders.Authorization = localStorage.getItem("accessToken");

  const IconText = ({ icon, text }) => (
    <Space>
      {React.createElement(icon)}
      {text}
    </Space>
  );

  const handleSubmit = async (values) => {
    // form.resetFields();
    console.log(values, "values");
    try {
      const response = await fetch(`/parks/${pidx}/reviews`, {
        method: "POST",
        headers: defaultHeaders,
        body: JSON.stringify(values),
      });
      // console.log(response.json, "response");
      if (response.ok) {
        setIsReviewUpdated(() => [
          ...isReviewUpdated,
          {
            rrate: values.rRate,
            rdesc: values.rDesc,
            unickname: currentUser.unickname,
          },
        ]);
      }
      form.resetFields();
    } catch (error) {
      console.log(error);
      throw new Error("Failed to load data");
    }
  };
  const getReviewList = async () => {
    try {
      const response = await fetch(`/parks/${pidx}/reviews?sort=rDate,desc`);
      const result = await response.json();
      if (response.ok) {
        setIsReviewUpdated(result.content);
      } else {
      }
    } catch (err) {
      console.log(err);
    }
  };
  console.log(isReviewUpdated, "isReviewUpdated");

  useEffect(() => {
    getReviewList();
  }, []);

  // 수정 등록
  const handleUpdateSubmit = async (ridx, rdesc, rrate) => {
    console.log("등록");
    // console.log(rdesc);
    try {
      const response = await fetch(`/parks/${pidx}/reviews/${ridx}`, {
        method: "PATCH",
        headers: defaultHeaders,
        body: JSON.stringify({
          rrate: rrate,
          rdesc: rdesc,
        }),
      });
      console.log(response);
      console.log(response.body);
    } catch (error) {
      console.log(error);
      throw new Error("Failed to load data");
    }
  };

  // 삭제
  const handleDelete = async (ridx) => {
    const response = await fetch(`/parks/${pidx}/reviews/${ridx}`, {
      method: "DELETE",
      headers: defaultHeaders,
      body: null,
    });
    getReviewList();
  };

  const handleLike = async (ridx) => {
    console.log("리뷰 좋아요 함수로 넘어감");
    try {
      const response = await fetch(`/parks/${ridx}/good`, {
        method: "POST",
        headers: defaultHeaders,
        body: JSON.stringify({ rLikeCnt: 1 }),
      });
      console.log(response.body);
      console.log(response.json());
    } catch (error) {
      console.log(error);
      throw new Error("Failed to load data");
    }
  };

  // 수정 할 아이템
  const handleUpdate = (e, rdesc) => {
    setRdescValue(e.target.value);
    console.log(rdescValue, "rdescValue");
  };

  // 클릭이벤트
  const handleClickEvent = (e, ridx, rdesc, rrate) => {
    if (e.target.innerHTML === "수정") {
      setTargetIndex(ridx);
    }

    // 수정 등록일때
    if (e.target.innerHTML === "등록") {
      handleUpdateSubmit(ridx, rdescValue, rrate);
    }

    // 삭제일 때
    if (e.target.innerHTML === "삭제") {
      handleDelete(ridx);
    }

    // 리뷰좋아요
    if (e.target.getAttribute("data-icon") === "like") {
      console.log("리뷰좋아요 누름");
      handleLike(ridx);
    }
  };

  console.log(data);

  return (
    <ReviewListContainer>
      {isLoading && <div>잠시만 기다려 주세요...</div>}
      {data && (
        <>
          <ReviewInputContainer>
            <ReviewInputTitle>Review</ReviewInputTitle>
            <ReviewInputRate>
              <b> 평점 {pavgRate}</b>
              <Rate disabled defaultValue={pavgRate} />
            </ReviewInputRate>
            <Form form={form} name="nest-messages" onFinish={handleSubmit}>
              <Form.Item name="rRate" label="rRate">
                <Rate name="rRate" label="rRate" />
              </Form.Item>

              <Form.Item name="rDesc" label="rDesc">
                <Input
                  showCount
                  style={{ width: "calc(600px)" }}
                  maxLength={20}
                />
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit">
                  등록
                </Button>
              </Form.Item>
            </Form>
          </ReviewInputContainer>
          <List
            itemLayout="vertical"
            size="large"
            pagination={{
              onChange: (page) => {
                console.log(page);
              },
              pageSize: 8,
            }}
            dataSource={isReviewUpdated}
            renderItem={(item) => (
              <List.Item
                key={item.ridx}
                data-index={item.ridx}
                onClick={(e) => {
                  handleClickEvent(e, item.ridx, item.rdesc, item.rrate);
                }}
                actions={[
                  <IconText
                    icon={LikeOutlined}
                    text={item.rlikeCnt}
                    key="list-vertical-like-o"
                  />,
                ]}
                extra={
                  <>
                    <Button>등록</Button>
                    <Button>수정</Button>
                    <Button>삭제</Button>
                  </>
                }
              >
                <List.Item.Meta
                  avatar={<Avatar src={item.avatar} />}
                  title={item.unickname}
                />
                <Rate disabled defaultValue={item.rrate} />
                {item.ridx === targetIndex ? (
                  <Input onChange={handleUpdate} defaultValue={item.rdesc} />
                ) : (
                  item.rdesc
                )}
              </List.Item>
            )}
          />
        </>
      )}
    </ReviewListContainer>
  );
}

const {
  ReviewListContainer,
  ReviewInputContainer,
  ReviewInputTitle,
  ReviewInputRate,
} = style;
