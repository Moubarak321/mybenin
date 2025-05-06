// "use client";

// import React from "react";

// export default function Footer() {
//   return (
//     <footer className="bg-[#5C4033] text-white py-12">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
//           <div>
//             <h3 className="text-xl font-bold mb-4">À Propos</h3>
//             <ul className="space-y-2">
//               <li>Notre Mission</li>
//               <li>L'Équipe</li>
//               <li>Partenaires</li>
//               <li>Contact</li>
//             </ul>
//           </div>
//           <div>
//             <h3 className="text-xl font-bold mb-4">Explorer</h3>
//             <ul className="space-y-2">
//               <li>Carte Interactive</li>
//               <li>Événements</li>
//               <li>Galerie</li>
//               <li>Blog</li>
//             </ul>
//           </div>
//           <div>
//             <h3 className="text-xl font-bold mb-4">Ressources</h3>
//             <ul className="space-y-2">
//               <li>Bibliothèque</li>
//               <li>Documentation</li>
//               <li>FAQ</li>
//               <li>Guide Touristique</li>
//             </ul>
//           </div>
//           <div>
//             <h3 className="text-xl font-bold mb-4">Suivez-nous</h3>
//             <ul className="space-y-2">
//               <li>Facebook</li>
//               <li>Twitter</li>
//               <li>Instagram</li>
//               <li>YouTube</li>
//             </ul>
//           </div>
//         </div>
//         <div className="mt-12 border-t border-white/20 pt-6 text-center text-sm">
//           © {new Date().getFullYear()} Bénin Culture. Tous droits réservés.
//         </div>
//       </div>
//     </footer>
//   );
// }



// ************************************************************************************************************************************


"use client";
import React from 'react';
import { ArrowRight, Instagram, Facebook, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-20 pb-10 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-6">
              <span className="text-2xl font-bold text-amber-500">BÉNIN</span>
              <span className="text-2xl font-light text-white">CULTURE</span>
            </Link>
            <p className="text-gray-400 mb-6">
              Connectez-vous à vos racines culturelles avec la première application immersive dédiée au patrimoine béninois.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-amber-600 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-amber-600 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-amber-600 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">Exploration</h3>
            <ul className="space-y-4">
              {['Tourisme', 'Ethnies', 'Spiritualité', 'Artisanat', 'Gastronomie'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">Informations</h3>
            <ul className="space-y-4">
              {['À propos', 'Nos partenaires', 'Témoignages', 'Médias', 'Contactez-nous'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Inscrivez-vous pour recevoir nos actualités culturelles
            </p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Votre email" 
                className="px-4 py-3 bg-gray-800 border border-gray-700 rounded-l-lg focus:outline-none focus:ring-1 focus:ring-amber-500 flex-grow"
              />
              <Button className="bg-amber-600 hover:bg-amber-700 rounded-l-none">
                <ArrowRight className="h-5 w-5" />
              </Button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 mt-12 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © 2025 Bénin Culture. Tous droits réservés.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-500 text-sm hover:text-amber-500 transition-colors">Politique de confidentialité</a>
            <a href="#" className="text-gray-500 text-sm hover:text-amber-500 transition-colors">Conditions d'utilisation</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;