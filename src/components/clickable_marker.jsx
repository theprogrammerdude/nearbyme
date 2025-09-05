import { Marker, useMap } from "react-leaflet";
import getIcon from "../utils/get_icon";

import L from "leaflet";

const ClickableMarker = ({ p, onClick, coords }) => {
  const map = useMap();

  const handleClick = () => {
    map.setView([p.lat, p.lon], 14, { animate: true });

    const pos = [p.lat, p.lon];
    const loc = [coords.latitude, coords.longitude];

    const bounds = L.latLngBounds([pos, loc]);
    map.fitBounds(bounds, { padding: [80, 80], animate: true });
  };

  return (
    <Marker
      position={[p.lat, p.lon]}
      icon={getIcon(p.tags.amenity)}
      eventHandlers={{
        click: (e) => {
          handleClick();
          onClick();
        },
      }}
    ></Marker>
  );
};

export default ClickableMarker;
