import { create } from "zustand";

interface Movie {
  id: number;
  title: string;
  poster_path: string;
  backdrop_path: string;
  overview: string;
  vote_average: number;
  release_date: string;
  runtime: number;
  genres: { id: number; name: string }[];
  tags?: Array<{ name: string }>;
  trailer_url?: string;
}

interface MovieStore {
  selectedMovie: Movie | null;
  movies: Movie[]; // Necesitas agregar la propiedad movies
  setSelectedMovie: (movie: Movie) => void;
  setMovies: (movies: Movie[]) => void;
}

export const useStore = create<MovieStore>((set) => ({
  selectedMovie: null,
  movies: [],
  setSelectedMovie: (movie) => set({ selectedMovie: movie }),
  setMovies: (movies) => set({ movies }),
}));
