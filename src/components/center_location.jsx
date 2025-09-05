import { useMap } from "react-leaflet";
import { useEffect, useState } from "react";
import { Locate } from "lucide-react";

const CenterLocationFab = () => {
  const map = useMap();
  const [position, setPosition] = useState(null);

  useEffect(() => {
    if (!navigator.geolocation) return;

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setPosition([pos.coords.latitude, pos.coords.longitude]);
      },
      (err) => {
        console.error("Geolocation error:", err);
      },
      { enableHighAccuracy: true }
    );
  }, []);

  const handleClick = () => {
    if (position) {
      map.setView(position, 14, { animate: true });
    }
  };

  return (
    <button
      onClick={handleClick}
      type="button"
      className="absolute bottom-6 right-6 bg-gray-600 text-white rounded-full shadow-lg w-12 h-12 flex items-center justify-center hover:bg-gray-700 transition cursor-pointer z-[100000]"
    >
      <Locate />
    </button>
  );
};

export default CenterLocationFab;
