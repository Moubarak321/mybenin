"use client";

import { motion } from "framer-motion";
import { MapPin, Calendar, Users, Star, ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const tourismPackages = [
  {
    id: 1,
    title: "Découverte du Pays Tanguiéta",
    description: "Explorez les parcs nationaux de la Pendjari et de la W avec un guide expérimenté",
    duration: "3 jours",
    groupSize: "4-12 personnes",
    price: 125000,
    currency: "FCFA",
    rating: 4.8,
    image: "https://www.gouv.bj/upload/images/articles/ckeditor/Tangui%C3%A9ta(1).jpg",
    highlights: ["Safari photo", "Rencontre avec les communautés locales", "Hébergement en lodge"]
  },
  {
    id: 2,
    title: "Circuit Culturel Ouidah",
    description: "Immersion dans l'histoire et la culture du Bénin à travers ses sites historiques",
    duration: "2 jours",
    groupSize: "2-8 personnes",
    price: 75000,
    currency: "FCFA",
    rating: 4.9,
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/21/0d/ab/49/slave-route-view-from.jpg?w=1200&h=700&s=1",
    highlights: ["Route des esclaves", "Temple des Pythons", "Musée d'histoire"]
  },
  {
    id: 3,
    title: "Aventure Lac Nokoué",
    description: "Excursion en pirogue sur le lac Nokoué et découverte des villages sur pilotis",
    duration: "1 jour",
    groupSize: "2-6 personnes",
    price: 45000,
    currency: "FCFA",
    rating: 4.7,
    image: "https://lanation.bj/storage/assets/2023/07/BQt67qEpL0eUZ9zk_LAC_NOKOUE.jfif.jfif",
    highlights: ["Visite de Ganvié", "Pêche traditionnelle", "Dégustation de cuisine locale"]
  },
  {
    id: 4,
    title: "Randonnée à la Montagne Sacrée",
    description: "Ascension de la montagne sacrée d'Abomey avec un guide local",
    duration: "1 jour",
    groupSize: "4-10 personnes",
    price: 35000,
    currency: "FCFA",
    rating: 4.5,
    image: "https://www.ouadada.com/wp-content/uploads/2024/06/ouadada-palais-abomey-11.jpg",
    highlights: ["Vues panoramiques", "Histoire royale", "Rencontre spirituelle"]
  }
];

const carouselImages = [
  "https://www.banouto.bj/images/imagekit/mobile/w780/place-amazone-cotonou",
  "https://www.ouadada.com/wp-content/uploads/2024/06/ouadada-palais-abomey-11.jpg",
  "https://lanation.bj/storage/assets/2023/07/BQt67qEpL0eUZ9zk_LAC_NOKOUE.jfif.jfif",
  "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/21/0d/ab/49/slave-route-view-from.jpg?w=1200&h=700&s=1",
];

export default function TourismPage() {
  return (
    <div className="min-h-screen bg-[#FFF9F0] py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-[#5C4033] mb-4">
            Découvrez le Bénin Autrement
          </h1>
          <p className="text-xl text-[#8B4513] max-w-3xl mx-auto">
            Des expériences uniques avec nos guides et partenaires locaux
          </p>
        </motion.div>

        {/* Image Carousel */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mb-16"
        >
          <Carousel className="w-full rounded-xl overflow-hidden shadow-lg">
            <CarouselContent>
              {carouselImages.map((image, index) => (
                <CarouselItem key={index}>
                  <div className="relative h-96">
                    <Image
                      src={image}
                      alt={`Découverte Bénin ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4" />
            <CarouselNext className="right-4" />
          </Carousel>
        </motion.div>

        {/* Packages Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-[#5C4033] mb-8 text-center">
            Nos Packages Touristiques
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tourismPackages.map((packageItem) => (
              <motion.div
                key={packageItem.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                viewport={{ once: true }}
              >
                <Card className="h-full flex flex-col border-[#8B4513]/20 hover:shadow-xl transition-shadow">
                  <div className="relative h-48">
                    <Image
                      src={packageItem.image}
                      alt={packageItem.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-2 right-2 bg-white/90 px-2 py-1 rounded-full flex items-center">
                      <Star className="h-4 w-4 text-yellow-500 fill-yellow-500 mr-1" />
                      <span className="text-sm font-medium">{packageItem.rating}</span>
                    </div>
                  </div>

                  <CardHeader>
                    <CardTitle className="text-xl text-[#5C4033]">
                      {packageItem.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="flex-grow">
                    <p className="text-[#5C4033] mb-4">{packageItem.description}</p>
                    
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-sm text-[#8B4513]">
                        <Calendar className="h-4 w-4" />
                        <span>{packageItem.duration}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-[#8B4513]">
                        <Users className="h-4 w-4" />
                        <span>Groupe: {packageItem.groupSize}</span>
                      </div>
                      
                      <div className="mt-3">
                        <h4 className="font-medium text-[#5C4033] mb-1">Points forts:</h4>
                        <ul className="space-y-1 text-sm text-[#5C4033]">
                          {packageItem.highlights.map((item, idx) => (
                            <li key={idx} className="flex items-start">
                              <span className="mr-2">•</span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>

                  <CardFooter className="flex justify-between items-center">
                    <div>
                      <p className="text-lg font-bold text-[#5C4033]">
                        {packageItem.price.toLocaleString()} {packageItem.currency}
                      </p>
                      <p className="text-xs text-green-600">Tout compris</p>
                    </div>
                    <Button className="gap-2 bg-[#8B4513] hover:bg-[#5C4033]">
                      Réserver
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Partners Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="bg-white rounded-xl p-8 shadow-sm mb-16"
        >
          <h2 className="text-2xl font-bold text-[#5C4033] mb-6 text-center">
            Nos Partenaires Touristiques
          </h2>
          <div className="flex flex-wrap justify-center gap-8">
            {[
              "Agences de voyage",
              "Guides certifiés",
              "Gestionnaires de parcs",
              "Hôtels & Lodges",
              "Communautés locales"
            ].map((partner, index) => (
              <div key={index} className="flex items-center gap-3 px-4 py-2 bg-[#FFF9F0] rounded-full">
                <div className="h-8 w-8 rounded-full bg-[#8B4513]/10 flex items-center justify-center">
                  <MapPin className="h-4 w-4 text-[#8B4513]" />
                </div>
                <span className="text-[#5C4033] font-medium">{partner}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="bg-[#5C4033] rounded-xl p-8 text-center text-white"
        >
          <h2 className="text-2xl font-bold mb-4">
            Vous proposez des services touristiques ?
          </h2>
          <p className="mb-6 max-w-2xl mx-auto">
            Rejoignez notre réseau de partenaires et faites découvrir vos offres à des milliers de visiteurs.
          </p>
          <Button variant="outline" className="border-white text-[#5C4033] hover:bg-white/10">
            Devenir partenaire
          </Button>
        </motion.div>
      </div>
    </div>
  );
}