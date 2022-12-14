import React, { useRef, useState } from "react";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";
import { Movie } from "../types";
import Thumbnail from "./Thumbnail";

interface RowProps {
  title: string;
  movies: Movie[];
}

const Row: React.FC<RowProps> = ({ title, movies }) => {
  const rowRef = useRef<HTMLDivElement | null>(null);
  const [isMoved, setIsMoved] = useState(false);

  const handleClick = (dir: string) => {
    setIsMoved(true);
    if (rowRef.current) {
      const { scrollLeft, clientWidth } = rowRef.current;
      const scrollTo =
        dir === "left" ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      rowRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <div className="h-40 space-y-0.5 md:space-y-4">
      <h2 className="w-56 cursor-pointer text-sm font-semibold text-[#e5e5e5] transition duration-200 hover:text-white md:text-2xl">
        {title}
      </h2>
      <div className="group relative md:-ml-2">
        <FaChevronCircleLeft
          onClick={() => {
            handleClick("left");
          }}
          className={`absolute top-0 bottom-0 left-2 z-40 m-auto opacity-0 h-5 w-5 cursor-pointer transition hover:scale-125 group-hover:opacity-100 ${
            !isMoved && "hidden"
          }`}
        />
        <div
          ref={rowRef}
          className="flex items-center space-x-0.5 overflow-x-scroll md:space-x-2.5 md:p-2"
        >
          {movies.map((movie) => (
            <Thumbnail key={movie.id} movie={movie} />
          ))}
        </div>
        <FaChevronCircleRight
          onClick={() => {
            handleClick("right");
          }}
          className="absolute top-0 bottom-0 right-2 z-40 m-auto opacity-0 h-5 w-5 cursor-pointer transition hover:scale-125 group-hover:opacity-100"
        />
      </div>
    </div>
  );
};

export default Row;
