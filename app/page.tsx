// "use client";

// import { useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import { Bell, ChevronDown, Globe, Menu, PenSquare } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
// import useEmblaCarousel from 'embla-carousel-react';
// import Link from "next/link";
// import Autoplay from 'embla-carousel-autoplay';
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";
// import { cn } from "@/lib/utils";
// import HeroCarousel from "@/components/carousel";
// import { ArticleButton } from "@/components/ui/articleButton";

// const carouselImages = [
//   {
//     url: "https://images.unsplash.com/photo-1523881374236-dd34f6ac1226?q=80&w=2070",
//     title: "Traditions Béninoises",
//     description: "Découvrez nos riches traditions culturelles"
//   },
//   {
//     url: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?q=80&w=2072",
//     title: "Art et Culture",
//     description: "L'expression artistique au cœur de notre identité"
//   },
//   {
//     url: "https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?q=80&w=2070",
//     title: "Gastronomie",
//     description: "Savourez les délices culinaires du Bénin"
//   }
// ];

// const ethnicGroups = [
//   { name: "Fon", image: "https://images.unsplash.com/photo-1523881374236-dd34f6ac1226?q=80&w=800" },
//   { name: "Yoruba", image: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?q=80&w=800" },
//   { name: "Bariba", image: "https://images.unsplash.com/photo-1523881374236-dd34f6ac1226?q=80&w=800" },
// ];

// const traditions = ["Vaudou", "Rites", "Contes", "Proverbes"];

// const sections = [
//   {
//     id: "ethnic-groups",
//     title: "Ethnies",
//     description: "Découvrez les groupes ethniques du Bénin",
//     image: "https://images.unsplash.com/photo-1523881374236-dd34f6ac1226?q=80&w=2070",
//     content: "Le Bénin abrite de nombreux groupes ethniques dont les Fon, Yoruba, Bariba et bien d'autres..."
//   },
//   {
//     id: "traditions",
//     title: "Traditions",
//     description: "Vivez nos riches cérémonies culturelles",
//     image: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?q=80&w=2072",
//     content: "Des cérémonies Vodun aux mariages traditionnels..."
//   },
//   {
//     id: "gastronomy",
//     title: "Gastronomie",
//     description: "Goûtez aux saveurs du Bénin",
//     image: "https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?q=80&w=2070",
//     content: "Découvrez nos plats traditionnels comme l'Amiwo, le Wagasi..."
//   },
//   {
//     id: "crafts",
//     title: "Artisanat",
//     description: "Découvrez notre artisanat traditionnel",
//     image: "https://images.unsplash.com/photo-1590845947698-8924d7409b56?q=80&w=2071",
//     content: "Explorez notre riche tradition artisanale..."
//   },
//   {
//     id: "festivals",
//     title: "Festivals",
//     description: "Célébrez nos festivals vibrants",
//     image: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?q=80&w=2071",
//     content: "Vivez les festivals colorés et expressions artistiques..."
//   }
// ];

// export default function Home() {
//   const [activeSection, setActiveSection] = useState(0);
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isHistoryExpanded, setIsHistoryExpanded] = useState(false);

//   const [emblaRef] = useEmblaCarousel({ loop: true }, [
//     Autoplay({ delay: 5000, stopOnInteraction: false })
//   ]);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <div className="min-h-screen bg-[#FDF6E3] overflow-x-hidden">
//       <HeroCarousel />

//       {/* History Section with Coat of Arms */}
//       <section className="py-20 px-4 bg-[#FDF6E3]">
//         <div className="max-w-4xl mx-auto text-center">
//           <img
//             src="https://presidence.bj/upload/images/ckeditor/armoiries.png"
//             alt="Armoiries du Bénin"
//             className="w-48 h-48 mx-auto mb-8"
//           />
//           <h2 className="text-3xl font-bold text-[#5C4033] mb-6">Histoire du Bénin</h2>
//           <div className={cn(
//             "text-[#5C4033] transition-all duration-300",
//             isHistoryExpanded ? "" : "line-clamp-4"
//           )}>
//             <p className="mb-4">
//               Le Bénin, anciennement connu sous le nom de Dahomey, est un pays riche d'histoire et de traditions.
//               Berceau du vodun et foyer de puissants royaumes précoloniaux, notamment le royaume du Dahomey,
//               le territoire a joué un rôle crucial dans l'histoire de l'Afrique de l'Ouest.
//             </p>
//             <p className="mb-4">
//               Au XIIe siècle, les Fon établissent le puissant royaume d'Abomey, qui devient plus tard le royaume du Dahomey.
//               Ce royaume se distingue par son organisation militaire sophistiquée, incluant les célèbres Amazones,
//               et son système politique centralisé.
//             </p>
//             <p>
//               Le pays a connu plusieurs périodes importantes : l'ère des royaumes précoloniaux, la période coloniale française,
//               l'indépendance en 1960, et une transition réussie vers la démocratie en 1990, faisant du Bénin
//               l'un des premiers pays africains à opérer une transition démocratique pacifique.
//             </p>
//           </div>
//           <ArticleButton href="/histoire">
//             Lire l'article complet
//           </ArticleButton>


