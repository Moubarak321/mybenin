
// ===============================================================================================================================================================================================================================================================================
// marche************************************************************
// ===============================================================================================================================================================================================================================================================================
// Réorganisation de la page d'accueil Ayizɔn avec une structure plus narrative et immersive
// Page d'accueil modifiée sans section témoignages, remplacée par une section "Objets culturels à collectionner"
// "use client";
// import React from 'react';
// import { motion } from "framer-motion";
// import { ArrowRight, Play } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import HeroCarousel from "@/components/carousel";
// import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
// import Link from "next/link";
// import LoadingSpinner from "@/components/loadingSpinner";
// import { useState } from "react";


// export default function Home() {
//   const [isLoading, setIsLoading] = useState(false);
//   const [navigatingTo, setNavigatingTo] = useState<string | null>(null);
//   const handleNavigation = () => {
//     setIsLoading(true);
//     // Optionnel: Arrêter le loading après un timeout si la page prend trop de temps
//     setTimeout(() => setIsLoading(false), 5000);
//   };
//   const popularThemes = [
//     {
//       id: "tourisme",
//       title: "Tourisme",
//       description: "Explorez le bénin et ses attractions touristiques",
//       image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQH2l--d9wJd_rRXfyNWNyKhPSrYqRPoj1Q5A&s", // Remplacez par votre URL
//       slug: "/tourisme"
//     },
//     {
//       id: "ethnie",
//       title: "Ethnies",
//       description: "Découvrez les groupes ethniques du Bénin",
//       image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr2FH9I9O-YKT7K1F4z-PPcqJ9pNYxMHyyWQ&s",
//       slug: "/ethnies"
//     },
//     {
//       id: "spirituality",
//       title: "Spiritualité",
//       description: "Le panthéon vodun, ses divinités et rites sacrés",
//       image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr2FH9I9O-YKT7K1F4z-PPcqJ9pNYxMHyyWQ&s",
//       slug: "/circuits/aventure"
//     },
//     {
//       id: "craftsmanship",
//       title: "Artisanat",
//       description: "Découvrez les chef-d'oeuvres de l'artisanat béninois",
//       image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzg5G3R9_urU6lcjtLWhb9w3ZVw901CmlEdg&s",
//       slug: "/circuits/aventure"
//     },
//     {
//       id: "gastronomy",
//       title: "Gastronomie",
//       description: "Nos saveurs et plats traditionnels à découvrir",
//       image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ7Gn3WPIym4AheHk7P5JXnYZkFnp8_wTfwg&s",
//       slug: "/circuits/aventure"
//     },
//     {
//       id: "royalties",
//       title: "Royautés",
//       description: "Palais et royaumes ancestraux à visiter",
//       image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG1U3C3mw52ONB3d6MUOHgi3ly18IAx8T5UA&s",
//       slug: "/circuits/aventure"
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-white overflow-x-hidden">

//       {/* Header */}

//       <section className="relative h-screen flex items-center justify-center text-center px-4 overflow-hidden bg-black">
//         <div className="absolute inset-0 bg-black/50 z-10" />
//         <div className="absolute inset-0 w-full h-full">
//           <img
//             src="https://www.francetvinfo.fr/pictures/ELtaOA2aKITDkAEMkCi5aCyanPA/1200x675/2020/08/11/phpvFCXID.jpg"
//             alt="Armoiries du Bénin"
//             className="w-full h-full object-cover"
//           />
//         </div>

//         <motion.div
//           className="relative z-20 max-w-4xl mx-auto text-white"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-tight">
//             Redécouvrez votre <span className="text-[#E67E22]">héritage</span>
//           </h1>
//           <p className="text-xl md:text-2xl mb-6">
//             Vivez la culture béninoise comme jamais auparavant — interactive, immersive et personnelle.
//           </p>
//           <Button className="bg-[#E67E22] hover:bg-[#D35400] text-white text-lg px-8 py-6 gap-2">
//             Commencer l'exploration
//             <ArrowRight className="h-5 w-5" />
//           </Button>
//         </motion.div>
//       </section>

//       {/* Caroussel sous header */}




//       <section className="mb-16">
//       <motion.div
//         className="absolute -bottom-25 left-0 right-0 z-30"
//         initial={{ opacity: 0, y: 50 }}
//         animate={{ opacity: 1, y: -80 }}
//         transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
//       >
//         <div className="max-w-6xl mx-auto px-4 relative">
//   {navigatingTo && <LoadingSpinner />}
  
//   <Carousel className="w-full relative">
//     <CarouselContent className="-ml-1">
//       {popularThemes.map((theme) => (
//         <CarouselItem key={theme.id} className="pl-3 basis-1/2 md:basis-1/3 lg:basis-1/4">
//           <motion.div
//             whileHover={{
//               scale: 1.05,
//               y: -5,
//               boxShadow: "0 15px 15px rgba(0,0,0,0.3)"
//             }}
//             className="block bg-white/15 backdrop-blur-md rounded-xl border-2 border-white/30 overflow-hidden cursor-pointer hover:bg-white/25 transition-all h-full relative min-h-[300px]"
//           >
//             <Link 
//               href={theme.slug} 
//               passHref
//               legacyBehavior
//             >
//               <a 
//                 className="block h-full"
//                 onClick={() => setNavigatingTo(theme.id)}
//               >
//                 <div className="relative h-48 overflow-hidden">
//                   <img
//                     src={theme.image}
//                     alt={theme.title}
//                     className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
//                     loading="lazy"
//                   />
//                 </div>
//                 <div className="p-4 bg-gradient-to-t from-black/70 to-transparent absolute bottom-0 w-full">
//                   <h3 className="text-lg font-bold text-white drop-shadow-md ">{theme.title}</h3>
//                   <p className="text-white/80 mt-1 text-sm drop-shadow-sm ">{theme.description}</p>
//                 </div>
//               </a>
//             </Link>
//           </motion.div>
//         </CarouselItem>
//       ))}
//     </CarouselContent>

