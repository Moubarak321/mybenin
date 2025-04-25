"use client";

import { motion } from "framer-motion";
import { Drum, Flame, Leaf, Moon, ScrollText, Sparkles, Users } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const vodounData = {
  overview: {
    title: "Le Vodoun, Âme Culturelle du Bénin",
    description: "Religion ancestrale et système philosophique vivant",
    stats: [
      { label: "Origine", value: "XIIe siècle", icon: <ScrollText /> },
      { label: "Croyants", value: "40% des Béninois", icon: <Users /> },
      { label: "Patrimoine UNESCO", value: "Depuis 2023", icon: <Sparkles /> }
    ]
  },
  divinities: [
    {
      name: "Heviosso",
      role: "Dieu du tonnerre",
      symbol: "Foudre",
      color: "bg-yellow-100"
    },
    {
      name: "Mami Wata",
      role: "Divinité des eaux",
      symbol: "Serpent",
      color: "bg-blue-100"
    },
    {
      name: "Sakpata",
      role: "Dieu de la terre",
      symbol: "Terre cuite",
      color: "bg-red-100"
    }
  ],
  rites: [
    {
      name: "Zangbeto",
      description: "Gardiens de la nuit",
      image: "/zangbeto.jpg"
    },
    {
      name: "Oro",
      description: "Rituel de purification",
      image: "/oro.jpg"
    }
  ]
};

export default function VodounPage() {
  return (
    <div className="bg-[#FAF5E9] min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <Image
          src="https://static.lpnt.fr/images/2018/01/10/12777012lpaw-12805711-embed-libre-jpg_4903602.jpg"
          alt="Cérémonie Vodoun"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center text-white p-6"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              {vodounData.overview.title}
            </h1>
            <p className="text-xl max-w-2xl mx-auto">
              {vodounData.overview.description}
            </p>
          </motion.div>
        </div>
      </div>

      {/* Stats Overview */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {vodounData.overview.stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-[#8B4513]/20 bg-white/80 backdrop-blur-sm">
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="p-3 rounded-full bg-[#5C4033] text-white">
                    {stat.icon}
                  </div>
                  <div>
                    <CardTitle className="text-[#5C4033]">
                      {stat.value}
                    </CardTitle>
                    <p className="text-[#8B4513]">{stat.label}</p>
                  </div>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Main Content */}
      <section className="pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          <Tabs defaultValue="divinities" className="w-full">
            <TabsList className="bg-[#5C4033] text-white mb-12">
              <TabsTrigger value="history">Histoire</TabsTrigger>
              <TabsTrigger value="divinities">Divinités</TabsTrigger>
              <TabsTrigger value="rites">Rites</TabsTrigger>
            </TabsList>

            {/* Divinités Tab */}
            <TabsContent value="divinities">
              <div className="grid md:grid-cols-3 gap-8">
                {vodounData.divinities.map((divinity, index) => (
                  <motion.div
                    key={divinity.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className={`h-full ${divinity.color} border-none`}>
                      <CardHeader>
                        <CardTitle className="text-2xl text-[#5C4033]">
                          {divinity.name}
                        </CardTitle>
                        <p className="text-[#8B4513] font-medium">
                          {divinity.role}
                        </p>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center gap-2">
                          <Flame className="text-[#5C4033]" />
                          <span>Symbole : {divinity.symbol}</span>
                        </div>
                        <Button className="mt-4 bg-[#5C4033] hover:bg-[#8B4513]">
                          En savoir plus
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            {/* Cérémonies Tab */}
            <TabsContent value="rites">
              <div className="grid md:grid-cols-2 gap-8">
                {vodounData.rites.map((rite, index) => (
                  <motion.div
                    key={rite.name}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="relative h-96 rounded-2xl overflow-hidden"
                  >
                    <Image
                      src={rite.image}
                      alt={rite.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6">
                      <div>
                        <h3 className="text-2xl font-bold text-white">
                          {rite.name}
                        </h3>
                        <p className="text-white/80">{rite.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            {/* Histoire Tab */}
            <TabsContent value="history">
              <Card className="bg-white/80 backdrop-blur-sm border-[#8B4513]/20">
                <CardContent className="p-8 prose max-w-none">
                  <h3 className="text-[#5C4033]">Origines</h3>
                  <p className="text-[#8B4513]">
                    Le Vodoun trouve ses racines dans l'ancien royaume du Dahomey...
                  </p>
                  
                  <h3 className="text-[#5C4033] mt-6">Transmission</h3>
                  <p className="text-[#8B4513]">
                    Tradition orale préservée par les initiés...
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
}