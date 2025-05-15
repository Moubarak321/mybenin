// "use client";

// import { useEffect, useState } from 'react';
// import { Button } from '@/components/ui/button';
// import { CheckCircle, MapPin } from 'lucide-react';
// import dynamic from 'next/dynamic';

// // Pas d'import CSS ici - nous le ferons dans MapWrapper

// // Chargement dynamique de MapWrapper sans SSR
// const MapWrapper = dynamic(
//   () => import('@/components/mapWrapper'),
//   {
//     ssr: false,
//     loading: () => <div className="h-full w-full bg-gray-100 rounded-lg flex items-center justify-center">Chargement de la carte...</div>
//   }
// );

// export default function CircuitDetail() {
//   const [activeDay, setActiveDay] = useState(1);
//   const [mapCenter, setMapCenter] = useState<[number, number]>([12.3714, -1.5197]); // Coordonnées par défaut (Ouagadougou)
//   // Données du circuit (à remplacer par vos données réelles)
//   const circuit = {
//     title: "Découverte des Royaumes d'Afrique de l'Ouest",
//     duration: "8 jours",
//     price: "À partir de 1200€",
//     description: "Un voyage immersif à travers les sites historiques et culturels les plus fascinants de la région.",
//     itinerary: [
//       {
//         day: 1,
//         title: "Arrivée à Ouagadougou",
//         locations: ["Ouagadougou"],
//         description: "Accueil à l'aéroport et transfert à l'hôtel. Briefing sur le circuit.",
//         coordinates: [12.3714, -1.5197] as [number, number]
//       },
//       {
//         day: 2,
//         title: "Direction Dassa-Zoumé",
//         locations: ["Ouagadougou", "Fada-Ngourma", "Dassa-Zoumé"],
//         description: "Trajet à travers les paysages variés du Burkina Faso vers le Bénin.",
//         coordinates: [7.7500, 2.1833] as [number, number]
//       },
//       // ... ajoutez les autres jours
//     ],
//     highlights: [
//       "Visite des palais royaux historiques",
//       "Rencontres avec les chefs traditionnels",
//       "Découverte des sites UNESCO",
//       "Expériences culturelles authentiques"
//     ]
//   };


//   // Mise à jour du centre de la carte quand on change de jour
//   useEffect(() => {
//     const dayData = circuit.itinerary.find(day => day.day === activeDay);
//     if (dayData) {
//       setMapCenter(dayData.coordinates);
//     }
//   }, [activeDay]);

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Le CSS de Leaflet est maintenant importé directement dans MapWrapper */}

//       {/* Hero Section */}
//       <section className="relative h-96 w-full overflow-hidden">
//         {/* Image de fond - Version optimisée */}
//         <div className="absolute inset-0">
//           <img
//             src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-o5zhpPam2gzSRgcbLI7vouVbQqWcsMtDLA&s" // Chemin relatif depuis le dossier public
//             alt="Paysage d'Afrique de l'Ouest"
//             className="w-full h-full object-cover"
//             loading="eager" // Chargement prioritaire
//           />
//           {/* Overlay sombre */}
//           <div className="absolute inset-0 bg-black/40"></div>
//         </div>

//         {/* Contenu */}
//         <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4">
//           <h1 className="text-4xl md:text-5xl font-bold text-white mb-2 drop-shadow-lg mt-12">
//             {circuit.title}
//           </h1>
//           <div className="flex gap-4 text-white text-lg mb-6">
//             <span>{circuit.duration}</span>
//             <span>•</span>
//             <span>{circuit.price}</span>
//           </div>
//           <Button className="bg-[#E67E22] hover:bg-[#D35400] text-white shadow-lg transition-transform hover:scale-105">
//             Réserver ce circuit
//           </Button>
//         </div>
//       </section>


//       {/* Main Content */}
//       <div className="max-w-7xl mx-auto px-4 py-12 grid md:grid-cols-3 gap-8">
//         {/* Left Column - Itinerary */}
//         <div className="md:col-span-2 space-y-8">
//           <section className="bg-white p-6 rounded-xl shadow-sm">
//             <h2 className="text-2xl font-bold text-gray-800 mb-4">Aperçu du circuit</h2>
//             <p className="text-gray-600">{circuit.description}</p>

//             <div className="mt-6 grid grid-cols-1 gap-4">
//               {circuit.highlights.map((highlight, index) => (
//                 <div key={index} className="flex items-start">
//                   <CheckCircle className="text-[#E67E22] mt-1 mr-2" />
//                   <span className="text-gray-700">{highlight}</span>
//                 </div>
//               ))}
//             </div>
//           </section>

