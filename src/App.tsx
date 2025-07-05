import { useEffect, useState } from "react";
import "./App.css";
import heroBbanner from "./assets/img/hero-img.png";
import Search from "./components/Search";

const API_BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${API_KEY}`,
  },
};
const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [moviesList, setMoviesList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchMovies = async () => {
    setIsLoading(true);
    try {
      const endpoint = `${API_BASE_URL}/search/movie?query=${searchTerm}&language=en-US&page=1&include_adult=false`;
      const response = await fetch(endpoint, API_OPTIONS);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setMoviesList(data);
    } catch (error) {
      if (error instanceof Error) {
        setErrorMessage("Error fetching movies:" + error.message);
      } else {
        setErrorMessage("Error fetching movies: An unknown error occurred.");
      }
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    if (searchTerm) {
      fetchMovies();
    } else {
      setErrorMessage("Please enter a search term.");
    }
  }, [searchTerm]);
  return (
    <>
      <div className="pattern" />
      <div className="wrapper">
        <header>
          <img src={heroBbanner} alt="Hero Banner" />
          <h1>
            Find <span className="text-gradient"> movies</span> you'll enjoy
            without the hassle
          </h1>
        </header>
        <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        {/* {isLoading ? <h6 className="text-white">loading</h6> : null} */}
      </div>
    </>
  );
};

export default App;
