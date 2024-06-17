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

export interface MovieDetails {
  movieDetail: any;
  movieEpisodes: any;
}
