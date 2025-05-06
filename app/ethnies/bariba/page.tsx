
// "use client";

// import { useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import { Bell, ChevronDown, Globe, Menu, PenSquare, MapPin, Users, Crown, Music2, Utensils, Palette } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
// import useEmblaCarousel from 'embla-carousel-react';
// import Autoplay from 'embla-carousel-autoplay';
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

//   return (
//     <div className="min-h-screen bg-[#FDF6E3] overflow-x-hidden">

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
//             <h2 className="text-4xl font-bold text-[#5C4033] mb-4">Le Peuple Baatombu</h2>
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

//             <TabsContent value="history">
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
//             </TabsContent>

//             <TabsContent value="traditions">
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
//             </TabsContent>

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



// ********************************************************************************






// "use client";

// import { useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import { PlayCircle, Headphones, MapPin, Users, Music2, Utensils, Palette, ChevronRight, Clock, Calendar, BookOpen, Globe } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import {
//   Card,
//   CardContent,
//   CardHeader,
//   CardTitle,
//   CardDescription,
// } from "@/components/ui/card";
// import {
//   Tabs,
//   TabsContent,
//   TabsList,
//   TabsTrigger,
// } from "@/components/ui/tabs";
// import { Badge } from "@/components/ui/badge";
// import { Separator } from "@/components/ui/separator";

// const fonEthnicGroup = {
//   id: "fon",
//   name: "Peuple Fon",
//   heroImage: "https://images.unsplash.com/photo-1523881374236-dd34f6ac1226?q=80&w=2070",
//   overview: {
//     population: "Environ 3,5 millions",
//     location: "Sud du Bénin, principalement dans les départements du Zou, de l'Atlantique et du Littoral",
//     language: "Fongbe (langue Gbe)",
//     religion: "Vodun traditionnel, Christianisme, Islam",
//     videoUrl: "https://www.youtube.com/embed/example1",
//     audioStory: "https://example.com/audio-story.mp3",
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
//       image: "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?q=80&w=1789",
//     },
//     {
//       name: "Fa",
//       description: "Système de divination traditionnel",
//       image: "https://images.unsplash.com/photo-1519817650390-64a93db51149?q=80&w=2070",
//     },
//     {
//       name: "Zangbeto",
//       description: "Gardiens traditionnels de la nuit",
//       image: "https://images.unsplash.com/photo-1518834107812-67b0b7c58434?q=80&w=2070",
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
//       image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1780",
//     },
//     {
//       name: "Sauce Fon",
//       description: "Préparation à base de légumes et viande",
//       image: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=2069",
//     },
//     {
//       name: "Akassa",
//       description: "Pâte de maïs fermentée",
//       image: "https://images.unsplash.com/photo-1606787366850-de6330128bfc?q=80&w=2070",
//     },
//   ],
//   gallery: [
//     "https://images.unsplash.com/photo-1523881374236-dd34f6ac1226?q=80&w=2070",
//     "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?q=80&w=1789",
//     "https://images.unsplash.com/photo-1519817650390-64a93db51149?q=80&w=2070",
//     "https://images.unsplash.com/photo-1518834107812-67b0b7c58434?q=80&w=2070",
//   ]
// };

// export default function EthnicDetailPage() {
//   const [activeTab, setActiveTab] = useState("history");

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-amber-50 to-amber-100">
//       {/* Hero Section */}
//       <section className="relative h-96 md:h-[500px] overflow-hidden">
//         <div className="absolute inset-0 bg-black/30 z-10" />
//         <img
//           src={fonEthnicGroup.heroImage}
//           alt={fonEthnicGroup.name}
//           className="w-full h-full object-cover"
//         />
//         <div className="absolute bottom-0 left-0 right-0 z-20 p-6 md:p-12 text-white">
//           <motion.h1 
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="text-4xl md:text-6xl font-bold mb-2 drop-shadow-lg"
//           >
//             {fonEthnicGroup.name}
//           </motion.h1>
//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.1 }}
//             className="text-lg md:text-xl max-w-2xl drop-shadow-lg"
//           >
//             Découvrez la richesse culturelle du plus grand groupe ethnique du Bénin
//           </motion.p>

//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             className="flex gap-4 mt-6"
//           >
//             <Button className="bg-amber-600 hover:bg-amber-700 flex items-center gap-2">
//               <PlayCircle className="h-5 w-5" /> Regarder la vidéo
//             </Button>
//             <Button variant="outline" className="bg-white/10 hover:bg-white/20 backdrop-blur-sm flex items-center gap-2">
//               <Headphones className="h-5 w-5" /> Écouter l'histoire
//             </Button>
//           </motion.div>
//         </div>
//       </section>

//       {/* Quick Facts */}
//       <section className="py-8 px-4 md:px-6">
//         <div className="max-w-7xl mx-auto">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             viewport={{ once: true }}
//             className="grid grid-cols-2 md:grid-cols-4 gap-4"
//           >
//             {Object.entries(fonEthnicGroup.overview).filter(([key]) => !['videoUrl', 'audioStory'].includes(key)).map(([key, value], index) => (
//               <Card key={key} className="bg-white/80 backdrop-blur-sm border-amber-200/50 shadow-sm">
//                 <CardHeader className="pb-2">
//                   <CardDescription className="text-amber-800/80 capitalize">
//                     {key === 'language' ? 'Langue' : 
//                      key === 'religion' ? 'Religion' : 
//                      key === 'population' ? 'Population' : 'Localisation'}
//                   </CardDescription>
//                 </CardHeader>
//                 <CardContent>
//                   <div className="flex items-center gap-2">
//                     {key === 'population' && <Users className="h-5 w-5 text-amber-600" />}
//                     {key === 'location' && <MapPin className="h-5 w-5 text-amber-600" />}
//                     {key === 'language' && <BookOpen className="h-5 w-5 text-amber-600" />}
//                     {key === 'religion' && <Globe className="h-5 w-5 text-amber-600" />}
//                     <p className="font-medium text-amber-900">{value}</p>
//                   </div>
//                 </CardContent>
//               </Card>
//             ))}
//           </motion.div>
//         </div>
//       </section>

//       {/* Main Content */}
//       <section className="py-12 px-4 md:px-6">
//         <div className="max-w-7xl mx-auto">
//           <Tabs 
//             value={activeTab} 
//             onValueChange={setActiveTab}
//             className="w-full"
//           >
//             <TabsList className="w-full justify-start bg-transparent gap-2 mb-8">
//               <TabsTrigger 
//                 value="history" 
//                 className="data-[state=active]:bg-amber-600 data-[state=active]:text-white px-6 py-2 rounded-full"
//               >
//                 Histoire
//               </TabsTrigger>
//               <TabsTrigger 
//                 value="traditions" 
//                 className="data-[state=active]:bg-amber-600 data-[state=active]:text-white px-6 py-2 rounded-full"
//               >
//                 Traditions
//               </TabsTrigger>
//               <TabsTrigger 
//                 value="culture" 
//                 className="data-[state=active]:bg-amber-600 data-[state=active]:text-white px-6 py-2 rounded-full"
//               >
//                 Culture
//               </TabsTrigger>
//               <TabsTrigger 
//                 value="cuisine" 
//                 className="data-[state=active]:bg-amber-600 data-[state=active]:text-white px-6 py-2 rounded-full"
//               >
//                 Cuisine
//               </TabsTrigger>
//             </TabsList>

