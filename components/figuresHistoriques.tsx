// components/HistoricalFiguresTable.jsx

import React from "react";

const figures = [
  { name: "Toffa", role: "Roi de Porto-Novo, signe un protectorat avec la France en 1863" },
  { name: "Glèlè", role: "Roi d’Abomey, autorise l’installation française à Cotonou en 1863" },
  { name: "Béhanzin", role: "Roi d’Abomey, résistant à la colonisation française" },
  { name: "Hubert Maga", role: "Premier président du Dahomey, renversé en 1963" },
  { name: "Sourou Migan Apithy", role: "Président, membre du triumvirat" },
  { name: "Justin Ahomadégbé", role: "Premier ministre puis président dans la présidence tournante" },
  { name: "Taïrou Congacou", role: "Président par intérim après le départ de Maga" },
  { name: "Émile Derlin Zinsou", role: "Président civil entre 1968 et 1969" },
  { name: "Christophe Soglo", role: "Militaire, deux fois président après des coups d’État" },
  { name: "Maurice Kouandété", role: "Commandant militaire, meneur du coup d’État de 1967" },
  { name: "Alphonse Alley", role: "Chef de l’État après Kouandété" },
  { name: "Paul-Émile de Souza", role: "Chef d’État intérimaire après Zinsou" },
  { name: "Mathieu Kérékou", role: "Président de 1972 à 1991, puis de 1996 à 2006" },
  { name: "Nicéphore Soglo", role: "Président élu en 1991, après la transition démocratique" },
  { name: "Isidore de Souza", role: "Président de la Conférence nationale de 1990" },
  { name: "Adrien Houngbédji", role: "Président de l’Assemblée nationale après 1991" },
  { name: "Mathurin Nago", role: "Président de l’Assemblée nationale élu en 2007" },
  { name: "Basile Adjou Moumouni", role: "Candidat présidentiel évincé, cadre de l’OMS" },
  { name: "Boni Yayi", role: "Président élu en 2006 et réélu en 2011" },
  { name: "Patrice Talon", role: "Président élu en 2016, toujours en fonction" },
];

export default function HistoricalFiguresTable() {
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Personnages Historiques du Bénin</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border rounded shadow-md">
          <thead className="bg-gray-200">
            <tr>
              <th className="text-left px-4 py-2 border">Nom</th>
              <th className="text-left px-4 py-2 border">Rôle dans l’histoire</th>
            </tr>
          </thead>
          <tbody>
            {figures.map((person, index) => (
              <tr key={index} className="hover:bg-gray-100">
                <td className="border px-4 py-2">{person.name}</td>
                <td className="border px-4 py-2">{person.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
