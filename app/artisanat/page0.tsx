// "use client";

// import { motion } from "framer-motion";
// import { ShoppingCart, Palette, Ruler, MapPin, Star } from "lucide-react";
// import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Badge } from "@/components/ui/badge";
// import Image from "next/image";
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

// const artworks = [
//   {
//     id: 1,
//     title: "Masque Guèlèdè",
//     artist: "Atelier Dossou",
//     price: 45000,
//     currency: "FCFA",
//     technique: "Bois sculpté",
//     origin: "Abomey",
//     rating: 4.8,
//     image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Gelede_Mask.jpg/800px-Gelede_Mask.jpg",
//     variants: ["Petit", "Moyen", "Grand"],
//     inStock: true
//   },
//   {
//     id: 2,
//     title: "Tissu Kenta",
//     artist: "Artisanes de Bohicon",
//     price: 25000,
//     currency: "FCFA",
//     technique: "Tissage traditionnel",
//     origin: "Bohicon",
//     rating: 4.5,
//     image: "https://www.afrik.com/wp-content/uploads/2020/04/bogolan2.jpg",
//     variants: ["1m", "2m", "3m"],
//     inStock: true
//   },
//   {
//     id: 3,
//     title: "Statue Fa",
//     artist: "Maître Hounon",
//     price: 75000,
//     currency: "FCFA",
//     technique: "Bronze à la cire perdue",
//     origin: "Ouidah",
//     rating: 5.0,
//     image: "https://www.bruno-mignot.com/galeries/974/coupe-ancienne-adjere-fa-yoruba-benin-statues-africaines.jpg",
//     variants: ["Unique"],
//     inStock: false
//   },
//   {
//     id: 4,
//     title: "Tableau Vodoun",
//     artist: "Adjoke",
//     price: 35000,
//     currency: "FCFA",
//     technique: "Peinture naturelle",
//     origin: "Porto-Novo",
//     rating: 4.2,
//     image: "https://lesateliersouidhart.com/wp-content/uploads/2023/08/Dignitaire-et-Adeptes-Vodoun-LAO-J64-1530x1914.jpg",
//     variants: ["30x40cm", "50x70cm"],
//     inStock: true
//   },
//   {
//     id: 5,
//     title: "Collier Perles",
//     artist: "Coopérative Allada",
//     price: 12000,
//     currency: "FCFA",
//     technique: "Perles traditionnelles",
//     origin: "Allada",
//     rating: 4.7,
//     image: "https://image.jimcdn.com/app/cms/image/transf/none/path/s7891419afc9749d0/image/id76daa0b8510c9fd/version/1434989895/image.jpg",
//     variants: ["50cm", "60cm"],
//     inStock: true
//   },
//   {
//     id: 6,
//     title: "Sculpture Zangbeto",
//     artist: "Atelier Zinsou",
//     price: 68000,
//     currency: "FCFA",
//     technique: "Bois et pigments",
//     origin: "Lokossa",
//     rating: 4.9,
//     image: "https://galerie-latelier.com/wp-content/uploads/2022/10/fon-zangbeto-fetiche-vaudou-art-africain-1-1024x1024.jpg",
//     variants: ["Petite", "Grande"],
//     inStock: true
//   }
// ];

// export default function ArtGalleryPage() {
//   return (
//     <div className="bg-[#FAF9F5] min-h-screen py-12 px-4">
//       <div className="max-w-6xl mx-auto">
//         {/* Hero Section */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="text-center mb-16"
//         >
//           <h1 className="text-4xl font-bold text-[#3A2D1E] mb-4 mt-12">
//             Artisanat d'Art du Bénin
//           </h1>
//           <p className="text-xl text-[#8B5A2B] max-w-2xl mx-auto">
//             Acquérez des pièces uniques directement des artisans locaux
//           </p>
//         </motion.div>

//         {/* Filters */}
//         <div className="flex flex-wrap justify-between gap-4 mb-12">
//           <div className="flex flex-wrap gap-3">
//             {["Tous", "Sculptures", "Textiles", "Peintures", "Bijoux"].map((filter) => (
//               <Badge
//                 key={filter}
//                 variant={filter === "Tous" ? "default" : "outline"}
//                 className="px-4 py-2 cursor-pointer hover:bg-[#5C4033] hover:text-white"
//               >
//                 {filter}
//               </Badge>
//             ))}
//           </div>

//           <Select>
//             <SelectTrigger className="w-[180px] bg-white">
//               <SelectValue placeholder="Trier par" />
//             </SelectTrigger>
//             <SelectContent>
//               <SelectItem value="price-asc">Prix croissant</SelectItem>
//               <SelectItem value="price-desc">Prix décroissant</SelectItem>
//               <SelectItem value="popular">Plus populaires</SelectItem>
//               <SelectItem value="recent">Plus récents</SelectItem>
//             </SelectContent>
//           </Select>
//         </div>

//         {/* Artworks Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {artworks.map((artwork) => (
//             <motion.div
//               key={artwork.id}
//               initial={{ opacity: 0, scale: 0.95 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.3 }}
//               viewport={{ once: true }}
//             >
//               <Card className="h-full overflow-hidden border-[#E5E0D6] hover:shadow-lg transition-all">
//                 <div className="relative h-64">
//                   <Image
//                     src={artwork.image}
//                     alt={artwork.title}
//                     fill
//                     className="object-cover"
//                     style={{ objectPosition: 'center' }}
//                   />
//                   {!artwork.inStock && (
//                     <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
//                       <span className="bg-white px-3 py-1 rounded-full text-sm font-medium">
//                         En rupture
//                       </span>
//                     </div>
//                   )}
//                 </div>

//                 <CardHeader>
//                   <CardTitle className="text-xl text-[#3A2D1E]">
//                     {artwork.title}
//                   </CardTitle>
//                   <div className="flex justify-between items-center">
//                     <p className="text-[#8B5A2B]">{artwork.artist}</p>
//                     <div className="flex items-center gap-1">
//                       <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
//                       <span className="text-sm">{artwork.rating}</span>
//                     </div>
//                   </div>
//                 </CardHeader>

//                 <CardContent>
//                   <div className="flex flex-wrap gap-2 mb-4">
//                     <Badge variant="outline" className="flex items-center gap-1">
//                       <Palette className="h-3 w-3" />
//                       {artwork.technique}
//                     </Badge>
//                     <Badge variant="outline" className="flex items-center gap-1">
//                       <MapPin className="h-3 w-3" />
//                       {artwork.origin}
//                     </Badge>
//                   </div>

//                   <Select>
//                     <SelectTrigger className="w-full bg-white">
//                       <SelectValue placeholder="Sélectionnez" />
//                     </SelectTrigger>
//                     <SelectContent>
//                       {artwork.variants.map((variant) => (
//                         <SelectItem key={variant} value={variant}>
//                           {variant}
//                         </SelectItem>
//                       ))}
//                     </SelectContent>
//                   </Select>
//                 </CardContent>

//                 <CardFooter className="flex justify-between items-center">
//                   <div>
//                     <p className="text-lg font-bold text-[#3A2D1E]">
//                       {artwork.price.toLocaleString()} {artwork.currency}
//                     </p>
//                     {artwork.price > 50000 && (
//                       <p className="text-xs text-green-600">Livraison offerte</p>
//                     )}
//                   </div>
//                   <Button 
//                     disabled={!artwork.inStock}
//                     className="gap-2 bg-[#8B5A2B] hover:bg-[#6B4522]"
//                   >
//                     <ShoppingCart className="h-4 w-4" />
//                     Ajouter
//                   </Button>
//                 </CardFooter>
//               </Card>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }












// ===========================================================================================================================================================

// "use client";

// import { useState } from "react";
// import { motion } from "framer-motion";
// import { 
//   ShoppingCart, 
//   Palette, 
//   MapPin, 
//   Star, 
//   Search, 
//   Heart, 
//   Filter, 
//   Grid, 
//   List, 
//   ChevronLeft, 
//   ChevronRight, 
//   Play, 
//   Quote, 
//   Calendar,
//   MapPin as Location,
//   Info
// } from "lucide-react";
// import Image from "next/image";
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
// import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Badge } from "@/components/ui/badge";
// import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import { Slider } from "@/components/ui/slider";

// // Données des œuvres d'art
// interface Artwork {
//   id: number;
//   title: string;
//   artist: string;
//   price: number;
//   currency: string;
//   technique: string;
//   origin: string;
//   rating: number;
//   image: string;
//   variants: string[];
//   inStock: boolean;
//   color?: string;
//   category: string;
//   isBestSeller?: boolean;
//   story?: string;
// }



