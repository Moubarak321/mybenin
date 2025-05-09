"use client";

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, MapPin, Clock, Crown, User, ChevronLeft, ChevronRight, Calendar, Book, Landmark, Users, Star, ChevronDown } from "lucide-react";

// Les données du royaume de Nikki
const NIKKI_KINGDOM = {
    id: "nikki",
    name: "Royaume de Nikki",
    region: "Nord-Est Bénin",
    period: "1600-présent",
    capital: "Nikki",
    ethnicity: "Bariba/Dendi",
    description: "Puissant royaume bariba toujours actif, réputé pour sa cavalerie et sa fête Gaani.",
    longDescription: "Le royaume de Nikki est l'un des plus importants royaumes baribas (ou baatombu) du nord du Bénin. Fondé au XVIe siècle, il s'est développé comme un État équestre puissant, célèbre pour sa cavalerie et son organisation militaire sophistiquée. Ce royaume maintient encore aujourd'hui ses structures traditionnelles avec un souverain (le Sinanboko) et conserve une influence culturelle majeure dans la région. La fête annuelle de la Gaani, qui célèbre l'anniversaire de l'avènement du premier roi et le nouvel an musulman, constitue l'une des plus grandes manifestations culturelles du nord Bénin.",
    histoire: [
        {
            period: "XVIe siècle",
            title: "Fondation du royaume",
            content: "Le royaume de Nikki fut fondé par Sunon Séro, un guerrier bariba venu selon la tradition orale du Borno (actuel Nigeria). Après avoir conquis la région, il établit une puissante dynastie qui allait régner sur un vaste territoire."
        },
        {
            period: "XVIIe-XVIIIe siècles",
            title: "Expansion et consolidation",
            content: "Durant cette période, le royaume de Nikki connaît une expansion territoriale significative et consolide son pouvoir à travers un système administratif efficace et une cavalerie redoutable. Le commerce caravanier enrichit considérablement le royaume."
        },
        {
            period: "XIXe siècle",
            title: "Confrontation avec le Dahomey et résistance coloniale",
            content: "Le royaume résiste aux tentatives d'expansion du Dahomey vers le nord et maintient son indépendance. À la fin du siècle, sous le règne de Bio Gounon, Nikki résiste farouchement à la pénétration coloniale française mais doit finalement accepter le protectorat français en 1898."
        },
        {
            period: "XXe siècle",
            title: "Adaptation à l'ère moderne",
            content: "Malgré la colonisation puis l'indépendance du Bénin, la monarchie de Nikki a su préserver ses traditions et s'adapter aux changements politiques. Les souverains (Sinanboko) ont continué à exercer une autorité morale et culturelle importante."
        },
        {
            period: "XXIe siècle",
            title: "Renaissance culturelle",
            content: "Le royaume connaît aujourd'hui un regain d'intérêt pour ses traditions. La Gaani, fête royale annuelle, attire des milliers de visiteurs. Le royaume joue un rôle crucial dans la préservation de l'identité bariba et le développement touristique de la région."
        }
    ],
    famousRulers: [
        {
            name: "Sunon Séro",
            period: "1600-1640",
            achievements: "Fondateur mythique du royaume",
            description: "Considéré comme le père fondateur de la dynastie régnante de Nikki, Sunon Séro était un guerrier réputé pour son habileté militaire. Selon la tradition orale, il serait venu du royaume de Borno (actuel Nigeria) et aurait établi son autorité sur les peuples locaux grâce à ses conquêtes. Il mit en place le système politique et administratif qui allait caractériser le royaume pendant des siècles.",
            image: "https://picsum.photos/seed/nikki1/800/600"
        },
        {
            name: "Bio Gounon",
            period: "1875-1908",
            achievements: "Résistance contre la colonisation française",
            description: "Figure emblématique de la résistance à la colonisation, Bio Gounon s'opposa farouchement à la pénétration française dans son royaume. Son règne fut marqué par une série de batailles contre les forces coloniales. Malgré sa résistance héroïque, il dut finalement accepter le protectorat français en 1898. Il conserva néanmoins une grande partie de son autorité traditionnelle et œuvra pour préserver l'identité culturelle bariba.",
            image: "https://picsum.photos/seed/nikki2/800/600"
        },
        {
            name: "Sabi Nayina III",
            period: "1978-2008",
            achievements: "Renforcement des traditions et modernisation",
            description: "Monarque visionnaire, Sabi Nayina III a œuvré au renouveau des traditions du royaume tout en favorisant son ouverture à la modernité. Sous son règne, la fête de la Gaani a gagné en importance et est devenue un événement culturel majeur au Bénin. Il a également travaillé au rapprochement avec les autres royaumes traditionnels du pays et à la valorisation du patrimoine culturel bariba sur la scène nationale et internationale.",
            image: "https://picsum.photos/seed/nikki3/800/600"
        },
        {
            name: "Sabi Yérima Lafia",
            period: "2008-présent",
            achievements: "Diplomatie culturelle et développement durable",
            description: "Le roi actuel poursuit l'œuvre de ses prédécesseurs en renforçant le rôle du royaume dans le développement local. Il a initié plusieurs projets de valorisation du patrimoine culturel et touristique de Nikki. Reconnu pour ses qualités de médiateur, il joue un rôle important dans la résolution des conflits locaux et la promotion de la paix sociale. Sous son règne, le royaume a également développé des partenariats internationaux pour la préservation des savoirs traditionnels.",
            image: "https://picsum.photos/seed/nikki4/800/600"
        }
    ],
    culturalHeritage: [
        {
            name: "Palais royal de Nikki",
            description: "Centre cérémoniel et siège du pouvoir traditionnel",
            fullDescription: "Le palais royal de Nikki est un ensemble architectural traditionnel qui sert de résidence au Sinanboko (roi) et de centre cérémoniel pour le royaume. Il abrite le trône royal, des objets sacrés et des salles destinées aux cérémonies traditionnelles. Construit selon l'architecture bariba traditionnelle, il est composé de plusieurs cours et bâtiments aux fonctions rituelles et administratives spécifiques. Le palais est également le lieu où se tiennent les audiences royales et certaines cérémonies de la Gaani.",
            imageUrl: "https://picsum.photos/seed/nikki5/800/600"
        },
        {
            name: "Fête de la Gaani",
            description: "Célébration annuelle majeure mêlant histoire, religion et culture",
            fullDescription: "La Gaani est la plus importante fête traditionnelle du royaume de Nikki. Célébrée annuellement pendant sept jours au mois de janvier ou février (selon le calendrier lunaire musulman), elle commémore à la fois l'anniversaire de l'avènement du premier roi et le nouvel an musulman. Cette célébration comprend des défilés de cavaliers, des danses traditionnelles, des rituels royaux et des démonstrations guerrières. Le point culminant est la sortie publique du roi entouré de ses notables et guerriers. La Gaani attire des milliers de visiteurs et constitue un moment privilégié de communion entre le souverain et son peuple, ainsi qu'une vitrine de la culture bariba.",
            imageUrl: "https://picsum.photos/seed/nikki6/800/600"
        },
        {
            name: "Art équestre Bariba",
            description: "Traditions équestres et harnachements ornementés",
            fullDescription: "L'art équestre constitue l'une des expressions culturelles les plus emblématiques du royaume de Nikki. Les Baribas sont réputés pour leur maîtrise exceptionnelle de l'équitation et leurs harnachements richement décorés. Lors de cérémonies comme la Gaani, les cavaliers exécutent des figures acrobatiques impressionnantes et des simulations de charges guerrières. Les chevaux portent des parures ornementées de cuir, de métal et de textiles colorés qui témoignent du statut social de leur propriétaire. Cette tradition équestre remonte aux origines guerrières du royaume et reste aujourd'hui un élément central de l'identité culturelle bariba.",
            imageUrl: "https://picsum.photos/seed/nikki7/800/600"
        },
        {
            name: "Musique et danses traditionnelles",
            description: "Expressions artistiques liées aux cérémonies royales",
            fullDescription: "La musique et les danses du royaume de Nikki sont intimement liées aux cérémonies royales et aux évènements sociaux importants. Les instruments traditionnels incluent le gon (tambour parleur), diverses percussions et des instruments à vent. La danse Gani, exécutée lors de la fête annuelle du même nom, est particulièrement spectaculaire avec ses mouvements rythmés et ses costumes colorés. Les chants traditionnels racontent l'histoire du royaume, célèbrent les exploits des ancêtres et transmettent les valeurs culturelles baribas. Ces expressions artistiques jouent un rôle fondamental dans la transmission de la mémoire collective et le renforcement de la cohésion sociale.",
            imageUrl: "https://picsum.photos/seed/nikki8/800/600"
        }
    ],
    organisation: {
        title: "Structure Politique et Sociale",
        content: "Le royaume de Nikki possède une organisation politique hiérarchisée avec le Sinanboko (roi) au sommet. Le pouvoir royal est héréditaire et se transmet au sein de certaines familles désignées. Le roi est assisté par un conseil de notables traditionnels représentant les différentes composantes du royaume.",
        structure: [
            {
                title: "Le Sinanboko (Roi)",
                description: "Autorité suprême, garant des traditions et chef spirituel du royaume"
            },
            {
                title: "Le Conseil des Notables",
                description: "Composé des représentants des grandes familles et des chefs de villages"
            },
            {
                title: "Les Chefs de Canton",
                description: "Représentants du roi dans les différentes subdivisions territoriales"
            },
            {
                title: "Les Wassangari",
                description: "Aristocratie guerrière descendant des compagnons du fondateur du royaume"
            }
        ]
    },
    gallery: [
        {
            url: "https://picsum.photos/seed/nikki9/800/600",
            caption: "Vue panoramique de la ville de Nikki"
        },
        {
            url: "https://picsum.photos/seed/nikki10/800/600",
            caption: "Cavaliers lors de la fête de la Gaani"
        },
        {
            url: "https://picsum.photos/seed/nikki11/800/600",
            caption: "Entrée du palais royal de Nikki"
        },
        {
            url: "https://picsum.photos/seed/nikki12/800/600",
            caption: "Danseurs traditionnels bariba"
        },
        {
            url: "https://picsum.photos/seed/nikki13/800/600",
            caption: "Artisanat traditionnel du royaume"
        },
        {
            url: "https://picsum.photos/seed/nikki14/800/600",
            caption: "Cérémonie royale avec les notables"
        }
    ],
    tourism: {
        title: "Découvrir le Royaume de Nikki",
        description: "Le royaume de Nikki offre aux visiteurs une immersion unique dans la culture bariba et l'histoire du nord Bénin. Les sites culturels, les cérémonies traditionnelles et l'hospitalité légendaire des habitants font de cette région une destination touristique fascinante.",
        attractions: [
            {
                name: "La fête de la Gaani",
                description: "Festival annuel spectaculaire avec défilés équestres et cérémonies royales",
                period: "Janvier/Février (selon le calendrier lunaire)",
                imageUrl: "https://picsum.photos/seed/nikki15/800/600"
            },
            {
                name: "Visite du palais royal",
                description: "Découverte du siège traditionnel du pouvoir et centre cérémoniel",
                period: "Toute l'année (sur autorisation)",
                imageUrl: "https://picsum.photos/seed/nikki16/800/600"
            },
            {
                name: "Marché traditionnel de Nikki",
                description: "Immersion dans la vie quotidienne et découverte de l'artisanat local",
                period: "Jours de marché (tous les 4 jours)",
                imageUrl: "https://picsum.photos/seed/nikki17/800/600"
            }
        ]
    }
};

