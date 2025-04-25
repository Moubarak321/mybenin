"use client";

import { motion } from "framer-motion";
import { Drum, Moon, Sun, Flame, Shield, Leaf } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

const rites = [
  {
    name: "Zangbeto",
    description: "Cérémonie des gardiens de la nuit",
    icon: <Moon className="text-purple-600" />,
    tags: ["Protection", "Danse"],
    region: "Ouidah",
    image: "/zangbeto.jpg"
  },
  {
    name: "Holi",
    description: "Rituel de purification par le feu",
    icon: <Flame className="text-red-500" />,
    tags: ["Purification", "Feu"],
    region: "Abomey",
    image: "/holi.jpg"
  },
  {
    name: "Dan Tohossou",
    description: "Culte des ancêtres royaux",
    icon: <Shield className="text-gold-500" />,
    tags: ["Ancêtres", "Royauté"],
    region: "Allada",
    image: "/dan-tohossou.jpg"
  },
  {
    name: "Tchinckouin",
    description: "Rituel de guérison par les plantes",
    icon: <Leaf className="text-green-500" />,
    tags: ["Médecine", "Nature"],
    region: "Savè",
    image: "/tchinckouin.jpg"
  },
  {
    name: "Hounto",
    description: "Initiation des adeptes",
    icon: <Drum className="text-orange-500" />,
    tags: ["Initiation", "Musique"],
    region: "Porto-Novo",
    image: "/hounto.jpg"
  },
  {
    name: "Tohossou",
    description: "Communication avec les divinités",
    icon: <Sun className="text-blue-500" />,
    tags: ["Divination", "Eau"],
    region: "Grand-Popo",
    image: "/tohossou.jpg"
  }
];

export default function RitesPage() {
  return (
    <div className="bg-[#FAF5E9] min-h-screen py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-[#5C4033] mb-4">
            Cérémonies Vodoun
          </h1>
          <p className="text-xl text-[#8B4513] max-w-2xl mx-auto">
            Découvrez les rites sacrés qui rythment la vie spirituelle du Bénin
          </p>
        </motion.div>

        {/* Filters */}
        <div className="flex flex-wrap gap-4 mb-12 justify-center">
          {["Toutes", "Initiation", "Purification", "Danse", "Guérison"].map((filter) => (
            <Badge
              key={filter}
              variant="outline"
              className="px-4 py-2 cursor-pointer hover:bg-[#5C4033] hover:text-white"
            >
              {filter}
            </Badge>
          ))}
        </div>

        {/* Ceremonies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rites.map((ceremony, index) => (
            <motion.div
              key={ceremony.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-[#8B4513]/20 overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48">
                  <Image
                    src={ceremony.image}
                    alt={ceremony.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-full bg-[#5C4033]/10">
                      {ceremony.icon}
                    </div>
                    <CardTitle className="text-[#5C4033]">
                      {ceremony.name}
                    </CardTitle>
                  </div>
                  <p className="text-sm text-[#8B4513]">{ceremony.region}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-[#5C4033] mb-4">{ceremony.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {ceremony.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="bg-[#8B4513]/10 text-[#5C4033]"
                      >
                        {tag}
                      </Badge>
                    ))}
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