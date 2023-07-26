import ReactMapGL, { Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import PropTypes from "prop-types";

export default function Map({ item }) {
  return (
    <div className="h-[500px] w-[100%]">
      {item.lng && item.lat ? (
        <ReactMapGL
          mapboxAccessToken="pk.eyJ1IjoibmlzaGFudDg0MiIsImEiOiJjbGgyemNjMm8wNjE2M3BxZzA2NnpxNXZiIn0.AA83bqvjV5J5V9NGgljf5g"
          initialViewState={{
            latitude: item?.lat,
            longitude: item?.lng,
            zoom: 15,
          }}
          mapStyle="mapbox://styles/mapbox/streets-v11"
        >
          <Marker latitude={item?.lat} longitude={item?.lng} />
        </ReactMapGL>
      ) : (
        ""
      )}
    </div>
  );
}
Map.propTypes = {
  item: PropTypes.any.isRequired,
};
