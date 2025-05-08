"use client";

import { useState, useEffect, SetStateAction } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Search, MapPin, Crown, Users, MoveRight, X, GalleryVertical, CalendarDays, Bookmark } from "lucide-react";

const ROYAUMES = [
  {
    id: "dahomey",
    name: "Royaume du Dahomey",
    region: "Abomey, Centre-Sud",
    période: "1600-1904",
    description: "Puissant royaume fon, connu pour ses amazones et son art royal unique.",
    longDescription: "Le Royaume du Dahomey était l'un des plus puissants États précoloniaux d'Afrique de l'Ouest. Fondé par le peuple Fon au XVIIe siècle, il s'est distingué par son organisation militaire exceptionnelle, incluant un corps de guerrières connues sous le nom d'« Amazones du Dahomey ». Le palais royal d'Abomey, classé au patrimoine mondial de l'UNESCO, témoigne de la richesse artistique et architecturale de ce royaume qui a résisté longtemps à la colonisation française.",
    souverain: "Plusieurs dynasties dont celle de Ghézo et Béhanzin",
    image: "https://i0.wp.com/beninwebtv.com/wp-content/uploads/2021/11/palais-royaux-abomey.jpg",
    symboles: ["Récades royales", "Appliqués", "Trône du roi"],
    galerie: [
      "https://upload.wikimedia.org/wikipedia/commons/0/04/Pride_of_Dahomey.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/3/3e/Dahomey_amazons_1851.jpg",
      "https://www.lemonde.fr/blog/fredericjoignot/files/2018/12/43636853_748950822134764_1583714458193633280_n-1.jpg"
    ]
  },
  {
    id: "porto-novo",
    name: "Royaume de Porto-Novo",
    region: "Sud-Est",
    période: "1688-présent",
    description: "Royaume gun-yoruba toujours actif sous forme traditionnelle dans la capitale du Bénin.",
    longDescription: "Fondé à la fin du XVIIe siècle par des migrants yoruba, le Royaume de Porto-Novo, également connu sous le nom de Xogbonou ou Adjatchè, a joué un rôle clé dans l'histoire du Bénin méridional. Contrairement à d'autres royaumes précoloniaux, il a survécu à la période coloniale et continue d'exister sous forme traditionnelle. Le roi (Akpon) demeure une figure d'autorité morale et culturelle importante pour les communautés gun et yoruba. Le palais royal reste un centre spirituel et culturel majeur.",
    souverain: "Sa Majesté Toffa IX (actuel)",
    image: "https://medias.liberation.fr/photo/1250195-000_9xu8bm.jpg",
    symboles: ["Parasol royal", "Tambours sacrés", "Sceptre royal"],
    galerie: [
      "https://i.ytimg.com/vi/dCwDJDUvJPw/maxresdefault.jpg",
      "https://i.pinimg.com/originals/c7/e8/38/c7e838ad3c97607b0c81c0db023d826d.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/e/e7/Palais_Royal_de_Porto-Novo.jpg"
    ]
  },
  {
    id: "nikki",
    name: "Royaume de Nikki",
    region: "Nord-Est",
    période: "1480-présent",
    description: "Important royaume bariba connu pour sa fête équestre de la Gaani.",
    longDescription: "Le Royaume de Nikki est l'un des principaux royaumes baribas (ou baatombu) du nord Bénin. Fondé au XVe siècle, ce royaume de tradition équestre continue d'exercer une influence culturelle considérable. La fête annuelle de la Gaani, célébration royale mêlant démonstrations équestres, musique et rituels, attire des visiteurs de toute la région. Le souverain, appelé Sina Boko (roi de Nikki), est considéré comme le gardien des traditions baribas et un arbitre respecté dans les affaires communautaires.",
    souverain: "Sa Majesté Sabi Yourou Bio Doko (actuel)",
    image: "https://www.banouto.bj/uploads/content/5cacf8e3b68fdnikinov2018.jpg",
    symboles: ["Gaani (fête royale)", "Chevaux ornés", "Instruments de musique royaux"],
    galerie: [
      "https://www.lanationbenin.info/wp-content/uploads/2022/01/6C7A9861-scaled.jpg",
      "https://beninwebtv.com/wp-content/uploads/2022/01/gaani-nikki-1-1024x576.jpeg",
      "https://i.ytimg.com/vi/fqxZj2HBeEM/maxresdefault.jpg"
    ]
  },
  {
    id: "allada",
    name: "Royaume d'Allada",
    region: "Sud",
    période: "1575-1724 (restauré en 2000)",
    description: "Ancien royaume aïzo-fon, berceau de la dynastie du Dahomey et du royaume de Porto-Novo.",
    longDescription: "Le Royaume d'Allada était un État précolonial puissant qui contrôlait une grande partie du sud de l'actuel Bénin avant l'ascension du Dahomey. Considéré comme le berceau des dynasties royales de Porto-Novo et du Dahomey, Allada occupe une place particulière dans l'histoire dynastique béninoise. Après avoir été conquis par le Dahomey au XVIIIe siècle, le royaume a été restauré sous forme traditionnelle en 2000, ravivant ainsi un important héritage culturel. La forêt sacrée de Kpassè et les cérémonies vodun y sont particulièrement importantes.",
    souverain: "Sa Majesté Kpodégbé Djigla Toyi Djigla",
    image: "https://www.24haubenin.info/IMG/jpg/le_roi_d_allada.jpg",
    symboles: ["Forêt sacrée de Kpassè", "Parures royales", "Canne royale"],
    galerie: [
      "https://www.ortb.bj/images/EVENEMENT_2023/JANVIER/Allada_1.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Agoli-agbo%2C_Roi_d%27Abomey.jpg/600px-Agoli-agbo%2C_Roi_d%27Abomey.jpg",
      "https://www.jeuneafrique.com/medias/2018/10/09/000_9yu29-696x391.jpg"
    ]
  },
  {
    id: "ketu",
    name: "Royaume de Kétou",
    region: "Sud-Est",
    période: "1580-présent",
    description: "Ancien royaume yoruba avec une forte influence spirituelle et culturelle.",
    longDescription: "Le Royaume de Kétou est l'un des plus anciens royaumes yoruba établi dans l'actuel Bénin. Fondé selon la tradition orale au XVIe siècle, il est considéré comme un centre spirituel et culturel majeur de la culture yoruba au Bénin. Le roi, appelé Alaketu, est un gardien important des traditions religieuses yoruba, notamment liées au culte des Orishas. Le royaume maintient des liens culturels forts avec les communautés yoruba du Nigeria voisin et continue de pratiquer des cérémonies traditionnelles d'une grande richesse.",
    souverain: "Sa Majesté Oba Adékoyà Kpodégbé",
    image: "https://www.lemonde.fr/afrique/article/2016/01/22/nous-les-beninois-la-tradition-en-heritage_4851886_3212.html#:~:text=danse%20%C3%A0%20Ouidah.-,Le%20roi%20de%20K%C3%A9tou%2C%20sa%20majest%C3%A9%20Adetutu,-Le%20roi%20de",
    symboles: ["Masques Gèlèdé", "Statues d'Orisha", "Tambours royaux"],
    galerie: [
      "https://www.24haubenin.info/IMG/arton26551.png",
      "https://www.banouto.bj/uploads/content/5eab8de0cdef8le-roi-du-royaume-ketou-alaketu-oba-adetutu-fait-docteur-honoris-causa.jpg",
      "https://s.rfi.fr/media/display/0e4fdf38-0e48-11ea-a510-005056a99247/w:980/p:16x9/2019-11-22t073713z_918595096_rc2uid97w80k_rtrmadp_3_slavery-africa-benin.jpg"
    ]
  },
  {
    id: "djougou",
    name: "Royaume de Djougou",
    region: "Nord-Ouest",
    période: "1750-présent",
    description: "Important royaume dendi-yowa au carrefour commercial entre Sahel et zones forestières.",
    longDescription: "Le Royaume de Djougou s'est développé au XVIIIe siècle comme un important centre commercial et culturel au nord-ouest du Bénin. Sa position stratégique en a fait un carrefour d'échanges entre les peuples du Sahel et ceux des zones forestières du sud. Fortement influencé par l'islam, le royaume a intégré cette religion à ses structures traditionnelles. Le souverain, appelé Kpétoni, continue d'exercer une autorité morale et culturelle importante, notamment dans la résolution des conflits et la préservation des traditions locales.",
    souverain: "Sa Majesté Kpétoni Koda VI",
    image: "https://benin-tourisme.com/wp-content/uploads/2020/08/djougou-2.jpg",
    symboles: ["Architecture soudanaise", "Manuscrits anciens", "Étoffes royales"],
    galerie: [
      "https://www.akeza.net/wp-content/uploads/2021/08/20200621_162022-1024x768.jpg",
      "https://www.ortb.bj/images/EVENEMENT_2023/JANVIER/Djougou_1.jpg",
      "https://www.gouv.bj/uploads/files/actualite/2022/Djougou1.jpg"
    ]
  },
  {
    id: "kouande",
    name: "Chefferie de Kouandé",
    region: "Nord-Ouest, Atacora",
    période: "1600-présent",
    description: "Influente chefferie bariba avec un système politique complexe et hiérarchisé.",
    longDescription: "La Chefferie de Kouandé est l'une des principales organisations politiques traditionnelles de l'ethnie bariba dans le nord-ouest du Bénin. Son système politique sophistiqué combine pouvoir héréditaire et conseils des notables. Le chef traditionnel, appelé Bio Kouandé, demeure une figure d'autorité respectée, notamment dans les domaines culturels et la gestion des terres. Les cérémonies annuelles, particulièrement celles liées aux récoltes et aux initiations, témoignent de la vitalité des traditions dans cette région de l'Atacora.",
    souverain: "Sa Majesté Bio Kouandé Gnon Kogui",
    image: "https://beninwebtv.com/wp-content/uploads/2021/04/bio-kouand%C3%A9-kouand%C3%A9-Benin.jpg",
    symboles: ["Tambours de guerre", "Calebasses ornées", "Objets rituels agricoles"],
    galerie: [
      "https://lequotidienbeninois.com/wp-content/uploads/2022/10/FB_IMG_1666270618461.jpg",
      "https://24haubenin.bj/IMG/jpg/kouande_1.jpg",
      "https://www.pressedubenin.info/IMG/jpg/-82.jpg"
    ]
  },
  {
    id: "savalu",
    name: "Royaume de Savalou",
    region: "Centre",
    période: "1700-présent",
    description: "Royaume mahi avec un riche patrimoine de danses et de musiques traditionnelles.",
    longDescription: "Le Royaume de Savalou, fondé par le peuple Mahi, s'est développé dans le centre du Bénin comme un État résistant à l'expansion du Dahomey. Ce royaume se distingue par la richesse de ses expressions culturelles, notamment ses danses rituelles et ses percussions. Le roi, appelé Gandjègni, joue un rôle central dans les cérémonies traditionnelles et la préservation des sites sacrés. La forêt sacrée de Savalou-Agbado et le festival Adjahoui témoignent de la vitalité des traditions locales qui continuent d'être célébrées avec ferveur.",
    souverain: "Sa Majesté Gandjègni Awoyo Gbaguidi XIII",
    image: "https://www.24haubenin.info/IMG/jpg/le_roi_de_savalou_toffodji_gbaguidi.jpg",
    symboles: ["Danses Adjahoui", "Instruments de musique sacrés", "Forêt sacrée"],
    galerie: [
      "https://www.24haubenin.info/IMG/jpg/le_roi_de_savalou.jpg",
      "https://annepaule972.files.wordpress.com/2009/01/savalou.jpg",
      "https://lequotidienbeninois.com/wp-content/uploads/2023/01/IMG-20230116-WA0147.jpg"
    ]
  }
];

