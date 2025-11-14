import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { fetchMovieById } from "@/lib/tmdb";

type PageProps = {
  params: {
    id: string;
  };
};

export const revalidate = 60;

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  try {
    const movie = await fetchMovieById(params.id);
    const title = movie.title ?? movie.name ?? "Movie detail";
    return {
      title: `${title} | StreamSphere`,
      description: movie.overview
    };
  } catch {
    return {
      title: "Movie not found | StreamSphere"
    };
  }
}

export default async function MovieDetailPage({ params }: PageProps) {
  try {
    const movie = await fetchMovieById(params.id);
    const title = movie.title ?? movie.name ?? "Untitled";
    const releaseDate = movie.release_date ?? movie.first_air_date ?? "TBA";
    const posterUrl = movie.poster_path
      ? `https://image.tmdb.org/t/p/w780${movie.poster_path}`
      : null;
    const backdropUrl = movie.backdrop_path
      ? `https://image.tmdb.org/t/p/original${movie.backdrop_path}`
      : null;

    return (
      <article className="relative isolate overflow-hidden pb-16">
        {backdropUrl ? (
          <Image
            src={backdropUrl}
            alt={`${title} backdrop`}
            fill
            className="object-cover opacity-30"
            priority
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-brand-dark via-black to-brand-dark opacity-60" />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/40 via-brand-dark to-brand-dark" />
        <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-4 pb-10 pt-28 sm:flex-row sm:px-6">
          <div className="mx-auto w-64 shrink-0 overflow-hidden rounded-xl bg-black/40 shadow-poster sm:mx-0 sm:w-80">
            {posterUrl ? (
              <Image
                src={posterUrl}
                alt={`${title} poster`}
                width={780}
                height={1170}
                className="h-full w-full object-cover"
                priority
              />
            ) : (
              <div className="flex h-full min-h-[420px] items-center justify-center px-4 text-center text-base text-white/70">
                Poster unavailable
              </div>
            )}
          </div>
          <div className="flex-1 space-y-6">
            <div className="space-y-2">
              <h1 className="text-3xl font-semibold sm:text-5xl">{title}</h1>
              <p className="text-sm uppercase tracking-wide text-white/60">
                Released {releaseDate}
              </p>
            </div>
            {movie.tagline ? (
              <p className="text-lg italic text-white/80">“{movie.tagline}”</p>
            ) : null}
            <p className="text-base leading-relaxed text-white/80">{movie.overview}</p>
            <dl className="grid gap-4 sm:grid-cols-2">
              <div>
                <dt className="text-xs uppercase tracking-wide text-white/60">Genres</dt>
                <dd className="text-sm text-white">
                  {movie.genres?.length
                    ? movie.genres.map((genre) => genre.name).join(", ")
                    : "Not specified"}
                </dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wide text-white/60">Runtime</dt>
                <dd className="text-sm text-white">
                  {movie.runtime ? `${movie.runtime} minutes` : "Not available"}
                </dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wide text-white/60">Language</dt>
                <dd className="text-sm text-white">
                  {movie.spoken_languages?.length
                    ? movie.spoken_languages
                        .map((lang) => lang.english_name ?? lang.name)
                        .join(", ")
                    : "Not available"}
                </dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wide text-white/60">
                  User Score
                </dt>
                <dd className="text-sm text-white">
                  {movie.vote_average ? `${Math.round(movie.vote_average * 10)}%` : "N/A"}
                </dd>
              </div>
            </dl>
            <div className="flex flex-wrap gap-3">
              {movie.homepage ? (
                <Link
                  href={movie.homepage}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-brand-red px-6 py-2 text-sm font-semibold text-white transition hover:bg-brand-red/90"
                >
                  Visit Official Site
                </Link>
              ) : null}
              <Link
                href="/"
                className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-2 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10"
              >
                Back to browse
              </Link>
            </div>
          </div>
        </div>
      </article>
    );
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Unexpected error fetching movie.";
    return (
      <div className="mx-auto max-w-3xl space-y-6 px-4 pb-16 pt-32 text-center sm:px-6">
        <h1 className="text-3xl font-semibold">Unable to load this movie</h1>
        <p className="text-base text-white/70">
          {message} Please confirm the movie is available and try again later.
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-2 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10"
        >
          Return home
        </Link>
      </div>
    );
  }
}


