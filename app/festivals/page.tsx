"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin, Ticket, Clock, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { Progress } from "@/components/ui/progress";

const festivals = [
  {
    id: 1,
    name: "Fête du Vodoun",
    date: "10 Janvier 2024",
    location: "Ouidah",
    description: "Célébration annuelle des traditions vodoun avec cérémonies et danses sacrées",
    image: "https://mediapartbenin.com/upload/images/0111021001698841734.jpeg",
    price: 5000,
    currency: "FCFA",
    ticketsLeft: 15,
    totalTickets: 100,
    category: "Religieux"
  },
  {
    id: 2,
    name: "Festival International de Porto-Novo",
    date: "15-20 Mars 2024",
    location: "Porto-Novo",
    description: "Rencontre des arts et cultures africaines contemporaines",
    image: "https://mediapartbenin.com/upload/images/0111021001698841734.jpeg",
    price: 15000,
    currency: "FCFA",
    ticketsLeft: 42,
    totalTickets: 200,
    category: "Culturel"
  },
  {
    id: 3,
    name: "Gani Festival",
    date: "5 Avril 2024",
    location: "Kandi",
    description: "Célébration traditionnelle Bariba avec courses de chevaux et danses masquées",
    image: "https://mediapartbenin.com/upload/images/0111021001698841734.jpeg",
    price: 3000,
    currency: "FCFA",
    ticketsLeft: 78,
    totalTickets: 150,
    category: "Traditionnel"
  }
];

export default function FestivalsPage() {
  return (
    <div className="bg-[#FFF9F0] min-h-screen py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-[#5C4033] mb-4 mt-12">
            Festivals du Bénin
          </h1>
          <p className="text-xl text-[#8B4513] max-w-2xl mx-auto">
            Vivez l'expérience unique des célébrations culturelles béninoises
          </p>
        </motion.div>

        {/* Filters */}
        <div className="flex flex-wrap gap-3 mb-8 justify-center">
          {["Tous", "Religieux", "Culturel", "Traditionnel"].map((filter) => (
            <Badge
              key={filter}
              variant={filter === "Tous" ? "default" : "outline"}
              className="px-4 py-2 cursor-pointer hover:bg-[#5C4033] hover:text-white"
            >
              {filter}
            </Badge>
          ))}
        </div>


        {/* Festivals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {festivals.map((festival) => (
            <motion.div
              key={festival.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              viewport={{ once: true }}
            >
              <Card className="h-full overflow-hidden border-[#8B4513]/20 hover:shadow-lg transition-shadow">
                <div className="relative h-48">
                  <Image
                    src={festival.image}
                    alt={festival.name}
                    fill
                    className="object-cover"
                  />
                  <Badge className="absolute top-2 right-2 bg-[#5C4033]">
                    {festival.category}
                  </Badge>
                </div>

                <CardHeader>
                  <CardTitle className="text-xl text-[#5C4033]">
                    {festival.name}
                  </CardTitle>
                  <div className="flex flex-wrap gap-4">
                    <div className="flex items-center gap-2 text-sm text-[#8B4513]">
                      <Calendar className="h-4 w-4" />
                      {festival.date}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-[#8B4513]">
                      <MapPin className="h-4 w-4" />
                      {festival.location}
                    </div>
                  </div>
                </CardHeader>

                <CardContent>
                  <p className="text-[#5C4033] mb-4">{festival.description}</p>

                  {/* Ticket Availability */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-[#5C4033]">Billets disponibles</span>
                      <span className="font-medium">
                        {festival.ticketsLeft}/{festival.totalTickets}
                      </span>
                    </div>
                    <Progress
                      value={(festival.ticketsLeft / festival.totalTickets) * 100}
                      className="h-2 bg-[#8B4513]/20 [&>div]:bg-[#5C4033]"
                    />
                  </div>
                </CardContent>

                <CardFooter className="flex justify-between items-center">
                  <div>
                    <p className="text-lg font-bold text-[#5C4033]">
                      {festival.price.toLocaleString()} {festival.currency}
                    </p>
                    {festival.price > 5000 && (
                      <p className="text-xs text-green-600">VIP disponible</p>
                    )}
                  </div>
                  <Button className="gap-2 bg-[#8B4513] hover:bg-[#5C4033]">
                    <Ticket className="h-4 w-4" />
                    Acheter
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-16 text-center"
        >
          <h2 className="text-2xl font-bold text-[#5C4033] mb-4">
            Vous organisez un festival ?
          </h2>
          <Button variant="outline" className="border-[#5C4033] text-[#5C4033]">
            Proposer un événement
          </Button>
        </motion.div>
      </div>
    </div>
  );
}