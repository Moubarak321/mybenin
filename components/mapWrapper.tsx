"use client";

import { useEffect, useRef } from 'react';
import L from 'leaflet';
// Import CSS directement dans le composant client
import 'leaflet/dist/leaflet.css';

interface MapWrapperProps {
  center: [number, number];
  itinerary: {
    day: number;
    title: string;
    locations: string[];
    description: string;
    coordinates: [number, number];
  }[];
  activeDay: number;
}

export default function MapWrapper({ center, itinerary, activeDay }: MapWrapperProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);
  const markersRef = useRef<L.Marker[]>([]);

  useEffect(() => {
    // Vérifier que nous sommes bien côté client
    if (typeof window === 'undefined') return;

    // Si la carte n'existe pas encore, l'initialiser
    if (!mapInstanceRef.current && mapRef.current) {
      mapInstanceRef.current = L.map(mapRef.current).setView(center, 7);
      
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(mapInstanceRef.current);
    }

    // Mettre à jour le centre de la carte si nécessaire
    if (mapInstanceRef.current) {
      mapInstanceRef.current.setView(center, 7);
      
      // Supprimer les marqueurs existants
      markersRef.current.forEach(marker => {
        marker.remove();
      });
      markersRef.current = [];
      
      // Ajouter les nouveaux marqueurs pour l'itinéraire actuel
      itinerary.forEach((day) => {
        const isActiveDay = day.day === activeDay;
        const icon = L.divIcon({
          className: 'custom-div-icon',
          html: `<div class="${isActiveDay ? 'bg-[#E67E22]' : 'bg-gray-400'} text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">${day.day}</div>`,
          iconSize: [32, 32],
          iconAnchor: [16, 16]
        });
        
        const marker = L.marker(day.coordinates, { icon }).addTo(mapInstanceRef.current!);
        marker.bindPopup(`<b>Jour ${day.day}:</b> ${day.title}`);
        
        if (isActiveDay) {
          marker.openPopup();
        }
        
        markersRef.current.push(marker);
      });
      
      // Dessiner des lignes pour connecter les points de l'itinéraire
      const points = itinerary.map(day => day.coordinates);
      L.polyline(points, { color: '#E67E22', weight: 3 }).addTo(mapInstanceRef.current);
    }
    
    return () => {
      // Cleanup fonction pour le composant unmount
    };
  }, [center, itinerary, activeDay]);

  return <div ref={mapRef} className="h-full w-full rounded-lg" />;
}