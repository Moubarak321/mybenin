"use client";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ChefHat, Citrus, Wheat, Drumstick, Search, Filter, Clock, 
  ChevronLeft, ChevronRight, Info, Heart, X, ArrowUpRight 
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";

// =========================================
// Base de données des plats béninois
// =========================================
const dishes = [
  {
    id: "amiwo",
    name: "Amiwo",
    description: "Purée de maïs à la sauce tomate",
    region: "Sud Bénin",
    ingredients: ["Maïs", "Pâte de tomate", "Poisson fumé"],
    icon: <Wheat className="text-amber-600" />,
    category: "Plats principaux",
    image: "https://monkadi.com/cdn/shop/products/Amiwo_592x390.jpg?v=1669849161",
    preparationTime: "45 min",
    featured: true
  },
  {
    id: "akassa",
    name: "Akassa",
    description: "Pâte de maïs fermenté suivie de sauces",
    region: "Tout le Bénin",
    ingredients: ["Maïs fermenté", "Sauce gombo"],
    icon: <Drumstick className="text-rose-600" />,
    category: "Plats principaux",
    image: "https://i.pinimg.com/736x/73/bc/a9/73bca98fd54d51b979ba06afd546c18f.jpg",
    preparationTime: "60 min",
    featured: false
  },
  {
    id: "wagassi",
    name: "Wagassi",
    description: "Fromage peul local servi grillé ou frit",
    region: "Nord Bénin",
    ingredients: ["Lait de vache", "Sel"],
    icon: <ChefHat className="text-blue-600" />,
    category: "Accompagnements",
    image: "https://i.pinimg.com/736x/ff/a9/4d/ffa94d32bb2dcb828bd3fe1161e4ec29.jpg",
    preparationTime: "30 min",
    featured: true
  },
  {
    id: "sauce-claire",
    name: "Sauce Claire",
    description: "Base culinaire pour de nombreux plats",
    region: "Tout le Bénin",
    ingredients: ["Tomates", "Oignons", "Piment"],
    icon: <Drumstick className="text-red-600" />,
    category: "Sauces",
    image: "https://scontent-lis1-1.xx.fbcdn.net/v/t39.30808-6/489687165_30765634329702231_3834019423121778188_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=3a1ebe&_nc_eui2=AeELJyOEK3hNCJWlcnlraDEjincdmphx_UiKdx2amHH9SAOhAkQbDbec9c_WzohdGqBoQa5Z3SrcFWjPsn7N9sqv&_nc_ohc=mwvMjyx-ebMQ7kNvwEyDu7i&_nc_oc=Adl6apoOsAufnjYgid5OVl9bct6o4iIHHd2avLyFBhFJjkrzSdnq74nARdY0x5bJkfA&_nc_zt=23&_nc_ht=scontent-lis1-1.xx&_nc_gid=XWrHkbzeYRTFQxI2mqTnpA&oh=00_AfG6_fi_kSH8cRmUQJXSExC6FftuJgTt2St3qXC4O4VyRA&oe=68116212",
    preparationTime: "25 min",
    featured: false
  },
  {
    id: "boulettes",
    name: "Boulettes de maïs",
    description: "Snack populaire à base de maïs",
    region: "Centre Bénin",
    ingredients: ["Maïs", "Oignons", "Piment"],
    icon: <Citrus className="text-green-600" />,
    category: "Snacks",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Amuse_gueule_%22Atchonmon%22_de_godomey.jpg/500px-Amuse_gueule_%22Atchonmon%22_de_godomey.jpg",
    preparationTime: "20 min",
    featured: false
  },
  {
    id: "assrokouin",
    name: "Sauce Assrokouin",
    description: "Sauce gluante et appétissante",
    region: "Tout le Bénin",
    ingredients: ["Noix de Moulu", "Huile Rouge"],
    icon: <Drumstick className="text-red-600" />,
    category: "Sauces",
    image: "https://leregalgourmand.wordpress.com/wp-content/uploads/2021/05/1620889674665.jpg?w=768",
    preparationTime: "40 min",
    featured: true
  },
  {
    id: "toubani",
    name: "Toubani",
    description: "Pâte de haricots et de cossettes d'ignames souvent accompagné de piment",
    region: "Nord Bénin",
    ingredients: ["Haricots", "Cossettes d'ignames", "Potasse"],
    icon: <Drumstick className="text-red-600" />,
    category: "Plats principaux",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCufnFbu2s4tatLH1zuE0VYGDJWHAQFNV2fA&s",
    preparationTime: "70 min",
    featured: false
  },
  {
    id: "djohoungoli",
    name: "Djohoungoli",
    description: "Purée de haricots à l'huile de palme et à la farine de maïs",
    region: "Sud Bénin",
    ingredients: ["Haricots", "Huile Rouge", "Farine de maïs"],
    icon: <Drumstick className="text-red-600" />,
    category: "Plats principaux",
    image: "https://scontent-lis1-1.xx.fbcdn.net/v/t1.6435-9/161814639_1862196477278303_4841796121103667786_n.jpg?stp=dst-jpg_p526x296_tt6&_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_ohc=TjjnkRE7CA0Q7kNvwE3DBgk&_nc_oc=Adlf0SNOltqREMA3tseTeNALDz9KSnojnt3bAVNnOPo3jfB2sUmPRLcPwqGZ6UcSJus&_nc_zt=23&_nc_ht=scontent-lis1-1.xx&_nc_gid=MQ6MZVAOYMuhHhlmZjci2w&oh=00_AfJ2pr3uG8n_5hAZhXTkN17L2CiymyyjmAs9kjl5DOJeEQ&oe=6844436E",
    preparationTime: "55 min",
    featured: false
  },
  {
    id: "wassa-wassa",
    name: "Wassa wassa",
    description: "Plat à base de cossettes d'igname",
    region: "Nord Bénin",
    ingredients: ["Cossettes d'igname", "Huile d'arachide", "Piment"],
    icon: <Drumstick className="text-red-600" />,
    category: "Plats principaux",
    image: "https://scontent-lis1-1.xx.fbcdn.net/v/t39.30808-6/481949376_656871716864387_7402959713153784992_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_ohc=mg7Mr1QczpAQ7kNvwE1OcrF&_nc_oc=AdmBUolhRJsm1qsliD2ozj9HlzmFHUCn5mtUFKDXd5OW5N4nE1ysiUWy30ABDk0Fh04&_nc_zt=23&_nc_ht=scontent-lis1-1.xx&_nc_gid=rxTRpoNj-dlyG_37xitkiA&oh=00_AfL8ucLwQSg8zqpLiFotJ9RPVAEdYiK7r6W9l_jN0gV6tA&oe=68229572",
    preparationTime: "50 min",
    featured: false
  },
  {
    id: "ablo",
    name: "Ablo",
    description: "Petites galettes blanches et légèrement sucrées",
    region: "Tout le Bénin",
    ingredients: ["Farine de riz", "Farine de maïs", "Farine de blé"],
    icon: <Drumstick className="text-red-600" />,
    category: "Plats principaux",
    image: "https://i.ytimg.com/vi/cWmEjqQmPfc/maxresdefault.jpg",
    preparationTime: "35 min",
    featured: true
  }
];

