import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

export default function Googlemap({ lat: latitude, lng: longitude }) {
  const googleMapConfig = {
    apikey: process.env.REACT_APP_GOOGLEMAP_API_KEY,
  };

  const containerStyle = {
    // width: "300px",
    height: '350px',
  };

  const center = {
    lat: Number(latitude),
    lng: Number(longitude),
  };

  return (
    <LoadScript googleMapsApiKey={googleMapConfig.apikey}>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={13}>
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
}
