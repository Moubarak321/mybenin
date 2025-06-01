"use client";
import React, { useState, useEffect } from 'react';
import { ChevronRight, Home, Book, Search, Star, Eye, Clock, Share2, Heart, MapPin, Calendar, Users } from 'lucide-react';

// Interface pour les éléments du fil d'Ariane
interface BreadcrumbItem {
  label: string;
  href?: string;
  icon?: React.ReactNode;
}

// Props pour le composant Breadcrumbs amélioré
interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  return (
    <nav aria-label="breadcrumb" className="breadcrumbs-nav">
      <ol className="flex items-center space-x-2 text-sm">
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            {item.icon && <span className="mr-2">{item.icon}</span>}
            {item.href ? (
              <a 
                href={item.href} 
                className="text-amber-600 hover:text-amber-800 transition-colors duration-200 hover:underline"
              >
                {item.label}
              </a>
            ) : (
              <span className="text-gray-600 font-medium">{item.label}</span>
            )}
            {index < items.length - 1 && (
              <ChevronRight className="w-4 h-4 text-gray-400 mx-2" />
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

// Composant de statistiques
const StatsSection: React.FC = () => {
  const stats = [
    { icon: <Star className="w-6 h-6" />, value: "10+", label: "Divinités Principales", color: "from-yellow-400 to-orange-500" },
    { icon: <Users className="w-6 h-6" />, value: "65%", label: "Population Pratiquante", color: "from-blue-400 to-purple-500" },
    { icon: <Calendar className="w-6 h-6" />, value: "4000+", label: "Années d'Histoire", color: "from-green-400 to-blue-500" },
    { icon: <MapPin className="w-6 h-6" />, value: "77", label: "Communes au Bénin", color: "from-purple-400 to-pink-500" }
  ];

  return (
    <div className="stats-section grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
      {stats.map((stat, index) => (
        <div key={index} className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
          <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r ${stat.color} text-white mb-4`}>
            {stat.icon}
          </div>
          <div className="text-2xl font-bold text-gray-800 mb-1">{stat.value}</div>
          <div className="text-sm text-gray-600">{stat.label}</div>
        </div>
      ))}
    </div>
  );
};

// Composant de recherche et filtres
const SearchAndFilter: React.FC<{ onSearch: (term: string) => void; onFilter: (category: string) => void }> = ({ onSearch, onFilter }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isExpanded, setIsExpanded] = useState(false);
  const categories = [
    { id: 'all', label: 'Tous', icon: <Star className="w-4 h-4" /> },
    { id: 'divinites', label: 'Divinités', icon: <Book className="w-4 h-4" /> },
    { id: 'esprits', label: 'Esprits', icon: <Eye className="w-4 h-4" /> },
    { id: 'masques', label: 'Masques', icon: <Users className="w-4 h-4" /> },
    { id: 'divination', label: 'Divination', icon: <Calendar className="w-4 h-4" /> }
  ];

  const handleSearch = (value: string) => {
    setSearchTerm(value);
    onSearch(value);
  };

  return (
    <div className="search-filter-section bg-white rounded-3xl p-8 shadow-xl mb-12 relative overflow-hidden">
      {/* Fond décoratif */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-amber-100 to-orange-100 rounded-full -mr-32 -mt-32 opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-yellow-100 to-amber-100 rounded-full -ml-24 -mb-24 opacity-50"></div>

      <div className="relative z-10">
        {/* Barre de recherche principale */}
        <div className="relative mb-6">
          <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
            <Search className="w-5 h-5 text-amber-500" />
          </div>
          <input
            type="text"
            placeholder="Rechercher une divinité, un esprit ou un concept..."
            value={searchTerm}
            onChange={(e) => handleSearch(e.target.value)}
            className="w-full pl-12 pr-4 py-4 bg-gray-50/80 border border-amber-100/50 rounded-2xl focus:ring-1 focus:ring-amber-300/50 focus:border-amber-200/50 outline-none transition-all duration-200 text-lg backdrop-blur-sm"
          />
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 hover:bg-amber-50 rounded-xl transition-colors duration-200"
          >
            <ChevronRight className={`w-5 h-5 text-amber-500 transform transition-transform duration-200 ${isExpanded ? 'rotate-90' : ''}`} />
          </button>
        </div>

        {/* Filtres avec animation */}
        <div className={`grid gap-3 transition-all duration-300 ${isExpanded ? 'grid-cols-2 md:grid-cols-5 opacity-100' : 'h-0 opacity-0 overflow-hidden'}`}>
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => onFilter(category.label)}
              className="group flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-amber-50/70 to-orange-50/70 hover:from-amber-100/80 hover:to-orange-100/80 text-amber-700/90 rounded-xl transition-all duration-200 transform hover:-translate-y-1 hover:shadow-sm backdrop-blur-sm"
            >
              <span className="text-amber-500/90 group-hover:scale-110 transition-transform duration-200">
                {category.icon}
              </span>
              <span className="font-medium">{category.label}</span>
            </button>
          ))}
        </div>

        {/* Indicateur de résultats */}
        <div className="mt-4 text-sm text-gray-500 flex items-center gap-2">
          <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse"></div>
          <span>Recherche en temps réel</span>
        </div>
      </div>
    </div>
  );
};

// Props pour le composant SpiritualiteCard amélioré
interface SpiritualiteCardProps {
  title: string;
  introduction: string;
  imageUrl: string;
  accentColor?: string;
  category: string;
  readTime: string;
  popularity: number;
}

const SpiritualiteCard: React.FC<SpiritualiteCardProps> = ({ 
  title, 
  introduction, 
  imageUrl, 
  accentColor = '#c57d3c',
  category,
  readTime,
  popularity
}) => {
  const [isLiked, setIsLiked] = useState(false);
  const [views] = useState(Math.floor(Math.random() * 1000) + 100);

  return (
    <div className="group spiritualite-card bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
      {/* Badge de catégorie */}
      <div className="absolute top-4 left-4 z-10">
        <span 
          className="px-3 py-1 text-xs font-semibold text-white rounded-full shadow-md"
          style={{ backgroundColor: accentColor }}
        >
          {category}
        </span>
      </div>
      
      {/* Bouton favoris */}
      <button 
        className="absolute top-4 right-4 z-10 p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-md hover:bg-white transition-all duration-200"
        onClick={() => setIsLiked(!isLiked)}
      >
        <Heart className={`w-4 h-4 ${isLiked ? 'fill-red-500 text-red-500' : 'text-gray-600'}`} />
      </button>

      {/* Image avec overlay gradient */}
      <div className="relative h-64 overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
        
        {/* Barre d'accent colorée */}
        <div 
          className="absolute bottom-0 left-0 w-full h-1"
          style={{ backgroundColor: accentColor }}
        ></div>
      </div>

      {/* Contenu */}
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <h3 
            className="text-xl font-bold line-clamp-1"
            style={{ color: accentColor }}
          >
            {title}
          </h3>
          <div className="flex items-center text-gray-500 text-sm">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 mr-1" />
            <span>{popularity}</span>
          </div>
        </div>
        
        <p className="text-gray-600 line-clamp-3 mb-4 leading-relaxed">
          {introduction}
        </p>

        {/* Métadonnées */}
        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-1" />
              <span>{readTime}</span>
            </div>
            <div className="flex items-center">
              <Eye className="w-4 h-4 mr-1" />
              <span>{views}</span>
            </div>
          </div>
        </div>

        {/* Boutons d'action */}
        <div className="flex items-center justify-between">
          <button 
            className="px-4 py-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-lg hover:from-amber-600 hover:to-orange-600 transition-all duration-200 font-medium flex-1 mr-2"
          >
            Découvrir
          </button>
          <button className="p-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-200">
            <Share2 className="w-4 h-4 text-gray-600" />
          </button>
        </div>
      </div>
    </div>
  );
};

// Données enrichies pour les réalités spirituelles
const spiritualRealitiesData = [
  {
    id: 'legba',
    title: 'Legba',
    category: 'Divinités',
    introduction: 'Gardien des carrefours et messager divin, Legba est la clé ouvrant les portes du monde spirituel, indispensable à toute communication avec les Vaudous (divinités).',
    imageUrl: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    accentColor: '#e74c3c',
    readTime: '5 min',
    popularity: 4.8,
  },
  {
    id: 'mami_wata',
    title: 'Mami Wata',
    category: 'Esprits',
    introduction: 'Esprit aquatique puissant, Mami Wata symbolise la beauté, la richesse et la séduction. Elle est vénérée pour la prospérité et la fertilité qu\'elle peut accorder.',
    imageUrl: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    accentColor: '#3498db',
    readTime: '4 min',
    popularity: 4.6,
  },
  {
    id: 'sakpata',
    title: 'Sakpata',
    category: 'Divinités',
    introduction: 'Divinité de la terre, de la variole et de la justice. Sakpata est craint et respecté, il punit les méfaits et assure la fertilité des sols.',
    imageUrl: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    accentColor: '#8B4513',
    readTime: '6 min',
    popularity: 4.4,
  },
  {
    id: 'heviosso',
    title: 'Hêviosso (Xêvioso)',
    category: 'Divinités',
    introduction: 'Dieu du tonnerre, de la foudre et de la justice divine. Il incarne la puissance céleste et châtie les coupables par le feu du ciel.',
    imageUrl: 'https://images.unsplash.com/photo-1605379399642-870262d3d051?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    accentColor: '#f1c40f',
    readTime: '5 min',
    popularity: 4.7,
  },
  {
    id: 'fa',
    title: 'Fa (Ifa)',
    category: 'Divination',
    introduction: 'Système de divination complexe et art divinatoire majeur. Le Fa révèle le destin, offre des conseils et guide les individus à travers les épreuves de la vie.',
    imageUrl: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    accentColor: '#9b59b6',
    readTime: '8 min',
    popularity: 4.9,
  },
  {
    id: 'dan',
    title: 'Dan',
    category: 'Esprits',
    introduction: 'Serpent sacré, symbole de vie, de prospérité, de continuité et de richesse. Souvent associé à l\'arc-en-ciel, il représente le mouvement perpétuel et la transformation.',
    imageUrl: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    accentColor: '#2ecc71',
    readTime: '4 min',
    popularity: 4.5,
  },
  {
    id: 'gu',
    title: 'Gu (Ogun)',
    category: 'Divinités',
    introduction: 'Divinité du fer, de la guerre, des forgerons et des artisans. Gu est la force qui tranche, construit, protège et ouvre les chemins.',
    imageUrl: 'https://images.unsplash.com/photo-1605379399642-870262d3d051?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    accentColor: '#7f8c8d',
    readTime: '5 min',
    popularity: 4.3,
  },
  {
    id: 'tron_alafia',
    title: 'Tron Alafia',
    category: 'Esprits',
    introduction: 'Autel protecteur familial ou communautaire, assurant la paix (Alafia), la prospérité et la protection contre les forces négatives et les conflits.',
    imageUrl: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    accentColor: '#e67e22',
    readTime: '6 min',
    popularity: 4.2,
  },
  {
    id: 'zangbeto',
    title: 'Zangbeto',
    category: 'Masques',
    introduction: 'Gardiens de nuit traditionnels, les Zangbeto sont des masques tournoyants qui purifient la communauté, assurent la sécurité et chassent les mauvais esprits.',
    imageUrl: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    accentColor: '#34495e',
    readTime: '7 min',
    popularity: 4.6,
  },
  {
    id: 'egungun',
    title: 'Egungun',
    category: 'Masques',
    introduction: 'Société secrète de masques représentant les esprits des ancêtres. Les Egungun reviennent parmi les vivants pour honorer, conseiller, et parfois rendre justice.',
    imageUrl: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    accentColor: '#d35400',
    readTime: '6 min',
    popularity: 4.4,
  },
];

const SpiritualitePage: React.FC = () => {
  const [filteredData, setFilteredData] = useState(spiritualRealitiesData);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Tous');

  const breadcrumbItems: BreadcrumbItem[] = [
    { label: 'Accueil', href: '/', icon: <Home className="w-4 h-4" /> },
    { label: 'Culture Béninoise', href: '/culture', icon: <Book className="w-4 h-4" /> },
    { label: 'Spiritualité Vaudou' },
  ];

  // Fonction de recherche
  const handleSearch = (term: string) => {
    setSearchTerm(term);
    filterData(term, selectedCategory);
  };

  // Fonction de filtrage
  const handleFilter = (category: string) => {
    setSelectedCategory(category);
    filterData(searchTerm, category);
  };

  // Fonction de filtrage combiné
  const filterData = (term: string, category: string) => {
    let filtered = spiritualRealitiesData;

    if (term) {
      filtered = filtered.filter(item => 
        item.title.toLowerCase().includes(term.toLowerCase()) ||
        item.introduction.toLowerCase().includes(term.toLowerCase())
      );
    }

    if (category !== 'Tous') {
      filtered = filtered.filter(item => item.category === category);
    }

    setFilteredData(filtered);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
      {/* Header avec gradient */}
      <div className="relative overflow-hidden bg-gradient-to-r from-amber-600 via-orange-600 to-yellow-600">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-6 py-16">
          {/* <Breadcrumbs items={breadcrumbItems} /> */}
          
          <div className="text-center mt-8">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Au Cœur du <span className="text-yellow-200">Vaudou</span>
            </h1>
            <p className="text-xl text-amber-100 max-w-4xl mx-auto leading-relaxed mb-10">
              Le Vaudou béninois est une cosmologie vivante, un héritage ancestral qui façonne la perception du monde et les interactions quotidiennes.
              Il tisse des liens profonds entre le tangible et l'immatériel, où divinités, esprits de la nature et ancêtres jouent un rôle central.
              <br /> <br />
              <span className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-4 text-white text-xl font-medium"> 
                ✨ Spiritualités du Bénin ✨
              </span>
            </p>
            {/* <p className="text-xl text-amber-100 max-w-4xl mx-auto leading-relaxed mb-8">
                ✨ Spiritualités du Bénin ✨
            </p> */}
            {/* <div className="flex justify-center">
              <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-4 text-white text-xl font-medium">
                ✨ Spiritualités du Bénin ✨
              </div>
            </div> */}
          </div>
        </div>
        
        {/* Vagues décoratives */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <svg className="relative block w-full h-20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="fill-amber-50"></path>
          </svg>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Section statistiques */}
        <StatsSection />

        {/* Section recherche et filtres */}
        <SearchAndFilter onSearch={handleSearch} onFilter={handleFilter} />

        {/* Grille des cartes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredData.map((reality) => (
            <SpiritualiteCard
              key={reality.id}
              title={reality.title}
              introduction={reality.introduction}
              imageUrl={reality.imageUrl}
              accentColor={reality.accentColor}
              category={reality.category}
              readTime={reality.readTime}
              popularity={reality.popularity}
            />
          ))}
        </div>

        {/* Message si aucun résultat */}
        {filteredData.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-gray-700 mb-2">Aucun résultat trouvé</h3>
            <p className="text-gray-600">Essayez de modifier vos critères de recherche ou de filtrage.</p>
          </div>
        )}

        {/* Footer enrichi */}
        <footer className="bg-gradient-to-r from-amber-700 to-orange-700 rounded-3xl p-12 text-center text-white">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-6">Continuez Votre Exploration</h3>
            <p className="text-lg text-amber-100 mb-8 leading-relaxed">
              Cette exploration n'est qu'une porte d'entrée vers la richesse et la complexité du Vaudou. 
              Chaque divinité, chaque rituel, porte en lui des siècles de sagesse et de culture, 
              transmis de génération en génération dans le respect et la vénération.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-amber-700 px-8 py-3 rounded-full font-semibold hover:bg-amber-50 transition-colors duration-200">
                Découvrir plus de traditions
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-amber-700 transition-all duration-200">
                Partager cette page
              </button>
            </div>
            <div className="mt-8 pt-8 border-t border-amber-600 text-amber-200">
              <p>© 2025 - Patrimoine Culturel du Bénin</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default SpiritualitePage;