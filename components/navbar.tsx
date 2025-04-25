// src/components/layout/Navbar.tsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Bell, ChevronDown, Globe, Menu, PenSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@radix-ui/react-accordion";

// Données statiques (à externaliser dans un fichier data.ts si nécessaire)
const ethnicGroups = [
  { name: "Fon", image: "https://images.unsplash.com/photo-1523881374236-dd34f6ac1226?q=80&w=800" },
  { name: "Yoruba", image: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?q=80&w=800" },
  { name: "Bariba", image: "https://images.unsplash.com/photo-1523881374236-dd34f6ac1226?q=80&w=800" },
  { name: "Dendi", image: "https://images.unsplash.com/photo-1523881374236-dd34f6ac1226?q=80&w=800" },
  { name: "Adja", image: "https://images.unsplash.com/photo-1523881374236-dd34f6ac1226?q=80&w=800" },
  { name: "Mahi", image: "https://images.unsplash.com/photo-1523881374236-dd34f6ac1226?q=80&w=800" },
];

const traditions = ["Vaudou", "Divinites", "Rites"];

const sections = [
  { id: "ethnic-groups", title: "Ethnies" },
  { id: "traditions", title: "Traditions" },
  { id: "gastronomie", title: "Gastronomie" },
  { id: "artisanat", title: "Artisanat" },
  { id: "festivals", title: "Festivals" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={cn(
      "fixed w-full z-50 transition-all duration-300",
      isScrolled ? "bg-[#FDF6E3]/90 backdrop-blur-sm shadow-md" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image 
              src="/logo.svg" 
              alt="Bénin Culture" 
              width={40} 
              height={40}
              className="h-10 w-10"
            />
            <span className="text-2xl font-bold text-[#5C4033]">Bénin Culture</span>
          </Link>

          {/* Menu Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Dropdown Ethnies */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="text-[#5C4033] hover:text-[#8B4513]">
                  Ethnies <ChevronDown className="ml-1 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                {ethnicGroups.map((group) => (
                  <Link href={`/ethnies/${group.name.toLowerCase()}`} key={group.name}>
                    <DropdownMenuItem className="flex items-center p-2 cursor-pointer">
                      <Image 
                        src={group.image} 
                        alt={group.name} 
                        width={32} 
                        height={32}
                        className="rounded-full mr-2"
                      />
                      <span>{group.name}</span>
                    </DropdownMenuItem>
                  </Link>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Dropdown Traditions */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="text-[#5C4033] hover:text-[#8B4513]">
                  Traditions <ChevronDown className="ml-1 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {traditions.map((tradition) => (
                  <Link href={`/traditions/${tradition.toLowerCase()}`} key={tradition}>
                    <DropdownMenuItem className="cursor-pointer">
                      {tradition}
                    </DropdownMenuItem>
                  </Link>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Liens directs */}
            <Button asChild variant="ghost" className="text-[#5C4033] hover:text-[#8B4513]">
              <Link href="/gastronomie">Gastronomie</Link>
            </Button>
            <Button asChild variant="ghost" className="text-[#5C4033] hover:text-[#8B4513]">
              <Link href="/artisanat">Artisanat</Link>
            </Button>
            <Button asChild variant="ghost" className="text-[#5C4033] hover:text-[#8B4513]">
              <Link href="/festivals">Festivals</Link>
            </Button>

            {/* CTA */}
            <Button 
              asChild
              variant="outline" 
              className="text-[#5C4033] border-[#5C4033] hover:bg-[#8B4513]/10"
            >
              <Link href="/contribute">
                <PenSquare className="mr-2 h-4 w-4" /> 
                Contribuer
              </Link>
            </Button>

            {/* Icônes */}
            <Button variant="ghost" size="icon" className="text-[#5C4033] hover:text-[#8B4513]">
              <Globe className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-[#5C4033] hover:text-[#8B4513]">
              <Bell className="h-5 w-5" />
            </Button>
          </div>

          {/* Menu Mobile */}

<Sheet>
  <SheetTrigger asChild className="md:hidden">
    <Button variant="ghost" size="icon" className="text-[#5C4033]">
      <Menu className="h-6 w-6" />
    </Button>
  </SheetTrigger>
  <SheetContent side="left" className="bg-[#FDF6E3]">
    <div className="flex flex-col space-y-2 mt-6 ">
      {/* Menu Ethnies mobile */}
      <Accordion type="single" collapsible>
        <AccordionItem value="ethnies">
          <AccordionTrigger className="text-[#5C4033] hover:text-[#8B4513]">
            Ethnies
          </AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-col space-y-2 pl-4 pt-2">
              {ethnicGroups.map((group) => (
                <Link 
                  key={group.name} 
                  href={`/ethnies/${group.name.toLowerCase()}`}
                  className="text-[#5C4033] hover:text-[#8B4513] py-2"
                >
                  {group.name}
                </Link>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Menu Traditions mobile */}
        <AccordionItem value="traditions">
          <AccordionTrigger className="text-[#5C4033] hover:text-[#8B4513] mt-6">
            Traditions
          </AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-col space-y-2 pl-4 pt-2 ">
              {traditions.map((tradition) => (
                <Link
                  key={tradition}
                  href={`/traditions/${tradition.toLowerCase()}`}
                  className="text-[#5C4033] hover:text-[#8B4513] py-2"
                >
                  {tradition}
                </Link>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      {/* Autres liens directs */}
      {sections.slice(2).map((section) => (
        <Link
          key={section.id}
          href={`/${section.id}`}
          className="text-[#5C4033] hover:text-[#8B4513] py-2"
        >
          {section.title}
        </Link>
      ))}

      {/* Bouton Contribuer */}
      <Button 
        asChild
        variant="outline" 
        className="mt-4 text-[#5C4033] border-[#5C4033] hover:bg-[#8B4513]/10"
      >
        <Link href="/contribute">
          <PenSquare className="mr-2 h-4 w-4" /> 
          Contribuer
        </Link>
      </Button>
    </div>
  </SheetContent>
</Sheet>
        </div>
      </div>
    </nav>
  );
}