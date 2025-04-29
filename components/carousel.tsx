// src/components/layout/Carousel.tsx
"use client";

import { motion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { DotButton as ImportedDotButton, NextButton } from "./carouselButtons";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
// import { Button } from "react-day-picker";
import { Button } from "@/components/ui/button";


export type CarouselImage = {
  url: string;
  title: string;
  description: string;
  cta?: {
    label: string;
    href: string;
  };
};

const CAROUSEL_IMAGES: CarouselImage[] = [
  {
    url: "https://images.unsplash.com/photo-1523881374236-dd34f6ac1226?q=80&w=2070",
    title: "Traditions Béninoises",
    description: "Découvrez nos riches traditions culturelles",
    cta: {
      label: "Explorer",
      href: "/traditions"
    }
  },
  {
    url: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?q=80&w=2072",
    title: "Art et Culture",
    description: "L'expression artistique au cœur de notre identité",
    cta: {
      label: "Découvrir",
      href: "/art"
    }
  },
  {
    url: "https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?q=80&w=2070",
    title: "Gastronomie",
    description: "Savourez les délices culinaires du Bénin",
    cta: {
      label: "Goûter",
      href: "/gastronomy"
    }
  }
];

export default function HeroCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, duration: 20 },
    [Autoplay({ delay: 8000, stopOnInteraction: false })]
  );
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    return () => {
      if (emblaApi) {
        emblaApi.off("select", onSelect);
      }
    };
  }, [emblaApi, onSelect]);

  return (
    <section className="relative overflow-hidden w-full h-[80vh]">
      {/* Conteneur principal */}
      <div className="embla h-full " ref={emblaRef}>
        <div className="embla__container flex h-full ">
          {CAROUSEL_IMAGES.map((image, index) => (
            <div 
              key={index} 
              className="embla__slide flex-[0_0_100%] min-w-0 relative"
            >
              {/* Image de fond */}
              <Image
                src={image.url}
                alt={image.title}
                fill
                priority={index === 0}
                className="object-cover"
              />

              {/* Overlay sombre */}
              <div className="absolute inset-0 bg-black/40" />

              {/* Contenu */}
              <motion.div 
                className="absolute inset-0 flex items-center justify-center text-center px-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
              >
                <div className="max-w-3xl mx-auto text-white">
                  <motion.h2
                    initial={{ y: 50 }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-4xl md:text-6xl font-bold mb-6"
                  >
                    {image.title}
                  </motion.h2>
                  
                  <motion.p
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-xl md:text-2xl mb-8"
                  >
                    {image.description}
                  </motion.p>

                  {image.cta && (
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.6 }}
                    >
                      <Button asChild variant="outline" className="bg-transparent text-white border-white hover:bg-white/10">
                        <Link href={image.cta.href}>
                          {image.cta.label} →
                        </Link>
                      </Button>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>

      {/* Contrôles */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center items-center gap-2">
        {scrollSnaps.map((_, index) => (
          <ImportedDotButton
            key={index}
            selected={index === selectedIndex}
            onClick={() => scrollTo(index)}
          />
        ))}
      </div>

      {/* Boutons de navigation */}
      <PrevButton 
        onClick={() => emblaApi?.scrollPrev()} 
        className="left-4" 
      />
      <LocalNextButton 
        onClick={() => emblaApi?.scrollNext()} 
        className="right-4" 
      />
    </section>
  );
}

// Composants supplémentaires à créer dans CarouselButtons.tsx
type CarouselButtonProps = {
  onClick: () => void;
  className?: string;
};

export function PrevButton({ onClick, className }: CarouselButtonProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "absolute top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/30 backdrop-blur flex items-center justify-center hover:bg-white/50 transition-all",
        className
      )}
      aria-label="Previous slide"
    >
      ←
    </button>
  );
}

export function LocalNextButton({ onClick, className }: CarouselButtonProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "absolute top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/30 backdrop-blur flex items-center justify-center hover:bg-white/50 transition-all",
        className
      )}
      aria-label="Next slide"
    >
      →
    </button>
  );
}

export function DotButton({
  selected,
  onClick,
}: {
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "w-3 h-3 rounded-full mx-1 transition-all",
        selected ? "bg-white w-6" : "bg-white/50"
      )}
      aria-label={`Go to slide ${selected ? "(current)" : ""}`}
    />
  );
}