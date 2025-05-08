// // pages/experience.tsx
// "use client"
// import { useState, useEffect, SetStateAction } from 'react';
// import Head from 'next/head';
// import dynamic from 'next/dynamic';
// import SiteModal from '@/components/siteModalExperience';
// import FilterBar from '@/components/filterBarExperience';
// import { Site } from '@/types/site';

// // Importer la carte de manière dynamique pour éviter les erreurs SSR
// // (car Leaflet nécessite window qui n'existe pas côté serveur)
// const MapComponent = dynamic(() => import('@/components/mapExperience'), {
//   ssr: false,
//   loading: () => <div className="loading-map">Chargement de la carte...</div>
// });

// export default function Experience() {
//   const [selectedSite, setSelectedSite] = useState<Site | null>(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [activeFilter, setActiveFilter] = useState('all');
//   const [sites, setSites] = useState<Site[]>([]);

//   useEffect(() => {
//     // Simuler le chargement des données depuis une API
//     // Dans un cas réel, vous remplaceriez ceci par un appel API
//     setSites(siteData.map(site => ({ 
//       ...site, 
//       id: site.id.toString(), 
//       position: [site.position[0], site.position[1]] as [number, number] 
//     })));
//   }, []);

//   const handleMarkerClick = (site: Site) => {
//     setSelectedSite(site);
//     setIsModalOpen(true);
//   };

//   const handleFilterChange = (filter: SetStateAction<string>) => {
//     setActiveFilter(filter);
//   };

//   const filteredSites = activeFilter === 'all' 
//     ? sites 
//     : sites.filter(site => site.category === activeFilter);

//   return (
//     <div>
//       <Head>
//         <title>Explorez le passé - Carte interactive</title>
//         <meta name="description" content="Parcourez les sites historiques avec notre guide interactif" />
//         <link 
//           rel="stylesheet" 
//           href="https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.3/leaflet.css" 
//         />
//       </Head>

//       <header className="bg-slate-800 text-white p-4 md:p-6 shadow-md">
//         <h1 className="text-3xl font-bold m-0">Explorez le passé</h1>
//         <div className="mt-2 opacity-90 text-sm md:text-base">
//           Parcourez les sites historiques avec notre guide interactif qui dévoile l'histoire cachée de chaque lieu.
//         </div>
//       </header>

//       <main className="max-w-6xl mx-auto p-4 md:p-8">
//         <div className="mb-8">
//           <p className="text-gray-700 leading-relaxed">
//             Bienvenue sur notre carte interactive des sites historiques. Découvrez les trésors cachés, 
//             les monuments emblématiques et les musées fascinants. Cliquez sur les marqueurs pour révéler 
//             l'histoire fascinante derrière chaque lieu et plongez dans le passé riche de notre patrimoine culturel.
//           </p>
//         </div>

//         <FilterBar 
//           activeFilter={activeFilter} 
//           onFilterChange={handleFilterChange} 
//         />

//         <div className="relative h-96 md:h-[600px] rounded-lg overflow-hidden shadow-lg mt-4">
//           <MapComponent 
//             sites={filteredSites} 
//             onMarkerClick={handleMarkerClick} 
//           />
//         </div>
//       </main>

//       {isModalOpen && selectedSite && (
//         <SiteModal 
//           site={selectedSite} 
//           isOpen={isModalOpen} 
//           onClose={() => setIsModalOpen(false)} 
//         />
//       )}

//       <style jsx global>{`
//         body {
//           font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
//           margin: 0;
//           padding: 0;
//           color: #333;
//         }
//         .loading-map {
//           height: 100%;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           background-color: #f9f9f9;
//           border-radius: 8px;
//           font-size: 1.2rem;
//           color: #666;
//         }
//       `}</style>
//     </div>
//   );
// }

