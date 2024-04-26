import { create } from "zustand";

export const moviesStore = create((set) => ({
  movies: [],
  addMovies: (movie: any) =>
    set((state: any) => ({ movies: [...state.movies, ...movie] })),
}));
