"use client";

import { useRef } from "react";
import type { Movie } from "@/types/movie";
import MovieCard from "./MovieCard";

type MovieRowProps = {
  movies: Movie[];
  categoryTitle: string;
  anchorId?: string;
};

export default function MovieRow({ movies, categoryTitle, anchorId }: MovieRowProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (!scrollRef.current) return;
    const { key } = event;
    const scrollAmount = scrollRef.current.clientWidth * 0.75;

    if (key === "ArrowRight") {
      event.preventDefault();
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
    if (key === "ArrowLeft") {
      event.preventDefault();
      scrollRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    }
  };

  if (!movies.length) {
    return (
      <section className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="mb-4 text-lg font-semibold text-white">{categoryTitle}</h2>
        <div className="rounded-lg border border-white/10 bg-black/30 p-6 text-sm text-white/70">
          No titles available for this category right now.
        </div>
      </section>
    );
  }

  return (
    <section id={anchorId} className="mx-auto max-w-6xl px-4 sm:px-6">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-lg font-semibold text-white sm:text-2xl">{categoryTitle}</h2>
        <span className="text-xs uppercase tracking-wide text-white/50">
          Use arrow keys to navigate
        </span>
      </div>
      <div
        ref={scrollRef}
        className="scrollbar-hidden -mx-4 flex gap-4 overflow-x-auto px-4 pb-6 pt-2"
        role="list"
        tabIndex={0}
        onKeyDown={handleKeyDown}
        aria-label={`${categoryTitle} movies list`}
      >
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </section>
  );
}


