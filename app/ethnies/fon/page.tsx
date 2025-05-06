
// "use client";

// import { useEffect, useRef, useState } from "react";
// import { motion } from "framer-motion";
// import { Bell, ChevronDown, Globe, Menu, PenSquare, MapPin, Users, Crown, Music2, Utensils, Palette } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
// import useEmblaCarousel from 'embla-carousel-react';
// import Autoplay from 'embla-carousel-autoplay';

// import { PlayCircle, Headphones, Pause, Volume2 } from "lucide-react";
// import ReactPlayer from 'react-player';

// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";
// import { cn } from "@/lib/utils";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import {
//   Tabs,
//   TabsContent,
//   TabsList,
//   TabsTrigger,
// } from "@/components/ui/tabs";

// // ... (previous imports and constants remain the same until ethnicGroups)

// const fonEthnicGroup = {
//   overview: {
//     population: "Environ 3,5 millions",
//     location: "Sud du Bénin, principalement dans les départements du Zou, de l'Atlantique et du Littoral",
//     language: "Fongbe (langue Gbe)",
//     religion: "Vodun traditionnel, Christianisme, Islam",
//   },
//   history: [
//     {
//       period: "XIIe siècle",
//       event: "Migration vers la région d'Allada",
//     },
//     {
//       period: "XVIIe siècle",
//       event: "Établissement du Royaume d'Abomey",
//     },
//     {
//       period: "XVIIIe-XIXe siècles",
//       event: "Apogée du Royaume du Dahomey",
//     },
//   ],
//   traditions: [
//     {
//       name: "Vodun",
//       description: "Religion traditionnelle avec des cérémonies et rituels complexes",
//     },
//     {
//       name: "Fa",
//       description: "Système de divination traditionnel",
//     },
//     {
//       name: "Zangbeto",
//       description: "Gardiens traditionnels de la nuit",
//     },
//   ],
//   culture: {
//     music: [
//       "Tambours parlants",
//       "Chants traditionnels",
//       "Musique de cour royale",
//     ],
//     dance: [
//       "Agbadja",
//       "Adjogan",
//       "Zinli",
//     ],
//     crafts: [
//       "Tissage",
//       "Sculpture sur bois",
//       "Appliqués de Abomey",
//     ],
//   },
//   cuisine: [
//     {
//       name: "Amala",
//       description: "Pâte de manioc fermentée",
//     },
//     {
//       name: "Sauce Fon",
//       description: "Préparation à base de légumes et viande",
//     },
//     {
//       name: "Akassa",
//       description: "Pâte de maïs fermentée",
//     },
//   ],
// };

// // ... (previous constants remain the same)

// export default function Home() {
//   // ... (previous state declarations and useEffect remain the same)
//   const audioRef = useRef<HTMLAudioElement>(null);

//   const [isPlaying, setIsPlaying] = useState(false);
//   const [currentAudio, setCurrentAudio] = useState<string>("");

//   function toggleAudio(audioSrc: string): void {
//     if (currentAudio === audioSrc) {
//       setIsPlaying(!isPlaying);
//     } else {
//       setCurrentAudio(audioSrc);
//       setIsPlaying(true);
//     }
//   }

//   return (
//     <div className="min-h-screen bg-[#FDF6E3] overflow-x-hidden">
//       {/* Navigation */}
//       {/* ... (previous navigation code remains the same) */}

//       {/* Hero Carousel */}
//       {/* ... (previous carousel code remains the same) */}

//       {/* History Section with Coat of Arms */}
//       {/* ... (previous history section remains the same) */}
//       <audio 
//       ref={audioRef} 
//       onEnded={() => {
//         setIsPlaying(false);
//         setCurrentAudio('');
//       }}
//     />

//       {/* Fon Ethnic Group Overview */}
//       <section className="py-20 px-4 bg-[#FDF6E3]">
//         <div className="max-w-7xl mx-auto">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//             className="text-center mb-16"
//           >
//             <h2 className="text-4xl font-bold text-[#5C4033] mb-4">Le Peuple Fon</h2>
//             <p className="text-lg text-[#8B4513]">Découvrez la richesse culturelle du plus grand groupe ethnique du Bénin</p>
//           </motion.div>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
//             <motion.div
//               initial={{ opacity: 0, x: -20 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8 }}
//               viewport={{ once: true }}
//             >
//               <img
//                 src="https://images.unsplash.com/photo-1523881374236-dd34f6ac1226?q=80&w=2070"
//                 alt="Peuple Fon"
//                 className="rounded-2xl shadow-xl w-full h-[400px] object-cover"
//               />
//             </motion.div>
//             <div className="grid grid-cols-2 gap-4">
//               {Object.entries(fonEthnicGroup.overview).map(([key, value], index) => (
//                 <motion.div
//                   key={key}
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.8, delay: index * 0.1 }}
//                   viewport={{ once: true }}
//                 >
//                   <Card className="h-full bg-white/80 backdrop-blur-sm border-[#8B4513]/20">
//                     <CardHeader>
//                       <CardTitle className="text-[#5C4033] capitalize">{key}</CardTitle>
//                     </CardHeader>
//                     <CardContent>
//                       <p className="text-[#8B4513]">{value}</p>
//                     </CardContent>
//                   </Card>
//                 </motion.div>
//               ))}
//             </div>
//           </div>

