// // src/components/layout/CarouselButtons.tsx
// "use client";

// import { ArrowLeft, ArrowRight } from "lucide-react";
// import { cn } from "@/lib/utils";
// import { Button } from "@/components/ui/button";

// type CarouselButtonProps = {
//   onClick: () => void;
//   className?: string;
//   disabled?: boolean;
//   ariaLabel: string;
// };

// export function PrevButton({
//   onClick,
//   className,
//   disabled = false,
//   ariaLabel = "Previous slide"
// }: CarouselButtonProps) {
//   return (
//     <Button
//       variant="ghost"
//       size="icon"
//       onClick={onClick}
//       disabled={disabled}
//       aria-label={ariaLabel}
//       className={cn(
//         "absolute top-1/2 left-4 -translate-y-1/2 z-10",
//         "w-12 h-12 rounded-full bg-white/20 backdrop-blur-md",
//         "hover:bg-white/30 transition-all duration-300",
//         "focus-visible:ring-2 focus-visible:ring-white/50",
//         "hidden sm:inline-flex", // Caché sur mobile pour plus d'espace
//         disabled && "opacity-50 cursor-not-allowed",
//         className
//       )}
//     >
//       <ArrowLeft className="w-6 h-6 text-white" strokeWidth={2} />
//     </Button>
//   );
// }

// export function NextButton({
//   onClick,
//   className,
//   disabled = false,
//   ariaLabel = "Next slide"
// }: CarouselButtonProps) {
//   return (
//     <Button
//       variant="ghost"
//       size="icon"
//       onClick={onClick}
//       disabled={disabled}
//       aria-label={ariaLabel}
//       className={cn(
//         "absolute top-1/2 right-4 -translate-y-1/2 z-10",
//         "w-12 h-12 rounded-full bg-white/20 backdrop-blur-md",
//         "hover:bg-white/30 transition-all duration-300",
//         "focus-visible:ring-2 focus-visible:ring-white/50",
//         "hidden sm:inline-flex", // Caché sur mobile pour plus d'espace
//         disabled && "opacity-50 cursor-not-allowed",
//         className
//       )}
//     >
//       <ArrowRight className="w-6 h-6 text-white" strokeWidth={2} />
//     </Button>
//   );
// }

// type DotButtonProps = {
//   onClick: () => void;
//   isActive: boolean;
//   index: number;
// };

// export function DotButton({ onClick, isActive, index }: DotButtonProps) {
//   return (
//     <button
//       type="button"
//       onClick={onClick}
//       aria-label={`Go to slide ${index + 1}`}
//       aria-current={isActive ? "true" : "false"}
//       className={cn(
//         "mx-1.5 h-2.5 w-2.5 rounded-full transition-all duration-300",
//         "focus:outline-none focus-visible:ring-2 focus-visible:ring-white/80",
//         isActive ? "w-8 bg-white" : "bg-white/50 hover:bg-white/70"
//       )}
//     />
//   );
// }

// // Variante alternative pour les dots (style "progressif")
// export function ProgressiveDotButton({
//   onClick,
//   isActive,
//   index,
//   progress = 0 // Entre 0 et 1 (pour animation de progression)
// }: DotButtonProps & { progress?: number }) {
//   return (
//     <button
//       type="button"
//       onClick={onClick}
//       aria-label={`Go to slide ${index + 1}`}
//       className="relative mx-1.5 h-1 w-8 rounded-full bg-white/30 overflow-hidden"
//     >
//       <div
//         className={cn(
//           "absolute top-0 left-0 h-full bg-white",
//           isActive ? "transition-all duration-100" : "w-0"
//         )}
//         style={{ width: isActive ? `${progress * 100}%` : '0%' }}
//       />
//     </button>
//   );
// }


import { cn } from "@/lib/utils";

type CarouselButtonProps = {
  onClick: () => void;
  className?: string;
};

export function PrevButton({ onClick, className }: CarouselButtonProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "absolute top-1/2 -translate-y-1/2 left-4 z-10 w-10 h-10 rounded-full bg-white/30 backdrop-blur flex items-center justify-center hover:bg-white/50 transition-all",
        className
      )}
      aria-label="Previous slide"
    >
      ←
    </button>
  );
}

export function NextButton({ onClick, className }: CarouselButtonProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "absolute top-1/2 -translate-y-1/2 right-4 z-10 w-10 h-10 rounded-full bg-white/30 backdrop-blur flex items-center justify-center hover:bg-white/50 transition-all",
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
  index,
}: {
  selected: boolean;
  onClick: () => void;
  index?: number;
}) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "w-3 h-3 rounded-full mx-1 transition-all",
        selected ? "bg-white w-6" : "bg-white/50"
      )}
      aria-label={`Aller à la diapositive ${index ?? "inconnue"}${selected ? " (actuelle)" : ""}`}
    />
  );
}
