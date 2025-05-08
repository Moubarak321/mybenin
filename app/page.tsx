
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
//     setTimeout(() => setIsLoading(false), 5000);
//   };

//   const popularThemes = [
//     {
//       id: "tourisme",
//       title: "Tourisme",
//       description: "Explorez le Bénin et ses attractions touristiques",
//       image: "https://picsum.photos/id/1018/400/300",
//       slug: "/tourisme"
//     },
//     {
//       id: "ethnie",
//       title: "Ethnies",
//       description: "Découvrez les groupes ethniques du Bénin",
//       image: "https://picsum.photos/id/1015/400/300",
//       slug: "/ethnies"
//     },
//     {
//       id: "spirituality",
//       title: "Spiritualité",
//       description: "Le panthéon vodun, ses divinités et rites sacrés",
//       image: "https://picsum.photos/id/1019/400/300",
//       slug: "/spiritualite"
//     },
//     {
//       id: "craftsmanship",
//       title: "Artisanat",
//       description: "Découvrez les chef-d'oeuvres de l'artisanat béninois",
//       image: "https://picsum.photos/id/1016/400/300",
//       slug: "/artisanat"
//     },
//     {
//       id: "gastronomy",
//       title: "Gastronomie",
//       description: "Nos saveurs et plats traditionnels à découvrir",
//       image: "https://picsum.photos/id/1020/400/300",
//       slug: "/gastronomie"
//     },
//     {
//       id: "royalties",
//       title: "Royautés",
//       description: "Palais et royaumes ancestraux à visiter",
//       image: "https://picsum.photos/id/1021/400/300",
//       slug: "/royaumes"
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-white overflow-x-hidden font-sans">
//       {/* Header */}
//       <section className="relative h-screen flex items-center justify-center text-center px-4 overflow-hidden bg-black">
//         <div className="absolute inset-0 bg-black/50 z-10" />
//         <div className="absolute inset-0 w-full h-full">
//           <img
//             src="https://picsum.photos/id/1012/1920/1080"
//             alt="Paysage Bénin"
//             className="w-full h-full object-cover"
//           />
//         </div>
//         <motion.div
//           className="relative z-20 max-w-4xl mx-auto text-white"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight">
//             Découvrez le <span className="text-[#E67E22]">Bénin</span> comme jamais
//           </h1>
//           <p className="text-lg md:text-xl lg:text-2xl mb-8 text-white/90">
//             Explorez une culture riche, un patrimoine vivant et des paysages uniques.
//           </p>
//           <Button className="bg-[#E67E22] hover:bg-[#D35400] text-white text-lg px-8 py-6 gap-2 shadow-lg hover:shadow-xl transition-shadow">
//             Explorer maintenant
//             <ArrowRight className="h-5 w-5 ml-2" />
//           </Button>
//         </motion.div>
//       </section>

//       {/* Thèmes Carousel */}
//       <section className="mb-20 mt-12 px-4">
//         <div className="max-w-6xl mx-auto">
//           <motion.h2
//             className="text-3xl font-bold text-center mb-10 text-gray-800"
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//           >
//             Parcourir par thématiques
//           </motion.h2>
//           {navigatingTo && <LoadingSpinner />}
//           <Carousel className="w-full relative">
//             <CarouselContent className="-ml-4">
//               {popularThemes.map((theme, index) => (
//                 <CarouselItem key={theme.id} className="pl-4 basis-1/2 md:basis-1/3 lg:basis-1/4">
//                   <motion.div
//                     whileHover={{
//                       scale: 1.05,
//                       boxShadow: "0 10px 20px rgba(0,0,0,0.1)"
//                     }}
//                     className="block bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 cursor-pointer hover:shadow-md transition-all"
//                   >
//                     <Link href={theme.slug} passHref legacyBehavior>
//                       <a onClick={() => setNavigatingTo(theme.id)}>
//                         <div className="relative h-40 overflow-hidden">
//                           <img
//                             src={theme.image}
//                             alt={theme.title}
//                             className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-300"
//                             loading="lazy"
//                           />
//                         </div>
//                         <div className="p-4">
//                           <h3 className="font-semibold text-lg text-gray-800">{theme.title}</h3>
//                           <p className="text-sm text-gray-600 mt-1">{theme.description}</p>
//                         </div>
//                       </a>
//                     </Link>
//                   </motion.div>
//                 </CarouselItem>
//               ))}
//             </CarouselContent>
//             <CarouselPrevious className="left-0 bg-white/80 backdrop-blur-sm text-gray-800 hover:bg-white" />
//             <CarouselNext className="right-0 bg-white/80 backdrop-blur-sm text-gray-800 hover:bg-white" />
//           </Carousel>
//         </div>
//       </section>

