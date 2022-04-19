import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../../styles/slickCustomStyle.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { style } from '../../styles/BestParkSlide.styles';

export default function BestParkSlide() {
  const [parksData, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      // fetch(`http://localhost:3001/parksBest`)
      //   .then(res => {
      //     return res.json();
      //   })
      //   .then(data => {
      //     setData(data);
      //   });

      try {
        const response = await fetch(`http://localhost:3001/parksBest`);
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`,
          );
        }
        const data = await response.json();
        setData(data);
        // console.log(data);
        setError(null);
      } catch (err) {
        setError(err.message);
        setData(null);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

  console.log(parksData);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
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
            <div key={item.pidx}>
              <h3>{item.pname}</h3>
            </div>
          ))}
          <div>
            <h3>{parksData[0].pname}</h3>
          </div>
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>1</h3>
          </div>
        </Slider>
      )}
    </SlideContainer>
  );
}
const { SlideContainer } = style;
