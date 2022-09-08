import React from 'react'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '100%'
};

const center = {
  lat: 30.5,
  lng: 31.5
};

export default function About() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyBlEugESvwg7IQwCP5zF5-P6mtVrIaNOdw"
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
    <section className="about">

    <div className="container">
      <div className="row">
        <div className="col-12 col-sm-12 col-lg-6">
          <h5>OUR LOCATION</h5>
          <h2>Come Visit Us.</h2>
          <br/>
          <p>Vestibulum ac diam sit amet quam vehicula elementum amet est on dui. Nulla porttitor accumsan tincidunt.Vestibulum ac diam sit amet.Quam vehicula elementum amet est on dui. Nulla porttitor accumsan tincidunt.</p>
        </div>
        <div className="col-12 col-sm-12 col-lg-6">
        <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={4}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        <Marker position={center} />
      </GoogleMap>
        </div>
      </div>
      <div id="contact-us" />
    </div>
  </section>
     
  ) : <></>
}