//         </div>
//       </section>

//       {/* Content Sections */}
//       {sections.map((section, index) => (
//         <section
//           key={section.id}
//           id={section.id}
//           className={cn(
//             "py-20 px-4",
//             index % 2 === 0 ? "bg-[#FDF6E3]" : "bg-[#F5E6D3]"
//           )}
//         >
//           <div className="max-w-7xl mx-auto">
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8 }}
//               viewport={{ once: true }}
//               className="grid md:grid-cols-2 gap-12 items-center"
//             >
//               <div className={cn(index % 2 === 0 ? "md:order-1" : "md:order-2")}>
//                 <img
//                   src={section.image}
//                   alt={section.title}
//                   className="rounded-2xl shadow-xl"
//                 />
//               </div>
//               <div className={cn(index % 2 === 0 ? "md:order-2" : "md:order-1")}>
//                 <h2 className="text-4xl font-bold text-[#5C4033] mb-4">{section.title}</h2>
//                 <p className="text-lg text-[#8B4513] mb-6">{section.description}</p>
//                 <p className="text-[#5C4033]">{section.content}</p>
//                 <Button
//                   className="mt-6 bg-[#8B4513] hover:bg-[#5C4033] text-white"
//                 >
//                   En Savoir Plus
//                 </Button>
//               </div>
//             </motion.div>
//           </div>
//         </section>
//       ))}


//     </div>
//   );
// }



// *******************************************************************************************************************************************************************************************************************************************************






// *******************************************************************************************************************************************************************************************************************************************************
















//  before============================================================================================================================================================================================================================================================
// "use client";

// import { motion } from "framer-motion";
// import { ArrowRight, ChevronDown, Globe, Menu, Star, Play, Award, Zap } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import HeroCarousel from "@/components/carousel";
// import { cn } from "@/lib/utils";

// const FEATURES = [
//   {
//     icon: <Play className="text-[#E67E22]" />,
//     title: "Expériences immersives",
//     description: "Vidéos 360°, réalité augmentée et visites virtuelles"
//   },
//   {
//     icon: <Award className="text-[#E67E22]" />,
//     title: "Contenus certifiés",
//     description: "Validés par des historiens et experts locaux"
//   },
//   {
//     icon: <Zap className="text-[#E67E22]" />,
//     title: "Découverte intelligente",
//     description: "Algorithmes qui s'adaptent à vos centres d'intérêt"
//   }
// ];

// const TESTIMONIALS = [
//   {
//     quote: "Cette application a changé ma perception de notre culture. Je redécouvre mes racines avec fierté !",
//     author: "Koffi, 28 ans, Cotonou"
//   },
//   {
//     quote: "Enfin une plateforme qui rend notre histoire accessible et passionnante pour les jeunes générations.",
//     author: "Amina, professeure d'histoire"
//   }
// ];

// export default function Home() {
//   return (
//     <div className="min-h-screen bg-white overflow-x-hidden">
//       {/* Hero avec vidéo background */}
//       <section className="relative h-screen flex items-center justify-center text-center px-4 overflow-hidden bg-black">
//         <div className="absolute inset-0 bg-black/40 z-10" />
//         <div className="absolute inset-0 w-full h-full">
//   <iframe 
//     src="https://www.youtube.com/embed/Ve-W_EYHqUg?autoplay=1&loop=1&mute=1&playlist=Ve-W_EYHqUg&controls=0&modestbranding=1"
//     className="w-full h-full object-cover"
//     allow="autoplay; encrypted-media"
//     allowFullScreen
//   />

// </div>

//         <motion.div 
//           className="relative z-20 max-w-4xl mx-auto text-white"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           <h1 className="text-5xl md:text-7xl font-bold mb-6">
//             <span className="text-[#E67E22]">Culture Bénin</span><br/>Réinventée
//           </h1>
//           <p className="text-xl md:text-2xl mb-8">
//             La première plateforme qui transforme votre curiosité en passion pour notre patrimoine
//           </p>
//           <Button className="bg-[#E67E22] hover:bg-[#D35400] text-white text-lg px-8 py-6 gap-2">
//             Explorer maintenant
//             <ArrowRight className="h-5 w-5" />
//           </Button>
//         </motion.div>
//       </section>

