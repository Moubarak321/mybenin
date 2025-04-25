"use client";

import { motion } from "framer-motion";
import { ChefHat, Citrus, Wheat, Drumstick } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

const dishes = [
  {
    name: "Amiwo",
    description: "Purée de maïs à la sauce tomate",
    region: "Sud Bénin",
    ingredients: ["Maïs", "Pâte de tomate", "Poisson fumé"],
    icon: <Wheat className="text-amber-600" />,
    category: "Plats principaux",
    image: "https://monkadi.com/cdn/shop/products/Amiwo_592x390.jpg?v=1669849161"
  },
  {
    name: "Akassa",
    description: "Pâte de maïs fermenté accompagnée de sauces",
    region: "Tout le Bénin",
    ingredients: ["Maïs fermenté", "Sauce gombo"],
    icon: <Drumstick className="text-rose-600" />,
    category: "Plats principaux",
    image: "https://i.pinimg.com/736x/73/bc/a9/73bca98fd54d51b979ba06afd546c18f.jpg"
  },
  {
    name: "Wagassi",
    description: "Fromage peul local servi grillé ou frit",
    region: "Nord Bénin",
    ingredients: ["Lait de vache", "Sel"],
    icon: <ChefHat className="text-blue-600" />,
    category: "Accompagnements",
    image: "https://i.pinimg.com/736x/ff/a9/4d/ffa94d32bb2dcb828bd3fe1161e4ec29.jpg"
  },
  {
    name: "Sauce Claire",
    description: "Base culinaire pour de nombreux plats",
    region: "Tout le Bénin",
    ingredients: ["Tomates", "Oignons", "Piment"],
    icon: <Drumstick className="text-red-600" />,
    category: "Sauces",
    image: "https://scontent-lis1-1.xx.fbcdn.net/v/t39.30808-6/489687165_30765634329702231_3834019423121778188_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=3a1ebe&_nc_eui2=AeELJyOEK3hNCJWlcnlraDEjincdmphx_UiKdx2amHH9SAOhAkQbDbec9c_WzohdGqBoQa5Z3SrcFWjPsn7N9sqv&_nc_ohc=mwvMjyx-ebMQ7kNvwEyDu7i&_nc_oc=Adl6apoOsAufnjYgid5OVl9bct6o4iIHHd2avLyFBhFJjkrzSdnq74nARdY0x5bJkfA&_nc_zt=23&_nc_ht=scontent-lis1-1.xx&_nc_gid=XWrHkbzeYRTFQxI2mqTnpA&oh=00_AfG6_fi_kSH8cRmUQJXSExC6FftuJgTt2St3qXC4O4VyRA&oe=68116212"
  },
  {
    name: "Boulettes de maïs",
    description: "Snack populaire à base de maïs",
    region: "Centre Bénin",
    ingredients: ["Maïs", "Oignons", "Piment"],
    icon: <Citrus className="text-green-600" />,
    category: "Snacks",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Amuse_gueule_%22Atchonmon%22_de_godomey.jpg/500px-Amuse_gueule_%22Atchonmon%22_de_godomey.jpg"
  }
];

export default function GastronomyPage() {
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
            Trésors Culinaires du Bénin
          </h1>
          <p className="text-xl text-[#8B4513] max-w-2xl mx-auto">
            Découvrez les saveurs authentiques qui font vibrer les papilles
          </p>
        </motion.div>

        {/* Filters */}
        <div className="flex flex-wrap gap-3 mb-8 justify-center">
          {["Tous", "Plats principaux", "Sauces", "Snacks", "Accompagnements"].map((filter) => (
            <Badge
              key={filter}
              variant={filter === "Tous" ? "default" : "outline"}
              className="px-4 py-2 cursor-pointer hover:bg-[#5C4033] hover:text-white"
            >
              {filter}
            </Badge>
          ))}
        </div>

        {/* Dishes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dishes.map((dish, index) => (
            <motion.div
              key={dish.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full overflow-hidden border-[#8B4513]/20 hover:shadow-lg transition-shadow">
                <div className="relative h-48">
                  <Image
                    src={dish.image}
                    alt={dish.name}
                    fill
                    className="object-cover"
                    style={{ objectPosition: 'center' }}
                  />
                </div>
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-full bg-[#5C4033]/10">
                      {dish.icon}
                    </div>
                    <div>
                      <CardTitle className="text-xl text-[#5C4033]">
                        {dish.name}
                      </CardTitle>
                      <p className="text-sm text-[#8B4513]">{dish.region}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-[#5C4033] mb-4">{dish.description}</p>
                  
                  <div className="mb-4">
                    <p className="text-sm font-medium text-[#5C4033]/80 mb-2">Ingrédients :</p>
                    <div className="flex flex-wrap gap-2">
                      {dish.ingredients.map((ingredient) => (
                        <Badge 
                          key={ingredient} 
                          variant="secondary"
                          className="bg-[#8B4513]/10 text-[#5C4033]"
                        >
                          {ingredient}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <Badge variant="outline" className="border-[#5C4033] text-[#5C4033]">
                    {dish.category}
                  </Badge>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}