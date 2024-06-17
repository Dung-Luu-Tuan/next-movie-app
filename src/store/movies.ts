import { MovieState } from "@/types";
import { create } from "zustand";

export const moviesStore = create<MovieState>((set) => ({
  movies: [],
  addMovies: (movie) =>
    set((state: any) => ({ movies: [...state.movies, ...movie] })),
}));
