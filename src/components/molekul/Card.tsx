import { FC } from "react";
import { CardProps } from "../../types/Card.types";

const Card: FC<CardProps> = ({ title, poster_path, overview }) => {
  return (
    <div className="max-w-[20rem] relative after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-black/50 after:rounded-lg after:transition-all after:duration-300 hover:shadow-xl cursor-pointer">
      <img
        src={`https://image.tmdb.org/t/p/original${poster_path}`}
        alt="Movie Poster"
        className="w-full h-full rounded-lg object-cover"
      />
      <div className="absolute bottom-3 z-10 px-4 py-2">
        <h2 className="text-white text-md md:text-2xl mb-1">{title}</h2>
        <p className="text-white text-[0.8rem] md:text-md truncate max-w-[12rem]">
          {overview}
        </p>
      </div>
    </div>
  );
};

export default Card;
