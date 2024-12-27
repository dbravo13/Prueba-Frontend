"use client";
import React, { useState, useEffect } from "react";
import { useStore } from "../store/useStore";

function Sidebar(): JSX.Element {
  const [categories, setCategories] = useState<any[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchedMovies, setSearchedMovies] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const { setSelectedMovie, setMovies } = useStore();

  useEffect(() => {
    const fetchCategories = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/genre/movie/list?api_key=72f0ebbfbfaff5720901a14b76a0bb6b&language=en-US`
        );
        const data = await response.json();
        setCategories(data.genres);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching categories", error);
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  const fetchMoviesByCategory = async (categoryId: number) => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/discover/movie?api_key=72f0ebbfbfaff5720901a14b76a0bb6b&with_genres=${categoryId}&language=en-US`
      );
      const data = await response.json();
      setMovies(data.results);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching movies by category", error);
      setLoading(false);
    }
  };

  const handleSearch = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);

    if (!e.target.value) {
      setSearchedMovies([]);
      return;
    }

    setLoading(true);
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=72f0ebbfbfaff5720901a14b76a0bb6b&query=${e.target.value}&language=en-US`
      );
      const data = await response.json();
      setSearchedMovies(data.results);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching search results", error);
      setLoading(false);
    }
  };

  return (
    <div className="bg-primary text-white w-64 p-4">
      <input
        type="text"
        placeholder="Search for movies..."
        value={searchTerm}
        onChange={handleSearch}
        className="w-full p-2 rounded bg-secondary-first text-white mb-4"
      />

      <h2 className="text-xl font-bold mb-2">Categories</h2>
      <div className="h-60 overflow-y-auto py-2 bg-secondary-first rounded-lg">
        {categories.map((category) => (
          <div
            key={category.id}
            onClick={() => fetchMoviesByCategory(category.id)}
            className="cursor-pointer p-2 rounded-lg hover:bg-gray-600 transition-all"
          >
            {category.name}
          </div>
        ))}
      </div>

      {searchedMovies.length > 0 && (
        <div className="mt-4">
          <h2 className="text-xl font-bold mb-2">Search Results</h2>
          <div className="h-[500px] overflow-y-auto py-2 bg-secondary-first rounded-lg">
            {searchedMovies.map((movie) => (
              <div
                key={movie.id}
                className="cursor-pointer p-2 rounded-lg hover:bg-gray-600 transition-all"
                onClick={() => setSelectedMovie(movie)}
              >
                <div className="flex items-center">
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                    alt={movie.title}
                    className="w-16 h-24 mr-4"
                  />
                  <div>
                    <h3 className="text-lg">{movie.title}</h3>
                    <p className="text-sm">{movie.release_date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Sidebar;
