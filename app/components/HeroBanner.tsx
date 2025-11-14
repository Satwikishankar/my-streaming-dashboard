import Image from "next/image";
import Link from "next/link";
import type { Movie } from "@/types/movie";

type HeroBannerProps = {
  movie: Movie | null;
};

export default function HeroBanner({ movie }: HeroBannerProps) {
  if (!movie) {
    return (
      <section className="relative mb-12 grid min-h-[60vh] place-content-center bg-brand-dark px-4 text-center">
        <div className="mx-auto max-w-xl space-y-4">
          <h1 className="text-3xl font-semibold sm:text-4xl">No feature available</h1>
          <p className="text-base text-white/70">
            We couldn&apos;t load featured content right now. Please check your API key or try again later.
          </p>
        </div>
      </section>
    );
  }

  const title = movie.title ?? movie.name ?? movie.original_title ?? "Featured title";
  const backdropUrl = movie.backdrop_path
    ? `https://image.tmdb.org/t/p/original${movie.backdrop_path}`
    : null;

  return (
    <section className="relative mb-12 min-h-[70vh] overflow-hidden">
      {backdropUrl ? (
        <Image
          src={backdropUrl}
          alt={`${title} backdrop`}
          fill
          className="object-cover"
          priority
        />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-brand-dark via-black to-brand-dark" />
      )}
      <div className="absolute inset-0 bg-gradient-overlay" />
      <div className="relative z-10 mx-auto flex min-h-[70vh] max-w-6xl flex-col justify-center px-4 pb-16 pt-32 sm:px-6">
        <div className="max-w-2xl space-y-6">
          <h1 className="text-4xl font-semibold sm:text-5xl">{title}</h1>
          <p className="text-base text-white/80 sm:text-lg">
            {movie.overview}
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              className="inline-flex items-center justify-center rounded-full bg-brand-red px-6 py-2 text-sm font-semibold text-white transition hover:bg-brand-red/90"
              href={`/movie/${movie.id}`}
            >
              Play
            </Link>
            <Link
              className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-2 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10"
              href={`/movie/${movie.id}`}
            >
              More Info
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}


