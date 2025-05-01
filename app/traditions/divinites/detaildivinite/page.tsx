// Page de détail pour une divinité Vodoun : Origines, Avènement, Description, Adhésion
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import router, { useRouter } from "next/router";
import { Button } from "@/components/ui/button";

const divinityDetails = {
  name: "Heviosso",
  image: "https://beninwebtv.com/wp-content/uploads/2022/06/IMG_5334.jpg",
  domain: "Tonnerre & Justice",
  origins: `Heviosso trouve ses racines dans le royaume de Xweda (Ouidah) avant l'avènement du royaume du Dahomey. Il représente la puissance du tonnerre, la vérité et la parole juste.`,
  emergence: `Son culte s’est renforcé avec l’organisation des sociétés initiatiques masculines. Il est reconnu pour punir les menteurs et protéger les justes.`,
  description: `Divinité redoutée et vénérée, Heviosso incarne l’autorité divine et l’ordre cosmique. Il est invoqué dans les conflits, les procès et les serments.`,
  initiation: `L'adhésion passe par une initiation secrète, marquée par des chants rituels, des sacrifices et un serment de vérité. Les adeptes portent des symboles spécifiques comme les chaînes de fer.`
};

export default function DivinityDetailPage() {
//   const router = useRouter();

  return (
    <div className="bg-[#FDF6E3] min-h-screen py-12 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-10"
        >
          <h1 className="text-4xl font-bold text-[#5C4033] mb-2">{divinityDetails.name}</h1>
          <p className="text-lg text-[#8B4513]">Domaine : {divinityDetails.domain}</p>
        </motion.div>

        {/* Image */}
        <div className="relative h-72 w-full mb-10 rounded-xl overflow-hidden shadow-md">
          <Image
            src={divinityDetails.image}
            alt={divinityDetails.name}
            fill
            className="object-cover"
          />
        </div>

        {/* Sections descriptives */}
        <div className="space-y-12 text-[#5C4033]">
          <section>
            <h2 className="text-2xl font-semibold mb-2">Origines</h2>
            <p className="leading-relaxed text-[#7F5C3B]">{divinityDetails.origins}</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">Avènement</h2>
            <p className="leading-relaxed text-[#7F5C3B]">{divinityDetails.emergence}</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">Description</h2>
            <p className="leading-relaxed text-[#7F5C3B]">{divinityDetails.description}</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">Adhésion / Initiation</h2>
            <p className="leading-relaxed text-[#7F5C3B]">{divinityDetails.initiation}</p>
          </section>
        </div>

        <div className="text-center mt-12">
          <Button
            variant="outline"
            className="border-[#5C4033] text-[#5C4033] hover:bg-[#E67E22]/10"
            onClick={() => router.back()}
          >
            Retour au panthéon
          </Button>
        </div>
      </div>
    </div>
  );
}
