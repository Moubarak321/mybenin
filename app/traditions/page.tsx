// Page Tradition : réunit Vodoun, Divinités, et Rites sous forme de navigation en onglets immersifs
"use client";

import { motion } from "framer-motion";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import VodounPage from "./vaudou/page";
import DivinitiesPage from "./divinites/page";
import RitesPage from "./rites/page";

export default function TraditionPage() {
  return (
    <div className="bg-[#FAF5E9] min-h-screen py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header général */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-[#5C4033] mb-4 mt-12">
            Spiritualité béninoise
          </h1>
          <p className="text-xl text-[#8B4513] max-w-3xl mx-auto">
            Entrez dans le monde sacré du Vodoun : rites, panthéon divin et traditions initiatiques ancestrales.
          </p>
        </motion.div>

        {/* Navigation par onglets */}
        <Tabs defaultValue="vodoun" className="w-full">
          <TabsList className="flex justify-center gap-4 flex-wrap bg-white/70 border border-[#8B4513]/20 px-6 py-2 rounded-xl mb-12">
            <TabsTrigger
              value="vodoun"
              className="text-[#5C4033] data-[state=active]:font-bold data-[state=active]:text-[#E67E22]"
            >
              À propos du Vodoun
            </TabsTrigger>
            <TabsTrigger
              value="divinities"
              className="text-[#5C4033] data-[state=active]:font-bold data-[state=active]:text-[#E67E22]"
            >
              Panthéon Vodoun
            </TabsTrigger>
            <TabsTrigger
              value="rites"
              className="text-[#5C4033] data-[state=active]:font-bold data-[state=active]:text-[#E67E22]"
            >
              Cérémonies & Rites
            </TabsTrigger>
          </TabsList>

          {/* Contenus par rubrique */}
          <TabsContent value="vodoun">
            <VodounPage />
          </TabsContent>

          <TabsContent value="divinities">
            <DivinitiesPage />
          </TabsContent>

          <TabsContent value="rites">
            <RitesPage />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
