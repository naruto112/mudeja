import React from 'react';
import MapViewDirections from 'react-native-maps-directions'

const Directions = ({ destination, origin, onReady }) => (
    <MapViewDirections 
        destination={destination}
        origin={origin}
        onReady={onReady}
        apikey="AIzaSyDwEx8wBk6yZK8_tfYspbKTZepGjv1V3vw"
        strokeWidth={2}
        strokeColor="#222"
    />
);

export default Directions;