//             <TabsContent value="history">
//               <motion.div
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ duration: 0.5 }}
//                 className="space-y-8"
//               >
//                 <div className="grid md:grid-cols-3 gap-6">
//                   {fonEthnicGroup.history.map((item, index) => (
//                     <motion.div
//                       key={index}
//                       initial={{ opacity: 0, y: 20 }}
//                       whileInView={{ opacity: 1, y: 0 }}
//                       transition={{ duration: 0.5, delay: index * 0.1 }}
//                       viewport={{ once: true }}
//                     >
//                       <Card className="h-full bg-white/80 backdrop-blur-sm border-amber-200/50 shadow-sm hover:shadow-md transition-shadow">
//                         <CardHeader>
//                           <div className="flex items-center gap-3">
//                             <div className="bg-amber-100 p-2 rounded-full">
//                               <Calendar className="h-5 w-5 text-amber-600" />
//                             </div>
//                             <CardTitle className="text-amber-900">{item.period}</CardTitle>
//                           </div>
//                         </CardHeader>
//                         <CardContent>
//                           <p className="text-amber-800">{item.event}</p>
//                         </CardContent>
//                       </Card>
//                     </motion.div>
//                   ))}
//                 </div>

//                 <div className="mt-12 bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-amber-200/50 shadow-sm">
//                   <h3 className="text-2xl font-bold text-amber-900 mb-4">L'histoire en vidéo</h3>
//                   <div className="aspect-video w-full bg-black rounded-lg overflow-hidden">
//                     <iframe 
//                       width="100%" 
//                       height="100%" 
//                       src={fonEthnicGroup.overview.videoUrl} 
//                       title="Histoire du peuple Fon" 
//                       frameBorder="0" 
//                       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
//                       allowFullScreen
//                       className="w-full h-full"
//                     ></iframe>
//                   </div>
//                 </div>
//               </motion.div>
//             </TabsContent>

//             <TabsContent value="traditions">
//               <motion.div
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ duration: 0.5 }}
//                 className="space-y-8"
//               >
//                 <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//                   {fonEthnicGroup.traditions.map((tradition, index) => (
//                     <motion.div
//                       key={index}
//                       initial={{ opacity: 0, y: 20 }}
//                       whileInView={{ opacity: 1, y: 0 }}
//                       transition={{ duration: 0.5, delay: index * 0.1 }}
//                       viewport={{ once: true }}
//                     >
//                       <Card className="h-full bg-white/80 backdrop-blur-sm border-amber-200/50 shadow-sm hover:shadow-md transition-shadow overflow-hidden">
//                         <div className="relative h-48">
//                           <img
//                             src={tradition.image}
//                             alt={tradition.name}
//                             className="w-full h-full object-cover"
//                           />
//                         </div>
//                         <CardHeader>
//                           <CardTitle className="text-amber-900">{tradition.name}</CardTitle>
//                         </CardHeader>
//                         <CardContent>
//                           <p className="text-amber-800 mb-4">{tradition.description}</p>
//                           <Button variant="outline" className="border-amber-300 text-amber-700 hover:bg-amber-50">
//                             En savoir plus <ChevronRight className="ml-2 h-4 w-4" />
//                           </Button>
//                         </CardContent>
//                       </Card>
//                     </motion.div>
//                   ))}
//                 </div>

//                 <div className="mt-8 bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-amber-200/50 shadow-sm">
//                   <h3 className="text-2xl font-bold text-amber-900 mb-4">Découvrez nos traditions</h3>
//                   <Button className="bg-amber-600 hover:bg-amber-700 flex items-center gap-2 w-full md:w-auto">
//                     <Headphones className="h-5 w-5" /> Écouter les récits traditionnels
//                   </Button>
//                 </div>
//               </motion.div>
//             </TabsContent>

//             <TabsContent value="culture">
//               <motion.div
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ duration: 0.5 }}
//                 className="space-y-8"
//               >
//                 <div className="grid md:grid-cols-3 gap-6">
//                   <Card className="bg-white/80 backdrop-blur-sm border-amber-200/50 shadow-sm">
//                     <CardHeader>
//                       <div className="flex items-center gap-3">
//                         <div className="bg-amber-100 p-2 rounded-full">
//                           <Music2 className="h-5 w-5 text-amber-600" />
//                         </div>
//                         <CardTitle className="text-amber-900">Musique</CardTitle>
//                       </div>
//                     </CardHeader>
//                     <CardContent>
//                       <div className="space-y-3">
//                         {fonEthnicGroup.culture.music.map((item, index) => (
//                           <div key={index} className="flex items-start gap-3">
//                             <div className="bg-amber-100/50 p-1 rounded-full mt-1">
//                               <ChevronRight className="h-4 w-4 text-amber-600" />
//                             </div>
//                             <p className="text-amber-800">{item}</p>
//                           </div>
//                         ))}
//                       </div>
//                     </CardContent>
//                   </Card>

//                   <Card className="bg-white/80 backdrop-blur-sm border-amber-200/50 shadow-sm">
//                     <CardHeader>
//                       <div className="flex items-center gap-3">
//                         <div className="bg-amber-100 p-2 rounded-full">
//                           <Users className="h-5 w-5 text-amber-600" />
//                         </div>
//                         <CardTitle className="text-amber-900">Danse</CardTitle>
//                       </div>
//                     </CardHeader>
//                     <CardContent>
//                       <div className="space-y-3">
//                         {fonEthnicGroup.culture.dance.map((item, index) => (
//                           <div key={index} className="flex items-start gap-3">
//                             <div className="bg-amber-100/50 p-1 rounded-full mt-1">
//                               <ChevronRight className="h-4 w-4 text-amber-600" />
//                             </div>
//                             <p className="text-amber-800">{item}</p>
//                           </div>
//                         ))}
//                       </div>
//                     </CardContent>
//                   </Card>

//                   <Card className="bg-white/80 backdrop-blur-sm border-amber-200/50 shadow-sm">
//                     <CardHeader>
//                       <div className="flex items-center gap-3">
//                         <div className="bg-amber-100 p-2 rounded-full">
//                           <Palette className="h-5 w-5 text-amber-600" />
//                         </div>
//                         <CardTitle className="text-amber-900">Artisanat</CardTitle>
//                       </div>
//                     </CardHeader>
//                     <CardContent>
//                       <div className="space-y-3">
//                         {fonEthnicGroup.culture.crafts.map((item, index) => (
//                           <div key={index} className="flex items-start gap-3">
//                             <div className="bg-amber-100/50 p-1 rounded-full mt-1">
//                               <ChevronRight className="h-4 w-4 text-amber-600" />
//                             </div>
//                             <p className="text-amber-800">{item}</p>
//                           </div>
//                         ))}
//                       </div>
//                     </CardContent>
//                   </Card>
//                 </div>

