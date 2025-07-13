import { useCallback, useState } from "react";
import type { Movie, SearchParams } from "../interfaces/Movies";
import { fetchMovies } from "../services/api";

export const useMovie = () => {
  const [movieList, setMovieList] = useState<Movie[]>([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const searchMovies = useCallback(async ({ searchTerm }: SearchParams) => {
    setIsLoading(true);
    try {
      const data = await fetchMovies({ searchTerm });
      setMovieList(data.results);
    } catch (error) {
      setErrorMessage("Error fetching movies" + error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return {
    movieList,
    errorMessage,
    isLoading,
    searchMovies,
  };
};
