
import React from "react";
import { useMemo } from "react";
import { GoogleMap, useJsApiLoader, Marker, InfoWindow, DistanceMatrixService } from '@react-google-maps/api';

const containerStyle = {
  height: "400px",
  width: "800px"
}

const center = {
  lat: 0,
  lng: -180
}

const divStyle = {
  background: `white`,
  border: `1px solid #ccc`,
  padding: 1,
}

const busPositions = [
{ lat:19.180297715731893, lng: 72.83190245506327 },
{ lat: 19.180577609774627, lng: 72.83145115298338},
{ lat: 19.17998167629188, lng: 72.83148495432776},  
];


function MyComponent() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: '',
  })

  const [map, setMap] = React.useState(null)
  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map)
  }, [])


  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
<><div id="map"></div> <DistanceMatrixService
    options={{
              destinations: [{ lat:19.180297715731893, lng: 72.83190245506327 }],
              origins: [{lat: 19.201571593443305, lng:72.83918016209492}],
              travelMode: "DRIVING",
            }}
    callback = {(response) => {console.log(response)}}
   />    </>
    
  ) : <></>
}

export default React.memo(MyComponent)
