"use client";

import { motion } from "framer-motion";
import { ShoppingCart, Palette, Ruler, MapPin, Star } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const artworks = [
  {
    id: 1,
    title: "Masque Guèlèdè",
    artist: "Atelier Dossou",
    price: 45000,
    currency: "FCFA",
    technique: "Bois sculpté",
    origin: "Abomey",
    rating: 4.8,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Gelede_Mask.jpg/800px-Gelede_Mask.jpg",
    variants: ["Petit", "Moyen", "Grand"],
    inStock: true
  },
  {
    id: 2,
    title: "Tissu Kenta",
    artist: "Artisanes de Bohicon",
    price: 25000,
    currency: "FCFA",
    technique: "Tissage traditionnel",
    origin: "Bohicon",
    rating: 4.5,
    image: "https://www.afrik.com/wp-content/uploads/2020/04/bogolan2.jpg",
    variants: ["1m", "2m", "3m"],
    inStock: true
  },
  {
    id: 3,
    title: "Statue Fa",
    artist: "Maître Hounon",
    price: 75000,
    currency: "FCFA",
    technique: "Bronze à la cire perdue",
    origin: "Ouidah",
    rating: 5.0,
    image: "https://www.bruno-mignot.com/galeries/974/coupe-ancienne-adjere-fa-yoruba-benin-statues-africaines.jpg",
    variants: ["Unique"],
    inStock: false
  },
  {
    id: 4,
    title: "Tableau Vodoun",
    artist: "Adjoke",
    price: 35000,
    currency: "FCFA",
    technique: "Peinture naturelle",
    origin: "Porto-Novo",
    rating: 4.2,
    image: "https://lesateliersouidhart.com/wp-content/uploads/2023/08/Dignitaire-et-Adeptes-Vodoun-LAO-J64-1530x1914.jpg",
    variants: ["30x40cm", "50x70cm"],
    inStock: true
  },
  {
    id: 5,
    title: "Collier Perles",
    artist: "Coopérative Allada",
    price: 12000,
    currency: "FCFA",
    technique: "Perles traditionnelles",
    origin: "Allada",
    rating: 4.7,
    image: "https://image.jimcdn.com/app/cms/image/transf/none/path/s7891419afc9749d0/image/id76daa0b8510c9fd/version/1434989895/image.jpg",
    variants: ["50cm", "60cm"],
    inStock: true
  },
  {
    id: 6,
    title: "Sculpture Zangbeto",
    artist: "Atelier Zinsou",
    price: 68000,
    currency: "FCFA",
    technique: "Bois et pigments",
    origin: "Lokossa",
    rating: 4.9,
    image: "https://galerie-latelier.com/wp-content/uploads/2022/10/fon-zangbeto-fetiche-vaudou-art-africain-1-1024x1024.jpg",
    variants: ["Petite", "Grande"],
    inStock: true
  }
];

export default function ArtGalleryPage() {
  return (
    <div className="bg-[#FAF9F5] min-h-screen py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-[#3A2D1E] mb-4 mt-12">
            Artisanat d'Art du Bénin
          </h1>
          <p className="text-xl text-[#8B5A2B] max-w-2xl mx-auto">
            Acquérez des pièces uniques directement des artisans locaux
          </p>
        </motion.div>

        {/* Filters */}
        <div className="flex flex-wrap justify-between gap-4 mb-12">
          <div className="flex flex-wrap gap-3">
            {["Tous", "Sculptures", "Textiles", "Peintures", "Bijoux"].map((filter) => (
              <Badge
                key={filter}
                variant={filter === "Tous" ? "default" : "outline"}
                className="px-4 py-2 cursor-pointer hover:bg-[#5C4033] hover:text-white"
              >
                {filter}
              </Badge>
            ))}
          </div>
          
          <Select>
            <SelectTrigger className="w-[180px] bg-white">
              <SelectValue placeholder="Trier par" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="price-asc">Prix croissant</SelectItem>
              <SelectItem value="price-desc">Prix décroissant</SelectItem>
              <SelectItem value="popular">Plus populaires</SelectItem>
              <SelectItem value="recent">Plus récents</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Artworks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {artworks.map((artwork) => (
            <motion.div
              key={artwork.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              viewport={{ once: true }}
            >
              <Card className="h-full overflow-hidden border-[#E5E0D6] hover:shadow-lg transition-all">
                <div className="relative h-64">
                  <Image
                    src={artwork.image}
                    alt={artwork.title}
                    fill
                    className="object-cover"
                    style={{ objectPosition: 'center' }}
                  />
                  {!artwork.inStock && (
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                      <span className="bg-white px-3 py-1 rounded-full text-sm font-medium">
                        En rupture
                      </span>
                    </div>
                  )}
                </div>
                
                <CardHeader>
                  <CardTitle className="text-xl text-[#3A2D1E]">
                    {artwork.title}
                  </CardTitle>
                  <div className="flex justify-between items-center">
                    <p className="text-[#8B5A2B]">{artwork.artist}</p>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm">{artwork.rating}</span>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="outline" className="flex items-center gap-1">
                      <Palette className="h-3 w-3" />
                      {artwork.technique}
                    </Badge>
                    <Badge variant="outline" className="flex items-center gap-1">
                      <MapPin className="h-3 w-3" />
                      {artwork.origin}
                    </Badge>
                  </div>
                  
                  <Select>
                    <SelectTrigger className="w-full bg-white">
                      <SelectValue placeholder="Sélectionnez" />
                    </SelectTrigger>
                    <SelectContent>
                      {artwork.variants.map((variant) => (
                        <SelectItem key={variant} value={variant}>
                          {variant}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </CardContent>
                
                <CardFooter className="flex justify-between items-center">
                  <div>
                    <p className="text-lg font-bold text-[#3A2D1E]">
                      {artwork.price.toLocaleString()} {artwork.currency}
                    </p>
                    {artwork.price > 50000 && (
                      <p className="text-xs text-green-600">Livraison offerte</p>
                    )}
                  </div>
                  <Button 
                    disabled={!artwork.inStock}
                    className="gap-2 bg-[#8B5A2B] hover:bg-[#6B4522]"
                  >
                    <ShoppingCart className="h-4 w-4" />
                    Ajouter
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}