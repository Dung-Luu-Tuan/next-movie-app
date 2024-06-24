export interface MoviesListProps {
  name: string;
  list: any;
  type: string;
}

export interface VideoPlayerProps {
  src: string;
}

export interface MoviePageProps {
  movieDetail: any;
  movieEpisodes: any;
}

export interface MovieState {
  movies: any[];
  addMovies: (movies: any[]) => void;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
}

export interface MovieDetail {
  name: string;
  origin_name: string;
  poster_url: string;
  director: string[];
  time: string;
  year: string;
  trailer_url: string;
  category: Category[];
  content: string;
  actor: string[];
  slug: string;
  episode_current: string;
}

export interface VideoData {
  name: string;
  slug: string;
  link_embed: string;
  link_m3u8: string;
}

export interface EpisodesProps {
  episodes: VideoData[] | null;
  poster: string | undefined;
  slug: string | undefined;
}

export interface MoviesDetailProps {
  movieDetail: MovieDetail | null;
  movieEpisodes: VideoData[] | null;
  slug?: string | null;
  episode: number;
}
