// src/components/timeline.tsx
import { Card, CardContent } from "@/components/ui/card";

const events = [
  { year: "1600-1894", title: "Royaumes précoloniaux", description: "Dahomey, Porto-Novo, Allada" },
  { year: "1894-1960", title: "Période coloniale", description: "Colonie du Dahomey" },
  { year: "1960", title: "Indépendance", description: "République du Dahomey" },
  { year: "1975", title: "République populaire", description: "Adoption du marxisme-léninisme" },
  { year: "1990", title: "Démocratie", description: "Conférence nationale" },
  { year: "2016", title: "Ère contemporaine", description: "Présidence Talon" }
];

export default function Timeline() {
  return (
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-1/2 h-full w-1 bg-amber-600 transform -translate-x-1/2"></div>
      
      <div className="space-y-8">
        {events.map((event, index) => (
          <div 
            key={index} 
            className={`relative flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
          >
            <div className={`w-5/12 ${index % 2 === 0 ? 'ml-4' : 'mr-4'}`}>
              <Card className="hover:shadow-lg transition-shadow border border-gray-200">
                <CardContent className="p-4">
                  <div className="flex items-center mb-2">
                    <div className="absolute w-6 h-6 rounded-full bg-amber-600 border-4 border-white -left-3 transform -translate-x-1/2"></div>
                    <span className="font-bold text-amber-700">{event.year}</span>
                  </div>
                  <h3 className="font-semibold text-lg text-gray-900">{event.title}</h3>
                  <p className="text-sm text-gray-700">{event.description}</p>
                </CardContent>
              </Card>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}