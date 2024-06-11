// src/types/mappings.ts
import { MovieCategory } from "./enums";

export const movieCategoryDisplayMap = new Map<MovieCategory, string>([
  [MovieCategory.Series, "Phim bộ"],
  [MovieCategory.Movie, "Phim lẻ"],
  [MovieCategory.Animation, "Hoạt hình"],
  [MovieCategory.TVShow, "TV Shows"],
]);