//                 <div className="mt-8 bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-amber-200/50 shadow-sm">
//                   <h3 className="text-2xl font-bold text-amber-900 mb-4">Galerie Culturelle</h3>
//                   <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//                     {fonEthnicGroup.gallery.map((image, index) => (
//                       <motion.div
//                         key={index}
//                         whileHover={{ scale: 1.03 }}
//                         className="overflow-hidden rounded-lg aspect-square"
//                       >
//                         <img
//                           src={image}
//                           alt={`Culture Fon ${index + 1}`}
//                           className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
//                         />
//                       </motion.div>
//                     ))}
//                   </div>
//                 </div>
//               </motion.div>
//             </TabsContent>

//             <TabsContent value="cuisine">
//               <motion.div
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ duration: 0.5 }}
//                 className="space-y-8"
//               >
//                 <div className="grid md:grid-cols-3 gap-6">
//                   {fonEthnicGroup.cuisine.map((dish, index) => (
//                     <motion.div
//                       key={index}
//                       initial={{ opacity: 0, y: 20 }}
//                       whileInView={{ opacity: 1, y: 0 }}
//                       transition={{ duration: 0.5, delay: index * 0.1 }}
//                       viewport={{ once: true }}
//                     >
//                       <Card className="h-full bg-white/80 backdrop-blur-sm border-amber-200/50 shadow-sm hover:shadow-md transition-shadow overflow-hidden">
//                         <div className="relative h-48">
//                           <img
//                             src={dish.image}
//                             alt={dish.name}
//                             className="w-full h-full object-cover"
//                           />
//                         </div>
//                         <CardHeader>
//                           <div className="flex items-center gap-3">
//                             <div className="bg-amber-100 p-2 rounded-full">
//                               <Utensils className="h-5 w-5 text-amber-600" />
//                             </div>
//                             <CardTitle className="text-amber-900">{dish.name}</CardTitle>
//                           </div>
//                         </CardHeader>
//                         <CardContent>
//                           <p className="text-amber-800">{dish.description}</p>
//                         </CardContent>
//                       </Card>
//                     </motion.div>
//                   ))}
//                 </div>

//                 <div className="mt-8 bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-amber-200/50 shadow-sm">
//                   <h3 className="text-2xl font-bold text-amber-900 mb-4">Découvrez notre cuisine</h3>
//                   <div className="flex flex-col md:flex-row gap-4">
//                     <Button className="bg-amber-600 hover:bg-amber-700 flex items-center gap-2">
//                       <PlayCircle className="h-5 w-5" /> Voir la recette en vidéo
//                     </Button>
//                     <Button variant="outline" className="border-amber-300 text-amber-700 hover:bg-amber-50 flex items-center gap-2">
//                       <BookOpen className="h-5 w-5" /> Lire les instructions
//                     </Button>
//                   </div>
//                 </div>
//               </motion.div>
//             </TabsContent>
//           </Tabs>
//         </div>
//       </section>

//       {/* Call to Action */}
//       <section className="py-16 px-4 md:px-6 bg-amber-600/10">
//         <div className="max-w-4xl mx-auto text-center">
//           <motion.h2
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             viewport={{ once: true }}
//             className="text-3xl md:text-4xl font-bold text-amber-900 mb-6"
//           >
//             Prêt à explorer la culture Fon en personne ?
//           </motion.h2>
//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.1 }}
//             viewport={{ once: true }}
//             className="text-amber-800 mb-8 text-lg"
//           >
//             Découvrez nos expériences culturelles immersives et rencontrez les gardiens de ces traditions séculaires.
//           </motion.p>
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             viewport={{ once: true }}
//           >
//             <Button size="lg" className="bg-amber-600 hover:bg-amber-700 px-8 py-6 text-lg">
//               Voir les expériences disponibles
//             </Button>
//           </motion.div>
//         </div>
//       </section>
//     </div>
//   );
// }


// ******************************************************************************************************************


// "use client";

// import React, { useState, useEffect } from 'react';
// import { motion } from "framer-motion";
// import Image from "next/image";
// import Link from "next/link";
// import { ArrowLeft, MapPin, Users, CalendarDays, MoveRight, BookOpenText, Music, Landmark, Utensils, Palette } from "lucide-react";
// import { useParams } from 'next/navigation';