//           <Tabs defaultValue="history" className="w-full">
//             <TabsList className="w-full justify-start bg-[#8B4513]/10 mb-8">
//               <TabsTrigger value="history" className="text-[#5C4033]">Histoire</TabsTrigger>
//               <TabsTrigger value="traditions" className="text-[#5C4033]">Traditions</TabsTrigger>
//               <TabsTrigger value="culture" className="text-[#5C4033]">Culture</TabsTrigger>
//               <TabsTrigger value="cuisine" className="text-[#5C4033]">Cuisine</TabsTrigger>
//             </TabsList>

//             {/* <TabsContent value="history">
//               <div className="grid gap-8">
//                 {fonEthnicGroup.history.map((item, index) => (
//                   <motion.div
//                     key={index}
//                     initial={{ opacity: 0, y: 20 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.8, delay: index * 0.1 }}
//                     viewport={{ once: true }}
//                     className="flex items-start gap-4"
//                   >
//                     <div className="flex-shrink-0 w-32 font-bold text-[#5C4033]">{item.period}</div>
//                     <div className="flex-grow">
//                       <Card className="bg-white/80 backdrop-blur-sm border-[#8B4513]/20">
//                         <CardContent className="pt-6">
//                           <p className="text-[#8B4513]">{item.event}</p>
//                         </CardContent>
//                       </Card>
//                     </div>
//                   </motion.div>
//                 ))}
//               </div>
//             </TabsContent> */}
//             <TabsContent value="history">
//   <div className="grid gap-8">
//     {fonEthnicGroup.history.map((item, index) => (
//       <motion.div
//         key={index}
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8, delay: index * 0.1 }}
//         viewport={{ once: true }}
//         className="flex items-start gap-4"
//       >
//         <div className="flex-shrink-0 w-32 font-bold text-[#5C4033]">{item.period}</div>
//         <div className="flex-grow space-y-4">
//           <Card className="bg-white/80 backdrop-blur-sm border-[#8B4513]/20">
//             <CardContent className="pt-6">
//               <p className="text-[#8B4513]">{item.event}</p>

//               {/* Ajout des contrôles média */}
//               <div className="flex gap-4 mt-4">
//                 {/* Bouton Audio */}
//                 <Button
//                   variant="outline"
//                   size="sm"
//                   className="flex items-center gap-2 text-[#5C4033] border-[#8B4513]"
//                   onClick={() => toggleAudio(`/audio/history-${index}.mp3`)}
//                 >
//                   {currentAudio === `/audio/history-${index}.mp3` && isPlaying ? (
//                     <Pause className="h-4 w-4" />
//                   ) : (
//                     <Headphones className="h-4 w-4" />
//                   )}
//                   Écouter
//                 </Button>

//                 {/* Bouton Vidéo */}
//                 {index === 0 && ( // Exemple: seulement pour le premier élément
//                   <ReactPlayer
//                     url="/videos/history-dahomey.mp4"
//                     width="100%"
//                     height="auto"
//                     controls
//                     light={true}
//                     playIcon={
//                       <Button
//                         variant="outline"
//                         size="sm"
//                         className="flex items-center gap-2 text-[#5C4033] border-[#8B4513]"
//                       >
//                         <PlayCircle className="h-4 w-4" />
//                         Regarder
//                       </Button>
//                     }
//                   />
//                 )}
//               </div>
//             </CardContent>
//           </Card>
//         </div>
//       </motion.div>
//     ))}
//   </div>
// </TabsContent>