//     <CarouselPrevious
//       className="absolute left-2 top-1/2 -translate-y-1/2 z-10 h-10 w-10 rounded-full bg-white/30 backdrop-blur-md border-none text-white hover:bg-white/40"
//       variant="ghost"
//     />
//     <CarouselNext
//       className="absolute right-2 top-1/2 -translate-y-1/2 z-10 h-10 w-10 rounded-full bg-white/30 backdrop-blur-md border-none text-white hover:bg-white/40"
//       variant="ghost"
//     />
//   </Carousel>
// </div>
//       </motion.div>
//     </section>


//       {/* section engagement culturel */}

//       <div className="relative z-20 pt-[120px] md:pt-[150px]">
//         <section className="py-16 px-4 bg-[#FEF5E7]">
//           <div className="max-w-6xl mx-auto">
//             <motion.h2
//               className="text-3xl md:text-4xl font-bold text-[#2C3E50] mb-12 text-center"
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//             >
//               Nos Engagements Culturels
//             </motion.h2>

//             <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//               {[
//                 {
//                   title: "Expertise Locale",
//                   description: "Une équipe 100% béninoise pour une immersion authentique",
//                   icon: "🌍"
//                 },
//                 {
//                   title: "Accessibilité",
//                   description: "Technologies adaptées à tous les publics",
//                   icon: "👐"
//                 },
//                 {
//                   title: "Patrimoine Préservé",
//                   description: "Contenus validés par des historiens et chefs traditionnels",
//                   icon: "🏛️"
//                 },
//                 {
//                   title: "Innovation",
//                   description: "Médiation culturelle par les nouvelles technologies",
//                   icon: "💡"
//                 }
//               ].map((item, index) => (
//                 <motion.div
//                   key={index}
//                   whileHover={{ y: -5 }}
//                   className="bg-white p-6 rounded-xl shadow-sm border border-[#E67E22]/20"
//                 >
//                   <div className="text-4xl mb-4">{item.icon}</div>
//                   <h3 className="text-xl font-bold text-[#2C3E50] mb-2">{item.title}</h3>
//                   <p className="text-[#7F8C8D]">{item.description}</p>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </section>





//         {/* Section Créateur de Légende */}
//         <section className="py-20 px-4 bg-[#2C3E50] text-white text-center ">
//           <div className="max-w-3xl mx-auto">
//             <motion.h2 className="text-3xl md:text-4xl font-bold mb-4">
//               Crée ta propre <span className="text-[#E67E22]">histoire</span>
//             </motion.h2>
//             <p className="text-xl text-[#BDC3C7] mb-8">
//               Entrez votre nom et votre origine pour générer une histoire inspirée des épopées béninoises
//             </p>
//             <Button className="bg-[#E67E22] hover:bg-[#D35400] text-white text-lg px-8 py-4">
//               Créer mon histoire
//             </Button>
//           </div>
//         </section>

//       </div>

//       {/* Section Circuits Touristiques */}
//       <section className="py-20 px-4 bg-white">
//         <div className="max-w-6xl mx-auto">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.5 }}
//             className="text-center mb-12"
//           >
//             <h2 className="text-3xl md:text-4xl font-bold text-[#2C3E50] mb-4">
//               Nos Circuits Exclusifs
//             </h2>
//             <p className="text-xl text-[#7F8C8D] max-w-2xl mx-auto">
//               Découvrez le Bénin à travers des expériences authentiques sélectionnées par nos guides partenaires
//             </p>
//           </motion.div>

//           <div className="grid md:grid-cols-3 gap-8 mb-12">
//             {[
//               {
//                 title: "Anciens Royaumes et Chefferies",
//                 type: "CULTURE",
//                 duration: "14 jours",
//                 price: "1500€",
//                 image: "https://anpt.bj/upload/images/albums/935140769223001657018726.jpg" // Remplacez par vos URLs
//               },
//               {
//                 title: "La Route des Émotions",
//                 type: "MINORITÉ ETHNIQUE",
//                 duration: "12 jours",
//                 price: "1300€",
//                 image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/21/0d/ab/49/slave-route-view-from.jpg?w=1200&h=-1&s=1"
//               },
//               {
//                 title: "Nature, Culture et Traditions",
//                 type: "MULTI-PAYS",
//                 duration: "15 jours",
//                 price: "1200€",
//                 image: "https://www.geres.eu/wp-content/uploads/2019/11/geres.projets.benin_.territoires-collines-3.jpg"
//               }
//             ].map((circuit, index) => (
//               <motion.div
//                 key={index}
//                 whileHover={{ y: -5 }}
//                 className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100"
//               >
//                 <div className="h-48 overflow-hidden">
//                   <img
//                     src={circuit.image}
//                     alt={circuit.title}
//                     className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
//                     loading="lazy"
//                   />
//                 </div>
//                 <div className="p-6">
//                   <div className="flex justify-between items-start mb-2">
//                     <span className="text-sm font-semibold text-[#E67E22]">
//                       {circuit.type}
//                     </span>
//                     <span className="text-xs text-gray-500">
//                       {circuit.duration} · BÉNIN
//                     </span>
//                   </div>
//                   <h3 className="text-xl font-bold text-[#2C3E50] mb-3">
//                     {circuit.title}
//                   </h3>
//                   <div className="flex justify-between items-center">
//                     <span className="text-lg font-bold text-[#E67E22]">
//                       À partir de {circuit.price}
//                     </span>
//                     <Button variant="outline" className="border-[#E67E22] text-[#E67E22] hover:bg-[#E67E22]/10">
//                       Voir
//                     </Button>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>

//           <div className="text-center">
//             <Button className="bg-[#E67E22] hover:bg-[#D35400] text-white px-8 py-4 text-lg">
//               Découvrir plus de circuits
//             </Button>
//           </div>
//         </div>
//       </section>


