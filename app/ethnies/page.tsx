// // Page dédiée aux ethnies pour la section "Explorer le Bénin"
// "use client";

// import { motion } from "framer-motion";
// import Link from "next/link";
// import Image from "next/image";
// import { ArrowRight } from "lucide-react";

// const ETHNIC_GROUPS = [
//   {
//     name: "Fon",
//     region: "Sud Bénin",
//     description: "Peuple fondateur du royaume du Dahomey, riche en traditions vodun et en art royal.",
//     image: "https://images.unsplash.com/photo-1523881374236-dd34f6ac1226?q=80&w=2070"
//   },
//   {
//     name: "Yoruba",
//     region: "Sud-Est",
//     description: "Portés sur les rites Ifa et la divination, les Yoruba ont une culture musicale très développée.",
//     image: "https://images.unsplash.com/photo-1523881374236-dd34f6ac1226?q=80&w=2070"
//   },
//   {
//     name: "Bariba",
//     region: "Nord-Est",
//     description: "Peuple de cavaliers et de royaumes militaires, connu pour la fête Gaani et les chants épiques.",
//     image: "https://images.unsplash.com/photo-1523881374236-dd34f6ac1226?q=80&w=2070"
//   },
//   {
//     name: "Dendi",
//     region: "Nord Bénin",
//     description: "Peuple commerçant et islamisé, dont la culture orale est fortement ancrée.",
//     image: "https://images.unsplash.com/photo-1523881374236-dd34f6ac1226?q=80&w=2070"
//   },
//   {
//     name: "Adja",
//     region: "Sud-Ouest",
//     description: "Origines communes avec les Fon, connus pour leurs proverbes et contes philosophiques.",
//     image: "https://images.unsplash.com/photo-1523881374236-dd34f6ac1226?q=80&w=2070"
//   }
// ];

// export default function EthniesPage() {
//   return (
//     <div className="bg-[#FEF5E7] min-h-screen py-16 px-6">
//       <div className="max-w-6xl mx-auto text-center">
//         <motion.h1
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="text-4xl md:text-5xl font-bold text-[#2C3E50] mb-4 mt-12"
//         >
//           Les grandes <span className="text-[#E67E22]">ethnies</span> du Bénin
//         </motion.h1>
//         <p className="text-[#7F8C8D] text-lg mb-12 max-w-3xl mx-auto">
//           Explorez les peuples fondateurs du pays, leurs langues, traditions, spiritualités et symboles identitaires.
//         </p>

//         <div className="grid md:grid-cols-2 gap-8">
//           {ETHNIC_GROUPS.map((ethnie, index) => (
//             <motion.div
//               key={index}
//               whileHover={{ scale: 1.02 }}
//               className="bg-white p-6 rounded-xl shadow-md text-left flex flex-col md:flex-row gap-6"
//             >
//               <Image
//                 src={ethnie.image}
//                 alt={ethnie.name}
//                 width={200}
//                 height={200}
//                 className="rounded-xl object-cover w-full md:w-64 h-48"
//               />
//               <div>
//                 <h3 className="text-2xl font-bold text-[#2C3E50] mb-1">{ethnie.name}</h3>
//                 <p className="text-sm text-[#E67E22] mb-2">{ethnie.region}</p>
//                 <p className="text-[#7F8C8D] mb-4">{ethnie.description}</p>
//                 <Link
//                   href={`/ethnies/${ethnie.name.toLowerCase()}`}
//                   className="inline-flex items-center text-[#E67E22] hover:underline font-medium"
//                 >
//                   Explorer plus loin <ArrowRight className="ml-2 h-4 w-4" />
//                 </Link>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }













"use client";

import { useState, useEffect, SetStateAction, JSXElementConstructor, Key, ReactElement, ReactNode, ReactPortal } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Search, MapPin, Users, MoveRight, X } from "lucide-react";