//             {/* <TabsContent value="traditions">
//               <div className="grid md:grid-cols-3 gap-8">
//                 {fonEthnicGroup.traditions.map((tradition, index) => (
//                   <motion.div
//                     key={index}
//                     initial={{ opacity: 0, y: 20 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.8, delay: index * 0.1 }}
//                     viewport={{ once: true }}
//                   >
//                     <Card className="h-full bg-white/80 backdrop-blur-sm border-[#8B4513]/20">
//                       <CardHeader>
//                         <CardTitle className="text-[#5C4033]">{tradition.name}</CardTitle>
//                       </CardHeader>
//                       <CardContent>
//                         <p className="text-[#8B4513]">{tradition.description}</p>
//                       </CardContent>
//                     </Card>
//                   </motion.div>
//                 ))}
//               </div>
//             </TabsContent> */}
//             <TabsContent value="traditions">
//   <div className="grid md:grid-cols-3 gap-8">
//     {fonEthnicGroup.traditions.map((tradition, index) => (
//       <motion.div
//         key={index}
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8, delay: index * 0.1 }}
//         viewport={{ once: true }}
//       >
//         <Card className="h-full bg-white/80 backdrop-blur-sm border-[#8B4513]/20">
//           <CardHeader>
//             <CardTitle className="text-[#5C4033]">{tradition.name}</CardTitle>
//           </CardHeader>
//           <CardContent className="space-y-4">
//             <p className="text-[#8B4513]">{tradition.description}</p>

//             {/* Contrôles média */}
//             <div className="flex gap-3">
//               <Button
//                 variant="outline"
//                 size="sm"
//                 className="flex items-center gap-1 text-[#5C4033] border-[#8B4513]"
//                 onClick={() => toggleAudio(`/audio/tradition-${index}.mp3`)}
//               >
//                 {currentAudio === `/audio/tradition-${index}.mp3` && isPlaying ? (
//                   <Pause className="h-4 w-4" />
//                 ) : (
//                   <Volume2 className="h-4 w-4" />
//                 )}
//                 Audio
//               </Button>

//               <ReactPlayer
//                 url={`/videos/tradition-${index}.mp4`}
//                 width="100%"
//                 height="auto"
//                 controls
//                 light={true}
//                 playIcon={
//                   <Button
//                     variant="outline"
//                     size="sm"
//                     className="flex items-center gap-1 text-[#5C4033] border-[#8B4513]"
//                   >
//                     <PlayCircle className="h-4 w-4" />
//                     Vidéo
//                   </Button>
//                 }
//               />
//             </div>
//           </CardContent>
//         </Card>
//       </motion.div>
//     ))}
//   </div>
// </TabsContent>

//             <TabsContent value="culture">
//               <div className="grid md:grid-cols-3 gap-8">
//                 <motion.div
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.8 }}
//                   viewport={{ once: true }}
//                 >
//                   <Card className="h-full bg-white/80 backdrop-blur-sm border-[#8B4513]/20">
//                     <CardHeader>
//                       <CardTitle className="text-[#5C4033] flex items-center gap-2">
//                         <Music2 className="h-5 w-5" /> Musique
//                       </CardTitle>
//                     </CardHeader>
//                     <CardContent>
//                       <ul className="list-disc list-inside text-[#8B4513] space-y-2">
//                         {fonEthnicGroup.culture.music.map((item, index) => (
//                           <li key={index}>{item}</li>
//                         ))}
//                       </ul>
//                     </CardContent>
//                   </Card>
//                 </motion.div>

//                 <motion.div
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.8, delay: 0.1 }}
//                   viewport={{ once: true }}
//                 >
//                   <Card className="h-full bg-white/80 backdrop-blur-sm border-[#8B4513]/20">
//                     <CardHeader>
//                       <CardTitle className="text-[#5C4033]">Danse</CardTitle>
//                     </CardHeader>
//                     <CardContent>
//                       <ul className="list-disc list-inside text-[#8B4513] space-y-2">
//                         {fonEthnicGroup.culture.dance.map((item, index) => (
//                           <li key={index}>{item}</li>
//                         ))}
//                       </ul>
//                     </CardContent>
//                   </Card>
//                 </motion.div>

//                 <motion.div
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.8, delay: 0.2 }}
//                   viewport={{ once: true }}
//                 >
//                   <Card className="h-full bg-white/80 backdrop-blur-sm border-[#8B4513]/20">
//                     <CardHeader>
//                       <CardTitle className="text-[#5C4033] flex items-center gap-2">
//                         <Palette className="h-5 w-5" /> Artisanat
//                       </CardTitle>
//                     </CardHeader>
//                     <CardContent>
//                       <ul className="list-disc list-inside text-[#8B4513] space-y-2">
//                         {fonEthnicGroup.culture.crafts.map((item, index) => (
//                           <li key={index}>{item}</li>
//                         ))}
//                       </ul>
//                     </CardContent>
//                   </Card>
//                 </motion.div>
//               </div>
//             </TabsContent>

