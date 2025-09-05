import { useEffect } from "react";
import { useMap } from "react-leaflet";

const CenterMap = ({ location }) => {
  const map = useMap();

  useEffect(() => {
    if (location) {
      map.setView(location, 14, { animate: true });
    }
  }, [location, map]);

  return null;
};

export default CenterMap;
