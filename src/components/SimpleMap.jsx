// import {
//   GoogleMap,
//   LoadScript,
//   Marker,
//   Polyline,
//   MarkerF,
//   InfoWindow,
// } from "@react-google-maps/api";
// import { marker } from "leaflet";
// import React, { useEffect, useState } from "react";
// import { YOUR_API_KEY } from "../secret";

// //  center on current location onload
// //v 1. make a map with a marker
// //  3. make a map with a marker and a info window and a button
// //  4. import polyline
// //  5. we are the bus so load the bus marker and have it move on the map when the lat long coords change

// const containerStyle = {
//   width: "100vw",
//   height: "100vh",
// };

// const center = {
//   lat: 43.6532,
//   lng: -79.3832,
// };
// const markerMap = [
//   {
//     lat: 43.6532,
//     lng: -79.3832,
//   },
//   { lat: 43.32, lng: -79.332 },
//   { lat: 43.532, lng: -79.3532 },
//   { lat: 43.12, lng: -79.42 },
// ];
// // const stopMarker = SimpleMap.addMarker(new MarkerOptions(){
// // .position(markerMap))
// // }
// const polylinePath = [
//   {
//     lat: 43.6532,
//     lng: -79.3832,
//   },
//   { lat: 43.32, lng: -79 },
//   { lat: 43.532, lng: -79.3532 },
//   { lat: 43.12, lng: -79.42 },
// ];

// // var map = new google.maps.Map(mapDiv, mapOptions)
// // var marker = new google.maps.Marker({
// //   position: new google.maps.LatLng(37.820667, -122.478526)
// //   map: map
// // })
// const polylineOptions = {
//   strokeColor: "#FF0000",
//   strokeOpacity: 0.8,
//   strokeWeight: 2,
//   fillColor: "#FF0000",
//   fillOpacity: 0.35,
//   clickable: false,
//   draggable: false,
//   editable: false,
//   visible: true,
//   radius: 30000,
//   zIndex: 1,
// };
// const marker1 = [
//   {
//     lat: 43.6532,
//     lng: 79.3832,
//   },
// ];

// export default function SimpleMap(props) {
//   const [currentLocation, setCurrentLocation] = useState(null);
//   const [showingInfoWindow, setShowingInfoWindow] = useState(false);
//   //const [infoWindow, setInfoWindow] = useState("");
//   console.log(currentLocation);
//   const onLoad = (infoWindow) => {
//     console.log("infoWindow: ", infoWindow);
//   };

//   const success = (position) => {
//     console.log("position", position);
//     const lat = position.coords.latitude;
//     const lng = position.coords.longitude;
//     console.log(lat, lng);
//     setCurrentLocation({ lat, lng });
//   };

//   const error = () => {
//     console.log("error");
//   };

//   useEffect(() => {
//     navigator.geolocation.getCurrentPosition(success, error);
//   }, []);

//   const handleClick = (e) => {
//     setShowingInfoWindow(true);
//     // setInfoWindow("Jamaican me crazy");
//     console.log("Jamaican me crazy");
//   };

//   return (
//     <LoadScript googleMapsApiKey={YOUR_API_KEY}>
//       <GoogleMap
//         mapContainerStyle={containerStyle}
//         center={currentLocation}
//         zoom={10}
//       >
//         {/* var infoWindow = new google.maps.InfoWindow({
//        content: "Stop#2"
//      })
//    google.maps.event.addListener(marker, 'click', function(){
//       infoWindow.open(map, marker)
//     }) */}

//         {markerMap &&
//           markerMap.map((marker, _) => {
//             return <Marker position={marker} clickable />;
//           })}
//      <Marker />
//         <InfoWindow onLoad={onLoad} position={markerMap}>
//           <div>
//             <hi>Stop # ${}</hi>
//           </div>
//         </InfoWindow>
//         </Marker>
//         {polylinePath && (
//           <Polyline path={polylinePath} options={polylineOptions} />
//         )}
//         {/* <Marker
//           icon={
//             "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png"
//           }
//           label='You are here!'
//           position={currentLocation}
//         /> */}
//         {/* <InfoWindow visible={true}>
//           <div>Jamaican me crazy</div>
//         </InfoWindow> */}

