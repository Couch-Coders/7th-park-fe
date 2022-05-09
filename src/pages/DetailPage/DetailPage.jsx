import React from "react";
import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/Navbar/Navbar";
import ParkDetail from "../../components/Parks/ParkDetail";
import SearchInput from "../../components/Search/SearchInput";
import { style } from "./DetailPage.styles";
import ReviewList from "../../components/Reviews/ReviewList";
import { useParams } from "react-router-dom";
import useGetParkData from "../../hooks/useGetParkData";

export default function DetailPage() {
  const { pidx } = useParams();
  const url = `https://parkproj.herokuapp.com/parks/${pidx}`;
  const { data, isLoading, hasError, errorMessage } = useGetParkData(url);
  return (
    <DetailContainer>
      <NavBar />
      <SearchInput />
      <ParkDetail />
      {data && <ReviewList pavgRate={data.pavgRate} />}
      <Footer />
    </DetailContainer>
  );
}
const { DetailContainer } = style;