// // Données des histoires d'artisans
// const artisanStories = [
//   {
//     id: 1,
//     name: "Kodjo Adéwolé",
//     title: "Maître sculpteur de masques Guèlèdè",
//     region: "Abomey",
//     story: "Issu d'une famille de sculpteurs depuis 7 générations, j'ai appris l'art des masques Guèlèdè dès l'âge de 10 ans. Chaque masque raconte une histoire de notre communauté et représente l'équilibre entre les forces visibles et invisibles. Je perpétue cette tradition inscrite au patrimoine immatériel de l'UNESCO depuis 2008.",
//     technique: "Sculpture sur bois d'iroko avec des outils transmis de génération en génération, suivie d'une peinture à base de pigments naturels.",
//     image: "https://i0.wp.com/originalfoundblog.com/wp-content/uploads/2017/02/img_0149.jpg?fit=3840%2C1665",
//     videoThumbnail: "https://i0.wp.com/originalfoundblog.com/wp-content/uploads/2017/02/img_0149.jpg?fit=3840%2C1665"
//   },
//   {
//     id: 2,
//     name: "Aïcha Dossou-Yovo",
//     title: "Tisserande de Kenta",
//     region: "Bohicon",
//     story: "Notre coopérative de femmes perpétue l'art du tissage Kenta, un tissu noble qui raconte notre histoire à travers ses motifs. Chaque motif a une signification précise liée à nos proverbes et sagesse ancestrale. Ce savoir-faire se transmet de mère en fille et constitue un pilier de notre identité culturelle.",
//     technique: "Tissage sur métier traditionnel avec des fils de coton teints selon des méthodes ancestrales utilisant des colorants végétaux.",
//     image: "https://i0.wp.com/originalfoundblog.com/wp-content/uploads/2017/02/img_0149.jpg?fit=3840%2C1665",
//     videoThumbnail: "https://i0.wp.com/originalfoundblog.com/wp-content/uploads/2017/02/img_0149.jpg?fit=3840%2C1665"
//   },
//   {
//     id: 3,
//     name: "Hounon Ezan",
//     title: "Artiste bronzier",
//     region: "Ouidah",
//     story: "Je travaille le bronze selon la technique ancestrale de la cire perdue, transmise depuis le royaume du Dahomey. Mes créations s'inspirent des divinités du Vodoun et des symboles royaux. Chaque pièce nécessite plusieurs semaines de travail et connecte le présent aux racines profondes de notre culture.",
//     technique: "Fonte à la cire perdue héritée des forgerons royaux d'Abomey, utilisant des matériaux locaux et des formules secrètes transmises par mes ancêtres.",
//     image: "https://i0.wp.com/originalfoundblog.com/wp-content/uploads/2017/02/img_0149.jpg?fit=3840%2C1665",
//     videoThumbnail: "https://i0.wp.com/originalfoundblog.com/wp-content/uploads/2017/02/img_0149.jpg?fit=3840%2C1665"
//   }
// ];

// // Données des régions culturelles
// const regions = [
//   {
//     id: 1,
//     name: "Abomey",
//     description: "Ancienne capitale du royaume du Dahomey, Abomey est célèbre pour ses sculptures sur bois, notamment les masques Guèlèdè, et ses tentures appliquées racontant l'histoire des rois.",
//     specialties: ["Masques Guèlèdè", "Tentures appliquées", "Sculptures royales"],
//     position: { x: 40, y: 55 },
//     image: "https://i0.wp.com/originalfoundblog.com/wp-content/uploads/2017/02/img_0149.jpg?fit=3840%2C1665"
//   },
//   {
//     id: 2,
//     name: "Ouidah",
//     description: "Centre spirituel du vodoun, Ouidah est renommée pour son travail du bronze et ses objets rituels, témoins de la richesse des traditions spirituelles béninoises.",
//     specialties: ["Bronze à la cire perdue", "Objets rituels", "Statuettes vodoun"],
//     position: { x: 20, y: 35 },
//     image: "https://i0.wp.com/originalfoundblog.com/wp-content/uploads/2017/02/img_0149.jpg?fit=3840%2C1665"
//   },
//   {
//     id: 3,
//     name: "Porto-Novo",
//     description: "La capitale du Bénin se distingue par ses peintures traditionnelles et son artisanat lié au palais royal, mêlant influences yoruba et européennes.",
//     specialties: ["Peintures vodoun", "Mobilier traditionnel", "Sculptures polychromes"],
//     position: { x: 80, y: 30 },
//     image: "https://i0.wp.com/originalfoundblog.com/wp-content/uploads/2017/02/img_0149.jpg?fit=3840%2C1665"
//   },
//   {
//     id: 4,
//     name: "Bohicon",
//     description: "Cette région est le centre du tissage traditionnel, notamment du tissu Kenta aux motifs symboliques utilisé dans les cérémonies royales et religieuses.",
//     specialties: ["Tissus Kenta", "Vêtements cérémoniels", "Tapisseries"],
//     position: { x: 45, y: 65 },
//     image: "https://i0.wp.com/originalfoundblog.com/wp-content/uploads/2017/02/img_0149.jpg?fit=3840%2C1665"
//   },
//   {
//     id: 5,
//     name: "Lokossa",
//     description: "Berceau des Zangbeto, gardiens de la nuit, cette région produit des sculptures et objets rituels liés à cette tradition ancestrale de protection.",
//     specialties: ["Sculptures Zangbeto", "Masques cérémoniels", "Amulettes protectrices"],
//     position: { x: 30, y: 80 },
//     image: "https://i0.wp.com/originalfoundblog.com/wp-content/uploads/2017/02/img_0149.jpg?fit=3840%2C1665"
//   }
// ];

// // Données des événements culturels
// const culturalEvents = [
//   {
//     id: 1,
//     title: "Démonstration de sculpture sur bois",
//     description: "Assistez en direct à la création d'un masque Guèlèdè par Maître Kodjo Adéwolé et découvrez les secrets de cet art ancestral.",
//     date: "15 mai 2025",
//     time: "14:00 - 16:00",
//     type: "Atelier en ligne",
//     image: "https://i0.wp.com/originalfoundblog.com/wp-content/uploads/2017/02/img_0149.jpg?fit=3840%2C1665"
//   },
//   {
//     id: 2,
//     title: "Foire internationale de l'artisanat béninois",
//     description: "Exposition des plus belles pièces d'artisanat du Bénin avec des artisans venus de toutes les régions du pays.",
//     date: "3-7 juin 2025",
//     time: "10:00 - 18:00",
//     type: "Exposition",
//     image: "https://i0.wp.com/originalfoundblog.com/wp-content/uploads/2017/02/img_0149.jpg?fit=3840%2C1665"
//   },
//   {
//     id: 3,
//     title: "Initiation au tissage Kenta",
//     description: "Apprenez les bases du tissage traditionnel et la signification des motifs avec la coopérative des tisserandes de Bohicon.",
//     date: "25 mai 2025",
//     time: "15:00 - 17:30",
//     type: "Atelier participatif",
//     image: "https://i0.wp.com/originalfoundblog.com/wp-content/uploads/2017/02/img_0149.jpg?fit=3840%2C1665"
//   },
//   {
//     id: 4,
//     title: "Conférence: L'Art comme patrimoine culturel",
//     description: "Discussion sur l'importance de préserver les techniques artisanales traditionnelles face à la mondialisation.",
//     date: "12 juin 2025",
//     time: "18:30 - 20:00",
//     type: "Conférence",
//     image: "https://i0.wp.com/originalfoundblog.com/wp-content/uploads/2017/02/img_0149.jpg?fit=3840%2C1665"
//   }
// ];

// // Composant principal
// export default function ArtGalleryPage() {
//   const [searchTerm, setSearchTerm] = useState("");


//   // États pour les nouvelles fonctionnalités
//   const [currentArtisanIndex, setCurrentArtisanIndex] = useState(0);
//   const [expandedArtisanStory, setExpandedArtisanStory] = useState(false);
//   const [selectedRegionId, setSelectedRegionId] = useState<number | null>(null);
//   const [showArtifactStory, setShowArtifactStory] = useState<number | null>(null);
//   const [selectedEvent, setSelectedEvent] = useState<number | null>(null);



//   // Fonctions pour les nouvelles fonctionnalités
//   const nextArtisan = () => {
//     setCurrentArtisanIndex((prev) => (prev + 1) % artisanStories.length);
//     setExpandedArtisanStory(false);
//   };

//   const prevArtisan = () => {
//     setCurrentArtisanIndex((prev) => (prev - 1 + artisanStories.length) % artisanStories.length);
//     setExpandedArtisanStory(false);
//   };

//   const currentArtisan = artisanStories[currentArtisanIndex];

//   return (
//     <div className="min-h-screen bg-[#faf9f5]">
//       {/* Hero Banner */}
//       <div className="relative h-64 md:h-96 bg-gradient-to-r from-[#3A2D1E] to-[#8B5A2B]">
//         <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
//           <div className="text-center text-white px-4 max-w-4xl">
//             <h1 className="text-3xl md:text-5xl font-bold mb-4">Artisanat d'Art du Bénin</h1>
//             <p className="text-xl mb-8">Découvrez des pièces uniques directement des artisans locaux</p>

//             <div className="relative max-w-2xl mx-auto">
//               <input
//                 type="text"
//                 placeholder="Rechercher des œuvres, artisans..."
//                 className="w-full px-6 py-3 rounded-full border-0 focus:ring-2 focus:ring-[#8B5A2B]"
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//               />
//               <Search className="absolute right-6 top-3.5 text-gray-500" />
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="max-w-7xl mx-auto px-4 py-8">


