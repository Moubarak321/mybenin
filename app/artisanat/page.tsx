"use client";
import React, { useState, useEffect } from 'react';
import { ChevronRight, MapPin, Star, Users, Calendar, Heart, Eye, ShoppingBag, Camera } from 'lucide-react';
import Link from 'next/link';


interface Category {
  id: string;
  name: string;
  icon: string;
}

interface Artisanat {
  id: number;
  name: string;
  category: string;
  image: string;
  price: string;
  location: string;
  artisan: string;
  description: string;
  rating: number;
  views: number;
}

interface Artisan {
  name: string;
  specialty: string;
  experience: string;
  location: string;
  image: string;
}

const ArtisanatPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [favorites, setFavorites] = useState<Set<number>>(new Set());
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const categories = [
    { id: 'all', name: 'Tout voir', icon: '🎨' },
    { id: 'textile', name: 'Textile & Mode', icon: '🧵' },
    { id: 'sculpture', name: 'Sculpture & Bois', icon: '🪵' },
    { id: 'metallurgie', name: 'Métallurgie', icon: '⚒️' },
    { id: 'poterie', name: 'Poterie', icon: '🏺' },
    { id: 'vannerie', name: 'Vannerie', icon: '🧺' }
  ];

  const artisanats = [
    {
      id: 1,
      name: 'Masques Gelede',
      category: 'sculpture',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop',
      price: '15,000 - 90,000 FCFA',
      location: 'Porto-Novo',
      artisan: 'Maître Adéchina',
      description: 'Masques traditionnels sculptés représentant les ancêtres et les divinités yoruba.',
      rating: 4.8,
      views: 1250
    },
    {
      id: 2,
      name: 'Tissus Kente Royal',
      category: 'textile',
      image: 'https://images.unsplash.com/photo-1594736797933-d0cdb1b4c7e6?w=400&h=300&fit=crop',
      price: '15,000 - 80,000 FCFA',
      location: 'Abomey',
      artisan: 'Coopérative Adjarra',
      description: 'Tissages traditionnels aux motifs royaux, symboles de prestige et d\'héritage culturel.',
      rating: 4.9,
      views: 2100
    },
    {
      id: 3,
      name: 'Bijoux Bronze Dahomey',
      category: 'metallurgie',
      image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=400&h=300&fit=crop',
      price: '8,000 - 45,000 FCFA',
      location: 'Abomey',
      artisan: 'Atelier Houndjro',
      description: 'Bijoux en bronze coulé selon les techniques ancestrales du royaume du Dahomey.',
      rating: 4.7,
      views: 890
    },
    {
      id: 4,
      name: 'Poteries Cérémoniales',
      category: 'poterie',
      image: 'https://images.unsplash.com/photo-1578916171728-46686eac8d58?w=400&h=300&fit=crop',
      price: '5,000 - 35,000 FCFA',
      location: 'Sakété',
      artisan: 'Famille Agbodjan',
      description: 'Jarres et vases traditionnels en terre cuite, décorés de motifs géométriques sacrés.',
      rating: 4.6,
      views: 720
    },
    {
      id: 5,
      name: 'Paniers Tressés',
      category: 'vannerie',
      image: 'https://images.unsplash.com/photo-1586075010923-2dd4570fb338?w=400&h=300&fit=crop',
      price: '3,000 - 20,000 FCFA',
      location: 'Natitingou',
      artisan: 'Groupe Tanguiéta',
      description: 'Vannerie artisanale en fibres de palmier et bambou, aux formes traditionnelles.',
      rating: 4.5,
      views: 650
    },
    {
      id: 6,
      name: 'Sculptures Ébène',
      category: 'sculpture',
      image: 'https://images.unsplash.com/photo-1544967882-c2b6c2827d7b?w=400&h=300&fit=crop',
      price: '20,000 - 200,000 FCFA',
      location: 'Parakou',
      artisan: 'Maître Koudogbo',
      description: 'Statuettes et objets décoratifs sculptés dans l\'ébène massif.',
      rating: 4.9,
      views: 1800
    }
  ];

  const featuredArtisans = [
    {
      name: 'Maître Adéchina Koudogbo',
      specialty: 'Sculpture sur bois',
      experience: '25 ans',
      location: 'Porto-Novo',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face'
    },
    {
      name: 'Maman Adjoa Tissage',
      specialty: 'Textile traditionnel',
      experience: '30 ans',
      location: 'Abomey',
      image: 'https://images.unsplash.com/photo-1494790108755-2616c2e7aeb7?w=150&h=150&fit=crop&crop=face'
    },
    {
      name: 'Papa Houndjro',
      specialty: 'Métallurgie bronze',
      experience: '20 ans',
      location: 'Abomey-Calavi',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
    }
  ];

  const filteredArtisanats = selectedCategory === 'all'
    ? artisanats
    : artisanats.filter(item => item.category === selectedCategory);

  const toggleFavorite = (id: number) => {
    const newFavorites = new Set(favorites);
    if (newFavorites.has(id)) {
      newFavorites.delete(id);
    } else {
      newFavorites.add(id);
    }
    setFavorites(newFavorites);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-orange-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-amber-600 via-orange-600 to-red-600">
        <div className="absolute inset-0 bg-black/20"></div>
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
        <div className="relative max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
          <div className={`text-center transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Artisanat
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300">
                Béninois
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
              Découvrez l'âme créative du Bénin à travers ses artisans d'exception et leurs œuvres authentiques
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-white/80">
              <div className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 backdrop-blur-sm">
                <Users className="w-5 h-5" />
                <span>500+ Artisans</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 backdrop-blur-sm">
                <Star className="w-5 h-5" />
                <span>Patrimoine UNESCO</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 backdrop-blur-sm">
                <MapPin className="w-5 h-5" />
                <span>12 Départements</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Categories Filter */}
      <div className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex overflow-x-auto space-x-2 pb-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full whitespace-nowrap transition-all duration-300 transform hover:scale-105 ${selectedCategory === category.id
                    ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
              >
                <span className="text-xl">{category.icon}</span>
                <span className="font-medium">{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div>
          {/* Artisanat Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {filteredArtisanats.map((item, index) => (
              <div
                key={item.id}
                className={`group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Overlay Buttons */}
                  <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button
                      onClick={() => toggleFavorite(item.id)}
                      className={`p-2 rounded-full backdrop-blur-sm transition-colors duration-200 ${favorites.has(item.id)
                          ? 'bg-red-500 text-white'
                          : 'bg-white/80 text-gray-700 hover:bg-white'
                        }`}
                    >
                      <Heart className={`w-5 h-5 ${favorites.has(item.id) ? 'fill-current' : ''}`} />
                    </button>
                    <button className="p-2 rounded-full bg-white/80 text-gray-700 hover:bg-white backdrop-blur-sm transition-colors duration-200">
                      <Camera className="w-5 h-5" />
                    </button>
                  </div>

                  {/* Views Counter */}
                  <div className="absolute bottom-4 left-4 flex items-center space-x-1 bg-black/50 text-white px-3 py-1 rounded-full text-sm backdrop-blur-sm">
                    <Eye className="w-4 h-4" />
                    <span>{item.views}</span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-amber-600 transition-colors duration-200">
                      {item.name}
                    </h3>
                    <div className="flex items-center space-x-1 text-amber-500">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="text-sm font-medium">{item.rating}</span>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-4 leading-relaxed">{item.description}</p>

                  <div className="space-y-3">
                    <div className="flex items-center text-sm text-gray-500">
                      <MapPin className="w-4 h-4 mr-2 text-amber-500" />
                      <span className="font-medium">{item.location}</span>
                      <span className="mx-2">•</span>
                      <span>{item.artisan}</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-lg font-bold text-amber-600">{item.price}</span>
                      <Link href="/artisanat/details">
                        <button className="flex items-center space-x-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-4 py-2 rounded-lg hover:shadow-lg transition-all duration-200 transform hover:scale-105">
                          <ShoppingBag className="w-4 h-4" />
                          <span>Voir détails</span>
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Featured Artisans Section */}
          <div className="bg-white rounded-3xl shadow-lg p-8 mb-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Artisans d'<span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">Exception</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Rencontrez les maîtres artisans qui perpétuent les traditions séculaires du Bénin
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredArtisans.map((artisan, index) => (
                <div
                  key={index}
                  className="text-center group cursor-pointer"
                >
                  <div className="relative mb-6 mx-auto w-32 h-32">
                    <img
                      src={artisan.image}
                      alt={artisan.name}
                      className="w-full h-full rounded-full object-cover border-4 border-amber-200 group-hover:border-amber-400 transition-colors duration-300"
                    />
                    <div className="absolute inset-0 rounded-full bg-gradient-to-t from-amber-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-amber-600 transition-colors duration-200">
                    {artisan.name}
                  </h3>
                  <p className="text-amber-600 font-medium mb-1">{artisan.specialty}</p>
                  <p className="text-gray-500 text-sm mb-2">{artisan.experience} d'expérience</p>
                  <div className="flex items-center justify-center text-gray-500 text-sm">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span>{artisan.location}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-amber-600 to-orange-600 rounded-3xl p-8 md:p-12 text-center text-white relative overflow-hidden">
            <div
              className="absolute inset-0 opacity-30"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='4' cy='4' r='2'/%3E%3Ccircle cx='12' cy='12' r='2'/%3E%3Ccircle cx='20' cy='20' r='2'/%3E%3Ccircle cx='28' cy='28' r='2'/%3E%3Ccircle cx='36' cy='36' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}
            ></div>

            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Visitez nos Ateliers d'Artisans
              </h2>
              <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                Découvrez les secrets de fabrication en rencontrant directement nos artisans dans leurs ateliers
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-amber-600 px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center space-x-2">
                  <Calendar className="w-5 h-5" />
                  <span>Réserver une visite</span>
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-amber-600 transition-all duration-200 flex items-center justify-center space-x-2">
                  <MapPin className="w-5 h-5" />
                  <span>Carte des ateliers</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtisanatPage;