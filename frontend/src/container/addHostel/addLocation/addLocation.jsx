import { useEffect, useRef } from "react";
import ReactMapGL, {
  GeolocateControl,
  Marker,
  NavigationControl,
} from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import {
  UPDATE_DETAILS,
  UPDATE_LOCATION,
} from "../../../redux/reducers/hostelSlice";
import { useDispatch, useSelector } from "react-redux";
import Geocoder from "./geocoder";

export default function AddLocation() {
  const dispatch = useDispatch();
  const mapRef = useRef();
  const { lat, lng } = useSelector((state) => state.room.location);

  useEffect(() => {
    if (!lng && !lat) {
      fetch("https://ipapi.co/2403:3800:3233:1213:3d58:8a5b:acd3:add1/json/")
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          mapRef.current.flyTo({
            center: [data.longitude, data.latitude],
          });
          dispatch(
            UPDATE_LOCATION({ lng: data.longitude, lat: data.latitude })
          );
        });
    }
  }, []);
  useEffect(() => {
    if (lng && lat) {
      const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${lng},${lat}.json?access_token=pk.eyJ1IjoibmlzaGFudDg0MiIsImEiOiJjbGgyemNjMm8wNjE2M3BxZzA2NnpxNXZiIn0.AA83bqvjV5J5V9NGgljf5g`;
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          console.log(data, "data");
          if (!data.features[0].properties.address) {
            dispatch(
              UPDATE_DETAILS({
                address: data.features[0].place_name,
                place: data.features[0].text,
              })
            );
          } else {
            dispatch(
              UPDATE_DETAILS({
                address: data.features[0].place_name,
                place: data.features[0].properties.address,
              })
            );
          }
        });
    }
  }, [lng, lat]);
  return (
    <div className=" h-[50vh]">
      <ReactMapGL
        ref={mapRef}
        mapboxAccessToken="pk.eyJ1IjoibmlzaGFudDg0MiIsImEiOiJjbGgyemNjMm8wNjE2M3BxZzA2NnpxNXZiIn0.AA83bqvjV5J5V9NGgljf5g"
        initialViewState={{
          longitude: lng,
          latitude: lat,
          zoom: 14,
        }}
        mapStyle="mapbox://styles/mapbox/streets-v11"
      >
        <Marker
          latitude={lat}
          longitude={lng}
          draggable
          onDragEnd={(e) => {
            dispatch(UPDATE_LOCATION({ lng: e.lngLat.lng, lat: e.lngLat.lat }));
          }}
        />
        <NavigationControl position="bottom-right" />
        <GeolocateControl
          position="top-left"
          trackUserLocation
          onGeolocate={(e) =>
            dispatch(
              UPDATE_LOCATION({
                lng: e.coords.longitude,
                lat: e.coords.latitude,
              })
            )
          }
        />
        <Geocoder />
      </ReactMapGL>
    </div>
  );
}
