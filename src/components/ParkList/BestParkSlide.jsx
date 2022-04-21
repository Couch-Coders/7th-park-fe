import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../../styles/slickCustomStyle.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { style } from '../../styles/BestParkSlide.styles';
import useFetch from '../../hooks/useFetch';
import Cards from './Cards';

export default function BestParkSlide() {
  const [parksData, error, loading] = useFetch(
    `http://localhost:3001/bestParkSlide`, // 임시
  );

  console.log('parksData');
  console.log(parksData);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    adaptiveHeight: true,
  };
  return (
    <SlideContainer>
      <h2>
        <i>
          <FontAwesomeIcon icon={faLocationDot} />
        </i>
        BEST
      </h2>
      {loading && <div>잠시만 기다려 주세요...</div>}
      {error && (
        <div>{`공원 데이터를 가져오는데 문제가 있습니다. - ${error}`}</div>
      )}
      {parksData && (
        <Slider {...settings}>
          {parksData.map(item => (
            <Cards item={item} />
          ))}
        </Slider>
      )}
    </SlideContainer>
  );
}
const { SlideContainer } = style;
