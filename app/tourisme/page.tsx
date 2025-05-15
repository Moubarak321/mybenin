// "use client";
// import { useState } from "react";
// import { Filter, Search, MapPin, Calendar, Users } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { motion } from "framer-motion";
// import { useRouter } from 'next/navigation';

// export default function TourismPage() {
//   const [activeFilter, setActiveFilter] = useState("Tous");
//   const [searchQuery, setSearchQuery] = useState("");

//   // Données des circuits
//   const circuits = [
//     {
//       id: 1,
//       title: "Le grand voyage nord-sud du Bénin",
//       type: "AVENTURE, EXPLORATION ET EXPÉDITION",
//       price: 1200,
//       duration: 15,
//       theme: "Aventure",
//       country: "BÉNIN",
//       image: "https://www.gouv.bj/upload/images/articles/ckeditor/Tangui%C3%A9ta(1).jpg"
//     },
//     {
//       id: 2,
//       title: "Safari dans tous ses états",
//       type: "FAUNE ET FLORE",
//       price: 1350,
//       duration: 11,
//       theme: "Nature",
//       country: "BÉNIN",
//       image: "https://www.gouv.bj/upload/images/articles/ckeditor/Tangui%C3%A9ta(1).jpg"
//     },
//     {
//       id: 3,
//       title: "Voyage en terres ethniques",
//       type: "MINORITÉ ETHNIQUE",
//       price: 1100,
//       duration: 15,
//       theme: "Culture",
//       country: "BÉNIN",
//       image: "https://www.gouv.bj/upload/images/articles/ckeditor/Tangui%C3%A9ta(1).jpg"
//     },
//     {
//       id: 4,
//       title: "Royaumes et spiritualité",
//       type: "SPIRITUALITÉ",
//       price: 950,
//       duration: 10,
//       theme: "Histoire",
//       country: "BÉNIN",
//       image: "https://www.gouv.bj/upload/images/articles/ckeditor/Tangui%C3%A9ta(1).jpg"
//     }
//   ];

//   // Filtres disponibles
//   const filters = [
//     "Tous",
//     "Culture",
//     "Minorité ethnique", 
//     "Histoire",
//     "Aventure",
//     "Nature",
//     "Spiritualité"
//   ];

//   const router = useRouter();

//   // Filtrer les circuits
//   const filteredCircuits = circuits.filter(circuit => {
//     const matchesFilter = activeFilter === "Tous" || circuit.theme === activeFilter;
//     const matchesSearch = circuit.title.toLowerCase().includes(searchQuery.toLowerCase());
//     return matchesFilter && matchesSearch;
//   });

//   return (
//     <div className="min-h-screen bg-[#F9FAFB]">
//       {/* Hero Section */}
//       <section className="relative h-96 bg-[url('https://expresstourisme.com/image/news/Tata-somba-Benin-tourisme-destination-Natitingou-672d011a8b4e7.webp')] bg-cover bg-center">
//   <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/30"></div>
//   <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4">
//     <motion.h1 
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.7 }}
//       className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 mt-12 drop-shadow-lg"
//     >
//       Circuits Touristiques au Bénin
//     </motion.h1>
//     <motion.p
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ delay: 0.3, duration: 0.7 }}
//       className="text-xl md:text-2xl text-white max-w-2xl leading-relaxed drop-shadow-md"
//     >
//       Découvrez nos séjours personnalisables pour une expérience authentique
//     </motion.p>
//     <motion.div
//       initial={{ opacity: 0, scale: 0.9 }}
//       animate={{ opacity: 1, scale: 1 }}
//       transition={{ delay: 0.6, type: "spring" }}
//       className="mt-8"
//     >
//       <Button className="bg-[#E67E22] hover:bg-[#D35400] text-white text-lg px-8 py-4 shadow-xl animate-pulse">
//         Explorer les circuits
//       </Button>
//     </motion.div>
//   </div>
// </section>

//       {/* Filtres et Recherche */}
//       <section className="py-8 px-4 md:px-8 bg-white shadow-sm">
//         <div className="max-w-7xl mx-auto">
//           <div className="flex flex-col md:flex-row gap-4 md:gap-8">
//             {/* Barre de recherche */}
//             <div className="relative flex-1">
//               <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
//               <input
//                 type="text"
//                 placeholder="Rechercher un circuit..."
//                 className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E67E22]"
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//               />
//             </div>