// // Données étendues des ethnies (vous pourriez les importer depuis un fichier séparé)
// const DETAILED_ETHNIC_GROUPS = [
//   {
//     id: "fon",
//     name: "Fon",
//     region: "Sud Bénin",
//     population: "~2 millions",
//     description: "Peuple fondateur du royaume du Dahomey, riche en traditions vodun et en art royal.",
//     longDescription: "Les Fon constituent l'un des principaux groupes ethniques du Bénin. Ils sont principalement basés dans la région d'Abomey et ont fondé le puissant royaume du Dahomey. Leur culture est profondément liée aux pratiques vodun, à la musique cérémonielle et possède un riche patrimoine d'arts royaux, notamment les appliqués, les récades et les statues.",
//     image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW1bJsEFyS4MNRE6IB9gzir2x1a1iQp199_Q&s",
//     coverImage: "https://images.unsplash.com/photo-1633668715506-15f07919c167?q=80&w=1974",
//     traditions: ["Vodun", "Appliqués du Dahomey", "Zangbeto"],
//     history: "Le peuple Fon est étroitement lié à l'histoire du royaume du Dahomey, l'un des plus puissants d'Afrique de l'Ouest pendant plusieurs siècles. Fondé au début du XVIIe siècle, ce royaume a construit sa renommée sur une organisation militaire rigoureuse et une administration centralisée sous l'autorité du roi (Dada). Les Fon ont développé une société hiérarchisée avec une cour royale élaborée dont le centre était le palais d'Abomey, aujourd'hui inscrit au patrimoine mondial de l'UNESCO. Le royaume a connu son apogée au XVIIIe siècle avant de devenir protectorat français en 1894, puis d'être intégré à la colonie du Dahomey.",
//     spirituality: "La spiritualité Fon est principalement centrée autour du Vodun, système religieux complexe reconnaissant un dieu suprême, Mawu-Lisa, et de nombreuses divinités intermédiaires. Chaque vodun représente une force de la nature ou un aspect de la vie quotidienne. Les cérémonies vodun, caractérisées par la transe, les sacrifices rituels et les chants, servent à maintenir l'harmonie entre le monde visible et invisible. Les bokono (prêtres-devins) utilisent le Fa, système de divination, pour interpréter la volonté des divinités. Les ancêtres jouent également un rôle essentiel comme intermédiaires entre les vivants et le monde spirituel.",
//     arts: "L'art Fon est profondément lié à la royauté et aux pratiques religieuses. Les appliqués du Dahomey, tentures en tissu aux motifs historiques ou mythologiques, racontent les exploits des rois. Les récades, sceptres royaux en bois et métal, symbolisaient l'autorité et portaient des emblèmes spécifiques à chaque roi. Les statues bocio, chargées de puissance spirituelle, servent d'intermédiaires avec les forces surnaturelles. La métallurgie occupait une place importante, notamment les sculptures en fer forgé et les objets de culte en bronze. Les tambours sacrés, richement décorés, accompagnent les cérémonies vodun et transmettent les messages entre les mondes.",
//     gallery: [
//       {
//         image: "https://images.unsplash.com/photo-1633668715506-15f07919c167?q=80&w=1974",
//         caption: "Céremonie vodun traditionnelle"
//       },
//       {
//         image: "https://images.unsplash.com/photo-1580414057403-c5f451f30e1c?q=80&w=1974",
//         caption: "Tenture appliquée du palais royal d'Abomey"
//       },
//       {
//         image: "https://images.unsplash.com/photo-1618934413236-61246e0fbf33?q=80&w=1974",
//         caption: "Danse rituelle lors d'une fête traditionnelle"
//       }
//     ],
//     festivals: [
//       {
//         name: "Fête du Vodun",
//         period: "10 janvier",
//         description: "Journée nationale célébrant les religions traditionnelles avec des cérémonies et processions colorées."
//       },
//       {
//         name: "Nonvitcha",
//         period: "Pentecôte",
//         description: "Festival culturel majeur mettant à l'honneur les traditions et l'histoire des Fon et des peuples apparentés."
//       }
//     ],
//     cuisine: [
//       {
//         name: "Amiwo",
//         description: "Pâte de maïs rouge servie avec du poulet en sauce tomate épicée."
//       },
//       {
//         name: "Wɔ̌",
//         description: "Pâte fermentée à base de farine de maïs, accompagnée de sauce aux légumes et viande."
//       },
//       {
//         name: "Akassa",
//         description: "Pâte fermentée de maïs blanc enveloppée dans des feuilles, souvent servie avec une sauce pimentée."
//       }
//     ]
//   },
//   {
//     id: "yoruba",
//     name: "Yoruba",
//     region: "Sud-Est",
//     population: "~1.5 million", 
//     description: "Portés sur les rites Ifa et la divination, les Yoruba ont une culture musicale très développée.",
//     longDescription: "Les Yoruba sont présents au Bénin, au Nigeria et au Togo. Ils possèdent une cosmogonie complexe basée sur le culte des Orishas. La divination Ifa est au cœur de leurs pratiques spirituelles. Réputés pour leur richesse musicale, leurs sculptures en bois et leurs textiles indigo, les Yoruba ont un patrimoine culturel particulièrement diversifié.",
//     image: "https://refinedng.com/wp-content/uploads/2022/07/Yoruba-People.jpg",
//     coverImage: "https://images.unsplash.com/photo-1556774687-0e2fdd0116c0?q=80&w=1974",
//     traditions: ["Divination Ifa", "Masques Gelede", "Batik"],
//     history: "Le peuple Yoruba possède une histoire riche remontant à plusieurs siècles. Organisés en royaumes et cités-États comme Oyo, Ife et Ketu, les Yoruba ont développé des systèmes politiques sophistiqués dirigés par des Oba (rois). La cité d'Ife est considérée comme le berceau spirituel de la civilisation Yoruba. Au Bénin, les Yoruba se sont principalement installés dans la région de Pobè, Kétou et Savè. Leurs royaumes ont maintenu des relations complexes avec le royaume du Dahomey, alternant entre alliances et conflits.",
//     spirituality: "La spiritualité Yoruba repose sur le culte des Orishas, divinités associées aux forces naturelles et aux activités humaines. Olodumare (ou Olorun) est considéré comme le dieu suprême créateur. Le système de divination Ifa, pratiqué par les babalawos (prêtres-devins), joue un rôle central dans la spiritualité quotidienne. Chaque consultation implique l'interprétation de signes (odu) révélant la volonté divine et offrant conseils pour résoudre les problèmes. Les cérémonies incluent souvent des danses de possession où les divinités se manifestent à travers les initiés. Cette religion a influencé de nombreuses pratiques spirituelles dans les Amériques, comme la Santeria et le Candomblé.",
//     arts: "L'art Yoruba est considéré parmi les plus sophistiqués d'Afrique. Les sculptures en bois comprennent des masques rituels, des statues d'Orishas et des figurines ibeji (jumeaux). Les masques Gelede, aux traits raffinés, honorent le pouvoir spirituel féminin. La sculpture de bronze à cire perdue, particulièrement développée à Ife, a produit des têtes royales d'un réalisme remarquable. Le textile est également important avec la technique adire (batik indigo) aux motifs symboliques. Les tambours parlants (dundun), les hochets royaux et les instruments à cordes accompagnent les cérémonies et transmettent des messages codés.",
//     gallery: [
//       {
//         image: "https://images.unsplash.com/photo-1556774687-0e2fdd0116c0?q=80&w=1974",
//         caption: "Cérémonie traditionnelle Yoruba"
//       },
//       {
//         image: "https://images.unsplash.com/photo-1594750823491-e493d067ce3e?q=80&w=1974",
//         caption: "Masque cérémoniel Gelede"
//       },
//       {
//         image: "https://images.unsplash.com/photo-1570481662006-a3a1374699e8?q=80&w=1974",
//         caption: "Tissu traditionnel teint à l'indigo"
//       }
//     ],
//     festivals: [
//       {
//         name: "Fête d'Oro",
//         period: "Saison sèche",
//         description: "Cérémonie initiatique masculine avec des masques représentant les ancêtres."
//       },
//       {
//         name: "Festival Gelede",
//         period: "Mars-Avril",
//         description: "Célébration avec des masques colorés honorant les pouvoirs féminins et la fertilité."
//       }
//     ],
//     cuisine: [
//       {
//         name: "Amala",
//         description: "Pâte épaisse à base d'igname séchée, servie avec diverses sauces épicées."
//       },
//       {
//         name: "Gbegiri",
//         description: "Soupe épaisse à base de haricots, souvent servie avec l'ewedu (soupe de feuilles de corète)."
//       },
//       {
//         name: "Ekuru",
//         description: "Gâteau de haricots cuits à la vapeur, généralement accompagné de sauce tomate épicée."
//       }
//     ]
//   },
//   {
//     id: "bariba",
//     name: "Bariba",
//     region: "Nord-Est",
//     population: "~750,000",
//     description: "Peuple de cavaliers et de royaumes militaires, connu pour la fête Gaani et les chants épiques.",
//     longDescription: "Les Bariba, aussi appelés Baatombu, occupent principalement le nord-est du Bénin. Ce peuple de tradition guerrière a fondé plusieurs principautés dont le royaume de Nikki. La fête de la Gaani, célébration annuelle majeure, témoigne de leur riche héritage équestre et militaire. Leurs chants épiques racontent l'histoire des grands rois et des héros locaux.",
//     image: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Rugged_rider.jpg",
//     coverImage: "https://images.unsplash.com/photo-1627738668643-1c29b46ab37b?q=80&w=1974",
//     traditions: ["Fête de la Gaani", "Arts du cheval", "Tissage"],
//     history: "Les Bariba (ou Baatombu) ont formé plusieurs royaumes dont le plus important était celui de Nikki, fondé au XVIe siècle. Leur organisation sociale reposait sur une aristocratie guerrière dirigée par un souverain portant le titre de Sinaboko. Ces royaumes contrôlaient d'importantes routes commerciales entre le nord et le sud. Réputés pour leurs cavaliers d'élite (wassangari), les Bariba ont longtemps résisté aux invasions. Leur territoire a été intégré à l'Afrique Occidentale Française à la fin du XIXe siècle, mais ils ont conservé leurs structures traditionnelles de pouvoir.",
//     spirituality: "La spiritualité Bariba combine croyances ancestrales et influences islamiques. Les Bariba croient en un dieu créateur (Gusunu) et vénèrent les ancêtres qui intercèdent auprès des forces spirituelles. Les rituels impliquent souvent des sacrifices et des offrandes pour assurer protection et prospérité. Les bwona (devins-guérisseurs) utilisent plantes médicinales et incantations pour traiter maladies et malheurs. Le culte du Bouhoubou (esprit de la brousse) protège chasseurs et voyageurs. Bien que l'islam soit pratiqué par une partie de la population, il coexiste avec les croyances traditionnelles.",
//     arts: "L'art Bariba est particulièrement visible dans l'artisanat équestre et le textile. Les harnachements de chevaux richement décorés témoignent de l'importance de la cavalerie dans leur culture. Les tissages en coton aux motifs géométriques distinctifs servent à confectionner des vêtements d'apparat et des couvertures cérémonielles. La sculpture sur bois produit des objets quotidiens ornés de symboles liés à la royauté et aux croyances. Les instruments de musique comme le godje (violon monocorde) et les tambours accompagnent les récits épiques des griots (wassangari) qui préservent l'histoire orale du peuple.",
//     gallery: [
//       {
//         image: "https://images.unsplash.com/photo-1627738668643-1c29b46ab37b?q=80&w=1974",
//         caption: "Cavalier Bariba lors de la fête de la Gaani"
//       },
//       {
//         image: "https://images.unsplash.com/photo-1618418268131-0632e759dbf0?q=80&w=1974",
//         caption: "Tissage traditionnel aux motifs géométriques"
//       },
//       {
//         image: "https://images.unsplash.com/photo-1627738035846-59dae8fd0b3f?q=80&w=1974", 
//         caption: "Danse traditionnelle avec tambours"
//       }
//     ],
//     festivals: [
//       {
//         name: "Gaani",
//         period: "Avril",
//         description: "Nouvel an traditionnel et festival des moissons célébrant le renouveau et honorant le roi."
//       },
//       {
//         name: "Donkonu",
//         period: "Janvier",
//         description: "Fête des cavaliers avec démonstrations équestres et récits épiques."
//       }
//     ],
//     cuisine: [
//       {
//         name: "Dikouat",
//         description: "Pâte d'igname pilée accompagnée de sauce à base de légumes sauvages."
//       },
//       {
//         name: "Sinsin",
//         description: "Viande grillée coupée en petits morceaux et assaisonnée d'épices locales."
//       },
//       {
//         name: "Kilishi",
//         description: "Fines tranches de viande séchée au soleil puis enrobées d'épices."
//       }
//     ]
//   },
//   // Vous pouvez ajouter les autres ethnies de la même façon
//   // ...
// ];