const ETHNIC_GROUPS = [
  {
    id: "fon",
    name: "Fon",
    region: "Sud Bénin",
    population: "~2 millions",
    description: "Peuple fondateur du royaume du Dahomey, riche en traditions vodun et en art royal.",
    longDescription: "Les Fon constituent l'un des principaux groupes ethniques du Bénin. Ils sont principalement basés dans la région d'Abomey et ont fondé le puissant royaume du Dahomey. Leur culture est profondément liée aux pratiques vodun, à la musique cérémonielle et possède un riche patrimoine d'arts royaux, notamment les appliqués, les récades et les statues.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW1bJsEFyS4MNRE6IB9gzir2x1a1iQp199_Q&s",
    traditions: ["Vodun", "Appliqués du Dahomey", "Zangbeto"]
  },
  {
    id: "yoruba",
    name: "Yoruba",
    region: "Sud-Est",
    population: "~1.5 million", 
    description: "Portés sur les rites Ifa et la divination, les Yoruba ont une culture musicale très développée.",
    longDescription: "Les Yoruba sont présents au Bénin, au Nigeria et au Togo. Ils possèdent une cosmogonie complexe basée sur le culte des Orishas. La divination Ifa est au cœur de leurs pratiques spirituelles. Réputés pour leur richesse musicale, leurs sculptures en bois et leurs textiles indigo, les Yoruba ont un patrimoine culturel particulièrement diversifié.",
    image: "https://refinedng.com/wp-content/uploads/2022/07/Yoruba-People.jpg",
    traditions: ["Divination Ifa", "Masques Gelede", "Batik"]
  },
  {
    id: "bariba",
    name: "Bariba",
    region: "Nord-Est",
    population: "~750,000",
    description: "Peuple de cavaliers et de royaumes militaires, connu pour la fête Gaani et les chants épiques.",
    longDescription: "Les Bariba, aussi appelés Baatombu, occupent principalement le nord-est du Bénin. Ce peuple de tradition guerrière a fondé plusieurs principautés dont le royaume de Nikki. La fête de la Gaani, célébration annuelle majeure, témoigne de leur riche héritage équestre et militaire. Leurs chants épiques racontent l'histoire des grands rois et des héros locaux.",
    image: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Rugged_rider.jpg",
    traditions: ["Fête de la Gaani", "Arts du cheval", "Tissage"]
  },
  {
    id: "dendi",
    name: "Dendi",
    region: "Nord Bénin",
    population: "~250,000",
    description: "Peuple commerçant et islamisé, dont la culture orale est fortement ancrée.",
    longDescription: "Les Dendi sont principalement établis le long du fleuve Niger. Ce groupe ethnique fortement influencé par l'islam est reconnu pour ses traditions de commerce fluvial et son artisanat. Leur culture orale, riche en contes et en poésies, transmet l'histoire et les valeurs morales. Les griots dendi jouent un rôle fondamental dans la préservation de ce patrimoine immatériel.",
    image: "https://images.unsplash.com/photo-1578353022142-09264fd64295?q=80&w=1965",
    traditions: ["Musique des griots", "Poterie", "Navigation fluviale"]
  },
  {
    id: "adja",
    name: "Adja",
    region: "Sud-Ouest",
    population: "~500,000",
    description: "Origines communes avec les Fon, connus pour leurs proverbes et contes philosophiques.",
    longDescription: "Les Adja sont principalement installés dans le sud-ouest du Bénin. Ils partagent des origines historiques avec les Fon mais possèdent leurs propres traditions distinctives. Réputés pour leur philosophie exprimée à travers d'innombrables proverbes, ils excellent dans l'art de la parole. Leurs rituels agraires et leurs masques témoignent d'une relation profonde avec la terre.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRuji32KsEKwXxtCCSmlhgknH1Y_YYthzkww&s",
    traditions: ["Masques", "Contes philosophiques", "Agriculture rituelle"]
  },
  {
    id: "somba",
    name: "Somba",
    region: "Nord-Ouest",
    population: "~200,000",
    description: "Célèbres pour leurs tatas (maisons-forteresses) et leur architecture unique de terre.",
    longDescription: "Les Somba, également connus sous le nom de Batammariba, sont célèbres pour leurs impressionnantes habitations en terre appelées tatas somba. Installés dans la chaîne de l'Atacora, ils ont développé une architecture unique inscrite au patrimoine mondial de l'UNESCO. Leurs cérémonies d'initiation et leur relation harmonieuse avec l'environnement font partie intégrante de leur identité culturelle.",
    image: "data:image/jpeg;base64,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",
    traditions: ["Tatas (architecture)", "Cérémonies d'initiation", "Scarifications"]
  },
  {
    id: "mina",
    name: "Mina",
    region: "Sud côtier",
    population: "~300,000",
    description: "Peuple côtier avec une forte tradition de pêche et de commerce maritime.",
    longDescription: "Les Mina sont principalement installés sur la côte du Bénin. Grands pêcheurs et commerçants, ils ont joué un rôle historique important dans les échanges avec les Européens. Leurs pirogues colorées et leur maîtrise des techniques de pêche en haute mer témoignent de leur profonde connaissance de l'océan. Leurs chants et danses sont souvent liés aux rythmes des vagues.",
    image: "https://images.unsplash.com/photo-1533645782036-997947a9d529?q=80&w=1926",
    traditions: ["Pêche traditionnelle", "Danses de pirogue", "Fêtes de la mer"]
  }
];

