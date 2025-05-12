"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { 
  ShoppingCart, 
  Palette, 
  MapPin, 
  Star, 
  Search, 
  Heart, 
  Filter, 
  Grid, 
  List, 
  ChevronLeft, 
  ChevronRight, 
  Play, 
  Quote, 
  Calendar,
  MapPin as Location,
  Info
} from "lucide-react";
import Image from "next/image";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Slider } from "@/components/ui/slider";

// Données des œuvres d'art
interface Artwork {
  id: number;
  title: string;
  artist: string;
  price: number;
  currency: string;
  technique: string;
  origin: string;
  rating: number;
  image: string;
  variants: string[];
  inStock: boolean;
  color?: string;
  category: string;
  isBestSeller?: boolean;
  story?: string;
}

const artworks = [
  {
    id: 1,
    title: "Masque Guèlèdè",
    artist: "Atelier Dossou",
    price: 45000,
    currency: "FCFA",
    technique: "Bois sculpté",
    origin: "Abomey",
    rating: 4.8,
    image: "https://galerie-latelier.com/wp-content/uploads/2022/10/fon-zangbeto-fetiche-vaudou-art-africain-1-1024x1024.jpg",
    variants: ["Petit", "Moyen", "Grand"],
    inStock: true,
    category: "Sculpture",
    isBestSeller: true,
    story: "Les masques Guèlèdè sont utilisés lors de cérémonies pour honorer le pouvoir féminin et apaiser les esprits. Ce masque particulier représente un visage serein qui symbolise l'harmonie sociale."
  },
  {
    id: 2,
    title: "Tissu Kenta",
    artist: "Artisanes de Bohicon",
    price: 25000,
    currency: "FCFA",
    technique: "Tissage traditionnel",
    origin: "Bohicon",
    rating: 4.5,
    image: "https://galerie-latelier.com/wp-content/uploads/2022/10/fon-zangbeto-fetiche-vaudou-art-africain-1-1024x1024.jpg",
    variants: ["1m", "2m", "3m"],
    inStock: true,
    category: "Textile",
    color: "Bleu",
    story: "Le Kenta est un tissu royal dont les motifs racontent les proverbes et la sagesse ancestrale du Bénin. Chaque motif a une signification précise qui se transmet de génération en génération."
  },
  {
    id: 3,
    title: "Statue Fa",
    artist: "Maître Hounon",
    price: 75000,
    currency: "FCFA",
    technique: "Bronze à la cire perdue",
    origin: "Ouidah",
    rating: 5.0,
    image: "https://galerie-latelier.com/wp-content/uploads/2022/10/fon-zangbeto-fetiche-vaudou-art-africain-1-1024x1024.jpg",
    variants: ["Unique"],
    inStock: false,
    category: "Sculpture",
    story: "Cette statue représente Fa, divinité de la divination dans le panthéon vodoun. Elle est utilisée lors des consultations divinatoires et sert d'intermédiaire entre le monde visible et invisible."
  },
  {
    id: 4,
    title: "Tableau Vodoun",
    artist: "Adjoke",
    price: 35000,
    currency: "FCFA",
    technique: "Peinture naturelle",
    origin: "Porto-Novo",
    rating: 4.2,
    image: "https://galerie-latelier.com/wp-content/uploads/2022/10/fon-zangbeto-fetiche-vaudou-art-africain-1-1024x1024.jpg",
    variants: ["30x40cm", "50x70cm"],
    inStock: true,
    category: "Peinture",
    color: "Rouge",
    story: "Cette peinture illustre une cérémonie vodoun, religion traditionnelle béninoise. Les couleurs vives et les motifs symboliques racontent les interactions entre les humains et les divinités."
  },
  {
    id: 5,
    title: "Collier Perles",
    artist: "Coopérative Allada",
    price: 12000,
    currency: "FCFA",
    technique: "Perles traditionnelles",
    origin: "Allada",
    rating: 4.7,
    image: "https://galerie-latelier.com/wp-content/uploads/2022/10/fon-zangbeto-fetiche-vaudou-art-africain-1-1024x1024.jpg",
    variants: ["50cm", "60cm"],
    inStock: true,
    category: "Bijou",
    color: "Bleu",
    isBestSeller: true,
    story: "Ces perles sont fabriquées selon une technique ancestrale et portées lors des cérémonies importantes. Chaque couleur et motif représente un statut social ou une protection spirituelle."
  },
  {
    id: 6,
    title: "Sculpture Zangbeto",
    artist: "Atelier Zinsou",
    price: 68000,
    currency: "FCFA",
    technique: "Bois et pigments",
    origin: "Lokossa",
    rating: 4.9,
    image: "https://galerie-latelier.com/wp-content/uploads/2022/10/fon-zangbeto-fetiche-vaudou-art-africain-1-1024x1024.jpg",
    variants: ["Petite", "Grande"],
    inStock: true,
    category: "Sculpture",
    color: "Rouge",
    story: "Le Zangbeto est le gardien de la nuit dans la tradition béninoise. Cette représentation symbolise la protection spirituelle des communautés contre les forces maléfiques."
  }
];

