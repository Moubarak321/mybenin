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
    image: "https://lanouvelletribune.info/wp-content/uploads/2021/12/Tata-somba-Kirche.jpg",
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
                  href={`/ethnies/fon`}
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