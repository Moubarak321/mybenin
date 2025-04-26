
"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Bell, ChevronDown, Globe, Menu, PenSquare, MapPin, Users, Crown, Music2, Utensils, Palette } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

import { PlayCircle, Headphones, Pause, Volume2 } from "lucide-react";
import ReactPlayer from 'react-player';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

// ... (previous imports and constants remain the same until ethnicGroups)

const fonEthnicGroup = {
  overview: {
    population: "Environ 3,5 millions",
    location: "Sud du Bénin, principalement dans les départements du Zou, de l'Atlantique et du Littoral",
    language: "Fongbe (langue Gbe)",
    religion: "Vodun traditionnel, Christianisme, Islam",
  },
  history: [
    {
      period: "XIIe siècle",
      event: "Migration vers la région d'Allada",
    },
    {
      period: "XVIIe siècle",
      event: "Établissement du Royaume d'Abomey",
    },
    {
      period: "XVIIIe-XIXe siècles",
      event: "Apogée du Royaume du Dahomey",
    },
  ],
  traditions: [
    {
      name: "Vodun",
      description: "Religion traditionnelle avec des cérémonies et rituels complexes",
    },
    {
      name: "Fa",
      description: "Système de divination traditionnel",
    },
    {
      name: "Zangbeto",
      description: "Gardiens traditionnels de la nuit",
    },
  ],
  culture: {
    music: [
      "Tambours parlants",
      "Chants traditionnels",
      "Musique de cour royale",
    ],
    dance: [
      "Agbadja",
      "Adjogan",
      "Zinli",
    ],
    crafts: [
      "Tissage",
      "Sculpture sur bois",
      "Appliqués de Abomey",
    ],
  },
  cuisine: [
    {
      name: "Amala",
      description: "Pâte de manioc fermentée",
    },
    {
      name: "Sauce Fon",
      description: "Préparation à base de légumes et viande",
    },
    {
      name: "Akassa",
      description: "Pâte de maïs fermentée",
    },
  ],
};

// ... (previous constants remain the same)

