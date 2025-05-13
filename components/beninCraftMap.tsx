import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MapPin,
  Search,
  ArrowRight,
  Palette
} from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

// Régions artistiques avec coordonnées adaptées à la carte du Bénin
const regions = [
  {
    id: 1,
    name: "Abomey",
    description: "Ancienne capitale du royaume du Dahomey, célèbre pour ses sculptures sur bois et bas-reliefs royaux.",
    specialties: ["Masques Guèlèdè", "Sculptures royales", "Bas-reliefs"],
    position: { x: 120, y: 550 },
    color: "#8B5A2B",
  },
  {
    id: 2,
    name: "Ouidah",
    description: "Centre spirituel du vodoun, renommée pour son travail du bronze et ses sculptures rituelles.",
    specialties: ["Bronze à la cire perdue", "Statuettes vodoun", "Art sacré"],
    position: { x: 80, y: 590 },
    color: "#6B4522",
  },
  {
    id: 3,
    name: "Porto-Novo",
    description: "Capitale culturelle avec son architecture afro-brésilienne et ses tissages traditionnels.",
    specialties: ["Tissage Adja", "Architecture", "Peintures murales"],
    position: { x: 190, y: 590 },
    color: "#3A2D1E",
  },
  {
    id: 4,
    name: "Natitingou",
    description: "Région des Tata Somba et de l'artisanat utilitaire des populations Betammaribé.",
    specialties: ["Architecture traditionnelle", "Vannerie", "Poterie"],
    position: { x: 120, y: 180 },
    color: "#A67C52",
  },
  {
    id: 5,
    name: "Parakou",
    description: "Carrefour culturel entre le nord et le sud, connu pour ses textiles traditionnels et objets en cuir.",
    specialties: ["Textiles", "Maroquinerie", "Instruments de musique"],
    position: { x: 165, y: 320 },
    color: "#9C6644",
  },
  {
    id: 6,
    name: "Cotonou",
    description: "Capitale économique où traditions et modernité se rencontrent dans l'artisanat contemporain.",
    specialties: ["Art contemporain", "Bijouterie", "Mode éthique"],
    position: { x: 145, y: 610 },
    color: "#7D5A4F",
  },
];

