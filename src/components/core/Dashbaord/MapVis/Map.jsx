import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import 'leaflet.heat';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});

const indiaPosition = [20.5937, 78.9629]; // Center of India

const heatData = [
  [28.7041, 77.1025, 0.9],  // Delhi - high intensity
  [19.0760, 72.8777, 0.85], // Mumbai - high intensity
  [23.0225, 72.5714, 0.9],  // Ahmedabad - high intensity
  [17.3850, 78.4867, 0.88], // Hyderabad - high intensity
  [12.9716, 77.5946, 0.75], // Bangalore - high intensity

  [22.5726, 88.3639, 0.6],  // Kolkata - medium intensity
  [13.0827, 80.2707, 0.7],  // Chennai - medium intensity

  [31.1048, 77.1734, 0.3],  // Shimla - low intensity
  [25.5941, 85.1376, 0.35], // Patna - low intensity
  [32.7266, 74.8570, 0.25], // Jammu - low intensity
];

const HeatLayer = () => {
  const map = useMap();

  React.useEffect(() => {
    if (!map) return;

    const heatLayer = L.heatLayer(heatData, {
      radius: 50,   // Large radius to cover more area
      blur: 35,     // More blur for a smoother transition
      maxZoom: 8,   // Zoom level where heatmap is visible
      max: 1.2,     // Increased intensity max
      minOpacity: 0.6,  // Minimum opacity so heat is visible without zooming in
      gradient: {
        0.0: 'blue',  // Low intensity -> blue
        0.5: 'lime',  // Medium intensity -> lime/green
        1.0: 'red',   // High intensity -> red
      },
    }).addTo(map);

    return () => {
      map.removeLayer(heatLayer);
    };
  }, [map]);

  return null;
};

const Map = () => {
  return (
    <div className="w-full h-full">
      <div className="map-container" style={{ height: "100%", width: "100%", margin: "auto" }}>
        <h1 className="text-3xl text-slate-950 font-bold text-center mb-4" style={{ textShadow: '2px 2px 4px red' }}>
          India's Hotspots: A Heatmap Overview
        </h1>
        <MapContainer center={indiaPosition} zoom={6} className="leaflet-container" style={{ height: "90%", width: "95%" }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={indiaPosition}>
            <Popup>
              India <br /> Center of the map.
            </Popup>
          </Marker>
          <HeatLayer /> {/* Add the heat layer */}
        </MapContainer>
      </div>
    </div>
  );
};

export default Map;
