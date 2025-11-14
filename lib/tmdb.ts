import { Movie, MovieDetail } from "@/types/movie";

const API_URL = "https://api.themoviedb.org/3";
const API_KEY = process.env.TMDB_API_KEY;

if (!API_KEY) {
  console.warn(
    "[TMDB] Missing TMDB_API_KEY environment variable. Requests will fail without a valid key."
  );
}

type TMDBListResponse = {
  results: Movie[];
};

async function tmdbFetch<T>(path: string, query = ""): Promise<T> {
  if (!API_KEY) {
    throw new Error("TMDB API key is not configured. Set TMDB_API_KEY in your environment.");
  }

  const url = `${API_URL}${path}?api_key=${API_KEY}&language=en-US${query ? `&${query}` : ""}`;
  const res = await fetch(url, {
    next: { revalidate: 60 }
  });

  if (!res.ok) {
    const body = await res.text();
    throw new Error(`TMDB request failed (${res.status}): ${body}`);
  }

  return res.json();
}

export async function fetchPopular(): Promise<Movie[]> {
  const data = await tmdbFetch<TMDBListResponse>("/movie/popular");
  return data.results;
}

export async function fetchCategory(category: string): Promise<Movie[]> {
  const data = await tmdbFetch<TMDBListResponse>(`/movie/${category}`);
  return data.results;
}

export async function fetchMovieById(id: string): Promise<MovieDetail> {
  return tmdbFetch<MovieDetail>(`/movie/${id}`);
}


