"use client";

import { Car } from "@/utils/types";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

interface LeafletMapProps {
  selectedCars: Car[];
}

/* car icon */
const carIcon = new L.Icon({
  iconUrl:
    "https://storage.googleapis.com/neom_sharex_images/images/2025-07-01T09-17-19.471Z.webp",
  iconSize: [55, 25],
  iconAnchor: [20, 40],
  popupAnchor: [0, -35],
});

/* zoom to last selected car */
function FlyToLastSelected({ cars }: { cars: Car[] }) {
  const map = useMap();

  useEffect(() => {
    if (!cars.length) return;

    const lastCar = cars[cars.length - 1];

    const lat = lastCar.current_location.coordinates[1];
    const lng = lastCar.current_location.coordinates[0];

    map.flyTo([lat, lng], 15, { duration: 1.2 }); // zoom 15، duration سلس
  }, [cars, map]);

  return null;
}

const LeafletMap = ({ selectedCars }: LeafletMapProps) => {
  return (
    <MapContainer
      center={[24.7136, 46.6753]}
      zoom={5}
      scrollWheelZoom={true}
      className="w-full h-full"
    >
      <TileLayer
        attribution="© OpenStreetMap contributors"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {selectedCars.map((car, idx) => {
        const offsetLat = 0.00005 * idx;
        const offsetLng = 0.00005 * idx;

        return (
          <Marker
            key={car._id}
            icon={carIcon}
            position={[
              car.current_location.coordinates[1] + offsetLat,
              car.current_location.coordinates[0] + offsetLng,
            ]}
          >
            <Popup>
              {car._id}
              <br />
              {car.make} - {car.model}
              <br />
              {car.current_location.coordinates[0]},
              {car.current_location.coordinates[1]}
            </Popup>
          </Marker>
        );
      })}

      {/* Fly to last selected car */}
      <FlyToLastSelected cars={selectedCars} />
    </MapContainer>
  );
};

export default LeafletMap;
