"use client";

import { Movie } from "../../Interface/types";
import React, { useEffect, useState } from "react";
import MovieTarget from "./MovieTarget";

function Content() {
  const [allMovies, setAllMovies] = useState<Movie[]>([]);
  const [popularMovies, setPopularMovies] = useState<Movie[]>([]);
  const [horrorMovies, setHorrorMovies] = useState<Movie[]>([]);
  const [scienceMovies, setScienceMovies] = useState<Movie[]>([]);
  const [animeMovies, setAnimeMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchMovies = async (genreId: string) => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/discover/movie?api_key=72f0ebbfbfaff5720901a14b76a0bb6b&with_genres=${genreId}`
        );
        const data = await response.json();
        return data.results;
      } catch (error) {
        console.error("Error fetching movies:", error);
        return [];
      }
    };

    const fetchAllMovies = async () => {
      const popular = await fetchMovies("");
      const horror = await fetchMovies("27");
      const science = await fetchMovies("10402");
      const anime = await fetchMovies("16");

      const combinedMovies = [...popular, ...horror, ...science, ...anime];
      const uniqueMovies = Array.from(
        new Map(combinedMovies.map((movie) => [movie.id, movie])).values()
      );

      setAllMovies(uniqueMovies);

      setPopularMovies(
        uniqueMovies.filter((movie) =>
          popular.some((p: any) => p.id === movie.id)
        )
      );
      setHorrorMovies(
        uniqueMovies.filter((movie) =>
          horror.some((h: any) => h.id === movie.id)
        )
      );
      setScienceMovies(
        uniqueMovies.filter((movie) =>
          science.some((s: any) => s.id === movie.id)
        )
      );
      setAnimeMovies(
        uniqueMovies.filter((movie) =>
          anime.some((a: any) => a.id === movie.id)
        )
      );
    };

    fetchAllMovies();
  }, []);

  return (
    <div className="bg-secondary-dark text-white min-h-screen">
      <main className="p-4">
        <h2 className="text-xl font-semibold">Popular</h2>
        <div className="flex flex-wrap justify-center gap-4 mt-4 sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {popularMovies.slice(0, 5).map((movie) => (
            <MovieTarget key={movie.id} movie={movie} />
          ))}
        </div>
        <h2 className="mt-8 text-xl font-semibold">Terror</h2>
        <div className="flex flex-wrap justify-center gap-4 mt-4 sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {horrorMovies.slice(0, 5).map((movie) => (
            <MovieTarget key={movie.id} movie={movie} />
          ))}
        </div>
        <h2 className="mt-8 text-xl font-semibold">Musical</h2>
        <div className="flex flex-wrap justify-center gap-4 mt-4 sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {scienceMovies.slice(0, 5).map((movie) => (
            <MovieTarget key={movie.id} movie={movie} />
          ))}
        </div>
        <h2 className="mt-8 text-xl font-semibold">Anime</h2>
        <div className="flex flex-wrap justify-center gap-4 mt-4 sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {animeMovies.slice(0, 5).map((movie) => (
            <MovieTarget key={movie.id} movie={movie} />
          ))}
        </div>
      </main>
    </div>
  );
}

export default Content;
