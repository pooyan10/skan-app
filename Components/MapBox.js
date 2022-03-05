import { useState } from "react";
import ReactMapGL, { Popup, Marker } from "react-map-gl";
import getCenter from "geolib/es/getCenter";
import { HomeIcon } from "@heroicons/react/solid";

function MapBox({ searchResults }) {
  // transform the searchResults object to {latitude, longitude } object
  const coordinates = searchResults.map((result) => ({
    latitude: result.lat,
    longitude: result.long,
  }));

  // the latitude and longitude of the center of locations coordinates
  const center = getCenter(coordinates);

  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    latitude: center.latitude,
    longitude: center.longitude,
    zoom: 11,
  });

  return (
    <ReactMapGL
      style={{ width: 600, height: 800 }}
      mapboxAccessToken={process.env.mapbox_key}
      mapStyle="mapbox://styles/pooyan10/cl0azo3sp006816mqsaaykchp"
      {...viewport}
      onMove={(evt) => setViewport(evt.viewport)}
    >
      {searchResults.map((result) => (
        <div key={result.long}>
          <Marker longitude={result.long} latitude={result.lat}>
            git{" "}
          </Marker>
        </div>
      ))}
    </ReactMapGL>
  );
}

export default MapBox;