// // Données des sites (à déplacer dans un fichier séparé dans un projet réel)
// const siteData = [
//   {
//     id: 1,
//     name: "Tour Eiffel",
//     category: "monument",
//     position: [48.8584, 2.2945],
//     description: "La Tour Eiffel est une tour de fer puddlé de 324 mètres de hauteur située à Paris, à l'extrémité nord-ouest du parc du Champ-de-Mars en bordure de la Seine. Construite par Gustave Eiffel et ses collaborateurs pour l'Exposition universelle de Paris de 1889, et initialement nommée « tour de 300 mètres », elle est devenue le symbole de la capitale française.",
//     historicalFact: "Lors de sa construction, la Tour Eiffel était le plus haut monument du monde. Elle a perdu ce titre en 1930 avec l'achèvement du Chrysler Building à New York.",
//     mainImage: "https://cdn-imgix.headout.com/media/images/c90f7eb7a5825e6f5e57a5a62d05399c-25058-BestofParis-EiffelTower-Cruise-Louvre-002.jpg?auto=format&w=1051.2&h=540&q=90&fit=fit", // Remplacer par vos images réelles
//     mainCaption: "La Tour Eiffel illuminée la nuit",
//     gallery: [
//       "/images/tour-eiffel-1.jpg",
//       "/images/tour-eiffel-2.jpg",
//       "/images/tour-eiffel-3.jpg"
//     ]
//   },
//   {
//     id: 2,
//     name: "Musée du Louvre",
//     category: "museum",
//     position: [48.8606, 2.3376],
//     description: "Le musée du Louvre est le plus grand musée d'art et d'antiquités au monde, situé au cœur de Paris. Le musée est installé dans le palais du Louvre, ancienne résidence royale située à l'origine à l'ouest de la ville, entre la Seine et la rue de Rivoli.",
//     historicalFact: "Le Louvre a été construit à l'origine comme une forteresse au 12e siècle. Ce n'est qu'en 1793, pendant la Révolution française, qu'il a été transformé en musée public.",
//     mainImage: "/images/louvre.jpg",
//     mainCaption: "La pyramide du Louvre, entrée principale du musée",
//     gallery: [
//       "/images/louvre-1.jpg",
//       "/images/louvre-2.jpg",
//       "/images/louvre-3.jpg"
//     ]
//   },
//   {
//     id: 3,
//     name: "Notre-Dame de Paris",
//     category: "monument",
//     position: [48.8530, 2.3499],
//     description: "Notre-Dame de Paris est une cathédrale catholique de style gothique située sur l'île de la Cité, dans le 4e arrondissement de Paris. La cathédrale a été construite entre le XIIe et le XIVe siècle et est l'un des monuments les plus emblématiques de Paris.",
//     historicalFact: "Les célèbres gargouilles de Notre-Dame n'ont pas été ajoutées avant le XIXe siècle, lors de la grande restauration de la cathédrale par l'architecte Eugène Viollet-le-Duc.",
//     mainImage: "/images/notre-dame.jpg",
//     mainCaption: "Façade de la cathédrale Notre-Dame de Paris",
//     gallery: [
//       "/images/notre-dame-1.jpg",
//       "/images/notre-dame-2.jpg",
//       "/images/notre-dame-3.jpg"
//     ]
//   },
//   {
//     id: 4,
//     name: "Centre Pompidou",
//     category: "cultural",
//     position: [48.8606, 2.3522],
//     description: "Le Centre national d'art et de culture Georges-Pompidou, communément appelé Centre Pompidou, est un établissement pluridisciplinaire né de la volonté du président Georges Pompidou de créer au cœur de Paris une institution culturelle originale entièrement vouée à la création moderne et contemporaine.",
//     historicalFact: "Le Centre Pompidou a été conçu selon une architecture 'inside-out', avec ses structures techniques (escaliers, conduites d'air, etc.) visibles à l'extérieur du bâtiment et codées par couleur.",
//     mainImage: "/images/pompidou.jpg",
//     mainCaption: "Le Centre Pompidou et sa façade caractéristique",
//     gallery: [
//       "/images/pompidou-1.jpg",
//       "/images/pompidou-2.jpg",
//       "/images/pompidou-3.jpg"
//     ]
//   },
//   {
//     id: 5,
//     name: "Les Catacombes de Paris",
//     category: "historic",
//     position: [48.8334, 2.3324],
//     description: "Les Catacombes de Paris sont d'anciennes carrières souterraines aménagées en ossuaire municipal à partir de la fin du XVIIIe siècle. Elles abritent les restes d'environ six millions de Parisiens.",
//     historicalFact: "Les Catacombes ont été créées pour résoudre les problèmes de santé publique liés à la surpopulation des cimetières parisiens à la fin du XVIIIe siècle.",
//     mainImage: "/images/catacombes.jpg",
//     mainCaption: "Entrée des Catacombes de Paris",
//     gallery: [
//       "/images/catacombes-1.jpg",
//       "/images/catacombes-2.jpg",
//       "/images/catacombes-3.jpg"
//     ]
//   },
//   {
//     id: 6,
//     name: "Arc de Triomphe",
//     category: "monument",
//     position: [48.8738, 2.2950],
//     description: "L'Arc de Triomphe de l'Étoile est un monument situé à Paris, dans le 8e arrondissement. Il se trouve au centre de la place Charles-de-Gaulle, dans l'axe et à l'extrémité ouest de l'avenue des Champs-Élysées, à 2,2 kilomètres de la place de la Concorde.",
//     historicalFact: "L'Arc de Triomphe a été commandé par Napoléon Bonaparte en 1806 après sa victoire à Austerlitz, mais il n'a été achevé qu'en 1836, bien après sa mort.",
//     mainImage: "/images/arc-triomphe.jpg",
//     mainCaption: "L'Arc de Triomphe vu depuis les Champs-Élysées",
//     gallery: [
//       "/images/arc-triomphe-1.jpg",
//       "/images/arc-triomphe-2.jpg",
//       "/images/arc-triomphe-3.jpg"
//     ]
//   },
//   {
//     id: 7,
//     name: "Musée d'Orsay",
//     category: "museum",
//     position: [48.8600, 2.3266],
//     description: "Le musée d'Orsay est un musée national situé dans le 7e arrondissement de Paris, le long de la rive gauche de la Seine, installé dans l'ancienne gare d'Orsay. Il est consacré aux arts de la période 1848-1914, et il abrite la plus grande collection d'œuvres impressionnistes au monde.",
//     historicalFact: "Le bâtiment du musée d'Orsay était à l'origine une gare ferroviaire construite pour l'Exposition universelle de 1900. Il a été transformé en musée en 1986.",
//     mainImage: "/images/orsay.jpg",
//     mainCaption: "La grande horloge du Musée d'Orsay",
//     gallery: [
//       "/images/orsay-1.jpg",
//       "/images/orsay-2.jpg",
//       "/images/orsay-3.jpg"
//     ]
//   },
//   {
//     id: 8,
//     name: "Montmartre",
//     category: "cultural",
//     position: [48.8867, 2.3431],
//     description: "Montmartre est une colline qui culmine à 130 mètres d'altitude dans le 18e arrondissement de Paris. Elle donne son nom à ce quartier parisien. Le quartier est célèbre pour sa vie artistique, notamment à la fin du XIXe siècle et au début du XXe siècle, et pour la basilique du Sacré-Cœur, qui se trouve à son sommet.",
//     historicalFact: "Au XIXe siècle, Montmartre était un village indépendant situé en dehors des limites de Paris, ce qui permettait aux artistes et aux bohèmes d'échapper aux impôts et aux règlements stricts de la ville.",
//     mainImage: "/images/montmartre.jpg",
//     mainCaption: "Vue sur Paris depuis Montmartre",
//     gallery: [
//       "/images/montmartre-1.jpg",
//       "/images/montmartre-2.jpg",
//       "/images/montmartre-3.jpg"
//     ]
//   }
// ];



