'use client';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

interface Props {
  center: [number, number];
  itinerary: {
    day: number;
    title: string;
    coordinates: [number, number];
  }[];
  activeDay: number;
}

export default function CircuitMap({ center, itinerary, activeDay }: Props) {
  return (
    <MapContainer center={center} zoom={6} style={{ height: '100%', width: '100%', borderRadius: '0.5rem' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; OpenStreetMap contributors'
      />
      {itinerary.map((day) => (
        <Marker
          key={day.day}
          position={day.coordinates}
          icon={L.icon({
            iconUrl: activeDay === day.day ? '/active-marker.png' : '/inactive-marker.png',
            iconSize: [32, 32],
          })}
        >
          <Popup>
            <strong>Jour {day.day}:</strong> {day.title}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
