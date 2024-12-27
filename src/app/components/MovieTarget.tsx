"use client";

import React from "react";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import { CircularProgress } from "@nextui-org/progress";
import Like from "./Like";
import { useStore } from "../store/useStore";

function MovieTarget({ movie }: { movie: any }) {
  const setSelectedMovie = useStore((state) => state.setSelectedMovie);

  return (
    <div className="w-[200px] h-[335px]">
      <Card
        shadow="sm"
        isPressable
        onClick={() => setSelectedMovie(movie)}
        className="w-full h-full bg-primary"
      >
        {" "}
        <CardBody className="overflow-visible p-0 h-[223px]">
          <Image
            shadow="sm"
            radius="lg"
            width="200px"
            height="223px"
            alt={movie.title}
            className="object-cover w-full h-full"
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          />
        </CardBody>
        <CardFooter className="flex flex-col items-start p-1 gap-2 bg-primary h-[100px] w-full">
          <div className="flex flex-col items-start gap-1">
            <b className="text-white text-sm font-bold text-left">
              {movie.title}
            </b>
            <p className="text-white text-xs text-left">{movie.release_date}</p>
          </div>
          <div className="flex flex-row justify-between items-start w-full h-[45px]">
            <div className="flex flex-col items-center justify-center gap-1 w-[59px] h-[45px] overflow-hidden box-border">
              <div className="text-white text-xs">Rating</div>
              <CircularProgress
                classNames={{
                  svg: "w-6 h-6 drop-shadow-md",
                  value: "text-xxs font-semibold text-white",
                }}
                value={movie.vote_average * 10}
                color="success"
                showValueLabel={true}
              />
            </div>
            <div className="flex flex-col items-center justify-center gap-2 w-[59px] h-[45px]">
              <div className="text-white text-xs">Favorites</div>
              <div className="flex items-center justify-center w-[40px] h-[20px] ">
                <Like movieId={movie.id} />
              </div>
            </div>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}

export default MovieTarget;
