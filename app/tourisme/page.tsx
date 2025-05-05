// "use client";

// import { motion } from "framer-motion";
// import { MapPin, Calendar, Users, Star, ArrowRight } from "lucide-react";
// import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import Image from "next/image";
// import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

// const tourismPackages = [
//   {
//     id: 1,
//     title: "Découverte du Pays Tanguiéta",
//     description: "Explorez les parcs nationaux de la Pendjari et de la W avec un guide expérimenté",
//     duration: "3 jours",
//     groupSize: "4-12 personnes",
//     price: 125000,
//     currency: "FCFA",
//     rating: 4.8,
//     image: "https://www.gouv.bj/upload/images/articles/ckeditor/Tangui%C3%A9ta(1).jpg",
//     highlights: ["Safari photo", "Rencontre avec les communautés locales", "Hébergement en lodge"]
//   },
//   {
//     id: 2,
//     title: "Circuit Culturel Ouidah",
//     description: "Immersion dans l'histoire et la culture du Bénin à travers ses sites historiques",
//     duration: "2 jours",
//     groupSize: "2-8 personnes",
//     price: 75000,
//     currency: "FCFA",
//     rating: 4.9,
//     image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/21/0d/ab/49/slave-route-view-from.jpg?w=1200&h=700&s=1",
//     highlights: ["Route des esclaves", "Temple des Pythons", "Musée d'histoire"]
//   },
//   {
//     id: 3,
//     title: "Aventure Lac Nokoué",
//     description: "Excursion en pirogue sur le lac Nokoué et découverte des villages sur pilotis",
//     duration: "1 jour",
//     groupSize: "2-6 personnes",
//     price: 45000,
//     currency: "FCFA",
//     rating: 4.7,
//     image: "https://lanation.bj/storage/assets/2023/07/BQt67qEpL0eUZ9zk_LAC_NOKOUE.jfif.jfif",
//     highlights: ["Visite de Ganvié", "Pêche traditionnelle", "Dégustation de cuisine locale"]
//   },
//   {
//     id: 4,
//     title: "Randonnée à la Montagne Sacrée",
//     description: "Ascension de la montagne sacrée d'Abomey avec un guide local",
//     duration: "1 jour",
//     groupSize: "4-10 personnes",
//     price: 35000,
//     currency: "FCFA",
//     rating: 4.5,
//     image: "https://www.ouadada.com/wp-content/uploads/2024/06/ouadada-palais-abomey-11.jpg",
//     highlights: ["Vues panoramiques", "Histoire royale", "Rencontre spirituelle"]
//   }
// ];

// const carouselImages = [
//   "https://www.banouto.bj/images/imagekit/mobile/w780/place-amazone-cotonou",
//   "https://www.ouadada.com/wp-content/uploads/2024/06/ouadada-palais-abomey-11.jpg",
//   "https://lanation.bj/storage/assets/2023/07/BQt67qEpL0eUZ9zk_LAC_NOKOUE.jfif.jfif",
//   "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/21/0d/ab/49/slave-route-view-from.jpg?w=1200&h=700&s=1",
// ];

// export default function TourismPage() {
//   return (
//     <div className="min-h-screen bg-[#FFF9F0] py-12 px-4">
//       <div className="max-w-7xl mx-auto">
//         {/* Hero Section */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="text-center mb-16"
//         >
//           <h1 className="text-4xl font-bold text-[#5C4033] mb-4">
//             Découvrez le Bénin Autrement
//           </h1>
//           <p className="text-xl text-[#8B4513] max-w-3xl mx-auto">
//             Des expériences uniques avec nos guides et partenaires locaux
//           </p>
//         </motion.div>

//         {/* Image Carousel */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           className="mb-16"
//         >
//           <Carousel className="w-full rounded-xl overflow-hidden shadow-lg">
//             <CarouselContent>
//               {carouselImages.map((image, index) => (
//                 <CarouselItem key={index}>
//                   <div className="relative h-96">
//                     <Image
//                       src={image}
//                       alt={`Découverte Bénin ${index + 1}`}
//                       fill
//                       className="object-cover"
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
//                   </div>
//                 </CarouselItem>
//               ))}
//             </CarouselContent>
//             <CarouselPrevious className="left-4" />
//             <CarouselNext className="right-4" />
//           </Carousel>
//         </motion.div>

