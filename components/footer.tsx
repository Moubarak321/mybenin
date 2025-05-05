"use client";

import React from "react";

export default function Footer() {
  return (
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
        <div className="mt-12 border-t border-white/20 pt-6 text-center text-sm">
          © {new Date().getFullYear()} Bénin Culture. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
}
