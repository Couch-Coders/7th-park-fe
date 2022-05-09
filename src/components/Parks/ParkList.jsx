import React, { useState, useEffect } from "react";
import { List, message, Skeleton, Divider } from "antd";
import useGetParkData from "../../hooks/useGetParkData";
import { style } from "./ParkList.styles";
import ParkCard from "./ParkCard";

export default function ParkList({ loading, data }) {
  // const url = "https://parkproj.herokuapp.com/parks";
  // const { data, isLoading, hasError, errorMessage } = useGetParkData(url);
  // console.log(data, "리스트 데이타");
  return (
    <ParkListContiner>
      {loading && <div>잠시만 기다려 주세요...</div>}
      {data && (
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
          dataSource={data}
          renderItem={(item) => <ParkCard key={item.pidx} item={item} />}
        />
      )}
    </ParkListContiner>
  );
}
const { ParkListContiner } = style;
