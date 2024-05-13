export interface MoviesListProps {
  name: string;
  list: any;
}

export interface VideoPlayerProps {
  src: string;
}

export interface MoviePageProps {
  movieDetail: any; // Thay any bằng loại dữ liệu phù hợp cho movieDetail
  movieEpisodes: any; // Thay any bằng loại dữ liệu phù hợp cho movieEpisodes
}