//         {/* NOUVELLE SECTION: Histoires des Artisans */}
//         <div className="bg-[#f5f0e8] py-16 px-4 mt-16 rounded-xl">
//           <div className="max-w-7xl mx-auto">
//             <div className="text-center mb-12">
//               <h2 className="text-3xl md:text-4xl font-bold text-[#3A2D1E] mb-4">Les Gardiens du Savoir-Faire</h2>
//               <p className="text-lg text-gray-700 max-w-3xl mx-auto">
//                 Découvrez les histoires des artisans qui perpétuent les traditions ancestrales du Bénin et donnent vie à ces chefs-d'œuvre culturels.
//               </p>
//             </div>

//             <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
//               {/* Navigation pour petits écrans */}
//               <div className="flex justify-center gap-4 lg:hidden mb-6">
//                 <Button 
//                   variant="outline" 
//                   size="icon" 
//                   onClick={prevArtisan}
//                   className="rounded-full border-[#8B5A2B] text-[#8B5A2B]"
//                 >
//                   <ChevronLeft className="h-6 w-6" />
//                 </Button>
//                 <Button 
//                   variant="outline" 
//                   size="icon" 
//                   onClick={nextArtisan}
//                   className="rounded-full border-[#8B5A2B] text-[#8B5A2B]"
//                 >
//                   className="rounded-full border-[#8B5A2B] text-[#8B5A2B]"

//                   <ChevronRight className="h-6 w-6" />
//                 </Button>
//               </div>

//               {/* Navigation pour grands écrans */}
//               <div className="hidden lg:block">
//                 <Button 
//                   variant="outline" 
//                   size="icon" 
//                   onClick={prevArtisan}
//                   className="rounded-full border-[#8B5A2B] text-[#8B5A2B] w-12 h-12"
//                 >
//                   <ChevronLeft className="h-6 w-6" />
//                 </Button>
//               </div>

//               {/* Image de l'artisan */}
//               <div className="col-span-1 lg:col-span-2">
//                 <div className="relative overflow-hidden rounded-lg aspect-square">
//                   <Image
//                     src={currentArtisan.image}
//                     alt={currentArtisan.name}
//                     fill
//                     className="object-cover"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
//                     <div className="p-4 text-white">
//                       <Button 
//                         variant="outline" 
//                         size="sm" 
//                         className="bg-white/20 hover:bg-white/30 border-white text-white flex items-center gap-2"
//                       >
//                         <Play className="h-4 w-4" />
//                         <span>Voir l'atelier</span>
//                       </Button>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Histoire de l'artisan */}
//               <div className="col-span-1 lg:col-span-2">
//                 <div className="bg-white p-6 rounded-lg shadow-sm h-full">
//                   <div className="flex items-center gap-2 mb-2">
//                     <MapPin className="h-4 w-4 text-[#8B5A2B]" />
//                     <span className="text-sm text-gray-600">{currentArtisan.region}</span>
//                   </div>
//                   <h3 className="text-xl font-bold mb-1">{currentArtisan.name}</h3>
//                   <p className="text-[#8B5A2B] mb-4">{currentArtisan.title}</p>

//                   <div className={expandedArtisanStory ? "" : "line-clamp-5"}>
//                     <p className="text-gray-700 mb-4">{currentArtisan.story}</p>
//                     {expandedArtisanStory && (
//                       <div className="mt-4">
//                         <h4 className="font-medium mb-2">Technique</h4>
//                         <p className="text-gray-700">{currentArtisan.technique}</p>
//                       </div>
//                     )}
//                   </div>

//                   <Button 
//                     variant="link" 
//                     className="text-[#8B5A2B] p-0 h-auto mt-2"
//                     onClick={() => setExpandedArtisanStory(!expandedArtisanStory)}
//                   >
//                     {expandedArtisanStory ? "Voir moins" : "Lire plus"}
//                   </Button>
//                 </div>
//               </div>

//               {/* Navigation pour grands écrans */}
//               <div className="hidden lg:block">
//                 <Button 
//                   variant="outline" 
//                   size="icon" 
//                   onClick={nextArtisan}
//                   className="rounded-full border-[#8B5A2B] text-[#8B5A2B] w-12 h-12"
//                 >
//                   <ChevronRight className="h-6 w-6" />
//                 </Button>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* NOUVELLE SECTION: Carte des régions culturelles */}
//         <div className="mt-16">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl md:text-4xl font-bold text-[#3A2D1E] mb-4">Voyage à travers les régions artistiques</h2>
//             <p className="text-lg text-gray-700 max-w-3xl mx-auto">
//               Chaque région du Bénin a développé ses propres traditions artistiques uniques, liées à son histoire et sa culture.
//             </p>
//           </div>

//           <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//             {/* Carte interactive */}
//             <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow-sm">
//               <div className="relative h-[500px] border rounded-lg overflow-hidden">
//                 {/* Représentation simplifiée de la carte */}
//                 <div className="absolute inset-0 bg-[#f9f4e9]">
//                   {/* Fond de carte */}
//                   <svg width="100%" height="100%" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
//                     <path d="M10,10 Q30,5 40,15 T80,20 T90,50 T70,80 T30,70 T10,30 Z" fill="#e9e4d7" stroke="#ccc" strokeWidth="0.5" />

//                     {/* Points représentant les régions */}
//                     {regions.map(region => (
//                       <g key={region.id} onClick={() => setSelectedRegionId(region.id)}>
//                         <circle 
//                           cx={region.position.x} 
//                           cy={region.position.y} 
//                           r={selectedRegionId === region.id ? 3 : 2} 
//                           fill={selectedRegionId === region.id ? "#8B5A2B" : "#3A2D1E"} 
//                           stroke="#fff" 
//                           strokeWidth="0.5"
//                           className="cursor-pointer"
//                         />
//                         <text 
//                           x={region.position.x} 
//                           y={region.position.y - 5} 
//                           textAnchor="middle" 
//                           fill="#3A2D1E" 
//                           fontSize="3"
//                           fontWeight={selectedRegionId === region.id ? "bold" : "normal"}
//                           className="cursor-pointer"
//                         >
//                           {region.name}
//                         </text>
//                       </g>
//                     ))}
//                   </svg>
//                 </div>
//               </div>
//             </div>

//             {/* Informations sur la région sélectionnée */}
//             <div>
//               {selectedRegionId ? (
//                 <Card className="h-full">
//                   <CardHeader>
//                     <div className="relative h-48 -mt-6 -mx-6 rounded-t-lg overflow-hidden">
//                       <Image
//                         src={regions.find(r => r.id === selectedRegionId)?.image || ""}
//                         alt={regions.find(r => r.id === selectedRegionId)?.name || ""}
//                         fill
//                         className="object-cover"
//                       />
//                     </div>
//                     <CardTitle className="text-2xl mt-2">
//                       {regions.find(r => r.id === selectedRegionId)?.name}
//                     </CardTitle>
//                   </CardHeader>
//                   <CardContent>
//                     <p className="text-gray-700">
//                       {regions.find(r => r.id === selectedRegionId)?.description}
//                     </p>

//                     <div className="mt-4">
//                       <h4 className="font-medium mb-2">Spécialités artistiques</h4>
//                       <div className="flex flex-wrap gap-2">
//                         {regions.find(r => r.id === selectedRegionId)?.specialties.map((specialty, index) => (
//                           <Badge key={index} variant="outline" className="bg-[#f5f0e8]">
//                             {specialty}
//                           </Badge>
//                         ))}
//                       </div>
//                     </div>
//                   </CardContent>
//                   <CardFooter>
//                     <Button className="bg-[#8B5A2B] hover:bg-[#6B4522] w-full">
//                       Voir les œuvres de cette région
//                     </Button>
//                   </CardFooter>
//                 </Card>
//               ) : (
//                 <Card className="h-full flex items-center justify-center p-8 text-center">
//                   <div>
//                     <MapPin className="h-12 w-12 mx-auto text-gray-300 mb-4" />
//                     <h3 className="text-xl font-medium text-gray-600 mb-2">Explorez la carte</h3>
//                     <p className="text-gray-500">Cliquez sur une région pour en savoir plus sur son artisanat unique</p>
//                   </div>
//                 </Card>
//               )}
//             </div>
//           </div>
//         </div>

//         {/* NOUVELLE SECTION: Événements culturels */}
//         <div className="mt-16">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl md:text-4xl font-bold text-[#3A2D1E] mb-4">Agenda culturel</h2>
//             <p className="text-lg text-gray-700 max-w-3xl mx-auto">
//               Participez à nos événements pour rencontrer les artisans et découvrir leurs techniques ancestrales.
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//             {culturalEvents.map(event => (
//               <Card 
//                 key={event.id} 
//                 className={`overflow-hidden transition-all duration-200 ${selectedEvent === event.id ? "ring-2 ring-[#8B5A2B]" : ""}`}
//                 onClick={() => setSelectedEvent(selectedEvent === event.id ? null : event.id)}
//               >
//                 <div className="relative h-40">
//                   <Image
//                     src={event.image}
//                     alt={event.title}
//                     fill
//                     className="object-cover"
//                   />
//                   <div className="absolute bottom-0 left-0 bg-[#8B5A2B] text-white px-3 py-1 rounded-tr-lg">
//                     <Calendar className="h-4 w-4" />
//                   </div>
//                 </div>
//                 <CardContent className="pt-4">
//                   <Badge variant="outline" className="mb-2">
//                     {event.type}
//                   </Badge>
//                   <h3 className="font-bold text-lg leading-tight mb-1">{event.title}</h3>
//                   <div className="flex items-center text-sm text-gray-600 mb-3">
//                     <Calendar className="h-3 w-3 mr-1" />
//                     <span>{event.date} • {event.time}</span>
//                   </div>

