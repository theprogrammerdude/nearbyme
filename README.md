
# 🗺️ ATM / Bank / Pharmacy Finder (React + Leaflet + PWA)

A Progressive Web App (PWA) that helps users find **nearby ATMs, banks, and pharmacies** on an interactive map.  
Built with **React, Leaflet, and OpenStreetMap APIs**, it works both on **web and mobile** (installable as an app).

---

## ✨ Features

- 📍 Detects **user’s current location**
- 🏦 Shows nearby **ATMs, Banks, Pharmacies** (using OpenStreetMap / Overpass API)
- 🔍 Adjustable **search radius** (1km – 20km)
- 🗺️ Interactive **Leaflet map** with markers
- 🧭 **Click marker to view details** (address, distance, contact info if available)
- 🚘 Show **route from user to amenity** (polyline)
- 🌍 **Open in Google Maps** for navigation (works on mobile app & web)
- 🎨 Custom icons for different amenities
- 📦 Installable as **PWA** (with custom app icon and offline caching)

---

## 🛠 Tech Stack

### Frontend
- [React](https://react.dev/) – UI framework  
- [Vite](https://vitejs.dev/) – lightning-fast build tool  
- [Tailwind CSS](https://tailwindcss.com/) – utility-first styling  
- [Leaflet](https://leafletjs.com/) – interactive map library  
- [React-Leaflet](https://react-leaflet.js.org/) – React bindings for Leaflet  

### Maps & APIs
- [OpenStreetMap](https://www.openstreetmap.org/) – base map tiles  
- [Overpass API](https://overpass-api.de/) – fetch amenities (ATMs, banks, pharmacies)  
- [Nominatim](https://nominatim.org/) – reverse geocoding (lat/lon → address)  
- [Browser Geolocation API](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API) – get user’s location  

### PWA
- [vite-plugin-pwa](https://vite-plugin-pwa.netlify.app/) – adds service worker + manifest  
- Service Worker – for caching & offline support  
- Web App Manifest – defines app name, theme, icons  

---

## 🚀 Getting Started

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/your-username/atm-pharmacy-finder.git
cd atm-pharmacy-finder
````

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Start Development Server

```bash
npm run dev
```

App will be available at 👉 [http://localhost:5173](http://localhost:5173)

### 4️⃣ Build for Production

```bash
npm run build
npm run preview
```

---

## 📸 Screenshots

*(Add screenshots of map with markers, search radius, and PWA install prompt here)*

---

## 📋 Roadmap

* [ ] Add more amenities (Hospitals, Fuel Stations, Restaurants, Metro, etc.)
* [ ] Dark mode toggle 🌙
* [ ] Save favorite locations ⭐
* [ ] Offline map support 📴
* [ ] Background location tracking 📡
* [ ] Analytics dashboard 📊

---

## 📜 License

This project is **open-source** and available under the [MIT License](LICENSE).

---

## 🙌 Credits

* Map data © [OpenStreetMap Contributors](https://www.openstreetmap.org/copyright)
* Icons from [Flaticon](https://www.flaticon.com/)
* Built with ❤️ using **React + Leaflet + Vite**