//       {/* Section marqueurs culturels */}
//       <section className="py-20 px-4 bg-gradient-to-b from-white to-[#FEF5E7]">
//         <div className="max-w-6xl mx-auto">
//           <motion.div
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             viewport={{ once: true }}
//             className="text-center mb-16"
//           >
//             <h2 className="text-3xl md:text-4xl font-bold text-[#2C3E50] mb-4">
//               Plongez au cœur des <span className="text-[#E67E22]">trésors</span> béninois
//             </h2>
//             <p className="text-xl text-[#7F8C8D] max-w-3xl mx-auto">
//               Une exploration interactive sans précédent de notre héritage culturel
//             </p>
//           </motion.div>

//           <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
//             {["Vodun", "Gastronomie", "Art royal", "Patrimoine"].map((item, index) => (
//               <motion.div
//                 key={index}
//                 whileHover={{ y: -5 }}
//                 className="bg-white p-6 rounded-xl shadow-md border border-[#EDE7E1] text-center"
//               >
//                 <div className="bg-[#FEF5E7] w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
//                   <Star className="text-[#E67E22] h-5 w-5" />
//                 </div>
//                 <h3 className="font-bold text-[#2C3E50]">{item}</h3>
//               </motion.div>
//             ))}
//           </div>

//           <div className="relative h-96 rounded-3xl overflow-hidden shadow-2xl">
//             <img
//               src="https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?q=80&w=2071"
//               alt="Culture béninoise"
//               className="absolute inset-0 w-full h-full object-cover"
//             />
//             <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-8">
//               <div>
//                 <h3 className="text-white text-2xl font-bold mb-2">Festivals vivants</h3>
//                 <p className="text-white/90">Revivez les plus grands événements culturels comme si vous y étiez</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Section features */}
//       <section className="py-20 px-4 bg-[#2C3E50] text-white">
//         <div className="max-w-6xl mx-auto">
//           <motion.div
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             viewport={{ once: true }}
//           >
//             <div className="grid md:grid-cols-2 gap-12 items-center">
//               <div>
//                 <h2 className="text-3xl md:text-4xl font-bold mb-6">
//                   Une <span className="text-[#E67E22]">expérience</span> unique
//                 </h2>
//                 <p className="text-xl text-[#BDC3C7] mb-8">
//                   Nous combinons technologie et authenticité pour vous offrir un voyage culturel inoubliable
//                 </p>

//                 <div className="space-y-8">
//                   {FEATURES.map((feature, index) => (
//                     <motion.div 
//                       key={index}
//                       whileHover={{ x: 5 }}
//                       className="flex gap-4 bg-[#34495E] p-4 rounded-lg"
//                     >
//                       <div className="bg-[#E67E22]/10 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
//                         {feature.icon}
//                       </div>
//                       <div>
//                         <h3 className="text-xl font-bold">{feature.title}</h3>
//                         <p className="text-[#BDC3C7]">{feature.description}</p>
//                       </div>
//                     </motion.div>
//                   ))}
//                 </div>
//               </div>

//               <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
//                 <img
//                   src="https://images.unsplash.com/photo-1523881374236-dd34f6ac1226?q=80&w=2070"
//                   alt="Technologie culturelle"
//                   className="absolute inset-0 w-full h-full object-cover"
//                 />
//                 <div className="absolute inset-0 flex items-center justify-center">
//                   <button className="bg-[#E67E22] hover:bg-[#D35400] text-white rounded-full w-16 h-16 flex items-center justify-center shadow-lg">
//                     <Play className="h-8 w-8" />
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* Section témoignages */}
//       <section className="py-20 px-4 bg-[#FEF5E7]">
//         <div className="max-w-4xl mx-auto text-center">
//           <motion.div
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             viewport={{ once: true }}
//           >
//             <h2 className="text-3xl md:text-4xl font-bold text-[#2C3E50] mb-12">
//               Ils l'ont <span className="text-[#E67E22]">adopté</span>
//             </h2>

