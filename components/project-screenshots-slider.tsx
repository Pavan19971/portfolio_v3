"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";

type Screenshot = {
  src: string;
  alt: string;
  caption?: string;
};

interface ProjectScreenshotsSliderProps {
  screenshots: Screenshot[];
  projectSlug: string;
}

export function ProjectScreenshotsSlider({
  screenshots,
  projectSlug,
}: ProjectScreenshotsSliderProps) {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scrollByAmount = (direction: "left" | "right") => {
    if (!sliderRef.current) return;

    const amount = sliderRef.current.clientWidth * 0.85;
    sliderRef.current.scrollBy({
      left: direction === "right" ? amount : -amount,
      behavior: "smooth",
    });
  };

  if (screenshots.length === 0) return null;

  return (
    <section id="screenshots" className="my-6">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-lg font-semibold">Screenshots</h2>

        {screenshots.length > 1 && (
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => scrollByAmount("left")}
              className="inline-flex items-center justify-center w-8 h-8 transition-colors border rounded-md border-border hover:bg-muted"
              aria-label="Previous screenshot"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => scrollByAmount("right")}
              className="inline-flex items-center justify-center w-8 h-8 transition-colors border rounded-md border-border hover:bg-muted"
              aria-label="Next screenshot"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>

      <div
        ref={sliderRef}
        className="flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory no-scrollbar"
      >
        {screenshots.map((screenshot) => (
          <figure
            key={`${projectSlug}-${screenshot.src}`}
            className="flex-none w-[92%] md:w-[60%] lg:w-[48%] snap-start overflow-hidden border rounded-lg border-border bg-muted/20"
          >
            <div className="relative w-full aspect-[16/9]">
              <Image
                src={screenshot.src}
                alt={screenshot.alt}
                fill
                sizes="(max-width: 768px) 92vw, (max-width: 1024px) 60vw, 48vw"
                className="object-cover"
              />
            </div>
            {screenshot.caption && (
              <figcaption className="p-3 text-sm text-muted-foreground">
                {screenshot.caption}
              </figcaption>
            )}
          </figure>
        ))}
      </div>
    </section>
  );
}
