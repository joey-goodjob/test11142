"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

interface GameFrameProps {
  src: string;
  title: string;
  className?: string;
}

export function GameFrame({ src, title, className }: GameFrameProps) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="relative w-full aspect-video">
      <iframe
        src={src}
        title={title}
        className={cn(
          "w-full h-full border-0 rounded-lg shadow-lg",
          isLoading ? "opacity-0" : "opacity-100 transition-opacity duration-300",
          className
        )}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        onLoad={() => setIsLoading(false)}
      />
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-muted rounded-lg">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
        </div>
      )}
    </div>
  );
}