//             <div className="grid md:grid-cols-2 gap-8">
//               {TESTIMONIALS.map((testimonial, index) => (
//                 <motion.div
//                   key={index}
//                   whileHover={{ scale: 1.02 }}
//                   className="bg-white p-8 rounded-xl shadow-md border border-[#EDE7E1] text-left"
//                 >
//                   <div className="text-[#E67E22] text-5xl mb-4">"</div>
//                   <p className="text-[#2C3E50] text-lg mb-4">{testimonial.quote}</p>
//                   <p className="text-[#E67E22] font-medium">{testimonial.author}</p>
//                 </motion.div>
//               ))}
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* CTA final */}
//       <section className="py-20 px-4 bg-gradient-to-r from-[#E67E22] to-[#D35400] text-white">
//         <div className="max-w-4xl mx-auto text-center">
//           <motion.div
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             viewport={{ once: true }}
//           >
//             <h2 className="text-3xl md:text-4xl font-bold mb-6">
//               Prêt pour votre <span className="text-[#2C3E50]">renaissance</span> culturelle ?
//             </h2>
//             <p className="text-xl mb-8 max-w-2xl mx-auto">
//               Téléchargez l'application et embarquez pour un voyage au cœur de l'identité béninoise
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <Button className="bg-[#2C3E50] hover:bg-[#1A252F] text-white text-lg px-8 py-6 gap-2">
//                 <img src="/assets/app-store.svg" alt="App Store" className="h-8" />
//               </Button>
//               <Button className="bg-[#2C3E50] hover:bg-[#1A252F] text-white text-lg px-8 py-6 gap-2">
//                 <img src="/assets/google-play.svg" alt="Google Play" className="h-8" />
//               </Button>
//             </div>
//           </motion.div>
//         </div>
//       </section>
//     </div>
//   );
// }







// Réorganisation de la page d'accueil Ayizɔn avec une structure plus narrative et immersive
// Page d'accueil modifiée sans section témoignages, remplacée par une section "Objets culturels à collectionner"
"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import HeroCarousel from "@/components/carousel";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";


export default function Home() {

  const popularThemes = [
    {
      title: "Aventure",
      description: "Exploration des sites historiques",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQH2l--d9wJd_rRXfyNWNyKhPSrYqRPoj1Q5A&s" // Remplacez par votre URL
    },
    {
      title: "Spiritualité",
      description: "Le Vodun et ses rites sacrés",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr2FH9I9O-YKT7K1F4z-PPcqJ9pNYxMHyyWQ&s"
    },
    {
      title: "Artisanat",
      description: "Rencontre avec les artisans locaux",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzg5G3R9_urU6lcjtLWhb9w3ZVw901CmlEdg&s"
    },
    {
      title: "Gastronomie",
      description: "Saveurs traditionnelles béninoises",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ7Gn3WPIym4AheHk7P5JXnYZkFnp8_wTfwg&s"
    },
    {
      title: "Royautés",
      description: "Palais et royaumes ancestraux",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG1U3C3mw52ONB3d6MUOHgi3ly18IAx8T5UA&s"
    },
  ];

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">

      {/* Header */}

      <section className="relative h-screen flex items-center justify-center text-center px-4 overflow-hidden bg-black">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div className="absolute inset-0 w-full h-full">
          <img
            src="https://www.francetvinfo.fr/pictures/ELtaOA2aKITDkAEMkCi5aCyanPA/1200x675/2020/08/11/phpvFCXID.jpg"
            alt="Armoiries du Bénin"
            className="w-full h-full object-cover"
          />
        </div>

        <motion.div
          className="relative z-20 max-w-4xl mx-auto text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-tight">
            Redécouvrez votre <span className="text-[#E67E22]">héritage</span>
          </h1>
          <p className="text-xl md:text-2xl mb-6">
            Vivez la culture béninoise comme jamais auparavant — interactive, immersive et personnelle.
          </p>
          <Button className="bg-[#E67E22] hover:bg-[#D35400] text-white text-lg px-8 py-6 gap-2">
            Commencer l'exploration
            <ArrowRight className="h-5 w-5" />
          </Button>
        </motion.div>
      </section>

      {/* Caroussel sous header */}
      
      <section className="mb-16">
  <motion.div
    className="absolute -bottom-25 left-0 right-0 z-30"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: -80 }}
    transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
  >
    <div className="max-w-6xl mx-auto px-4 relative"> {/* Ajout de relative pour positionner les boutons */}
      <Carousel className="w-full relative">
        <CarouselContent className="-ml-1">
          {popularThemes.map((theme, index) => (
            <CarouselItem key={index} className="pl-3 basis-1/2 md:basis-1/3 lg:basis-1/4 aspect-[4/4] mt-4">
              <motion.div
                whileHover={{
                  scale: 1.05,
                  y: -5,
                  boxShadow: "0 15px 15px rgba(0,0,0,0.3)"
                }}
                className="bg-white/15 backdrop-blur-md rounded-xl border-2 border-white/30 overflow-hidden cursor-pointer hover:bg-white/25 transition-all h-full relative"
              >
                <div className="relative overflow-hidden" style={{ height: "200px" }}>
                  <img
                    src={theme.image}
                    alt={theme.title}
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                <div className="p-4 bg-gradient-to-t from-black/80 to-transparent absolute bottom-0 w-full">
                  <h3 className="text-lg font-bold text-white drop-shadow-md">{theme.title}</h3>
                  <p className="text-white/80 mt-1 text-sm drop-shadow-sm">{theme.description}</p>
                </div>
              </motion.div>
            </CarouselItem>
          ))}
        </CarouselContent>
        
        {/* Boutons de navigation */}
        <CarouselPrevious 
          className="absolute left-2 top-1/2 -translate-y-1/2 z-10 h-10 w-10 rounded-full bg-white/30 backdrop-blur-md border-none text-white hover:bg-white/40"
          variant="ghost"
        />
        <CarouselNext 
          className="absolute right-2 top-1/2 -translate-y-1/2 z-10 h-10 w-10 rounded-full bg-white/30 backdrop-blur-md border-none text-white hover:bg-white/40"
          variant="ghost"
        />
      </Carousel>
    </div>
  </motion.div>