//       {/* Section Expériences Immersives */}
//       <section className="py-20 px-4 bg-gradient-to-b from-[#FEF5E7] to-white">
//         <div className="max-w-6xl mx-auto">
//           <motion.div
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             viewport={{ once: true }}
//             className="text-center mb-16"
//           >
//             <h2 className="text-3xl md:text-4xl font-bold text-[#2C3E50] mb-4">
//               Votre Expérience Culturelle Unique
//             </h2>
//             <p className="text-xl text-[#7F8C8D] max-w-3xl mx-auto">
//               Transformez votre smartphone en passeport interactif pour vivre le Bénin comme jamais auparavant
//             </p>
//           </motion.div>

//           <div className="grid md:grid-cols-2 gap-12">
//             {/* Colonne Gauche */}
//             <div className="space-y-8">
//               <motion.div
//                 whileHover={{ x: 5 }}
//                 className="pl-6 border-l-4 border-[#E67E22]"
//               >
//                 <h3 className="text-2xl font-bold text-[#2C3E50] mb-3">
//                   Explorer les Trésors Cachés
//                 </h3>
//                 <ul className="space-y-4 text-lg text-[#5D6D7E]">
//                   <li className="flex items-start">
//                     <span className="text-[#E67E22] mr-2">•</span>
//                     <span><strong>Déverrouillez</strong> les secrets des royaumes dahoméens grâce à notre carte interactive</span>
//                   </li>
//                   <li className="flex items-start">
//                     <span className="text-[#E67E22] mr-2">•</span>
//                     <span><strong>Parcourez</strong> les marchés artisanaux avec nos guides audio géolocalisés</span>
//                   </li>
//                   <li className="flex items-start">
//                     <span className="text-[#E67E22] mr-2">•</span>
//                     <span><strong>Décryptez</strong> les symboles Adinkra avec notre outil de reconnaissance d'image</span>
//                   </li>
//                 </ul>
//               </motion.div>

//               <motion.div
//                 whileHover={{ x: 5 }}
//                 className="pl-6 border-l-4 border-[#E67E22]"
//               >
//                 <h3 className="text-2xl font-bold text-[#2C3E50] mb-3">
//                   Vivre les Traditions
//                 </h3>
//                 <ul className="space-y-4 text-lg text-[#5D6D7E]">
//                   <li className="flex items-start">
//                     <span className="text-[#E67E22] mr-2">•</span>
//                     <span><strong>Participez</strong> virtuellement à des cérémonies vodun avec nos expériences 360°</span>
//                   </li>
//                   <li className="flex items-start">
//                     <span className="text-[#E67E22] mr-2">•</span>
//                     <span><strong>Apprenez</strong> à préparer le délicieux Ayimolou avec nos chefs en vidéo live</span>
//                   </li>
//                   <li className="flex items-start">
//                     <span className="text-[#E67E22] mr-2">•</span>
//                     <span><strong>Écoutez</strong> les contes ancestrals racontés par les griots de votre région</span>
//                   </li>
//                 </ul>
//               </motion.div>
//             </div>

//             {/* Colonne Droite */}
//             <div className="space-y-8">
//               <motion.div
//                 whileHover={{ x: 5 }}
//                 className="pl-6 border-l-4 border-[#E67E22]"
//               >
//                 <h3 className="text-2xl font-bold text-[#2C3E50] mb-3">
//                   Connectez-vous à l'Histoire
//                 </h3>
//                 <ul className="space-y-4 text-lg text-[#5D6D7E]">
//                   <li className="flex items-start">
//                     <span className="text-[#E67E22] mr-2">•</span>
//                     <span><strong>Marchez</strong> sur la Route des Esclaves avec notre reconstitution historique AR</span>
//                   </li>
//                   <li className="flex items-start">
//                     <span className="text-[#E67E22] mr-2">•</span>
//                     <span><strong>Rencontrez</strong> les Amazones du Dahomey à travers des hologrammes narratifs</span>
//                   </li>
//                   <li className="flex items-start">
//                     <span className="text-[#E67E22] mr-2">•</span>
//                     <span><strong>Retracez</strong> votre arbre généalogique avec notre outil de recherche ancestrale</span>
//                   </li>
//                 </ul>
//               </motion.div>

//               <motion.div
//                 whileHover={{ x: 5 }}
//                 className="pl-6 border-l-4 border-[#E67E22]"
//               >
//                 <h3 className="text-2xl font-bold text-[#2C3E50] mb-3">
//                   Créez des Souvenirs
//                 </h3>
//                 <ul className="space-y-4 text-lg text-[#5D6D7E]">
//                   <li className="flex items-start">
//                     <span className="text-[#E67E22] mr-2">•</span>
//                     <span><strong>Générez</strong> votre légende personnalisée basée sur votre origine</span>
//                   </li>
//                   <li className="flex items-start">
//                     <span className="text-[#E67E22] mr-2">•</span>
//                     <span><strong>Collectionnez</strong> des NFT culturels uniques lors de vos explorations</span>
//                   </li>
//                   <li className="flex items-start">
//                     <span className="text-[#E67E22] mr-2">•</span>
//                     <span><strong>Partagez</strong> vos découvertes avec notre réseau social dédié</span>
//                   </li>
//                 </ul>
//               </motion.div>
//             </div>
//           </div>

//           <motion.div
//             whileHover={{ scale: 1.02 }}
//             className="text-center mt-16"
//           >
//             <Button className="bg-[#E67E22] hover:bg-[#D35400] text-white text-lg px-8 py-4 shadow-lg">
//               Commencer mon Aventure Culturelle
//             </Button>
//           </motion.div>
//         </div>
//       </section>


//       {/* CTA final */}
//       <section className="py-20 px-4 bg-gradient-to-r from-[#E67E22] to-[#D35400] text-white text-center">
//         <div className="max-w-4xl mx-auto">
//           <motion.h2 className="text-3xl md:text-4xl font-bold mb-6">
//             Prêt à devenir <span className="text-[#2C3E50]">héritier culturel</span> ?
//           </motion.h2>
//           <p className="text-xl  max-w-2xl mx-auto">