// export default function EthnieDetailsPage() {
//   const params = useParams();
//   interface EthnicGroup {
//     id: string;
//     name: string;
//     region: string;
//     population: string;
//     description: string;
//     longDescription: string;
//     image: string;
//     coverImage: string;
//     traditions: string[];
//     history: string;
//     spirituality: string;
//     arts: string;
//     gallery: { image: string; caption: string }[];
//     festivals: { name: string; period: string; description: string }[];
//     cuisine: { name: string; description: string }[];
//   }

//   const [ethnie, setEthnie] = useState<EthnicGroup | null>(null);
//   const [activeTab, setActiveTab] = useState<keyof typeof tabContent>('history');
//   const [selectedImage, setSelectedImage] = useState<{ image: string; caption: string } | null>(null);

//   useEffect(() => {
//     // Récupérer les détails de l'ethnie basé sur l'ID dans l'URL
//     const ethnicGroup = DETAILED_ETHNIC_GROUPS.find(e => e.id === params.id);
//     if (ethnicGroup) {
//       setEthnie(ethnicGroup);
//       // Définir la première image de la galerie comme sélectionnée par défaut
//       if (ethnicGroup.gallery && ethnicGroup.gallery.length > 0) {
//         setSelectedImage(ethnicGroup.gallery[0]);
//       }
//     }
//   }, [params.id]);

//   if (!ethnie) {
//     return (
//       <div className="min-h-screen bg-amber-50 flex items-center justify-center">
//         <div className="animate-pulse text-amber-800">Chargement...</div>
//       </div>
//     );
//   }