export default function RoyaumesPage() {
  const [selectedRoyaume, setSelectedRoyaume] = useState<(typeof ROYAUMES)[0] | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredRoyaumes, setFilteredRoyaumes] = useState(ROYAUMES);
  const [showModal, setShowModal] = useState(false);
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    const filtered = ROYAUMES.filter(royaume => 
      royaume.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
      royaume.region.toLowerCase().includes(searchTerm.toLowerCase()) ||
      royaume.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      royaume.période.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredRoyaumes(filtered);
  }, [searchTerm]);

  const openModal = (royaume: (typeof ROYAUMES)[0]) => {
    setSelectedRoyaume(royaume);
    setShowModal(true);
    setActiveImage(0);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setShowModal(false);
    document.body.style.overflow = 'auto';
  };

  const nextImage = () => {
    if (selectedRoyaume) {
      setActiveImage((prev) => (prev + 1) % selectedRoyaume.galerie.length);
    }
  };

  const prevImage = () => {
    if (selectedRoyaume) {
      setActiveImage((prev) => (prev - 1 + selectedRoyaume.galerie.length) % selectedRoyaume.galerie.length);
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

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-50">
      {/* Hero Section */}
      <div className="relative h-80 md:h-96 overflow-hidden">
        <div className="absolute inset-0 bg-black">
          <Image 
            src="https://www.jeuneafrique.com/medias/2018/10/09/000_9yu29-1200x630.jpg" 
            alt="Royautés du Bénin"
            fill
            className="object-cover opacity-70"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/70" />
        <div className="relative h-full max-w-6xl mx-auto px-6 flex flex-col justify-center">
          <motion.h1 
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-6xl font-bold text-white mb-4"
          >
            Royaumes et <span className="text-indigo-400">Chefferies</span> du Bénin
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-white/90 text-lg md:text-xl max-w-2xl"
          >
            Découvrez l'héritage royal du Bénin à travers ses royaumes historiques et ses chefferies 
            traditionnelles qui continuent de préserver un patrimoine culturel inestimable.
          </motion.p>
        </div>
      </div>

      {/* Search Section */}
      <div className="max-w-6xl mx-auto px-6 -mt-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white shadow-lg rounded-xl p-4 flex items-center"
        >
          <Search className="w-5 h-5 text-gray-400 mr-3" />
          <input
            type="text"
            placeholder="Rechercher un royaume, une région ou une période..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-1 outline-none text-gray-700"
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

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        {filteredRoyaumes.length === 0 ? (
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
            animate="show"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredRoyaumes.map((royaume) => (
              <motion.div
                key={royaume.id}
                variants={staggerItem}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-56">
                  <Image
                    src={royaume.image}
                    alt={royaume.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-indigo-500/80 text-white text-xs px-3 py-1 rounded-full flex items-center">
                    <CalendarDays className="w-3 h-3 mr-1" />
                    <span>{royaume.période}</span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
                    <h3 className="text-2xl font-bold text-white">{royaume.name}</h3>
                    <div className="flex items-center text-indigo-200 text-sm">
                      <MapPin className="w-4 h-4 mr-1" />
                      <span>{royaume.region}</span>
                    </div>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center text-gray-600 text-sm mb-3">
                    <Crown className="w-4 h-4 mr-1" />
                    <span>{royaume.souverain}</span>
                  </div>
                  <p className="text-gray-600 mb-4">{royaume.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {royaume.symboles.map((symbole, idx) => (
                      <span key={idx} className="bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded-full">
                        {symbole}
                      </span>
                    ))}
                  </div>
                  <button
                    onClick={() => openModal(royaume)}
                    className="inline-flex items-center text-indigo-600 hover:text-indigo-800 font-medium text-sm transition-colors"
                  >
                    Explorer ce royaume <MoveRight className="ml-2 h-4 w-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>

      {/* Modal for detailed view */}
      <AnimatePresence>
        {showModal && selectedRoyaume && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-xl overflow-hidden max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <div className="relative h-80">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeImage}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute inset-0"
                    >
                      <Image
                        src={selectedRoyaume.galerie[activeImage]}
                        alt={`${selectedRoyaume.name} - image ${activeImage + 1}`}
                        fill
                        className="object-cover"
                      />
                    </motion.div>
                  </AnimatePresence>
                  
                  {selectedRoyaume.galerie.length > 1 && (
                    <>
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          prevImage();
                        }}
                        className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full"
                      >
                        <ArrowRight className="w-5 h-5 rotate-180" />
                      </button>
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          nextImage();
                        }}
                        className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full"
                      >
                        <ArrowRight className="w-5 h-5" />
                      </button>
                    </>
                  )}
                  
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                    {selectedRoyaume.galerie.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveImage(idx);
                        }}
                        className={`w-2 h-2 rounded-full transition-all ${activeImage === idx ? 'bg-white scale-125' : 'bg-white/50'}`}
                      />
                    ))}
                  </div>
                </div>
                
                <button 
                  onClick={closeModal}
                  className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full"
                >
                  <X className="w-5 h-5" />
                </button>
                
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black to-transparent">
                  <div className="flex items-center text-indigo-200 text-sm mb-1">
                    <CalendarDays className="w-4 h-4 mr-1" />
                    <span>{selectedRoyaume.période}</span>
                  </div>
                  <h2 className="text-3xl font-bold text-white">{selectedRoyaume.name}</h2>
                  <div className="flex items-center text-indigo-200 text-sm">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span>{selectedRoyaume.region}</span>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center text-gray-700 mb-4 bg-indigo-50 p-3 rounded-lg">
                  <Crown className="w-5 h-5 mr-2 text-indigo-600" />
                  <span><span className="font-medium">Souverain:</span> {selectedRoyaume.souverain}</span>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center">
                  <Bookmark className="w-5 h-5 mr-2 text-indigo-600" />
                  Présentation
                </h3>
                <p className="text-gray-600 mb-6">{selectedRoyaume.longDescription}</p>
                
                <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center">
                  <GalleryVertical className="w-5 h-5 mr-2 text-indigo-600" />
                  Symboles et Traditions
                </h3>
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedRoyaume.symboles.map((symbole, idx) => (
                    <span key={idx} className="bg-indigo-100 text-indigo-800 px-3 py-1.5 rounded-full">
                      {symbole}
                    </span>
                  ))}
                </div>
                
                <Link
                  href={`/royaumes/${selectedRoyaume.id}`}
                  className="inline-flex items-center bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg transition-colors"
                >
                  Explorer en détail <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}


