import {
  GoogleMap,
  LoadScript,
  Marker,
  Polyline,
  MarkerF,
  InfoWindow,
} from "@react-google-maps/api";
import { marker } from "leaflet";
import React, { useEffect, useState } from "react";
import { YOUR_API_KEY } from "../secret";

//  center on current location onload
//v 1. make a map with a marker
//  3. make a map with a marker and a info window and a button
//  4. import polyline
//  5. we are the bus so load the bus marker and have it move on the map when the lat long coords change

const containerStyle = {
  width: "100vw",
  height: "100vh",
};

const center = {
  lat: 43.6532,
  lng: -79.3832,
};

const markerMap = [
  {
    lat: 43.6532,
    lng: -79.3832,
  },
  { lat: 43.32, lng: -79.332 },
  { lat: 43.532, lng: -79.3532 },
  { lat: 43.12, lng: -79.42 },
];

const polylinePath = [
  {
    lat: 43.6532,
    lng: -79.3832,
  },
  { lat: 43.32, lng: -79 },
  { lat: 43.532, lng: -79.3532 },
  { lat: 43.12, lng: -79.42 },
];

const polylineOptions = {
  strokeColor: "#FF0000",
  strokeOpacity: 0.8,
  strokeWeight: 2,
  fillColor: "#FF0000",
  fillOpacity: 0.35,
  clickable: false,
  draggable: false,
  editable: false,
  visible: true,
  radius: 30000,
  zIndex: 1,
};
const marker1 = [
  {
    lat: 43.6532,
    lng: 79.3832,
  },
];

export default function SimpleMap(props) {
  const [currentLocation, setCurrentLocation] = useState(null);
  const [showingInfoWindow, setShowingInfoWindow] = useState(false);
  const [infoWindow, setInfoWindow] = useState("");
  console.log(currentLocation);

  const success = (position) => {
    console.log("position", position);
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    console.log(lat, lng);
    setCurrentLocation({ lat, lng });
  };

  const error = () => {
    console.log("error");
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success, error);
  }, []);

  const handleClick = (e) => {
    setShowingInfoWindow(true);
    setInfoWindow("Jamaican me crazy");
    console.log("Jamaican me crazy");
  };

  return (
    <LoadScript googleMapsApiKey={YOUR_API_KEY}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={currentLocation}
        zoom={10}
      >
        {markerMap &&
          markerMap.map((marker, _) => {
            return <Marker position={marker} clickable />;
          })}

        {polylinePath && (
          <Polyline path={polylinePath} options={polylineOptions} />
        )}
        <Marker
          icon={
            "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png"
          }
          label='You are here!'
          position={currentLocation}
        />
        {/* <InfoWindow visible={true}>
          <div>Jamaican me crazy</div>
        </InfoWindow> */}
        <Marker
          position={currentLocation}
          icon={require("../icons8-shuttle-bus-48.png")}
          clickable
          onClick={handleClick}
        />
        {polylinePath.map((marker1) => {
          return (
            <>
              <Marker
                key='marker_1'
                onClick={(e) => handleClick}
                icon={require("../icons8-shuttle-bus-48.png")}
                label='hello'
                position={marker1}
                clickable
              />
              {/* <InfoWindow visible={showingInfoWindow}>
                <div></div>
              </InfoWindow> */}
            </>
          );
        })}
      </GoogleMap>
    </LoadScript>
  );
}