// Données des histoires d'artisans
const artisanStories = [
  {
    id: 1,
    name: "Kodjo Adéwolé",
    title: "Maître sculpteur de masques Guèlèdè",
    region: "Abomey",
    story: "Issu d'une famille de sculpteurs depuis 7 générations, j'ai appris l'art des masques Guèlèdè dès l'âge de 10 ans. Chaque masque raconte une histoire de notre communauté et représente l'équilibre entre les forces visibles et invisibles. Je perpétue cette tradition inscrite au patrimoine immatériel de l'UNESCO depuis 2008.",
    technique: "Sculpture sur bois d'iroko avec des outils transmis de génération en génération, suivie d'une peinture à base de pigments naturels.",
    image: "https://galerie-latelier.com/wp-content/uploads/2022/10/fon-zangbeto-fetiche-vaudou-art-africain-1-1024x1024.jpg",
    videoThumbnail: "/api/placeholder/600/400"
  },
  {
    id: 2,
    name: "Aïcha Dossou-Yovo",
    title: "Tisserande de Kenta",
    region: "Bohicon",
    story: "Notre coopérative de femmes perpétue l'art du tissage Kenta, un tissu noble qui raconte notre histoire à travers ses motifs. Chaque motif a une signification précise liée à nos proverbes et sagesse ancestrale. Ce savoir-faire se transmet de mère en fille et constitue un pilier de notre identité culturelle.",
    technique: "Tissage sur métier traditionnel avec des fils de coton teints selon des méthodes ancestrales utilisant des colorants végétaux.",
    image: "https://galerie-latelier.com/wp-content/uploads/2022/10/fon-zangbeto-fetiche-vaudou-art-africain-1-1024x1024.jpg",
    videoThumbnail: "/api/placeholder/600/400"
  },
  {
    id: 3,
    name: "Hounon Ezan",
    title: "Artiste bronzier",
    region: "Ouidah",
    story: "Je travaille le bronze selon la technique ancestrale de la cire perdue, transmise depuis le royaume du Dahomey. Mes créations s'inspirent des divinités du Vodoun et des symboles royaux. Chaque pièce nécessite plusieurs semaines de travail et connecte le présent aux racines profondes de notre culture.",
    technique: "Fonte à la cire perdue héritée des forgerons royaux d'Abomey, utilisant des matériaux locaux et des formules secrètes transmises par mes ancêtres.",
    image: "https://galerie-latelier.com/wp-content/uploads/2022/10/fon-zangbeto-fetiche-vaudou-art-africain-1-1024x1024.jpg",
    videoThumbnail: "/api/placeholder/600/400"
  }
];