export default function Home() {
  // ... (previous state declarations and useEffect remain the same)
  const audioRef = useRef<HTMLAudioElement>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentAudio, setCurrentAudio] = useState<string>("");
  
  function toggleAudio(audioSrc: string): void {
    if (currentAudio === audioSrc) {
      setIsPlaying(!isPlaying);
    } else {
      setCurrentAudio(audioSrc);
      setIsPlaying(true);
    }
  }

  return (
    <div className="min-h-screen bg-[#FDF6E3] overflow-x-hidden">
      {/* Navigation */}
      {/* ... (previous navigation code remains the same) */}

      {/* Hero Carousel */}
      {/* ... (previous carousel code remains the same) */}

      {/* History Section with Coat of Arms */}
      {/* ... (previous history section remains the same) */}
      <audio 
      ref={audioRef} 
      onEnded={() => {
        setIsPlaying(false);
        setCurrentAudio('');
      }}
    />

      {/* Fon Ethnic Group Overview */}
      <section className="py-20 px-4 bg-[#FDF6E3]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-[#5C4033] mb-4">Le Peuple Fon</h2>
            <p className="text-lg text-[#8B4513]">Découvrez la richesse culturelle du plus grand groupe ethnique du Bénin</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.unsplash.com/photo-1523881374236-dd34f6ac1226?q=80&w=2070"
                alt="Peuple Fon"
                className="rounded-2xl shadow-xl w-full h-[400px] object-cover"
              />
            </motion.div>
            <div className="grid grid-cols-2 gap-4">
              {Object.entries(fonEthnicGroup.overview).map(([key, value], index) => (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full bg-white/80 backdrop-blur-sm border-[#8B4513]/20">
                    <CardHeader>
                      <CardTitle className="text-[#5C4033] capitalize">{key}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-[#8B4513]">{value}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          <Tabs defaultValue="history" className="w-full">
            <TabsList className="w-full justify-start bg-[#8B4513]/10 mb-8">
              <TabsTrigger value="history" className="text-[#5C4033]">Histoire</TabsTrigger>
              <TabsTrigger value="traditions" className="text-[#5C4033]">Traditions</TabsTrigger>
              <TabsTrigger value="culture" className="text-[#5C4033]">Culture</TabsTrigger>
              <TabsTrigger value="cuisine" className="text-[#5C4033]">Cuisine</TabsTrigger>
            </TabsList>

            {/* <TabsContent value="history">
              <div className="grid gap-8">
                {fonEthnicGroup.history.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-4"
                  >
                    <div className="flex-shrink-0 w-32 font-bold text-[#5C4033]">{item.period}</div>
                    <div className="flex-grow">
                      <Card className="bg-white/80 backdrop-blur-sm border-[#8B4513]/20">
                        <CardContent className="pt-6">
                          <p className="text-[#8B4513]">{item.event}</p>
                        </CardContent>
                      </Card>
                    </div>
                  </motion.div>
                ))}
              </div>
            </TabsContent> */}
            <TabsContent value="history">
  <div className="grid gap-8">
    {fonEthnicGroup.history.map((item, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: index * 0.1 }}
        viewport={{ once: true }}
        className="flex items-start gap-4"
      >
        <div className="flex-shrink-0 w-32 font-bold text-[#5C4033]">{item.period}</div>
        <div className="flex-grow space-y-4">
          <Card className="bg-white/80 backdrop-blur-sm border-[#8B4513]/20">
            <CardContent className="pt-6">
              <p className="text-[#8B4513]">{item.event}</p>
              
              {/* Ajout des contrôles média */}
              <div className="flex gap-4 mt-4">
                {/* Bouton Audio */}
                <Button
                  variant="outline"
                  size="sm"
                  className="flex items-center gap-2 text-[#5C4033] border-[#8B4513]"
                  onClick={() => toggleAudio(`/audio/history-${index}.mp3`)}
                >
                  {currentAudio === `/audio/history-${index}.mp3` && isPlaying ? (
                    <Pause className="h-4 w-4" />
                  ) : (
                    <Headphones className="h-4 w-4" />
                  )}
                  Écouter
                </Button>
                
                {/* Bouton Vidéo */}
                {index === 0 && ( // Exemple: seulement pour le premier élément
                  <ReactPlayer
                    url="/videos/history-dahomey.mp4"
                    width="100%"
                    height="auto"
                    controls
                    light={true}
                    playIcon={
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex items-center gap-2 text-[#5C4033] border-[#8B4513]"
                      >
                        <PlayCircle className="h-4 w-4" />
                        Regarder
                      </Button>
                    }
                  />
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </motion.div>
    ))}
  </div>
</TabsContent>

            {/* <TabsContent value="traditions">
              <div className="grid md:grid-cols-3 gap-8">
                {fonEthnicGroup.traditions.map((tradition, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="h-full bg-white/80 backdrop-blur-sm border-[#8B4513]/20">
                      <CardHeader>
                        <CardTitle className="text-[#5C4033]">{tradition.name}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-[#8B4513]">{tradition.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent> */}
            <TabsContent value="traditions">
  <div className="grid md:grid-cols-3 gap-8">
    {fonEthnicGroup.traditions.map((tradition, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: index * 0.1 }}
        viewport={{ once: true }}
      >
        <Card className="h-full bg-white/80 backdrop-blur-sm border-[#8B4513]/20">
          <CardHeader>
            <CardTitle className="text-[#5C4033]">{tradition.name}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-[#8B4513]">{tradition.description}</p>
            
            {/* Contrôles média */}
            <div className="flex gap-3">
              <Button
                variant="outline"
                size="sm"
                className="flex items-center gap-1 text-[#5C4033] border-[#8B4513]"
                onClick={() => toggleAudio(`/audio/tradition-${index}.mp3`)}
              >
                {currentAudio === `/audio/tradition-${index}.mp3` && isPlaying ? (
                  <Pause className="h-4 w-4" />
                ) : (
                  <Volume2 className="h-4 w-4" />
                )}
                Audio
              </Button>
              
              <ReactPlayer
                url={`/videos/tradition-${index}.mp4`}
                width="100%"
                height="auto"
                controls
                light={true}
                playIcon={
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex items-center gap-1 text-[#5C4033] border-[#8B4513]"
                  >
                    <PlayCircle className="h-4 w-4" />
                    Vidéo
                  </Button>
                }
              />
            </div>
          </CardContent>
        </Card>
      </motion.div>
    ))}
  </div>
</TabsContent>

            <TabsContent value="culture">
              <div className="grid md:grid-cols-3 gap-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full bg-white/80 backdrop-blur-sm border-[#8B4513]/20">
                    <CardHeader>
                      <CardTitle className="text-[#5C4033] flex items-center gap-2">
                        <Music2 className="h-5 w-5" /> Musique
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc list-inside text-[#8B4513] space-y-2">
                        {fonEthnicGroup.culture.music.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full bg-white/80 backdrop-blur-sm border-[#8B4513]/20">
                    <CardHeader>
                      <CardTitle className="text-[#5C4033]">Danse</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc list-inside text-[#8B4513] space-y-2">
                        {fonEthnicGroup.culture.dance.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full bg-white/80 backdrop-blur-sm border-[#8B4513]/20">
                    <CardHeader>
                      <CardTitle className="text-[#5C4033] flex items-center gap-2">
                        <Palette className="h-5 w-5" /> Artisanat
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc list-inside text-[#8B4513] space-y-2">
                        {fonEthnicGroup.culture.crafts.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </TabsContent>

            <TabsContent value="cuisine">
              <div className="grid md:grid-cols-3 gap-8">
                {fonEthnicGroup.cuisine.map((dish, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="h-full bg-white/80 backdrop-blur-sm border-[#8B4513]/20">
                      <CardHeader>
                        <CardTitle className="text-[#5C4033] flex items-center gap-2">
                          <Utensils className="h-5 w-5" /> {dish.name}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-[#8B4513]">{dish.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Content Sections */}
      {/* ... (previous sections code remains the same) */}

      {/* Footer */}
      {/* ... (previous footer code remains the same) */}
    </div>
  );
}