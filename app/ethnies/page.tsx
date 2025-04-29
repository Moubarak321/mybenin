// Page dédiée aux ethnies pour la section "Explorer le Bénin"
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const ETHNIC_GROUPS = [
  {
    name: "Fon",
    region: "Sud Bénin",
    description: "Peuple fondateur du royaume du Dahomey, riche en traditions vodun et en art royal.",
    image: "https://images.unsplash.com/photo-1523881374236-dd34f6ac1226?q=80&w=2070"
  },
  {
    name: "Yoruba",
    region: "Sud-Est",
    description: "Portés sur les rites Ifa et la divination, les Yoruba ont une culture musicale très développée.",
    image: "https://images.unsplash.com/photo-1523881374236-dd34f6ac1226?q=80&w=2070"
  },
  {
    name: "Bariba",
    region: "Nord-Est",
    description: "Peuple de cavaliers et de royaumes militaires, connu pour la fête Gaani et les chants épiques.",
    image: "https://images.unsplash.com/photo-1523881374236-dd34f6ac1226?q=80&w=2070"
  },
  {
    name: "Dendi",
    region: "Nord Bénin",
    description: "Peuple commerçant et islamisé, dont la culture orale est fortement ancrée.",
    image: "https://images.unsplash.com/photo-1523881374236-dd34f6ac1226?q=80&w=2070"
  },
  {
    name: "Adja",
    region: "Sud-Ouest",
    description: "Origines communes avec les Fon, connus pour leurs proverbes et contes philosophiques.",
    image: "https://images.unsplash.com/photo-1523881374236-dd34f6ac1226?q=80&w=2070"
  }
];

export default function EthniesPage() {
  return (
    <div className="bg-[#FEF5E7] min-h-screen py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-[#2C3E50] mb-4 mt-12"
        >
          Les grandes <span className="text-[#E67E22]">ethnies</span> du Bénin
        </motion.h1>
        <p className="text-[#7F8C8D] text-lg mb-12 max-w-3xl mx-auto">
          Explorez les peuples fondateurs du pays, leurs langues, traditions, spiritualités et symboles identitaires.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {ETHNIC_GROUPS.map((ethnie, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
              className="bg-white p-6 rounded-xl shadow-md text-left flex flex-col md:flex-row gap-6"
            >
              <Image
                src={ethnie.image}
                alt={ethnie.name}
                width={200}
                height={200}
                className="rounded-xl object-cover w-full md:w-64 h-48"
              />
              <div>
                <h3 className="text-2xl font-bold text-[#2C3E50] mb-1">{ethnie.name}</h3>
                <p className="text-sm text-[#E67E22] mb-2">{ethnie.region}</p>
                <p className="text-[#7F8C8D] mb-4">{ethnie.description}</p>
                <Link
                  href={`/ethnies/${ethnie.name.toLowerCase()}`}
                  className="inline-flex items-center text-[#E67E22] hover:underline font-medium"
                >
                  Explorer plus loin <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
