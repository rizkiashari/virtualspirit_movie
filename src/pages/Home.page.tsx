import { useState } from "react";
import TextField from "../components/atom/TextField";
import Card from "../components/molekul/Card";
import { usePopularMovies } from "../hooks/useFetchListMovie.hook";
import useDebounce from "../hooks/useDebounce.hook";

const HomePage = () => {
  const [page, setPage] = useState(1);

  const [searchTerm, setSearchTerm] = useState("");

  const debouncedSearchTerm = useDebounce(searchTerm, 1000);

  const { data, error, isLoading } = usePopularMovies(
    page,
    debouncedSearchTerm as string
  );

  const handleSearch = (val: string) => {
    setSearchTerm(val);
    setPage(1);
  };

  return (
    <div className="mt-8">
      <div className="flex justify-end">
        <TextField
          onChange={(e: Event) => {
            const target = e.target as HTMLInputElement;
            const value = target.value;
            handleSearch(value);
          }}
          placeholder="Search Movie"
          type="text"
        />
      </div>
      <p className="text-lg md:text-2xl lg:text-3xl font-bold mt-10 mb-8">
        Welcome to Movie App
      </p>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-6">
        {isLoading ? (
          Array.from({ length: 10 }, (_, index) => (
            <div key={index} className="skeleton h-full w-[15rem]" />
          ))
        ) : error ? (
          <p className="text-red-500">Error: {error.message}</p>
        ) : (
          data?.results.map((movie) => (
            <Card
              key={movie.id}
              title={movie.title}
              poster_path={movie.poster_path}
              overview={movie.overview}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default HomePage;
