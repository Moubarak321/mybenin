// src/app/historique/page.tsx
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import type { Metadata } from "next";
import HistoricalFiguresTable from "@/components/figuresHistoriques";

export const metadata: Metadata = {
    title: "Histoire du Bénin | De l'empire du Dahomey à aujourd'hui",
    description: "Explorez l'histoire complète du Bénin : royaumes précoloniaux, période coloniale, indépendance et démocratie. Découvrez notre riche patrimoine historique.",
    openGraph: {
      title: "Histoire complète du Bénin",
      description: "Plongez dans l'histoire fascinante du Bénin à travers les siècles",
      images: [
        {
          url: "/images/histoire-og.jpg",
          width: 1200,
          height: 630,
          alt: "Illustration historique du Bénin",
        }
      ],
      url: "https://mybenin.vercel.app/historique",
      type: "article",
    },
    twitter: {
        card: "summary_large_image",
        title: "Histoire du Bénin",
        description: "Découvrez notre riche patrimoine historique",
        images: ["/images/histoire-og.jpg"],
      },
    alternates: {
      canonical: "https://mybenin.vercel.app/historique",
    },
    keywords: ["histoire Bénin", "royaume Dahomey", "indépendance Bénin", "culture béninoise"],
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

      <article className="prose lg:prose-xl text-[#5C4033] text-xl ">
      {/* <h2 className="flex-shrink-0  font-bold text-[#5C4033]">Aux origines : Royaumes et civilisations anciennes</h2> */}
      
        <p className="mb-4 text-justify">Aux origines, la terre de l’actuel Bénin était occupée par plusieurs royaumes. Les plus en vue s’appelaient Danhomé (Abomey), Xogbonou (Porto-Novo), Allada, Nikki, Kouandé, Kandi… .</p>
        <p className="mb-4 text-justify">Les premiers souverains d’Abomey et de Porto-Novo sont issus de la migration Adja-Fon, venue du Togo voisin (Tado). Les autres peuples proviennent de l’actuel Nigéria, Niger ou Burkina-Faso. Ainsi, le pays était jadis un foyer de civilisations anciennes et brillantes, bâties autour de ces royaumes : des cités-États.</p>
        <p className="mb-4 text-justify">Ces entités politiques, bien structurées, étaient pourvues de centres urbains fonctionnels. Elles avaient développé un commerce local, basé dès le XVIIe siècle sur la traite des esclaves, puis sur celle du palmier à huile après l’abolition du commerce négrier en 1807.</p>
        <p className="mb-4 text-justify">Cette économie de traite a favorisé l’installation, le long de la côte (surnommée « Côte des esclaves »), de comptoirs commerciaux contrôlés par les Anglais, les Danois, les Portugais et quelques Français. En 1704, la France est autorisée à construire un port à Ouidah tandis qu’en 1752, les Portugais découvraient Porto-Novo.</p>
        <p className="mb-4 text-justify">En 1863, le premier protectorat français est établi avec le roi Toffa de Porto-Novo qui recherche de l’aide face aux prétentions du roi d’Abomey et attaques des Anglais implantés à Lagos. La même année, Glèlè, roi d’Abomey, autorise les Français à s’établir à Cotonou. En 1882, le souverain du royaume de Porto-Novo signe un nouvel accord de protectorat avec la France qui envoie un « résident français » chargé d’assister le roi.</p>
        <p className="mb-4 text-justify">En 1894, les Français, vainqueurs des rois locaux, ont créé la colonie du Dahomey et dépendances. Le territoire prend le nom du royaume le plus prépondérant et le plus résistant à l’occupation étrangère : Danhomé avec son légendaire roi Béhanzin.</p>
        <p className="mb-4 text-justify">Proclamé République le 4 décembre 1958, le Bénin a accédé à la souveraineté internationale le 1er août 1960, sous le nom du Dahomey. Le pays est connu pour « l’exemplarité » de son processus démocratique entamé en février 1990, suite à la Conférence nationale des forces vives. Depuis lors, plusieurs élections présidentielles, législatives et locales ont sanctionné la dévolution du pouvoir politique. En quinze ans, le libéralisme politique a généré trois alternances au faîte de l’État.</p>
        <p className="mb-4 text-justify">Il a connu véritablement deux vagues de démocratisation, couronnées d’élections dont sont issus les gouvernants. La première remonte à l’aube de l’indépendance avec les élections générales de décembre 1960. Cette période reste marquée par l’inachèvement du mandat du président de la République, balayé par un coup d’État militaire en 1963. En outre, la vie politique souffrait du monolithisme, car très rapidement le nouveau président a inspiré la fusion des partis politiques en un seul officiel : le Parti Dahoméen de l’Unité (PDU). La deuxième vague de démocratisation est en cours depuis février 1990. Sa spécificité est qu’elle s’inscrit dans la durée et permet une stabilité des institutions démocratiques.</p>
        <p className="mb-4 text-justify">Plus globalement, l’histoire politique contemporaine du pays peut être séquencée en trois temps majeurs : le temps de l’instabilité politique, le temps militaro-marxiste, et le temps du Renouveau démocratique.</p>
        <p className="mb-4 text-justify">Le temps de l’instabilité politique marqua les douze premières années de l’indépendance. Une série de coups d’État se suivaient jusqu’en 1970, valant au pays le nom « d’enfant malade de l’Afrique ». L’acte fondateur de cette instabilité est le putsch du colonel Christophe Soglo qui renversa le 28 octobre 1963 Hubert MAGA, le père de l’indépendance, démocratiquement élu.</p>
        <p className="mb-4 text-justify">En effet, avec la nouvelle Constitution adoptée en novembre 1960, les élections générales, tenues le 11 décembre suivant, ont consacré le maintien d’Hubert Maga au pouvoir. Mais profitant des troubles sociaux dans le pays, l’armée prit le pouvoir en 1963. Trois mois après, la gestion du pays fut confiée à un gouvernement civil.</p>
        <p className="mb-4 text-justify">Sourou Migan Apithy devint président de la République et Justin Ahomadégbé son Premier Ministre et vice-président. Une nouvelle Constitution fut adoptée par référendum le 5 janvier 1964. Mais ces deux dirigeants du gouvernement n’arrivaient pas à accorder leurs violons. Le 1er décembre 1965, l’armée les força à démissionner. Pour autant, les civils conservaient le pouvoir. Il échut au président de l’Assemblée nationale, Taïrou Congacou. Peu satisfait de sa gouvernance, Christophe Soglo, devenu général, propulsa à nouveau l’armée au devant de la scène.</p>
        <p className="mb-4 text-justify">Le 22 décembre 1965, il se proclama président de la République de facto. Il fut renversé à son tour par les jeunes officiers militaires le 17 décembre 1967. Le Commandant Maurice Kouandété, cerveau du coup d’État, confia trois jours après les destinées du pays au chef de l’Armée, le lieutenant-colonel Alphonse Alley.</p>
        <p className="mb-4 text-justify">En mai 1968, des élections présidentielles sont organisées par les officiers afin de remettre à nouveau le sceptre du Dahomey à une autorité civile. Cependant, les trois leaders politiques traditionnels du pays qu’étaient Hubert Maga, Sourou Migan Apithy et Justin Ahomadégbé ne sont pas autorisés à se présenter. Ils appelaient alors au boycott de ces élections.</p>
        <p className="mb-4 text-justify">En leur absence, un inconnu fut porté par le peuple. Seulement, le candidat élu, le docteur Basile Adjou Moumouni donnait du grain à moudre aux militaires. Fonctionnaire international de l’Organisation mondiale de la Santé en poste à Brazzaville, le chef de l’État élu n’était pas du sérail politique et ne rassurait pas les militaires. Ces derniers nourrissaient certainement des inquiétudes quant au maintien de leurs privilèges.</p>
        <p className="mb-4 text-justify">Ce faisant, les militaires prétextaient de la faible participation pour annuler le résultat de ces élections. Dans la foulée, face aux pressions, le 17 juillet 1968, ils installèrent un civil de rechange à la Présidence : Émile Derlin Zinsou.</p>
        <p className="mb-4 text-justify">Le nouveau chef de l’État, ancien élu à l’Assemblée de l’Union française, était en réalité le quatrième ténor politique du pays. Habitué de la vie politique dahoméenne, il faisait le consensus au sein du Comité Militaire Révolutionnaire (CMR).</p>
        <p className="mb-4 text-justify">Les vieux démons habitant toujours l’Armée, elle s’invitait  à nouveau sous les feux de la rampe. Le colonel Maurice Kouandété éjecta Emile Zinsou du pouvoir le 12 décembre 1969. Comme à son habitude, il ne dirigea pas le pays. Il en confia la gestion à un autre officier, le lieutenant-colonel Paul Emile de Souza. Les militaires s’engagèrent en mai 1970 à quitter la tête de l’Exécutif. Pour conjurer le sort de l’instabilité, une nouvelle formule fut trouvée : une présidence tournante fut instaurée. Elle consistait en la formation d’un gouvernement dirigé à tour de rôle par les trois principaux acteurs politiques civils : Maga, Apithy et Ahomadégbé.</p>
        <p className="mb-4 text-justify">Les trois leaders politiques du pays, solidement ancrés électoralement à une région, devraient se succéder à la magistrature suprême tous les deux ans. À la fin du mandat d’Hubert Maga en mai 1972, Justin Ahomadégbé prit le relais. Mais la formule ne fit pas longtemps recette. Le 26 octobre 1972, l’Armée s’empara à nouveau du pouvoir, avec le chef de Bataillon Mathieu Kérékou. Il balaya ce triumvirat, raillé comme un « monstre à trois têtes ». C’est le début du deuxième temps politique fort du pays.</p>
        <p className="mb-4 text-justify">Le deuxième temps, militaro-marxiste, s’étale de cette prise de pouvoir à la Conférence nationale de février 1990. En 1975, le gouvernement militaire opéra des choix stratégiques et idéologiques décisifs. La République du Dahomey est rebaptisée République populaire du Bénin. Elle proclama son adhésion à l’économie socialiste d’orientation marxiste-léniniste. Le pays fut drapé d’une chape dictatoriale. Plusieurs opposants sont assassinés, torturés et exilés. À partir du milieu des années 1980, le pouvoir est acculé par une conjoncture économique sans précédent et qui dérive d’une série de facteurs : la morosité internationale, la gabegie, la concussion, et l’impéritie.</p>
        <p className="mb-4 text-justify">En banqueroute, l’État cessa de payer les salaires. Face à cette situation nourrie par les idéologues du Parti communiste du Dahomey, la rue gronda par des manifestations protestataires. Désarmée, la junte militaro-marxiste se résigna à opérer des réformes politiques, économiques, et sociales. Le 06 décembre 1989, elle abandonna le socialisme comme orientation idéologique de l’État et convoqua une Conférence nationale. De plus, les condamnés politiques furent amnistiés et pouvaient rentrer pour participer à ces « États généraux » annoncés pour le mois de février.</p>
        <p className="mb-4 text-justify">Le temps du Renouveau démocratique, consacré par cette grand-messe des forces vives de la Nation, est toujours en cours. Du 19 au 28 février 1990, la Conférence nationale réunit plus d’un demi millier de délégués des différentes composantes du pays à l’hôtel PLM Alédjo sous la présidence de Monseigneur Isidore de Souza.</p>
        <p className="mb-4 text-justify">Deux principales décisions en sont issues. La première instaura le libéralisme économique et politique, la démocratie et l’État de droit. La deuxième nomma un Premier ministre pour seconder le général Mathieu Kérékou maintenu à la présidence, mais vidé de l’essentiel de ses prérogatives. Un vent de renouveau démocratique enveloppa le Bénin.</p>
        <p className="mb-4 text-justify">Le Premier ministre nommé par la Conférence nationale, Nicéphore Soglo, administrateur de la Banque mondiale, est chargé de conduire le gouvernement de la période transitoire. Ce gouvernement a pour mission de mettre en œuvre les principales mesures devant conduire à l’adoption d’une nouvelle Constitution et à l’organisation des élections générales. Contrairement aux autres expériences transitoires des pays de la sous-région, les deux acteurs principaux de cette période, le président Mathieu Kérékou et le Premier ministre Nicéphore Soglo, ont su jouer loyalement leur partition et accorder leurs violons pendant les douze mois de sa durée.</p>
        <p className="mb-4 text-justify">Le 11 décembre 1990, une nouvelle loi fondamentale, celle de la Ve République, fut promulguée après son adoption par voie référendaire. Elle reflète bien les décisions de la Conférence nationale. Elle a pour trame la démocratie et l’État de droit. Elle opte pour un régime républicain présidentiel avec séparation des trois pouvoirs : l’exécutif, le législatif, et le judiciaire.</p>
        <p className="mb-4 text-justify">Trois mois plus tard, les élections législatives et présidentielles sanctionnent la fin de la période de transition. La nouvelle Assemblée nationale, monocamérale, est élue pour quatre ans. Elle est présidée par Maître Adrien Houngbédji, avocat et ancien exilé politique.</p>
        <p className="mb-4 text-justify">Au deuxième tour des présidentielles, Nicéphore Soglo triomphe de Mathieu Kérékou. Mais en 1996, il dut céder son fauteuil présidentiel à Mathieu Kérékou au terme des élections présidentielles. Cinq ans plus tard, les Béninois accordent à nouveau leur confiance au général Mathieu Kérékou.</p>
        <p className="mb-4 text-justify">En 2006, en l’absence de Mathieu Kérékou et de Nicéphore Soglo, le jeu politique devient plus ouvert. Le premier tour des élections s’est tenu le 5 mars 2006. Vingt six candidats briguaient la magistrature suprême : des habitués et de nouveaux venus. Parmi eux, Adrien Houngbédji et Bruno Amoussou, tous deux anciens ministres de Kérékou et anciens présidents de l’Assemblée nationale. Contre toute attente, c’est Boni Yayi, dépeint par ses adversaires comme l’émanation d’ « une génération spontanée en politique », qui ravit la vedette à ces derniers. Il emporta la décision finale avec plus de 75% des suffrages exprimés. L’année suivante, ses partisans réunis au sein des Forces Cauris pour un Bénin Emergeant (FCBE) gagnèrent les législatives. Dans la foulée, le président de l’Assemblée nationale élu Mathurin Nago est issu de ce mouvement.</p>
        <p className="mb-4 text-justify">Deux principaux acteurs émergent alors au sein de la classe politique béninoise : le président de la République Boni Yayi et son challenger du second tour, Adrien Houngbédji, qui fait office de « principal opposant » au pouvoir.</p>
        <p className="mb-4 text-justify">En 2011, Boni Yayi est réélu pour un nouveau mandat de cinq ans à la Présidence de la République, et ce dès le premier tour des élections présidentielles.</p>
        <p className="mb-4 text-justify">En mars 2016, le peuple béninois porte son choix sur le président Patrice TALON à l’issue du 2ème tour de la présidentielle. Le 06 avril 2016, le président Patrice TALON prête serment et prend les rênes du pouvoir.</p>
        
        <p className="text-sm italic text-gray-500 mt-2">
  Source : <a href="https://presidence.bj/home/le-benin/histoire/" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-600">
    Présidence de la République du Bénin
  </a>
</p>
        <div className="max-w-4xl mx-auto mt-10">
      <HistoricalFiguresTable />
    </div>

   

      
        

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