//         {/* Packages Section */}
//         <div className="mb-16">
//           <h2 className="text-3xl font-bold text-[#5C4033] mb-8 text-center">
//             Nos Packages Touristiques
//           </h2>
          
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//             {tourismPackages.map((packageItem) => (
//               <motion.div
//                 key={packageItem.id}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.3 }}
//                 viewport={{ once: true }}
//               >
//                 <Card className="h-full flex flex-col border-[#8B4513]/20 hover:shadow-xl transition-shadow">
//                   <div className="relative h-48">
//                     <Image
//                       src={packageItem.image}
//                       alt={packageItem.title}
//                       fill
//                       className="object-cover"
//                     />
//                     <div className="absolute top-2 right-2 bg-white/90 px-2 py-1 rounded-full flex items-center">
//                       <Star className="h-4 w-4 text-yellow-500 fill-yellow-500 mr-1" />
//                       <span className="text-sm font-medium">{packageItem.rating}</span>
//                     </div>
//                   </div>

//                   <CardHeader>
//                     <CardTitle className="text-xl text-[#5C4033]">
//                       {packageItem.title}
//                     </CardTitle>
//                   </CardHeader>

//                   <CardContent className="flex-grow">
//                     <p className="text-[#5C4033] mb-4">{packageItem.description}</p>
                    
//                     <div className="space-y-3">
//                       <div className="flex items-center gap-2 text-sm text-[#8B4513]">
//                         <Calendar className="h-4 w-4" />
//                         <span>{packageItem.duration}</span>
//                       </div>
//                       <div className="flex items-center gap-2 text-sm text-[#8B4513]">
//                         <Users className="h-4 w-4" />
//                         <span>Groupe: {packageItem.groupSize}</span>
//                       </div>
                      
//                       <div className="mt-3">
//                         <h4 className="font-medium text-[#5C4033] mb-1">Points forts:</h4>
//                         <ul className="space-y-1 text-sm text-[#5C4033]">
//                           {packageItem.highlights.map((item, idx) => (
//                             <li key={idx} className="flex items-start">
//                               <span className="mr-2">•</span>
//                               {item}
//                             </li>
//                           ))}
//                         </ul>
//                       </div>
//                     </div>
//                   </CardContent>

//                   <CardFooter className="flex justify-between items-center">
//                     <div>
//                       <p className="text-lg font-bold text-[#5C4033]">
//                         {packageItem.price.toLocaleString()} {packageItem.currency}
//                       </p>
//                       <p className="text-xs text-green-600">Tout compris</p>
//                     </div>
//                     <Button className="gap-2 bg-[#8B4513] hover:bg-[#5C4033]">
//                       Réserver
//                       <ArrowRight className="h-4 w-4" />
//                     </Button>
//                   </CardFooter>
//                 </Card>
//               </motion.div>
//             ))}
//           </div>
//         </div>

//         {/* Partners Section */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           className="bg-white rounded-xl p-8 shadow-sm mb-16"
//         >
//           <h2 className="text-2xl font-bold text-[#5C4033] mb-6 text-center">
//             Nos Partenaires Touristiques
//           </h2>
//           <div className="flex flex-wrap justify-center gap-8">
//             {[
//               "Agences de voyage",
//               "Guides certifiés",
//               "Gestionnaires de parcs",
//               "Hôtels & Lodges",
//               "Communautés locales"
//             ].map((partner, index) => (
//               <div key={index} className="flex items-center gap-3 px-4 py-2 bg-[#FFF9F0] rounded-full">
//                 <div className="h-8 w-8 rounded-full bg-[#8B4513]/10 flex items-center justify-center">
//                   <MapPin className="h-4 w-4 text-[#8B4513]" />
//                 </div>
//                 <span className="text-[#5C4033] font-medium">{partner}</span>
//               </div>
//             ))}
//           </div>
//         </motion.div>

//         {/* Call to Action */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           className="bg-[#5C4033] rounded-xl p-8 text-center text-white"
//         >
//           <h2 className="text-2xl font-bold mb-4">
//             Vous proposez des services touristiques ?
//           </h2>
//           <p className="mb-6 max-w-2xl mx-auto">
//             Rejoignez notre réseau de partenaires et faites découvrir vos offres à des milliers de visiteurs.
//           </p>
//           <Button variant="outline" className="border-white text-[#5C4033] hover:bg-white/10">
//             Devenir partenaire
//           </Button>
//         </motion.div>
//       </div>
//     </div>
//   );
// }



