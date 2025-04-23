// src/components/ui/ArticleButton.tsx
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function ArticleButton({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href}>
      <Button className="mt-6 bg-[#8B4513] hover:bg-[#5C4033] text-white group">
        {children} <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
      </Button>
    </Link>
  );
}