"use client";
import React, { useState, useEffect } from "react";
import { CircularProgress } from "@nextui-org/progress";
import { HeartIcon } from "@heroicons/react/24/solid";

function Baner(): JSX.Element {
  const [liked, setLiked] = useState<boolean>(false);
  const [movie, setMovie] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const handleLikeClick = (): void => {
    setLiked(!liked);
  };

  const fetchRandomMovie = async () => {
    const apiKey = "72f0ebbfbfaff5720901a14b76a0bb6b";
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`
      );
      const data = await response.json();
      const randomMovie =
        data.results[Math.floor(Math.random() * data.results.length)];
      setMovie(randomMovie);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRandomMovie();
  }, []);

  if (loading) {
    return <CircularProgress color="success" aria-label="Loading movie..." />;
  }

  return (
    <div className="relative w-full h-[300px] md:h-[500px]">
      <img
        src={`https://image.tmdb.org/t/p/original${movie?.backdrop_path}`}
        alt={`Banner de la película ${movie?.title}`}
        className="w-full h-full object-cover"
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-black/100 to-transparent"
        aria-hidden="true"
      ></div>
      <div className="absolute bottom-0 w-full h-1/3 md:h-1/4 bg-gradient-to-t from-black via-black to-transparent p-4 text-white">
        <div className="flex flex-col h-full justify-end">
          <div className="grid grid-cols-1 md:grid-cols-10 gap-4 p-4">
            <div className="col-span-1 md:col-span-6 hidden md:block">
              <h1 className="text-xl md:text-3xl font-bold text-left">
                {movie?.title}
              </h1>
              <p className="mt-2 text-sm md:text-lg text-left">
                {movie?.overview}
              </p>
            </div>
            <div className="col-span-1 md:col-start-9 md:col-end-10 flex items-center space-x-4">
              <button
                onClick={handleLikeClick}
                className={`p-2 rounded-full ${liked ? "text-red-500" : "text-gray-300"} transition-colors duration-300`}
                aria-label={liked ? "Unlike" : "Like"}
              >
                <HeartIcon className="w-6 h-6 md:w-8 md:h-8" />
              </button>
              <CircularProgress
                classNames={{
                  svg: "w-16 h-16 md:w-20 md:h-20 drop-shadow-md",
                  value: "text-base md:text-xl font-semibold",
                }}
                value={movie?.vote_average ? movie.vote_average * 10 : 0}
                color="success"
                showValueLabel={true}
                aria-label={`Progress of ${movie?.vote_average * 10 || 0}%`}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Baner;