//             De Cotonou à Paris, ta culture ne prend pas de visa.</p>
//           <p className="text-xl mb-8 max-w-2xl mx-auto">
//             Téléchargez l'app et transformez votre curiosité en engagement culturel profond
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <Button className="bg-[#2C3E50] hover:bg-[#1A252F] text-white text-lg px-8 py-6">
//               <img src="/assets/app-store.svg" alt="App Store" className="h-8" />
//             </Button>
//             <Button className="bg-[#2C3E50] hover:bg-[#1A252F] text-white text-lg px-8 py-6">
//               <img src="/assets/google-play.svg" alt="Google Play" className="h-8" />
//             </Button>
//           </div>
//         </div>
//       </section>

//     </div>
//   );
// }







// ===============================================================================================================================================================================================================================================================================
// TOP 1 :  deuxieme version marche************************************************************
// ===============================================================================================================================================================================================================================================================================

"use client";
import React from 'react';
import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import HeroCarousel from "@/components/carousel";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Link from "next/link";
import LoadingSpinner from "@/components/loadingSpinner";
import { useState } from "react";

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [navigatingTo, setNavigatingTo] = useState<string | null>(null);

  const handleNavigation = () => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 5000);
  };

  const popularThemes = [
    {
      id: "tourisme",
      title: "Tourisme",
      description: "Explorez le Bénin et ses attractions touristiques",
      image: "https://picsum.photos/id/1018/400/300",
      slug: "/tourisme"
    },
    {
      id: "ethnie",
      title: "Ethnies",
      description: "Découvrez les groupes ethniques du Bénin",
      image: "https://picsum.photos/id/1015/400/300",
      slug: "/ethnies"
    },
    {
      id: "spirituality",
      title: "Spiritualité",
      description: "Le panthéon vodun, ses divinités et rites sacrés",
      image: "https://picsum.photos/id/1019/400/300",
      slug: "/spiritualite"
    },
    {
      id: "craftsmanship",
      title: "Artisanat",
      description: "Découvrez les chef-d'oeuvres de l'artisanat béninois",
      image: "https://picsum.photos/id/1016/400/300",
      slug: "/artisanat"
    },
    {
      id: "gastronomy",
      title: "Gastronomie",
      description: "Nos saveurs et plats traditionnels à découvrir",
      image: "https://picsum.photos/id/1020/400/300",
      slug: "/gastronomie"
    },
    {
      id: "royalties",
      title: "Royautés",
      description: "Palais et royaumes ancestraux à visiter",
      image: "https://picsum.photos/id/1021/400/300",
      slug: "/royaumes"
    },
  ];

  return (
    <div className="min-h-screen bg-white overflow-x-hidden font-sans">
      {/* Header */}
      <section className="relative h-screen flex items-center justify-center text-center px-4 overflow-hidden bg-black">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div className="absolute inset-0 w-full h-full">
          <img
            src="https://picsum.photos/id/1012/1920/1080"
            alt="Paysage Bénin"
            className="w-full h-full object-cover"
          />
        </div>
        <motion.div
          className="relative z-20 max-w-4xl mx-auto text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight">
            Découvrez le <span className="text-[#E67E22]">Bénin</span> comme jamais
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-8 text-white/90">
            Explorez une culture riche, un patrimoine vivant et des paysages uniques.
          </p>
          <Button className="bg-[#E67E22] hover:bg-[#D35400] text-white text-lg px-8 py-6 gap-2 shadow-lg hover:shadow-xl transition-shadow">
            Explorer maintenant
            <ArrowRight className="h-5 w-5 ml-2" />
          </Button>
        </motion.div>
      </section>

      {/* Thèmes Carousel */}
      <section className="mb-20 mt-12 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-3xl font-bold text-center mb-10 text-gray-800"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Parcourir par thématiques
          </motion.h2>
          {navigatingTo && <LoadingSpinner />}
          <Carousel className="w-full relative">
            <CarouselContent className="-ml-4">
              {popularThemes.map((theme, index) => (
                <CarouselItem key={theme.id} className="pl-4 basis-1/2 md:basis-1/3 lg:basis-1/4">
                  <motion.div
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 10px 20px rgba(0,0,0,0.1)"
                    }}
                    className="block bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 cursor-pointer hover:shadow-md transition-all"
                  >
                    <Link href={theme.slug} passHref legacyBehavior>
                      <a onClick={() => setNavigatingTo(theme.id)}>
                        <div className="relative h-40 overflow-hidden">
                          <img
                            src={theme.image}
                            alt={theme.title}
                            className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-300"
                            loading="lazy"
                          />
                        </div>
                        <div className="p-4">
                          <h3 className="font-semibold text-lg text-gray-800">{theme.title}</h3>
                          <p className="text-sm text-gray-600 mt-1">{theme.description}</p>
                        </div>
                      </a>
                    </Link>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-0 bg-white/80 backdrop-blur-sm text-gray-800 hover:bg-white" />
            <CarouselNext className="right-0 bg-white/80 backdrop-blur-sm text-gray-800 hover:bg-white" />
          </Carousel>
        </div>
      </section>

      {/* Engagements Culturels */}
      <section className="py-16 bg-[#FEF5E7] px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-[#2C3E50] mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Nos Engagements Culturels
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Expertise Locale",
                description: "Une équipe 100% béninoise pour une immersion authentique",
                icon: "🌍"
              },
              {
                title: "Accessibilité",
                description: "Technologies adaptées à tous les publics",
                icon: "👐"
              },
              {
                title: "Patrimoine Préservé",
                description: "Contenus validés par des historiens et chefs traditionnels",
                icon: "🏛️"
              },
              {
                title: "Innovation",
                description: "Médiation culturelle par les nouvelles technologies",
                icon: "💡"
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-xl shadow-sm border border-[#E67E22]/20 text-center"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-[#2C3E50] mb-2">{item.title}</h3>
                <p className="text-[#7F8C8D]">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Créer son histoire */}
      <section className="py-20 px-4 bg-[#2C3E50] text-white text-center">
        <div className="max-w-3xl mx-auto">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Crée ta propre <span className="text-[#E67E22]">histoire</span>
          </motion.h2>
          <p className="text-xl text-[#BDC3C7] mb-8">
            Entrez votre nom et votre origine pour générer une histoire inspirée des épopées béninoises
          </p>
          <Button className="bg-[#E67E22] hover:bg-[#D35400] text-white text-lg px-8 py-4 shadow-lg hover:shadow-xl transition-all">
            Créer mon histoire
          </Button>
        </div>
      </section>

      {/* Circuits Touristiques */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-[#2C3E50] mb-4 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Nos Circuits Exclusifs
          </motion.h2>
          <p className="text-xl text-[#7F8C8D] max-w-2xl mx-auto mb-12 text-center">
            Découvrez le Bénin à travers des expériences authentiques sélectionnées par nos guides partenaires
          </p>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                title: "Anciens Royaumes et Chefferies",
                type: "Culture",
                duration: "14 jours",
                price: "1500€",
                image: "https://picsum.photos/id/1018/400/300"
              },
              {
                title: "La Route des Émotions",
                type: "Minorités Ethniques",
                duration: "12 jours",
                price: "1300€",
                image: "https://picsum.photos/id/1019/400/300"
              },
              {
                title: "Nature, Culture et Traditions",
                type: "Multi-pays",
                duration: "15 jours",
                price: "1200€",
                image: "https://picsum.photos/id/1020/400/300"
              }
            ].map((circuit, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-xl transition-all"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={circuit.image}
                    alt={circuit.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-sm font-semibold text-[#E67E22]">
                      {circuit.type}
                    </span>
                    <span className="text-xs text-gray-500">
                      {circuit.duration} · BÉNIN
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-[#2C3E50] mb-3">
                    {circuit.title}
                  </h3>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-[#E67E22]">
                      À partir de {circuit.price}
                    </span>
                    <Button variant="outline" className="border-[#E67E22] text-[#E67E22] hover:bg-[#E67E22]/10">
                      Voir
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center">
            <Button className="bg-[#E67E22] hover:bg-[#D35400] text-white px-8 py-4 text-lg">
              Découvrir plus de circuits
            </Button>
          </div>
        </div>
      </section>

      {/* Expériences Immersives */}
      <section className="py-20 px-4 bg-gradient-to-b from-[#FEF5E7] to-white">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-[#2C3E50] mb-4 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Votre Expérience Culturelle Unique
          </motion.h2>
          <p className="text-xl text-[#7F8C8D] max-w-3xl mx-auto mb-12 text-center">
            Transformez votre smartphone en passeport interactif pour vivre le Bénin comme jamais auparavant
          </p>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              {[
                {
                  title: "Explorer les Trésors Cachés",
                  points: [
                    "Déverrouillez les secrets des royaumes dahoméens grâce à notre carte interactive",
                    "Parcourez les marchés artisanaux avec nos guides audio géolocalisés",
                    "Décryptez les symboles Adinkra avec notre outil de reconnaissance d'image"
                  ]
                },
                {
                  title: "Vivre les Traditions",
                  points: [
                    "Participez virtuellement à des cérémonies vodun avec nos expériences 360°",
                    "Apprenez à préparer le délicieux Ayimolou avec nos chefs en vidéo live",
                    "Écoutez les contes ancestrals racontés par les griots de votre région"
                  ]
                }
              ].map((section, i) => (
                <motion.div
                  key={i}
                  whileHover={{ x: 5 }}
                  className="pl-6 border-l-4 border-[#E67E22]"
                >
                  <h3 className="text-2xl font-bold text-[#2C3E50] mb-3">
                    {section.title}
                  </h3>
                  <ul className="space-y-4 text-lg text-[#5D6D7E]">
                    {section.points.map((point, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-[#E67E22] mr-2">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
            <div className="space-y-8">
              {[
                {
                  title: "Connectez-vous à l'Histoire",
                  points: [
                    "Marchez sur la Route des Esclaves avec notre reconstitution historique AR",
                    "Rencontrez les Amazones du Dahomey à travers des hologrammes narratifs",
                    "Retracez votre arbre généalogique avec notre outil de recherche ancestrale"
                  ]
                },
                {
                  title: "Créez des Souvenirs",
                  points: [
                    "Générez votre légende personnalisée basée sur votre origine",
                    "Collectionnez des NFT culturels uniques lors de vos explorations",
                    "Partagez vos découvertes avec notre réseau social dédié"
                  ]
                }
              ].map((section, i) => (
                <motion.div
                  key={i}
                  whileHover={{ x: 5 }}
                  className="pl-6 border-l-4 border-[#E67E22]"
                >
                  <h3 className="text-2xl font-bold text-[#2C3E50] mb-3">
                    {section.title}
                  </h3>
                  <ul className="space-y-4 text-lg text-[#5D6D7E]">
                    {section.points.map((point, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-[#E67E22] mr-2">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="text-center mt-16"
          >
            <Button className="bg-[#E67E22] hover:bg-[#D35400] text-white text-lg px-8 py-4 shadow-lg">
              Commencer mon Aventure Culturelle
            </Button>
          </motion.div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 px-4 bg-gradient-to-r from-[#E67E22] to-[#D35400] text-white text-center">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Prêt à devenir <span className="text-[#2C3E50]">héritier culturel</span> ?
          </motion.h2>
          <p className="text-xl mb-4 max-w-2xl mx-auto">
            De Cotonou à Paris, ta culture ne prend pas de visa.
          </p>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Téléchargez l'app et transformez votre curiosité en engagement culturel profond
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-[#2C3E50] hover:bg-[#1A252F] text-white text-lg px-8 py-6 flex items-center gap-2">
              <img src="/assets/app-store.svg" alt="App Store" className="h-8" /> App Store
            </Button>
            <Button className="bg-[#2C3E50] hover:bg-[#1A252F] text-white text-lg px-8 py-6 flex items-center gap-2">
              <img src="/assets/google-play.svg" alt="Google Play" className="h-8" /> Google Play
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}









// ===============================================================================================================================================================================================================================================================================
// troisieme version pas fini************************************************************
// ===============================================================================================================================================================================================================================================================================
// "use client";
// import React, { useState, useEffect } from 'react';
// import { motion } from "framer-motion";
// import { ArrowRight, Play, ChevronRight, MapPin, Star, Calendar, Info, ChevronDown, Menu, X, Instagram, Facebook, Twitter } from "lucide-react";

// // Animation variants
// const fadeIn = {
//   initial: { opacity: 0, y: 20 },
//   animate: { opacity: 1, y: 0, transition: { duration: 0.6 } }
// };

// export default function Home() {
//   const [isLoading, setIsLoading] = useState(false);
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [videoModal, setVideoModal] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 50) {
//         setScrolled(true);
//       } else {
//         setScrolled(false);
//       }
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const handleNavigation = () => {
//     setIsLoading(true);
//     // Simulate navigation
//     setTimeout(() => setIsLoading(false), 1000);
//   };

//   const popularThemes = [
//     {
//       id: "tourisme",
//       title: "Tourisme",
//       description: "Explorez le Bénin et ses attractions touristiques",
//       image: "/api/placeholder/400/320",
//       slug: "/tourisme",
//       count: "24 lieux"
//     },
//     {
//       id: "ethnie",
//       title: "Ethnies",
//       description: "Découvrez les groupes ethniques du Bénin",
//       image: "/api/placeholder/400/320",
//       slug: "/ethnies",
//       count: "42 groupes"
//     },
//     {
//       id: "spirituality",
//       title: "Spiritualité",
//       description: "Le panthéon vodun, ses divinités et rites sacrés",
//       image: "/api/placeholder/400/320",
//       slug: "/spiritualite",
//       count: "18 pratiques"
//     },
//     {
//       id: "craftsmanship",
//       title: "Artisanat",
//       description: "Découvrez les chef-d'oeuvres de l'artisanat béninois",
//       image: "/api/placeholder/400/320",
//       slug: "/artisanat",
//       count: "35 métiers"
//     }
//   ];
  
//   const testimonials = [
//     {
//       id: 1,
//       name: "Marie Dupont",
//       origin: "Paris, France",
//       content: "J'ai découvert une culture fascinante que je ne connaissais pas. Les guides audio m'ont permis d'approfondir chaque visite.",
//       avatar: "/api/placeholder/64/64",
//       rating: 5
//     },
//     {
//       id: 2,
//       name: "John Smith",
//       origin: "New York, USA",
//       content: "Cette application a transformé mon séjour au Bénin en une véritable aventure culturelle. Je recommande vivement!",
//       avatar: "/api/placeholder/64/64",
//       rating: 5
//     },
//     {
//       id: 3,
//       name: "Kofi Addo",
//       origin: "Accra, Ghana",
//       content: "Même pour un Africain comme moi, j'ai appris énormément sur nos voisins béninois. Contenu riche et authentique.",
//       avatar: "/api/placeholder/64/64",
//       rating: 4
//     }
//   ];
  
//   const experiences = [
//     {
//       id: "exp1",
//       title: "Route des Esclaves",
//       description: "Parcourez ce chemin historique avec une narration immersive",
//       image: "/api/placeholder/400/250",
//       category: "Histoire",
//       rating: 4.8,
//       reviews: 125
//     },
//     {
//       id: "exp2",
//       title: "Cérémonies Vodun",
//       description: "Assistez virtuellement aux rituels sacrés",
//       image: "/api/placeholder/400/250",
//       category: "Spiritualité",
//       rating: 4.9,
//       reviews: 89
//     },
//     {
//       id: "exp3",
//       title: "Amazones du Dahomey",
//       description: "Découvrez l'histoire de ces guerrières légendaires",
//       image: "/api/placeholder/400/250",
//       category: "Culture",
//       rating: 4.7,
//       reviews: 112
//     }
//   ];
  
//   const articles = [
//     {
//       id: "blog1",
//       title: "Les royaumes précoloniaux du Bénin: un héritage puissant",
//       excerpt: "Plongez dans l'histoire fascinante des royaumes qui ont façonné le Bénin d'aujourd'hui.",
//       image: "/api/placeholder/400/250",
//       date: "05 Mai 2025",
//       category: "Histoire"
//     },
//     {
//       id: "blog2",
//       title: "Le Festival Vodun: entre tradition et modernité",
//       excerpt: "Comment cette célébration ancestrale évolue tout en préservant son essence spirituelle.",
//       image: "/api/placeholder/400/250",
//       date: "28 Avril 2025",
//       category: "Culture"
//     },
//     {
//       id: "blog3",
//       title: "Gastronomie béninoise: saveurs et techniques",
//       excerpt: "Les secrets culinaires transmis de génération en génération.",
//       image: "/api/placeholder/400/250",
//       date: "15 Avril 2025",
//       category: "Gastronomie"
//     }
//   ];

//   return (
//     <div className="min-h-screen bg-stone-50 font-sans">
//       {/* Navbar */}
      

//       {/* Hero Section with Video Background */}
//       <section className="relative h-screen flex items-center justify-center overflow-hidden">
//         <div className="absolute inset-0 bg-black/40 z-10" />
//         <div className="absolute inset-0">
//           <img
//             src="/api/placeholder/1920/1080"
//             alt="Bénin Culture"
//             className="w-full h-full object-cover"
//           />
//         </div>
        
//         <motion.div
//           className="relative z-20 max-w-4xl mx-auto text-center text-white px-4"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
//             Découvrez le <span className="text-amber-500">Bénin</span> Authentique
//           </h1>
//           <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto">
//             Une immersion virtuelle dans l'âme du Bénin: culture, histoire et traditions
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-full flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all text-lg font-medium">
//               Explorer maintenant
//               <ArrowRight className="h-5 w-5" />
//             </button>
//             <button 
//               onClick={() => setVideoModal(true)}
//               className="bg-transparent border-2 border-white hover:bg-white/20 text-white px-8 py-4 rounded-full flex items-center justify-center gap-2 transition-all text-lg font-medium"
//             >
//               Regarder la vidéo
//               <Play className="h-5 w-5" />
//             </button>
//           </div>
          
//           <div className="absolute bottom-8 left-0 right-0 flex justify-center">
//             <motion.div
//               animate={{ y: [0, 10, 0] }}
//               transition={{ repeat: Infinity, duration: 1.5 }}
//             >
//               <ChevronDown className="h-8 w-8 text-white" />
//             </motion.div>
//           </div>
//         </motion.div>
        
//         {/* Video Modal */}
//         {videoModal && (
//           <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
//             <div className="relative bg-black w-full max-w-4xl rounded-lg overflow-hidden">
//               <button 
//                 onClick={() => setVideoModal(false)}
//                 className="absolute top-4 right-4 bg-white/20 hover:bg-white/40 rounded-full p-1 transition-all"
//               >
//                 <X className="h-6 w-6 text-white" />
//               </button>
//               <div className="aspect-video bg-slate-800 flex items-center justify-center">
//                 <Play className="h-16 w-16 text-white/50" />
//               </div>
//             </div>
//           </div>
//         )}
//       </section>

//       {/* Thématiques avec design en grille */}
//       <section className="py-20 px-4 bg-white">
//         <div className="max-w-7xl mx-auto">
//           <motion.div 
//             className="text-center mb-16"
//             variants={fadeIn}
//             initial="initial"
//             whileInView="animate"
//             viewport={{ once: true }}
//           >
//             <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
//               Explorez par thématiques
//             </h2>
//             <p className="text-lg text-slate-600 max-w-2xl mx-auto">
//               Plongez dans les différentes facettes de la culture béninoise et découvrez ses richesses infinies
//             </p>
//           </motion.div>
          
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//             {popularThemes.map((theme, index) => (
//               <motion.div
//                 key={theme.id}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: index * 0.1 }}
//                 whileHover={{ y: -8, transition: { duration: 0.3 } }}
//                 className="group relative overflow-hidden rounded-2xl shadow-md cursor-pointer"
//               >
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
//                 <img
//                   src={theme.image}
//                   alt={theme.title}
//                   className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
//                 />
//                 <div className="absolute bottom-0 left-0 right-0 p-6 z-20 text-white">
//                   <div className="text-amber-400 text-sm font-medium mb-1">
//                     {theme.count}
//                   </div>
//                   <h3 className="text-2xl font-bold mb-2">{theme.title}</h3>
//                   <p className="text-white/80 mb-4 line-clamp-2">{theme.description}</p>
//                   <div className="flex items-center gap-2 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
//                     Découvrir
//                     <ArrowRight className="h-4 w-4" />
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
          
//           <div className="mt-12 text-center">
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               className="inline-flex items-center text-amber-600 hover:text-amber-800 font-medium"
//             >
//               Voir toutes les thématiques
//               <ChevronRight className="h-5 w-5 ml-1" />
//             </motion.button>
//           </div>
//         </div>
//       </section>
      
//       {/* Expériences Section */}
//       <section className="py-20 px-4 bg-stone-50">
//         <div className="max-w-7xl mx-auto">
//           <motion.div 
//             className="flex flex-col md:flex-row md:items-end justify-between mb-12"
//             variants={fadeIn}
//             initial="initial"
//             whileInView="animate"
//             viewport={{ once: true }}
//           >
//             <div>
//               <span className="text-amber-600 font-medium">Immersion Culturelle</span>
//               <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mt-2">
//                 Expériences Exclusives
//               </h2>
//               <p className="text-lg text-slate-600 mt-4 max-w-2xl">
//                 Vivez la culture béninoise à travers des expériences immersives soigneusement conçues
//               </p>
//             </div>
//             <button className="mt-6 md:mt-0 bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-full inline-flex items-center gap-2 self-start md:self-auto">
//               Toutes les expériences
//               <ArrowRight className="h-4 w-4" />
//             </button>
//           </motion.div>
          
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {experiences.map((exp, index) => (
//               <motion.div
//                 key={exp.id}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: index * 0.1 }}
//                 whileHover={{ y: -8 }}
//                 className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all"
//               >
//                 <div className="relative">
//                   <img 
//                     src={exp.image} 
//                     alt={exp.title}
//                     className="w-full h-48 object-cover"
//                   />
//                   <div className="absolute top-4 left-4 bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full">
//                     {exp.category}
//                   </div>
//                 </div>
//                 <div className="p-6">
//                   <h3 className="text-xl font-bold text-slate-800 mb-2">{exp.title}</h3>
//                   <p className="text-slate-600 mb-4">{exp.description}</p>
//                   <div className="flex items-center justify-between">
//                     <div className="flex items-center gap-1">
//                       <Star className="h-4 w-4 text-amber-500 fill-amber-500" />
//                       <span className="text-slate-700 font-medium">{exp.rating}</span>
//                       <span className="text-slate-500 text-sm">({exp.reviews})</span>
//                     </div>
//                     <button className="text-amber-600 hover:text-amber-800 font-medium flex items-center gap-1">
//                       Découvrir
//                       <ChevronRight className="h-4 w-4" />
//                     </button>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>
      
//       {/* Section Créer son histoire - Interactive */}
//       <section className="py-20 px-4 bg-slate-900 text-white">
//         <div className="max-w-7xl mx-auto">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
//             <motion.div
//               variants={fadeIn}
//               initial="initial"
//               whileInView="animate"
//               viewport={{ once: true }}
//             >
//               <span className="text-amber-500 font-medium">Personnalisez votre expérience</span>
//               <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">
//                 Créez votre propre <span className="text-amber-500">histoire béninoise</span>
//               </h2>
//               <p className="text-lg text-white/80 mb-8">
//                 Notre générateur d'histoires s'inspire de votre identité pour créer un récit personnalisé qui vous connecte aux traditions béninoises. Une aventure narrative unique qui relie votre histoire à celle du Bénin.
//               </p>
              
//               <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 mb-8">
//                 <div className="space-y-6">
//                   <div>
//                     <label className="block text-sm font-medium text-slate-300 mb-2">Votre nom</label>
//                     <input 
//                       type="text" 
//                       placeholder="Entrez votre nom"
//                       className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-amber-500 focus:border-transparent"
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium text-slate-300 mb-2">Votre origine</label>
//                     <input 
//                       type="text" 
//                       placeholder="Pays ou région d'origine"
//                       className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-amber-500 focus:border-transparent"
//                     />
//                   </div>
//                   <button className="w-full bg-amber-600 hover:bg-amber-700 text-white font-medium py-3 rounded-lg transition-colors flex items-center justify-center gap-2">
//                     Générer mon histoire
//                     <ArrowRight className="h-5 w-5" />
//                   </button>
//                 </div>
//               </div>
//             </motion.div>
            
//             <motion.div
//               initial={{ opacity: 0, x: 20 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: 0.3 }}
//               className="relative"
//             >
//               <div className="aspect-[3/4] md:aspect-[4/5] relative z-10 bg-slate-800 rounded-xl overflow-hidden shadow-xl rotate-1">
//                 <img 
//                   src="/api/placeholder/500/600" 
//                   alt="Histoire personnalisée"
//                   className="w-full h-full object-cover"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
//                   <span className="text-amber-500 text-sm font-medium">Histoire générée</span>
//                   <h3 className="text-2xl font-bold mt-2 mb-3">Le voyage d'Adama</h3>
//                   <p className="text-white/80 text-sm">
//                     Un récit inspiré par les traditions Fon qui lie votre héritage personnel aux mythes ancestraux du Bénin...
//                   </p>
//                 </div>
//               </div>
//               <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-amber-500/20 rounded-full blur-xl z-0" />
//               <div className="absolute -top-6 -right-6 w-32 h-32 bg-amber-600/20 rounded-full blur-xl z-0" />
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* Témoignages */}
//       <section className="py-20 px-4 bg-white relative overflow-hidden">
//         <div className="max-w-7xl mx-auto relative z-10">
//           <motion.div 
//             className="text-center mb-16"
//             variants={fadeIn}
//             initial="initial"
//             whileInView="animate"
//             viewport={{ once: true }}
//           >
//             <span className="text-amber-600 font-medium">Témoignages</span>
//             <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mt-2 mb-4">
//               Ce que nos utilisateurs disent
//             </h2>
//             <p className="text-lg text-slate-600 max-w-2xl mx-auto">
//               Découvrez comment BeninCulture a transformé l'expérience de nos utilisateurs
//             </p>
//           </motion.div>
          
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {testimonials.map((testimonial, index) => (
//               <motion.div
//                 key={testimonial.id}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: index * 0.1 }}
//                 className="bg-stone-50 p-6 rounded-xl shadow-sm border border-stone-100"
//               >
//                 <div className="flex items-center gap-2 mb-4">
//                   {[...Array(5)].map((_, i) => (
//                     <Star 
//                       key={i} 
//                       className={`h-4 w-4 ${i < testimonial.rating ? 'text-amber-500 fill-amber-500' : 'text-gray-300'}`}
//                     />
//                   ))}
//                 </div>
//                 <p className="text-slate-700 mb-6 italic">"{testimonial.content}"</p>
//                 <div className="flex items-center gap-4">
//                   <img 
//                     src={testimonial.avatar} 
//                     alt={testimonial.name}
//                     className="w-12 h-12 rounded-full object-cover"
//                   />
//                   <div>
//                     <h4 className="font-bold text-slate-800">{testimonial.name}</h4>
//                     <span className="text-sm text-slate-500">{testimonial.origin}</span>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
        
//         {/* Background decorations */}
//         <div className="absolute top-0 right-0 w-96 h-96 bg-amber-100 rounded-full opacity-30 -translate-y-1/2 translate-x-1/3 blur-3xl" />
//         <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-200 rounded-full opacity-30 translate-y-1/2 -translate-x-1/3 blur-3xl" />
//       </section>
      
//       {/* Blog Section */}
//       <section className="py-20 px-4 bg-stone-50">
//         <div className="max-w-7xl mx-auto">
//           <motion.div 
//             className="flex flex-col md:flex-row md:items-end justify-between mb-12"
//             variants={fadeIn}
//             initial="initial"
//             whileInView="animate"
//             viewport={{ once: true }}
//           >
//             <div>
//               <span className="text-amber-600 font-medium">Notre Blog</span>
//               <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mt-2">
//                 Articles & Actualités
//               </h2>
//               <p className="text-lg text-slate-600 mt-4 max-w-2xl">
//                 Restez informé sur la culture béninoise et nos dernières découvertes
//               </p>
//             </div>
//             <button className="mt-6 md:mt-0 text-amber-600 hover:text-amber-800 font-medium inline-flex items-center gap-2 self-start md:self-auto">
//               Tous les articles
//               <ArrowRight className="h-4 w-4" />
//             </button>
//           </motion.div>
          
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {articles.map((article, index) => (
//               <motion.div
//                 key={article.id}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: index * 0.1 }}
//                 whileHover={{ y: -8 }}
//                 className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all"
//               >
//                 <div className="relative">
//                   <img 
//                     src={article.image} 
//                     alt={article.title}
//                     className="w-full h-48 object-cover"
//                   />
//                   <div className="absolute top-4 left-4 bg-white/90 text-amber-600 text-xs font-bold px-3 py-1 rounded-full">
//                     {article.category}
//                   </div>
//                 </div>
//                 <div className="p-6">
//                   <div className="flex items-center text-sm text-slate-500 mb-3">
//                     <Calendar className="h-4 w-4 mr-2" />
//                     {article.date}
//                   </div>
//                   <h3 className="text-xl font-bold text-slate-800 mb-2 line-clamp-2">{article.title}</h3>
//                   <p className="text-slate-600 mb-4 line-clamp-2">{article.excerpt}</p>
//                   <button className="text-amber-600 hover:text-amber-800 font-medium flex items-center gap-1">
//                     Lire l'article
//                     <ChevronRight className="h-4 w-4" />
//                   </button>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>
//       </div>
//   );
// }
      