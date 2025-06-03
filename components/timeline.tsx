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
    <div className="relative max-w-6xl mx-auto py-8">
      {/* Timeline line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-amber-600 transform -translate-x-1/2"></div>
      
      <div className="space-y-12">
        {events.map((event, index) => (
          <div 
            key={index} 
            className="relative flex items-center"
          >
            {/* Circle marker */}
            <div className="absolute left-1/2 w-6 h-6 rounded-full bg-amber-600 border-4 border-white transform -translate-x-1/2 z-10 shadow-md"></div>
            
            {/* Content card */}
            <div className={`w-5/12 ${index % 2 === 0 ? 'mr-auto pr-8' : 'ml-auto pl-8'}`}>
              <Card className="hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-amber-300">
                <CardContent className="p-6">
                  <div className="mb-3">
                    <span className="inline-block px-3 py-1 bg-amber-100 text-amber-800 font-bold text-sm rounded-full">
                      {event.year}
                    </span>
                  </div>
                  <h3 className="font-bold text-xl text-gray-900 mb-2">{event.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{event.description}</p>
                </CardContent>
              </Card>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}