// Données des régions culturelles
const regions = [
  {
    id: 1,
    name: "Abomey",
    description: "Ancienne capitale du royaume du Dahomey, Abomey est célèbre pour ses sculptures sur bois, notamment les masques Guèlèdè, et ses tentures appliquées racontant l'histoire des rois.",
    specialties: ["Masques Guèlèdè", "Tentures appliquées", "Sculptures royales"],
    position: { x: 40, y: 55 },
    image: "https://galerie-latelier.com/wp-content/uploads/2022/10/fon-zangbeto-fetiche-vaudou-art-africain-1-1024x1024.jpg"
  },
  {
    id: 2,
    name: "Ouidah",
    description: "Centre spirituel du vodoun, Ouidah est renommée pour son travail du bronze et ses objets rituels, témoins de la richesse des traditions spirituelles béninoises.",
    specialties: ["Bronze à la cire perdue", "Objets rituels", "Statuettes vodoun"],
    position: { x: 20, y: 35 },
    image: "https://galerie-latelier.com/wp-content/uploads/2022/10/fon-zangbeto-fetiche-vaudou-art-africain-1-1024x1024.jpg"
  },
  {
    id: 3,
    name: "Porto-Novo",
    description: "La capitale du Bénin se distingue par ses peintures traditionnelles et son artisanat lié au palais royal, mêlant influences yoruba et européennes.",
    specialties: ["Peintures vodoun", "Mobilier traditionnel", "Sculptures polychromes"],
    position: { x: 80, y: 30 },
    image: "https://galerie-latelier.com/wp-content/uploads/2022/10/fon-zangbeto-fetiche-vaudou-art-africain-1-1024x1024.jpg"
  },
  {
    id: 4,
    name: "Bohicon",
    description: "Cette région est le centre du tissage traditionnel, notamment du tissu Kenta aux motifs symboliques utilisé dans les cérémonies royales et religieuses.",
    specialties: ["Tissus Kenta", "Vêtements cérémoniels", "Tapisseries"],
    position: { x: 45, y: 65 },
    image: "https://galerie-latelier.com/wp-content/uploads/2022/10/fon-zangbeto-fetiche-vaudou-art-africain-1-1024x1024.jpg"
  },
  {
    id: 5,
    name: "Lokossa",
    description: "Berceau des Zangbeto, gardiens de la nuit, cette région produit des sculptures et objets rituels liés à cette tradition ancestrale de protection.",
    specialties: ["Sculptures Zangbeto", "Masques cérémoniels", "Amulettes protectrices"],
    position: { x: 30, y: 80 },
    image: "https://galerie-latelier.com/wp-content/uploads/2022/10/fon-zangbeto-fetiche-vaudou-art-africain-1-1024x1024.jpg"
  }
];

// Données des événements culturels
const culturalEvents = [
  {
    id: 1,
    title: "Démonstration de sculpture sur bois",
    description: "Assistez en direct à la création d'un masque Guèlèdè par Maître Kodjo Adéwolé et découvrez les secrets de cet art ancestral.",
    date: "15 mai 2025",
    time: "14:00 - 16:00",
    type: "Atelier en ligne",
    image: "https://galerie-latelier.com/wp-content/uploads/2022/10/fon-zangbeto-fetiche-vaudou-art-africain-1-1024x1024.jpg"
  },
  {
    id: 2,
    title: "Foire internationale de l'artisanat béninois",
    description: "Exposition des plus belles pièces d'artisanat du Bénin avec des artisans venus de toutes les régions du pays.",
    date: "3-7 juin 2025",
    time: "10:00 - 18:00",
    type: "Exposition",
    image: "https://galerie-latelier.com/wp-content/uploads/2022/10/fon-zangbeto-fetiche-vaudou-art-africain-1-1024x1024.jpg"
  },
  {
    id: 3,
    title: "Initiation au tissage Kenta",
    description: "Apprenez les bases du tissage traditionnel et la signification des motifs avec la coopérative des tisserandes de Bohicon.",
    date: "25 mai 2025",
    time: "15:00 - 17:30",
    type: "Atelier participatif",
    image: "https://galerie-latelier.com/wp-content/uploads/2022/10/fon-zangbeto-fetiche-vaudou-art-africain-1-1024x1024.jpg"
  },
  {
    id: 4,
    title: "Conférence: L'Art comme patrimoine culturel",
    description: "Discussion sur l'importance de préserver les techniques artisanales traditionnelles face à la mondialisation.",
    date: "12 juin 2025",
    time: "18:30 - 20:00",
    type: "Conférence",
    image: "https://galerie-latelier.com/wp-content/uploads/2022/10/fon-zangbeto-fetiche-vaudou-art-africain-1-1024x1024.jpg"
  }
];

