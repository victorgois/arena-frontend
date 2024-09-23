import React from "react";
import { GoogleMap, LoadScript, TrafficLayer } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: -19.92820255478079,
  lng: -44.0152271397175,
};

function TrafficMap() {
  return (
    <LoadScript googleMapsApiKey={process.env.GOOGLE_MAPS_API_KEY}>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
        <TrafficLayer />
      </GoogleMap>
    </LoadScript>
  );
}

export default TrafficMap;