//   const tabContent: Record<'history' | 'spirituality' | 'arts' | 'cuisine' | 'festivals' | 'gallery', { icon: JSX.Element; title: string; content: string | JSX.Element }> = {
//     history: {
//       icon: <BookOpenText className="w-5 h-5" />,
//       title: "Histoire",
//       content: ethnie.history
//     },
//     spirituality: {
//       icon: <Landmark className="w-5 h-5" />,
//       title: "Spiritualité",
//       content: ethnie.spirituality
//     },
//     arts: {
//       icon: <Palette className="w-5 h-5" />,
//       title: "Arts et Artisanat",
//       content: ethnie.arts
//     },
//     cuisine: {
//       icon: <Utensils className="w-5 h-5" />,
//       title: "Cuisine",
//       content: (
//         <div className="space-y-4">
//           {ethnie.cuisine.map((dish, index) => (
//             <div key={index} className="bg-amber-50 p-4 rounded-lg">
//               <h4 className="font-semibold text-amber-800">{dish.name}</h4>
//               <p className="text-gray-600">{dish.description}</p>
//             </div>
//           ))}
//         </div>
//       )
//     },
//     festivals: {
//       icon: <CalendarDays className="w-5 h-5" />,
//       title: "Festivals",
//       content: (
//         <div className="space-y-4">
//           {ethnie.festivals.map((festival, index) => (
//             <div key={index} className="bg-amber-50 p-4 rounded-lg">
//               <div className="flex justify-between items-center mb-2">
//                 <h4 className="font-semibold text-amber-800">{festival.name}</h4>
//                 <span className="text-sm bg-amber-200 text-amber-800 px-2 py-1 rounded-full">
//                   {festival.period}
//                 </span>
//               </div>
//               <p className="text-gray-600">{festival.description}</p>
//             </div>
//           ))}
//         </div>
//       )
//     },
//     gallery: {
//       icon: <Image width={20} height={20} src="/placeholder.svg" alt="Gallery" className="w-5 h-5" />,
//       title: "Galerie",
//       content: (
//         <div className="space-y-6">
//           <div className="relative h-80 w-full overflow-hidden rounded-lg">
//             {selectedImage && (
//               <Image 
//                 src={selectedImage.image} 
//                 alt={selectedImage.caption}
//                 fill
//                 className="object-cover"
//               />
//             )}
//             {selectedImage && (
//               <div className="absolute bottom-0 left-0 right-0 bg-black/50 p-3 text-white">
//                 {selectedImage.caption}
//               </div>
//             )}
//           </div>
//           <div className="grid grid-cols-3 gap-2">
//             {ethnie.gallery.map((img, idx) => (
//               <div 
//                 key={idx}
//                 className={`relative h-24 cursor-pointer rounded-md overflow-hidden border-2 ${selectedImage === img ? 'border-amber-600' : 'border-transparent'}`}
//                 onClick={() => setSelectedImage(img)}
//               >
//                 <Image 
//                   src={img.image} 
//                   alt={img.caption}
//                   fill
//                   className="object-cover"
//                 />
//               </div>
//             ))}
//           </div>
//         </div>
//       )
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-50">
//       {/* Hero Section */}
//       <div className="relative h-96 overflow-hidden">
//         <div className="absolute inset-0 bg-black">
//           <Image 
//             src={ethnie.coverImage || ethnie.image} 
//             alt={`${ethnie.name} culture`}
//             fill
//             className="object-cover opacity-70"
//           />
//         </div>
//         <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/80" />
//         <div className="relative h-full max-w-6xl mx-auto px-6 flex flex-col justify-end pb-12">
//           <Link href="/ethnies" className="inline-flex items-center text-amber-300 hover:text-amber-200 mb-8 transition-colors">
//             <ArrowLeft className="w-5 h-5 mr-2" /> Retour aux ethnies
//           </Link>
//           <motion.h1 
//             initial={{ opacity: 0, y: -30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.7 }}
//             className="text-5xl font-bold text-white mb-4"
//           >
//             Les <span className="text-amber-400">{ethnie.name}</span>
//           </motion.h1>
//           <motion.div 
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.7, delay: 0.2 }}
//             className="flex flex-wrap gap-4 items-center"
//           >
//             <div className="flex items-center text-white bg-black/40 px-3 py-1.5 rounded-full">
//               <MapPin className="w-4 h-4 mr-1" />
//               <span>{ethnie.region}</span>
//             </div>
//             <div className="flex items-center text-white bg-black/40 px-3 py-1.5 rounded-full">
//               <Users className="w-4 h-4 mr-1" />
//               <span>{ethnie.population}</span>
//             </div>
//           </motion.div>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="max-w-6xl mx-auto px-6 py-12">
//         <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-12">
//           <div className="p-6 md:p-8">
//             <h2 className="text-2xl font-semibold text-gray-800 mb-4">Présentation</h2>
//             <p className="text-gray-600 text-lg leading-relaxed mb-6">{ethnie.longDescription}</p>

//             <div className="flex flex-wrap gap-2 mb-6">
//               <h3 className="text-lg font-medium text-gray-800 mr-2">Traditions principales:</h3>
//               {ethnie.traditions.map((tradition, idx) => (
//                 <span key={idx} className="bg-amber-100 text-amber-800 px-3 py-1.5 rounded-full">
//                   {tradition}
//                 </span>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Tabs Section */}
//         <div className="bg-white rounded-xl shadow-lg overflow-hidden">
//           <div className="border-b border-gray-200">
//             <div className="flex overflow-x-auto p-2 md:p-0">
//               {Object.keys(tabContent).map((tab) => (
//                 <button
//                   key={tab}
//                   onClick={() => setActiveTab(tab as keyof typeof tabContent)}
//                   className={`flex items-center px-6 py-4 text-sm font-medium whitespace-nowrap transition-colors ${
//                     activeTab === tab 
//                       ? 'text-amber-600 border-b-2 border-amber-600' 
//                       : 'text-gray-500 hover:text-amber-500'
//                   }`}
//                 >
//                   <span className="mr-2">{tabContent[tab as keyof typeof tabContent].icon}</span>
//                   {tabContent[tab as keyof typeof tabContent].title}
//                 </button>
//               ))}
//             </div>
//           </div>

//           <div className="p-6 md:p-8">
//             <motion.div
//               key={activeTab}
//               initial={{ opacity: 0, y: 10 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.3 }}
//             >
//               {typeof tabContent[activeTab].content === 'string' ? (
//                 <p className="text-gray-600 leading-relaxed">
//                   {tabContent[activeTab].content}
//                 </p>
//               ) : (
//                 tabContent[activeTab].content
//               )}
//             </motion.div>
//           </div>
//         </div>

//         {/* Related Section */}
//         <div className="mt-16">
//           <h2 className="text-2xl font-semibold text-gray-800 mb-6">Explorer d'autres ethnies</h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             {DETAILED_ETHNIC_GROUPS.filter(e => e.id !== ethnie.id).slice(0, 3).map((related) => (
//               <Link
//                 key={related.id}
//                 href={`/ethnies/${related.id}`}
//                 className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
//               >
//                 <div className="relative h-40">
//                   <Image
//                     src={related.image}
//                     alt={related.name}
//                     fill
//                     className="object-cover group-hover:scale-105 transition-transform duration-300"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
//                     <h3 className="text-xl font-bold text-white">{related.name}</h3>
//                   </div>
//                 </div>
//                 <div className="p-4">
//                   <div className="flex items-center text-amber-600 group-hover:text-amber-700 transition-colors">
//                     Découvrir <MoveRight className="ml-2 w-4 h-4" />
//                   </div>
//                 </div>
//               </Link>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


// ***************************************************************************

"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Bell,
  ChevronDown,
  Globe,
  MapPin,
  Users,
  Music2,
  Utensils,
  Palette,
  PlayCircle,
  Headphones,
  ImageIcon,
  ArrowLeft,
  ArrowRight,
  Calendar,
  BookOpen,
  X,
  ExternalLink,
  Share2,
  Download
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