// Composant principal
export default function ArtGalleryPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 100000]);
  const [selectedMaterial, setSelectedMaterial] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("");
  const [favorites, setFavorites] = useState<number[]>([]);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [showFilters, setShowFilters] = useState(false);
  
  // États pour les nouvelles fonctionnalités
  const [currentArtisanIndex, setCurrentArtisanIndex] = useState(0);
  const [expandedArtisanStory, setExpandedArtisanStory] = useState(false);
  const [selectedRegionId, setSelectedRegionId] = useState<number | null>(null);
  const [showArtifactStory, setShowArtifactStory] = useState<number | null>(null);
  const [selectedEvent, setSelectedEvent] = useState<number | null>(null);

  const toggleFavorite = (id: number) => {
    setFavorites(prev => prev.includes(id) 
      ? prev.filter(fid => fid !== id) 
      : [...prev, id]);
  };

  const filteredArtworks = artworks.filter(artwork => {
    const matchesSearch = artwork.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         artwork.artist.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesPrice = artwork.price >= priceRange[0] && artwork.price <= priceRange[1];
    const matchesCategory = selectedCategory === "all" || artwork.category === selectedCategory;
    const matchesFilters = [
      selectedMaterial ? artwork.technique === selectedMaterial : true,
      selectedRegion ? artwork.origin === selectedRegion : true,
      selectedColor ? artwork.color === selectedColor : true
    ].every(Boolean);

    return matchesSearch && matchesPrice && matchesCategory && matchesFilters;
  });

  const sortedArtworks = [...filteredArtworks].sort((a, b) => {
    if (sortBy === "price-asc") return a.price - b.price;
    if (sortBy === "price-desc") return b.price - a.price;
    if (sortBy === "rating") return b.rating - a.rating;
    return 0;
  });

  // Fonctions pour les nouvelles fonctionnalités
  const nextArtisan = () => {
    setCurrentArtisanIndex((prev) => (prev + 1) % artisanStories.length);
    setExpandedArtisanStory(false);
  };

  const prevArtisan = () => {
    setCurrentArtisanIndex((prev) => (prev - 1 + artisanStories.length) % artisanStories.length);
    setExpandedArtisanStory(false);
  };

  const currentArtisan = artisanStories[currentArtisanIndex];

  return (
    <div className="min-h-screen bg-[#faf9f5]">
      {/* Hero Banner */}
      <div className="relative h-64 md:h-96 bg-gradient-to-r from-[#3A2D1E] to-[#8B5A2B]">
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <div className="text-center text-white px-4 max-w-4xl">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">Artisanat d'Art du Bénin</h1>
            <p className="text-xl mb-8">Découvrez des pièces uniques directement des artisans locaux</p>
            
            <div className="relative max-w-2xl mx-auto">
              <input
                type="text"
                placeholder="Rechercher des œuvres, artisans..."
                className="w-full px-6 py-3 rounded-full border-0 focus:ring-2 focus:ring-[#8B5A2B]"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Search className="absolute right-6 top-3.5 text-gray-500" />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Controls Bar */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <Tabs 
            value={selectedCategory} 
            onValueChange={setSelectedCategory}
            className="w-full md:w-auto"
          >
            <TabsList className="grid w-full grid-cols-4 md:flex">
              <TabsTrigger value="all">Tous</TabsTrigger>
              <TabsTrigger value="Sculpture">Sculptures</TabsTrigger>
              <TabsTrigger value="Textile">Textiles</TabsTrigger>
              <TabsTrigger value="Bijou">Bijoux</TabsTrigger>
            </TabsList>
          </Tabs>

          <div className="flex items-center gap-4 w-full md:w-auto">
            <Button 
              variant="outline" 
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2"
            >
              <Filter size={16} />
              <span>Filtres</span>
            </Button>

            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Trier par" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="price-asc">Prix croissant</SelectItem>
                <SelectItem value="price-desc">Prix décroissant</SelectItem>
                <SelectItem value="rating">Meilleures notes</SelectItem>
              </SelectContent>
            </Select>

            <div className="hidden md:flex gap-1 border rounded-md p-1">
              <Button 
                variant={viewMode === "grid" ? "default" : "ghost"} 
                size="icon"
                onClick={() => setViewMode("grid")}
              >
                <Grid size={18} />
              </Button>
              <Button 
                variant={viewMode === "list" ? "default" : "ghost"} 
                size="icon"
                onClick={() => setViewMode("list")}
              >
                <List size={18} />
              </Button>
            </div>
          </div>
        </div>

        {/* Filters Panel */}
        {showFilters && (
          <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
            <h3 className="text-xl font-semibold mb-4">Filtrer les résultats</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {/* Price Filter */}
              <div>
                <h4 className="font-medium mb-3">Fourchette de prix</h4>
                <Slider 
                  value={priceRange}
                  onValueChange={(value) => setPriceRange(value as [number, number])}
                  min={0}
                  max={100000}
                  step={1000}
                  minStepsBetweenThumbs={1}
                />
                <div className="flex justify-between mt-2 text-sm">
                  <span>{priceRange[0].toLocaleString()} FCFA</span>
                  <span>{priceRange[1].toLocaleString()} FCFA</span>
                </div>
              </div>

              {/* Material Filter */}
              <div>
                <h4 className="font-medium mb-3">Matière</h4>
                <Select value={selectedMaterial} onValueChange={setSelectedMaterial}>
                  <SelectTrigger>
                    <SelectValue placeholder="Toutes matières" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Bois sculpté">Bois sculpté</SelectItem>
                    <SelectItem value="Tissage traditionnel">Tissage traditionnel</SelectItem>
                    <SelectItem value="Bronze à la cire perdue">Bronze à la cire perdue</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Region Filter */}
              <div>
                <h4 className="font-medium mb-3">Région</h4>
                <Select value={selectedRegion} onValueChange={setSelectedRegion}>
                  <SelectTrigger>
                    <SelectValue placeholder="Toutes régions" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Abomey">Abomey</SelectItem>
                    <SelectItem value="Bohicon">Bohicon</SelectItem>
                    <SelectItem value="Ouidah">Ouidah</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Color Filter */}
              <div>
                <h4 className="font-medium mb-3">Couleur</h4>
                <Select value={selectedColor} onValueChange={setSelectedColor}>
                  <SelectTrigger>
                    <SelectValue placeholder="Toutes couleurs" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Rouge">Rouge</SelectItem>
                    <SelectItem value="Bleu">Bleu</SelectItem>
                    <SelectItem value="Marron">Marron</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        )}

        {/* Artworks Grid */}
        {sortedArtworks.length > 0 ? (
          <div className={viewMode === "grid" 
            ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            : "space-y-6"
          }>
            {sortedArtworks.map(artwork => (
              <motion.div
                key={artwork.id}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <Card className="h-full overflow-hidden group">
                  <CardHeader className="p-0 relative">
                    <div className="aspect-square relative">
                      <Image
                        src={artwork.image}
                        alt={artwork.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      {artwork.isBestSeller && (
                        <Badge className="absolute top-2 left-2 bg-[#8B5A2B] hover:bg-[#6B4522]">
                          Best-seller
                        </Badge>
                      )}
                      <Button 
                        variant="ghost" 
                        size="icon"
                        className={`absolute top-2 right-2 rounded-full ${favorites.includes(artwork.id) ? "bg-red-100 text-red-500" : "bg-white/90"}`}
                        onClick={() => toggleFavorite(artwork.id)}
                      >
                        <Heart 
                          className={`h-4 w-4 ${favorites.includes(artwork.id) ? "fill-current" : ""}`} 
                        />
                      </Button>
                      
                      {/* Bouton pour afficher l'histoire de l'objet */}
                      {artwork.story && (
                        <Button
                          variant="ghost"
                          size="icon"
                          className="absolute bottom-2 right-2 rounded-full bg-white/90"
                          onClick={() => setShowArtifactStory(showArtifactStory === artwork.id ? null : artwork.id)}
                        >
                          <Info className="h-4 w-4" />
                        </Button>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <CardTitle className="text-lg">{artwork.title}</CardTitle>
                    <p className="text-sm text-[#8B5A2B]">{artwork.artist}</p>
                    <div className="flex items-center mt-2 gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm">{artwork.rating}</span>
                      <span className="mx-2">•</span>
                      <MapPin className="h-4 w-4 text-gray-500" />
                      <span className="text-sm text-gray-500">{artwork.origin}</span>
                    </div>
                    {viewMode === "list" && (
                      <p className="mt-2 text-sm text-gray-600">{artwork.technique}</p>
                    )}
                    
                    {/* Histoire de l'objet (affichée si sélectionnée) */}
                    {showArtifactStory === artwork.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        className="mt-3 p-3 bg-[#f8f5f0] rounded-md"
                      >
                        <h4 className="text-sm font-semibold mb-1">Histoire et signification</h4>
                        <p className="text-xs text-gray-700">{artwork.story}</p>
                      </motion.div>
                    )}
                  </CardContent>
                  <CardFooter className="flex justify-between items-center">
                    <p className="font-bold text-lg">
                      {artwork.price.toLocaleString()} {artwork.currency}
                    </p>
                    <Button 
                      size="sm" 
                      className="bg-[#8B5A2B] hover:bg-[#6B4522]"
                      disabled={!artwork.inStock}
                    >
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      {artwork.inStock ? "Ajouter" : "Indisponible"}
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <h3 className="text-xl font-medium text-gray-600">Aucun résultat trouvé</h3>
            <p className="text-gray-500 mt-2">Essayez de modifier vos filtres de recherche</p>
          </div>
        )}
        
        {/* NOUVELLE SECTION: Histoires des Artisans */}
        <div className="bg-[#f5f0e8] py-16 px-4 mt-16 rounded-xl">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#3A2D1E] mb-4">Les Gardiens du Savoir-Faire</h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Découvrez les histoires des artisans qui perpétuent les traditions ancestrales du Bénin et donnent vie à ces chefs-d'œuvre culturels.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
              {/* Navigation pour petits écrans */}
              <div className="flex justify-center gap-4 lg:hidden mb-6">
                <Button 
                  variant="outline" 
                  size="icon" 
                  onClick={prevArtisan}
                  className="rounded-full border-[#8B5A2B] text-[#8B5A2B]"
                >
                  <ChevronLeft className="h-6 w-6" />
                </Button>
                <Button 
                  variant="outline" 
                  size="icon" 
                  onClick={nextArtisan}
                  className="rounded-full border-[#8B5A2B] text-[#8B5A2B]"
                >
                  className="rounded-full border-[#8B5A2B] text-[#8B5A2B]"
                
                  <ChevronRight className="h-6 w-6" />
                </Button>
              </div>

              {/* Navigation pour grands écrans */}
              <div className="hidden lg:block">
                <Button 
                  variant="outline" 
                  size="icon" 
                  onClick={prevArtisan}
                  className="rounded-full border-[#8B5A2B] text-[#8B5A2B] w-12 h-12"
                >
                  <ChevronLeft className="h-6 w-6" />
                </Button>
              </div>

              {/* Image de l'artisan */}
              <div className="col-span-1 lg:col-span-2">
                <div className="relative overflow-hidden rounded-lg aspect-square">
                  <Image
                    src={currentArtisan.image}
                    alt={currentArtisan.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                    <div className="p-4 text-white">
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="bg-white/20 hover:bg-white/30 border-white text-white flex items-center gap-2"
                      >
                        <Play className="h-4 w-4" />
                        <span>Voir l'atelier</span>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Histoire de l'artisan */}
              <div className="col-span-1 lg:col-span-2">
                <div className="bg-white p-6 rounded-lg shadow-sm h-full">
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="h-4 w-4 text-[#8B5A2B]" />
                    <span className="text-sm text-gray-600">{currentArtisan.region}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-1">{currentArtisan.name}</h3>
                  <p className="text-[#8B5A2B] mb-4">{currentArtisan.title}</p>
                  
                  <div className={expandedArtisanStory ? "" : "line-clamp-5"}>
                    <p className="text-gray-700 mb-4">{currentArtisan.story}</p>
                    {expandedArtisanStory && (
                      <div className="mt-4">
                        <h4 className="font-medium mb-2">Technique</h4>
                        <p className="text-gray-700">{currentArtisan.technique}</p>
                      </div>
                    )}
                  </div>
                  
                  <Button 
                    variant="link" 
                    className="text-[#8B5A2B] p-0 h-auto mt-2"
                    onClick={() => setExpandedArtisanStory(!expandedArtisanStory)}
                  >
                    {expandedArtisanStory ? "Voir moins" : "Lire plus"}
                  </Button>
                </div>
              </div>

              {/* Navigation pour grands écrans */}
              <div className="hidden lg:block">
                <Button 
                  variant="outline" 
                  size="icon" 
                  onClick={nextArtisan}
                  className="rounded-full border-[#8B5A2B] text-[#8B5A2B] w-12 h-12"
                >
                  <ChevronRight className="h-6 w-6" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* NOUVELLE SECTION: Carte des régions culturelles */}
        <div className="mt-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#3A2D1E] mb-4">Voyage à travers les régions artistiques</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Chaque région du Bénin a développé ses propres traditions artistiques uniques, liées à son histoire et sa culture.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Carte interactive */}
            <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow-sm">
              <div className="relative h-[500px] border rounded-lg overflow-hidden">
                {/* Représentation simplifiée de la carte */}
                <div className="absolute inset-0 bg-[#f9f4e9]">
                  {/* Fond de carte */}
                  <svg width="100%" height="100%" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10,10 Q30,5 40,15 T80,20 T90,50 T70,80 T30,70 T10,30 Z" fill="#e9e4d7" stroke="#ccc" strokeWidth="0.5" />
                    
                    {/* Points représentant les régions */}
                    {regions.map(region => (
                      <g key={region.id} onClick={() => setSelectedRegionId(region.id)}>
                        <circle 
                          cx={region.position.x} 
                          cy={region.position.y} 
                          r={selectedRegionId === region.id ? 3 : 2} 
                          fill={selectedRegionId === region.id ? "#8B5A2B" : "#3A2D1E"} 
                          stroke="#fff" 
                          strokeWidth="0.5"
                          className="cursor-pointer"
                        />
                        <text 
                          x={region.position.x} 
                          y={region.position.y - 5} 
                          textAnchor="middle" 
                          fill="#3A2D1E" 
                          fontSize="3"
                          fontWeight={selectedRegionId === region.id ? "bold" : "normal"}
                          className="cursor-pointer"
                        >
                          {region.name}
                        </text>
                      </g>
                    ))}
                  </svg>
                </div>
              </div>
            </div>

            {/* Informations sur la région sélectionnée */}
            <div>
              {selectedRegionId ? (
                <Card className="h-full">
                  <CardHeader>
                    <div className="relative h-48 -mt-6 -mx-6 rounded-t-lg overflow-hidden">
                      <Image
                        src={regions.find(r => r.id === selectedRegionId)?.image || ""}
                        alt={regions.find(r => r.id === selectedRegionId)?.name || ""}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardTitle className="text-2xl mt-2">
                      {regions.find(r => r.id === selectedRegionId)?.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700">
                      {regions.find(r => r.id === selectedRegionId)?.description}
                    </p>
                    
                    <div className="mt-4">
                      <h4 className="font-medium mb-2">Spécialités artistiques</h4>
                      <div className="flex flex-wrap gap-2">
                        {regions.find(r => r.id === selectedRegionId)?.specialties.map((specialty, index) => (
                          <Badge key={index} variant="outline" className="bg-[#f5f0e8]">
                            {specialty}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="bg-[#8B5A2B] hover:bg-[#6B4522] w-full">
                      Voir les œuvres de cette région
                    </Button>
                  </CardFooter>
                </Card>
              ) : (
                <Card className="h-full flex items-center justify-center p-8 text-center">
                  <div>
                    <MapPin className="h-12 w-12 mx-auto text-gray-300 mb-4" />
                    <h3 className="text-xl font-medium text-gray-600 mb-2">Explorez la carte</h3>
                    <p className="text-gray-500">Cliquez sur une région pour en savoir plus sur son artisanat unique</p>
                  </div>
                </Card>
              )}
            </div>
          </div>
        </div>

        {/* NOUVELLE SECTION: Événements culturels */}
        <div className="mt-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#3A2D1E] mb-4">Agenda culturel</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Participez à nos événements pour rencontrer les artisans et découvrir leurs techniques ancestrales.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {culturalEvents.map(event => (
              <Card 
                key={event.id} 
                className={`overflow-hidden transition-all duration-200 ${selectedEvent === event.id ? "ring-2 ring-[#8B5A2B]" : ""}`}
                onClick={() => setSelectedEvent(selectedEvent === event.id ? null : event.id)}
              >
                <div className="relative h-40">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-0 left-0 bg-[#8B5A2B] text-white px-3 py-1 rounded-tr-lg">
                    <Calendar className="h-4 w-4" />
                  </div>
                </div>
                <CardContent className="pt-4">
                  <Badge variant="outline" className="mb-2">
                    {event.type}
                  </Badge>
                  <h3 className="font-bold text-lg leading-tight mb-1">{event.title}</h3>
                  <div className="flex items-center text-sm text-gray-600 mb-3">
                    <Calendar className="h-3 w-3 mr-1" />
                    <span>{event.date} • {event.time}</span>
                  </div>
                  
                  {selectedEvent === event.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      className="mt-2"
                    >
                      <p className="text-gray-700 text-sm">{event.description}</p>
                      <Button className="mt-4 w-full bg-[#8B5A2B] hover:bg-[#6B4522]">
                        S'inscrire
                      </Button>
                    </motion.div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Témoignages */}
        <div className="mt-16 bg-[#f5f0e8] py-16 px-4 rounded-xl">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <Quote className="h-12 w-12 mx-auto text-[#8B5A2B] mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold text-[#3A2D1E] mb-4">Ce que disent nos clients</h2>
            </div>

            <motion.div
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-8 rounded-lg shadow-sm"
            >
              <p className="text-lg text-gray-700 italic mb-6">
                "J'ai acheté un masque Guèlèdè pour ma collection d'art africain et j'ai été impressionné par la qualité du travail et la richesse des détails. L'histoire partagée par l'artisan a donné une dimension particulière à cette acquisition."
              </p>
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-[#3A2D1E]"></div>
                </div>
                <div className="ml-4">
                  <h4 className="font-bold">Sophie Dubois</h4>
                  <p className="text-gray-600">Collectionneuse d'art, Paris</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#3A2D1E] text-white py-12 mt-16">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">À propos</h3>
            <p className="text-gray-300">
              Notre mission est de faire connaître l'artisanat d'art béninois au monde entier tout en soutenant les communautés d'artisans locaux et en préservant les techniques ancestrales.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Liens utiles</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white">À propos de nous</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Comment acheter</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Livraison et retours</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Newsletter</h3>
            <p className="text-gray-300 mb-4">
              Inscrivez-vous pour recevoir nos actualités et découvrir nos nouveaux artisans.
            </p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Votre email" 
                className="px-4 py-2 rounded-l-md w-full focus:outline-none text-gray-800"
              />
              <Button className="bg-[#8B5A2B] hover:bg-[#6B4522] rounded-l-none">
                S'inscrire
              </Button>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 pt-8 mt-8 border-t border-gray-700">
          <p className="text-center text-gray-400">
            © 2025 Artisanat d'Art du Bénin. Tous droits réservés.
          </p>
        </div>
      </footer>
    </div>
  );
}