const ROYAUMES_DATA = [
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
      "https://www.24haubenin.info/IMG/arton26551.png",
      "https://www.banouto.bj/uploads/content/5eab8de0cdef8le-roi-du-royaume-ketou-alaketu-oba-adetutu-fait-docteur-honoris-causa.jpg",
      "https://s.rfi.fr/media/display/0e4fdf38-0e48-11ea-a510-005056a99247/w:980/p:16x9/2019-11-22t073713z_918595096_rc2uid97w80k_rtrmadp_3_slavery-africa-benin.jpg"
    ],
    famousRulers: [
      {
        name: "Roi Ghezo",
        period: "1818-1858",
        achievements: "Modernisation du royaume, développement des arts royaux"
      },
      {
        name: "Roi Glélé",
        period: "1858-1889",
        achievements: "Expansion territoriale, renforcement de l'armée royale"
      },
      {
        name: "Roi Béhanzin",
        period: "1889-1894",
        achievements: "Résistance contre la colonisation française"
      }
    ],
    culturalHeritage: [
      {
        name: "Palais Royaux d'Abomey",
        description: "Ensemble architectural unique inscrit au patrimoine mondial de l'UNESCO",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/c/ca/Site_des_palais_royaux_d%27Abomey1.jpg"
      },
      {
        name: "Appliqués textiles",
        description: "Art textile narratif représentant l'histoire des rois et du royaume",
        imageUrl: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhzcplZ3gfZ3tH2ej7XGdM5IFsqrtmq-rJru77Wl7sPTODHpvak2LRBAhUrmqZ173Fj-mkHUpgcl4Q3m-H1QIw8E38BHImciXKI-CImY8NoZ7VLc-o_rTcnWHdviDjfoxeGJ9oHl9gLjkju/s640/J-Y%25C3%25A9madj%25C3%25A9.jpg"
      },
      {
        name: "Récades royales",
        description: "Sceptres symboliques incarnant l'autorité royale",
        imageUrl: "https://www.persee.fr/renderIssueCoverThumbnail/jafr_0399-0346_1987_num_57_1.jpg"
      }
    ]
  },
  {
    id: "allada",
    name: "Royaume d'Allada",
    region: "Sud Bénin",
    period: "1575-1724",
    capital: "Allada",
    ethnicity: "Aïzo/Fon",
    description: "Royaume précurseur du Dahomey, important centre politique et commercial de la côte des esclaves.",
    longDescription: "Le royaume d'Allada était un État précolonial situé dans le sud du Bénin actuel. Fondé vers 1575, il contrôlait une partie importante de la côte des esclaves et jouait un rôle central dans les échanges commerciaux avec les Européens. Considéré comme l'ancêtre du royaume du Dahomey, Allada fut conquis en 1724 par le roi Agadja du Dahomey. Plusieurs dynasties royales de la région, notamment celle du Dahomey et celle de Porto-Novo, se réclament d'une origine allada.",
    image: "https://images.unsplash.com/photo-1578353022142-09264fd64295?q=80&w=1965",
    galerie: [
      "https://www.24haubenin.info/IMG/arton26551.png",
      "https://www.banouto.bj/uploads/content/5eab8de0cdef8le-roi-du-royaume-ketou-alaketu-oba-adetutu-fait-docteur-honoris-causa.jpg",
      "https://s.rfi.fr/media/display/0e4fdf38-0e48-11ea-a510-005056a99247/w:980/p:16x9/2019-11-22t073713z_918595096_rc2uid97w80k_rtrmadp_3_slavery-africa-benin.jpg"
    ],
    famousRulers: [
      {
        name: "Roi Kokpon",
        period: "16e siècle",
        achievements: "Fondateur légendaire de la dynastie"
      },
      {
        name: "Roi Tezifon",
        period: "Début 18e siècle",
        achievements: "Dernier roi indépendant avant la conquête par le Dahomey"
      }
    ],
    culturalHeritage: [
      {
        name: "Tradition orale",
        description: "Récits historiques sur les origines communes des royaumes du sud Bénin",
        imageUrl: "https://sfbayview.com/wp-content/uploads/2015/10/Benin-Palace-culture-troupe-drummers-dancers-web.jpg"
      },
      {
        name: "Site royal d'Allada",
        description: "Vestiges historiques et lieu de commémoration",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/c/ca/Site_des_palais_royaux_d%27Abomey1.jpg"
      }
    ]
  },
  {
    id: "nikki",
    name: "Royaume de Nikki",
    region: "Nord-Est Bénin",
    period: "16e siècle-présent",
    capital: "Nikki",
    ethnicity: "Bariba/Baatombu",
    description: "Royaume de tradition équestre célèbre pour la fête de la Gaani et son organisation sociale complexe.",
    longDescription: "Le royaume de Nikki est l'un des plus importants royaumes bariba du nord Bénin. Fondé au 16e siècle par des cavaliers venus de l'est, il s'est développé autour d'une puissante aristocratie guerrière. Célèbre pour sa fête annuelle de la Gaani qui célèbre l'héritage musulman et les traditions équestres, le royaume de Nikki maintient jusqu'à aujourd'hui ses structures traditionnelles et son roi (Sinaboko) reste une figure d'autorité morale et culturelle respectée dans la région.",
    image: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Rugged_rider.jpg",
    galerie: [
      "https://www.24haubenin.info/IMG/arton26551.png",
      "https://www.banouto.bj/uploads/content/5eab8de0cdef8le-roi-du-royaume-ketou-alaketu-oba-adetutu-fait-docteur-honoris-causa.jpg",
      "https://s.rfi.fr/media/display/0e4fdf38-0e48-11ea-a510-005056a99247/w:980/p:16x9/2019-11-22t073713z_918595096_rc2uid97w80k_rtrmadp_3_slavery-africa-benin.jpg"
    ],
    famousRulers: [
      {
        name: "Sunon Séro",
        period: "16e siècle",
        achievements: "Fondateur légendaire du royaume"
      },
      {
        name: "Séro Kpéra",
        period: "20e siècle",
        achievements: "Modernisation des traditions royales"
      }
    ],
    culturalHeritage: [
      {
        name: "Fête de la Gaani",
        description: "Célébration annuelle combinant traditions équestres et héritage musulman",
        imageUrl: "https://www.lanouvelletribune.info/wp-content/uploads/2018/05/Banikoara.jpg"
      },
      {
        name: "Arts équestres",
        description: "Démonstrations de cavalerie et costumes traditionnels",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIshpCmOSIKdlimOnssQrMRrY7zVZZbxz-NA&s"
      }
    ]
  },
  {
    id: "porto-novo",
    name: "Royaume de Porto-Novo",
    region: "Sud-Est Bénin",
    period: "18e siècle-présent",
    capital: "Porto-Novo",
    ethnicity: "Goun/Yoruba",
    description: "Royaume fondé par des princes d'Allada, mêlant influences yoruba et européennes.",
    longDescription: "Le royaume de Porto-Novo a été fondé au début du 18e siècle par des princes fuyant la conquête d'Allada par le Dahomey. Il s'est développé comme un important centre commercial et a noué des relations diplomatiques avec les puissances européennes, notamment la France. Le nom 'Porto-Novo' (Nouveau Port) fut donné par les Portugais. Mêlant influences culturelles yoruba, fon et européennes, ce royaume préserve aujourd'hui ses traditions avec un roi (Toffa) qui continue d'exercer une autorité traditionnelle dans l'actuelle capitale du Bénin.",
    image: "https://www.voyagesenafrique.fr/app/uploads/sites/2/2022/03/palais-royal-porto-novo.jpg",
    galerie: [
      "https://www.24haubenin.info/IMG/arton26551.png",
      "https://www.banouto.bj/uploads/content/5eab8de0cdef8le-roi-du-royaume-ketou-alaketu-oba-adetutu-fait-docteur-honoris-causa.jpg",
      "https://s.rfi.fr/media/display/0e4fdf38-0e48-11ea-a510-005056a99247/w:980/p:16x9/2019-11-22t073713z_918595096_rc2uid97w80k_rtrmadp_3_slavery-africa-benin.jpg"
    ],
    famousRulers: [
      {
        name: "Roi Tè-Agbanlin",
        period: "Début 18e siècle",
        achievements: "Fondateur du royaume"
      },
      {
        name: "Roi Toffa",
        period: "1874-1908",
        achievements: "Alliance avec la France et modernisation"
      }
    ],
    culturalHeritage: [
      {
        name: "Musée Honmè (Palais Royal)",
        description: "Ancien palais royal transformé en musée",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/7/75/Porto_Novo-Musee_Honme-Royal_Palace-20190406.jpg"
      },
      {
        name: "Culte Zangbeto",
        description: "Gardiens nocturnes traditionnels représentés par des danseurs couverts de raphia",
        imageUrl: "https://beninzangbeto.com/wp-content/uploads/2024/11/Benin-Zangbeto-festival.jpg"
      }
    ]
  },
  {
    id: "xogbonou",
    name: "Royaume de Xogbonou (Hogbonou)",
    region: "Sud-Est Bénin",
    period: "17e siècle-présent",
    capital: "Grand-Popo",
    ethnicity: "Xwla/Xwéda",
    description: "Royaume côtier axé sur la pêche et le commerce maritime, avec un riche héritage vodun.",
    longDescription: "Le royaume de Xogbonou, aussi connu sous le nom de Hogbonou, est un ancien État précolonial situé dans le sud-est du Bénin actuel. Fondé par des communautés de pêcheurs xwla et xwéda, ce royaume côtier a développé une économie basée sur la pêche, le sel et le commerce maritime. Les pratiques spirituelles vodun y sont particulièrement vivaces, avec des cultes liés aux divinités aquatiques. Bien que son influence politique ait diminué à l'époque coloniale, les structures traditionnelles perdurent et les cérémonies royales continuent d'être célébrées.",
    image: "https://static.lpnt.fr/images/2018/01/10/12777012lpaw-12805711-embed-libre-jpg_4903602.jpg",
    galerie: [
      "https://www.24haubenin.info/IMG/arton26551.png",
      "https://www.banouto.bj/uploads/content/5eab8de0cdef8le-roi-du-royaume-ketou-alaketu-oba-adetutu-fait-docteur-honoris-causa.jpg",
      "https://s.rfi.fr/media/display/0e4fdf38-0e48-11ea-a510-005056a99247/w:980/p:16x9/2019-11-22t073713z_918595096_rc2uid97w80k_rtrmadp_3_slavery-africa-benin.jpg"
    ],
    famousRulers: [
      {
        name: "Kpengla",
        period: "17e siècle",
        achievements: "Organisation du commerce maritime"
      },
      {
        name: "Agbannin",
        period: "18e siècle",
        achievements: "Résistance contre l'expansion du Dahomey"
      }
    ],
    culturalHeritage: [
      {
        name: "Cérémonies vodun",
        description: "Rituels dédiés aux divinités aquatiques",
        imageUrl: "https://www.lameteo.info/wp-content/uploads/2021/08/207d7471-27af-45bd-8df0-1129e0cc1a1e-033d6.jpg"
      },
      {
        name: "Art de la navigation",
        description: "Pirogues traditionnelles et techniques de pêche",
        imageUrl: "https://beninwebtv.com/wp-content/uploads/2022/06/IMG_5334.jpg"
      }
    ]
  },
  {
    id: "kandi",
    name: "Chefferie de Kandi",
    region: "Nord Bénin",
    period: "17e siècle-présent",
    capital: "Kandi",
    ethnicity: "Bariba/Dendi",
    description: "Importante chefferie traditionnelle du nord Bénin, carrefour commercial entre Sahel et forêts.",
    longDescription: "La chefferie de Kandi est une entité politique traditionnelle située dans le nord du Bénin. Fondée au 17e siècle, elle constituait un important centre commercial au carrefour des routes reliant le Sahel aux régions forestières. Marquée par les influences bariba et dendi, cette chefferie a développé des traditions syncrétiques mêlant pratiques animistes et islam. Le chef traditionnel (Kandi Sounon) continue de jouer un rôle important dans la résolution des conflits et la préservation des coutumes locales.",
    image: "https://www.petitfute.com/medias/professionnel/172936/premium/600_450/20210920_162334_1632156814439-1163-f35.jpg",
    galerie: [
      "https://www.24haubenin.info/IMG/arton26551.png",
      "https://www.banouto.bj/uploads/content/5eab8de0cdef8le-roi-du-royaume-ketou-alaketu-oba-adetutu-fait-docteur-honoris-causa.jpg",
      "https://s.rfi.fr/media/display/0e4fdf38-0e48-11ea-a510-005056a99247/w:980/p:16x9/2019-11-22t073713z_918595096_rc2uid97w80k_rtrmadp_3_slavery-africa-benin.jpg"
    ],
    famousRulers: [
      {
        name: "Batouré Kodudu",
        period: "18e siècle",
        achievements: "Extension du territoire et alliances commerciales"
      },
      {
        name: "Saka Bio Yérima",
        period: "19e siècle",
        achievements: "Organisation de la résistance contre les invasions"
      }
    ],
    culturalHeritage: [
      {
        name: "Architecture traditionnelle",
        description: "Palais et concessions de style soudanais",
        imageUrl: "https://media-cdn.tripadvisor.com/media/photo-s/06/67/d0/85/palais-royal.jpg"
      },
      {
        name: "Artisanat du cuir",
        description: "Objets ornementaux et utilitaires en cuir finement travaillé",
        imageUrl: "https://i0.wp.com/sejourbenin.com/wp-content/uploads/2021/08/artisanat-benin-scaled.jpg?resize=1024%2C709&ssl=1"
      }
    ]
  },
  {
    id: "dassa",
    name: "Royaume de Dassa",
    region: "Centre Bénin",
    period: "16e siècle-présent",
    capital: "Dassa-Zoumé",
    ethnicity: "Idaasha",
    description: "Royaume des collines avec une forte tradition de résistance et un héritage yoruba distinctif.",
    longDescription: "Le royaume de Dassa, fondé au 16e siècle dans la région des collines au centre du Bénin, est issu d'une migration yoruba. Ce royaume s'est développé dans un environnement montagneux qui lui a servi de défense naturelle contre les tentatives d'invasion, notamment du royaume du Dahomey. La structure politique de Dassa repose sur des lignages royaux et des sociétés initiatiques. Aujourd'hui encore, le roi (Japon) continue de présider aux cérémonies traditionnelles et aux grandes décisions communautaires, notamment lors de la fête annuelle des ignames.",
    image: "https://togotimes.com/wp-content/uploads/2017/07/efe-benin-dassa-zoume-fete-igname-japon-roi-idi-amin-dada-e1500722675627.jpg",
    galerie: [
      "https://www.24haubenin.info/IMG/arton26551.png",
      "https://www.banouto.bj/uploads/content/5eab8de0cdef8le-roi-du-royaume-ketou-alaketu-oba-adetutu-fait-docteur-honoris-causa.jpg",
      "https://s.rfi.fr/media/display/0e4fdf38-0e48-11ea-a510-005056a99247/w:980/p:16x9/2019-11-22t073713z_918595096_rc2uid97w80k_rtrmadp_3_slavery-africa-benin.jpg"
    ],
    famousRulers: [
      {
        name: "Olofin",
        period: "16e siècle",
        achievements: "Fondateur mythique du royaume"
      },
      {
        name: "Japon Egbakotan",
        period: "19e siècle",
        achievements: "Résistance contre l'expansion du Dahomey"
      }
    ],
    culturalHeritage: [
      {
        name: "Collines sacrées",
        description: "Sites naturels de culte et de pèlerinage",
        imageUrl: "https://static.wixstatic.com/media/9ccc46_f63d1fc2de3445a983d7b7cdd2abb4e5~mv2.jpg/v1/fill/w_560,h_374,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/9ccc46_f63d1fc2de3445a983d7b7cdd2abb4e5~mv2.jpg"
      },
      {
        name: "Fête de l'igname",
        description: "Célébration annuelle marquant le début des récoltes",
        imageUrl: "https://www.lanationbenin.info/wp-content/uploads/2022/09/Fete-igname-tokpa.jpg"
      }
    ]
  },
  {
    id: "djougou",
    name: "Chefferie de Djougou",
    region: "Nord-Ouest Bénin",
    period: "17e siècle-présent",
    capital: "Djougou",
    ethnicity: "Yom/Lokpa",
    description: "Centre commercial historique influencé par l'islam et les traditions soudanaises.",
    longDescription: "La chefferie de Djougou s'est développée à partir du 17e siècle comme un important carrefour commercial dans le nord-ouest du Bénin. Centre d'influence islamique, Djougou était une étape majeure sur les routes commerciales reliant les empires sahéliens aux royaumes côtiers. Gouvernée par une dynastie de chefs traditionnels portant le titre de 'Kpétoni', cette chefferie a conservé une autonomie relative face aux puissances voisines grâce à d'habiles alliances diplomatiques. Les traditions architecturales et artisanales de Djougou témoignent de ces influences multiples, notamment soudanaises et haoussa.",
    image: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Mosquee_de_Djougou.jpg",
    galerie: [
      "https://www.24haubenin.info/IMG/arton26551.png",
      "https://www.banouto.bj/uploads/content/5eab8de0cdef8le-roi-du-royaume-ketou-alaketu-oba-adetutu-fait-docteur-honoris-causa.jpg",
      "https://s.rfi.fr/media/display/0e4fdf38-0e48-11ea-a510-005056a99247/w:980/p:16x9/2019-11-22t073713z_918595096_rc2uid97w80k_rtrmadp_3_slavery-africa-benin.jpg"
    ],
    famousRulers: [
      {
        name: "Kpétoni Koda",
        period: "18e siècle",
        achievements: "Développement du commerce caravanier"
      },
      {
        name: "Kpétoni Yari Mora",
        period: "19e siècle",
        achievements: "Alliances avec les pouvoirs régionaux"
      }
    ],
    culturalHeritage: [
      {
        name: "Grande Mosquée",
        description: "Édifice religieux de style soudanais",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Mosquee_de_Djougou.jpg"
      },
      {
        name: "Tissage traditionnel",
        description: "Textiles aux motifs géométriques caractéristiques",
        imageUrl: "https://i0.wp.com/sejourbenin.com/wp-content/uploads/2021/07/artisanat-benin.jpg?resize=1024%2C576&ssl=1"
      }
    ]
  }
];