import React from "react";
import Map from "react-map-gl";

import GeocoderControl from "./geocoder-control.tsx";

const TOKEN =
  "pk.eyJ1IjoiZ2x1YXkyMCIsImEiOiJjbDZlZDlid3owOTBrM2twaGR1NTU5N3lpIn0.npHpuRhmKKymUvyJp6kF7g";

const App = () => {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        border: "solid 2px red",
      }}
    >
      <Map
        initialViewState={{
          longitude: -71.057083,
          latitude: 42.361145,
          zoom: 12,
        }}
        mapStyle="mapbox://styles/mapbox/satellite-v9"
        mapboxAccessToken={TOKEN}
        style={{ border: "red 3px red" }}
      >
        <GeocoderControl mapboxAccessToken={TOKEN} position="top-right" />
      </Map>
    </div>
  );
};

export default App;