export default function NikkiKingdomPage() {
    const [activeTab, setActiveTab] = useState('history');
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [showGalleryModal, setShowGalleryModal] = useState(false);
    const [selectedRuler, setSelectedRuler] = useState<Ruler | null>(null);
    const [showRulerModal, setShowRulerModal] = useState(false);
    const [selectedHeritage, setSelectedHeritage] = useState<Heritage | null>(null);
    const [showHeritageModal, setShowHeritageModal] = useState(false);

    const { scrollYProgress } = useScroll();
    const heroOpacity = useTransform(scrollYProgress, [0, 0.25], [1, 0]);
    const contentTransform = useTransform(scrollYProgress, [0, 0.1], [50, 0]);

    const galleryRef = useRef<HTMLDivElement>(null);
    const historyRef = useRef<HTMLDivElement>(null);
    const heritageRef = useRef<HTMLDivElement>(null);
    const organisationRef = useRef<HTMLDivElement>(null);
    const tourismRef = useRef<HTMLDivElement>(null);

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % NIKKI_KINGDOM.gallery.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex - 1 + NIKKI_KINGDOM.gallery.length) % NIKKI_KINGDOM.gallery.length);
    };

    interface GalleryImage {
        url: string;
        caption: string;
    }

    const openGalleryModal = (index: number): void => {
        setCurrentImageIndex(index);
        setShowGalleryModal(true);
        document.body.style.overflow = 'hidden';
    };

    const closeGalleryModal = () => {
        setShowGalleryModal(false);
        document.body.style.overflow = 'auto';
    };

    interface Ruler {
        name: string;
        period: string;
        achievements: string;
        description: string;
        image: string;
    }

    const closeRulerModal = (ruler: { name: string; period: string; achievements: string; description: string; image: string; }) => {
        setShowRulerModal(false);
        document.body.style.overflow = 'auto';
    };

    interface Heritage {
        name: string;
        description: string;
        fullDescription: string;
        imageUrl: string;
    }

    const openHeritageModal = (heritage: Heritage): void => {
        setSelectedHeritage(heritage);
        setShowHeritageModal(true);
        document.body.style.overflow = 'hidden';
    };

    const closeHeritageModal = () => {
        setShowHeritageModal(false);
        document.body.style.overflow = 'auto';
    };

    const scrollToSection = (ref: React.RefObject<HTMLElement | null>): void => {
        ref.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 }
        }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const staggerItem = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1 }
    };
    useEffect(() => {
        document.body.style.overflow = 'auto'; // Réinitialise à chaque montage
        return () => {
          document.body.style.overflow = 'auto'; // Cleanup
          
        };
      }, []);
    return (
        <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-50">
            {/* Hero Section with Parallax */}
            <div className="relative h-screen overflow-hidden">
                <motion.div
                    style={{ opacity: heroOpacity }}
                    className="absolute inset-0 bg-black"
                >
                    <Image
                        src="https://picsum.photos/seed/nikki/1920/1080"
                        alt="Royaume de Nikki"
                        fill
                        className="object-cover opacity-80"
                        priority
                    />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/80" />

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="relative h-full max-w-6xl mx-auto px-6 flex flex-col justify-center items-center text-center"
                >
                    <Link href="/royaumes" className="absolute top-8 left-6 flex items-center text-white hover:text-amber-300 transition-colors mt-12">
                        <ArrowLeft className="w-5 h-5 mr-2" />
                        <span>Retour aux royautés</span>
                    </Link>

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
                        Le <span className="text-amber-400">Royaume de Nikki</span>
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.4 }}
                        className="flex flex-wrap justify-center gap-6 mb-10 text-white/90"
                    >
                        <div className="flex items-center">
                            <MapPin className="w-5 h-5 mr-2 text-amber-400" />
                            <span>{NIKKI_KINGDOM.region}</span>
                        </div>
                        <div className="flex items-center">
                            <Clock className="w-5 h-5 mr-2 text-amber-400" />
                            <span>{NIKKI_KINGDOM.period}</span>
                        </div>
                        <div className="flex items-center">
                            <User className="w-5 h-5 mr-2 text-amber-400" />
                            <span>{NIKKI_KINGDOM.ethnicity}</span>
                        </div>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.6 }}
                        className="text-white/90 text-xl max-w-3xl mb-12"
                    >
                        {NIKKI_KINGDOM.description}
                    </motion.p>
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
                        onClick={() => scrollToSection(historyRef)}
                    >
                        <ChevronDown className="h-8 w-8 cursor-pointer" />
                    </motion.div>
                </motion.div>
            </div>

            {/* Navigation tabs */}
            <div className="sticky top-0 bg-white z-30 shadow-md">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="flex overflow-x-auto no-scrollbar py-4 gap-8">
                        <button
                            onClick={() => scrollToSection(historyRef)}
                            className={`whitespace-nowrap pb-2 font-medium transition-colors ${activeTab === 'history'
                                ? 'text-amber-600 border-b-2 border-amber-600'
                                : 'text-gray-500 hover:text-amber-600'
                                }`}
                        >
                            Histoire
                        </button>
                        <button
                            onClick={() => scrollToSection(heritageRef)}
                            className={`whitespace-nowrap pb-2 font-medium transition-colors ${activeTab === 'heritage'
                                ? 'text-amber-600 border-b-2 border-amber-600'
                                : 'text-gray-500 hover:text-amber-600'
                                }`}
                        >
                            Patrimoine Culturel
                        </button>
                        <button
                            onClick={() => scrollToSection(organisationRef)}
                            className={`whitespace-nowrap pb-2 font-medium transition-colors ${activeTab === 'organisation'
                                ? 'text-amber-600 border-b-2 border-amber-600'
                                : 'text-gray-500 hover:text-amber-600'
                                }`}
                        >
                            Organisation
                        </button>
                        <button
                            onClick={() => scrollToSection(galleryRef)}
                            className={`whitespace-nowrap pb-2 font-medium transition-colors ${activeTab === 'gallery'
                                ? 'text-amber-600 border-b-2 border-amber-600'
                                : 'text-gray-500 hover:text-amber-600'
                                }`}
                        >
                            Galerie
                        </button>
                        <button
                            onClick={() => scrollToSection(tourismRef)}
                            className={`whitespace-nowrap pb-2 font-medium transition-colors ${activeTab === 'tourism'
                                ? 'text-amber-600 border-b-2 border-amber-600'
                                : 'text-gray-500 hover:text-amber-600'
                                }`}
                        >
                            Tourisme
                        </button>
                    </div>
                </div>
            </div>

            {/* Introduction */}
            <div className="max-w-3xl mx-auto px-6 py-16 text-center">
                <motion.p
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeIn}
                    className="text-xl text-gray-700 leading-relaxed"
                >
                    {NIKKI_KINGDOM.longDescription}
                </motion.p>
            </div>

            {/* History Timeline */}
            <div ref={historyRef} className="py-20 bg-gradient-to-r from-amber-50 to-amber-100">
                <div className="max-w-6xl mx-auto px-6">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeIn}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl font-bold text-gray-800 mb-6">Histoire du Royaume</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            De sa fondation au XVIe siècle à nos jours, découvrez l'histoire fascinante
                            du royaume de Nikki à travers les grandes étapes de son développement.
                        </p>
                    </motion.div>

                    <div className="relative">
                        {/* Timeline center line */}
                        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-amber-300"></div>

                        {/* Timeline items */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            variants={staggerContainer}
                        >
                            {NIKKI_KINGDOM.histoire.map((item, index) => (
                                <motion.div
                                    key={index}
                                    variants={staggerItem}
                                    className={`relative z-10 flex items-center gap-8 mb-16 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                                        }`}
                                >
                                    <div className={`hidden md:block w-1/2 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                                        <div className={`bg-white rounded-xl p-6 shadow-md ${index % 2 === 0 ? 'ml-auto mr-8' : 'mr-auto ml-8'}`} style={{ maxWidth: '90%' }}>
                                            <h3 className="text-2xl font-bold text-amber-800 mb-2">{item.title}</h3>
                                            <p className="text-gray-600">{item.content}</p>
                                        </div>
                                    </div>

                                    {/* Mobile version (always displays below dot) */}
                                    <div className="md:hidden w-full">
                                        <div className="bg-white rounded-xl p-6 shadow-md mt-8">
                                            <h3 className="text-2xl font-bold text-amber-800 mb-2">{item.title}</h3>
                                            <p className="text-gray-600">{item.content}</p>
                                        </div>
                                    </div>

                                    {/* Center dot with date */}
                                    <div className="absolute left-1/2 transform -translate-x-1/2 flex flex-col items-center">
                                        <div className="rounded-full w-12 h-12 bg-amber-500 flex items-center justify-center shadow-lg z-20">
                                            <Calendar className="text-white w-6 h-6" />
                                        </div>
                                        <div className="bg-amber-800 text-white px-4 py-1 rounded-full text-sm mt-2">
                                            {item.period}
                                        </div>
                                    </div>

                                    <div className="hidden md:block w-1/2"></div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Royal Dynasty */}
            <div className="py-20 bg-white">
                <div className="max-w-6xl mx-auto px-6">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeIn}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl font-bold text-gray-800 mb-6">Dynastie Royale</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Les souverains emblématiques qui ont façonné l'histoire du royaume
                            de Nikki à travers les siècles.
                        </p>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                        variants={staggerContainer}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                    >
                        {NIKKI_KINGDOM.famousRulers.map((ruler, index) => (
                            <motion.div
                                key={index}
                                variants={staggerItem}
                                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
                                onClick={() => selectedRuler && closeRulerModal(selectedRuler)}
                            >
                                <div className="relative h-64">
                                    <Image
                                        src={ruler.image}
                                        alt={ruler.name}
                                        fill
                                        className="object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70" />
                                    <div className="absolute bottom-0 left-0 right-0 p-4">
                                        <h3 className="text-xl font-bold text-white">{ruler.name}</h3>
                                        <div className="flex items-center text-amber-300 text-sm">
                                            <Clock className="w-4 h-4 mr-1" />
                                            <span>{ruler.period}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-4">
                                    <p className="font-medium text-amber-800">{ruler.achievements}</p>
                                   
                                    <p className="mt-2 text-amber-600 text-sm flex items-center cursor-pointer">
                                        En savoir plus
                                        <ChevronRight className="w-4 h-4 ml-1" />
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>

            {/* Cultural Heritage */}
            <div ref={heritageRef} className="py-20 bg-gradient-to-r from-amber-100 to-orange-50">
                <div className="max-w-6xl mx-auto px-6">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeIn}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl font-bold text-gray-800 mb-6">Patrimoine Culturel</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Découvrez les richesses culturelles et traditions qui font la renommée du royaume de Nikki.
                        </p>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                        variants={staggerContainer}
                        className="grid grid-cols-1 md:grid-cols-2 gap-8"
                    >
                        {NIKKI_KINGDOM.culturalHeritage.map((heritage, index) => (
                            <motion.div
                                key={index}
                                variants={staggerItem}
                                whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
                                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col md:flex-row"
                                onClick={() => openHeritageModal(heritage)}
                            >
                                <div className="relative w-full md:w-2/5 h-64 md:h-auto">
                                    <Image
                                        src={heritage.imageUrl}
                                        alt={heritage.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="p-6 md:w-3/5">
                                    <h3 className="text-xl font-bold text-amber-800 mb-2">{heritage.name}</h3>
                                    <p className="text-gray-600 mb-4">{heritage.description}</p>
                                    <button className="text-amber-600 font-medium flex items-center">
                                        Découvrir
                                        <ChevronRight className="w-4 h-4 ml-1" />
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>

            {/* Political and Social Organization */}
            <div ref={organisationRef} className="py-20 bg-white">
                <div className="max-w-6xl mx-auto px-6">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeIn}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl font-bold text-gray-800 mb-6">{NIKKI_KINGDOM.organisation.title}</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            {NIKKI_KINGDOM.organisation.content}
                        </p>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                        className="grid grid-cols-1 md:grid-cols-2 gap-8"
                    >
                        {NIKKI_KINGDOM.organisation.structure.map((item, index) => (
                            <motion.div
                                key={index}
                                variants={staggerItem}
                                className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-xl p-6 shadow-md"
                            >
                                <div className="bg-amber-500 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                                    {index === 0 ? (
                                        <Crown className="text-white w-6 h-6" />
                                    ) : index === 1 ? (
                                        <Users className="text-white w-6 h-6" />
                                    ) : index === 2 ? (
                                        <Landmark className="text-white w-6 h-6" />
                                    ) : (
                                        <Star className="text-white w-6 h-6" />
                                    )}
                                </div>
                                <h3 className="text-xl font-bold text-amber-800 mb-2">{item.title}</h3>
                                <p className="text-gray-600">{item.description}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>

            {/* Gallery */}
            <div ref={galleryRef} className="py-20 bg-gradient-to-r from-amber-50 to-orange-50">
                <div className="max-w-6xl mx-auto px-6">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeIn}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl font-bold text-gray-800 mb-6">Galerie</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Explorez le royaume de Nikki à travers une collection d'images représentatives.
                        </p>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
                    >
                        {NIKKI_KINGDOM.gallery.map((image, index) => (
                            <motion.div
                                key={index}
                                variants={staggerItem}
                                whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
                                className="relative aspect-square overflow-hidden rounded-lg shadow-md cursor-pointer"
                                onClick={() => openGalleryModal(index)}
                            >
                                <Image
                                    src={image.url}
                                    alt={image.caption}
                                    fill
                                    className="object-cover transition-transform duration-300 hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 hover:opacity-70 transition-opacity duration-300 flex items-end p-4">
                                    <p className="text-white font-medium">{image.caption}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>

            {/* Tourism */}
            <div ref={tourismRef} className="py-20 bg-white">
                <div className="max-w-6xl mx-auto px-6">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeIn}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl font-bold text-gray-800 mb-6">{NIKKI_KINGDOM.tourism.title}</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            {NIKKI_KINGDOM.tourism.description}
                        </p>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                        className="grid grid-cols-1 md:grid-cols-3 gap-8"
                    >
                        {NIKKI_KINGDOM.tourism.attractions.map((attraction, index) => (
                            <motion.div
                                key={index}
                                variants={staggerItem}
                                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                            >
                                <div className="relative h-64">
                                    <Image
                                        src={attraction.imageUrl}
                                        alt={attraction.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-amber-800 mb-2">{attraction.name}</h3>
                                    <p className="text-gray-600 mb-4">{attraction.description}</p>
                                    <div className="flex items-center text-amber-600">
                                        <Calendar className="w-5 h-5 mr-2" />
                                        <span className="font-medium">{attraction.period}</span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>

            {/* Footer */}
           

            {/* Modals */}

            {/* Gallery Modal */}
            <AnimatePresence>
                {showGalleryModal && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
                        onClick={closeGalleryModal}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="relative w-full max-w-4xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-2 hover:bg-black/80 transition-colors z-10"
                                onClick={closeGalleryModal}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                                    <path d="M18 6L6 18M6 6l12 12"></path>
                                </svg>
                            </button>

                            <div className="relative aspect-[16/10] rounded-lg overflow-hidden">
                                <Image
                                    src={NIKKI_KINGDOM.gallery[currentImageIndex].url}
                                    alt={NIKKI_KINGDOM.gallery[currentImageIndex].caption}
                                    fill
                                    className="object-contain"
                                />
                            </div>

                            <div className="absolute inset-x-0 bottom-0 bg-black/70 text-white p-4 text-center">
                                <p className="text-lg">{NIKKI_KINGDOM.gallery[currentImageIndex].caption}</p>
                            </div>

                            <button
                                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white bg-black/50 rounded-full p-2 hover:bg-black/80 transition-colors"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    prevImage();
                                }}
                            >
                                <ChevronLeft className="w-6 h-6" />
                            </button>

                            <button
                                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white bg-black/50 rounded-full p-2 hover:bg-black/80 transition-colors"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    nextImage();
                                }}
                            >
                                <ChevronRight className="w-6 h-6" />
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Ruler Modal */}
            <AnimatePresence>
                {showRulerModal && selectedRuler && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 overflow-y-auto"
                        onClick={() => closeRulerModal(selectedRuler)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 50 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="relative bg-white rounded-xl overflow-hidden w-full max-w-3xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                className="absolute top-4 right-4 text-gray-600 bg-white/80 rounded-full p-2 hover:bg-white transition-colors z-10"
                                onClick={() => closeRulerModal(selectedRuler)}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                                    <path d="M18 6L6 18M6 6l12 12"></path>
                                </svg>
                            </button>

                            <div className="md:flex">
                                <div className="relative h-96 md:h-auto md:w-1/2">
                                    <Image
                                        src={selectedRuler.image}
                                        alt={selectedRuler.name}
                                        fill
                                        className="object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent md:bg-gradient-to-r opacity-50" />
                                </div>

                                <div className="p-8 md:w-1/2">
                                    <h2 className="text-3xl font-bold text-amber-800 mb-2">{selectedRuler.name}</h2>

                                    <div className="flex items-center text-amber-600 mb-6">
                                        <Clock className="w-5 h-5 mr-2" />
                                        <span className="font-medium">{selectedRuler.period}</span>
                                    </div>

                                    <div className="bg-amber-100 px-4 py-2 rounded-lg inline-block mb-6">
                                        <p className="font-medium text-amber-800">{selectedRuler.achievements}</p>
                                    </div>

                                    <p className="text-gray-600">{selectedRuler.description}</p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Heritage Modal */}
            <AnimatePresence>
                {showHeritageModal && selectedHeritage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 overflow-y-auto"
                        onClick={closeHeritageModal}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 50 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="relative bg-white rounded-xl overflow-hidden w-full max-w-3xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                className="absolute top-4 right-4 text-gray-600 bg-white/80 rounded-full p-2 hover:bg-white transition-colors z-10"
                                onClick={closeHeritageModal}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                                    <path d="M18 6L6 18M6 6l12 12"></path>
                                </svg>
                            </button>

                            <div className="md:flex">
                                <div className="relative h-96 md:h-auto md:w-1/2">
                                    <Image
                                        src={selectedHeritage.imageUrl}
                                        alt={selectedHeritage.name}
                                        fill
                                        className="object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent md:bg-gradient-to-r opacity-50" />
                                </div>

                                <div className="p-8 md:w-1/2">
                                    <h2 className="text-3xl font-bold text-amber-800 mb-4">{selectedHeritage.name}</h2>

                                    <div className="bg-amber-100 px-4 py-2 rounded-lg inline-block mb-6">
                                        <p className="font-medium text-amber-800">{selectedHeritage.description}</p>
                                    </div>

                                    <p className="text-gray-600">{selectedHeritage.fullDescription}</p>

                                    <div className="mt-6 flex items-center">
                                        <Book className="text-amber-600 w-5 h-5 mr-2" />
                                        <span className="text-amber-600 font-medium">Patrimoine culturel immatériel</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div >
    );
}