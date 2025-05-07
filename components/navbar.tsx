// ****************************************************************************************************************************************************************
//  new code
// ****************************************************************************************************************************************************************
// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { Bell, ChevronDown, Globe, Menu, PenSquare } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";
// import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@radix-ui/react-accordion";

// const Navbar = () => {
//   const [isScrolled] = useState(true);

//   return (
//     <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? "bg-[#FDF6E3]/90 backdrop-blur-sm shadow-md" : "bg-transparent"}`}>
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-16">
//           {/* Logo */}
//           <Link href="/" className="flex items-center gap-2">
//             <Image src="/logo.png" alt="Bénin Culture" width={70} height={50}  />
//             {/* <span className="text-2xl font-bold text-[#5C4033]">Ayizɔn</span> */}
//           </Link>

//           {/* Menu Desktop */}
//           <div className="hidden md:flex items-center space-x-4">
//             {/* Dropdown Explorer */}
//             <DropdownMenu>
//               <DropdownMenuTrigger asChild>
//                 <Button variant="ghost" className="text-[#5C4033] hover:text-[#8B4513]">
//                   Explorer le Bénin <ChevronDown className="ml-1 h-4 w-4" />
//                 </Button>
//               </DropdownMenuTrigger>
//               <DropdownMenuContent className="w-56">
//                 <Link href="/ethnies"><DropdownMenuItem>Ethnies</DropdownMenuItem></Link>
//                 <Link href="/traditions"><DropdownMenuItem>Traditions</DropdownMenuItem></Link>
//                 <Link href="/gastronomie"><DropdownMenuItem>Gastronomie</DropdownMenuItem></Link>
//                 <Link href="/artisanat"><DropdownMenuItem>Artisanat</DropdownMenuItem></Link>
//                 <Link href="/festivals"><DropdownMenuItem>Festivals</DropdownMenuItem></Link>
//                 <Link href="/tourisme"><DropdownMenuItem>Tourisme</DropdownMenuItem></Link>
//               </DropdownMenuContent>
//             </DropdownMenu>

//             <Button asChild variant="ghost" className="text-[#5C4033] hover:text-[#8B4513]">
//               <Link href="/voyages">Voyages Culturels</Link>
//             </Button>

//             <Button asChild variant="ghost" className="text-[#5C4033] hover:text-[#8B4513]">
//               <Link href="/mon-histoire">Créer mon Histoire</Link>
//             </Button>

//             <Button asChild variant="ghost" className="text-[#5C4033] hover:text-[#8B4513]">
//               <Link href="/communaute">Communauté</Link>
//             </Button>

//             <Button asChild variant="ghost" className="text-[#5C4033] hover:text-[#8B4513]">
//               <Link href="/boutique">Boutique</Link>
//             </Button>

//             <Button asChild variant="outline" className="text-[#5C4033] border-[#5C4033] hover:bg-[#8B4513]/10">
//               <Link href="/contribute">
//                 <PenSquare className="mr-2 h-4 w-4" /> Contribuer
//               </Link>
//             </Button>

//             <Button variant="ghost" size="icon" className="text-[#5C4033] hover:text-[#8B4513]">
//               <Globe className="h-5 w-5" />
//             </Button>
//             <Button variant="ghost" size="icon" className="text-[#5C4033] hover:text-[#8B4513]">
//               <Bell className="h-5 w-5" />
//             </Button>
//           </div>

//           {/* Menu Mobile */}
//           <Sheet>
//             <SheetTrigger asChild className="md:hidden">
//               <Button variant="ghost" size="icon" className="text-[#5C4033]">
//                 <Menu className="h-6 w-6" />
//               </Button>
//             </SheetTrigger>
//             <SheetContent side="left" className="bg-[#FDF6E3]">
//               <div className="flex flex-col space-y-2 mt-6">
//                 <Accordion type="single" collapsible>
//                   <AccordionItem value="explorer">
//                     <AccordionTrigger className="text-[#5C4033] hover:text-[#8B4513]">
//                       Explorer le Bénin
//                     </AccordionTrigger>
//                     <AccordionContent className="pl-4 pt-2">
//                       <Link href="/ethnies" className="py-2 text-[#5C4033] hover:text-[#8B4513]">Ethnies</Link>
//                       <Link href="/traditions" className="py-2 text-[#5C4033] hover:text-[#8B4513]">Traditions</Link>
//                       <Link href="/gastronomie" className="py-2 text-[#5C4033] hover:text-[#8B4513]">Gastronomie</Link>
//                       <Link href="/artisanat" className="py-2 text-[#5C4033] hover:text-[#8B4513]">Artisanat</Link>
//                       <Link href="/festivals" className="py-2 text-[#5C4033] hover:text-[#8B4513]">Festivals</Link>
//                       <Link href="/tourisme" className="py-2 text-[#5C4033] hover:text-[#8B4513]">Tourisme</Link>
//                     </AccordionContent>
//                   </AccordionItem>
//                 </Accordion>