export default function EthniesPage() {
  const [selectedEthnie, setSelectedEthnie] = useState<{
    id: string;
    name: string;
    region: string;
    population: string;
    description: string;
    longDescription: string;
    image: string;
    traditions: string[];
  } | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredEthnies, setFilteredEthnies] = useState(ETHNIC_GROUPS);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const filtered = ETHNIC_GROUPS.filter(ethnie => 
      ethnie.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
      ethnie.region.toLowerCase().includes(searchTerm.toLowerCase()) ||
      ethnie.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredEthnies(filtered);
  }, [searchTerm]);

  const openModal = (ethnie: {
    id: string;
    name: string;
    region: string;
    population: string;
    description: string;
    longDescription: string;
    image: string;
    traditions: string[];
  }) => {
    setSelectedEthnie(ethnie);
    setShowModal(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setShowModal(false);
    document.body.style.overflow = 'auto';
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const staggerItem = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-50">
      {/* Hero Section */}
      <div className="relative h-80 md:h-96 overflow-hidden">
        <div className="absolute inset-0 bg-black">
          <Image 
            src="https://images.unsplash.com/photo-1533645782036-997947a9d529?q=80&w=1926" 
            alt="Cultures du Bénin"
            fill
            className="object-cover opacity-60"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/70" />
        <div className="relative h-full max-w-6xl mx-auto px-6 flex flex-col justify-center">
          <motion.h1 
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-6xl font-bold text-white mb-4"
          >
            Diversité Ethnique <span className="text-amber-400">Béninoise</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-white/90 text-lg md:text-xl max-w-2xl"
          >
            Découvrez la mosaïque culturelle du Bénin à travers ses ethnies, chacune avec son histoire, 
            ses traditions et son patrimoine unique.
          </motion.p>
        </div>
      </div>

      {/* Search Section */}
      <div className="max-w-6xl mx-auto px-6 -mt-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white shadow-lg rounded-xl p-4 flex items-center"
        >
          <Search className="w-5 h-5 text-gray-400 mr-3" />
          <input
            type="text"
            placeholder="Rechercher une ethnie, région ou tradition..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-1 outline-none text-gray-700"
          />
          {searchTerm && (
            <button 
              onClick={() => setSearchTerm('')}
              className="text-gray-400 hover:text-gray-600"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        {filteredEthnies.length === 0 ? (
          <div className="text-center py-16">
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-gray-500 text-lg"
            >
              Aucune ethnie ne correspond à votre recherche.
            </motion.p>
          </div>
        ) : (
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredEthnies.map((ethnie) => (
              <motion.div
                key={ethnie.id}
                variants={staggerItem}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-56">
                  <Image
                    src={ethnie.image}
                    alt={ethnie.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
                    <h3 className="text-2xl font-bold text-white">{ethnie.name}</h3>
                    <div className="flex items-center text-amber-200 text-sm">
                      <MapPin className="w-4 h-4 mr-1" />
                      <span>{ethnie.region}</span>
                    </div>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center text-gray-600 text-sm mb-3">
                    <Users className="w-4 h-4 mr-1" />
                    <span>{ethnie.population}</span>
                  </div>
                  <p className="text-gray-600 mb-4">{ethnie.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {ethnie.traditions.map((tradition, idx) => (
                      <span key={idx} className="bg-amber-100 text-amber-800 text-xs px-2 py-1 rounded-full">
                        {tradition}
                      </span>
                    ))}
                  </div>
                  <button
                    onClick={() => openModal(ethnie)}
                    className="inline-flex items-center text-amber-600 hover:text-amber-800 font-medium text-sm transition-colors"
                  >
                    Découvrir cette ethnie <MoveRight className="ml-2 h-4 w-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>

      {/* Modal for detailed view */}
      <AnimatePresence>
        {showModal && selectedEthnie && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-xl overflow-hidden max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-72">
                <Image
                  src={selectedEthnie.image}
                  alt={selectedEthnie.name}
                  fill
                  className="object-cover"
                />
                <button 
                  onClick={closeModal}
                  className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full"
                >
                  <X className="w-5 h-5" />
                </button>
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black to-transparent">
                  <h2 className="text-3xl font-bold text-white">{selectedEthnie.name}</h2>
                  <div className="flex items-center text-amber-200 text-sm">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span>{selectedEthnie.region}</span>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center text-gray-600 mb-4">
                  <Users className="w-5 h-5 mr-2" />
                  <span>Population estimée: {selectedEthnie.population}</span>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Présentation</h3>
                <p className="text-gray-600 mb-6">{selectedEthnie.longDescription}</p>
                
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Traditions notables</h3>
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedEthnie.traditions.map((tradition: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined, idx: Key | null | undefined) => (
                    <span key={idx} className="bg-amber-100 text-amber-800 px-3 py-1.5 rounded-full">
                      {tradition}
                    </span>
                  ))}
                </div>
                
                <Link
                  href={`/ethnies/${selectedEthnie.id}`}
                  className="inline-flex items-center bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-lg transition-colors"
                >
                  Explorer en détail <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}