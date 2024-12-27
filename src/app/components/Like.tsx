"use client";
import React, { useState, useEffect } from "react";
import { HeartIcon } from "@heroicons/react/24/solid";

interface LikeProps {
  movieId: number;
}

function Like({ movieId }: LikeProps): React.ReactNode {
  const [liked, setLiked] = useState<boolean>(false);
  const [isClient, setIsClient] = useState<boolean>(false);

  useEffect(() => {
    setIsClient(true);
    const savedFavorites = JSON.parse(
      localStorage.getItem("favorites") || "[]"
    );
    if (savedFavorites.includes(movieId)) {
      setLiked(true);
    }
  }, [movieId]);

  const handleLikeClick = (): void => {
    setLiked((prevLiked) => {
      const updatedLiked = !prevLiked;

      const savedFavorites = JSON.parse(
        localStorage.getItem("favorites") || "[]"
      );
      const updatedFavorites = updatedLiked
        ? [...savedFavorites, movieId]
        : savedFavorites.filter((id: number) => id !== movieId);

      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
      return updatedLiked;
    });
  };

  if (!isClient) {
    return null;
  }

  return (
    <div>
      <button
        onClick={handleLikeClick}
        className={`p-2 rounded-full ${liked ? "text-red-500" : "text-gray-300"} transition-colors duration-300`}
        aria-label="Toggle Favorite"
      >
        <HeartIcon className="w-6 h-6" />
      </button>
    </div>
  );
}

export default Like;
