
import React from "react";
import { useState } from "react";
import { GoogleMap, useJsApiLoader, Marker, InfoWindow } from '@react-google-maps/api';

const containerStyle = {
  height: "600px",
  width: "1000px"
}

const center = {
  lat:19.180297715731893, lng: 72.83190245506327 
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

  const[infoWindow1,openInfoWindow1]=useState(false);
  const[infoWindow2,openInfoWindow2]=useState(false);

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
    
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={{lat:19.180297715731893, lng: 72.83190245506327 }}
        zoom={2}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <Marker
          position={busPositions[0]}
        />
        <Marker
          icon="https://developers.google.com/maps/documentation/javascript/examples/full/images/parking_lot_maps.png"
          position={busPositions[1]}
          onClick={()=>{openInfoWindow1(true)}}
        />
        <Marker
          icon="https://developers.google.com/maps/documentation/javascript/examples/full/images/parking_lot_maps.png"
          position={busPositions[2]}
          onClick={()=>{openInfoWindow2(true)}}
        />
        {infoWindow1 ? <InfoWindow
          position={busPositions[1]}
        >
          <div style={divStyle}>
            <h4>Bus Stop 1</h4>
            <p>Route: P-KA</p>
            <p>Areas covered: X, Y, Z</p>
            
          </div>
        </InfoWindow> : null }
        {infoWindow2 ? <InfoWindow
          position={busPositions[2]}
        >
          <div style={divStyle}>
            <h4>Bus Stop 2</h4>
            <p>Route: P-DH</p>
            <p>Areas covered: A, B, C</p>
          </div>
        </InfoWindow> : null}
        
      </GoogleMap>
  ) : <></>
}

export default React.memo(MyComponent)
