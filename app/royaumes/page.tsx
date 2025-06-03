"use client";

import { useState, useEffect, useRef, SetStateAction } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Search, MapPin, Clock, Crown, User, MoveRight, X, ChevronLeft, ChevronRight, ChevronDown } from "lucide-react";

const ROYALTIES = [
  { 
    id: "dahomey", 
    name: "Royaume du Dahomey", 
    region: "Centre/Sud Bénin", 
    period: "1600-1894", 
    capital: "Abomey", 
    ethnicity: "Fon", 
    description: "L'un des plus puissants royaumes d'Afrique de l'Ouest, célèbre pour son organisation militaire et ses arts royaux.", 
    longDescription: "Le royaume du Dahomey était un État puissant qui contrôlait le sud du Bénin actuel. Fondé au début du XVIIe siècle, il s'est distingué par sa structure politique centralisée et son armée redoutable, incluant les célèbres Amazones du Dahomey, un corps d'élite féminin. Le palais royal d'Abomey, inscrit au patrimoine mondial de l'UNESCO, témoigne de la richesse culturelle et artistique de ce royaume qui ne capitula qu'en 1894 face aux forces coloniales françaises, après une résistance acharnée menée par le roi Béhanzin.", 
    image: "https://i0.wp.com/originalfoundblog.com/wp-content/uploads/2017/02/img_0149.jpg?fit=3840%2C1665", 
    galerie: [ 
      "https://i0.wp.com/originalfoundblog.com/wp-content/uploads/2017/02/img_0149.jpg?fit=3840%2C1665", 
      "https://refinedng.com/wp-content/uploads/2022/07/Yoruba-People.jpg", 
      "https://lanouvelletribune.info/wp-content/uploads/2021/12/Tata-somba-Kirche.jpg" 
    ], 
    famousRulers: [ 
      { name: "Roi Ghezo", period: "1818-1858", achievements: "Modernisation du royaume, développement des arts royaux" }, 
      { name: "Roi Glélé", period: "1858-1889", achievements: "Expansion territoriale, renforcement de l'armée royale" }, 
      { name: "Roi Béhanzin", period: "1889-1894", achievements: "Résistance contre la colonisation française" } 
    ], 
    culturalHeritage: [ 
      { name: "Palais Royaux d'Abomey", description: "Ensemble architectural unique inscrit au patrimoine mondial de l'UNESCO", imageUrl: "https://refinedng.com/wp-content/uploads/2022/07/Yoruba-People.jpg" }, 
      { name: "Appliqués textiles", description: "Art textile narratif représentant l'histoire des rois et du royaume", imageUrl: "https://refinedng.com/wp-content/uploads/2022/07/Yoruba-People.jpg" }, 
      { name: "Récades royales", description: "Sceptres symboliques incarnant l'autorité royale", imageUrl: "https://refinedng.com/wp-content/uploads/2022/07/Yoruba-People.jpg" } 
    ] 
  },
  { 
    id: "allada", 
    name: "Royaume d'Allada", 
    region: "Sud Bénin", 
    period: "1575-1724", 
    capital: "Allada", 
    ethnicity: "Fon/Aïzo", 
    description: "Royaume précurseur du Dahomey, central dans les relations commerciales avec les Européens.", 
    longDescription: "Le royaume d'Allada, aussi appelé Ardra par les Européens, était un puissant État côtier qui contrôlait une grande partie du sud du Bénin actuel avant l'ascension du Dahomey. Fondé au XVIe siècle, il joua un rôle central dans le commerce avec les Européens et fut une plaque tournante majeure de la traite atlantique. Sa dynastie est à l'origine de plusieurs royaumes de la région, notamment le Dahomey et Porto-Novo. Le royaume fut finalement conquis par le Dahomey en 1724 sous le règne d'Agadja.", 
    image: "https://i0.wp.com/originalfoundblog.com/wp-content/uploads/2017/02/img_0149.jpg?fit=3840%2C1665", 
    galerie: [ 
      "https://i0.wp.com/originalfoundblog.com/wp-content/uploads/2017/02/img_0149.jpg?fit=3840%2C1665", 
      "https://refinedng.com/wp-content/uploads/2022/07/Yoruba-People.jpg", 
      "https://lanouvelletribune.info/wp-content/uploads/2021/12/Tata-somba-Kirche.jpg"
    ], 
    famousRulers: [ 
      { name: "Roi Kokpon", period: "1602-1625", achievements: "Développement du commerce avec les Européens" }, 
      { name: "Roi Toxonu", period: "1664-1677", achievements: "Alliance avec le royaume de Ouidah" }, 
      { name: "Roi Akaba", period: "1680-1708", achievements: "Résistance contre l'expansion du Dahomey" } 
    ], 
    culturalHeritage: [ 
      { name: "Centre historique d'Allada", description: "Site historique comprenant les vestiges du palais royal", imageUrl: "https://refinedng.com/wp-content/uploads/2022/07/Yoruba-People.jpg" }, 
      { name: "Forêt sacrée de Kpassè", description: "Lieu de culte et de mémoire des ancêtres royaux", imageUrl: "https://refinedng.com/wp-content/uploads/2022/07/Yoruba-People.jpg" }, 
      { name: "Divinité Ayizan", description: "Culte royal protecteur lié à la terre et aux marchés", imageUrl: "https://refinedng.com/wp-content/uploads/2022/07/Yoruba-People.jpg" } 
    ] 
  },
  { 
    id: "porto-novo", 
    name: "Royaume de Porto-Novo", 
    region: "Sud-Est Bénin", 
    period: "1688-1908", 
    capital: "Porto-Novo", 
    ethnicity: "Goun/Yoruba", 
    description: "Royaume fondé par des princes d'Allada, développé comme centre commercial important.", 
    longDescription: "Le royaume de Porto-Novo (Hogbonou ou Adjatchè) fut fondé à la fin du XVIIe siècle par un prince d'Allada fuyant les guerres de succession. Situé stratégiquement près de la frontière actuelle avec le Nigeria, il développa d'importantes relations commerciales avec les Européens, particulièrement les Portugais qui lui donnèrent son nom colonial. Le royaume adopta des influences culturelles yoruba tout en maintenant ses traditions fon. Pour résister à la pression du Dahomey, il se plaça sous protectorat français en 1863, ce qui contribua à préserver son autonomie jusqu'à la colonisation complète.", 
    image: "https://i0.wp.com/originalfoundblog.com/wp-content/uploads/2017/02/img_0149.jpg?fit=3840%2C1665", 
    galerie: [ 
      "https://i0.wp.com/originalfoundblog.com/wp-content/uploads/2017/02/img_0149.jpg?fit=3840%2C1665", 
      "https://refinedng.com/wp-content/uploads/2022/07/Yoruba-People.jpg", 
      "https://lanouvelletribune.info/wp-content/uploads/2021/12/Tata-somba-Kirche.jpg"
    ], 
    famousRulers: [ 
      { name: "Roi Tê Agbanlin", period: "1688-1729", achievements: "Fondateur du royaume et établissement des institutions" }, 
      { name: "Roi Sodji", period: "1848-1864", achievements: "Négociation du protectorat français" }, 
      { name: "Roi Toffa", period: "1874-1908", achievements: "Modernisation et développement urbain" } 
    ], 
    culturalHeritage: [ 
      { name: "Musée Honmè", description: "Ancien palais royal transformé en musée", imageUrl: "https://refinedng.com/wp-content/uploads/2022/07/Yoruba-People.jpg" }, 
      { name: "Grande Mosquée de Porto-Novo", description: "Exemple unique d'architecture afro-brésilienne", imageUrl: "https://refinedng.com/wp-content/uploads/2022/07/Yoruba-People.jpg" }, 
      { name: "Jardin des Plantes et de la Nature", description: "Ancien jardin royal abritant des plantes sacrées", imageUrl: "https://refinedng.com/wp-content/uploads/2022/07/Yoruba-People.jpg" } 
    ] 
  },
  { 
    id: "nikki", 
    name: "Royaume de Nikki", 
    region: "Nord-Est Bénin", 
    period: "1600-présent", 
    capital: "Nikki", 
    ethnicity: "Bariba/Dendi", 
    description: "Puissant royaume bariba toujours actif, réputé pour sa cavalerie et sa fête Gaani.", 
    longDescription: "Le royaume de Nikki est l'un des plus importants royaumes baribas (ou baatombu) du nord du Bénin. Fondé au XVIe siècle, il s'est développé comme un État équestre puissant, célèbre pour sa cavalerie et son organisation militaire sophistiquée. Ce royaume maintient encore aujourd'hui ses structures traditionnelles avec un souverain (le Sinanboko) et conserve une influence culturelle majeure dans la région. La fête annuelle de la Gaani, qui célèbre l'anniversaire de l'avènement du premier roi et le nouvel an musulman, constitue l'une des plus grandes manifestations culturelles du nord Bénin.", 
    image: "https://i0.wp.com/originalfoundblog.com/wp-content/uploads/2017/02/img_0149.jpg?fit=3840%2C1665", 
    galerie: [ 
      "https://i0.wp.com/originalfoundblog.com/wp-content/uploads/2017/02/img_0149.jpg?fit=3840%2C1665", 
      "https://refinedng.com/wp-content/uploads/2022/07/Yoruba-People.jpg", 
      "https://lanouvelletribune.info/wp-content/uploads/2021/12/Tata-somba-Kirche.jpg"
    ], 
    famousRulers: [ 
      { name: "Roi Sounon Séro", period: "1600-1640", achievements: "Fondateur mythique du royaume" }, 
      { name: "Roi Bio Gounon", period: "1875-1908", achievements: "Résistance contre la colonisation française" }, 
      { name: "Roi Sabi Nayina III", period: "1978-2008", achievements: "Renforcement des traditions et modernisation" } 
    ], 
    culturalHeritage: [ 
      { name: "Palais royal de Nikki", description: "Centre cérémoniel et siège du pouvoir traditionnel", imageUrl: "https://refinedng.com/wp-content/uploads/2022/07/Yoruba-People.jpg" }, 
      { name: "Fête de la Gaani", description: "Célébration annuelle majeure mêlant histoire, religion et culture", imageUrl: "https://refinedng.com/wp-content/uploads/2022/07/Yoruba-People.jpg" }, 
      { name: "Art équestre Bariba", description: "Traditions équestres et harnachements ornementés", imageUrl: "https://refinedng.com/wp-content/uploads/2022/07/Yoruba-People.jpg" } 
    ] 
  },
  { 
    id: "ouidah", 
    name: "Royaume de Ouidah", 
    region: "Sud-Ouest Bénin", 
    period: "1580-1727", 
    capital: "Ouidah (Glehue)", 
    ethnicity: "Huéda/Xwéda", 
    description: "Royaume côtier centré autour du culte du serpent et du commerce atlantique.", 
    longDescription: "Le royaume de Ouidah, également connu sous le nom de Juda ou Huéda, était un État côtier prospère centré autour de l'actuelle ville de Ouidah. Ce royaume s'est développé autour du culte du serpent python (Dangbé) et a connu son apogée aux XVIIe et XVIIIe siècles grâce au commerce avec les Européens. Ouidah devint l'un des plus importants comptoirs de la traite atlantique avec de nombreux forts européens établis sur son territoire. En 1727, le royaume fut conquis par le Dahomey sous le règne d'Agadja, mais conserva une place particulière comme centre religieux et commercial.", 
    image: "https://i0.wp.com/originalfoundblog.com/wp-content/uploads/2017/02/img_0149.jpg?fit=3840%2C1665", 
    galerie: [ 
      "https://i0.wp.com/originalfoundblog.com/wp-content/uploads/2017/02/img_0149.jpg?fit=3840%2C1665", 
      "https://refinedng.com/wp-content/uploads/2022/07/Yoruba-People.jpg", 
      "https://lanouvelletribune.info/wp-content/uploads/2021/12/Tata-somba-Kirche.jpg"
    ], 
    famousRulers: [ 
      { name: "Roi Kpassé", period: "1580-1610", achievements: "Fondateur légendaire, établissement du culte du serpent" }, 
      { name: "Roi Huffon", period: "1708-1727", achievements: "Développement commercial, résistance contre le Dahomey" }, 
      { name: "Roi Agbamu", period: "1690-1703", achievements: "Alliances avec les comptoirs européens" } 
    ], 
    culturalHeritage: [ 
      { name: "Temple des Pythons", description: "Centre spirituel du culte de Dangbé, le dieu serpent", imageUrl: "https://refinedng.com/wp-content/uploads/2022/07/Yoruba-People.jpg" }, 
      { name: "Forêt sacrée de Kpassè", description: "Site religieux où le roi fondateur se serait transformé en arbre", imageUrl: "https://refinedng.com/wp-content/uploads/2022/07/Yoruba-People.jpg" }, 
      { name: "Route des esclaves", description: "Parcours historique de 4km menant à la Porte du Non-Retour", imageUrl: "https://refinedng.com/wp-content/uploads/2022/07/Yoruba-People.jpg" } 
    ] 
  },
  { 
    id: "kandi", 
    name: "Royaume de Kandi", 
    region: "Nord Bénin", 
    period: "1700-présent", 
    capital: "Kandi", 
    ethnicity: "Bariba/Dendi/Mokolé", 
    description: "Chefferie bariba qui a joué un rôle important dans les réseaux commerciaux sahariens.", 
    longDescription: "Le royaume de Kandi est l'une des importantes chefferies baribas du nord du Bénin. Situé sur d'anciennes routes commerciales reliant le Sahel au golfe de Guinée, il a prospéré grâce aux échanges caravaniers. Fondé par des guerriers baribas, ce royaume a développé une organisation sociale hiérarchisée avec le Kandi Kpé (roi) à sa tête. Malgré la colonisation, la monarchie traditionnelle a survécu et continue de jouer un rôle important dans la vie culturelle et sociale de la région. Les cérémonies royales et les fêtes traditionnelles y sont toujours célébrées avec faste.", 
    image: "https://i0.wp.com/originalfoundblog.com/wp-content/uploads/2017/02/img_0149.jpg?fit=3840%2C1665", 
    galerie: [ 
     "https://i0.wp.com/originalfoundblog.com/wp-content/uploads/2017/02/img_0149.jpg?fit=3840%2C1665", 
      "https://refinedng.com/wp-content/uploads/2022/07/Yoruba-People.jpg", 
      "https://lanouvelletribune.info/wp-content/uploads/2021/12/Tata-somba-Kirche.jpg"
    ], 
    famousRulers: [ 
      { name: "Roi Gbêkê", period: "1700-1745", achievements: "Fondateur du royaume et organisation territoriale" }, 
      { name: "Roi Saka Yerima", period: "1910-1948", achievements: "Adaptation aux transformations coloniales" }, 
      { name: "Roi Sabi Yerima", period: "1993-présent", achievements: "Revitalisation des traditions et développement local" } 
    ], 
    culturalHeritage: [ 
      { name: "Palais royal de Kandi", description: "Siège traditionnel du pouvoir et lieu de cérémonies", imageUrl: "https://refinedng.com/wp-content/uploads/2022/07/Yoruba-People.jpg" }, 
      { name: "Wassangari", description: "Tradition guerrière et aristocratique bariba", imageUrl: "https://refinedng.com/wp-content/uploads/2022/07/Yoruba-People.jpg" }, 
      { name: "Kukugbangban", description: "Instrument de musique royal et cérémoniel", imageUrl: "https://refinedng.com/wp-content/uploads/2022/07/Yoruba-People.jpg" } 
    ] 
  },
  { 
    id: "djougou", 
    name: "Chefferie de Djougou", 
    region: "Nord-Ouest Bénin", 
    period: "1750-présent", 
    capital: "Djougou", 
    ethnicity: "Dendi/Yom", 
    description: "Centre commercial influent sur les routes transsahariennes, mélange d'influences islamiques et traditionnelles.", 
    longDescription: "La chefferie de Djougou s'est développée comme un important carrefour commercial entre le nord et le sud, l'est et l'ouest. Fondée par des commerçants dendi islamisés venus du Niger, cette principauté a prospéré grâce au commerce caravanier et à sa position stratégique. Le pouvoir y est exercé par le Kpétoni, assisté d'un conseil de notables. Djougou est devenue un centre important de diffusion de l'islam au Bénin tout en maintenant des traditions locales. Malgré la colonisation, la chefferie traditionnelle a conservé son prestige et continue d'exercer une autorité morale et culturelle dans la région.", 
    image: "https://i0.wp.com/originalfoundblog.com/wp-content/uploads/2017/02/img_0149.jpg?fit=3840%2C1665", 
    galerie: [ 
      "https://i0.wp.com/originalfoundblog.com/wp-content/uploads/2017/02/img_0149.jpg?fit=3840%2C1665", 
      "https://refinedng.com/wp-content/uploads/2022/07/Yoruba-People.jpg", 
      "https://lanouvelletribune.info/wp-content/uploads/2021/12/Tata-somba-Kirche.jpg"
    ], 
    famousRulers: [ 
      { name: "Kpétoni Koda", period: "1750-1790", achievements: "Fondateur de la dynastie régnante" }, 
      { name: "Kpétoni Gnora II", period: "1908-1933", achievements: "Négociations avec l'administration coloniale" }, 
      { name: "Kpétoni Arouna", period: "1973-2009", achievements: "Modernisation et préservation des traditions" } 
    ], 
    culturalHeritage: [ 
      { name: "Grande Mosquée de Djougou", description: "Monument historique témoignant de l'influence islamique", imageUrl: "https://refinedng.com/wp-content/uploads/2022/07/Yoruba-People.jpg" }, 
      { name: "Palais du Kpétoni", description: "Résidence du chef traditionnel et lieu de cérémonies", imageUrl: "https://refinedng.com/wp-content/uploads/2022/07/Yoruba-People.jpg" }, 
      { name: "Artisanat Dendi", description: "Travail du cuir et textiles traditionnels", imageUrl: "https://refinedng.com/wp-content/uploads/2022/07/Yoruba-People.jpg" } 
    ] 
  }
];

