import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

export default function Googlemap({ lat: px, lng: py }) {
  const googleMapConfig = {
    apikey: process.env.REACT_APP_GOOGLEMAP_API_KEY,
  };

  const containerStyle = {
    // width: "300px",
    height: '350px',
  };

  const center = {
    lat: Number(px),
    lng: Number(py),
  };

  return (
    <LoadScript googleMapsApiKey={googleMapConfig.apikey}>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={13}>
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
}
