import React from 'react';
import BestParkSlide from '../components/BestParkSlide/BestParkSlide';
import ParkList from '../components/ParkList/ParkList';
import SearchForm from '../components/Search/SearchForm';
import SearchInput from '../components/Search/SearchInput';
import SearchFilter from '../components/Search/SearchFilter';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function MainPage() {
  // 검색

  return (
    <div>
      <Header />
      <SearchInput />
      <SearchForm />
      <SearchFilter />
      <BestParkSlide />
      <ParkList />
      <Footer />
    </div>
  );
}