//                   {selectedEvent === event.id && (
//                     <motion.div
//                       initial={{ opacity: 0, height: 0 }}
//                       animate={{ opacity: 1, height: "auto" }}
//                       className="mt-2"
//                     >
//                       <p className="text-gray-700 text-sm">{event.description}</p>
//                       <Button className="mt-4 w-full bg-[#8B5A2B] hover:bg-[#6B4522]">
//                         S'inscrire
//                       </Button>
//                     </motion.div>
//                   )}
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>

//         {/* Témoignages */}
//         <div className="mt-16 bg-[#f5f0e8] py-16 px-4 rounded-xl">
//           <div className="max-w-5xl mx-auto">
//             <div className="text-center mb-12">
//               <Quote className="h-12 w-12 mx-auto text-[#8B5A2B] mb-4" />
//               <h2 className="text-3xl md:text-4xl font-bold text-[#3A2D1E] mb-4">Ce que disent nos clients</h2>
//             </div>

//             <motion.div
//               whileInView={{ opacity: 1, y: 0 }}
//               initial={{ opacity: 0, y: 20 }}
//               transition={{ duration: 0.5 }}
//               className="bg-white p-8 rounded-lg shadow-sm"
//             >
//               <p className="text-lg text-gray-700 italic mb-6">
//                 "J'ai acheté un masque Guèlèdè pour ma collection d'art africain et j'ai été impressionné par la qualité du travail et la richesse des détails. L'histoire partagée par l'artisan a donné une dimension particulière à cette acquisition."
//               </p>
//               <div className="flex items-center">
//                 <div className="flex-shrink-0">
//                   <div className="w-12 h-12 rounded-full bg-[#3A2D1E]"></div>
//                 </div>
//                 <div className="ml-4">
//                   <h4 className="font-bold">Sophie Dubois</h4>
//                   <p className="text-gray-600">Collectionneuse d'art, Paris</p>
//                 </div>
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </div>

//       {/* Footer */}

//     </div>
//   );
// }





// =============================================================================================================
// "use client";
// import React from "react";
// import { motion } from "framer-motion";
// import {
//   ShoppingCart,
//   Palette,
//   ChevronLeft,
//   ChevronRight,
//   Play,
//   MapPin,
//   Search,
//   Calendar,
//   Quote,
// } from "lucide-react";
// import Image from "next/image";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";

// // Données des artisans
// const artisanStories = [
//   {
//     id: 1,
//     name: "Kodjo Adéwolé",
//     title: "Maître sculpteur de masques Guèlèdè",
//     region: "Abomey",
//     story:
//       "Issu d'une famille de sculpteurs depuis 7 générations, j'ai appris l'art des masques Guèlèdè dès l'âge de 10 ans. Chaque masque raconte une histoire de notre communauté.",
//     image:
//       "https://i0.wp.com/originalfoundblog.com/wp-content/uploads/2017/02/img_0149.jpg?fit=3840%2C1665 ",
//   },
//   {
//     id: 2,
//     name: "Aïcha Dossou-Yovo",
//     title: "Tisserande de Kenta",
//     region: "Bohicon",
//     story:
//       "Notre coopérative perpétue l'art du tissage Kenta. Ce savoir-faire se transmet de mère en fille et constitue un pilier de notre identité culturelle.",
//     image:
//       "https://i0.wp.com/originalfoundblog.com/wp-content/uploads/2017/02/img_0149.jpg?fit=3840%2C1665 ",
//   },
//   {
//     id: 3,
//     name: "Hounon Ezan",
//     title: "Artiste bronzier",
//     region: "Ouidah",
//     story:
//       "Je travaille le bronze selon la technique ancestrale de la cire perdue, héritée des forgerons royaux d'Abomey. Mes créations connectent le présent aux racines profondes de notre culture.",
//     image:
//       "https://i0.wp.com/originalfoundblog.com/wp-content/uploads/2017/02/img_0149.jpg?fit=3840%2C1665 ",
//   },
// ];

// // Régions artistiques
// const regions = [
//   {
//     id: 1,
//     name: "Abomey",
//     description: "Ancienne capitale du royaume du Dahomey, célèbre pour ses sculptures sur bois.",
//     specialties: ["Masques Guèlèdè", "Sculptures royales"],
//     position: { x: 40, y: 55 },
//     image:
//       "https://i0.wp.com/originalfoundblog.com/wp-content/uploads/2017/02/img_0149.jpg?fit=3840%2C1665 ",
//   },
//   {
//     id: 2,
//     name: "Ouidah",
//     description: "Centre spirituel du vodoun, renommée pour son travail du bronze.",
//     specialties: ["Bronze à la cire perdue", "Statuettes vodoun"],
//     position: { x: 20, y: 35 },
//     image:
//       "https://i0.wp.com/originalfoundblog.com/wp-content/uploads/2017/02/img_0149.jpg?fit=3840%2C1665 ",
//   },
// ];

// // Événements culturels
// const culturalEvents = [
//   {
//     id: 1,
//     title: "Démonstration de sculpture sur bois",
//     description: "Assistez en direct à la création d'un masque Guèlèdè par Maître Kodjo Adéwolé.",
//     date: "15 mai 2025",
//     time: "14:00 - 16:00",
//     type: "Atelier en ligne",
//     image:
//       "https://i0.wp.com/originalfoundblog.com/wp-content/uploads/2017/02/img_0149.jpg?fit=3840%2C1665 ",
//   },
//   {
//     id: 2,
//     title: "Foire internationale de l'artisanat béninois",
//     description: "Exposition des plus belles pièces d'artisanat du Bénin.",
//     date: "3-7 juin 2025",
//     time: "10:00 - 18:00",
//     type: "Exposition",
//     image:
//       "https://i0.wp.com/originalfoundblog.com/wp-content/uploads/2017/02/img_0149.jpg?fit=3840%2C1665 ",
//   },
// ];

// export default function ArtisanatPage() {
//   const [currentArtisanIndex, setCurrentArtisanIndex] = React.useState(0);
//   const [selectedRegionId, setSelectedRegionId] = React.useState<number | null>(null);
//   const [expandedStory, setExpandedStory] = React.useState(false);

//   const currentArtisan = artisanStories[currentArtisanIndex];
//   const selectedRegion = regions.find((r) => r.id === selectedRegionId);

//   return (
//     <div className="min-h-screen bg-white">
//       {/* Hero Banner */}
//       <section className="relative h-[50vh] md:h-[70vh] bg-gradient-to-br from-[#3A2D1E] to-[#8B5A2B] text-white flex items-center justify-center px-6 overflow-hidden">
//         <div className="absolute inset-0 bg-black/30 z-10" />
//         <Image
//           src="https://i0.wp.com/originalfoundblog.com/wp-content/uploads/2017/02/img_0149.jpg?fit=3840%2C1665 "
//           alt="Artisanat Béninois"
//           fill
//           className="object-cover"
//         />
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="z-20 text-center max-w-3xl mx-auto"
//         >
//           <h1 className="text-4xl md:text-6xl font-bold mb-4">L'Artisanat Vivant du Bénin</h1>
//           <p className="text-xl mb-6">
//             Des œuvres uniques créées par les mains expertes de nos maîtres-artisans.
//           </p>
//           <Button className="bg-white text-[#3A2D1E] hover:bg-gray-100 px-6 py-3 rounded-full shadow-lg">
//             Explorer les œuvres
//           </Button>
//         </motion.div>
//       </section>