// =========================================
// Définition des types pour TypeScript
// =========================================
interface ProgressiveImageProps {
  src: string;
  alt: string;
  className?: string;
}

interface Dish {
  id: string;
  name: string;
  description: string;
  region: string;
  ingredients: string[];
  icon: React.ReactNode;
  category: string;
  image: string;
  preparationTime: string;
  featured: boolean;
}

interface EnhancedCardProps {
  dish: Dish;
  index: number;
  onShowDetails: (id: string) => void;
  isFavorite: boolean;
  onToggleFavorite: (id: string) => void;
}

interface FilterBadgeProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
}

interface ModalProps {
  dish: Dish | null;
  isOpen: boolean;
  onClose: () => void;
  isFavorite: boolean;
  onToggleFavorite: (id: string) => void;
}

// =========================================
// Palette de couleurs de l'application
// Définies comme constantes pour faciliter la maintenance
// =========================================
// const COLORS = {
//   primary: "#B45309", // Ambre principal (équivalent à amber-700)
//   primaryLight: "#F59E0B", // Ambre clair (équivalent à amber-500)
//   primaryDark: "#92400E", // Ambre foncé (équivalent à amber-800)
//   accent: "#F97316", // Orange pour accent
//   background: "#FFFBEB", // Fond ambre clair (équivalent à amber-50)
//   text: "#78350F", // Texte principal (équivalent à amber-900)
//   textLight: "#B45309", // Texte secondaire
//   cardBg: "#FFFFFF", // Fond de carte
//   overlay: "rgba(180, 83, 9, 0.8)", // Overlay pour modal
// };

