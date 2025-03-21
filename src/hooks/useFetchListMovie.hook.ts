import { useQuery } from "@tanstack/react-query";
import { APIMovieResponse } from "../types/Movie.types";
import { BASE_URL, TOKEN_TMDB } from "../constans/base.constant";

const fetchPopularMovies = async (
  page: number,
  searchKeyword: string
): Promise<APIMovieResponse> => {
  const header = {
    headers: {
      Authorization: `Bearer ${TOKEN_TMDB}`,
      accept: "application/json",
    },
  };

  const response = searchKeyword
    ? await fetch(
        `${BASE_URL}/search/movie?query=${searchKeyword}&page=${page}`,
        header
      )
    : await fetch(`${BASE_URL}/movie/popular?page=${page}`, header);

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  return response.json();
};

export const usePopularMovies = (page: number, search: string) => {
  return useQuery<APIMovieResponse, Error>({
    queryKey: ["popularMovies", page, search],
    queryFn: () => fetchPopularMovies(page, search),
  });
};
