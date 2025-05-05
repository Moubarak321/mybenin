"use client";
import { useState } from "react";
import { Filter, Search, MapPin, Calendar, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useRouter } from 'next/navigation';

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

  const router = useRouter();
  
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
                    <Button className="bg-[#E67E22] hover:bg-[#D35400]"  onClick={() => router.push('/tourisme/circuit')}>
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