//       {/* Engagements Culturels */}
//       <section className="py-16 bg-[#FEF5E7] px-4">
//         <div className="max-w-6xl mx-auto">
//           <motion.h2
//             className="text-3xl md:text-4xl font-bold text-[#2C3E50] mb-12 text-center"
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//           >
//             Nos Engagements Culturels
//           </motion.h2>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//             {[
//               {
//                 title: "Expertise Locale",
//                 description: "Une équipe 100% béninoise pour une immersion authentique",
//                 icon: "🌍"
//               },
//               {
//                 title: "Accessibilité",
//                 description: "Technologies adaptées à tous les publics",
//                 icon: "👐"
//               },
//               {
//                 title: "Patrimoine Préservé",
//                 description: "Contenus validés par des historiens et chefs traditionnels",
//                 icon: "🏛️"
//               },
//               {
//                 title: "Innovation",
//                 description: "Médiation culturelle par les nouvelles technologies",
//                 icon: "💡"
//               }
//             ].map((item, i) => (
//               <motion.div
//                 key={i}
//                 whileHover={{ y: -5 }}
//                 className="bg-white p-6 rounded-xl shadow-sm border border-[#E67E22]/20 text-center"
//               >
//                 <div className="text-4xl mb-4">{item.icon}</div>
//                 <h3 className="text-xl font-bold text-[#2C3E50] mb-2">{item.title}</h3>
//                 <p className="text-[#7F8C8D]">{item.description}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Créer son histoire */}
//       <section className="py-20 px-4 bg-[#2C3E50] text-white text-center">
//         <div className="max-w-3xl mx-auto">
//           <motion.h2
//             className="text-3xl md:text-4xl font-bold mb-4"
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//           >
//             Crée ta propre <span className="text-[#E67E22]">histoire</span>
//           </motion.h2>
//           <p className="text-xl text-[#BDC3C7] mb-8">
//             Entrez votre nom et votre origine pour générer une histoire inspirée des épopées béninoises
//           </p>
//           <Button className="bg-[#E67E22] hover:bg-[#D35400] text-white text-lg px-8 py-4 shadow-lg hover:shadow-xl transition-all">
//             Créer mon histoire
//           </Button>
//         </div>
//       </section>

//       {/* Circuits Touristiques */}
//       <section className="py-20 px-4 bg-white">
//         <div className="max-w-6xl mx-auto">
//           <motion.h2
//             className="text-3xl md:text-4xl font-bold text-[#2C3E50] mb-4 text-center"
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//           >
//             Nos Circuits Exclusifs
//           </motion.h2>
//           <p className="text-xl text-[#7F8C8D] max-w-2xl mx-auto mb-12 text-center">
//             Découvrez le Bénin à travers des expériences authentiques sélectionnées par nos guides partenaires
//           </p>
//           <div className="grid md:grid-cols-3 gap-8 mb-12">
//             {[
//               {
//                 title: "Anciens Royaumes et Chefferies",
//                 type: "Culture",
//                 duration: "14 jours",
//                 price: "1500€",
//                 image: "https://picsum.photos/id/1018/400/300"
//               },
//               {
//                 title: "La Route des Émotions",
//                 type: "Minorités Ethniques",
//                 duration: "12 jours",
//                 price: "1300€",
//                 image: "https://picsum.photos/id/1019/400/300"
//               },
//               {
//                 title: "Nature, Culture et Traditions",
//                 type: "Multi-pays",
//                 duration: "15 jours",
//                 price: "1200€",
//                 image: "https://picsum.photos/id/1020/400/300"
//               }
//             ].map((circuit, index) => (
//               <motion.div
//                 key={index}
//                 whileHover={{ y: -10 }}
//                 className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-xl transition-all"
//               >
//                 <div className="h-48 overflow-hidden">
//                   <img
//                     src={circuit.image}
//                     alt={circuit.title}
//                     className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
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

