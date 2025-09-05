import L from "leaflet";

const atmIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/3358/3358511.png",
  iconSize: [25, 25],
});

const pharmacyIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/4320/4320344.png",
  iconSize: [25, 25],
});

const bankIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/2830/2830284.png",
  iconSize: [25, 25],
});

const poIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/7652/7652859.png",
  iconSize: [25, 25],
});

const parkingIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/3477/3477109.png",
  iconSize: [25, 25],
});

const policeIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/2785/2785693.png",
  iconSize: [25, 25],
});

const getIcon = (amenity) => {
  switch (amenity) {
    case "atm":
      return atmIcon;

    case "pharmacy":
      return pharmacyIcon;

    case "bank":
      return bankIcon;

    case "post_office":
      return poIcon;

    case "parking":
      return parkingIcon;

    case "police":
      return policeIcon;

    default:
      return atmIcon;
  }
};

export default getIcon;