</section>


      {/* section engagement culturel */}
      
      <div className="relative z-20 pt-[120px] md:pt-[150px]">
        <section className="py-16 px-4 bg-[#FEF5E7]">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-[#2C3E50] mb-12 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Nos Engagements Culturels
            </motion.h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
              ].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="bg-white p-6 rounded-xl shadow-sm border border-[#E67E22]/20"
                >
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold text-[#2C3E50] mb-2">{item.title}</h3>
                  <p className="text-[#7F8C8D]">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>





        {/* Section Créateur de Légende */}
        <section className="py-20 px-4 bg-[#2C3E50] text-white text-center ">
          <div className="max-w-3xl mx-auto">
            <motion.h2 className="text-3xl md:text-4xl font-bold mb-4">
              Crée ta propre <span className="text-[#E67E22]">légende</span>
            </motion.h2>
            <p className="text-xl text-[#BDC3C7] mb-8">
              Entrez votre nom et votre origine pour générer une histoire inspirée des épopées béninoises
            </p>
            <Button className="bg-[#E67E22] hover:bg-[#D35400] text-white text-lg px-8 py-4">
              Créer mon histoire
            </Button>
          </div>
        </section>

      </div>


      {/* Nouvelle section : Objets culturels à collectionner */}
      <section className="py-20 px-4 bg-white text-center">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-[#2C3E50] mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Collectionnez des <span className="text-[#E67E22]">trésors numériques</span>
          </motion.h2>
          <p className="text-xl text-[#7F8C8D] mb-12">
            Découvrez des artefacts culturels rares, transformés en NFT à collectionner ou à offrir.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {["Masque royal", "Tissu Kente", "Tambour Vodun"].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-[#FEF5E7] p-6 rounded-xl shadow-md text-center"
              >
                <img src={`https://jeanjacquesmandel.com/wp-content/uploads/2020/05/GUELEDE-BENIN-HD-9333.jpg`} alt={item} className="w-full h-60 object-cover rounded-lg mb-4" />
                <h3 className="text-xl font-semibold text-[#2C3E50]">{item}</h3>
                <p className="text-[#7F8C8D] mt-2">NFT exclusif - édition limitée</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="py-20 px-4 bg-gradient-to-r from-[#E67E22] to-[#D35400] text-white text-center">
        <div className="max-w-4xl mx-auto">
          <motion.h2 className="text-3xl md:text-4xl font-bold mb-6">
            Prêt à devenir <span className="text-[#2C3E50]">héritier culturel</span> ?
          </motion.h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Téléchargez l'app et transformez votre curiosité en engagement culturel profond
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-[#2C3E50] hover:bg-[#1A252F] text-white text-lg px-8 py-6">
              <img src="/assets/app-store.svg" alt="App Store" className="h-8" />
            </Button>
            <Button className="bg-[#2C3E50] hover:bg-[#1A252F] text-white text-lg px-8 py-6">
              <img src="/assets/google-play.svg" alt="Google Play" className="h-8" />
            </Button>
          </div>
        </div>
      </section>

    </div>
  );
}
