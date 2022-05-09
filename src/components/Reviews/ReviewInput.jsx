import React, { useEffect, useState } from "react";
import { Form, Input, Button, Rate } from "antd";
import { style } from "./ReviewInput.styles";
import useGetParkData from "../../hooks/useGetParkData";
import { useParams } from "react-router-dom";
// import { AuthContext } from "../../context/AuthProviders";
export const defaultHeaders = {
  "Content-Type": "application/json",
  Accept: "application/json",
};

export default function ReviewInput() {
  const { pidx } = useParams();
  const url = `https://parkproj.herokuapp.com/parks/${pidx}?sort=rDate,asc`;
  const { data, isLoading, hasError, errorMessage } = useGetParkData(url);
  const { TextArea } = Input;

  const handleSubmit = async (values) => {
    defaultHeaders.Authorization = localStorage.getItem("accessToken");
    try {
      const response = await fetch(`/parks/${pidx}/reviews`, {
        method: "POST",
        headers: defaultHeaders,
        body: JSON.stringify(values),
      });
    } catch (error) {
      console.log(error);
      throw new Error("Failed to load data");
    }
  };

  const validateMessages = {
    required: "${label} is required!",
    types: {
      email: "${label} is not a valid email!",
      number: "${label} is not a valid number!",
    },
    number: {
      range: "${label} must be between ${min} and ${max}",
    },
  };

  return (
    <ReviewInputContainer>
      <ReviewInputTitle>Review</ReviewInputTitle>

      <Form
        name="nest-messages"
        onFinish={handleSubmit}
        validateMessages={validateMessages}
      >
        <Form.Item name="rRate" label="rRate">
          <Rate name="rRate" label="rDesc" />
        </Form.Item>

        <Form.Item name="rDesc" label="rDesc">
          <Input.TextArea showCount maxLength={100} style={{ height: 120 }} />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>

      {data && <Rate disabled defaultValue={data.pavgRate} />}
    </ReviewInputContainer>
  );
}

const { ReviewInputContainer, ReviewInputTitle } = style;
