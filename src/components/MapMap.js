import React from "react";
// import { GoogleMap, LoadScript } from "@react-google-maps/api";

// const containerStyle = {
//   width: "400px",
//   height: "400px",
// };

// const center = {
//   lat: 41.3925376,
//   lng: 2.1659648,
// };

// const locations = { lat: 41.3925376, lng: 2.1659648 };

// function MyComponent() {
//   const [map, setMap] = React.useState(null);

//   const onLoad = React.useCallback(function callback(map) {
//     const bounds = new window.google.maps.LatLngBounds();
//     map.fitBounds(bounds);
//     setMap(map);
//   }, []);

//   const onUnmount = React.useCallback(function callback(map) {
//     setMap(null);
//   }, []);

//   return (
//     <LoadScript googleMapsApiKey="AIzaSyCkdtpnxy67HxsHOlW4FfWchg26FBSIiGU">
//       <GoogleMap
//         mapContainerStyle={containerStyle}
//         center={center}
//         zoom={100}
//         onLoad={onLoad}
//         onUnmount={onUnmount}
//         markers={locations}
//       >
//         {/* Child components, such as markers, info windows, etc. */}
//         <></>
//       </GoogleMap>
//     </LoadScript>
//   );
// }

// export default React.memo(MyComponent);