//           {/* Day Selector */}
//           <div className="flex overflow-x-auto gap-2 pb-4">
//             {circuit.itinerary.map((day) => (
//               <button
//                 key={day.day}
//                 onClick={() => setActiveDay(day.day)}
//                 className={`px-4 py-2 rounded-full whitespace-nowrap ${activeDay === day.day
//                     ? 'bg-[#E67E22] text-white'
//                     : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
//                   }`}
//               >
//                 Jour {day.day}
//               </button>
//             ))}
//           </div>

//           {/* Day Details */}
//           <section className="bg-white p-6 rounded-xl shadow-sm">
//             <h3 className="text-xl font-bold text-gray-800 mb-2">
//               {circuit.itinerary[activeDay - 1].title}
//             </h3>
//             <div className="flex items-center text-gray-500 mb-4">
//               <MapPin className="w-4 h-4 mr-1" />
//               <span>{circuit.itinerary[activeDay - 1].locations.join(" → ")}</span>
//             </div>
//             <p className="text-gray-600">{circuit.itinerary[activeDay - 1].description}</p>
//           </section>
//         </div>

//         {/* Right Column - Map */}
//         <div className="h-full sticky top-4">
//           <div className="bg-white p-4 rounded-xl shadow-sm h-[500px]">
//             {/* Le chargement conditionnel est géré par dynamic import */}
//             <MapWrapper
//               center={mapCenter}
//               itinerary={circuit.itinerary}
//               activeDay={activeDay}
//             />
//           </div>
//         </div>
//       </div>

//       {/* Gallery Section */}
//       <section className="max-w-7xl mx-auto px-4 pb-12">
//         <h2 className="text-2xl font-bold text-gray-800 mb-6">Galerie du circuit</h2>
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//           {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
//             <div key={item} className="aspect-square overflow-hidden rounded-lg">
//               <img
//                 src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2BT_djvlc2V3r9PvZw7B2Oq07Sg9yYS3N7Q&s`}
//                 alt={`Galerie ${item}`}
//                 className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
//               />
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="bg-[#E67E22] py-12">
//         <div className="max-w-4xl mx-auto text-center text-white px-4">
//           <h2 className="text-3xl font-bold mb-4">Prêt à vivre cette aventure ?</h2>
//           <p className="text-xl mb-8">Réservez maintenant votre voyage culturel inoubliable</p>
//           <Button className="bg-white text-[#E67E22] hover:bg-gray-100 px-8 py-4 text-lg">
//             Contactez nos experts
//           </Button>
//         </div>
//       </section>
//     </div>
//   );
// }



"use client";

import { useEffect, useState, Fragment } from 'react';
import { Button } from '@/components/ui/button';
import { 
  CheckCircle, 
  MapPin, 
  Calendar, 
  Users, 
  Clock, 
  Star, 
  ArrowRight, 
  Euro, 
  Heart,
  ChevronDown,
  Info,
  Sun
} from 'lucide-react';
import dynamic from 'next/dynamic';
import { Disclosure, Transition } from '@headlessui/react';

// Chargement dynamique de MapWrapper sans SSR
const MapWrapper = dynamic(
  () => import('@/components/mapWrapper'),
  {
    ssr: false,
    loading: () => (
      <div className="h-full w-full bg-gray-100 rounded-2xl flex items-center justify-center">
        <div className="flex flex-col items-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-amber-500 mb-4"></div>
          <p className="text-gray-600 font-medium">Chargement de la carte...</p>
        </div>
      </div>
    )
  }
);