const COLORS = {
  primary: "#5C4033", // Marron principal
  primaryLight: "#8B4513", // Marron clair
  primaryDark: "#3B2416", // Marron foncé
  accent: "#FF7F50", // Corail pour accent
  background: "#FFF9F0", // Fond crème
  text: "#5C4033", // Texte principal
  textLight: "#8B4513", // Texte secondaire
  cardBg: "#FFFFFF", // Fond de carte
  overlay: "rgba(180, 83, 9, 0.8)", // Overlay pour modal
};

// =========================================
// Composant de chargement progressif d'image
// Améliore l'UX en affichant un placeholder jusqu'au chargement complet
// =========================================
const ProgressiveImage: React.FC<ProgressiveImageProps> = ({ src, alt, className }) => {
  const [isLoading, setIsLoading] = useState(true);
  
  return (
    <div className={`relative ${className}`}>
      {isLoading && (
        <div className="absolute inset-0 bg-gradient-to-r from-[#5C4033]/10 to-[#8B4513]/5 animate-pulse rounded-lg" />
      )}
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className={`object-cover rounded-lg transition-opacity duration-700 ${
          isLoading ? 'opacity-0' : 'opacity-100'
        }`}
        onLoadingComplete={() => setIsLoading(false)}
      />
    </div>
  );
};

// =========================================
// Badge de filtre avec animation 
// =========================================
const FilterBadge: React.FC<FilterBadgeProps> = ({ label, isActive, onClick }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Badge
        variant={isActive ? "default" : "outline"}
        className={`px-4 py-2 cursor-pointer whitespace-nowrap transition-all duration-300 border-[${COLORS.primary}] ${
          isActive 
            ? `bg-gradient-to-r from-[${COLORS.primary}] to-[${COLORS.primaryLight}] text-white shadow-md` 
            : `hover:bg-[${COLORS.primary}]/10 text-[${COLORS.primary}]`
        }`}
        onClick={onClick}
      >
        {label}
      </Badge>
    </motion.div>
  );
};