"use client";
import { useState } from "react";
import { Filter, Search, MapPin, Calendar, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function TourismPage() {
  const [activeFilter, setActiveFilter] = useState("Tous");
  const [searchQuery, setSearchQuery] = useState("");

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
      image: "https://www.gouv.bj/upload/images/articles/ckeditor/Tangui%C3%A9ta(1).jpg"
    },
    {
      id: 2,
      title: "Safari dans tous ses états",
      type: "FAUNE ET FLORE",
      price: 1350,
      duration: 11,
      theme: "Nature",
      country: "BÉNIN",
      image: "https://www.gouv.bj/upload/images/articles/ckeditor/Tangui%C3%A9ta(1).jpg"
    },
    {
      id: 3,
      title: "Voyage en terres ethniques",
      type: "MINORITÉ ETHNIQUE",
      price: 1100,
      duration: 15,
      theme: "Culture",
      country: "BÉNIN",
      image: "https://www.gouv.bj/upload/images/articles/ckeditor/Tangui%C3%A9ta(1).jpg"
    },
    {
      id: 4,
      title: "Royaumes et spiritualité",
      type: "SPIRITUALITÉ",
      price: 950,
      duration: 10,
      theme: "Histoire",
      country: "BÉNIN",
      image: "https://www.gouv.bj/upload/images/articles/ckeditor/Tangui%C3%A9ta(1).jpg"
    }
  ];

  // Filtres disponibles
  const filters = [
    "Tous",
    "Culture",
    "Minorité ethnique", 
    "Histoire",
    "Aventure",
    "Nature",
    "Spiritualité"
  ];

  // Filtrer les circuits
  const filteredCircuits = circuits.filter(circuit => {
    const matchesFilter = activeFilter === "Tous" || circuit.theme === activeFilter;
    const matchesSearch = circuit.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#F9FAFB]">
      {/* Hero Section */}
      <section className="relative h-96 bg-[url('https://expresstourisme.com/image/news/Tata-somba-Benin-tourisme-destination-Natitingou-672d011a8b4e7.webp')] bg-cover bg-center">
  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/30"></div>
  <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4">
    <motion.h1 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 mt-12 drop-shadow-lg"
    >
      Circuits Touristiques au Bénin
    </motion.h1>
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.7 }}
      className="text-xl md:text-2xl text-white max-w-2xl leading-relaxed drop-shadow-md"
    >
      Découvrez nos séjours personnalisables pour une expérience authentique
    </motion.p>
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.6, type: "spring" }}
      className="mt-8"
    >
      <Button className="bg-[#E67E22] hover:bg-[#D35400] text-white text-lg px-8 py-4 shadow-xl animate-pulse">
        Explorer les circuits
      </Button>
    </motion.div>
  </div>
</section>

      {/* Filtres et Recherche */}
      <section className="py-8 px-4 md:px-8 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4 md:gap-8">
            {/* Barre de recherche */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Rechercher un circuit..."
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E67E22]"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            {/* Filtres */}
            <div className="flex overflow-x-auto pb-2 gap-2 md:gap-3">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-4 py-2 whitespace-nowrap rounded-full text-sm font-medium transition-colors ${
                    activeFilter === filter
                      ? "bg-[#E67E22] text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Résultats */}
      <section className="py-12 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-semibold text-gray-800">
              {filteredCircuits.length} circuits disponibles
            </h2>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <Filter className="w-4 h-4" />
              <span>Trier par :</span>
              <select className="border-none bg-transparent focus:ring-0">
                <option>Prix (croissant)</option>
                <option>Prix (décroissant)</option>
                <option>Durée</option>
                <option>Popularité</option>
              </select>
            </div>
          </div>

          {/* Liste des circuits */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCircuits.map((circuit) => (
              <div key={circuit.id} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div className="h-48 overflow-hidden">
                  <img
                    src={circuit.image}
                    alt={circuit.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-sm font-semibold text-[#E67E22]">
                      {circuit.type}
                    </span>
                    <span className="text-xs text-gray-500">
                      {circuit.duration} jours • {circuit.country}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    {circuit.title}
                  </h3>
                  <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span>10 sites visités</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      <span>2-12 personnes</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-[#E67E22]">
                      À partir de {circuit.price}€
                    </span>
                    <Button className="bg-[#E67E22] hover:bg-[#D35400]">
                      Détails
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-12">
            <div className="flex gap-2">
              <Button variant="outline" className="border-gray-300">Précédent</Button>
              <Button className="bg-[#E67E22] hover:bg-[#D35400]">1</Button>
              <Button variant="outline" className="border-gray-300">2</Button>
              <Button variant="outline" className="border-gray-300">3</Button>
              <Button variant="outline" className="border-gray-300">Suivant</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}