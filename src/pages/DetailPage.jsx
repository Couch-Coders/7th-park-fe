import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Review from '../components/Review/Review';
import ParkDetail from '../components/ParkDetail/ParkDetail';
import SearchInput from '../components/Search/SearchInput';

export default function DetailPage() {
  return (
    <div>
      <Header />
      <SearchInput />
      <ParkDetail />
      <Review />
      <Footer />
    </div>
  );
}
