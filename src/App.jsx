import MapView from "./pages/map_view";
import { registerSW } from "virtual:pwa-register";
import ReactGA from "react-ga4";
import { useGeolocated } from "react-geolocated";

registerSW({ immediate: true });

ReactGA.initialize("G-2165DH0NDQ");
ReactGA.send("pageview");

const App = () => {
  const { coords } = useGeolocated({
    positionOptions: {
      enableHighAccuracy: true,
    },
    userDecisionTimeout: 5000,
  });

  if (coords) return <MapView location={coords} />;

  return (
    <div className="flex flex-col items-center justify-center h-screen w-full">
      <img src="search.gif" alt="search gif" className="h-30" />
      <p>... fetching location</p>
    </div>
  );
};

export default App;
