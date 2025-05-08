// src/components/figuresHistoriques.tsx
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const figures = [
  { name: "Béhanzin", role: "Roi du Dahomey", period: "1889-1894", contribution: "Résistance contre la colonisation française" },
  { name: "Hubert Maga", role: "Premier président", period: "1960-1963", contribution: "Père de l'indépendance" },
  { name: "Mathieu Kérékou", role: "Président", period: "1972-1991, 1996-2006", contribution: "Transition démocratique" },
  { name: "Nicéphore Soglo", role: "Président", period: "1991-1996", contribution: "Premier président élu démocratiquement" },
  { name: "Isidore de Souza", role: "Archevêque", period: "1934-1999", contribution: "Président de la Conférence nationale" },
  { name: "Patrice Talon", role: "Président", period: "2016-présent", contribution: "Réformes économiques" }
];

export default function HistoricalFiguresTable() {
  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <Table>
        <TableCaption className="caption-top mb-4 text-lg font-medium text-gray-900">
          Personnalités marquantes de l'histoire du Bénin
        </TableCaption>
        <TableHeader className="bg-amber-50">
          <TableRow>
            <TableHead className="w-[150px] text-gray-900">Nom</TableHead>
            <TableHead className="text-gray-900">Rôle</TableHead>
            <TableHead className="text-gray-900">Période</TableHead>
            <TableHead className="text-right text-gray-900">Contribution</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {figures.map((figure, index) => (
            <TableRow key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-amber-50'}>
              <TableCell className="font-medium text-gray-900">{figure.name}</TableCell>
              <TableCell className="text-gray-900">{figure.role}</TableCell>
              <TableCell className="text-gray-900">{figure.period}</TableCell>
              <TableCell className="text-right text-gray-900">{figure.contribution}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}