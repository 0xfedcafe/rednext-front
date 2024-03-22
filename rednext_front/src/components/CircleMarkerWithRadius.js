import React from 'react';
import { CircleMarker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const CircleMarkerWithRadius = ({ center, radius }) => {
  return (
      <CircleMarker center={center} radius={radius} pathOptions={{ color: 'red' }}>
      </CircleMarker>
  );
};

export default CircleMarkerWithRadius;
