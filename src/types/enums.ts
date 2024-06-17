export enum MovieCategory {
  Series = "phim-bo",
  Movie = "phim-le",
  Animation = "hoat-hinh",
  TVShow = "tv-shows",
}

export const MovieCategoryDisplayName: Record<MovieCategory, string> = {
  [MovieCategory.Series]: "Phim bộ",
  [MovieCategory.Movie]: "Phim lẻ",
  [MovieCategory.Animation]: "Hoạt hình",
  [MovieCategory.TVShow]: "TV Shows",
};

type MovieTypes = (typeof MovieCategory)[keyof typeof MovieCategory];

// Convert thành một mảng các giá trị
export const MovieTypesArray: MovieTypes[] = Object.values(MovieCategory);
