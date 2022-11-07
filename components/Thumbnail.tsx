import Image from "next/image";
import React from "react";
import { useRecoilState } from "recoil";
import { modalState, movieState } from "../atoms/modalAtom";
import { baseUrl } from "../constants/movie";
import { Movie } from "../types";
interface ThumbnailProps {
  movie: Movie;
}
const Thumbnail: React.FC<ThumbnailProps> = ({ movie }) => {
  const [, setShowModal] = useRecoilState(modalState);
  const [, setMovie] = useRecoilState(movieState);
  return (
    <div
      onClick={() => {
        setShowModal(true);
        setMovie(movie);
      }}
      className="relative h-28 min-w-[180px] cursor-pointer transition duration-200 ease-out md:h-36 md:min-w[260px] md:hover:scale-105"
    >
      <Image
        src={`https://image.tmdb.org/t/p/w500${
          movie.backdrop_path || movie.poster_path
        }`}
        alt=""
        fill
        className="rounded-sm object-cover md:rounded"
      />
    </div>
  );
};

export default Thumbnail;