//                 <Link href="/voyages" className="py-2 text-[#5C4033] hover:text-[#8B4513]">Voyages Culturels</Link>
//                 <Link href="/mon-histoire" className="py-2 text-[#5C4033] hover:text-[#8B4513]">Créer mon Histoire</Link>
//                 <Link href="/communaute" className="py-2 text-[#5C4033] hover:text-[#8B4513]">Communauté</Link>
//                 <Link href="/boutique" className="py-2 text-[#5C4033] hover:text-[#8B4513]">Boutique</Link>

//                 <Button asChild variant="outline" className="mt-4 text-[#5C4033] border-[#5C4033] hover:bg-[#8B4513]/10">
//                   <Link href="/contribute">
//                     <PenSquare className="mr-2 h-4 w-4" /> Contribuer
//                   </Link>
//                 </Button>
//               </div>
//             </SheetContent>
//           </Sheet>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;




// ***********************************************************************************************************************************

"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrollY, setScrollY] = useState(0);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      // Update active section based on scroll position only if on home page
      if (isHomePage) {
        const sections = document.querySelectorAll('section[id]');
        sections.forEach(section => {
          const sectionTop = (section as HTMLElement).offsetTop - 100;
          const sectionHeight = (section as HTMLElement).offsetHeight;
          if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            const sectionId = section.getAttribute('id');
            if (sectionId) {
              setActiveSection(sectionId);
            }
          }
        });
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHomePage]);

  // Helper function to generate correct nav links
  const getNavLink = (id: string) => {
    if (isHomePage) {
      return `#${id}`;
    } else {
      return `/#${id}`;
    }
  };

  return (
    <>
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300  bg-white/90 backdrop-blur-md shadow-sm py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-2xl font-bold text-amber-600">BÉNIN</span>
              <span className="text-2xl font-light  text-gray-800">CULTURE</span>
            </Link>
            
            {/* Desktop Menu */}
            <nav className="hidden md:flex items-center gap-8">
              {[
                { name: 'Accueil', id: 'home' },
                { name: 'Découvrir', id: 'discover' },
                { name: 'Expériences', id: 'experiences' },
                { name: 'Événements', id: 'events' },
                { name: 'Témoignages', id: 'testimonials' }
              ].map((item) => (
                <Link 
                  key={item.id}
                  href={getNavLink(item.id)}
                  className={`${activeSection === item.id && isHomePage ? 
                     'text-amber-600 font-medium' : 
                     'text-gray-800'} 
                    hover:text-amber-600 transition-colors`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
            
            <div className="hidden md:flex items-center gap-4">
              <Button variant="ghost" className={`${scrollY > 50 ? 'text-gray-800 hover:text-amber-600' : 'text-white hover:text-amber-600'}`}>
                Se connecter
              </Button>
              <Button className="bg-amber-600 hover:bg-amber-700 text-white">
                Télécharger l'app
              </Button>
            </div>
            
            {/* Mobile menu button */}
            <button 
              className="md:hidden text-amber-600"
              onClick={() => setMobileMenu(true)}
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>
      
      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenu && (
          <motion.div 
            className="fixed inset-0 bg-gray-900/95 z-50 p-4 flex flex-col"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex justify-between items-center">
              <Link href="/" className="flex items-center gap-2">
                <span className="text-2xl font-bold text-amber-600">BÉNIN</span>
                <span className="text-2xl font-light text-white">CULTURE</span>
              </Link>
              <button 
                className="text-white"
                onClick={() => setMobileMenu(false)}
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            
            <nav className="flex flex-col gap-6 mt-12">
              {[
                { name: 'Accueil', id: 'home' },
                { name: 'Découvrir', id: 'discover' },
                { name: 'Expériences', id: 'experiences' },
                { name: 'Événements', id: 'events' },
                { name: 'Témoignages', id: 'testimonials' }
              ].map((item) => (
                <Link 
                  key={item.id}
                  href={getNavLink(item.id)}
                  className={`text-2xl ${activeSection === item.id && isHomePage ? 'text-amber-600 font-medium' : 'text-white'}`}
                  onClick={() => setMobileMenu(false)}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
            
            <div className="mt-auto mb-8 flex flex-col gap-4">
              <Button variant="outline" className="text-white border-white hover:bg-white/10 text-lg py-6">
                Se connecter
              </Button>
              <Button className="bg-amber-600 hover:bg-amber-700 text-white text-lg py-6">
                Télécharger l'app
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;