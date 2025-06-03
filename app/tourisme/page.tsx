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