//             {/* Filtres */}
//             <div className="flex overflow-x-auto pb-2 gap-2 md:gap-3">
//               {filters.map((filter) => (
//                 <button
//                   key={filter}
//                   onClick={() => setActiveFilter(filter)}
//                   className={`px-4 py-2 whitespace-nowrap rounded-full text-sm font-medium transition-colors ${
//                     activeFilter === filter
//                       ? "bg-[#E67E22] text-white"
//                       : "bg-gray-100 text-gray-700 hover:bg-gray-200"
//                   }`}
//                 >
//                   {filter}
//                 </button>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Résultats */}
//       <section className="py-12 px-4 md:px-8">
//         <div className="max-w-7xl mx-auto">
//           <div className="flex justify-between items-center mb-8">
//             <h2 className="text-2xl font-semibold text-gray-800">
//               {filteredCircuits.length} circuits disponibles
//             </h2>
//             <div className="flex items-center gap-2 text-sm text-gray-500">
//               <Filter className="w-4 h-4" />
//               <span>Trier par :</span>
//               <select className="border-none bg-transparent focus:ring-0">
//                 <option>Prix (croissant)</option>
//                 <option>Prix (décroissant)</option>
//                 <option>Durée</option>
//                 <option>Popularité</option>
//               </select>
//             </div>
//           </div>