// Ethnic group data
const barataGroup = {
  name: "Baatombu (Bariba)",
  description: "Peuple de cavaliers et de royaumes militaires, au riche héritage culturel et historique, originaire du nord Bénin.",
  mainImage: "https://images.unsplash.com/photo-1523881374236-dd34f6ac1226?q=80&w=2070",
  gallery: [
    "https://images.unsplash.com/photo-1580286923998-09fb2e7c983f?q=80&w=2070",
    "https://images.unsplash.com/photo-1578353022142-09264fd64295?q=80&w=1965",
    "https://images.unsplash.com/photo-1533645782036-997947a9d529?q=80&w=1926"
  ],
  videoUrl: "https://example.com/bariba-culture-video",
  audioUrl: "https://example.com/bariba-history-audio",
  overview: {
    population: "Environ 750,000",
    location: "Nord-Est du Bénin, principalement dans les départements du Borgou et de l'Alibori",
    language: "Batonu (langue Gur)",
    religion: "Croyances traditionnelles, Islam, Christianisme",
  },
  history: [
    {
      period: "XIVe siècle",
      event: "Formation des premiers établissements Bariba",
      details: "Les premières communautés Bariba s'établissent dans la région du Borgou, créant de petites chefferies indépendantes."
    },
    {
      period: "XVIe siècle",
      event: "Fondation du royaume de Nikki",
      details: "Le royaume de Nikki devient le centre politique et culturel Bariba le plus influent, avec une forte tradition équestre."
    },
    {
      period: "XVIIIe siècle",
      event: "Apogée des royaumes Bariba",
      details: "Les royaumes Bariba connaissent leur âge d'or avec l'expansion commerciale et militaire, développant une culture de cour sophistiquée."
    },
    {
      period: "1898",
      event: "Intégration à la colonie française",
      details: "Après une résistance initiale, les territoires Bariba sont intégrés à la colonie du Dahomey sous administration française."
    }
  ],
  traditions: [
    {
      name: "Fête de la Gaani",
      description: "Célébration annuelle marquant le nouvel an musulman et honorant l'héritage royal",
      image: "https://images.unsplash.com/photo-1578353022142-09264fd64295?q=80&w=1965"
    },
    {
      name: "Wasangari",
      description: "Tradition guerrière et équestre des nobles cavaliers Bariba",
      image: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Rugged_rider.jpg"
    },
    {
      name: "Célébration Donkonrou",
      description: "Rituel de purification communautaire et de bénédiction des récoltes",
      image: "https://images.unsplash.com/photo-1533645782036-997947a9d529?q=80&w=1926"
    },
  ],
  culture: {
    music: [
      "Kakaki (trompette royale)",
      "Goge (violon monocorde)",
      "Tambours cérémoniels",
      "Chants épiques des griots"
    ],
    dance: [
      "Danse Gani des cavaliers",
      "Danse Kondona",
      "Gourgou (danse masquée)"
    ],
    crafts: [
      "Art équestre",
      "Tissage traditionnel",
      "Sculpture sur bois",
      "Vannerie"
    ],
  },
  cuisine: [
    {
      name: "Chikouangue",
      description: "Pain de manioc fermenté enveloppé dans des feuilles",
      image: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?q=80&w=2070"
    },
    {
      name: "Touwoudou",
      description: "Pâte à base de mil accompagnée de sauce aux légumes",
      image: "https://images.unsplash.com/photo-1597224513635-8c686ecd1a36?q=80&w=2070"
    },
    {
      name: "Yanyankou",
      description: "Ragoût de viande épicé avec des tubercules",
      image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?q=80&w=2070"
    },
  ],
};