//       {/* Section Histoires des Artisans */}
//       <section className="py-16 bg-[#FEF5E7] px-6">
//         <div className="max-w-6xl mx-auto">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl font-bold text-[#3A2D1E] mb-4">Les Gardiens du Savoir-Faire</h2>
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-5 gap-6 items-center">
//             <div>
//               <Button
//                 variant="outline"
//                 size="icon"
//                 onClick={() =>
//                   setCurrentArtisanIndex(
//                     (prev) => (prev - 1 + artisanStories.length) % artisanStories.length
//                   )
//                 }
//                 className="rounded-full border-[#8B5A2B] text-[#8B5A2B]"
//               >
//                 <ChevronLeft className="h-6 w-6" />
//               </Button>
//             </div>
//             <div className="col-span-3">
//               <Card className="overflow-hidden">
//                 <div className="relative h-72">
//                   <Image
//                     src={currentArtisan.image}
//                     alt={currentArtisan.name}
//                     fill
//                     className="object-cover"
//                   />
//                   <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
//                     <h3 className="text-lg font-bold text-white">{currentArtisan.name}</h3>
//                     <p className="text-sm text-white">{currentArtisan.title}</p>
//                   </div>
//                 </div>
//                 <CardContent className="mt-2">
//                   <p className={`text-gray-700 ${expandedStory ? "" : "line-clamp-3"}`}>
//                     {currentArtisan.story}
//                   </p>
//                   <Button
//                     variant="link"
//                     className="text-[#8B5A2B] mt-2 p-0"
//                     onClick={() => setExpandedStory(!expandedStory)}
//                   >
//                     {expandedStory ? "Voir moins" : "Lire plus"}
//                   </Button>
//                 </CardContent>
//               </Card>
//             </div>
//             <div>
//               <Button
//                 variant="outline"
//                 size="icon"
//                 onClick={() =>
//                   setCurrentArtisanIndex((prev) => (prev + 1) % artisanStories.length)
//                 }
//                 className="rounded-full border-[#8B5A2B] text-[#8B5A2B]"
//               >
//                 <ChevronRight className="h-6 w-6" />
//               </Button>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Carte interactive des régions */}
//       <section className="py-16 px-6">
//         <div className="max-w-6xl mx-auto">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl font-bold text-[#3A2D1E] mb-4">Voyage à travers les régions artistiques</h2>
//           </div>
//           <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//             <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow-sm">
//               <div className="relative h-96 border rounded-lg overflow-hidden">
//                 <svg width="100%" height="100%" viewBox="0 0 100 100">
//                   {regions.map((region) => (
//                     <g key={region.id}>
//                       <circle
//                         cx={region.position.x}
//                         cy={region.position.y}
//                         r={3}
//                         fill="#8B5A2B"
//                         stroke="#fff"
//                         strokeWidth="0.5"
//                         className="cursor-pointer"
//                         onClick={() => setSelectedRegionId(region.id)}
//                       />
//                       <text
//                         x={region.position.x}
//                         y={region.position.y - 5}
//                         textAnchor="middle"
//                         fontSize="3"
//                         fontWeight="bold"
//                         fill="#3A2D1E"
//                         className="cursor-pointer"
//                       >
//                         {region.name}
//                       </text>
//                     </g>
//                   ))}
//                 </svg>
//               </div>
//             </div>
//             <div>
//               {selectedRegion && selectedRegionId ? (
//                 <Card className="h-full">
//                   <div className="relative h-48">
//                     <Image
//                       src={selectedRegion.image}
//                       alt={selectedRegion.name}
//                       fill
//                       className="object-cover"
//                     />
//                   </div>
//                   <CardHeader>
//                     <CardTitle>{selectedRegion.name}</CardTitle>
//                   </CardHeader>
//                   <CardContent>
//                     <p className="text-sm text-gray-700">{selectedRegion.description}</p>
//                     <div className="mt-4 flex flex-wrap gap-2">
//                       {selectedRegion.specialties.map((spec, i) => (
//                         <Badge key={i} variant="outline" className="bg-[#f5f0e8]">
//                           {spec}
//                         </Badge>
//                       ))}
//                     </div>
//                   </CardContent>
//                   <CardFooter>
//                     <Button className="w-full bg-[#8B5A2B] hover:bg-[#6B4522]">
//                       Explorer cette région
//                     </Button>
//                   </CardFooter>
//                 </Card>
//               ) : (
//                 <div className="flex flex-col items-center justify-center h-full text-center bg-white p-6 rounded-lg shadow-sm">
//                   <MapPin className="h-12 w-12 text-gray-300 mb-4" />
//                   <h3 className="text-xl text-gray-600">Explorez la carte</h3>
//                   <p className="text-gray-500">Cliquez sur une région pour en savoir plus</p>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Événements culturels */}
//       <section className="py-16 bg-[#FEF5E7] px-6">
//         <div className="max-w-6xl mx-auto">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl font-bold text-[#3A2D1E] mb-4">Agenda Culturel</h2>
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//             {culturalEvents.map((event) => (
//               <Card key={event.id} className="overflow-hidden cursor-pointer hover:shadow-md transition-shadow">
//                 <div className="relative h-40">
//                   <Image
//                     src={event.image}
//                     alt={event.title}
//                     fill
//                     className="object-cover"
//                   />
//                   <div className="absolute top-2 right-2 bg-white/80 px-2 py-1 text-xs rounded">
//                     {event.type}
//                   </div>
//                 </div>
//                 <CardContent className="pt-4">
//                   <h3 className="font-semibold text-lg">{event.title}</h3>
//                   <div className="flex items-center text-sm text-gray-600 mt-2">
//                     <Calendar className="h-4 w-4 mr-1" />
//                     <span>{event.date}, {event.time}</span>
//                   </div>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Témoignages */}
//       <section className="py-16 px-6 bg-white">
//         <div className="max-w-4xl mx-auto text-center">
//           <Quote className="h-12 w-12 mx-auto text-[#8B5A2B] mb-4" />
//           <p className="italic text-lg text-gray-700 mb-6">
//             "J’ai découvert une pièce unique qui raconte l’âme du Bénin."
//           </p>
//           <h4 className="font-bold">Jean M.</h4>
//           <p className="text-sm text-gray-600">Paris, France</p>
//         </div>
//       </section>

//       {/* Call To Action Final */}
//       <section className="py-20 px-6 bg-gradient-to-r from-[#8B5A2B] to-[#6B4522] text-white text-center">
//         <h2 className="text-3xl font-bold mb-4">Prêt à explorer l’héritage culturel du Bénin ?</h2>
//         <div className="flex flex-col sm:flex-row gap-4 justify-center">
//           <Button className="bg-white text-[#3A2D1E] hover:bg-gray-100">
//             <img src="/assets/app-store.svg" alt="App Store" className="h-6 mr-2" /> App Store
//           </Button>
//           <Button className="bg-white text-[#3A2D1E] hover:bg-gray-100">
//             <img src="/assets/google-play.svg" alt="Google Play" className="h-6 mr-2" /> Google Play
//           </Button>
//         </div>
//       </section>
//     </div>
//   );
// }
























"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShoppingCart,
  Palette,
  ChevronLeft,
  ChevronRight,
  Play,
  MapPin,
  Search,
  Calendar,
  Quote,
  ArrowRight,
  Star,
  Heart,
  ArrowDown,
} from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// Données des artisans
const artisanStories = [
  {
    id: 1,
    name: "Kodjo Adéwolé",
    title: "Maître sculpteur de masques Guèlèdè",
    region: "Abomey",
    story:
      "Issu d'une famille de sculpteurs depuis 7 générations, j'ai appris l'art des masques Guèlèdè dès l'âge de 10 ans. Chaque masque raconte une histoire de notre communauté et protège notre héritage culturel.",
    image: "https://picsum.photos/seed/nikki/1920/1080",
    rating: 4.8,
  },
  {
    id: 2,
    name: "Aïcha Dossou-Yovo",
    title: "Tisserande de Kenta",
    region: "Bohicon",
    story:
      "Notre coopérative perpétue l'art du tissage Kenta. Ce savoir-faire se transmet de mère en fille depuis des siècles et constitue un pilier de notre identité culturelle fon.",
    image: "https://picsum.photos/seed/nikki/1920/1080",
    rating: 4.9,
  },
  {
    id: 3,
    name: "Hounon Ezan",
    title: "Artiste bronzier",
    region: "Ouidah",
    story:
      "Je travaille le bronze selon la technique ancestrale de la cire perdue, héritée des forgerons royaux d'Abomey. Mes créations connectent le présent aux racines profondes de notre culture vodoun.",
    image: "https://picsum.photos/seed/nikki/1920/1080",
    rating: 5.0,
  },
];

// Régions artistiques avec coordonnées précises
const regions = [
  {
    id: 1,
    name: "Abomey",
    description: "Ancienne capitale du royaume du Dahomey, célèbre pour ses sculptures sur bois et bas-reliefs royaux.",
    specialties: ["Masques Guèlèdè", "Sculptures royales", "Bas-reliefs"],
    position: { x: 120, y: 550 },
    color: "#8B5A2B",
  },
  {
    id: 2,
    name: "Ouidah",
    description: "Centre spirituel du vodoun, renommée pour son travail du bronze et ses sculptures rituelles.",
    specialties: ["Bronze à la cire perdue", "Statuettes vodoun", "Art sacré"],
    position: { x: 80, y: 590 },
    color: "#6B4522",
  },
  {
    id: 3,
    name: "Porto-Novo",
    description: "Capitale culturelle avec son architecture afro-brésilienne et ses tissages traditionnels.",
    specialties: ["Tissage Adja", "Architecture", "Peintures murales"],
    position: { x: 190, y: 590 },
    color: "#3A2D1E",
  },
  {
    id: 4,
    name: "Natitingou",
    description: "Région des Tata Somba et de l'artisanat utilitaire des populations Betammaribé.",
    specialties: ["Architecture traditionnelle", "Vannerie", "Poterie"],
    position: { x: 120, y: 180 },
    color: "#A67C52",
  },
  {
    id: 5,
    name: "Parakou",
    description: "Carrefour culturel entre le nord et le sud, connu pour ses textiles traditionnels et objets en cuir.",
    specialties: ["Textiles", "Maroquinerie", "Instruments de musique"],
    position: { x: 165, y: 320 },
    color: "#9C6644",
  },
  {
    id: 6,
    name: "Cotonou",
    description: "Capitale économique où traditions et modernité se rencontrent dans l'artisanat contemporain.",
    specialties: ["Art contemporain", "Bijouterie", "Mode éthique"],
    position: { x: 145, y: 610 },
    color: "#7D5A4F",
  },
];
// Événements culturels
const culturalEvents = [
  {
    id: 1,
    title: "Démonstration de sculpture sur bois",
    description: "Assistez en direct à la création d'un masque Guèlèdè par Maître Kodjo Adéwolé.",
    date: "15 mai 2025",
    time: "14:00 - 16:00",
    type: "Atelier en ligne",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGuEPGfgPBnbfN5uDV6VPv-zG4-4FByvzJdQ&s",
  },
  {
    id: 2,
    title: "Foire internationale de l'artisanat",
    description: "Exposition-vente des plus belles pièces d'artisanat du Bénin.",
    date: "3-7 juin 2025",
    time: "10:00 - 18:00",
    type: "Exposition",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGuEPGfgPBnbfN5uDV6VPv-zG4-4FByvzJdQ&s",
  },
  {
    id: 3,
    title: "Festival des arts vodoun",
    description: "Célébration des arts sacrés et rituels du Bénin.",
    date: "10-12 janvier 2025",
    time: "Toute la journée",
    type: "Festival",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGuEPGfgPBnbfN5uDV6VPv-zG4-4FByvzJdQ&s",
  },
  {
    id: 4,
    title: "Stage de tissage traditionnel",
    description: "Apprenez les techniques ancestrales du tissage Kenta.",
    date: "22-24 mars 2025",
    time: "09:00 - 12:00",
    type: "Atelier",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGuEPGfgPBnbfN5uDV6VPv-zG4-4FByvzJdQ&s",
  },
];

