export interface Movie {
  id: number;
  title?: string;
  name?: string;
  original_title?: string;
  overview: string;
  poster_path: string | null;
  backdrop_path: string | null;
  release_date?: string;
  first_air_date?: string;
  genre_ids?: number[];
  vote_average: number;
  popularity: number;
}

export interface MovieDetail extends Movie {
  tagline?: string;
  runtime?: number;
  genres: Array<{
    id: number;
    name: string;
  }>;
  homepage?: string;
  status?: string;
  spoken_languages?: Array<{
    iso_639_1: string;
    name: string;
    english_name?: string;
  }>;
  production_companies?: Array<{
    id: number;
    name: string;
  }>;
}