export default function RoyautesPage() {
  const [selectedRoyalty, setSelectedRoyalty] = useState<(typeof ROYALTIES)[0] | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredRoyalties, setFilteredRoyalties] = useState(ROYALTIES);
  const [showModal, setShowModal] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [activeTab, setActiveTab] = useState('rulers');
  const { scrollYProgress } = useScroll();
  const headerOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);
  const carouselRef = useRef(null);

  useEffect(() => {
    const filtered = ROYALTIES.filter(royalty => 
      royalty.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
      royalty.region.toLowerCase().includes(searchTerm.toLowerCase()) ||
      royalty.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      royalty.ethnicity.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredRoyalties(filtered);
  }, [searchTerm]);

  const openModal = (royalty: (typeof ROYALTIES)[0]) => {
    setSelectedRoyalty(royalty);
    setCurrentImageIndex(0);
    setActiveTab('rulers');
    setShowModal(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setShowModal(false);
    document.body.style.overflow = 'auto';
  };

  const nextImage = () => {
    if (selectedRoyalty) {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % selectedRoyalty.galerie.length);
    }
  };

  const prevImage = () => {
    if (selectedRoyalty) {
      setCurrentImageIndex((prevIndex) => (prevIndex - 1 + selectedRoyalty.galerie.length) % selectedRoyalty.galerie.length);
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const staggerItem = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 }
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 0.5 } }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-50">
      {/* Hero Section with Parallax */}
      <div className="relative h-screen overflow-hidden">
        <motion.div 
          style={{ opacity: headerOpacity }}
          className="absolute inset-0 bg-black"
        >
          <Image 
            src="https://www.voyage-benin.com/cdn/bj-public/shutterstock_792807178-MAX-w1000h600.jpg" 
            alt="Royautés du Bénin"
            fill
            className="object-cover opacity-60"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/80" />
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative h-full max-w-6xl mx-auto px-6 flex flex-col justify-center items-center text-center"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="w-20 h-20 bg-amber-400 rounded-full flex items-center justify-center mb-8"
          >
            <Crown className="w-10 h-10 text-amber-900" />
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6"
          >
            Les <span className="text-amber-400">Royautés</span> du Bénin
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-white/90 text-xl md:text-2xl max-w-3xl mb-12"
          >
            Découvrez l'héritage prestigieux des royaumes et chefferies 
            qui ont façonné l'histoire du Bénin à travers les siècles
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            <motion.a 
              href="#royaumes"
              className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-full font-medium text-lg flex items-center transition-all duration-300 shadow-lg hover:shadow-amber-500/30"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explorer les royaumes <ArrowRight className="ml-2 h-5 w-5" />
            </motion.a>
          </motion.div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1.5 }}
          className="absolute bottom-8 left-0 right-0 flex justify-center"
        >
          <motion.div 
            animate={{ y: [0, 12, 0] }} 
            transition={{ repeat: Infinity, duration: 2 }}
            className="text-white/80"
          >
            <ChevronDown className="h-8 w-8" />
          </motion.div>
        </motion.div>
      </div>

      {/* Search Section */}
      <div id="royaumes" className="max-w-6xl mx-auto px-6 -mt-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white shadow-lg rounded-xl p-5 flex items-center"
        >
          <Search className="w-5 h-5 text-gray-400 mr-3" />
          <input
            type="text"
            placeholder="Rechercher un royaume, une région, une ethnie..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-1 outline-none text-gray-700 text-lg"
          />
          {searchTerm && (
            <button 
              onClick={() => setSearchTerm('')}
              className="text-gray-400 hover:text-gray-600"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </motion.div>
      </div>

      {/* Introduction Section */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">L'Héritage Royal du Bénin</h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Les royaumes et chefferies traditionnels du Bénin représentent un patrimoine culturel et 
            historique exceptionnel. De l'illustre royaume du Dahomey aux principautés du nord, 
            ces entités politiques ont façonné l'identité du pays et continuent d'influencer 
            sa vie culturelle et sociale.
          </p>
        </motion.div>

        {/* Royalties Grid */}
        {filteredRoyalties.length === 0 ? (
          <div className="text-center py-16">
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-gray-500 text-lg"
            >
              Aucun royaume ne correspond à votre recherche.
            </motion.p>
          </div>
        ) : (
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredRoyalties.map((royalty) => (
              <motion.div
                key={royalty.id}
                variants={staggerItem}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-64">
                  <Image
                    src={royalty.image}
                    alt={royalty.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-80" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-2xl font-bold text-white mb-1">{royalty.name}</h3>
                    <div className="flex items-center text-amber-300 text-sm mb-2">
                      <MapPin className="w-4 h-4 mr-1" />
                      <span>{royalty.region}</span>
                    </div>
                    <div className="flex items-center text-amber-200 text-sm">
                      <Clock className="w-4 h-4 mr-1" />
                      <span>{royalty.period}</span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center text-gray-600 text-sm mb-3">
                    <User className="w-4 h-4 mr-1" />
                    <span>Ethnie principale: {royalty.ethnicity}</span>
                  </div>
                  <p className="text-gray-600 mb-5">{royalty.description}</p>
                  <div className="flex justify-between items-center">
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-amber-100 text-amber-800 text-xs px-2 py-1 rounded-full">
                        {royalty.capital}
                      </span>
                    </div>
                    <button
                      onClick={() => openModal(royalty)}
                      className="inline-flex items-center text-amber-600 hover:text-amber-800 font-medium text-sm transition-colors"
                    >
                      Explorer <MoveRight className="ml-2 h-4 w-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>

      {/* Modal for detailed view */}
      <AnimatePresence>
        {showModal && selectedRoyalty && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl overflow-hidden w-full max-w-5xl max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-80 md:h-96">
                <div className="absolute inset-0">
                  <Image
                    src={selectedRoyalty.image}
                    alt={selectedRoyalty.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70" />
                </div>
                <button 
                  onClick={closeModal}
                  className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full z-10"
                >
                  <X className="w-6 h-6" />
                </button>
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <motion.h2 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-4xl font-bold text-white mb-2"
                  >
                    {selectedRoyalty.name}
                  </motion.h2>
                  <motion.div 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="flex flex-wrap gap-4 text-sm"
                  >
                    <div className="flex items-center text-amber-300">
                      <MapPin className="w-4 h-4 mr-1" />
                      <span>{selectedRoyalty.region}</span>
                    </div>
                    <div className="flex items-center text-amber-300">
                      <Clock className="w-4 h-4 mr-1" />
                      <span>{selectedRoyalty.period}</span>
                    </div>
                    <div className="flex items-center text-amber-300">
                      <User className="w-4 h-4 mr-1" />
                      <span>{selectedRoyalty.ethnicity}</span>
                    </div>
                  </motion.div>
                </div>
              </div>
              
              <div className="p-8">
                <div className="mb-8">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">Présentation</h3>
                  <p className="text-gray-600 leading-relaxed">{selectedRoyalty.longDescription}</p>
                </div>
                
                {/* Image Gallery */}
                <div className="mb-8">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">Galerie</h3>
                  <div className="relative" ref={carouselRef}>
                    <div className="relative h-64 md:h-80 overflow-hidden rounded-xl">
                      <Image
                        src={selectedRoyalty.galerie[currentImageIndex]}
                        alt={`${selectedRoyalty.name} - image ${currentImageIndex + 1}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <button 
                      onClick={prevImage}
                      className="absolute top-1/2 left-2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button 
                      onClick={nextImage}
                      className="absolute top-1/2 right-2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                    <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                      {selectedRoyalty.galerie.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentImageIndex(index)}
                          className={`w-2 h-2 rounded-full ${currentImageIndex === index ? 'bg-white' : 'bg-white/50'}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Tabs for rulers and cultural heritage */}
                <div className="border-b border-gray-200 mb-6">
                  <div className="flex gap-6">
                    <button
                      onClick={() => setActiveTab('rulers')}
                      className={`pb-3 font-medium transition-colors ${
                        activeTab === 'rulers' 
                          ? 'text-amber-600 border-b-2 border-amber-600' 
                          : 'text-gray-500 hover:text-amber-600'
                      }`}
                    >
                      Souverains Marquants
                    </button>
                    <button
                      onClick={() => setActiveTab('heritage')}
                      className={`pb-3 font-medium transition-colors ${
                        activeTab === 'heritage' 
                          ? 'text-amber-600 border-b-2 border-amber-600' 
                          : 'text-gray-500 hover:text-amber-600'
                      }`}
                    >
                      Patrimoine Culturel
                    </button>
                  </div>
                </div>
                
                {/* Tab Content */}
                <AnimatePresence mode="wait">
                  {activeTab === 'rulers' && (
                    <motion.div
                      key="rulers"
                      variants={fadeIn}
                      initial="hidden"
                      animate="show"
                      exit="hidden"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {selectedRoyalty.famousRulers.map((ruler, index) => (
                          <div 
                            key={index} 
                            className="bg-amber-50 rounded-xl p-5 hover:shadow-md transition-shadow"
                          >
                            <h4 className="text-lg font-semibold text-amber-800 mb-2">{ruler.name}</h4>
                            <div className="text-sm text-gray-500 mb-3">{ruler.period}</div>
                            <p className="text-gray-600">{ruler.achievements}</p>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                  
                  {activeTab === 'heritage' && (
                    <motion.div
                      key="heritage"
                      variants={fadeIn}
                      initial="hidden"
                      animate="show"
                      exit="hidden"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {selectedRoyalty.culturalHeritage.map((item, index) => (
                          <div 
                            key={index} 
                            className="bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                          >
                            <div className="relative h-48">
                              <Image
                                src={item.imageUrl}
                                alt={item.name}
                                fill
                                className="object-cover"
                              />
                            </div>
                            <div className="p-4">
                              <h4 className="text-lg font-semibold text-gray-800 mb-2">{item.name}</h4>
                              <p className="text-gray-600">{item.description}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
                
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <Link
                    href={`/royaumes/detailRoyaume`}
                    className="inline-flex items-center bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-xl transition-colors shadow-md hover:shadow-lg"
                  >
                    Explorer en détail <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}