//       {/* Expériences Immersives */}
//       <section className="py-20 px-4 bg-gradient-to-b from-[#FEF5E7] to-white">
//         <div className="max-w-6xl mx-auto">
//           <motion.h2
//             className="text-3xl md:text-4xl font-bold text-[#2C3E50] mb-4 text-center"
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             viewport={{ once: true }}
//           >
//             Votre Expérience Culturelle Unique
//           </motion.h2>
//           <p className="text-xl text-[#7F8C8D] max-w-3xl mx-auto mb-12 text-center">
//             Transformez votre smartphone en passeport interactif pour vivre le Bénin comme jamais auparavant
//           </p>
//           <div className="grid md:grid-cols-2 gap-12">
//             <div className="space-y-8">
//               {[
//                 {
//                   title: "Explorer les Trésors Cachés",
//                   points: [
//                     "Déverrouillez les secrets des royaumes dahoméens grâce à notre carte interactive",
//                     "Parcourez les marchés artisanaux avec nos guides audio géolocalisés",
//                     "Décryptez les symboles Adinkra avec notre outil de reconnaissance d'image"
//                   ]
//                 },
//                 {
//                   title: "Vivre les Traditions",
//                   points: [
//                     "Participez virtuellement à des cérémonies vodun avec nos expériences 360°",
//                     "Apprenez à préparer le délicieux Ayimolou avec nos chefs en vidéo live",
//                     "Écoutez les contes ancestrals racontés par les griots de votre région"
//                   ]
//                 }
//               ].map((section, i) => (
//                 <motion.div
//                   key={i}
//                   whileHover={{ x: 5 }}
//                   className="pl-6 border-l-4 border-[#E67E22]"
//                 >
//                   <h3 className="text-2xl font-bold text-[#2C3E50] mb-3">
//                     {section.title}
//                   </h3>
//                   <ul className="space-y-4 text-lg text-[#5D6D7E]">
//                     {section.points.map((point, idx) => (
//                       <li key={idx} className="flex items-start">
//                         <span className="text-[#E67E22] mr-2">•</span>
//                         <span>{point}</span>
//                       </li>
//                     ))}
//                   </ul>
//                 </motion.div>
//               ))}
//             </div>
//             <div className="space-y-8">
//               {[
//                 {
//                   title: "Connectez-vous à l'Histoire",
//                   points: [
//                     "Marchez sur la Route des Esclaves avec notre reconstitution historique AR",
//                     "Rencontrez les Amazones du Dahomey à travers des hologrammes narratifs",
//                     "Retracez votre arbre généalogique avec notre outil de recherche ancestrale"
//                   ]
//                 },
//                 {
//                   title: "Créez des Souvenirs",
//                   points: [
//                     "Générez votre légende personnalisée basée sur votre origine",
//                     "Collectionnez des NFT culturels uniques lors de vos explorations",
//                     "Partagez vos découvertes avec notre réseau social dédié"
//                   ]
//                 }
//               ].map((section, i) => (
//                 <motion.div
//                   key={i}
//                   whileHover={{ x: 5 }}
//                   className="pl-6 border-l-4 border-[#E67E22]"
//                 >
//                   <h3 className="text-2xl font-bold text-[#2C3E50] mb-3">
//                     {section.title}
//                   </h3>
//                   <ul className="space-y-4 text-lg text-[#5D6D7E]">
//                     {section.points.map((point, idx) => (
//                       <li key={idx} className="flex items-start">
//                         <span className="text-[#E67E22] mr-2">•</span>
//                         <span>{point}</span>
//                       </li>
//                     ))}
//                   </ul>
//                 </motion.div>
//               ))}
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

