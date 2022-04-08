import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Review from '../components/Review/Review';
import ParkDetail from '../components/ParkDetail/ParkDetail';
import SearchForm from '../components/Search/SearchForm';

export default function DetailPage() {
  return (
    <div>
      <Header />
      <SearchForm />
      <ParkDetail />
      <Review />
      <Footer />
    </div>
  );
}
