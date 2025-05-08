export interface Site {
    id: string;
    name: string;
    category: string;
    position: [number, number];
    description: string;
    historicalFact: string;
    mainImage: string;
    mainCaption: string;
    gallery: string[];
  }