//           {/* Liste des circuits */}
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {filteredCircuits.map((circuit) => (
//               <div key={circuit.id} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
//                 <div className="h-48 overflow-hidden">
//                   <img
//                     src={circuit.image}
//                     alt={circuit.title}
//                     className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
//                   />
//                 </div>
//                 <div className="p-6">
//                   <div className="flex justify-between items-start mb-2">
//                     <span className="text-sm font-semibold text-[#E67E22]">
//                       {circuit.type}
//                     </span>
//                     <span className="text-xs text-gray-500">
//                       {circuit.duration} jours • {circuit.country}
//                     </span>
//                   </div>
//                   <h3 className="text-xl font-bold text-gray-800 mb-3">
//                     {circuit.title}
//                   </h3>
//                   <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
//                     <div className="flex items-center gap-1">
//                       <MapPin className="w-4 h-4" />
//                       <span>10 sites visités</span>
//                     </div>
//                     <div className="flex items-center gap-1">
//                       <Users className="w-4 h-4" />
//                       <span>2-12 personnes</span>
//                     </div>
//                   </div>
//                   <div className="flex justify-between items-center">
//                     <span className="text-lg font-bold text-[#E67E22]">
//                       À partir de {circuit.price}€
//                     </span>
//                     <Button className="bg-[#E67E22] hover:bg-[#D35400]"  onClick={() => router.push('/tourisme/circuit')}>
//                       Détails
//                     </Button>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Pagination */}
//           <div className="flex justify-center mt-12">
//             <div className="flex gap-2">
//               <Button variant="outline" className="border-gray-300">Précédent</Button>
//               <Button className="bg-[#E67E22] hover:bg-[#D35400]">1</Button>
//               <Button variant="outline" className="border-gray-300">2</Button>
//               <Button variant="outline" className="border-gray-300">3</Button>
//               <Button variant="outline" className="border-gray-300">Suivant</Button>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }





// *****************************************************************************************************************************
// lovable
// *****************************************************************************************************************************

// "use client";
// import React, { useState } from "react";
// import { Button } from "@/components/ui/button";
// import { ChevronLeft, ChevronRight, Filter, Search, MapPin, Calendar, Users, ArrowRight } from "lucide-react";
// import { useToast } from "@/hooks/use-toast";
// import { cn } from "@/lib/utils";

// const Index = () => {
//   const [activeFilter, setActiveFilter] = useState("Tous");
//   const [searchQuery, setSearchQuery] = useState("");
//   const [currentPage, setCurrentPage] = useState(1);
//   const { toast } = useToast();

//   // Données des circuits
//   const circuits = [
//     {
//       id: 1,
//       title: "Le grand voyage nord-sud du Bénin",
//       type: "AVENTURE, EXPLORATION ET EXPÉDITION",
//       price: 1200,
//       duration: 15,
//       theme: "Aventure",
//       country: "BÉNIN",
//       image: "https://www.gouv.bj/upload/images/articles/ckeditor/Tangui%C3%A9ta(1).jpg"
//     },
//     {
//       id: 2,
//       title: "Safari dans tous ses états",
//       type: "FAUNE ET FLORE",
//       price: 1350,
//       duration: 11,
//       theme: "Nature",
//       country: "BÉNIN",
//       image: "https://www.gouv.bj/upload/images/articles/ckeditor/Tangui%C3%A9ta(1).jpg"
//     },
//     {
//       id: 3,
//       title: "Voyage en terres ethniques",
//       type: "MINORITÉ ETHNIQUE",
//       price: 1100,
//       duration: 15,
//       theme: "Culture",
//       country: "BÉNIN",
//       image: "https://www.gouv.bj/upload/images/articles/ckeditor/Tangui%C3%A9ta(1).jpg"
//     },
//     {
//       id: 4,
//       title: "Royaumes et spiritualité",
//       type: "SPIRITUALITÉ",
//       price: 950,
//       duration: 10,
//       theme: "Histoire",
//       country: "BÉNIN",
//       image: "https://www.gouv.bj/upload/images/articles/ckeditor/Tangui%C3%A9ta(1).jpg"
//     }
//   ];

//   // Filtres disponibles
//   const filters = [
//     "Tous",
//     "Culture",
//     "Minorité ethnique", 
//     "Histoire",
//     "Aventure",
//     "Nature",
//     "Spiritualité"
//   ];

//   // Filtrer les circuits
//   const filteredCircuits = circuits.filter(circuit => {
//     const matchesFilter = activeFilter === "Tous" || circuit.theme === activeFilter;
//     const matchesSearch = circuit.title.toLowerCase().includes(searchQuery.toLowerCase());
//     return matchesFilter && matchesSearch;
//   });

//   // Handle tour click
//   const handleTourClick = (tourId: number) => {
//     toast({
//       title: "Circuit sélectionné",
//       description: `Vous avez sélectionné le circuit #${tourId}. Redirection en cours...`,
//       duration: 3000,
//     });
//     // In a real app, we'd navigate to the tour details page
//     console.log(`Navigate to tour ${tourId}`);
//   };

//   // Handle filter change
//   const handleFilterChange = (filter: string) => {
//     setActiveFilter(filter);
//     setCurrentPage(1); // Reset to first page when changing filters
//   };

//   // Handle search change
//   const handleSearchChange = (query: string) => {
//     setSearchQuery(query);
//     setCurrentPage(1); // Reset to first page when searching
//   };

//   return (
//     <div className="min-h-screen bg-benin-light">
//       {/* Hero Section */}
//       <section className="relative h-[70vh] overflow-hidden">
//         {/* Background video/image with parallax effect */}
//         <div className="absolute inset-0">
//           <img
//             src="https://expresstourisme.com/image/news/Tata-somba-Benin-tourisme-destination-Natitingou-672d011a8b4e7.webp"
//             alt="Benin Tourism Scenic View"
//             className="w-full h-full object-cover transform scale-110 animate-float"
//           />
//           <div className="absolute inset-0 bg-gradient-to-t from-benin-accent/90 via-benin-accent/60 to-transparent"></div>
//         </div>

//         {/* Content */}
//         <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4 max-w-4xl mx-auto">
//           <span className="inline-block px-4 py-1.5 mb-5 rounded-full bg-benin-primary/20 backdrop-blur-sm text-white text-sm font-medium animate-fade-in">
//             DESTINATION BÉNIN - TERRE DE CULTURE
//           </span>

//           <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg animate-fade-in">
//             Explorez le Cœur de l'Afrique de l'Ouest
//           </h1>

//           <p className="text-lg sm:text-xl text-white/90 max-w-2xl leading-relaxed drop-shadow-md mb-8 animate-fade-in">
//             Découvrez nos séjours personnalisables pour une immersion authentique dans les traditions, 
//             les paysages et l'histoire fascinante du Bénin
//           </p>

//           <div className="flex flex-col sm:flex-row gap-4 animate-fade-in">
//             <Button className="bg-benin-primary hover:bg-benin-secondary text-white text-base px-6 py-6 rounded-xl shadow-xl font-medium transition-all duration-300 hover:scale-105">
//               Explorer les circuits
//               <ArrowRight className="ml-2 h-4 w-4" />
//             </Button>

//             <Button variant="outline" className="border-white/40 text-white hover:bg-white/10 text-base px-6 py-6 rounded-xl backdrop-blur-sm">
//               Voyage sur mesure
//             </Button>
//           </div>
//         </div>

//         {/* Decorative elements */}
//         <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
//       </section>

//       {/* Filtres et Recherche */}
//       <section className="py-8 px-4 md:px-8 bg-white sticky top-0 z-20 shadow-sm">
//         <div className="max-w-7xl mx-auto">
//           {/* Sticky header with filter count */}
//           <div className="flex items-center justify-between mb-5">
//             <h2 className="text-xl font-medium text-benin-accent">
//               Découvrez nos circuits
//             </h2>
//             <div className="flex items-center gap-2 text-sm text-benin-accent/70">
//               <Filter className="w-4 h-4" />
//               <span>Trier par :</span>
//               <select className="border-none bg-transparent focus:ring-0 text-benin-accent font-medium cursor-pointer">
//                 <option>Prix (croissant)</option>
//                 <option>Prix (décroissant)</option>
//                 <option>Durée</option>
//                 <option>Popularité</option>
//               </select>
//             </div>
//           </div>

//           <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 items-start lg:items-center">
//             {/* Barre de recherche */}
//             <div className="relative flex-1 w-full">
//               <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-benin-accent/60" />
//               <input
//                 type="text"
//                 placeholder="Rechercher un circuit, une région, une activité..."
//                 className="w-full pl-12 pr-4 py-3.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-benin-primary focus:border-transparent transition-all duration-300"
//                 value={searchQuery}
//                 onChange={(e) => handleSearchChange(e.target.value)}
//               />
//             </div>

//             {/* Filtres */}
//             <div className="flex overflow-x-auto pb-2 gap-2 md:gap-3 w-full lg:w-auto">
//               {filters.map((filter) => (
//                 <button
//                   key={filter}
//                   onClick={() => handleFilterChange(filter)}
//                   className={`px-5 py-3 whitespace-nowrap rounded-xl text-sm font-medium transition-all duration-300 ${
//                     activeFilter === filter
//                       ? "bg-benin-primary text-white shadow-md hover:shadow-lg"
//                       : "bg-benin-muted text-benin-accent hover:bg-benin-light"
//                   }`}
//                 >
//                   {filter}
//                 </button>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Résultats */}
//       <section className="py-12 px-4 md:px-8">
//         <div className="max-w-7xl mx-auto">
//           <div className="flex justify-between items-center mb-8">
//             <h2 className="text-2xl font-bold text-benin-accent">
//               <span className="text-benin-primary">{filteredCircuits.length}</span> {filteredCircuits.length > 1 ? 'circuits disponibles' : 'circuit disponible'}
//             </h2>
//           </div>

//           {/* Liste des circuits */}
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {filteredCircuits.length === 0 ? (
//               <div className="col-span-full py-20 text-center">
//                 <h3 className="text-xl font-medium text-benin-accent/70">
//                   Aucun circuit ne correspond à votre recherche.
//                 </h3>
//                 <p className="text-benin-accent/60 mt-2">
//                   Essayez de modifier vos filtres ou votre recherche.
//                 </p>
//               </div>
//             ) : (
//               filteredCircuits.map((tour, index) => (
//                 <div 
//                   key={tour.id}
//                   className={cn(
//                     "group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 flex flex-col h-full animate-fade-in",
//                   )}
//                   style={{ animationDelay: `${index * 100}ms` }}
//                 >
//                   {/* Image container with overlay */}
//                   <div className="relative h-56 overflow-hidden">
//                     <img
//                       src={tour.image}
//                       alt={tour.title}
//                       className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-t from-benin-accent/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

//                     {/* Price tag */}
//                     <div className="absolute bottom-4 left-4 bg-white px-3 py-1.5 rounded-lg shadow-lg">
//                       <span className="text-benin-primary font-bold">À partir de {tour.price}€</span>
//                     </div>

//                     {/* Theme badge */}
//                     <div className="absolute top-4 right-4 bg-benin-primary/80 backdrop-blur-sm px-3 py-1 rounded-full text-white text-xs font-medium">
//                       {tour.theme}
//                     </div>
//                   </div>

//                   {/* Content */}
//                   <div className="p-6 flex flex-col flex-grow">
//                     <div className="flex justify-between items-start mb-2">
//                       <span className="text-xs font-medium uppercase tracking-wider text-benin-primary">
//                         {tour.type}
//                       </span>
//                       <div className="flex items-center gap-1 text-xs text-benin-accent/70">
//                         <Calendar className="w-3.5 h-3.5" />
//                         <span>{tour.duration} jours</span>
//                       </div>
//                     </div>

//                     <h3 className="text-xl font-bold text-benin-accent mb-4 group-hover:text-benin-primary transition-colors duration-300">
//                       {tour.title}
//                     </h3>

//                     <div className="flex items-center gap-4 text-sm text-benin-accent/80 mb-6">
//                       <div className="flex items-center gap-1">
//                         <MapPin className="w-4 h-4" />
//                         <span>10 sites visités</span>
//                       </div>
//                       <div className="flex items-center gap-1">
//                         <Users className="w-4 h-4" />
//                         <span>2-12 personnes</span>
//                       </div>
//                     </div>

//                     <div className="mt-auto pt-4 border-t border-gray-100">
//                       <Button 
//                         onClick={() => handleTourClick(tour.id)}
//                         className="w-full bg-white hover:bg-benin-primary text-benin-primary hover:text-white border-2 border-benin-primary rounded-xl py-6 transition-all duration-300"
//                       >
//                         Découvrir ce circuit
//                       </Button>
//                     </div>
//                   </div>
//                 </div>
//               ))
//             )}
//           </div>

//           {/* Pagination */}
//           {filteredCircuits.length > 0 && (
//             <div className="mt-16">
//               <div className="flex justify-center items-center gap-2">
//                 {/* Previous button */}
//                 <Button
//                   variant="outline"
//                   size="icon"
//                   className={cn(
//                     "border-gray-200 text-benin-accent hover:text-benin-primary hover:border-benin-primary transition-colors",
//                     currentPage === 1 && "opacity-50 cursor-not-allowed"
//                   )}
//                   onClick={() => currentPage > 1 && setCurrentPage(currentPage - 1)}
//                   disabled={currentPage === 1}
//                 >
//                   <ChevronLeft className="h-4 w-4" />
//                 </Button>

//                 {/* Page numbers */}
//                 <Button
//                   variant="default"
//                   className="bg-benin-primary hover:bg-benin-secondary text-white transition-colors"
//                 >
//                   1
//                 </Button>

//                 {/* Next button */}
//                 <Button
//                   variant="outline"
//                   size="icon"
//                   className={cn(
//                     "border-gray-200 text-benin-accent hover:text-benin-primary hover:border-benin-primary transition-colors",
//                     currentPage === 1 && "opacity-50 cursor-not-allowed"
//                   )}
//                   onClick={() => setCurrentPage(currentPage + 1)}
//                   disabled={currentPage === 1}
//                 >
//                   <ChevronRight className="h-4 w-4" />
//                 </Button>
//               </div>
//             </div>
//           )}

//           {/* Information Section */}
//           <div className="mt-20 bg-white rounded-2xl p-8 shadow-sm">
//             <div className="max-w-3xl mx-auto text-center">
//               <h2 className="text-2xl md:text-3xl font-bold text-benin-accent mb-4">
//                 Pourquoi voyager au Bénin?
//               </h2>
//               <p className="text-benin-accent/80 leading-relaxed mb-6">
//                 Le Bénin, berceau du vodoun et terre d'accueil légendaire, vous offre 
//                 une mosaïque culturelle incomparable et des paysages d'une rare diversité. 
//                 Nos circuits sont conçus pour vous faire vivre une expérience authentique 
//                 et respectueuse des communautés locales.
//               </p>
//               <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
//                 <div className="p-4 rounded-xl bg-benin-light">
//                   <div className="w-12 h-12 bg-benin-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
//                     <MapPin className="h-6 w-6 text-benin-primary" />
//                   </div>
//                   <h3 className="font-bold text-benin-accent mb-2">Sites exceptionnels</h3>
//                   <p className="text-sm text-benin-accent/70">Des paysages variés, des villages traditionnels aux parcs nationaux</p>
//                 </div>
//                 <div className="p-4 rounded-xl bg-benin-light">
//                   <div className="w-12 h-12 bg-benin-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
//                     <Users className="h-6 w-6 text-benin-primary" />
//                   </div>
//                   <h3 className="font-bold text-benin-accent mb-2">Rencontres authentiques</h3>
//                   <p className="text-sm text-benin-accent/70">Des échanges privilégiés avec les communautés locales</p>
//                 </div>
//                 <div className="p-4 rounded-xl bg-benin-light">
//                   <div className="w-12 h-12 bg-benin-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
//                     <Calendar className="h-6 w-6 text-benin-primary" />
//                   </div>
//                   <h3 className="font-bold text-benin-accent mb-2">Voyages sur mesure</h3>
//                   <p className="text-sm text-benin-accent/70">Des circuits adaptés à vos envies et à votre rythme</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="bg-benin-accent text-white py-10 px-4">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center md:text-left">
//             <h3 className="text-xl font-bold mb-2">Circuits Touristiques au Bénin</h3>
//             <p className="text-white/70 text-sm">
//               Explorez la richesse culturelle et naturelle du Bénin avec nos circuits personnalisés
//             </p>
//             <div className="mt-6 text-xs text-white/50">
//               © {new Date().getFullYear()} Tourisme Bénin - Tous droits réservés
//             </div>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default Index;



// ============================================================================================================================================
// claude
// ============================================================================================================================================

"use client";
import { useState, useEffect, useRef } from "react";
import { Filter, Search, MapPin, Calendar, Users, ChevronLeft, ChevronRight, Heart, Star, ArrowRight, Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from 'next/navigation';

export default function TourismPage() {
  const [activeFilter, setActiveFilter] = useState("Tous");
  const [searchQuery, setSearchQuery] = useState("");
  type Circuit = {
    id: number;
    title: string;
    type: string;
    price: number;
    duration: number;
    theme: string;
    country: string;
    image: string;
    rating: number;
    reviews: number;
    featured: boolean;
    description: string;
  };

  const [visibleCircuits, setVisibleCircuits] = useState<Circuit[]>([]);
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [favorites, setFavorites] = useState<number[]>([]);
  const [activeCountry, setActiveCountry] = useState("Tous");
  const [activeSort, setActiveSort] = useState("recommended");

  const featuredCircuitRef = useRef(null);
  const router = useRouter();

  // Données des circuits
  const circuits = [
    {
      id: 1,
      title: "Le grand voyage nord-sud du Bénin",
      type: "AVENTURE, EXPLORATION ET EXPÉDITION",
      price: 1200,
      duration: 15,
      theme: "Aventure",
      country: "BÉNIN",
      image: "https://www.gouv.bj/upload/images/articles/ckeditor/Tangui%C3%A9ta(1).jpg",
      rating: 4.8,
      reviews: 124,
      featured: true,
      description: "Un circuit complet à travers le pays, des plages côtières aux savanes du Nord, avec des rencontres de tribus locales."
    },
    {
      id: 2,
      title: "Safari dans tous ses états",
      type: "FAUNE ET FLORE",
      price: 1350,
      duration: 11,
      theme: "Nature",
      country: "BÉNIN",
      image: "https://www.gouv.bj/upload/images/articles/ckeditor/Tangui%C3%A9ta(1).jpg",
      rating: 4.7,
      reviews: 98,
      featured: false,
      description: "Découvrez la faune exceptionnelle du Bénin lors de safaris dans les parcs nationaux les plus préservés d'Afrique."
    },
    {
      id: 3,
      title: "Voyage en terres ethniques",
      type: "MINORITÉ ETHNIQUE",
      price: 1100,
      duration: 15,
      theme: "Culture",
      country: "BÉNIN",
      image: "https://www.gouv.bj/upload/images/articles/ckeditor/Tangui%C3%A9ta(1).jpg",
      rating: 4.9,
      reviews: 156,
      featured: false,
      description: "Immersion dans les traditions et modes de vie des peuples du Bénin, avec hébergement chez l'habitant."
    },
    {
      id: 4,
      title: "Royaumes et spiritualité",
      type: "SPIRITUALITÉ",
      price: 950,
      duration: 10,
      theme: "Histoire",
      country: "BÉNIN",
      image: "https://www.gouv.bj/upload/images/articles/ckeditor/Tangui%C3%A9ta(1).jpg",
      rating: 4.6,
      reviews: 87,
      featured: false,
      description: "Découvrez les croyances ancestrales et les pratiques vaudou dans le berceau de cette spiritualité."
    },
    {
      id: 5,
      title: "Saveurs du Bénin",
      type: "GASTRONOMIE",
      price: 880,
      duration: 8,
      theme: "Culture",
      country: "BÉNIN",
      image: "https://www.gouv.bj/upload/images/articles/ckeditor/Tangui%C3%A9ta(1).jpg",
      rating: 4.8,
      reviews: 112,
      featured: false,
      description: "Un voyage culinaire à travers les saveurs et les techniques de la cuisine béninoise authentique."
    },
    {
      id: 6,
      title: "L'histoire des Royaumes d'Abomey",
      type: "PATRIMOINE HISTORIQUE",
      price: 1050,
      duration: 12,
      theme: "Histoire",
      country: "BÉNIN",
      image: "https://www.gouv.bj/upload/images/articles/ckeditor/Tangui%C3%A9ta(1).jpg",
      rating: 4.7,
      reviews: 92,
      featured: false,
      description: "Explorez l'héritage des puissants royaumes du Dahomey et leurs palais classés au patrimoine mondial."
    }
  ];

  // Filtres disponibles
  const filters = [
    "Tous",
    "Culture",
    "Histoire",
    "Aventure",
    "Nature",
    "Spiritualité"
  ];

  const countries = ["Tous", "BÉNIN", "TOGO", "GHANA"];

  // Effet pour l'animation d'entrée des circuits
  useEffect(() => {
    const filtered = circuits.filter(circuit => {
      const matchesTheme = activeFilter === "Tous" || circuit.theme === activeFilter;
      const matchesCountry = activeCountry === "Tous" || circuit.country === activeCountry;
      const matchesSearch = circuit.title.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesTheme && matchesCountry && matchesSearch;
    });

    // Trier les circuits
    let sorted = [...filtered];
    switch (activeSort) {
      case "price-low":
        sorted.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        sorted.sort((a, b) => b.price - a.price);
        break;
      case "duration":
        sorted.sort((a, b) => a.duration - b.duration);
        break;
      case "rating":
        sorted.sort((a, b) => b.rating - a.rating);
        break;
      default: // recommended
        // Maintient l'ordre actuel, qui est supposé être basé sur des recommandations
        break;
    }

    setVisibleCircuits(sorted);
  }, [activeFilter, searchQuery, activeCountry, activeSort]);

  // Effet pour le parallaxe au défilement
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Gérer les favoris
  const toggleFavorite = (id: number) => {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter(favId => favId !== id));
    } else {
      setFavorites([...favorites, id]);
    }
  };

  // Circuit en vedette
  const featuredCircuit = circuits.find(circuit => circuit.featured);

  return (
    <div className="min-h-screen bg-[#FCFCFC] relative">
      {/* Navbar fixe avec effet de transparence */}
      

      {/* Hero Section avec effet parallaxe */}
      <section
        className="relative h-screen bg-[url('https://expresstourisme.com/image/news/Tata-somba-Benin-tourisme-destination-Natitingou-672d011a8b4e7.webp')] bg-cover bg-fixed"
        style={{ backgroundPositionY: `calc(50% + ${scrollPosition * 0.2}px)` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 pt-20">
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="inline-block bg-[#E67E22]/90 text-white px-6 py-2 rounded-full text-sm font-medium mb-4 animate-pulse">
              Découvrez l'Afrique de l'Ouest
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
              Explorez les merveilles du <span className="text-[#E67E22]">Bénin</span>
            </h1>
            <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              Des circuits authentiques et personnalisés pour découvrir les trésors cachés, les traditions ancestrales et les paysages spectaculaires.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">
              <Button className="bg-[#E67E22] hover:bg-[#D35400] text-white text-lg px-8 py-6 rounded-full font-medium shadow-xl">
                Explorer les circuits
              </Button>
              <Button variant="outline" className="bg-transparent border-2 border-white/70 text-white hover:bg-white/10 text-lg px-8 py-6 rounded-full font-medium">
                Nos destinations
              </Button>
            </div>
          </div>
        </div>

        {/* Indicateur de défilement */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white animate-bounce">
          <div className="flex flex-col items-center">
            <span className="mb-2 text-sm font-medium">Découvrir</span>
            <ChevronDown className="w-6 h-6" />
          </div>
        </div>
      </section>

      {/* Circuit en vedette */}
      {featuredCircuit && (
        <section className="py-16 px-4 md:px-8 relative overflow-hidden" ref={featuredCircuitRef}>
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col-reverse lg:flex-row gap-12 items-center">
              <div className="w-full lg:w-1/2 space-y-6">
                <span className="text-sm font-semibold text-[#E67E22] uppercase tracking-wider">Circuit en vedette</span>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight">
                  {featuredCircuit.title}
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {featuredCircuit.description}
                </p>
                <div className="flex flex-wrap gap-6 mt-6">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-[#E67E22]" />
                    <span className="text-gray-700">{featuredCircuit.duration} jours</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-[#E67E22]" />
                    <span className="text-gray-700">{featuredCircuit.country}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="w-5 h-5 text-[#E67E22] fill-[#E67E22]" />
                    <span className="text-gray-700">{featuredCircuit.rating} ({featuredCircuit.reviews} avis)</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="text-xl font-bold text-gray-800">
                    À partir de <span className="text-[#E67E22]">{featuredCircuit.price}€</span>
                  </div>
                  <span className="text-sm text-gray-500">par personne</span>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button className="bg-[#E67E22] hover:bg-[#D35400] text-lg px-6 py-5 rounded-lg">
                    Réserver ce circuit
                  </Button>
                  <Button variant="outline" className="border-2 border-gray-300 hover:border-[#E67E22] hover:text-[#E67E22] text-gray-700 flex items-center gap-2 text-lg px-6 py-5 rounded-lg">
                    <span>Voir les détails</span>
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </div>
              </div>
              <div className="w-full lg:w-1/2 relative">
                <div className="relative h-80 sm:h-96 lg:h-[500px] overflow-hidden rounded-2xl shadow-2xl group">
                  <img
                    src={featuredCircuit.image}
                    alt={featuredCircuit.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-70"></div>
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-semibold bg-[#E67E22]/90 px-4 py-1 rounded-full">
                        {featuredCircuit.type}
                      </span>
                      <div className="flex items-center gap-2">
                        <Star className="w-5 h-5 fill-[#FFD700]" />
                        <span className="font-medium">{featuredCircuit.rating}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Éléments décoratifs */}
                <div className="absolute -top-8 -right-8 w-40 h-40 bg-[#E67E22]/10 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-blue-500/10 rounded-full blur-3xl"></div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Recherche et filtres */}
      <section className="py-12 px-4 md:px-8 bg-white sticky top-16 z-20 shadow-sm transition-all duration-300">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Barre de recherche */}
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Rechercher un circuit ou une destination..."
                className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#E67E22]/40 focus:border-[#E67E22] text-lg"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            {/* Filtres thématiques */}
            <div className="flex overflow-x-auto pb-2 gap-2 md:gap-3">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-5 py-3 whitespace-nowrap rounded-xl text-sm font-medium transition-all ${activeFilter === filter
                      ? "bg-[#E67E22] text-white shadow-md shadow-[#E67E22]/30"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          {/* Filtres secondaires */}
          <div className="flex flex-wrap gap-4 mt-6 items-center">
            <span className="text-sm text-gray-500 font-medium flex items-center gap-1">
              <Filter className="w-4 h-4" />
              Filtrer par:
            </span>

            {/* Filtre par pays */}
            <div className="flex gap-2">
              {countries.map((country) => (
                <button
                  key={country}
                  onClick={() => setActiveCountry(country)}
                  className={`px-3 py-1 text-xs rounded-full transition-colors ${activeCountry === country
                      ? "bg-gray-800 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                >
                  {country}
                </button>
              ))}
            </div>

            <div className="ml-auto flex items-center gap-2">
              <span className="text-sm text-gray-500">Trier par:</span>
              <select
                className="border border-gray-200 rounded-lg px-3 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-[#E67E22]"
                value={activeSort}
                onChange={(e) => setActiveSort(e.target.value)}
              >
                <option value="recommended">Recommandés</option>
                <option value="price-low">Prix (croissant)</option>
                <option value="price-high">Prix (décroissant)</option>
                <option value="duration">Durée</option>
                <option value="rating">Avis</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Résultats */}
      <section className="py-12 px-4 md:px-8 bg-[#FCFCFC]">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-semibold text-gray-800">
              {visibleCircuits.length} circuits disponibles
            </h2>
          </div>

          {/* Liste des circuits */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {visibleCircuits.map((circuit, index) => (
              <div
                key={circuit.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-[#E67E22]/10 transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={circuit.image}
                    alt={circuit.title}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Badge type et favoris */}
                  <div className="absolute top-4 left-4 right-4 flex justify-between items-center">
                    <span className="text-xs font-medium bg-white/90 px-3 py-1 rounded-full text-[#E67E22]">
                      {circuit.type.split(',')[0]}
                    </span>
                    <button
                      onClick={() => toggleFavorite(circuit.id)}
                      className={`w-8 h-8 flex items-center justify-center rounded-full transition-colors ${favorites.includes(circuit.id)
                          ? "bg-[#E67E22] text-white"
                          : "bg-white/90 text-gray-500 hover:text-[#E67E22]"
                        }`}
                    >
                      <Heart
                        className={`w-4 h-4 ${favorites.includes(circuit.id) ? "fill-white" : ""}`}
                      />
                    </button>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                      <span className="text-sm font-medium">{circuit.rating}</span>
                      <span className="text-xs text-gray-500">({circuit.reviews})</span>
                    </div>
                    <span className="text-sm text-gray-500">
                      {circuit.duration} jours • {circuit.country}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2 h-14">
                    {circuit.title}
                  </h3>

                  <p className="text-sm text-gray-600 mb-4 line-clamp-2 h-10">
                    {circuit.description}
                  </p>

                  <div className="flex items-center gap-4 text-xs text-gray-600 mb-4">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4 text-[#E67E22]" />
                      <span>10 sites</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4 text-[#E67E22]" />
                      <span>2-12 pers.</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4 text-[#E67E22]" />
                      <span>Plusieurs dates</span>
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <div>
                      <span className="text-lg font-bold text-[#E67E22]">
                        {circuit.price}€
                      </span>
                      <span className="text-xs text-gray-500 ml-1">par pers.</span>
                    </div>
                    <Button
                      className="bg-white text-[#E67E22] border border-[#E67E22] hover:bg-[#E67E22] hover:text-white transition-all"
                      onClick={() => router.push('/tourisme/circuit')}
                    >
                      Voir détails
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination plus moderne */}
          <div className="flex justify-center mt-12">
            <div className="flex items-center gap-2 bg-white px-2 py-1 rounded-full shadow-md">
              <Button variant="ghost" className="w-10 h-10 p-0 rounded-full hover:bg-gray-100" aria-label="Page précédente">
                <ChevronLeft className="w-5 h-5" />
              </Button>
              <Button className="w-10 h-10 p-0 rounded-full bg-[#E67E22]" aria-label="Page 1">1</Button>
              <Button variant="ghost" className="w-10 h-10 p-0 rounded-full hover:bg-gray-100" aria-label="Page 2">2</Button>
              <Button variant="ghost" className="w-10 h-10 p-0 rounded-full hover:bg-gray-100" aria-label="Page 3">3</Button>
              <span className="px-2">...</span>
              <Button variant="ghost" className="w-10 h-10 p-0 rounded-full hover:bg-gray-100" aria-label="Page 6">6</Button>
              <Button variant="ghost" className="w-10 h-10 p-0 rounded-full hover:bg-gray-100" aria-label="Page suivante">
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


{/* Section newsletter */ }
{/* <section className="py-20 px-4 md:px-8 bg-gradient-to-br from-[#E67E22]/90 via-[#E67E22] to-[#D35400]/90 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-repeat" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')" }}></div>
        </div>
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Restez informé de nos nouvelles offres</h2>
          <p className="text-white/90 text-lg max-w-2xl mx-auto mb-8">Inscrivez-vous à notre newsletter pour recevoir en avant-première nos circuits exclusifs, promotions spéciales et conseils de voyage personnalisés.</p>
          
          <div className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto">
            <input 
              type="email" 
              placeholder="Votre adresse email" 
              className="flex-1 px-6 py-4 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <Button className="bg-white text-[#E67E22] hover:bg-gray-100 px-6 py-4 font-medium">
              S'inscrire
            </Button>
          </div>
          
          <p className="text-xs text-white/70 mt-4">En vous inscrivant, vous acceptez de recevoir nos emails et confirmez avoir lu notre politique de confidentialité.</p> */}