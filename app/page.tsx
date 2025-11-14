import HeroBanner from "./components/HeroBanner";
import MovieRow from "./components/MovieRow";
import { fetchCategory, fetchPopular } from "@/lib/tmdb";
import type { Movie } from "@/types/movie";

export const revalidate = 60;

type HomeData = {
  popular: Movie[];
  topRated: Movie[];
  nowPlaying: Movie[];
  upcoming: Movie[];
};

async function getHomeData(): Promise<HomeData> {
  const [popular, topRated, nowPlaying, upcoming] = await Promise.all([
    fetchPopular(),
    fetchCategory("top_rated"),
    fetchCategory("now_playing"),
    fetchCategory("upcoming")
  ]);

  return { popular, topRated, nowPlaying, upcoming };
}

export default async function HomePage() {
  try {
    const data = await getHomeData();
    const heroMovie = data.popular[0] ?? null;

    return (
      <div className="space-y-12 pb-16">
        <HeroBanner movie={heroMovie} />
        <div className="space-y-12">
          <MovieRow
            movies={data.popular}
            categoryTitle="Popular on StreamSphere"
            anchorId="popular"
          />
          <MovieRow
            movies={data.topRated}
            categoryTitle="Top Rated"
            anchorId="top-rated"
          />
          <MovieRow
            movies={data.nowPlaying}
            categoryTitle="Now Playing in Theaters"
            anchorId="now-playing"
          />
          <MovieRow
            movies={data.upcoming}
            categoryTitle="Coming Soon"
            anchorId="upcoming"
          />
        </div>
      </div>
    );
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Unexpected error fetching movies.";

    return (
      <div className="mx-auto max-w-3xl space-y-6 px-4 pb-16 pt-24 text-center sm:px-6">
        <h1 className="text-3xl font-semibold">Unable to load movies</h1>
        <p className="text-base text-white/70">
          {message} Please verify that the TMDB API key is correctly configured and try
          again.
        </p>
      </div>
    );
  }
}