//         <Marker
//           position={currentLocation}
//           icon={require("../icons8-shuttle-bus-48.png")}
//           clickable
//           onClick={handleClick}
//           label='You are here!'
//         />

//         {polylinePath.map((marker1) => {
//           return (
//             <>
//               <Marker
//                 key='marker_1'
//                 onClick={(e) => handleClick}
//                 icon={require("../icons8-shuttle-bus-48.png")}
//                 label='Routa'
//                 position={marker1}
//                 clickable
//               />
//               {/* <InfoWindow visible={showingInfoWindow}>
//                 <div></div>
//               </InfoWindow> */}
//             </>
//           );
//         })}
//       </GoogleMap>
//     </LoadScript>
//   );
// }

import {
  GoogleMap,
  LoadScript,
  Marker,
  Polyline,
  InfoWindow,
} from "@react-google-maps/api";
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
    lat: 40.7128,
    lng: -74.006,
  },
  { lat: 41.4459, lng: -74.4229 },
  { lat: 43.0481, lng: -76.1474 },
  { lat: 43.092461, lng: -79.04715 },
  { lat: 43.6532, lng: -79.3832 },
];

const polylinePath = [
  {
    lat: 40.7128,
    lng: -74.006,
  },
  { lat: 41.4459, lng: -74.4229 },
  { lat: 43.0481, lng: -76.1474 },
  { lat: 43.092461, lng: -79.04715 },
  { lat: 43.6532, lng: -79.3832 },
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

export default function SimpleMap() {
  const [currentLocation, setCurrentLocation] = useState(null);
  console.log(currentLocation);
  const [showingInfoWindow, setShowingInfoWindow] = useState(false);
  const [infoWindow, setInfoWindow] = useState("");
  const [toggleOpen, setToggleOpen] = useState({
    isOpen: "false",
  });
  console.log("toggleOpen", toggleOpen);
  const success = (position) => {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    console.log(lat, lng);
    setCurrentLocation({ lat, lng });
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success, error);
  }, []);

  const error = () => {
    console.log("error");
  };

  const handleToggleOpen = (e) => {
    setToggleOpen({
      isOpen: true,
    });
  };

  const handleToggleClose = (e) => {
    setToggleOpen({
      isOpen: false,
    });
  };

  const handleClick = (e) => {
    setShowingInfoWindow(true);
    // setInfoWindow("Jamaican me crazy");
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
            return (
              <>
                <Marker
                  position={marker}
                  clickable
                  onClick={(e) => {
                    handleToggleOpen();
                  }}
                />
                {/* toggleOpen.isOpen && (
                //   <InfoWindow
                //   onCloseClick={() => handleToggleClose()}/>
                //   <span>Stop # ${}</span>
                //   </InfoWindow>
                //   ) */}
               
              </>
            );
          })}

        {polylinePath && (
          <Polyline path={polylinePath} options={polylineOptions} />
        )}
        {polylinePath.map((marker1) => {
          return (
            <>
              <Marker
                key='marker_1'
                onClick={(e) => handleClick}
                icon={require("../icons8-shuttle-bus-48.png")}
                label='Routa'
                position={marker1}
                clickable
              />
             
              {toggleOpen.isOpen && (
                <>
                  <InfoWindow
                  onCloseClick={() => handleToggleClose()}/>
                  <span>Stop # ${}</span>
                  </InfoWindow>)
                  </>}
                  </>
                  )}
              
          );
              
        }
      </GoogleMap>
    </LoadScript>
  );
}

      {/* <InfoWindow
                onClick={setShowingInfoWindow}
                visible={showingInfoWindow}
              >
                <div>Stop # ${}</div>
              </InfoWindow> */}