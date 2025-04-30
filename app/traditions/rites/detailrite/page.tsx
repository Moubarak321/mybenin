// Page de détail pour un rite Vodoun : galerie, description, vidéo
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import router, { useRouter } from "next/router";
import { Button } from "@/components/ui/button";

const riteDetails = {
  name: "Zangbeto",
  description: `Zangbeto, les gardiens de la nuit, sont des esprits masqués appartenant à la tradition vodoun. Ils veillent sur les communautés, chassent les mauvais esprits et symbolisent l’ordre et la justice. Leurs danses spectaculaires sont à la fois mystiques et festives.`,
  region: "Ouidah",
  images: [
    "https://www.chateau-vodou.com/wp-content/uploads/2020/11/Zangbeto-Collection-Vodou-Arbogast.jpg",
    "https://www.chateau-vodou.com/wp-content/uploads/2020/11/Zangbeto-Collection-Vodou-Arbogast.jpg",
    "https://www.chateau-vodou.com/wp-content/uploads/2020/11/Zangbeto-Collection-Vodou-Arbogast.jpg"
  ],
  video: "https://www.youtube.com/embed/xtGn4VJkzFw"
};

export default function RiteDetailPage() {
  // const router = useRouter();
  // const { slug } = router.query; // en cas de dynamic routing

  return (
    <div className="bg-[#FAF7F0] min-h-screen py-12 px-4 ">
      <div className="max-w-5xl mx-auto mt-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-[#5C4033] mb-2">{riteDetails.name}</h1>
          <p className="text-lg text-[#8B4513]">Région : {riteDetails.region}</p>
        </motion.div>

        {/* Description */}
        <section className="mb-12">
          <div className="bg-white/80 backdrop-blur p-6 rounded-xl border border-[#8B4513]/20 text-[#5C4033] text-lg leading-relaxed">
            {riteDetails.description}
          </div>
        </section>

        {/* Galerie */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-[#5C4033] mb-4">Images</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {riteDetails.images.map((img, index) => (
              <motion.div key={index} whileHover={{ scale: 1.02 }} className="rounded-xl overflow-hidden shadow-md">
                <Image
                  src={img}
                  alt={`Zangbeto image ${index + 1}`}
                  width={400}
                  height={300}
                  className="object-cover w-full h-64"
                />
              </motion.div>
            ))}
          </div>
        </section>

        {/* Vidéo */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-[#5C4033] mb-4">Vidéo de présentation</h2>
          <div className="aspect-video w-full rounded-xl overflow-hidden shadow-md">
            <iframe
              src={riteDetails.video}
              className="w-full h-full"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          </div>
        </section>

        <div className="text-center">
          <Button variant="outline" className="border-[#5C4033] text-[#5C4033] hover:bg-[#E67E22]/10" onClick={() => router.back()}>
            Retour aux rites
          </Button>
        </div>
      </div>
    </div>
  );
}
