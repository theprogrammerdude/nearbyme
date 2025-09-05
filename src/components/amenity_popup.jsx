import { useEffect, useState } from "react";
import getDistanceFromLatLonInKm from "../utils/distance";

const AmenityPopup = ({ amenity, onClose, location }) => {
  const [address, setAddress] = useState();
  console.log(amenity);

  useEffect(() => {
    fetch(
      `https://nominatim.openstreetmap.org/reverse?lat=${amenity.lat}&lon=${amenity.lon}&format=json`
    )
      .then((res) => res.json())
      .then((data) => setAddress(data));
  }, [amenity]);

  return (
    <div className="absolute top-4 right-4 bg-white shadow-lg rounded-xl p-4 w-72 z-[10000] pointer-events-auto cursor-default">
      <h2 className="text-lg font-semibold mb-2 capitalize">
        {amenity.tags.amenity.replace(/_/g, " ")}
      </h2>
      {(amenity.tags.brand || amenity.tags.name || amenity.tags.operator) && (
        <p className="text-sm text-gray-700 mb-1 capitalize">
          <b>Name:</b>{" "}
          {amenity.tags.brand || amenity.tags.name || amenity.tags.operator}
        </p>
      )}
      <p className="text-sm text-gray-700 mb-1">
        <b>Coordinates:</b> {amenity.lat}, {amenity.lon}
      </p>

      {address && (
        <p className="text-sm text-gray-700 mb-1">
          <b>Address:</b> {address.display_name}
        </p>
      )}

      <p className="text-sm text-gray-700 mb-3">
        <b>Distance:</b>{" "}
        {getDistanceFromLatLonInKm(
          location.latitude,
          location.longitude,
          amenity.lat,
          amenity.lon
        ).toFixed(2)}{" "}
        km
      </p>

      <div className="flex gap-2">
        <button
          onClick={onClose}
          className="bg-gray-200 px-3 py-1 rounded-lg text-sm cursor-pointer"
        >
          Close
        </button>
        <button
          onClick={() => {
            const gmapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${amenity.lat},${amenity.lon}`;
            window.open(gmapsUrl, "_blank");
          }}
          className="bg-blue-600 text-white px-3 py-1 rounded-lg text-sm cursor-pointer"
        >
          Navigate
        </button>
      </div>
    </div>
  );
};

export default AmenityPopup;