export default function ArtisanatPage() {
  const [currentArtisanIndex, setCurrentArtisanIndex] = useState(0);
  const [expandedStory, setExpandedStory] = useState(false);

  const currentArtisan = artisanStories[currentArtisanIndex];

    const [selectedRegionId, setSelectedRegionId] = useState<number | null>(null);
    const [hoveredRegion, setHoveredRegion] = useState<number | null>(null);
  
    const selectedRegion = regions.find((r) => r.id === selectedRegionId);

  return (
    <div className="min-h-screen bg-[#FEF5E7]">
      {/* Hero Banner avec animation */}
      <section className="relative h-[70vh] bg-gradient-to-br from-[#3A2D1E] to-[#8B5A2B] text-white flex items-center justify-center px-6 overflow-hidden">
        <div className="absolute inset-0 bg-black/30 z-10" />
        <Image
          src="https://www.francetvinfo.fr/pictures/G1sQRd7Cjc4dEHt9QElwAljjJLc/0x162:5051x3000/432x243/filters:format(jpg)/2018/11/23/phpQuYpsE.jpg"
          alt="Artisanat Béninois"
          fill
          className="object-cover"
          priority
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="z-20 text-center max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="inline-block px-6 py-2 rounded-full bg-amber-500/20 text-amber-300 text-sm font-medium mb-6 border border-amber-500/30"
          >
            PATRIMOINE VIVANT
          </motion.div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            L'Artisanat <span className="text-amber-400">Authentique</span> du Bénin
          </h1>
          <motion.p
            className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Découvrez des œuvres uniques créées par les mains expertes de nos maîtres-artisans
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all gap-2">
              Explorer les œuvres
              <ArrowRight className="h-5 w-5" />
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg">
              <Play className="h-5 w-5 mr-2" />
              Voir la vidéo
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white cursor-pointer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          whileHover={{ y: 5 }}
        >
          <a href="#artisans" className="flex flex-col items-center">
            <span className="text-sm mb-2">Découvrir plus</span>
            <ArrowDown className="h-5 w-5 animate-bounce" />
          </a>
        </motion.div>
      </section>


      {/* Carte interactive des régions */}
      <section className="py-24 px-4 bg-[#FEF5E7]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.span
              className="inline-block px-4 py-1 rounded-full bg-amber-100 text-amber-800 text-sm font-medium mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              EXPLOREZ PAR RÉGION
            </motion.span>
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-[#3A2D1E] mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Carte des <span className="text-amber-600">traditions artisanales</span>
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Découvrez les spécialités artisanales de chaque région du Bénin
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 bg-gradient-to-br from-white to-amber-50 p-6 rounded-xl shadow-lg border border-amber-100 relative overflow-hidden">
                  {/* Effet de grain sur la carte */}
                  <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')] opacity-30" />
          
                  {/* Effet de brouillard */}
                  <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-amber-50 to-transparent" />
                  <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-amber-50 to-transparent" />
          
                  <div className="relative h-[500px] w-full">
                    {/* Carte SVG du Bénin avec forme réelle */}
                    <svg
                      width="100%"
                      height="100%"
                      viewBox="0 0 300 650"
                      className="drop-shadow-md"
                    >
                      {/* Définitions pour les effets */}
                      <defs>
                        <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                          <feGaussianBlur stdDeviation="8" result="blur" />
                          <feFlood floodColor="#D97706" floodOpacity="0.2" result="color" />
                          <feComposite in="color" in2="blur" operator="in" result="shadow" />
                          <feComposite in="SourceGraphic" in2="shadow" operator="over" />
                        </filter>
                        <linearGradient id="mapGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#FEF3C7" />
                          <stop offset="100%" stopColor="#FCD34D" />
                        </linearGradient>
                        <pattern id="pattern-circles" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                          <circle cx="10" cy="10" r="1" fill="#92400E" fillOpacity="0.1" />
                        </pattern>
                      </defs>
          
                      {/* Forme du Bénin basée sur l'image fournie */}
                      <path
                        d="M150,50 C160,52 163,60 167,67 C171,74 175,82 175,90 C175,98 177,106 180,114 
                               C183,122 185,130 185,138 C185,146 183,154 180,162 C177,170 175,178 175,186 
                               C175,194 177,202 180,210 C183,218 185,226 185,234 C185,242 183,250 180,258 
                               C177,266 175,274 175,282 C175,290 178,298 182,306 C186,314 190,322 190,330 
                               C190,338 187,346 183,354 C179,362 175,370 175,378 C175,386 180,394 186,402 
                               C192,410 198,418 198,426 C198,434 193,442 187,450 C181,458 175,466 175,474 
                               C175,482 180,490 185,498 C190,506 195,514 195,522 C195,530 190,538 185,546 
                               C180,554 175,562 175,570 C175,578 177,586 180,594 C183,602 185,610 178,618 
                               C171,626 156,634 150,642 C144,634 129,626 122,618 C115,610 117,602 120,594 
                               C123,586 125,578 125,570 C125,562 120,554 115,546 C110,538 105,530 105,522 
                               C105,514 110,506 115,498 C120,490 125,482 125,474 C125,466 119,458 113,450 
                               C107,442 102,434 102,426 C102,418 108,410 114,402 C120,394 125,386 125,378 
                               C125,370 121,362 117,354 C113,346 110,338 110,330 C110,322 114,314 118,306 
                               C122,298 125,290 125,282 C125,274 123,266 120,258 C117,250 115,242 115,234 
                               C115,226 117,218 120,210 C123,202 125,194 125,186 C125,178 123,170 120,162 
                               C117,154 115,146 115,138 C115,130 117,122 120,114 C123,106 125,98 125,90 
                               C125,82 129,74 133,67 C137,60 140,52 150,50"
                        fill="url(#mapGradient)"
                        fillOpacity="0.9"
                        stroke="#8B5A2B"
                        strokeWidth="2"
                        strokeLinejoin="round"
                        filter="url(#glow)"
                      />
          
                      {/* Motif de texture sur la carte */}
                      <path
                        d="M150,50 C160,52 163,60 167,67 C171,74 175,82 175,90 C175,98 177,106 180,114 
                             C183,122 185,130 185,138 C185,146 183,154 180,162 C177,170 175,178 175,186 
                             C175,194 177,202 180,210 C183,218 185,226 185,234 C185,242 183,250 180,258 
                             C177,266 175,274 175,282 C175,290 178,298 182,306 C186,314 190,322 190,330 
                             C190,338 187,346 183,354 C179,362 175,370 175,378 C175,386 180,394 186,402 
                             C192,410 198,418 198,426 C198,434 193,442 187,450 C181,458 175,466 175,474 
                             C175,482 180,490 185,498 C190,506 195,514 195,522 C195,530 190,538 185,546 
                             C180,554 175,562 175,570 C175,578 177,586 180,594 C183,602 185,610 178,618 
                             C171,626 156,634 150,642 C144,634 129,626 122,618 C115,610 117,602 120,594 
                             C123,586 125,578 125,570 C125,562 120,554 115,546 C110,538 105,530 105,522 
                             C105,514 110,506 115,498 C120,490 125,482 125,474 C125,466 119,458 113,450 
                             C107,442 102,434 102,426 C102,418 108,410 114,402 C120,394 125,386 125,378 
                             C125,370 121,362 117,354 C113,346 110,338 110,330 C110,322 114,314 118,306 
                             C122,298 125,290 125,282 C125,274 123,266 120,258 C117,250 115,242 115,234 
                             C115,226 117,218 120,210 C123,202 125,194 125,186 C125,178 123,170 120,162 
                             C117,154 115,146 115,138 C115,130 117,122 120,114 C123,106 125,98 125,90 
                             C125,82 129,74 133,67 C137,60 140,52 150,50"
                        fill="url(#pattern-circles)"
                        strokeWidth="0"
                      />
          
                      {/* Frontières intérieures légères pour simuler les départements */}
                      <path
                        d="M150,200 L190,220 M110,300 L190,310 M120,450 L180,430"
                        stroke="#8B5A2B"
                        strokeWidth="0.5"
                        strokeDasharray="5,5"
                        strokeOpacity="0.3"
                      />
          
                      {/* Noms des pays voisins */}
                      <text x="220" y="300" fontSize="12" fill="#8B5A2B" opacity="0.7" fontWeight="300">NIGERIA</text>
                      <text x="50" y="300" fontSize="12" fill="#8B5A2B" opacity="0.7" fontWeight="300">TOGO</text>
                      <text x="150" y="30" fontSize="12" fill="#8B5A2B" opacity="0.7" fontWeight="300">BURKINA FASO</text>
                      <text x="150" y="640" fontSize="12" fill="#8B5A2B" opacity="0.7" fontWeight="300">GOLFE DE GUINÉE</text>
          
                      {/* Points interactifs pour chaque région artistique */}
                      {regions.map((region) => (
                        <g key={region.id}>
                          {/* Anneau extérieur pulsant */}
                          <motion.circle
                            cx={region.position.x}
                            cy={region.position.y}
                            r={hoveredRegion === region.id || selectedRegionId === region.id ? 15 : 8}
                            fill="transparent"
                            stroke={region.color}
                            strokeWidth="1.5"
                            strokeOpacity="0.6"
                            className="cursor-pointer"
                            animate={{
                              scale: [1, 1.2, 1],
                              opacity: [0.7, 0.3, 0.7],
                            }}
                            transition={{
                              duration: 2,
                              ease: "easeInOut",
                              repeat: Infinity,
                              repeatType: "loop"
                            }}
                          />
          
                          {/* Point principal */}
                          <motion.circle
                            cx={region.position.x}
                            cy={region.position.y}
                            r={hoveredRegion === region.id || selectedRegionId === region.id ? 8 : 5}
                            fill={region.color}
                            stroke="#fff"
                            strokeWidth="2"
                            className="cursor-pointer transition-all duration-300"
                            onClick={() => setSelectedRegionId(region.id)}
                            onMouseEnter={() => setHoveredRegion(region.id)}
                            onMouseLeave={() => setHoveredRegion(null)}
                            animate={{
                              scale: hoveredRegion === region.id || selectedRegionId === region.id ? 1.2 : 1
                            }}
                            whileHover={{
                              y: -2,
                              boxShadow: "0 10px 25px -5px rgba(0,0,0,0.1)"
                            }}
                          />
          
                          {/* Nom de la région */}
                          <motion.g
                            initial={{ opacity: 0 }}
                            animate={{
                              opacity: hoveredRegion === region.id || selectedRegionId === region.id ? 1 : 0
                            }}
                            transition={{ duration: 0.2 }}
                          >
                            {/* Fond du label */}
                            <rect
                              x={region.position.x - 40}
                              y={region.position.y - 35}
                              width="80"
                              height="22"
                              rx="11"
                              ry="11"
                              fill="#fff"
                              stroke={region.color}
                              strokeWidth="1"
                              className="drop-shadow-sm"
                            />
          
                            {/* Texte du label */}
                            <text
                              x={region.position.x}
                              y={region.position.y - 20}
                              textAnchor="middle"
                              fontSize="12"
                              fontWeight="600"
                              fill={region.color}
                              className="pointer-events-none select-none"
                            >
                              {region.name}
                            </text>
                          </motion.g>
          
                          {/* Ligne connectant le point au label */}
                          <motion.line
                            x1={region.position.x}
                            y1={region.position.y - 10}
                            x2={region.position.x}
                            y2={region.position.y - 14}
                            stroke={region.color}
                            strokeWidth="1"
                            initial={{ opacity: 0 }}
                            animate={{
                              opacity: hoveredRegion === region.id || selectedRegionId === region.id ? 1 : 0
                            }}
                          />
                        </g>
                      ))}
          
                      {/* Boussole décorative */}
                      <g transform="translate(60, 60) scale(0.6)">
                        <circle cx="0" cy="0" r="20" fill="#fff" fillOpacity="0.8" stroke="#8B5A2B" strokeWidth="1" />
                        <path d="M0,-18 L0,18 M-18,0 L18,0" stroke="#8B5A2B" strokeWidth="1" />
                        <path d="M0,-15 L5,-5 L0,0 L-5,-5 Z" fill="#D97706" stroke="#8B5A2B" strokeWidth="0.5" />
                        <path d="M0,15 L-5,5 L0,0 L5,5 Z" fill="#fff" stroke="#8B5A2B" strokeWidth="0.5" />
                        <text x="0" y="-22" textAnchor="middle" fontSize="9" fill="#8B5A2B">N</text>
                        <text x="0" y="29" textAnchor="middle" fontSize="9" fill="#8B5A2B">S</text>
                        <text x="-22" y="3" textAnchor="middle" fontSize="9" fill="#8B5A2B">O</text>
                        <text x="22" y="3" textAnchor="middle" fontSize="9" fill="#8B5A2B">E</text>
                      </g>
          
                      {/* Titre de la carte */}
                      <text x="240" y="50" textAnchor="end" fontSize="16" fontWeight="bold" fill="#8B5A2B">BÉNIN</text>
                      <line x1="160" y1="55" x2="240" y2="55" stroke="#D97706" strokeWidth="2" />
                    </svg>
                  </div>
          
                  {/* Légende de la carte */}
                  <div className="absolute bottom-4 left-4 bg-white/80 backdrop-blur-sm px-4 py-3 rounded-lg shadow-sm border border-amber-100 flex flex-col gap-2">
                    <p className="text-sm font-medium text-[#3A2D1E]">Régions artisanales</p>
                    <div className="flex flex-wrap gap-3">
                      {regions.map((region) => (
                        <div
                          key={region.id}
                          className="flex items-center gap-2 cursor-pointer transition-all"
                          onClick={() => setSelectedRegionId(region.id)}
                          onMouseEnter={() => setHoveredRegion(region.id)}
                          onMouseLeave={() => setHoveredRegion(null)}
                        >
                          <div
                            className="w-3 h-3 rounded-full"
                            style={{ backgroundColor: region.color }}
                          />
                          <span className="text-xs text-gray-700">{region.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
          
                <div className="h-[500px]">
                  <AnimatePresence mode="wait">
                    {selectedRegion ? (
                      <motion.div
                        key={selectedRegion.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="h-full"
                      >
                        <Card className="h-full border-none shadow-xl overflow-hidden bg-white">
                          <div className="relative h-48 w-full bg-gradient-to-r from-amber-600 to-amber-800">
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                            <div className="absolute top-4 right-4">
                              <Badge className="bg-amber-500/90 text-white border-none px-3 py-1">
                                Région
                              </Badge>
                            </div>
                            <div className="absolute bottom-4 left-4 flex items-center gap-2">
                              <motion.div
                                className="w-3 h-12 rounded-full"
                                style={{ backgroundColor: selectedRegion.color }}
                                initial={{ height: 0 }}
                                animate={{ height: 12 }}
                                transition={{ duration: 0.4 }}
                              />
                              <motion.h3
                                className="text-3xl font-bold text-white"
                                initial={{ opacity: 0, x: -5 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.4, delay: 0.2 }}
                              >
                                {selectedRegion.name}
                              </motion.h3>
                            </div>
                          </div>
                          <CardContent className="p-6">
                            <motion.p
                              className="text-gray-700 mb-6"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ duration: 0.4, delay: 0.3 }}
                            >
                              {selectedRegion.description}
                            </motion.p>
                            <motion.div
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.4, delay: 0.4 }}
                            >
                              <h4 className="font-semibold text-[#3A2D1E] mb-3 flex items-center">
                                <Palette className="h-4 w-4 mr-2 text-amber-600" />
                                Spécialités artisanales
                              </h4>
                              <div className="flex flex-wrap gap-2">
                                {selectedRegion.specialties.map((spec, i) => (
                                  <motion.div
                                    key={i}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.3, delay: 0.5 + (i * 0.1) }}
                                  >
                                    <Badge
                                      className="bg-amber-100 text-amber-800 hover:bg-amber-200 transition-colors px-3 py-1"
                                    >
                                      {spec}
                                    </Badge>
                                  </motion.div>
                                ))}
                              </div>
                            </motion.div>
                          </CardContent>
                          <CardFooter className="p-6 pt-0">
                            <Button className="w-full bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white shadow-md hover:shadow-lg transition-all gap-2">
                              Explorer cette région
                              <ArrowRight className="h-4 w-4" />
                            </Button>
                          </CardFooter>
                        </Card>
                      </motion.div>
                    ) : (
                      <motion.div
                        key="empty"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex flex-col items-center justify-center h-full text-center bg-white p-6 rounded-xl shadow-lg border border-amber-100"
                      >
                        <div className="rounded-full bg-amber-50 p-4 mb-6">
                          <MapPin className="h-8 w-8 text-amber-600" />
                        </div>
                        <h3 className="text-xl font-semibold text-[#3A2D1E] mb-3">
                          Explorez la carte artisanale
                        </h3>
                        <p className="text-gray-600 mb-6">
                          Cliquez sur une région pour découvrir ses trésors artisanaux et traditions ancestrales
                        </p>
                        <div className="flex items-center text-amber-600 text-sm animate-pulse">
                          <motion.div
                            animate={{
                              x: [0, 5, 0],
                            }}
                            transition={{
                              duration: 1.5,
                              repeat: Infinity,
                              repeatType: "loop"
                            }}
                          >
                            <Search className="h-4 w-4 mr-2" />
                          </motion.div>
                          <span>Sélectionnez une région sur la carte</span>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>

          {/* Statistiques */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
            {[
              { value: "12", label: "Régions artisanales", icon: MapPin },
              { value: "750+", label: "Artisans traditionnels", icon: Heart },
              { value: "35", label: "Techniques ancestrales", icon: Palette },
              { value: "80+", label: "Événements annuels", icon: Calendar }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="bg-white p-4 rounded-xl shadow-sm border border-amber-100 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="rounded-full bg-amber-50 w-12 h-12 flex items-center justify-center mx-auto mb-3">
                  <stat.icon className="h-5 w-5 text-amber-600" />
                </div>
                <h4 className="text-2xl font-bold text-[#3A2D1E]">{stat.value}</h4>
                <p className="text-sm text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* Section Histoires des Artisans */}
      <section id="artisans" className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.span
              className="inline-block px-4 py-1 rounded-full bg-amber-100 text-amber-800 text-sm font-medium mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              LES GARDIENS DU SAVOIR-FAIRE
            </motion.span>
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-[#3A2D1E] mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Rencontrez nos <span className="text-amber-600">maîtres-artisans</span>
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Chaque artisan porte en lui des siècles de tradition et d'innovation
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-center">
            <div className="flex justify-center md:justify-end">
              <Button
                variant="outline"
                size="icon"
                onClick={() =>
                  setCurrentArtisanIndex(
                    (prev) => (prev - 1 + artisanStories.length) % artisanStories.length
                  )
                }
                className="rounded-full h-14 w-14 border-[#8B5A2B] text-[#8B5A2B] hover:bg-amber-50"
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>
            </div>

            <motion.div
              className="col-span-3"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card className="overflow-hidden border-none shadow-xl">
                <div className="relative h-96 w-full">
                  <Image
                    src={currentArtisan.image}
                    alt={currentArtisan.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex items-center gap-2 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-5 w-5 ${i < Math.floor(currentArtisan.rating) ? 'fill-amber-400 text-amber-400' : 'text-gray-300'}`}
                        />
                      ))}
                      <span className="text-white/90 ml-1">{currentArtisan.rating}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white">{currentArtisan.name}</h3>
                    <p className="text-amber-300">{currentArtisan.title}</p>
                    <div className="mt-2 flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-white/80" />
                      <span className="text-white/80 text-sm">{currentArtisan.region}</span>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className={`text-gray-700 ${expandedStory ? "" : "line-clamp-3"}`}>
                    {currentArtisan.story}
                  </p>
                  <Button
                    variant="link"
                    className="text-amber-600 hover:text-amber-700 mt-3 p-0"
                    onClick={() => setExpandedStory(!expandedStory)}
                  >
                    {expandedStory ? "Voir moins" : "Lire plus"}
                  </Button>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <Button className="w-full bg-amber-600 hover:bg-amber-700">
                    Voir les œuvres de cet artisan
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>

            <div className="flex justify-center md:justify-start">
              <Button
                variant="outline"
                size="icon"
                onClick={() =>
                  setCurrentArtisanIndex((prev) => (prev + 1) % artisanStories.length)
                }
                className="rounded-full h-14 w-14 border-[#8B5A2B] text-[#8B5A2B] hover:bg-amber-50"
              >
                <ChevronRight className="h-6 w-6" />
              </Button>
            </div>
          </div>
        </div>
      </section>



      {/* Événements culturels */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.span
              className="inline-block px-4 py-1 rounded-full bg-amber-100 text-amber-800 text-sm font-medium mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              AGENDA CULTUREL
            </motion.span>
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-[#3A2D1E] mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Événements à ne pas <span className="text-amber-600">manquer</span>
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Découvrez et participez aux événements célébrant l'artisanat béninois
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {culturalEvents.map((event) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3 }}
              >
                <Card className="overflow-hidden border-none shadow-md hover:shadow-lg transition-shadow h-full">
                  <div className="relative h-48 w-full">
                    <Image
                      src={event.image}
                      alt={event.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-3 right-3 bg-white/90 px-3 py-1 rounded-full text-xs font-medium text-[#3A2D1E]">
                      {event.type}
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg text-[#3A2D1E] mb-2">
                      {event.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">{event.description}</p>
                    <div className="flex items-center text-sm text-gray-700 gap-3">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1 text-amber-600" />
                        <span>{event.date}</span>
                      </div>
                      <div className="w-1 h-1 rounded-full bg-gray-300"></div>
                      <div>
                        <span>{event.time}</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="p-6 pt-0">
                    <Button variant="outline" className="w-full border-amber-600 text-amber-600 hover:bg-amber-50">
                      Plus d'informations
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <Button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-6 text-lg">
              Voir tous les événements
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Témoignages */}
      <section className="py-24 px-4 bg-[#FEF5E7]">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="bg-white p-8 md:p-12 rounded-xl shadow-sm border border-amber-100"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-8">
              <Quote className="h-10 w-10 mx-auto text-amber-400" />
            </div>
            <motion.p
              className="italic text-xl text-center text-gray-700 mb-8 leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              "Grâce à cette plateforme, j'ai pu acquérir une pièce unique qui raconte l'âme du Bénin. L'histoire de l'artisan qui l'a créée donne une dimension encore plus précieuse à mon acquisition."
            </motion.p>
            <motion.div
              className="text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <h4 className="font-bold text-lg text-[#3A2D1E]">Jean M.</h4>
              <p className="text-gray-600">Collectionneur, Paris</p>
              <div className="flex justify-center mt-3 gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Call To Action Final */}
      <section className="py-20 px-4 bg-gradient-to-br from-[#3A2D1E] to-[#6B4522] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Prêt à explorer l'héritage culturel du Bénin ?
          </motion.h2>
          <motion.p
            className="text-xl mb-8 max-w-2xl mx-auto text-white/90"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Téléchargez notre application pour découvrir plus de 1000 artisans et leurs œuvres
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <Button className="bg-white text-[#3A2D1E] hover:bg-gray-100 px-8 py-4 text-lg gap-2">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.1642 15.1436C17.8832 15.8933 17.5516 16.5946 17.1695 17.2474C16.6412 18.1387 16.2068 18.7539 15.8689 19.0928C15.3426 19.6205 14.7789 19.8907 14.1758 19.9054C13.7405 19.9054 13.2211 19.7744 12.6212 19.5084C12.0192 19.2437 11.4672 19.1152 10.9642 19.1152C10.4347 19.1152 9.86423 19.2437 9.25265 19.5084C8.64032 19.7744 8.14381 19.9108 7.76144 19.9189C7.18464 19.9352 6.6077 19.6579 6.03001 19.0928C5.665 18.7295 5.21201 18.0915 4.67217 17.1789C4.09447 16.2009 3.62456 15.0938 3.26356 13.8564C2.87809 12.5218 2.68402 11.2278 2.68402 9.97313C2.68402 8.50548 2.9514 7.27108 3.48693 6.27224C3.9067 5.48714 4.47766 4.86981 5.20202 4.41886C5.92638 3.96791 6.71201 3.73687 7.5609 3.7221C8.0195 3.7221 8.62541 3.87238 9.38068 4.16758C10.1332 4.46354 10.6233 4.61382 10.8495 4.61382C11.0143 4.61382 11.5547 4.43967 12.5618 4.09214C13.5159 3.76997 14.315 3.63365 14.962 3.68074C16.6237 3.79616 17.8842 4.42726 18.7394 5.5772C17.2535 6.50381 16.5195 7.76867 16.5354 9.3677C16.5513 10.6267 17.0212 11.6758 17.9422 12.5111C18.3593 12.9029 18.8228 13.2096 19.334 13.4321C18.9573 14.0319 18.5641 14.5992 18.1642 15.1436ZM14.9879 0.306491C14.9879 1.2981 14.6207 2.22153 13.8891 3.07358C12.9981 4.09214 11.9207 4.66065 10.7578 4.57134C10.7407 4.45593 10.7313 4.33456 10.7313 4.20716C10.7313 3.25755 11.1462 2.24498 11.8981 1.40831C12.2734 0.984761 12.7553 0.631358 13.3426 0.348102C13.9286 0.0690944 14.4732 -0.0580528 14.9761 0.0260222C14.9841 0.119973 14.9879 0.213923 14.9879 0.306491Z" fill="currentColor" />
              </svg>
              App Store
            </Button>
            <Button className="bg-white text-[#3A2D1E] hover:bg-gray-100 px-8 py-4 text-lg gap-2">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 20.5V3.5C3 2.4 3.9 1.5 5 1.5H19C20.1 1.5 21 2.4 21 3.5V20.5C21 21.6 20.1 22.5 19 22.5H5C3.9 22.5 3 21.6 3 20.5ZM12 18.5L17 13.5H14V7.5H10V13.5H7L12 18.5Z" fill="currentColor" />
              </svg>
              Google Play
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}