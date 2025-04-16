"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Bell, ChevronDown, Globe, Menu, PenSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

const carouselImages = [
  {
    url: "https://images.unsplash.com/photo-1523881374236-dd34f6ac1226?q=80&w=2070",
    title: "Traditions Béninoises",
    description: "Découvrez nos riches traditions culturelles"
  },
  {
    url: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?q=80&w=2072",
    title: "Art et Culture",
    description: "L'expression artistique au cœur de notre identité"
  },
  {
    url: "https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?q=80&w=2070",
    title: "Gastronomie",
    description: "Savourez les délices culinaires du Bénin"
  }
];

const ethnicGroups = [
  { name: "Fon", image: "https://images.unsplash.com/photo-1523881374236-dd34f6ac1226?q=80&w=800" },
  { name: "Yoruba", image: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?q=80&w=800" },
  { name: "Bariba", image: "https://images.unsplash.com/photo-1523881374236-dd34f6ac1226?q=80&w=800" },
];

const traditions = ["Vaudou", "Rites", "Contes", "Proverbes"];

const sections = [
  {
    id: "ethnic-groups",
    title: "Ethnies",
    description: "Découvrez les groupes ethniques du Bénin",
    image: "https://images.unsplash.com/photo-1523881374236-dd34f6ac1226?q=80&w=2070",
    content: "Le Bénin abrite de nombreux groupes ethniques dont les Fon, Yoruba, Bariba et bien d'autres..."
  },
  {
    id: "traditions",
    title: "Traditions",
    description: "Vivez nos riches cérémonies culturelles",
    image: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?q=80&w=2072",
    content: "Des cérémonies Vodun aux mariages traditionnels..."
  },
  {
    id: "gastronomy",
    title: "Gastronomie",
    description: "Goûtez aux saveurs du Bénin",
    image: "https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?q=80&w=2070",
    content: "Découvrez nos plats traditionnels comme l'Amiwo, le Wagasi..."
  },
  {
    id: "crafts",
    title: "Artisanat",
    description: "Découvrez notre artisanat traditionnel",
    image: "https://images.unsplash.com/photo-1590845947698-8924d7409b56?q=80&w=2071",
    content: "Explorez notre riche tradition artisanale..."
  },
  {
    id: "festivals",
    title: "Festivals",
    description: "Célébrez nos festivals vibrants",
    image: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?q=80&w=2071",
    content: "Vivez les festivals colorés et expressions artistiques..."
  }
];

export default function Home() {
  const [activeSection, setActiveSection] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHistoryExpanded, setIsHistoryExpanded] = useState(false);
  
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 5000, stopOnInteraction: false })
  ]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#FDF6E3] overflow-x-hidden">
      {/* Navigation */}
      <nav className={cn(
        "fixed w-full z-50 transition-all duration-300",
        isScrolled ? "bg-[#FDF6E3]/90 backdrop-blur-sm shadow-md" : "bg-transparent"
      )}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-[#5C4033]">Bénin Culture</h1>
            </div>
            
            <div className="hidden md:flex items-center space-x-4">
              {/* Ethnies Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="text-[#5C4033] hover:text-[#8B4513]">
                    Ethnies <ChevronDown className="ml-1 h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                  {ethnicGroups.map((group) => (
                    <DropdownMenuItem key={group.name} className="flex items-center p-2">
                      <img src={group.image} alt={group.name} className="w-8 h-8 rounded-full mr-2" />
                      <span>{group.name}</span>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Traditions Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="text-[#5C4033] hover:text-[#8B4513]">
                    Traditions <ChevronDown className="ml-1 h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  {traditions.map((tradition) => (
                    <DropdownMenuItem key={tradition}>
                      {tradition}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Other Navigation Items */}
              <Button variant="ghost" className="text-[#5C4033] hover:text-[#8B4513]">
                Gastronomie
              </Button>
              <Button variant="ghost" className="text-[#5C4033] hover:text-[#8B4513]">
                Artisanat
              </Button>
              <Button variant="ghost" className="text-[#5C4033] hover:text-[#8B4513]">
                Festivals
              </Button>
              <Button variant="ghost" className="text-[#5C4033] hover:text-[#8B4513]">
                Explorer
              </Button>

              {/* Call to Action Buttons */}
              <Button variant="outline" className="text-[#5C4033] border-[#5C4033]">
                <PenSquare className="mr-2 h-4 w-4" /> Contribuer
              </Button>
              <Button variant="ghost" size="icon">
                <Globe className="h-5 w-5 text-[#5C4033]" />
              </Button>
              <Button variant="ghost" size="icon">
                <Bell className="h-5 w-5 text-[#5C4033]" />
              </Button>
            </div>

            <Sheet>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <div className="flex flex-col space-y-4 mt-6">
                  {sections.map((section, index) => (
                    <Button
                      key={section.id}
                      variant="ghost"
                      className="w-full justify-start"
                      onClick={() => setActiveSection(index)}
                    >
                      {section.title}
                    </Button>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>

      {/* Hero Carousel */}
      <div className="relative pt-16">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {carouselImages.map((image, index) => (
              <div key={index} className="flex-[0_0_100%] min-w-0">
                <div className="relative h-[80vh]">
                  <img
                    src={image.url}
                    alt={image.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <div className="text-center text-white">
                      <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl md:text-6xl font-bold mb-4"
                      >
                        {image.title}
                      </motion.h2>
                      <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-xl md:text-2xl"
                      >
                        {image.description}
                      </motion.p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* History Section with Coat of Arms */}
      <section className="py-20 px-4 bg-[#FDF6E3]">
        <div className="max-w-4xl mx-auto text-center">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/7/7e/Coat_of_arms_of_Benin.svg"
            alt="Armoiries du Bénin"
            className="w-48 h-48 mx-auto mb-8"
          />
          <h2 className="text-3xl font-bold text-[#5C4033] mb-6">Histoire du Bénin</h2>
          <div className={cn(
            "text-[#5C4033] transition-all duration-300",
            isHistoryExpanded ? "" : "line-clamp-4"
          )}>
            <p className="mb-4">
              Le Bénin, anciennement connu sous le nom de Dahomey, est un pays riche d'histoire et de traditions. 
              Berceau du vodun et foyer de puissants royaumes précoloniaux, notamment le royaume du Dahomey, 
              le territoire a joué un rôle crucial dans l'histoire de l'Afrique de l'Ouest.
            </p>
            <p className="mb-4">
              Au XIIe siècle, les Fon établissent le puissant royaume d'Abomey, qui devient plus tard le royaume du Dahomey. 
              Ce royaume se distingue par son organisation militaire sophistiquée, incluant les célèbres Amazones, 
              et son système politique centralisé.
            </p>
            <p>
              Le pays a connu plusieurs périodes importantes : l'ère des royaumes précoloniaux, la période coloniale française, 
              l'indépendance en 1960, et une transition réussie vers la démocratie en 1990, faisant du Bénin 
              l'un des premiers pays africains à opérer une transition démocratique pacifique.
            </p>
          </div>
          <Button
            onClick={() => setIsHistoryExpanded(!isHistoryExpanded)}
            className="mt-6 bg-[#8B4513] hover:bg-[#5C4033] text-white"
          >
            {isHistoryExpanded ? "Voir moins" : "Lire plus"}
          </Button>
        </div>
      </section>

      {/* Content Sections */}
      {sections.map((section, index) => (
        <section
          key={section.id}
          id={section.id}
          className={cn(
            "py-20 px-4",
            index % 2 === 0 ? "bg-[#FDF6E3]" : "bg-[#F5E6D3]"
          )}
        >
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-12 items-center"
            >
              <div className={cn(index % 2 === 0 ? "md:order-1" : "md:order-2")}>
                <img
                  src={section.image}
                  alt={section.title}
                  className="rounded-2xl shadow-xl"
                />
              </div>
              <div className={cn(index % 2 === 0 ? "md:order-2" : "md:order-1")}>
                <h2 className="text-4xl font-bold text-[#5C4033] mb-4">{section.title}</h2>
                <p className="text-lg text-[#8B4513] mb-6">{section.description}</p>
                <p className="text-[#5C4033]">{section.content}</p>
                <Button
                  className="mt-6 bg-[#8B4513] hover:bg-[#5C4033] text-white"
                >
                  En Savoir Plus
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      ))}

      {/* Footer */}
      <footer className="bg-[#5C4033] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">À Propos</h3>
              <ul className="space-y-2">
                <li>Notre Mission</li>
                <li>L'Équipe</li>
                <li>Partenaires</li>
                <li>Contact</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Explorer</h3>
              <ul className="space-y-2">
                <li>Carte Interactive</li>
                <li>Événements</li>
                <li>Galerie</li>
                <li>Blog</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Ressources</h3>
              <ul className="space-y-2">
                <li>Bibliothèque</li>
                <li>Documentation</li>
                <li>FAQ</li>
                <li>Guide Touristique</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Suivez-nous</h3>
              <ul className="space-y-2">
                <li>Facebook</li>
                <li>Twitter</li>
                <li>Instagram</li>
                <li>YouTube</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-[#8B4513]">
            <p className="text-center">&copy; 2024 Portail Culturel du Bénin. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}