//             <TabsContent value="cuisine">
//               <div className="grid md:grid-cols-3 gap-8">
//                 {fonEthnicGroup.cuisine.map((dish, index) => (
//                   <motion.div
//                     key={index}
//                     initial={{ opacity: 0, y: 20 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.8, delay: index * 0.1 }}
//                     viewport={{ once: true }}
//                   >
//                     <Card className="h-full bg-white/80 backdrop-blur-sm border-[#8B4513]/20">
//                       <CardHeader>
//                         <CardTitle className="text-[#5C4033] flex items-center gap-2">
//                           <Utensils className="h-5 w-5" /> {dish.name}
//                         </CardTitle>
//                       </CardHeader>
//                       <CardContent>
//                         <p className="text-[#8B4513]">{dish.description}</p>
//                       </CardContent>
//                     </Card>
//                   </motion.div>
//                 ))}
//               </div>
//             </TabsContent>
//           </Tabs>
//         </div>
//       </section>

//       {/* Content Sections */}
//       {/* ... (previous sections code remains the same) */}

//       {/* Footer */}
//       {/* ... (previous footer code remains the same) */}
//     </div>
//   );
// }


// **************************************************************************************************************************

"use client";

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Play, Pause, Volume2, X, MapPin, Users, Calendar, MessageCircle, Globe, ChevronRight } from "lucide-react";

// Données spécifiques à l'ethnie Fon
const FON_DATA = {
  id: "fon",
  name: "Fon",
  region: "Sud Bénin",
  population: "~2 millions",
  description: "Peuple fondateur du royaume du Dahomey, riche en traditions vodun et en art royal.",
  longDescription: "Les Fon constituent l'un des principaux groupes ethniques du Bénin. Ils sont principalement basés dans la région d'Abomey et ont fondé le puissant royaume du Dahomey. Leur culture est profondément liée aux pratiques vodun, à la musique cérémonielle et possède un riche patrimoine d'arts royaux, notamment les appliqués, les récades et les statues.",
  language: "Fongbé",
  mainCity: "Abomey",
  history: "Le peuple Fon est surtout connu pour avoir fondé le puissant royaume du Dahomey qui a dominé la région du 17e au 19e siècle. Sous le règne de rois tels que Ghezo et Béhanzin, le royaume a connu un âge d'or artistique et militaire. Les Fon ont développé une organisation sociale complexe centrée autour de la cour royale d'Abomey. Ce royaume fut l'un des derniers bastions de résistance à la colonisation française en Afrique de l'Ouest.",
  culture: "La culture Fon est profondément enracinée dans les pratiques spirituelles vodun, qui impliquent la communication avec des divinités et des ancêtres à travers des cérémonies complexes. L'art Fon est caractérisé par ses appliqués colorés qui racontent les légendes royales, ses statues en métal et en bois, et ses récades (sceptres royaux) symbolisant l'autorité. La musique et la danse occupent une place centrale dans les célébrations et rituels.",
  festivals: [
    {
      name: "Fête du Vodun",
      date: "10 janvier",
      description: "Célébration nationale des pratiques vodun, avec des cérémonies, danses et offrandes aux divinités."
    },
    {
      name: "Festival International de Ouidah",
      date: "Janvier",
      description: "Commémoration de l'histoire et de la culture des peuples de la région, avec un accent sur la traite négrière et les cultures de la diaspora."
    },
    {
      name: "Cérémonies royales d'Abomey",
      date: "Diverses dates",
      description: "Célébrations liées à l'héritage royal du Dahomey, incluant des commémorations des anciens rois."
    }
  ],
  traditions: [
    {
      name: "Vodun",
      description: "Système religieux et spirituel complexe impliquant la vénération de divinités liées aux forces naturelles et aux ancêtres. Les cérémonies vodun peuvent impliquer des transes, des danses rituelles, des offrandes et des consultations oraculaires.",
      image: "https://static.lpnt.fr/images/2018/01/10/12777012lpaw-12805711-embed-libre-jpg_4903602.jpg"
    },
    {
      name: "Appliqués du Dahomey",
      description: "Art textile unique où des pièces de tissu colorées sont cousues sur un fond pour créer des scènes narratives relatant l'histoire des rois, des proverbes ou des mythes fondateurs. Ces œuvres étaient traditionnellement créées pour la cour royale.",
      image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhzcplZ3gfZ3tH2ej7XGdM5IFsqrtmq-rJru77Wl7sPTODHpvak2LRBAhUrmqZ173Fj-mkHUpgcl4Q3m-H1QIw8E38BHImciXKI-CImY8NoZ7VLc-o_rTcnWHdviDjfoxeGJ9oHl9gLjkju/s640/J-Y%25C3%25A9madj%25C3%25A9.jpg"
    },
    {
      name: "Zangbeto",
      description: "Gardiens nocturnes traditionnels représentés par des danseurs couverts de raphia coloré qui tourbillonnent lors des cérémonies. Ils incarnent des esprits venus de l'océan pour protéger les communautés contre les malfaiteurs et les forces négatives.",
      image: "https://beninzangbeto.com/wp-content/uploads/2024/11/Benin-Zangbeto-festival.jpg"
    }
  ],
  audioStory: "/audio/histoire-fon.mp3", // À remplacer par le vrai chemin
  videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // À remplacer par le vrai lien
  galleryImages: [
    {
      url: "https://beninzangbeto.com/wp-content/uploads/2024/11/Benin-Zangbeto-festival.jpg",
      caption: "Cérémonie traditionnelle Fon"
    },
    {
      url: "https://beninwebtv.com/wp-content/uploads/2022/06/IMG_5334.jpg",
      caption: "Danse cérémonielle"
    },
    {
      url: "https://www.lameteo.info/wp-content/uploads/2021/08/207d7471-27af-45bd-8df0-1129e0cc1a1e-033d6.jpg",
      caption: "Rituel Vodun"
    },
    {
      url: "https://i0.wp.com/originalfoundblog.com/wp-content/uploads/2017/02/img_0149.jpg?fit=3840%2C1665",
      caption: "Appliqué du Dahomey"
    },
    {
      url: "https://lanouvelletribune.info/wp-content/uploads/2021/12/Tata-somba-Kirche.jpg",
      caption: "Architecture traditionnelle"
    },
    {
      url: "https://static.lpnt.fr/images/2018/08/16/16311779-16311961-g-jpg_5517855_1000x667.jpg",
      caption: "Vie quotidienne"
    }
  ],
  mapLocation: {
    lat: 7.1826,
    lng: 1.9973,
    zoom: 8
  }
};

