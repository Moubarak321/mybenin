"use client";

import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { CheckCircle, MapPin } from 'lucide-react';
import dynamic from 'next/dynamic';

// Pas d'import CSS ici - nous le ferons dans MapWrapper

// Chargement dynamique de MapWrapper sans SSR
const MapWrapper = dynamic(
  () => import('@/components/mapWrapper'),
  {
    ssr: false,
    loading: () => <div className="h-full w-full bg-gray-100 rounded-lg flex items-center justify-center">Chargement de la carte...</div>
  }
);

export default function CircuitDetail() {
  const [activeDay, setActiveDay] = useState(1);
  const [mapCenter, setMapCenter] = useState<[number, number]>([12.3714, -1.5197]); // Coordonnées par défaut (Ouagadougou)
  // Données du circuit (à remplacer par vos données réelles)
  const circuit = {
    title: "Découverte des Royaumes d'Afrique de l'Ouest",
    duration: "8 jours",
    price: "À partir de 1200€",
    description: "Un voyage immersif à travers les sites historiques et culturels les plus fascinants de la région.",
    itinerary: [
      {
        day: 1,
        title: "Arrivée à Ouagadougou",
        locations: ["Ouagadougou"],
        description: "Accueil à l'aéroport et transfert à l'hôtel. Briefing sur le circuit.",
        coordinates: [12.3714, -1.5197] as [number, number]
      },
      {
        day: 2,
        title: "Direction Dassa-Zoumé",
        locations: ["Ouagadougou", "Fada-Ngourma", "Dassa-Zoumé"],
        description: "Trajet à travers les paysages variés du Burkina Faso vers le Bénin.",
        coordinates: [7.7500, 2.1833] as [number, number]
      },
      // ... ajoutez les autres jours
    ],
    highlights: [
      "Visite des palais royaux historiques",
      "Rencontres avec les chefs traditionnels",
      "Découverte des sites UNESCO",
      "Expériences culturelles authentiques"
    ]
  };

  // Pas besoin de vérifier si le composant est monté
  // grâce à l'import dynamique avec ssr: false

  // Mise à jour du centre de la carte quand on change de jour
  useEffect(() => {
    const dayData = circuit.itinerary.find(day => day.day === activeDay);
    if (dayData) {
      setMapCenter(dayData.coordinates);
    }
  }, [activeDay]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Le CSS de Leaflet est maintenant importé directement dans MapWrapper */}

      {/* Hero Section */}
      <section className="relative h-96 w-full overflow-hidden">
        {/* Image de fond - Version optimisée */}
        <div className="absolute inset-0">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-o5zhpPam2gzSRgcbLI7vouVbQqWcsMtDLA&s" // Chemin relatif depuis le dossier public
            alt="Paysage d'Afrique de l'Ouest"
            className="w-full h-full object-cover"
            loading="eager" // Chargement prioritaire
          />
          {/* Overlay sombre */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Contenu */}
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2 drop-shadow-lg mt-12">
            {circuit.title}
          </h1>
          <div className="flex gap-4 text-white text-lg mb-6">
            <span>{circuit.duration}</span>
            <span>•</span>
            <span>{circuit.price}</span>
          </div>
          <Button className="bg-[#E67E22] hover:bg-[#D35400] text-white shadow-lg transition-transform hover:scale-105">
            Réserver ce circuit
          </Button>
        </div>
      </section>


      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12 grid md:grid-cols-3 gap-8">
        {/* Left Column - Itinerary */}
        <div className="md:col-span-2 space-y-8">
          <section className="bg-white p-6 rounded-xl shadow-sm">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Aperçu du circuit</h2>
            <p className="text-gray-600">{circuit.description}</p>

            <div className="mt-6 grid grid-cols-1 gap-4">
              {circuit.highlights.map((highlight, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="text-[#E67E22] mt-1 mr-2" />
                  <span className="text-gray-700">{highlight}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Day Selector */}
          <div className="flex overflow-x-auto gap-2 pb-4">
            {circuit.itinerary.map((day) => (
              <button
                key={day.day}
                onClick={() => setActiveDay(day.day)}
                className={`px-4 py-2 rounded-full whitespace-nowrap ${activeDay === day.day
                    ? 'bg-[#E67E22] text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
              >
                Jour {day.day}
              </button>
            ))}
          </div>

          {/* Day Details */}
          <section className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              {circuit.itinerary[activeDay - 1].title}
            </h3>
            <div className="flex items-center text-gray-500 mb-4">
              <MapPin className="w-4 h-4 mr-1" />
              <span>{circuit.itinerary[activeDay - 1].locations.join(" → ")}</span>
            </div>
            <p className="text-gray-600">{circuit.itinerary[activeDay - 1].description}</p>
          </section>
        </div>

        {/* Right Column - Map */}
        <div className="h-full sticky top-4">
          <div className="bg-white p-4 rounded-xl shadow-sm h-[500px]">
            {/* Le chargement conditionnel est géré par dynamic import */}
            <MapWrapper
              center={mapCenter}
              itinerary={circuit.itinerary}
              activeDay={activeDay}
            />
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <section className="max-w-7xl mx-auto px-4 pb-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Galerie du circuit</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
            <div key={item} className="aspect-square overflow-hidden rounded-lg">
              <img
                src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2BT_djvlc2V3r9PvZw7B2Oq07Sg9yYS3N7Q&s`}
                alt={`Galerie ${item}`}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#E67E22] py-12">
        <div className="max-w-4xl mx-auto text-center text-white px-4">
          <h2 className="text-3xl font-bold mb-4">Prêt à vivre cette aventure ?</h2>
          <p className="text-xl mb-8">Réservez maintenant votre voyage culturel inoubliable</p>
          <Button className="bg-white text-[#E67E22] hover:bg-gray-100 px-8 py-4 text-lg">
            Contactez nos experts
          </Button>
        </div>
      </section>
    </div>
  );
}