import React from "react";
import BestParkSlide from "../components/BestParkSlide";
import ParkList from "../components/ParkList";
import SearchForm from "../components/SearchForm";
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
