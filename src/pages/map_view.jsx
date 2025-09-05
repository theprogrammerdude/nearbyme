import { useEffect, useState } from "react";
import { MapContainer, Marker, Polyline, TileLayer } from "react-leaflet";
import L from "leaflet";

import "leaflet/dist/leaflet.css";
import CenterMap from "../components/center_map";
import CenterLocationFab from "../components/center_location";

import AmenityPopup from "../components/amenity_popup";
import { categories } from "../constants";
import CategoryFilter from "../components/category_filter";
import ClickableMarker from "../components/clickable_marker";

const userIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
  iconSize: [30, 30],
});

const MapView = ({ location }) => {
  const [places, setPlaces] = useState([]);
  const [route, setRoute] = useState(null);

  const [selectedAmenity, setSelectedAmenity] = useState(null);

  const [selectedCategories, setSelectedCategories] = useState(
    categories.map((e) => e.key)
  );

  const toggleCategory = (cat) => {
    setSelectedCategories((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    );
  };

  useEffect(() => {
    const query = `
          [out:json];
          (
            ${selectedCategories
              .map(
                (e) =>
                  `node["amenity"="${e}"](around:10000,${location.latitude},${location.longitude});`
              )
              .join("\n")}
          );
          out;
        `;

    fetch("https://overpass-api.de/api/interpreter", {
      method: "POST",
      body: query,
    })
      .then((res) => res.json())
      .then((data) => setPlaces(data.elements));
  }, [selectedCategories]);

  const fetchRoute = (co) => {
    fetch(
      `https://router.project-osrm.org/route/v1/driving/${location.longitude},${location.latitude};${co[1]},${co[0]}?overview=full&geometries=geojson`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.routes && data.routes.length > 0) {
          const c = data.routes[0].geometry.coordinates.map(([lon, lat]) => [
            lat,
            lon,
          ]);

          setRoute(c);
        }
      })
      .catch((err) => console.error("Route error:", err));
  };

  return (
    <>
      <MapContainer
        center={[location.latitude, location.longitude]}
        zoom={14}
        style={{ height: "100vh" }}
      >
        <TileLayer url="http://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}" />

        {location && (
          <Marker
            position={[location.latitude, location.longitude]}
            icon={userIcon}
          />
        )}

        {places.map((p) => (
          <ClickableMarker
            key={p.id}
            p={p}
            coords={location}
            onClick={() => {
              setSelectedAmenity(p);
              fetchRoute([p.lat, p.lon]);
            }}
          />
        ))}

        {route && <Polyline positions={route} color="blue" />}

        {selectedAmenity && (
          <AmenityPopup
            location={location}
            amenity={selectedAmenity}
            onClose={() => {
              setSelectedAmenity(null);
              setRoute(null);
            }}
          ></AmenityPopup>
        )}

        <CenterLocationFab />
        <CategoryFilter
          categories={categories}
          selectedCategories={selectedCategories}
          onToggle={toggleCategory}
        />
      </MapContainer>
    </>
  );
};

export default MapView;
