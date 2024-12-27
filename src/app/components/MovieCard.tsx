"use client";
import { useState, useEffect } from "react";
import { CircularProgress } from "@nextui-org/progress";
import { useStore } from "../store/useStore";
import Like from "../components/Like";

const MovieCard = () => {
  const { selectedMovie } = useStore();
  const [showTrailer, setShowTrailer] = useState(false);
  const [trailerUrl, setTrailerUrl] = useState<string | null>(null);
  const [loadingTrailer, setLoadingTrailer] = useState<boolean>(false);

  useEffect(() => {
    if (selectedMovie) {
      fetchTrailer(selectedMovie.id);
    }
  }, [selectedMovie]);

  const fetchTrailer = async (movieId: number) => {
    setLoadingTrailer(true);
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=72f0ebbfbfaff5720901a14b76a0bb6b`
      );
      const data = await response.json();

      const trailer = data.results.find(
        (video: any) => video.site === "YouTube" && video.type === "Trailer"
      );
      if (trailer) {
        setTrailerUrl(trailer.key);
      } else {
        setTrailerUrl(null);
      }
    } catch (error) {
      console.error("Error fetching trailer:", error);
      setTrailerUrl(null);
    } finally {
      setLoadingTrailer(false);
    }
  };

  if (!selectedMovie) {
    return <div className="text-white">No movie selected.</div>;
  }

  const tagClasses =
    "bg-muted text-muted-foreground rounded-full px-3 py-1 mr-2 mb-2 bg-red-200";
  const backdropUrl = selectedMovie.backdrop_path
    ? `https://image.tmdb.org/t/p/w1280/${selectedMovie.backdrop_path}`
    : "default-image-url.jpg";

  return (
    <div
      className="relative w-full h-[500px] bg-cover bg-center rounded-lg"
      style={{ backgroundImage: `url(${backdropUrl})` }}
    >
      <div className="bg-black/50 absolute inset-0 rounded-lg ">
        <div className="relative w-full h-full p-4 grid grid-cols-4 gap-4">
          <div className="flex flex-col items-center ">
            <img
              src={`https://image.tmdb.org/t/p/w500/${selectedMovie.poster_path}`}
              alt={selectedMovie.title}
              className="rounded-lg"
              style={{
                width: "305px",
                height: "395px",
                marginTop: "10px",
              }}
            />
            <div className="mt-4 w-[305px]">
              <button
                className="text-black hover:bg-secondary/80 w-full h-[46px] text-center rounded-lg bg-buttonColor"
                onClick={() => setShowTrailer(true)}
              >
                Oficial Trailer
              </button>
            </div>
          </div>

          <div className="col-span-3 text-white mt-5 ">
            <h2 className="text-white text-[35px] leading-[39px] font-bold flex items-center">
              {selectedMovie.title} ({selectedMovie.release_date.slice(0, 4)})
            </h2>
            <p>
              {selectedMovie.release_date} {selectedMovie.runtime} min.
            </p>
            <h3 className="mt-4 text-lg font-semibold">Overview:</h3>
            <p
              className="text-white text-[16px] leading-[22px] font-normal"
              style={{ width: "841px", height: "128px" }}
            >
              {selectedMovie.overview}
            </p>
            <div className="flex items-center mt-4">
              <CircularProgress
                classNames={{
                  svg: "w-32 h-32 drop-shadow-md",
                  value: "text-2xl font-semibold text-white",
                }}
                value={selectedMovie.vote_average * 10}
                color="success"
                showValueLabel={true}
              />
              <span className="ml-2">Users Score</span>

              <Like movieId={selectedMovie.id} />
            </div>
            <div className="mt-4 flex flex-wrap">
              {selectedMovie.genres?.map((genre) => (
                <span key={genre.id} className={tagClasses}>
                  {genre.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {showTrailer && trailerUrl && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
          <div className="relative w-[80%] h-[80%] md:w-[70%] md:h-[70%] bg-black">
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${trailerUrl}`}
              title="Trailer"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <button
              className="absolute top-[-40px] right-[-50px] text-white font-bold bg-red-600 p-2 rounded-full opacity-70 hover:opacity-100 w-8 h-8 flex justify-center items-center"
              onClick={() => setShowTrailer(false)}
            >
              <span className="text-xl">X</span>
            </button>
          </div>
        </div>
      )}

      {loadingTrailer && !trailerUrl && (
        <div className="absolute inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
          <CircularProgress size="lg" color="primary" />
        </div>
      )}
    </div>
  );
};

export default MovieCard;