//       {/* CTA Final */}
//       <section className="py-20 px-4 bg-gradient-to-r from-[#E67E22] to-[#D35400] text-white text-center">
//         <div className="max-w-4xl mx-auto">
//           <motion.h2
//             className="text-3xl md:text-4xl font-bold mb-6"
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//           >
//             Prêt à devenir <span className="text-[#2C3E50]">héritier culturel</span> ?
//           </motion.h2>
//           <p className="text-xl mb-4 max-w-2xl mx-auto">
//             De Cotonou à Paris, ta culture ne prend pas de visa.
//           </p>
//           <p className="text-xl mb-8 max-w-2xl mx-auto">
//             Téléchargez l'app et transformez votre curiosité en engagement culturel profond
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <Button className="bg-[#2C3E50] hover:bg-[#1A252F] text-white text-lg px-8 py-6 flex items-center gap-2">
//               <img src="/assets/app-store.svg" alt="App Store" className="h-8" /> App Store
//             </Button>
//             <Button className="bg-[#2C3E50] hover:bg-[#1A252F] text-white text-lg px-8 py-6 flex items-center gap-2">
//               <img src="/assets/google-play.svg" alt="Google Play" className="h-8" /> Google Play
//             </Button>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }









// ===============================================================================================================================================================================================================================================================================
// troisieme version pas fini************************************************************
// ===============================================================================================================================================================================================================================================================================
"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Play, ArrowDown, ChevronRight, MapPin, Calendar, Heart, Star, Menu, X, Instagram, Facebook, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [videoModal, setVideoModal] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrollY, setScrollY] = useState(0);
  const [navigatingTo, setNavigatingTo] = useState<string | null>(null);
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);

      // Update active section based on scroll position
      const sections = document.querySelectorAll('section[id]');
      sections.forEach(section => {
        const sectionTop = (section as HTMLElement).offsetTop - 100;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
          const sectionId = section.getAttribute('id');
          if (sectionId) {
            setActiveSection(sectionId);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const popularThemes = [
    {
      id: "tourisme",
      title: "Tourisme",
      description: "Explorez le Bénin et ses attractions touristiques",
      image: "https://picsum.photos/id/1018/400/300",
      slug: "/tourisme"
    },
    {
      id: "royalties",
      title: "Royautés",
      description: "Palais et royaumes ancestraux à visiter",
      image: "https://picsum.photos/id/1021/400/300",
      slug: "/royaumes"
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

  ];

  const testimonials = [
    {
      name: "Thomas K.",
      origin: "France",
      text: "Une immersion culturelle incroyable. J'ai découvert le Bénin sous un nouvel angle.",
      avatar: "https://picsum.photos/id/1012/100/100"
    },
    {
      name: "Aminata D.",
      origin: "Sénégal",
      text: "Les histoires personnalisées sont fascinantes et m'ont permis de me reconnecter avec mes racines.",
      avatar: "https://picsum.photos/id/1013/100/100"
    },
    {
      name: "Michael J.",
      origin: "USA",
      text: "L'application est une mine d'or d'informations authentiques sur la culture béninoise.",
      avatar: "https://picsum.photos/id/1014/100/100"
    }
  ];

  const upcomingEvents = [
    {
      title: "Festival Vodun",
      date: "10-15 Janvier",
      location: "Ouidah",
      image: "https://picsum.photos/id/1029/400/300"
    },
    {
      title: "Exposition d'Art Contemporain",
      date: "3-28 Mars",
      location: "Cotonou",
      image: "https://picsum.photos/id/1031/400/300"
    },
    {
      title: "Route des Pêches - Gastronomie",
      date: "17-19 Avril",
      location: "Fidjrossè",
      image: "https://picsum.photos/id/1034/400/300"
    }
  ];



  return (
    <div className="min-h-screen bg-stone-50 overflow-x-hidden font-sans">
      {/* Navigation */}


      {/* Hero Section */}
      <section id="home" className="h-screen relative flex items-center justify-center text-center">
        <video
          autoPlay
          muted
          loop
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/60" />

        <motion.div
          className="relative z-10 max-w-4xl mx-auto text-white px-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-6 flex items-center justify-center">
            <span className="px-4 py-1 rounded-full bg-amber-600/20 text-amber-400 text-sm font-medium border border-amber-600/40">
              Vivez l'essence du Bénin
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Redécouvrez vos <span className="text-amber-500">racines</span>
            <br />à travers la culture béninoise
          </h1>
          <p className="text-xl md:text-2xl mb-12 text-white/90 max-w-3xl mx-auto">
            Une expérience immersive qui connecte la diaspora à son héritage culturel
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/#discover">
              <Button className="bg-amber-600 hover:bg-amber-700 text-white text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all gap-2">
                Explorer maintenant
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
            {/* <Button 
              variant="outline" 
              className="border-white text-white hover:bg-white/20 text-lg px-8 py-6 flex items-center gap-2"
              onClick={() => setVideoModal(true)}
            >
              <Play className="h-5 w-5" />
              Voir la vidéo
            </Button> */}
            <Link href="/histoire">
              <Button
                className="border-white text-white hover:bg-white/20 text-lg px-8 py-6 flex items-center gap-2"
              >
                Lire l'histoire du Bénin
              </Button>
            </Link>
          </div>
        </motion.div>

        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white cursor-pointer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          whileHover={{ y: 5 }}
        >
          <a href="#discover" className="flex flex-col items-center">
            <span className="text-sm mb-2">Découvrir plus</span>
            <ArrowDown className="h-5 w-5 animate-bounce" />
          </a>
        </motion.div>
      </section>

      {/* Thèmes Section - New Grid Style */}
      <section id="discover" className="py-24 px-4 bg-stone-50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center">
            <motion.span
              className="inline-block px-4 py-1 rounded-full bg-amber-100 text-amber-800 text-sm font-medium mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              EXPLOREZ À VOTRE RYTHME
            </motion.span>
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Plongez dans la richesse<br />culturelle du <span className="text-amber-600">Bénin</span>
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Chaque thématique vous offre une porte d'entrée unique sur notre patrimoine
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularThemes.map((theme, index) => (
              <motion.div
                key={theme.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer h-80"
              >
                <Link href={theme.slug} className="absolute inset-0">
                  <img
                    src={theme.image}
                    alt={theme.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-opacity" />
                </Link>
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <h3 className="text-2xl font-bold text-white mb-2">{theme.title}</h3>
                  <p className="text-white/80 mb-6">{theme.description}</p>
                  <div className="flex items-center">
                    <Link href={theme.slug}>
                      <Button
                        variant="ghost"
                        className="text-white hover:text-amber-500 hover:bg-transparent p-0 group-hover:translate-x-2 transition-transform"
                      >
                        Découvrir <ChevronRight className="h-5 w-5 ml-1" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vidéo Promo Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black/70 z-10" />
          <img
            src="https://picsum.photos/id/1043/1920/1080"
            alt="Culture Béninoise"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 relative z-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Un patrimoine vivant à portée<span className="text-amber-500"> de main</span>
              </h2>
              <p className="text-xl text-white/80 mb-6">
                Notre application vous permet d'accéder à des milliers d'heures de contenu culturel authentique, validé par des historiens et des chefs traditionnels.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  "Histoires interactives basées sur votre origine",
                  "Audio-guides géolocalisés dans tout le pays",
                  "Expériences en réalité augmentée sur les sites historiques",
                  "Collection personnalisée d'artefacts numériques"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-amber-500 flex items-center justify-center">
                      <svg width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 4L4.5 7.5L11 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <p className="text-white/90">{item}</p>
                  </div>
                ))}
              </div>
              <Button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-6 text-lg shadow-lg">
                Télécharger l'application
              </Button>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl border-8 border-gray-900">
                <div className="absolute inset-0 flex items-center justify-center bg-black">
                  <img
                    src="https://picsum.photos/id/1028/800/450"
                    alt="Aperçu vidéo"
                    className="w-full h-full object-cover opacity-80"
                  />
                  <motion.button
                    className="absolute inset-0 flex items-center justify-center"
                    whileHover={{ scale: 1.1 }}
                    onClick={() => setVideoModal(true)}
                  >
                    <div className="w-20 h-20 rounded-full bg-amber-600 flex items-center justify-center">
                      <Play className="h-10 w-10 text-white" />
                    </div>
                  </motion.button>
                </div>
              </div>

              {/* Mobile frame decorative element */}
              <div className="absolute -right-16 -bottom-12 hidden md:block">
                <div className="w-48 h-96 rounded-3xl border-8 border-gray-900 overflow-hidden shadow-2xl transform rotate-12">
                  <img
                    src="https://picsum.photos/id/1035/300/600"
                    alt="App mobile"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Expériences Section */}
      <section id="experiences" className="py-24 px-4 bg-stone-50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center">
            <motion.span
              className="inline-block px-4 py-1 rounded-full bg-amber-100 text-amber-800 text-sm font-medium mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              CRÉEZ VOS SOUVENIRS
            </motion.span>
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Des expériences <span className="text-amber-600">immersives</span><br />sur mesure
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Redécouvrez le Bénin à travers des expériences interactives qui connectent passé et présent
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="https://picsum.photos/id/1040/600/800"
                  alt="Expériences culturelles"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating cards */}
              <motion.div
                className="absolute -top-8 -right-8 bg-white p-4 rounded-xl shadow-lg z-20 w-64"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center">
                    <MapPin className="h-4 w-4 text-amber-600" />
                  </div>
                  <h4 className="font-medium text-gray-900">Sites culturels</h4>
                </div>
                <p className="text-sm text-gray-600">
                  Plus de 150 lieux historiques à explorer avec des guides audio
                </p>
              </motion.div>

              <motion.div
                className="absolute -bottom-8 -left-8 bg-white p-4 rounded-xl shadow-lg z-20 w-64"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center">
                    <Heart className="h-4 w-4 text-amber-600" />
                  </div>
                  <h4 className="font-medium text-gray-900">Histoires personnalisées</h4>
                </div>
                <p className="text-sm text-gray-600">
                  Générez des contes basés sur votre nom et vos origines
                </p>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="space-y-8">
                {[
                  {
                    title: "Explorez le passé",
                    description: "Parcourez les sites historiques avec notre guide interactif qui dévoile l'histoire cachée de chaque lieu.",
                    icon: "🏛️"
                  },
                  {
                    title: "Connectez-vous aux traditions",
                    description: "Participez virtuellement aux cérémonies traditionnelles et découvrez leur signification profonde.",
                    icon: "🔮"
                  },
                  {
                    title: "Créez votre héritage",
                    description: "Générez une histoire unique basée sur votre lignée et partagez-la avec votre famille.",
                    icon: "📜"
                  },
                  {
                    title: "Vivez des expériences exclusives",
                    description: "Accédez à des événements exclusifs et des rencontres avec des gardiens de la tradition.",
                    icon: "✨"
                  }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    className="flex gap-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center text-2xl">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                className="mt-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                <Button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-6 text-lg shadow-lg">
                  Commencer mon voyage culturel
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Événements Section */}
      <section id="events" className="py-24 px-4 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center">
            <motion.span
              className="inline-block px-4 py-1 rounded-full bg-amber-500/20 text-amber-400 text-sm font-medium mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              AGENDA CULTUREL
            </motion.span>
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Événements à ne pas <span className="text-amber-500">manquer</span>
            </motion.h2>
            <motion.p
              className="text-xl text-gray-300 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Participez à des événements authentiques et enrichissants au Bénin
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer h-96"
              >
                <div className="absolute inset-0">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/20" />
                </div>
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="flex items-center gap-2 text-amber-400">
                      <Calendar className="h-4 w-4" />
                      <span className="text-sm font-medium">{event.date}</span>
                    </div>
                    <div className="w-1 h-1 rounded-full bg-gray-400"></div>
                    <div className="flex items-center gap-2 text-gray-300">
                      <MapPin className="h-4 w-4" />
                      <span className="text-sm">{event.location}</span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{event.title}</h3>
                  <Button
                    variant="outline"
                    className="w-full border-white/30 text-white hover:bg-white/10 hover:border-white"
                  >
                    Plus d'informations
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Button className="bg-amber-600 hover:bg-amber-700 text-white text-lg px-8 py-4">
              Voir tous les événements
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Témoignages Section */}
      <section id="testimonials" className="py-24 px-4 bg-stone-50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center">
            <motion.span
              className="inline-block px-4 py-1 rounded-full bg-amber-100 text-amber-800 text-sm font-medium mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              TÉMOIGNAGES
            </motion.span>
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Ce que disent nos <span className="text-amber-600">visiteurs</span>
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Des expériences authentiques qui transforment la façon dont vous connectez avec votre héritage
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
              >
                <div className="flex items-center mb-6">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-5 w-5 text-amber-500 fill-amber-500" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-medium text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.origin}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Créer son histoire - Section Interactive */}
      <section className="py-24 px-4 bg-gradient-to-r from-amber-600 to-amber-800 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <motion.span
                className="inline-block px-4 py-1 rounded-full bg-white/20 text-white text-sm font-medium mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                EXPÉRIENCE UNIQUE
              </motion.span>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Crée ta propre <span className="text-gray-900">histoire</span> béninoise
              </h2>
              <p className="text-xl mb-8 text-white/90">
                Notre générateur d'histoires personnalisées utilise l'IA pour créer un récit unique basé sur votre nom et vos origines, enraciné dans le riche patrimoine béninois.
              </p>

              <form className="space-y-4">
                <div>
                  <label className="block text-white/90 mb-2 text-sm">Votre nom</label>
                  <input
                    type="text"
                    placeholder="Entrez votre nom"
                    className="w-full p-4 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30"
                  />
                </div>
                <div>
                  <label className="block text-white/90 mb-2 text-sm">Votre origine</label>
                  <input
                    type="text"
                    placeholder="Pays ou région d'origine"
                    className="w-full p-4 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30"
                  />
                </div>
                <Button className="w-full bg-gray-900 hover:bg-gray-800 text-white text-lg p-6 shadow-lg mt-4">
                  Générer mon histoire
                </Button>
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative z-10 bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 shadow-xl">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-2xl font-bold">L'Épopée d'Adama</h3>
                  <div className="px-3 py-1 rounded-full bg-white/20 text-sm">Exemple</div>
                </div>
                <p className="text-white/80 mb-6">
                  Né sous les étoiles protectrices de Mawu, Adama du grand Mali était destiné à devenir un pont entre les mondes. Son voyage au Bénin l'a connecté aux anciens royaumes de ses ancêtres...
                </p>
                <p className="text-white/80 mb-6">
                  La légende raconte que lorsqu'il posa le pied sur la terre sacrée d'Abomey, les tambours commencèrent à battre d'eux-mêmes, reconnaissant le retour d'un fils de la diaspora...
                </p>
                <p className="text-white/80">
                  Cette histoire révèle comment les liens du sang transcendent le temps et l'espace, rappelant à Adama que son identité est ancrée dans les traditions du Dahomey...
                </p>

                {/* Decorative elements */}
                <div className="absolute -top-6 -left-6 w-12 h-12 rounded-full bg-amber-500/20 backdrop-blur-sm border border-white/20"></div>
                <div className="absolute -bottom-8 -right-8 w-20 h-20 rounded-full bg-amber-500/20 backdrop-blur-sm border border-white/20"></div>
              </div>

              {/* Background decorative elements */}
              <div className="absolute -z-10 top-1/4 -right-12 w-24 h-24 rounded-full bg-white/5"></div>
              <div className="absolute -z-10 bottom-1/4 -left-12 w-32 h-32 rounded-full bg-white/5"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Téléchargement de l'application */}
      <section className="py-24 px-4 bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-repeat" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'20\' height=\'20\' viewBox=\'0 0 20 20\' fill=\'none\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Crect width=\'1\' height=\'1\' fill=\'white\'/%3E%3C/svg%3E")', backgroundSize: '30px 30px' }}></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <motion.span
                className="inline-block px-4 py-1 rounded-full bg-amber-500/20 text-amber-400 text-sm font-medium mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                IMMERSION TOTALE
              </motion.span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                La culture béninoise <br /><span className="text-amber-500">dans votre poche</span>
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Téléchargez notre application et plongez dans une expérience culturelle immersive, où que vous soyez dans le monde.
              </p>

              <div className="space-y-6 mb-8">
                {[
                  "Fonctionne hors-ligne pour vos voyages",
                  "Mise à jour régulière avec de nouveaux contenus",
                  "Personnalisation selon vos intérêts culturels",
                  "Notifications pour les événements à proximité"
                ].map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-amber-500 flex items-center justify-center">
                      <svg width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 4L4.5 7.5L11 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <p className="text-gray-300">{feature}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-white hover:bg-gray-100 text-gray-900 px-6 py-4 flex items-center gap-2">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.1642 15.1436C17.8832 15.8933 17.5516 16.5946 17.1695 17.2474C16.6412 18.1387 16.2068 18.7539 15.8689 19.0928C15.3426 19.6205 14.7789 19.8907 14.1758 19.9054C13.7405 19.9054 13.2211 19.7744 12.6212 19.5084C12.0192 19.2437 11.4672 19.1152 10.9642 19.1152C10.4347 19.1152 9.86423 19.2437 9.25265 19.5084C8.64032 19.7744 8.14381 19.9108 7.76144 19.9189C7.18464 19.9352 6.6077 19.6579 6.03001 19.0928C5.665 18.7295 5.21201 18.0915 4.67217 17.1789C4.09447 16.2009 3.62456 15.0938 3.26356 13.8564C2.87809 12.5218 2.68402 11.2278 2.68402 9.97313C2.68402 8.50548 2.9514 7.27108 3.48693 6.27224C3.9067 5.48714 4.47766 4.86981 5.20202 4.41886C5.92638 3.96791 6.71201 3.73687 7.5609 3.7221C8.0195 3.7221 8.62541 3.87238 9.38068 4.16758C10.1332 4.46354 10.6233 4.61382 10.8495 4.61382C11.0143 4.61382 11.5547 4.43967 12.5618 4.09214C13.5159 3.76997 14.315 3.63365 14.962 3.68074C16.6237 3.79616 17.8842 4.42726 18.7394 5.5772C17.2535 6.50381 16.5195 7.76867 16.5354 9.3677C16.5513 10.6267 17.0212 11.6758 17.9422 12.5111C18.3593 12.9029 18.8228 13.2096 19.334 13.4321C18.9573 14.0319 18.5641 14.5992 18.1642 15.1436ZM14.9879 0.306491C14.9879 1.2981 14.6207 2.22153 13.8891 3.07358C12.9981 4.09214 11.9207 4.66065 10.7578 4.57134C10.7407 4.45593 10.7313 4.33456 10.7313 4.20716C10.7313 3.25755 11.1462 2.24498 11.8981 1.40831C12.2734 0.984761 12.7553 0.631358 13.3426 0.348102C13.9286 0.0690944 14.4732 -0.0580528 14.9761 0.0260222C14.9841 0.119973 14.9879 0.213923 14.9879 0.306491Z" fill="currentColor" />
                  </svg>
                  App Store
                </Button>
                <Button className="bg-white hover:bg-gray-100 text-gray-900 px-6 py-4 flex items-center gap-2">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 20.5V3.5C3 2.4 3.9 1.5 5 1.5H19C20.1 1.5 21 2.4 21 3.5V20.5C21 21.6 20.1 22.5 19 22.5H5C3.9 22.5 3 21.6 3 20.5ZM12 18.5L17 13.5H14V7.5H10V13.5H7L12 18.5Z" fill="currentColor" />
                  </svg>
                  Google Play
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative mx-auto md:ml-auto md:mr-0 w-64 md:w-80">
                <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-r from-amber-500/40 to-amber-700/40 blur-2xl rounded-full transform rotate-12 scale-90 opacity-30"></div>
                <div className="relative z-10">
                  <div className="overflow-hidden rounded-3xl shadow-2xl border-8 border-gray-800">
                    <img
                      src="https://picsum.photos/id/1025/400/800"
                      alt="Application mobile"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>



      {/* Video Modal */}
      <AnimatePresence>
        {videoModal && (
          <motion.div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative w-full max-w-4xl aspect-video bg-black"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
            >
              <button
                className="absolute -top-12 right-0 text-white hover:text-amber-500"
                onClick={() => setVideoModal(false)}
              >
                <X className="h-8 w-8" />
              </button>
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Découvrir le Bénin"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}