// =========================================
// Carte améliorée pour afficher un plat 
// Avec des animations et interactions
// =========================================
const EnhancedCard: React.FC<EnhancedCardProps> = ({ dish, index, onShowDetails, isFavorite, onToggleFavorite }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <Card className="h-full overflow-hidden border-[#8B4513]/20 hover:shadow-xl transition-all group relative">
        {/* Badge pour plats mis en avant */}
        {dish.featured && (
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="absolute top-3 left-3 z-20 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-2 py-1 rounded-full flex items-center gap-1 shadow-lg"
          >
            <span className="text-xs font-medium">Coup de cœur</span>
          </motion.div>
        )}
        
        {/* Image du plat */}
        <div className="relative h-56 overflow-hidden group-hover:h-60 transition-all duration-300">
          <ProgressiveImage
            src={dish.image}
            alt={dish.name}
            className="w-full h-full"
          />
          <motion.div 
            initial={false}
            animate={{ opacity: isHovered ? 1 : 0 }}
            className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"
          />
          <Badge 
            variant="outline" 
            className="absolute top-4 right-4 border-white/80 text-white bg-[#5C4033]/60 backdrop-blur-sm"
          >
            {dish.category}
          </Badge>
          
          {/* Bouton favori */}
          <motion.button
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            className={`absolute bottom-4 right-4 p-2 rounded-full ${
              isFavorite ? 'bg-red-500' : 'bg-white/80'
            } backdrop-blur-sm shadow-md`}
            onClick={(e) => {
              e.stopPropagation();
              onToggleFavorite(dish.id);
            }}
          >
            <Heart
              size={18}
              className={isFavorite ? 'text-white fill-red-500' : 'text-[#5C4033]'}
            />
          </motion.button>
        </div>
        
        {/* En-tête de la carte */}
        <CardHeader className="pb-2">
          <motion.div 
            className="flex items-start gap-4"
            animate={{ y: isHovered ? -5 : 0 }}
          >
            <div className="p-2 rounded-full bg-gradient-to-br from-[#5C4033]/10 to-[#8B4513]/20">
              {dish.icon}
            </div>
            <div>
              <CardTitle className="text-xl text-[#5C4033] group-hover:text-[#8B4513] transition-colors">
                {dish.name}
              </CardTitle>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#8B4513]"></span>
                <p className="text-sm text-[#8B4513]">{dish.region}</p>
              </div>
            </div>
          </motion.div>
        </CardHeader>
        
        {/* Contenu de la carte */}
        <CardContent>
          <motion.p 
            className="text-[#5C4033] mb-4 font-light line-clamp-2 group-hover:line-clamp-none transition-all duration-300"
            animate={{ opacity: isHovered ? 0.9 : 1 }}
          >
            {dish.description}
          </motion.p>
          
          {/* Temps de préparation */}
          <div className="flex items-center gap-2 mb-3 text-[#8B4513]">
            <Clock size={14} />
            <span className="text-sm">{dish.preparationTime}</span>
          </div>
          
          {/* Ingrédients */}
          <div className="mb-4">
            <p className="text-sm font-medium text-[#5C4033]/80 mb-2">Ingrédients principaux :</p>
            <div className="flex flex-wrap gap-2">
              {dish.ingredients.map((ingredient) => (
                <motion.div
                  key={ingredient}
                  whileHover={{ scale: 1.05, y: -2 }}
                >
                  <Badge 
                    variant="secondary"
                    className="bg-gradient-to-r from-[#8B4513]/10 to-[#5C4033]/5 text-[#5C4033]"
                  >
                    {ingredient}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Bouton découvrir */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button 
              variant="outline" 
              className="w-full border-[#5C4033] text-[#5C4033] hover:bg-gradient-to-r hover:from-[#5C4033] hover:to-[#8B4513] hover:text-white transition-all duration-300 group-hover:shadow-md mt-2 flex items-center justify-center gap-2"
              onClick={() => onShowDetails(dish.id)}
            >
              <span>Découvrir</span>
              <ArrowUpRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
            </Button>
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

// =========================================
// Modal de détails pour un plat sélectionné
// =========================================
const DishDetailsModal: React.FC<ModalProps> = ({ dish, isOpen, onClose, isFavorite, onToggleFavorite }) => {
  // Référence pour détecter les clics en dehors du modal
  const modalRef = useRef<HTMLDivElement>(null);
  
  // Gestion du clic en dehors du modal pour le fermer
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        onClose();
      }
    };
    
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);
  
  if (!dish) return null;
  
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
        >
          <motion.div
            ref={modalRef}
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25 }}
            className="bg-white rounded-2xl overflow-hidden w-full max-w-3xl max-h-[90vh] shadow-2xl flex flex-col"
          >
            {/* En-tête du modal avec image et overlay */}
            <div className="relative h-72 md:h-96 overflow-hidden">
              <ProgressiveImage
                src={dish.image}
                alt={dish.name}
                className="w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
              
              {/* Bouton de fermeture */}
              <Button 
                variant="ghost" 
                size="icon"
                className="absolute top-4 right-4 bg-white/20 hover:bg-white/40 backdrop-blur-md text-white rounded-full"
                onClick={onClose}
              >
                <X size={20} />
              </Button>
              
              {/* Titre et région en overlay sur l'image */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div className="flex justify-between items-center">
                  <div>
                    <h2 className="text-3xl font-bold mb-2">{dish.name}</h2>
                    <div className="flex items-center gap-2 text-white/90">
                      <span className="w-2 h-2 rounded-full bg-white"></span>
                      <p>{dish.region}</p>
                    </div>
                  </div>
                  
                  {/* Badge catégorie */}
                  <Badge className="bg-gradient-to-r from-amber-400 to-amber-500 text-white border-none">
                    {dish.category}
                  </Badge>
                </div>
              </div>
            </div>
            
            {/* Contenu du modal avec défilement */}
            <div className="p-6 overflow-y-auto">
              {/* Section supérieure avec actions et temps */}
              <div className="flex justify-between items-center mb-6">
                {/* Temps de préparation */}
                <div className="flex items-center gap-2 bg-[#8B4513]/10 text-[#5C4033] px-4 py-2 rounded-full">
                  <Clock size={18} />
                  <span>{dish.preparationTime}</span>
                </div>
                
                {/* Bouton favoris */}
                <Button
                  variant={isFavorite ? "default" : "outline"}
                  size="sm"
                  className={`gap-2 ${
                    isFavorite 
                      ? 'bg-red-500 hover:bg-red-600 border-none text-white' 
                      : 'border-[#5C4033] text-[#5C4033]'
                  }`}
                  onClick={() => onToggleFavorite(dish.id)}
                >
                  <Heart size={16} className={isFavorite ? 'fill-white' : ''} />
                  <span>{isFavorite ? 'Retirer des favoris' : 'Ajouter aux favoris'}</span>
                </Button>
              </div>
              
              {/* Description */}
              <div className="mb-8">
                <h3 className="text-xl font-medium text-[#5C4033] mb-3">À propos</h3>
                <p className="text-[#8B4513] leading-relaxed">{dish.description}</p>
              </div>
              
              {/* Ingrédients */}
              <div className="mb-8">
                <h3 className="text-xl font-medium text-[#5C4033] mb-4">Ingrédients</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {dish.ingredients.map((ingredient) => (
                    <motion.div
                      key={ingredient}
                      whileHover={{ scale: 1.03 }}
                      className="bg-[#8B4513]/5 p-3 rounded-lg flex items-center gap-2"
                    >
                      <div className="w-2 h-2 rounded-full bg-[#8B4513]"></div>
                      <span className="text-[#5C4033]">{ingredient}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
              
              {/* Note informative */}
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 flex items-start gap-3">
                <Info size={20} className="text-amber-500 mt-1 flex-shrink-0" />
                <p className="text-amber-800 text-sm">
                  Ce plat fait partie de la riche tradition culinaire béninoise. Il est souvent préparé lors 
                  d'occasions spéciales et reflète l'héritage gastronomique de la région.
                </p>
              </div>
            </div>
            
            {/* Pied de modal avec bouton */}
            <div className="border-t border-gray-200 p-4 bg-gray-50 flex justify-end">
              <Link href="gastronomie/details">
                <Button 
                  className="bg-gradient-to-r from-[#5C4033] to-[#8B4513] hover:opacity-90 text-white"
                >
                  Voir la recette complète
                </Button>
              </Link>
              
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// =========================================
// Page principale
// =========================================
export default function GastronomyPage() {
  // États pour la gestion de l'interface
  const [activeFilter, setActiveFilter] = useState("Tous");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [searchHistory, setSearchHistory] = useState<Array<{query: string, count: number, timestamp: Date}>>([]);
  const [selectedDish, setSelectedDish] = useState<Dish | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [favorites, setFavorites] = useState<string[]>([]);
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  
  // Configuration de pagination
  const itemsPerPage = 6;
  
  // Filtrage des plats selon les critères sélectionnés
  const filteredDishes = dishes.filter(dish => {
    const matchesFilter = activeFilter === "Tous" || dish.category === activeFilter;
    const matchesSearch = dish.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          dish.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          dish.ingredients.some(ingredient => ingredient.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesFavorites = !showFavoritesOnly || favorites.includes(dish.id);
    return matchesFilter && matchesSearch && matchesFavorites;
  });
  
  // Logique de pagination
  const totalPages = Math.ceil(filteredDishes.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentDishes = filteredDishes.slice(startIndex, endIndex);
  
  // Fonctions de gestion des événements
  
  // Ouvrir les détails d'un plat
  const handleShowDetails = (id: string) => {
    const dish = dishes.find(d => d.id === id);
    if (dish) {
      setSelectedDish(dish);
      setIsModalOpen(true);
    }
  };
  
  // Fermer le modal de détails
  const handleCloseModal = () => {
    setIsModalOpen(false);
    // Petit délai avant de réinitialiser le plat sélectionné pour l'animation
    setTimeout(() => setSelectedDish(null), 300);
  };
  
  // Ajouter/supprimer un plat des favoris
  const handleToggleFavorite = (id: string) => {
    setFavorites(prev => {
      if (prev.includes(id)) {
        return prev.filter(favId => favId !== id);
      } else {
        return [...prev, id];
      }
    });
  };
  
  // Mise à jour de l'historique de recherche
  useEffect(() => {
    if (searchQuery && filteredDishes.length > 0) {
      const newHistory = {
        query: searchQuery,
        count: filteredDishes.length,
        timestamp: new Date()
      };
      // Vérifier si cette recherche existe déjà
      setSearchHistory(prev => {
        const existingIndex = prev.findIndex(item => item.query.toLowerCase() === searchQuery.toLowerCase());
        if (existingIndex >= 0) {
          // Mettre à jour l'entrée existante et la déplacer en haut
          const updatedHistory = [...prev];
          updatedHistory.splice(existingIndex, 1);
          return [newHistory, ...updatedHistory].slice(0, 5);
        } else {
          // Ajouter nouvelle entrée
          return [newHistory, ...prev].slice(0, 5);
        }
      });
    }
  }, [searchQuery, filteredDishes.length]);
  
  // Réinitialiser la page quand le filtre ou la recherche change
  useEffect(() => {
    setCurrentPage(1);
  }, [activeFilter, searchQuery, showFavoritesOnly]);
  
  // Persistance des favoris dans le localStorage
  useEffect(() => {
    // Charger les favoris au chargement initial
    const storedFavorites = localStorage.getItem('beninDishFavorites');
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
    
    // Effet de nettoyage pour sauvegarder les favoris
    return () => {
      localStorage.setItem('beninDishFavorites', JSON.stringify(favorites));
    };
  }, []);
  
  // Sauvegarder les favoris quand ils changent
  useEffect(() => {
    localStorage.setItem('beninDishFavorites', JSON.stringify(favorites));
  }, [favorites]);
  
  return (
    <div className="bg-[#FFF9F0] min-h-screen">
      {/* Section héro avec animation simplifiée */}
      <motion.div 
        className="relative h-[50vh] overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-[#5C4033]/80 to-[#5C4033]/90 z-10" />
          <Image 
            src="https://critikmag.com/wp-content/uploads/2024/10/top-10-des-plats-les-plus-consommes-de-la-cuisine-beninoise-critikmag.png" 
            alt="Cuisine béninoise" 
            fill 
            className="object-cover "
            priority
          />
        </motion.div>
        
        <div className="relative z-20 h-full flex flex-col items-center justify-center text-white px-4">
          <motion.h1 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl font-bold mb-4 text-center bg-gradient-to-r from-amber-200 to-amber-50 bg-clip-text text-transparent"
          >
            Trésors Culinaires du Bénin
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xl md:text-2xl max-w-2xl mx-auto text-center text-white/90"
          >
            Découvrez les saveurs authentiques qui font vibrer les papilles
          </motion.p>
        </div>
      </motion.div>

      {/* Contenu principal avec animation simplifiée */}
      <div className="max-w-6xl mx-auto px-4 py-12 relative -mt-24 z-30">
        {/* Section de recherche avec animation simplifiée */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="bg-white backdrop-blur-md p-6 rounded-xl shadow-lg mb-12 border border-[#8B4513]/20"
        >
          <div className="flex flex-col md:flex-row gap-6">
            {/* Champ de recherche */}
            <div className="flex-[0.9] relative">
              <Search 
                className={`absolute left-3 top-1/2 transform -translate-y-1/2 transition-colors duration-300 ${
                  isSearchFocused ? 'text-[#5C4033]' : 'text-[#8B4513]/60'
                }`} 
                size={18} 
              />
              <Input
                placeholder="Rechercher un plat, ingrédient..."
                className={`pl-10 pr-2 py-1.5 border-[#8B4513]/30 ring-[#5C4033]/10 transition-all duration-300 ${
                  isSearchFocused ? 'border-[#5C4033]/40 ring-1' : 'focus:border-[#8B4513]/40'
                }`}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setIsSearchFocused(false)}
              />
              
              {/* Bouton pour effacer la recherche */}
              {searchQuery && (
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 h-7 w-7 text-[#8B4513]/60 hover:text-[#5C4033] hover:bg-[#5C4033]/10"
                  onClick={() => setSearchQuery("")}
                >
                  <X size={14} />
                </Button>
              )}
            </div>
            
            {/* Filtres par catégorie */}
            <div className="flex-[1.1] flex flex-wrap gap-3">
              {/* Badges de filtrage */}
              <FilterBadge 
                label="Tous" 
                isActive={activeFilter === "Tous"}
                onClick={() => setActiveFilter("Tous")}
              />
              <FilterBadge 
                label="Plats principaux" 
                isActive={activeFilter === "Plats principaux"}
                onClick={() => setActiveFilter("Plats principaux")}
              />
              <FilterBadge 
                label="Sauces" 
                isActive={activeFilter === "Sauces"}
                onClick={() => setActiveFilter("Sauces")}
              />
              <FilterBadge 
                label="Snacks" 
                isActive={activeFilter === "Snacks"}
                onClick={() => setActiveFilter("Snacks")}
              />
              <FilterBadge 
                label="Accompagnements" 
                isActive={activeFilter === "Accompagnements"}
                onClick={() => setActiveFilter("Accompagnements")}
              />
            </div>
          </div>

          {/* Historique de recherche */}
          <AnimatePresence>
            {searchHistory.length > 0 && (
              <motion.div 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-4 pt-4 border-t border-[#8B4513]/10 overflow-hidden"
              >
                <div className="flex items-center gap-2 text-[#5C4033]/80 mb-2">
                  <Clock size={16} />
                  <span className="text-sm font-medium">Recherches récentes</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {searchHistory.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Badge 
                        variant="outline" 
                        className="bg-[#8B4513]/5 text-[#5C4033]/80 cursor-pointer hover:bg-[#8B4513]/10 flex items-center gap-1 border-[#8B4513]/20"
                        onClick={() => setSearchQuery(item.query)}
                      >
                        <span>{item.query}</span>
                        <span className="opacity-60">({item.count})</span>
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Nombre de résultats et pagination */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-[#5C4033] font-bold text-2xl"
          >
            {filteredDishes.length} résultat{filteredDishes.length > 1 ? 's' : ''} trouvé{filteredDishes.length > 1 ? 's' : ''}
          </motion.p>
          
          {/* Pagination supérieure (apparaît uniquement sur mobile) */}
          {totalPages > 1 && (
            <div className="flex items-center gap-4 sm:hidden">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="border-[#5C4033] text-[#5C4033] hover:bg-[#5C4033]/10"
              >
                <ChevronLeft size={16} />
              </Button>
              <span className="text-[#5C4033]">
                {currentPage}/{totalPages}
              </span>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="border-[#5C4033] text-[#5C4033] hover:bg-[#5C4033]/10"
              >
                <ChevronRight size={16} />
              </Button>
            </div>
          )}
        </div>

        {/* Grille de plats avec animation simplifiée */}
        <AnimatePresence mode="wait">
          {currentDishes.length > 0 ? (
            <motion.div 
              key={`${currentPage}-${activeFilter}-${searchQuery}-${showFavoritesOnly}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {currentDishes.map((dish, index) => (
                <EnhancedCard
                  key={dish.id}
                  dish={dish}
                  index={index}
                  onShowDetails={handleShowDetails}
                  isFavorite={favorites.includes(dish.id)}
                  onToggleFavorite={handleToggleFavorite}
                />
              ))}
            </motion.div>
          ) : (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="text-center py-20"
            >
              <div className="bg-white/90 backdrop-blur-sm rounded-lg p-8 max-w-lg mx-auto shadow-lg border border-[#8B4513]/10">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.2, type: "spring" }}
                >
                  <ChefHat className="mx-auto text-[#5C4033] mb-4" size={64} />
                </motion.div>
                <h3 className="text-2xl font-medium text-[#5C4033] mb-2">Aucun plat trouvé</h3>
                <p className="text-[#8B4513] mb-6">Essayez de modifier vos critères de recherche ou de filtrage.</p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <Button
                    variant="outline"
                    className="border-[#5C4033] text-[#5C4033] hover:bg-[#5C4033]/10"
                    onClick={() => {
                      setSearchQuery("");
                      setActiveFilter("Tous");
                      setShowFavoritesOnly(false);
                    }}
                  >
                    Réinitialiser les filtres
                  </Button>
                  {showFavoritesOnly && (
                    <Button
                      variant="outline"
                      className="border-red-500 text-red-500 hover:bg-red-50"
                      onClick={() => setShowFavoritesOnly(false)}
                    >
                      Afficher tous les plats
                    </Button>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* Pagination inférieure */}
        <div className="flex justify-center items-center mt-12">
          {totalPages > 1 && (
            <div className="flex items-center gap-4">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="border-[#5C4033] text-[#5C4033] hover:bg-[#5C4033]/10"
              >
                <ChevronLeft size={16} className="mr-1" />
                <span className="hidden sm:inline">Précédent</span>
              </Button>
              
              <div className="hidden sm:flex items-center gap-2">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                  <motion.button
                    key={page}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                      currentPage === page
                        ? 'bg-[#5C4033] text-white font-medium'
                        : 'text-[#5C4033] hover:bg-[#5C4033]/10'
                    }`}
                    onClick={() => setCurrentPage(page)}
                  >
                    {page}
                  </motion.button>
                ))}
              </div>
              
              <span className="text-[#5C4033] sm:hidden">
                Page {currentPage} sur {totalPages}
              </span>
              
              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="border-[#5C4033] text-[#5C4033] hover:bg-[#5C4033]/10"
              >
                <span className="hidden sm:inline">Suivant</span>
                <ChevronRight size={16} className="ml-1" />
              </Button>
            </div>
          )}
        </div>
      </div>
      
      {/* Footer simple */}
      {/* <footer className="bg-[#5C4033] text-white py-8 mt-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Trésors Culinaires du Bénin</h2>
          <p className="mb-6">Explorez la richesse gastronomique du Bénin à travers notre collection de plats traditionnels.</p>
          <div className="flex justify-center gap-6">
            <Button variant="ghost" className="text-white hover:bg-white/10">À propos</Button>
            <Button variant="ghost" className="text-white hover:bg-white/10">Contact</Button>
            <Button variant="ghost" className="text-white hover:bg-white/10">Mentions légales</Button>
          </div>
        </div>
      </footer> */}
      
      {/* Modal de détails du plat */}
      <DishDetailsModal 
        dish={selectedDish} 
        isOpen={isModalOpen} 
        onClose={handleCloseModal}
        isFavorite={selectedDish ? favorites.includes(selectedDish.id) : false}
        onToggleFavorite={handleToggleFavorite}
      />
    </div>
  );
}