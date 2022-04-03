import React from "react";
import BestParkSlide from "../components/BestParkSlide/BestParkSlide";
import ParkList from "../components/ParkList/ParkList";
import SearchForm from "../components/Search/SearchForm";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function MainPage() {
  return (
    <div>
      <Header />
      <SearchForm />
      <BestParkSlide />
      <ParkList />
      <Footer />
    </div>
  );
}