export default function BeninCraftMap() {
  const [selectedRegionId, setSelectedRegionId] = useState<number | null>(null);
  const [hoveredRegion, setHoveredRegion] = useState<number | null>(null);

  const selectedRegion = regions.find((r) => r.id === selectedRegionId);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2 bg-gradient-to-br from-white to-amber-50 p-6 rounded-xl shadow-lg border border-amber-100 relative overflow-hidden">
        {/* Effet de grain sur la carte */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')] opacity-30" />

        {/* Effet de brouillard */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-amber-50 to-transparent" />
        <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-amber-50 to-transparent" />

        <div className="relative h-[500px] w-full">
          {/* Carte SVG du Bénin avec forme réelle */}
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 300 650"
            className="drop-shadow-md"
          >
            {/* Définitions pour les effets */}
            <defs>
              <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="8" result="blur" />
                <feFlood floodColor="#D97706" floodOpacity="0.2" result="color" />
                <feComposite in="color" in2="blur" operator="in" result="shadow" />
                <feComposite in="SourceGraphic" in2="shadow" operator="over" />
              </filter>
              <linearGradient id="mapGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FEF3C7" />
                <stop offset="100%" stopColor="#FCD34D" />
              </linearGradient>
              <pattern id="pattern-circles" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="10" cy="10" r="1" fill="#92400E" fillOpacity="0.1" />
              </pattern>
            </defs>

            {/* Forme du Bénin basée sur l'image fournie */}
            <path
              d="M150,50 C160,52 163,60 167,67 C171,74 175,82 175,90 C175,98 177,106 180,114 
                     C183,122 185,130 185,138 C185,146 183,154 180,162 C177,170 175,178 175,186 
                     C175,194 177,202 180,210 C183,218 185,226 185,234 C185,242 183,250 180,258 
                     C177,266 175,274 175,282 C175,290 178,298 182,306 C186,314 190,322 190,330 
                     C190,338 187,346 183,354 C179,362 175,370 175,378 C175,386 180,394 186,402 
                     C192,410 198,418 198,426 C198,434 193,442 187,450 C181,458 175,466 175,474 
                     C175,482 180,490 185,498 C190,506 195,514 195,522 C195,530 190,538 185,546 
                     C180,554 175,562 175,570 C175,578 177,586 180,594 C183,602 185,610 178,618 
                     C171,626 156,634 150,642 C144,634 129,626 122,618 C115,610 117,602 120,594 
                     C123,586 125,578 125,570 C125,562 120,554 115,546 C110,538 105,530 105,522 
                     C105,514 110,506 115,498 C120,490 125,482 125,474 C125,466 119,458 113,450 
                     C107,442 102,434 102,426 C102,418 108,410 114,402 C120,394 125,386 125,378 
                     C125,370 121,362 117,354 C113,346 110,338 110,330 C110,322 114,314 118,306 
                     C122,298 125,290 125,282 C125,274 123,266 120,258 C117,250 115,242 115,234 
                     C115,226 117,218 120,210 C123,202 125,194 125,186 C125,178 123,170 120,162 
                     C117,154 115,146 115,138 C115,130 117,122 120,114 C123,106 125,98 125,90 
                     C125,82 129,74 133,67 C137,60 140,52 150,50"
              fill="url(#mapGradient)"
              fillOpacity="0.9"
              stroke="#8B5A2B"
              strokeWidth="2"
              strokeLinejoin="round"
              filter="url(#glow)"
            />

            {/* Motif de texture sur la carte */}
            <path
              d="M150,50 C160,52 163,60 167,67 C171,74 175,82 175,90 C175,98 177,106 180,114 
                   C183,122 185,130 185,138 C185,146 183,154 180,162 C177,170 175,178 175,186 
                   C175,194 177,202 180,210 C183,218 185,226 185,234 C185,242 183,250 180,258 
                   C177,266 175,274 175,282 C175,290 178,298 182,306 C186,314 190,322 190,330 
                   C190,338 187,346 183,354 C179,362 175,370 175,378 C175,386 180,394 186,402 
                   C192,410 198,418 198,426 C198,434 193,442 187,450 C181,458 175,466 175,474 
                   C175,482 180,490 185,498 C190,506 195,514 195,522 C195,530 190,538 185,546 
                   C180,554 175,562 175,570 C175,578 177,586 180,594 C183,602 185,610 178,618 
                   C171,626 156,634 150,642 C144,634 129,626 122,618 C115,610 117,602 120,594 
                   C123,586 125,578 125,570 C125,562 120,554 115,546 C110,538 105,530 105,522 
                   C105,514 110,506 115,498 C120,490 125,482 125,474 C125,466 119,458 113,450 
                   C107,442 102,434 102,426 C102,418 108,410 114,402 C120,394 125,386 125,378 
                   C125,370 121,362 117,354 C113,346 110,338 110,330 C110,322 114,314 118,306 
                   C122,298 125,290 125,282 C125,274 123,266 120,258 C117,250 115,242 115,234 
                   C115,226 117,218 120,210 C123,202 125,194 125,186 C125,178 123,170 120,162 
                   C117,154 115,146 115,138 C115,130 117,122 120,114 C123,106 125,98 125,90 
                   C125,82 129,74 133,67 C137,60 140,52 150,50"
              fill="url(#pattern-circles)"
              strokeWidth="0"
            />

            {/* Frontières intérieures légères pour simuler les départements */}
            <path
              d="M150,200 L190,220 M110,300 L190,310 M120,450 L180,430"
              stroke="#8B5A2B"
              strokeWidth="0.5"
              strokeDasharray="5,5"
              strokeOpacity="0.3"
            />

            {/* Noms des pays voisins */}
            <text x="220" y="300" fontSize="12" fill="#8B5A2B" opacity="0.7" fontWeight="300">NIGERIA</text>
            <text x="50" y="300" fontSize="12" fill="#8B5A2B" opacity="0.7" fontWeight="300">TOGO</text>
            <text x="150" y="30" fontSize="12" fill="#8B5A2B" opacity="0.7" fontWeight="300">BURKINA FASO</text>
            <text x="150" y="640" fontSize="12" fill="#8B5A2B" opacity="0.7" fontWeight="300">GOLFE DE GUINÉE</text>

            {/* Points interactifs pour chaque région artistique */}
            {regions.map((region) => (
              <g key={region.id}>
                {/* Anneau extérieur pulsant */}
                <motion.circle
                  cx={region.position.x}
                  cy={region.position.y}
                  r={hoveredRegion === region.id || selectedRegionId === region.id ? 15 : 8}
                  fill="transparent"
                  stroke={region.color}
                  strokeWidth="1.5"
                  strokeOpacity="0.6"
                  className="cursor-pointer"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.7, 0.3, 0.7],
                  }}
                  transition={{
                    duration: 2,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatType: "loop"
                  }}
                />

                {/* Point principal */}
                <motion.circle
                  cx={region.position.x}
                  cy={region.position.y}
                  r={hoveredRegion === region.id || selectedRegionId === region.id ? 8 : 5}
                  fill={region.color}
                  stroke="#fff"
                  strokeWidth="2"
                  className="cursor-pointer transition-all duration-300"
                  onClick={() => setSelectedRegionId(region.id)}
                  onMouseEnter={() => setHoveredRegion(region.id)}
                  onMouseLeave={() => setHoveredRegion(null)}
                  animate={{
                    scale: hoveredRegion === region.id || selectedRegionId === region.id ? 1.2 : 1
                  }}
                  whileHover={{
                    y: -2,
                    boxShadow: "0 10px 25px -5px rgba(0,0,0,0.1)"
                  }}
                />

                {/* Nom de la région */}
                <motion.g
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: hoveredRegion === region.id || selectedRegionId === region.id ? 1 : 0
                  }}
                  transition={{ duration: 0.2 }}
                >
                  {/* Fond du label */}
                  <rect
                    x={region.position.x - 40}
                    y={region.position.y - 35}
                    width="80"
                    height="22"
                    rx="11"
                    ry="11"
                    fill="#fff"
                    stroke={region.color}
                    strokeWidth="1"
                    className="drop-shadow-sm"
                  />

                  {/* Texte du label */}
                  <text
                    x={region.position.x}
                    y={region.position.y - 20}
                    textAnchor="middle"
                    fontSize="12"
                    fontWeight="600"
                    fill={region.color}
                    className="pointer-events-none select-none"
                  >
                    {region.name}
                  </text>
                </motion.g>

                {/* Ligne connectant le point au label */}
                <motion.line
                  x1={region.position.x}
                  y1={region.position.y - 10}
                  x2={region.position.x}
                  y2={region.position.y - 14}
                  stroke={region.color}
                  strokeWidth="1"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: hoveredRegion === region.id || selectedRegionId === region.id ? 1 : 0
                  }}
                />
              </g>
            ))}

            {/* Boussole décorative */}
            <g transform="translate(60, 60) scale(0.6)">
              <circle cx="0" cy="0" r="20" fill="#fff" fillOpacity="0.8" stroke="#8B5A2B" strokeWidth="1" />
              <path d="M0,-18 L0,18 M-18,0 L18,0" stroke="#8B5A2B" strokeWidth="1" />
              <path d="M0,-15 L5,-5 L0,0 L-5,-5 Z" fill="#D97706" stroke="#8B5A2B" strokeWidth="0.5" />
              <path d="M0,15 L-5,5 L0,0 L5,5 Z" fill="#fff" stroke="#8B5A2B" strokeWidth="0.5" />
              <text x="0" y="-22" textAnchor="middle" fontSize="9" fill="#8B5A2B">N</text>
              <text x="0" y="29" textAnchor="middle" fontSize="9" fill="#8B5A2B">S</text>
              <text x="-22" y="3" textAnchor="middle" fontSize="9" fill="#8B5A2B">O</text>
              <text x="22" y="3" textAnchor="middle" fontSize="9" fill="#8B5A2B">E</text>
            </g>

            {/* Titre de la carte */}
            <text x="240" y="50" textAnchor="end" fontSize="16" fontWeight="bold" fill="#8B5A2B">BÉNIN</text>
            <line x1="160" y1="55" x2="240" y2="55" stroke="#D97706" strokeWidth="2" />
          </svg>
        </div>

        {/* Légende de la carte */}
        <div className="absolute bottom-4 left-4 bg-white/80 backdrop-blur-sm px-4 py-3 rounded-lg shadow-sm border border-amber-100 flex flex-col gap-2">
          <p className="text-sm font-medium text-[#3A2D1E]">Régions artisanales</p>
          <div className="flex flex-wrap gap-3">
            {regions.map((region) => (
              <div
                key={region.id}
                className="flex items-center gap-2 cursor-pointer transition-all"
                onClick={() => setSelectedRegionId(region.id)}
                onMouseEnter={() => setHoveredRegion(region.id)}
                onMouseLeave={() => setHoveredRegion(null)}
              >
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: region.color }}
                />
                <span className="text-xs text-gray-700">{region.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="h-[500px]">
        <AnimatePresence mode="wait">
          {selectedRegion ? (
            <motion.div
              key={selectedRegion.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="h-full"
            >
              <Card className="h-full border-none shadow-xl overflow-hidden bg-white">
                <div className="relative h-48 w-full bg-gradient-to-r from-amber-600 to-amber-800">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-amber-500/90 text-white border-none px-3 py-1">
                      Région
                    </Badge>
                  </div>
                  <div className="absolute bottom-4 left-4 flex items-center gap-2">
                    <motion.div
                      className="w-3 h-12 rounded-full"
                      style={{ backgroundColor: selectedRegion.color }}
                      initial={{ height: 0 }}
                      animate={{ height: 12 }}
                      transition={{ duration: 0.4 }}
                    />
                    <motion.h3
                      className="text-3xl font-bold text-white"
                      initial={{ opacity: 0, x: -5 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.2 }}
                    >
                      {selectedRegion.name}
                    </motion.h3>
                  </div>
                </div>
                <CardContent className="p-6">
                  <motion.p
                    className="text-gray-700 mb-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                  >
                    {selectedRegion.description}
                  </motion.p>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.4 }}
                  >
                    <h4 className="font-semibold text-[#3A2D1E] mb-3 flex items-center">
                      <Palette className="h-4 w-4 mr-2 text-amber-600" />
                      Spécialités artisanales
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedRegion.specialties.map((spec, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: 0.5 + (i * 0.1) }}
                        >
                          <Badge
                            className="bg-amber-100 text-amber-800 hover:bg-amber-200 transition-colors px-3 py-1"
                          >
                            {spec}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <Button className="w-full bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white shadow-md hover:shadow-lg transition-all gap-2">
                    Explorer cette région
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ) : (
            <motion.div
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col items-center justify-center h-full text-center bg-white p-6 rounded-xl shadow-lg border border-amber-100"
            >
              <div className="rounded-full bg-amber-50 p-4 mb-6">
                <MapPin className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold text-[#3A2D1E] mb-3">
                Explorez la carte artisanale
              </h3>
              <p className="text-gray-600 mb-6">
                Cliquez sur une région pour découvrir ses trésors artisanaux et traditions ancestrales
              </p>
              <div className="flex items-center text-amber-600 text-sm animate-pulse">
                <motion.div
                  animate={{
                    x: [0, 5, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatType: "loop"
                  }}
                >
                  <Search className="h-4 w-4 mr-2" />
                </motion.div>
                <span>Sélectionnez une région sur la carte</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}