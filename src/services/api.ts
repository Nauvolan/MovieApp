import type { SearchParams } from "../interfaces/Movies";
const API_BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${API_KEY}`,
  },
};

// const [errorMessage, setErrorMessage] = useState("");
// const [moviesList, setMoviesList] = useState([]);
// const [isLoading, setIsLoading] = useState(false);
console.log(`este es el ${API_KEY}`);

export const fetchMovies = async ({ searchTerm }: SearchParams) => {
  //   setIsLoading(true);
  const endpoint = `${API_BASE_URL}/search/movie?query=${searchTerm}&language=en-US&page=1&include_adult=false`;
  const response = await fetch(endpoint, API_OPTIONS);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  // const data = await response.json();
  // setMoviesList(data);

  return await response.json();
};