export default function FonDetailPage() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [showVideo, setShowVideo] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [activeTab, setActiveTab] = useState('overview');

  const toggleAudio = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  interface GalleryImage {
    url: string;
    caption: string;
  }

  const openGalleryModal = (image: GalleryImage): void => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeGalleryModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  const openVideoModal = () => {
    setShowVideo(true);
    document.body.style.overflow = 'hidden';
  };

  const closeVideoModal = () => {
    setShowVideo(false);
    document.body.style.overflow = 'auto';
  };

  useEffect(() => {
    // Cleanup function to pause audio when component unmounts
    return () => {
      if (audioRef.current && !audioRef.current.paused) {
        audioRef.current.pause();
      }
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = 'auto'; // Réinitialise à chaque montage
    return () => {
      document.body.style.overflow = 'auto'; // Cleanup
      if (audioRef.current && !audioRef.current.paused) {
        audioRef.current.pause();
      }
    };
  }, []);

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const galleryItemVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-50">
      <audio ref={audioRef} src={FON_DATA.audioStory} />

      {/* Hero Section */}
      <div className="relative h-96 overflow-hidden">
        <div className="absolute inset-0 bg-black">
          <Image
            src="https://ecoledarts.com/wp-content/uploads/2023/01/voodoo-dance-benin-traditional.jpg"
            alt="Culture Fon"
            fill
            className="object-cover opacity-70"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/80" />

        <div className="relative max-w-7xl mx-auto px-6 h-full flex flex-col justify-end pb-12">
          <Link href="/ethnies" className="inline-flex items-center text-white bg-black/30 hover:bg-black/50 px-4 py-2 rounded-full mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour aux ethnies
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-2">
              Ethnie <span className="text-amber-400">Fon</span>
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-white/90 mt-4">
              <div className="flex items-center">
                <MapPin className="w-5 h-5 mr-1 text-amber-400" />
                <span>{FON_DATA.region}</span>
              </div>
              <div className="flex items-center">
                <Users className="w-5 h-5 mr-1 text-amber-400" />
                <span>{FON_DATA.population}</span>
              </div>
              <div className="flex items-center">
                <MessageCircle className="w-5 h-5 mr-1 text-amber-400" />
                <span>Langue: {FON_DATA.language}</span>
              </div>
              <div className="flex items-center">
                <Globe className="w-5 h-5 mr-1 text-amber-400" />
                <span>Ville principale: {FON_DATA.mainCity}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Interactive Buttons */}
      <div className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-wrap gap-4 justify-center md:justify-start">
          <button
            onClick={toggleAudio}
            className={`flex items-center px-5 py-3 rounded-full transition-colors ${isPlaying ? 'bg-amber-600 text-white' : 'bg-amber-100 text-amber-800 hover:bg-amber-200'}`}
          >
            {isPlaying ? <Pause className="w-5 h-5 mr-2" /> : <Volume2 className="w-5 h-5 mr-2" />}
            {isPlaying ? 'Pause' : 'Écouter l\'histoire'}
          </button>

          <button
            onClick={openVideoModal}
            className="flex items-center bg-amber-100 text-amber-800 hover:bg-amber-200 px-5 py-3 rounded-full transition-colors"
          >
            <Play className="w-5 h-5 mr-2" />
            Regarder la vidéo
          </button>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="sticky top-0 z-30 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex overflow-x-auto hide-scrollbar space-x-8 py-4">
            <button
              onClick={() => setActiveTab('overview')}
              className={`whitespace-nowrap font-medium text-sm transition-colors ${activeTab === 'overview' ? 'text-amber-600 border-b-2 border-amber-600' : 'text-gray-600 hover:text-amber-600'}`}
            >
              Vue d'ensemble
            </button>
            <button
              onClick={() => setActiveTab('history')}
              className={`whitespace-nowrap font-medium text-sm transition-colors ${activeTab === 'history' ? 'text-amber-600 border-b-2 border-amber-600' : 'text-gray-600 hover:text-amber-600'}`}
            >
              Histoire
            </button>
            <button
              onClick={() => setActiveTab('culture')}
              className={`whitespace-nowrap font-medium text-sm transition-colors ${activeTab === 'culture' ? 'text-amber-600 border-b-2 border-amber-600' : 'text-gray-600 hover:text-amber-600'}`}
            >
              Culture
            </button>
            <button
              onClick={() => setActiveTab('traditions')}
              className={`whitespace-nowrap font-medium text-sm transition-colors ${activeTab === 'traditions' ? 'text-amber-600 border-b-2 border-amber-600' : 'text-gray-600 hover:text-amber-600'}`}
            >
              Traditions
            </button>
            <button
              onClick={() => setActiveTab('festivals')}
              className={`whitespace-nowrap font-medium text-sm transition-colors ${activeTab === 'festivals' ? 'text-amber-600 border-b-2 border-amber-600' : 'text-gray-600 hover:text-amber-600'}`}
            >
              Festivals
            </button>
            <button
              onClick={() => setActiveTab('gallery')}
              className={`whitespace-nowrap font-medium text-sm transition-colors ${activeTab === 'gallery' ? 'text-amber-600 border-b-2 border-amber-600' : 'text-gray-600 hover:text-amber-600'}`}
            >
              Galerie
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <AnimatePresence mode="wait">
          {activeTab === 'overview' && (
            <motion.div
              key="overview"
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0 }}
              variants={fadeIn}
              className="max-w-4xl"
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Vue d'ensemble</h2>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="text-xl mb-6">{FON_DATA.longDescription}</p>

                <div className="bg-white rounded-xl shadow-md p-6 my-8">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Points clés</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="inline-flex items-center justify-center bg-amber-100 text-amber-800 rounded-full h-6 w-6 mt-0.5 mr-3 flex-shrink-0">1</span>
                      <span>Fondateurs du royaume du Dahomey, l'un des plus puissants d'Afrique de l'Ouest</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-flex items-center justify-center bg-amber-100 text-amber-800 rounded-full h-6 w-6 mt-0.5 mr-3 flex-shrink-0">2</span>
                      <span>Culture spirituelle riche centrée autour des pratiques vodun</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-flex items-center justify-center bg-amber-100 text-amber-800 rounded-full h-6 w-6 mt-0.5 mr-3 flex-shrink-0">3</span>
                      <span>Art royal distinctif incluant les appliqués textiles et les récades</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-flex items-center justify-center bg-amber-100 text-amber-800 rounded-full h-6 w-6 mt-0.5 mr-3 flex-shrink-0">4</span>
                      <span>Tradition orale puissante perpétuant l'histoire et les valeurs</span>
                    </li>
                  </ul>
                </div>

                <div className="my-12 relative rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src="https://expatstraveltogether.com/wp-content/uploads/2023/09/benin2-1290x540.jpg"
                    alt="Art royal Fon"
                    width={800}
                    height={500}
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-4 text-white">
                    <p>Appliqué traditionnel du palais royal d'Abomey</p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'history' && (
            <motion.div
              key="history"
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0 }}
              variants={fadeIn}
              className="max-w-4xl"
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Histoire</h2>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="text-xl mb-8">{FON_DATA.history}</p>

                <div className="grid md:grid-cols-3 gap-6 my-12">
                  <div className="bg-white p-6 rounded-xl shadow-md">
                    <h3 className="font-semibold text-gray-800 mb-2">17e siècle</h3>
                    <p className="text-gray-600">Fondation du royaume du Dahomey par le roi Houegbadja. Établissement d'Abomey comme capitale royale.</p>
                  </div>

                  <div className="bg-white p-6 rounded-xl shadow-md">
                    <h3 className="font-semibold text-gray-800 mb-2">18e-19e siècle</h3>
                    <p className="text-gray-600">Âge d'or du royaume sous les règnes des rois Ghezo et Glélé. Développement des arts royaux et expansion territoriale.</p>
                  </div>

                  <div className="bg-white p-6 rounded-xl shadow-md">
                    <h3 className="font-semibold text-gray-800 mb-2">1894-1900</h3>
                    <p className="text-gray-600">Résistance du roi Béhanzin contre les forces coloniales françaises. Chute du royaume et début de la période coloniale.</p>
                  </div>
                </div>

                <div className="bg-amber-50 border-l-4 border-amber-600 p-6 rounded-r-xl my-8">
                  <h3 className="font-semibold text-gray-800 mb-2">Saviez-vous que...</h3>
                  <p className="text-gray-700">Le palais royal d'Abomey est inscrit au patrimoine mondial de l'UNESCO depuis 1985? Ses murs sont décorés d'appliqués textiles qui relatent l'histoire des rois à travers des symboles et des scènes narratives.</p>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'culture' && (
            <motion.div
              key="culture"
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0 }}
              variants={fadeIn}
              className="max-w-4xl"
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Culture</h2>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="text-xl mb-8">{FON_DATA.culture}</p>

                <div className="grid md:grid-cols-2 gap-8 my-12">
                  <div className="bg-white rounded-xl overflow-hidden shadow-md">
                    <div className="h-48 relative">
                      <Image
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYZNDPNT-MnPXTf2URtV8cHv5vX_wBgPsaKA&s"
                        alt="Musique Fon"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">Musique et danse</h3>
                      <p className="text-gray-600">Les percussions et les danses traditionnelles jouent un rôle central dans les cérémonies Fon. Chaque rythme a une signification spirituelle et est associé à des divinités spécifiques.</p>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl overflow-hidden shadow-md">
                    <div className="h-48 relative">
                      <Image
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCwI-b9HJEb3CgR8ETVr8jobIOQHEfreEmXg&s"
                        alt="Art Fon"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">Arts royaux</h3>
                      <p className="text-gray-600">L'art Fon est profondément lié à la monarchie et aux pratiques spirituelles. Les artisans créent des objets rituels, des textiles narratifs et des statues qui servent à la fois d'objets de culte et de récits historiques.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-md my-8">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Structure sociale</h3>
                  <p className="text-gray-600 mb-4">La société Fon traditionnelle était organisée autour de la monarchie sacrée et de lignages familiaux étendus. Le roi (Dada) était considéré comme d'essence divine et servait d'intermédiaire entre le peuple et les ancêtres. Les prêtres vodun jouaient également un rôle crucial dans la cohésion sociale.</p>
                  <p className="text-gray-600">Aujourd'hui, bien que la monarchie n'ait plus de pouvoir politique officiel, les structures traditionnelles coexistent avec les institutions modernes, et les chefs traditionnels continuent d'exercer une influence morale et culturelle importante.</p>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'traditions' && (
            <motion.div
              key="traditions"
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0 }}
              variants={staggerContainer}
              className="max-w-4xl"
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-8">Traditions</h2>

              <div className="space-y-12">
                {FON_DATA.traditions.map((tradition, index) => (
                  <motion.div
                    key={index}
                    variants={fadeIn}
                    className="bg-white rounded-xl overflow-hidden shadow-md"
                  >
                    <div className="md:flex">
                      <div className="md:w-2/5 relative h-64 md:h-auto">
                        <Image
                          src={tradition.image}
                          alt={tradition.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="p-6 md:w-3/5">
                        <h3 className="text-2xl font-semibold text-gray-800 mb-3">{tradition.name}</h3>
                        <p className="text-gray-600">{tradition.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === 'festivals' && (
            <motion.div
              key="festivals"
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0 }}
              variants={staggerContainer}
              className="max-w-4xl"
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-8">Festivals et célébrations</h2>

              <div className="space-y-6">
                {FON_DATA.festivals.map((festival, index) => (
                  <motion.div
                    key={index}
                    variants={fadeIn}
                    className="bg-white rounded-xl overflow-hidden shadow-md p-6"
                  >
                    <div className="flex items-center mb-3">
                      <Calendar className="h-5 w-5 text-amber-600 mr-2" />
                      <h3 className="text-xl font-semibold text-gray-800">{festival.name}</h3>
                    </div>
                    <p className="text-amber-600 font-medium mb-3">{festival.date}</p>
                    <p className="text-gray-600">{festival.description}</p>
                  </motion.div>
                ))}
              </div>

              <div className="mt-12 bg-amber-50 rounded-xl p-6 border border-amber-200">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Planning des célébrations</h3>
                <p className="text-gray-700 mb-4">La plupart des célébrations Fon suivent le calendrier traditionnel et sont organisées autour des cycles agricoles et des événements historiques importants. Si vous souhaitez assister à ces festivités, il est recommandé de vérifier les dates précises auprès des offices de tourisme locaux, car certaines peuvent varier d'une année à l'autre.</p>
                <p className="text-gray-700">Pour les voyageurs intéressés, les cérémonies publiques sont généralement ouvertes aux visiteurs respectueux, bien que certains aspects des rituels puissent être réservés aux initiés.</p>
              </div>
            </motion.div>
          )}

          {activeTab === 'gallery' && (
            <motion.div
              key="gallery"
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0 }}
              variants={staggerContainer}
              className="max-w-full"
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-8">Galerie</h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {FON_DATA.galleryImages.map((image, index) => (
                  <motion.div
                    key={index}
                    variants={galleryItemVariant}
                    className="bg-white rounded-xl overflow-hidden shadow-md cursor-pointer transition-transform hover:scale-105"
                    onClick={() => openGalleryModal(image)}
                  >
                    <div className="relative h-64">
                      <Image
                        src={image.url}
                        alt={image.caption}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <p className="text-gray-700">{image.caption}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Gallery Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            key={activeTab}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90"
            onClick={closeGalleryModal}
          >


            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-6xl w-full max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeGalleryModal}
                className="absolute -top-10 right-0 text-white hover:text-amber-400 transition-colors"
              >
                <X className="w-8 h-8" />
              </button>

              <div className="bg-white rounded-xl overflow-hidden">
                <div className="relative h-[70vh]">
                  <Image
                    src={selectedImage.url}
                    alt={selectedImage.caption}
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="p-4 bg-white border-t border-gray-200">
                  <p className="text-center text-gray-700 font-medium">{selectedImage.caption}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Video Modal */}
      <AnimatePresence>
        {showVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90"
            onClick={closeVideoModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-4xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeVideoModal}
                className="absolute -top-10 right-0 text-white hover:text-amber-400 transition-colors"
              >
                <X className="w-8 h-8" />
              </button>

              <div className="aspect-video w-full bg-black rounded-lg overflow-hidden">
                <iframe
                  width="100%"
                  height="100%"
                  src={FON_DATA.videoUrl}
                  title="Culture Fon"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Map Section */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Localisation géographique</h2>
            <p className="text-gray-600 mb-6">Le peuple Fon est principalement concentré dans le sud du Bénin, avec Abomey comme centre culturel historique.</p>

            <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg overflow-hidden">
              {/* Intégration d'une carte interactive (remplacer par votre solution de carte) */}
              <div className="w-full h-96 flex items-center justify-center bg-gradient-to-r from-amber-100 to-amber-200">
                <div className="text-center">
                  <Globe className="w-12 h-12 mx-auto text-amber-600 mb-4" />
                  <p className="text-amber-800 font-medium">Carte interactive des territoires Fon</p>
                  <p className="text-amber-700 text-sm mt-2">Lat: {FON_DATA.mapLocation.lat}, Lng: {FON_DATA.mapLocation.lng}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Experiences */}
      <div className="bg-amber-50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Expériences liées</h2>
          <p className="text-gray-600 mb-8 max-w-3xl">Découvrez des expériences authentiques pour vivre la culture Fon de près</p>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl overflow-hidden shadow-md"
            >
              <div className="relative h-48">
                <Image
                  src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2c/26/cb/da/caption.jpg?w=500&h=300&s=1"
                  alt="Visite culturelle"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Visite guidée d'Abomey</h3>
                <p className="text-gray-600 mb-4">Explorez les palais royaux classés à l'UNESCO avec un guide local</p>
                <button className="text-amber-600 hover:text-amber-800 font-medium flex items-center">
                  En savoir plus <ChevronRight className="ml-1 h-4 w-4" />
                </button>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl overflow-hidden shadow-md"
            >
              <div className="relative h-48">
                <Image
                  src="https://i0.wp.com/originalfoundblog.com/wp-content/uploads/2017/02/img_0149.jpg?fit=3840%2C1665"
                  alt="Atelier artisanal"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Atelier d'appliqués</h3>
                <p className="text-gray-600 mb-4">Apprenez l'art traditionnel des appliqués avec des artisans locaux</p>
                <button className="text-amber-600 hover:text-amber-800 font-medium flex items-center">
                  En savoir plus <ChevronRight className="ml-1 h-4 w-4" />
                </button>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl overflow-hidden shadow-md"
            >
              <div className="relative h-48">
                <Image
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Zangpetos_running.jpg/960px-Zangpetos_running.jpg"
                  alt="Cérémonie traditionnelle"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Cérémonie Zangbeto</h3>
                <p className="text-gray-600 mb-4">Assistez à une cérémonie traditionnelle des gardiens de la nuit</p>
                <button className="text-amber-600 hover:text-amber-800 font-medium flex items-center">
                  En savoir plus <ChevronRight className="ml-1 h-4 w-4" />
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
