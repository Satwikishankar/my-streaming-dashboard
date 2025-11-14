"use client";

import Image from "next/image";
import Link from "next/link";
import type { Movie } from "@/types/movie";

type MovieCardProps = {
  movie: Movie;
  tabIndex?: number;
};

export default function MovieCard({ movie, tabIndex = 0 }: MovieCardProps) {
  const title = movie.title ?? movie.name ?? "Untitled";
  const posterUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w342${movie.poster_path}`
    : null;

  return (
    <Link
      href={`/movie/${movie.id}`}
      className="group relative flex w-40 shrink-0 flex-col space-y-2 rounded-md transition-transform hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red sm:w-48"
      tabIndex={tabIndex}
    >
      <div className="aspect-[2/3] overflow-hidden rounded-md bg-black/50 shadow-poster">
        {posterUrl ? (
          <Image
            src={posterUrl}
            alt={`${title} poster`}
            width={342}
            height={513}
            className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
            sizes="(max-width: 640px) 160px, 192px"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-brand-dark to-black text-sm text-white/70">
            Poster unavailable
          </div>
        )}
      </div>
      <div className="space-y-1 px-1">
        <p className="line-clamp-2 text-sm font-semibold text-white">{title}</p>
        <p className="text-xs text-white/60">
          {movie.release_date ?? movie.first_air_date ?? "TBA"}
        </p>
      </div>
    </Link>
  );
}


