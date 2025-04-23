// src/app/historique/page.tsx
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Histoire complète du Bénin",
  description: "Découvrez l'histoire riche et complexe du Bénin, des royaumes précoloniaux à la démocratie moderne",
  openGraph: {
    images: "/images/histoire-og.jpg",
  },
};

export default function HistoryPage() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4 ">
      <div className="text-center mb-12 mt-12">
        <Image
          src="https://presidence.bj/upload/images/ckeditor/armoiries.png"
          alt="Armoiries du Bénin"
          width={200}
          height={200}
          className="mx-auto mb-8"
        />
        <h1 className="text-4xl font-bold text-[#5C4033] mb-4">
          Histoire du Bénin
        </h1>
        <p className="text-xl text-[#8B4513]">
          De l'empire du Dahomey à la démocratie moderne
        </p>
      </div>

      <article className="prose lg:prose-xl text-[#5C4033]">
        <h2>Les origines</h2>
        <p>
          Le territoire de l'actuel Bénin a été le berceau de plusieurs royaumes précoloniaux,
          dont le plus puissant fut le royaume du Dahomey (1600-1894). Les Fon, ethnie majoritaire,
          établirent ce royaume remarquable par son organisation militaire et administrative.
        </p>

        <h2>L'ère coloniale</h2>
        <p>
          Devenu colonie française en 1894 sous le nom de Dahomey, le pays fut intégré à l'Afrique
          Occidentale Française (AOF). La période coloniale vit l'introduction de nouvelles
          structures administratives mais aussi la répression de certaines traditions locales.
        </p>

        <h2>Indépendance et démocratie</h2>
        <p>
          Le Dahomey accéda à l'indépendance le 1er août 1960. Après une période instable marquée
          par plusieurs coups d'État, le pays adopta le marxisme-léninisme sous Mathieu Kérékou
          (1972-1990) avant de devenir l'un des premiers pays africains à effectuer une transition
          démocratique pacifique en 1990.
        </p>

        <div className="mt-12">
          <Link href="/">
            <Button variant="outline" className="border-[#5C4033] text-[#5C4033]">
              ← Retour à l'accueil
            </Button>
          </Link>
        </div>
      </article>
    </div>
  );
}