import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const googleMapConfig = {
  apikey: process.env.REACT_APP_GOOGLEMAP_API_KEY,
};

const containerStyle = {
  // width: "300px",
  height: '350px',
};

const center = {
  lat: 37.5501402,
  lng: 126.9903773,
};

export default function Googlemap() {
  return (
    <LoadScript googleMapsApiKey={googleMapConfig.apikey}>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
}