export default function CircuitDetail() {
  const [activeDay, setActiveDay] = useState(1);
  const [mapCenter, setMapCenter] = useState<[number, number]>([12.3714, -1.5197]);
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  
  // Données du circuit (étendues avec plus de détails)
  const circuit = {
    title: "Découverte des Royaumes d'Afrique de l'Ouest",
    duration: "8 jours",
    price: "1200€",
    rating: 4.8,
    reviews: 42,
    maxGroupSize: 12,
    difficulty: "Modéré",
    startDates: ["10 Juin 2025", "15 Juillet 2025", "5 Août 2025"],
    description: "Un voyage immersif à travers les sites historiques et culturels les plus fascinants de l'Afrique de l'Ouest. Découvrez les trésors cachés et les traditions vivantes des royaumes anciens.",
    longDescription: "Ce circuit exceptionnel vous invite à remonter le temps pour explorer l'héritage culturel riche et fascinant des royaumes ouest-africains. Vous découvrirez des palais ancestraux, des villages traditionnels et des sites sacrés tout en vous imprégnant des coutumes locales. Notre guide expert vous partagera les histoires et légendes qui ont façonné cette région au carrefour des civilisations. Entre rencontres authentiques, délices culinaires et paysages variés, cette expérience promet d'être aussi enrichissante qu'inoubliable.",
    itinerary: [
      {
        day: 1,
        title: "Arrivée à Ouagadougou",
        locations: ["Ouagadougou"],
        description: "Accueil à l'aéroport par notre guide local et transfert à votre hôtel de charme. Briefing détaillé sur le circuit et première immersion culturelle lors d'un dîner de bienvenue avec spectacle de percussion traditionnelle.",
        activities: ["Accueil personnalisé", "Installation à l'hôtel", "Dîner de bienvenue", "Spectacle de percussion"],
        accommodation: "Hôtel Laico Ouaga 2000",
        meals: ["Dîner"],
        coordinates: [12.3714, -1.5197] as [number, number]
      },
      {
        day: 2,
        title: "Direction Dassa-Zoumé",
        locations: ["Ouagadougou", "Fada-Ngourma", "Dassa-Zoumé"],
        description: "Traversée des paysages changeants du Burkina Faso vers le Bénin. Arrêt dans plusieurs villages pour découvrir l'artisanat local. Visite du marché coloré de Fada-Ngourma et rencontre avec les tisserands traditionnels.",
        activities: ["Découverte de l'artisanat local", "Visite du marché de Fada-Ngourma", "Rencontre avec des artisans tisserands"],
        accommodation: "Jéko Hôtel Dassa",
        meals: ["Petit-déjeuner", "Déjeuner", "Dîner"],
        coordinates: [7.7500, 2.1833] as [number, number]
      },
      {
        day: 3,
        title: "Les Collines Sacrées",
        locations: ["Dassa-Zoumé", "Savé"],
        description: "Exploration des collines sacrées de Dassa, haut lieu spirituel. Rencontre avec un chef traditionnel qui vous dévoilera les secrets des cérémonies ancestrales. Visite des grottes historiques et démonstration de danses rituelles.",
        activities: ["Randonnée aux collines sacrées", "Rencontre avec un chef traditionnel", "Visite des grottes historiques", "Spectacle de danses rituelles"],
        accommodation: "Jéko Hôtel Dassa",
        meals: ["Petit-déjeuner", "Déjeuner", "Dîner"],
        coordinates: [7.8000, 2.2000] as [number, number]
      },
      {
        day: 4,
        title: "Les Palais Royaux d'Abomey",
        locations: ["Dassa-Zoumé", "Abomey"],
        description: "Visite du site UNESCO des Palais Royaux d'Abomey, ancienne capitale du puissant royaume du Dahomey. Découverte des trésors royaux, des bas-reliefs historiques et du musée d'histoire. Atelier d'initiation à la tapisserie d'appliqué, art royal par excellence.",
        activities: ["Visite des Palais Royaux", "Découverte du musée historique", "Atelier de tapisserie d'appliqué"],
        accommodation: "Auberge d'Abomey",
        meals: ["Petit-déjeuner", "Déjeuner", "Dîner"],
        coordinates: [7.1833, 1.9833] as [number, number]
      },
      {
        day: 5,
        title: "Ganvié, la Venise africaine",
        locations: ["Abomey", "Ganvié", "Cotonou"],
        description: "Excursion à Ganvié, extraordinaire cité lacustre classée à l'UNESCO. Navigation en pirogue entre les habitations sur pilotis et découverte du mode de vie unique des habitants. Visite du marché flottant et déjeuner de spécialités locales sur le lac.",
        activities: ["Navigation en pirogue", "Visite du marché flottant", "Déjeuner sur le lac"],
        accommodation: "Hôtel du Lac Cotonou",
        meals: ["Petit-déjeuner", "Déjeuner", "Dîner"],
        coordinates: [6.4667, 2.4333] as [number, number]
      },
      {
        day: 6,
        title: "Les Mystères du Vaudou",
        locations: ["Cotonou", "Ouidah"],
        description: "Journée consacrée à la découverte de Ouidah, berceau du vaudou. Visite du temple des pythons, de la forêt sacrée et de la porte du non-retour. Participation à une cérémonie vaudou traditionnelle et échange avec un prêtre vaudou.",
        activities: ["Visite du temple des pythons", "Exploration de la forêt sacrée", "Cérémonie vaudou"],
        accommodation: "Hôtel du Lac Cotonou",
        meals: ["Petit-déjeuner", "Déjeuner", "Dîner"],
        coordinates: [6.3667, 2.0833] as [number, number]
      },
      {
        day: 7,
        title: "Traditions Royales de Porto-Novo",
        locations: ["Cotonou", "Porto-Novo"],
        description: "Exploration de Porto-Novo, capitale du Bénin. Visite du musée ethnographique, du palais royal et du jardin des plantes et de la nature. Atelier de percussion et soirée festive d'adieu avec danses traditionnelles.",
        activities: ["Visite du musée ethnographique", "Exploration du palais royal", "Atelier de percussion", "Soirée festive"],
        accommodation: "Hôtel du Lac Cotonou",
        meals: ["Petit-déjeuner", "Déjeuner", "Dîner de gala"],
        coordinates: [6.4833, 2.6167] as [number, number]
      },
      {
        day: 8,
        title: "Retour et Au Revoir",
        locations: ["Cotonou"],
        description: "Temps libre pour les derniers achats au grand marché de Cotonou. Selon l'horaire de votre vol, transfert à l'aéroport. Fin de nos services avec des souvenirs plein la tête.",
        activities: ["Shopping au grand marché", "Transfert à l'aéroport"],
        accommodation: "-",
        meals: ["Petit-déjeuner"],
        coordinates: [6.3667, 2.4167] as [number, number]
      }
    ],
    highlights: [
      "Visite des palais royaux historiques d'Abomey (UNESCO)",
      "Rencontres privilégiées avec les chefs traditionnels",
      "Navigation dans la cité lacustre de Ganvié",
      "Participation à une authentique cérémonie vaudou",
      "Cuisine locale préparée par des chefs traditionnels",
      "Artisanat et techniques ancestrales"
    ],
    included: [
      "Transport en véhicule climatisé",
      "Guide francophone expert",
      "Hébergement en hôtels de charme",
      "Pension complète (sauf jour d'arrivée et de départ)",
      "Toutes les activités mentionnées",
      "Eau minérale pendant les trajets"
    ],
    notIncluded: [
      "Vols internationaux",
      "Assurance voyage",
      "Boissons alcoolisées",
      "Pourboires",
      "Dépenses personnelles"
    ],
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-o5zhpPam2gzSRgcbLI7vouVbQqWcsMtDLA&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-o5zhpPam2gzSRgcbLI7vouVbQqWcsMtDLA&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-o5zhpPam2gzSRgcbLI7vouVbQqWcsMtDLA&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-o5zhpPam2gzSRgcbLI7vouVbQqWcsMtDLA&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-o5zhpPam2gzSRgcbLI7vouVbQqWcsMtDLA&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-o5zhpPam2gzSRgcbLI7vouVbQqWcsMtDLA&s"
      
    ]
  };

  // Mise à jour du centre de la carte quand on change de jour
  useEffect(() => {
    const dayData = circuit.itinerary.find(day => day.day === activeDay);
    if (dayData) {
      setMapCenter(dayData.coordinates);
    }
  }, [activeDay]);

  // Images temporaires pour la démo
  const placeholderImages = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR7-R-G4YHsbfLtjtIWWwuyXw13rkyq4GOkA&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR7-R-G4YHsbfLtjtIWWwuyXw13rkyq4GOkA&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR7-R-G4YHsbfLtjtIWWwuyXw13rkyq4GOkA&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR7-R-G4YHsbfLtjtIWWwuyXw13rkyq4GOkA&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR7-R-G4YHsbfLtjtIWWwuyXw13rkyq4GOkA&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR7-R-G4YHsbfLtjtIWWwuyXw13rkyq4GOkA&s",
    
  ];

  // Toggle pour sauvegarder/favoris
  const toggleSave = () => {
    setIsSaved(!isSaved);
  };

  // Réservation
  const toggleBookingModal = () => {
    setShowBookingModal(!showBookingModal);
  };

  const currentDay = circuit.itinerary.find(day => day.day === activeDay) || circuit.itinerary[0];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section avec style parallax */}
      <section className="relative h-[70vh] w-full overflow-hidden">
        {/* Image de fond avec effet parallax */}
        <div className="absolute inset-0 bg-fixed">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-o5zhpPam2gzSRgcbLI7vouVbQqWcsMtDLA&s"
            alt="Paysage d'Afrique de l'Ouest"
            className="w-full h-full object-cover transition-transform duration-300"
          />
          {/* Overlay dégradé */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/70"></div>
        </div>

        {/* Badge de recommandation */}
        <div className="absolute top-4 left-4 z-20 bg-amber-500 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center shadow-lg">
          <Star className="w-4 h-4 mr-1 fill-white" />
          Populaire
        </div>

        {/* Contenu */}
        <div className="relative z-10 h-full flex flex-col justify-end items-start text-left px-8 md:px-16 pb-16 max-w-7xl mx-auto">
          <div className="flex items-center space-x-2 text-amber-300 mb-3">
            <Star className="w-5 h-5 fill-amber-300" />
            <span className="text-lg font-semibold">{circuit.rating}/5</span>
            <span className="text-white">({circuit.reviews} avis)</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg max-w-4xl leading-tight">
            {circuit.title}
          </h1>
          
          <div className="flex flex-wrap gap-4 text-white text-lg mb-8">
            <div className="flex items-center">
              <Clock className="w-5 h-5 mr-2" />
              <span>{circuit.duration}</span>
            </div>
            <div className="flex items-center">
              <Euro className="w-5 h-5 mr-2" />
              <span>À partir de {circuit.price}</span>
            </div>
            <div className="flex items-center">
              <Users className="w-5 h-5 mr-2" />
              <span>Max. {circuit.maxGroupSize} personnes</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              onClick={toggleBookingModal}
              className="bg-amber-500 hover:bg-amber-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition-all hover:scale-105"
            >
              Réserver ce circuit
            </Button>
            
            <Button 
              onClick={toggleSave}
              variant="outline" 
              className={`flex items-center rounded-full border-2 font-semibold py-3 px-6 transition-all ${
                isSaved 
                  ? 'bg-white/20 text-white border-white' 
                  : 'bg-white/10 text-white border-white/50 hover:border-white'
              }`}
            >
              <Heart className={`w-5 h-5 mr-2 ${isSaved ? 'fill-red-500 text-red-500' : ''}`} />
              {isSaved ? 'Sauvegardé' : 'Sauvegarder'}
            </Button>
          </div>
        </div>
      </section>

      {/* Navigation sticky */}
      <div className="sticky top-0 z-30 bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="flex overflow-x-auto gap-2 py-4 no-scrollbar">
            <a href="#apercu" className="px-4 py-2 whitespace-nowrap text-gray-700 hover:text-amber-600 font-medium">
              Aperçu
            </a>
            <a href="#itineraire" className="px-4 py-2 whitespace-nowrap text-gray-700 hover:text-amber-600 font-medium">
              Itinéraire
            </a>
            <a href="#inclus" className="px-4 py-2 whitespace-nowrap text-gray-700 hover:text-amber-600 font-medium">
              Ce qui est inclus
            </a>
            <a href="#galerie" className="px-4 py-2 whitespace-nowrap text-gray-700 hover:text-amber-600 font-medium">
              Galerie
            </a>
            <a href="#avis" className="px-4 py-2 whitespace-nowrap text-gray-700 hover:text-amber-600 font-medium">
              Avis
            </a>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Left Column - Itinerary */}
          <div className="md:col-span-2 space-y-12">
            {/* Aperçu du circuit */}
            <section id="apercu" className="bg-white p-8 rounded-2xl shadow-sm">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
                <Info className="w-7 h-7 mr-3 text-amber-500" />
                Aperçu du circuit
              </h2>
              
              <p className="text-gray-700 mb-8 text-lg leading-relaxed">
                {circuit.longDescription}
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">Points forts du circuit</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                {circuit.highlights.map((highlight, index) => (
                  <div key={index} className="flex items-start p-3 bg-amber-50 rounded-lg">
                    <CheckCircle className="text-amber-500 mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{highlight}</span>
                  </div>
                ))}
              </div>
              
              <div className="bg-blue-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-blue-800 mb-3">Dates de départ disponibles</h3>
                <div className="flex flex-wrap gap-3">
                  {circuit.startDates.map((date, index) => (
                    <div key={index} className="flex items-center bg-white p-2 px-4 rounded-lg border border-blue-100">
                      <Calendar className="text-blue-600 w-5 h-5 mr-2" />
                      {date}
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Itinéraire */}
            <section id="itineraire" className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
                <MapPin className="w-7 h-7 mr-3 text-amber-500" />
                Itinéraire du voyage
              </h2>
              
              {/* Day Selector */}
              <div className="flex overflow-x-auto gap-2 pb-4 no-scrollbar">
                {circuit.itinerary.map((day) => (
                  <button
                    key={day.day}
                    onClick={() => setActiveDay(day.day)}
                    className={`p-3 rounded-xl whitespace-nowrap transition-all ${
                      activeDay === day.day
                        ? 'bg-amber-500 text-white shadow-md scale-105'
                        : 'bg-white text-gray-700 hover:bg-amber-50 border border-gray-100'
                    }`}
                  >
                    <div className="font-bold">Jour {day.day}</div>
                    <div className="text-sm">{day.title}</div>
                  </button>
                ))}
              </div>

              {/* Day Details avec la carte intégrée */}
              <div className="grid md:grid-cols-5 gap-6">
                {/* Détails du jour */}
                <div className="md:col-span-3">
                  <div className="bg-white p-6 rounded-2xl shadow-sm h-full">
                    <div className="mb-4">
                      <h3 className="text-2xl font-bold text-gray-800">
                        Jour {currentDay.day}: {currentDay.title}
                      </h3>
                      <div className="flex items-center text-gray-500 mt-2">
                        <MapPin className="w-5 h-5 mr-2 text-amber-500" />
                        <span>{currentDay.locations.join(" → ")}</span>
                      </div>
                    </div>

                    <p className="text-gray-700 mb-6">{currentDay.description}</p>
                    
                    <div className="space-y-4">
                      {/* Activités */}
                      <div>
                        <h4 className="font-semibold text-gray-700 mb-2 flex items-center">
                          <Sun className="w-4 h-4 mr-2 text-amber-500" />
                          Activités du jour
                        </h4>
                        <ul className="list-disc list-inside space-y-1 text-gray-600 pl-2">
                          {currentDay.activities.map((activity, index) => (
                            <li key={index}>{activity}</li>
                          ))}
                        </ul>
                      </div>
                      
                      {/* Hébergement et repas */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                        <div className="bg-gray-50 p-3 rounded-lg">
                          <h4 className="font-semibold text-gray-700">Hébergement</h4>
                          <p className="text-gray-600">{currentDay.accommodation}</p>
                        </div>
                        <div className="bg-gray-50 p-3 rounded-lg">
                          <h4 className="font-semibold text-gray-700">Repas inclus</h4>
                          <p className="text-gray-600">{currentDay.meals.join(", ")}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Carte */}
                <div className="md:col-span-2">
                  <div className="bg-white p-4 rounded-2xl shadow-sm h-[400px]">
                    <MapWrapper
                      center={mapCenter}
                      itinerary={circuit.itinerary}
                      activeDay={activeDay}
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* Ce qui est inclus */}
            <section id="inclus" className="bg-white p-8 rounded-2xl shadow-sm">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Ce qui est inclus</h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                    <CheckCircle className="w-5 h-5 mr-2 text-green-500" />
                    Inclus dans ce circuit
                  </h3>
                  <ul className="space-y-3">
                    {circuit.included.map((item, index) => (
                      <li key={index} className="flex items-center text-gray-700">
                        <CheckCircle className="w-5 h-5 mr-3 text-green-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                    <CheckCircle className="w-5 h-5 mr-2 text-red-500" strokeWidth={3} />
                    Non inclus
                  </h3>
                  <ul className="space-y-3">
                    {circuit.notIncluded.map((item, index) => (
                      <li key={index} className="flex items-center text-gray-700">
                        <CheckCircle className="w-5 h-5 mr-3 text-red-500" strokeWidth={3} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="mt-8 p-6 bg-blue-50 rounded-xl">
                <h3 className="text-xl font-semibold text-blue-800 mb-3">Besoin d'informations supplémentaires?</h3>
                <p className="text-blue-700 mb-4">Notre équipe est disponible pour répondre à toutes vos questions sur ce circuit.</p>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                  Nous contacter
                </Button>
              </div>
            </section>

            {/* Galerie améliorée */}
            <section id="galerie" className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
                <CheckCircle className="w-7 h-7 mr-3 text-amber-500" />
                Galerie du circuit
              </h2>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {placeholderImages.map((image, index) => (
                  <div key={index} className={`overflow-hidden rounded-2xl ${
                    index === 0 ? 'md:col-span-2 md:row-span-2' : ''
                  }`}>
                    <img
                      src={image}
                      alt={`Galerie ${index + 1}`}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500 aspect-[4/3]"
                    />
                  </div>
                ))}
              </div>
            </section>

            {/* FAQ Section */}
            <section className="bg-white p-8 rounded-2xl shadow-sm">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Questions fréquentes</h2>
              
              <div className="space-y-4">
                {[
                  {
                    question: "Quel est le niveau de difficulté de ce circuit?",
                    answer: "Ce circuit est de niveau modéré. Il comprend quelques marches à pied sur terrain plat et des déplacements en véhicule sur des routes parfois non goudronnées. Aucune condition physique particulière n'est requise, mais une bonne mobilité est recommandée."
                  },
                  {
                    question: "Quelles formalités de visa sont nécessaires?",
                    answer: "Pour ce circuit qui traverse le Burkina Faso et le Bénin, vous aurez besoin de deux visas distincts. Nous vous fournirons toutes les informations nécessaires et pourrons vous assister dans les démarches. Votre passeport doit être valide au moins 6 mois après la date de retour."
                  },
                  {
                    question: "Quelles vaccinations sont recommandées?",
                    answer: "Le vaccin contre la fièvre jaune est obligatoire. Les vaccinations contre l'hépatite A, la typhoïde et la mise à jour des vaccins courants sont recommandées. Un traitement antipaludéen est également conseillé. Consultez votre médecin ou un centre de médecine des voyages avant le départ."
                  },
                  {
                    question: "Comment se déroulent les repas pendant le circuit?",
                    answer: "Les repas sont pris soit dans les hébergements, soit dans des restaurants locaux sélectionnés pour leur qualité. Vous aurez l'occasion de découvrir la riche gastronomie ouest-africaine. Les régimes alimentaires spéciaux peuvent être pris en compte avec préavis."
                  },
                ].map((item, index) => (
                  <Disclosure key={index}>
                    {({ open }) => (
                      <>
                        <Disclosure.Button className="flex justify-between items-center w-full p-4 text-left bg-gray-50 hover:bg-gray-100 rounded-lg">
                          <span className="font-medium text-gray-800">{item.question}</span>
                          <ChevronDown
                            className={`${
                              open ? 'transform rotate-180' : ''
                            } w-5 h-5 text-amber-500 transition-transform`}
                          />
                        </Disclosure.Button>
                        <Transition
                          enter="transition duration-100 ease-out"
                          enterFrom="transform scale-95 opacity-0"
                          enterTo="transform scale-100 opacity-100"
                          leave="transition duration-75 ease-out"
                          leaveFrom="transform scale-100 opacity-100"
                          leaveTo="transform scale-95 opacity-0"
                        >
                          <Disclosure.Panel className="p-4 text-gray-600">
                            {item.answer}
                          </Disclosure.Panel>
                        </Transition>
                      </>
                    )}
                  </Disclosure>
                ))}
              </div>
            </section>

            {/* Avis clients */}
            {/* <section id="avis" className="bg-white p-8 rounded-2xl shadow-sm">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Avis de nos voyageurs</h2>
              
              <div className="flex items-center mb-8">
                <div className="bg-amber-50 p-4 rounded-xl flex items-center justify-center">
                  <div className="text-4xl font-bold text-amber-500">{circuit.rating}</div>
                  <div className="text-lg text-amber-700">/5</div>
                </div>
                <div className="ml-4">
                  <div className="flex text-amber-400 mb-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`w-5 h-5 ${i < Math.floor(circuit.rating) ? 'fill-amber-400' : ''}`} />
                    ))}
                  </div>
                  <div className="text-gray-600">{circuit.reviews} avis vérifiés</div>
                </div>
              </div>
              
              <div className="space-y-6">
                {[
                  {
                    name: "Marie L.",
                    date: "Avril 2025",
                    rating: 5,
                    comment: "Une expérience extraordinaire ! Notre guide était passionné et très bien informé sur l'histoire des royaumes. Les rencontres avec les chefs traditionnels ont été des moments privilégiés. Je recommande vivement ce circuit pour ceux qui veulent découvrir l'Afrique de l'Ouest authentique."
                  },
                  {
                    name: "Jean-Pierre M.",
                    date: "Mars 2025",
                    rating: 4,
                    comment: "Circuit très bien organisé avec des hébergements confortables. Les sites visités sont impressionnants et hors des sentiers battus. Seul bémol, certains trajets en voiture sont un peu longs, mais cela vaut vraiment la peine pour les découvertes qui suivent."
                  },
                  {
                    name: "Sophie K.",
                    date: "Février 2025",
                    rating: 5,
                    comment: "La cérémonie vaudou à Ouidah restera gravée dans ma mémoire ! Un voyage riche en découvertes culturelles et en échanges humains. La nourriture locale était délicieuse et l'équipe aux petits soins. Je suis revenue transformée par cette expérience."
                  }
                ].map((review, index) => (
                  <div key={index} className="border-b border-gray-100 pb-6 last:border-0">
                    <div className="flex justify-between items-start mb-2">
                      <div className="flex items-center">
                        <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center text-white font-bold">
                          {review.name.charAt(0)}
                        </div>
                        <div className="ml-3">
                          <div className="font-semibold text-gray-800">{review.name}</div>
                          <div className="text-sm text-gray-500">{review.date}</div>
                        </div>
                      </div>
                      <div className="flex text-amber-400">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className={`w-4 h-4 ${i < review.rating ? 'fill-amber-400' : ''}`} />
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-600">{review.comment}</p>
                  </div>
                ))}
              </div>
              
              <Button className="mt-6 bg-gray-100 hover:bg-gray-200 text-gray-800">
                Voir tous les avis
              </Button>
            </section> */}
          </div>

          {/* Right Column - Booking Card */}
          <div className="md:col-span-1">
            <div className="sticky top-20">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Réserver ce circuit</h3>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                    <span className="text-gray-600">Prix par personne</span>
                    <span className="font-semibold text-gray-800">{circuit.price}</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                    <span className="text-gray-600">Durée</span>
                    <span className="font-semibold text-gray-800">{circuit.duration}</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                    <span className="text-gray-600">Taille du groupe</span>
                    <span className="font-semibold text-gray-800">Max. {circuit.maxGroupSize} personnes</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Niveau de difficulté</span>
                    <span className="font-semibold text-gray-800">{circuit.difficulty}</span>
                  </div>
                </div>
                
                <div className="mb-6">
                  <label className="block text-gray-700 mb-2 font-medium">Date de départ</label>
                  <select className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50">
                    <option value="">Sélectionnez une date</option>
                    {circuit.startDates.map((date, index) => (
                      <option key={index} value={date}>{date}</option>
                    ))}
                  </select>
                </div>
                
                <div className="mb-6">
                  <label className="block text-gray-700 mb-2 font-medium">Nombre de voyageurs</label>
                  <select className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50">
                    <option value="1">1 voyageur</option>
                    <option value="2">2 voyageurs</option>
                    <option value="3">3 voyageurs</option>
                    <option value="4">4 voyageurs</option>
                    <option value="5">5 voyageurs</option>
                    <option value="6+">6+ voyageurs</option>
                  </select>
                </div>
                
                <Button className="w-full bg-amber-500 hover:bg-amber-600 text-white font-semibold py-4 rounded-lg shadow-md transition-transform hover:scale-105 mb-4">
                  Réserver maintenant
                </Button>
                
                <Button className="w-full bg-white hover:bg-gray-50 text-amber-600 font-semibold py-4 rounded-lg border border-amber-300 transition-all hover:border-amber-500">
                  Poser une question
                </Button>
                
                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-medium text-blue-800 flex items-center mb-2">
                    <Info className="w-4 h-4 mr-2" />
                    Besoin d'aide ?
                  </h4>
                  <p className="text-sm text-blue-700 mb-2">Nos conseillers sont disponibles pour vous aider à planifier votre voyage.</p>
                  <div className="text-blue-800 font-medium">+33 (0)1 23 45 67 89</div>
                </div>
              </div>
              
              {/* Autres circuits qui pourraient vous intéresser */}
              <div className="mt-6 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="text-lg font-bold text-gray-800 mb-4">Circuits similaires</h3>
                
                <div className="space-y-4">
                  {[
                    {
                      title: "Trésors cachés du Togo et du Ghana",
                      duration: "10 jours",
                      price: "1500€",
                      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvuT5UxsrkNniF4YhJBd3N-yxddnQsRqmJAw&s"
                    },
                    {
                      title: "Splendeurs du Mali ancestral",
                      duration: "7 jours",
                      price: "1100€",
                      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvuT5UxsrkNniF4YhJBd3N-yxddnQsRqmJAw&s"
                    }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start">
                      <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                        <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                      </div>
                      <div className="ml-3">
                        <h4 className="font-medium text-gray-800 hover:text-amber-600 transition-colors">{item.title}</h4>
                        <div className="text-sm text-gray-500">{item.duration}</div>
                        <div className="text-sm font-medium text-amber-600">{item.price}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <section className="relative py-16 mt-8">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIUx4V31ts5VB3Q0GQPGdaFMJhgIsLEG36Sw&s"
            alt="Paysage africain"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-amber-800/90 to-amber-600/80"></div>
        </div>
        
        <div className="max-w-5xl mx-auto text-center px-4 py-12 relative z-10">
          <h2 className="text-4xl font-bold text-white mb-4">Prêt à vivre cette aventure ?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Réservez dès maintenant et embarquez pour un voyage culturel inoubliable à travers les royaumes d'Afrique de l'Ouest.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-amber-600 hover:bg-gray-100 px-8 py-3 rounded-full text-lg font-semibold">
              Réserver ce circuit
            </Button>
            <Button variant="outline" className="bg-transparent text-white border-2 border-white hover:bg-white/10 px-8 py-3 rounded-full text-lg font-semibold">
              Télécharger la brochure
            </Button>
          </div>
        </div>
      </section>

      
     

      {/* Modal de réservation */}
      {showBookingModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/50" onClick={toggleBookingModal}></div>
          <div className="bg-white p-8 rounded-2xl shadow-xl max-w-md w-full relative z-10 m-4">
            <button 
              onClick={toggleBookingModal}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              ×
            </button>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Réserver ce circuit</h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-gray-700 mb-2 font-medium">Date de départ</label>
                <select className="w-full p-3 border border-gray-300 rounded-lg">
                  {circuit.startDates.map((date, index) => (
                    <option key={index} value={date}>{date}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-gray-700 mb-2 font-medium">Nombre de voyageurs</label>
                <div className="flex items-center">
                  <button className="bg-gray-100 p-2 rounded-l-lg border border-gray-300">-</button>
                  <input type="number" min="1" value="2" className="p-2 w-16 text-center border-t border-b border-gray-300" />
                  <button className="bg-gray-100 p-2 rounded-r-lg border border-gray-300">+</button>
                </div>
              </div>
              
              <div>
                <label className="block text-gray-700 mb-2 font-medium">Votre nom</label>
                <input type="text" className="w-full p-3 border border-gray-300 rounded-lg" />
              </div>
              
              <div>
                <label className="block text-gray-700 mb-2 font-medium">Votre email</label>
                <input type="email" className="w-full p-3 border border-gray-300 rounded-lg" />
              </div>
              
              <div>
                <label className="block text-gray-700 mb-2 font-medium">Message (optionnel)</label>
                <textarea className="w-full p-3 border border-gray-300 rounded-lg h-24"></textarea>
              </div>
            </div>
            
            <Button className="w-full mt-6 bg-amber-500 hover:bg-amber-600 text-white font-semibold py-3">
              Confirmer ma réservation
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}