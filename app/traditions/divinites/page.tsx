"use client";
import { motion } from "framer-motion";
import { Droplet, Flame, Leaf, Zap, Skull, Waves } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

const divinities = [
  {
    name: "Heviosso",
    domain: "Tonnerre & Justice",
    symbol: "Foudre",
    power: "Contrôle les éléments",
    icon: <Zap className="text-yellow-500" />,
    color: "bg-yellow-50",
    image: "/heviosso.jpg"
  },
  {
    name: "Mami Wata",
    domain: "Eaux & Fertilité",
    symbol: "Serpent",
    power: "Guérison mystique",
    icon: <Waves className="text-blue-500" />,
    color: "bg-blue-50",
    image: "/mami-wata.jpg"
  },
  {
    name: "Sakpata",
    domain: "Terre & Maladies",
    symbol: "Terre cuite",
    power: "Protection contre les épidémies",
    icon: <Skull className="text-red-500" />,
    color: "bg-red-50",
    image: "/sakpata.jpg"
  },
  {
    name: "Dan",
    domain: "Serpent Arc-en-Ciel",
    symbol: "Python",
    power: "Sagesse ancestrale",
    icon: <Droplet className="text-green-500" />,
    color: "bg-green-50",
    image: "/dan.jpg"
  },
  {
    name: "Gou",
    domain: "Guerre & Métal",
    symbol: "Épée",
    power: "Force invincible",
    icon: <Flame className="text-orange-500" />,
    color: "bg-orange-50",
    image: "/gou.jpg"
  },
  {
    name: "Lègba",
    domain: "Communication",
    symbol: "Porte",
    power: "Intermédiaire divin",
    icon: <Leaf className="text-purple-500" />,
    color: "bg-purple-50",
    image: "/legba.jpg"
  }
];

export default function DivinitiesPage() {
  return (
    <div className="bg-[#FAF7F0] min-h-screen py-12 px-4 py-12">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-[#3A2D1E] mb-4 mt-12">
            Panthéon Vodoun
          </h1>
          <p className="text-xl text-[#8B5A2B] max-w-2xl mx-auto">
            Explorez les puissances sacrées qui gouvernent l'univers Vodoun
          </p>
        </motion.div>

        {/* Divinities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {divinities.map((divinity, index) => (
            <motion.div
              key={divinity.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className={`h-full overflow-hidden border-none ${divinity.color}`}>
                <div className="relative h-48">
                  <Image
                    src={divinity.image}
                    alt={divinity.name}
                    fill
                    className="object-cover"
                    style={{ objectPosition: 'top center' }}
                  />
                </div>
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-white shadow-md mt-1">
                      {divinity.icon}
                    </div>
                    <div>
                      <CardTitle className="text-2xl text-[#3A2D1E]">
                        {divinity.name}
                      </CardTitle>
                      <p className="text-[#8B5A2B] font-medium">
                        {divinity.domain}
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm text-[#3A2D1E]/80">Symbole</p>
                      <Badge variant="outline" className="bg-white/80">
                        {divinity.symbol}
                      </Badge>
                    </div>
                    <div>
                      <p className="text-sm text-[#3A2D1E]/80">Pouvoir</p>
                      <p className="text-[#3A2D1E]">{divinity.power}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}