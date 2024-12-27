"use client";
import React from "react";
import Baner from "../components/Baner";
import MovieCard from "../components/MovieCard";
import { useStore } from "../store/useStore";

function SelectBaner() {
  const { selectedMovie } = useStore();

  return <div>{selectedMovie ? <MovieCard /> : <Baner />}</div>;
}

export default SelectBaner;