export default function EthnicGroupDetailPage() {
  const [showGallery, setShowGallery] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Main carousel for the hero section
  const [mainCarouselRef, mainCarouselApi] = useEmblaCarousel({
    loop: true,
    duration: 60
  }, [Autoplay({ delay: 5000 })]);

  // Gallery carousel
  const [galleryCarouselRef, galleryCarouselApi] = useEmblaCarousel({
    loop: true,
    duration: 30
  });

  // Timeline scroll references
  const timelineRef = useRef<HTMLDivElement>(null);

  const handlePlayAudio = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const scrollTimeline = (direction: string) => {
    if (timelineRef.current) {
      const scrollAmount = direction === 'right' ? 300 : -300;
      timelineRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-50 overflow-x-hidden">
         
  <section className="relative h-[80vh] overflow-hidden">
    <div className="absolute inset-0 bg-black/20 z-10"></div>

    <div className="relative h-full overflow-hidden" ref={mainCarouselRef}>
      <div className="flex h-full">
        <div className="flex-shrink-0 w-full h-full">
          <img
            src={barataGroup.mainImage}
            alt={barataGroup.name}
            className="w-full h-full object-cover"
          />
        </div>
        {barataGroup.gallery.map((image, index) => (
          <div key={index} className="flex-shrink-0 w-full h-full">
            <img
              src={image}
              alt={`${barataGroup.name} - image ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>

    <div className="absolute inset-0 flex flex-col justify-end z-20">
      <div className="bg-gradient-to-t from-black/80 to-transparent pt-24 pb-12 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              {barataGroup.name}
            </h1>
            <p className="text-lg md:text-xl text-amber-100/90 max-w-2xl mb-8">
              {barataGroup.description}
            </p>

            <div className="flex flex-wrap gap-4">
              <Button
                onClick={() => setShowVideoModal(true)}
                className="bg-amber-600 hover:bg-amber-700 text-white flex items-center gap-2"
              >
                <PlayCircle className="h-5 w-5" />
                Regarder la vidéo
              </Button>

              <Button
                onClick={handlePlayAudio}
                className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border border-white/30 flex items-center gap-2"
              >
                <Headphones className="h-5 w-5" />
                {isPlaying ? "Pause" : "Écouter l'histoire"}
              </Button>

              <Button
                onClick={() => setShowGallery(true)}
                className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border border-white/30 flex items-center gap-2"
              >
                <ImageIcon className="h-5 w-5" />
                Galerie
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>

    {/* Hidden audio element */}
    <audio ref={audioRef} src={barataGroup.audioUrl} />
  </section>

  {/* Quick Facts Section */ }
  <section className="py-16 px-6">
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-start mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-8 md:mb-0"
        >
          <h2 className="text-3xl font-bold text-amber-900 mb-2">Aperçu</h2>
          <div className="h-1 w-24 bg-amber-500 rounded-full"></div>
        </motion.div>

        <div className="flex gap-4">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full text-amber-700 hover:text-amber-900 hover:bg-amber-100">
                  <Share2 className="h-5 w-5" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>Partager</TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full text-amber-700 hover:text-amber-900 hover:bg-amber-100">
                  <Download className="h-5 w-5" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>Télécharger en PDF</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {Object.entries(barataGroup.overview).map(([key, value], index) => (
          <motion.div
            key={key}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="h-full overflow-hidden border-none shadow-lg bg-white hover:shadow-xl transition-shadow">
              <CardHeader className="bg-gradient-to-r from-amber-100 to-amber-50 pb-3">
                <CardTitle className="text-amber-800 capitalize flex items-center gap-2 text-lg">
                  {key === "population" && <Users className="h-4 w-4" />}
                  {key === "location" && <MapPin className="h-4 w-4" />}
                  {key === "language" && <Globe className="h-4 w-4" />}
                  {key === "religion" && <Bell className="h-4 w-4" />}
                  {key}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <p className="text-amber-900">{value}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  </section>

  {/* History Timeline Section */ }
  <section className="py-16 px-6 bg-amber-100/50">
    <div className="max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <h2 className="text-3xl font-bold text-amber-900 mb-2">Histoire</h2>
        <div className="h-1 w-24 bg-amber-500 rounded-full mb-4"></div>
        <p className="text-lg text-amber-800/80 max-w-3xl">
          L'histoire du peuple Baatombu est marquée par une tradition guerrière,
          un riche héritage équestre et la formation de royaumes structurés dans la région du Borgou.
        </p>
      </motion.div>

      <div className="relative mb-6">
        <Button
          variant="ghost"
          size="icon"
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-amber-900 rounded-full shadow-md"
          onClick={() => scrollTimeline('left')}
        >
          <ArrowLeft className="h-5 w-5" />
        </Button>

        <Button
          variant="ghost"
          size="icon"
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-amber-900 rounded-full shadow-md"
          onClick={() => scrollTimeline('right')}
        >
          <ArrowRight className="h-5 w-5" />
        </Button>

        <div
          ref={timelineRef}
          className="flex overflow-x-auto hide-scrollbar gap-8 px-10 pb-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {barataGroup.history.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex-shrink-0 w-80"
            >
              <Card className="h-full border-none shadow-lg bg-white hover:shadow-xl transition-shadow">
                <CardHeader className="bg-gradient-to-r from-amber-200 to-amber-100 pb-3">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-amber-700" />
                    <CardTitle className="text-amber-800">{item.period}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4">
                  <h4 className="font-semibold text-amber-800 mb-2">{item.event}</h4>
                  <p className="text-amber-700/80 text-sm">{item.details}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>

  {/* Culture Tabs Section */ }
  <section className="py-16 px-6">
    <div className="max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <h2 className="text-3xl font-bold text-amber-900 mb-2">Culture & Traditions</h2>
        <div className="h-1 w-24 bg-amber-500 rounded-full mb-4"></div>
        <p className="text-lg text-amber-800/80 max-w-3xl">
          Découvrez les traditions, arts et coutumes qui définissent l'identité culturelle du peuple Baatombu.
        </p>
      </motion.div>

      <Tabs defaultValue="traditions" className="w-full">
        <TabsList className="w-full max-w-md mx-auto justify-between bg-amber-100/80 mb-12 rounded-full p-1">
          <TabsTrigger
            value="traditions"
            className="rounded-full data-[state=active]:bg-amber-600 data-[state=active]:text-white text-amber-900"
          >
            Traditions
          </TabsTrigger>
          <TabsTrigger
            value="arts"
            className="rounded-full data-[state=active]:bg-amber-600 data-[state=active]:text-white text-amber-900"
          >
            Arts & Musique
          </TabsTrigger>
          <TabsTrigger
            value="cuisine"
            className="rounded-full data-[state=active]:bg-amber-600 data-[state=active]:text-white text-amber-900"
          >
            Cuisine
          </TabsTrigger>
        </TabsList>

        <TabsContent value="traditions">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {barataGroup.traditions.map((tradition, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-none shadow-lg overflow-hidden bg-white hover:shadow-xl transition-shadow">
                  <div className="relative h-48">
                    <img
                      src={tradition.image}
                      alt={tradition.name}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-amber-800">{tradition.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-amber-700/80">{tradition.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="arts">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-none shadow-lg bg-white hover:shadow-xl transition-shadow">
                <CardHeader className="bg-gradient-to-r from-amber-200 to-amber-100">
                  <CardTitle className="text-amber-800 flex items-center gap-2">
                    <Music2 className="h-5 w-5" /> Musique
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <ul className="space-y-3">
                    {barataGroup.culture.music.map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="mt-1 h-2 w-2 rounded-full bg-amber-500 flex-shrink-0"></div>
                        <p className="text-amber-700">{item}</p>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-none shadow-lg bg-white hover:shadow-xl transition-shadow">
                <CardHeader className="bg-gradient-to-r from-amber-200 to-amber-100">
                  <CardTitle className="text-amber-800 flex items-center gap-2">
                    <PlayCircle className="h-5 w-5" /> Danse
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <ul className="space-y-3">
                    {barataGroup.culture.dance.map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="mt-1 h-2 w-2 rounded-full bg-amber-500 flex-shrink-0"></div>
                        <p className="text-amber-700">{item}</p>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-none shadow-lg bg-white hover:shadow-xl transition-shadow">
                <CardHeader className="bg-gradient-to-r from-amber-200 to-amber-100">
                  <CardTitle className="text-amber-800 flex items-center gap-2">
                    <Palette className="h-5 w-5" /> Artisanat
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <ul className="space-y-3">
                    {barataGroup.culture.crafts.map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="mt-1 h-2 w-2 rounded-full bg-amber-500 flex-shrink-0"></div>
                        <p className="text-amber-700">{item}</p>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </TabsContent>

        <TabsContent value="cuisine">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {barataGroup.cuisine.map((dish, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-none shadow-lg overflow-hidden bg-white hover:shadow-xl transition-shadow">
                  <div className="relative h-48">
                    <img
                      src={dish.image}
                      alt={dish.name}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-amber-800 flex items-center gap-2">
                      <Utensils className="h-5 w-5" /> {dish.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-amber-700/80">{dish.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  </section>

  {/* Book Tourism Experience Section */ }
  <section className="py-16 px-6 bg-gradient-to-r from-amber-900 to-amber-800 text-white">
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-4">Vivez l'Expérience Baatombu</h2>
          <p className="text-amber-100 mb-6 text-lg">
            Réservez un circuit touristique guidé pour découvrir les villages traditionnels,
            assister aux cérémonies et vous immerger dans la culture authentique du peuple Baatombu.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button className="bg-white text-amber-900 hover:bg-amber-100">
              Réserver une visite
            </Button>
            <Button variant="outline" className="text-white border-white hover:bg-white/10">
              En savoir plus
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative h-80 rounded-xl overflow-hidden"
        >
          <img
            src="https://images.unsplash.com/photo-1580286923998-09fb2e7c983f?q=80&w=2070"
            alt="Tourism Experience"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
            <div>
              <p className="text-lg font-semibold">Visite des villages traditionnels</p>
              <p className="text-sm text-amber-200">3 jours · Expérience complète · Guide local</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>

  {/* Further Reading Section */ }
  <section className="py-16 px-6">
    <div className="max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <h2 className="text-3xl font-bold text-amber-900 mb-2">Pour aller plus loin</h2>
        <div className="h-1 w-24 bg-amber-500 rounded-full mb-4"></div>
        <p className="text-lg text-amber-800/80 max-w-3xl">
          Explorez davantage la richesse culturelle du peuple Baatombu à travers ces ressources complémentaires.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Card className="h-full border-none shadow-lg bg-white hover:shadow-xl transition-shadow">
            <CardHeader className="bg-gradient-to-r from-amber-200 to-amber-100 pb-3">
              <CardTitle className="text-amber-800 flex items-center gap-2">
                <BookOpen className="h-5 w-5" /> Articles
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="mt-1 h-2 w-2 rounded-full bg-amber-500 flex-shrink-0"></div>
                  <p className="text-amber-700">Histoire et culture des Bariba</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 h-2 w-2 rounded-full bg-amber-500 flex-shrink-0"></div>
                  <p className="text-amber-700">Traditions équestres des Baatombu</p>
                </li>
              </ul>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <Card className="h-full border-none shadow-lg bg-white hover:shadow-xl transition-shadow">
            <CardHeader className="bg-gradient-to-r from-orange-200 to-orange-100 pb-3">
              <CardTitle className="text-orange-800 flex items-center gap-2">
                <ExternalLink className="h-5 w-5" /> Liens utiles
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-
      6">
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="mt-1 h-2 w-2 rounded-full bg-orange-500 flex-shrink-0"></div>
                  <p className="text-orange-700">Site officiel du royaume de Nikki</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 h-2 w-2 rounded-full bg-orange-500 flex-shrink-0"></div>
                  <p className="text-orange-700">Musée des cultures Bariba</p>
                </li>
              </ul>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  </section>
  </div>
  ); 
}