import { useEffect, useState } from "react";
import "./App.css";
import heroBbanner from "./assets/img/hero-img.png";
import Search from "./components/Search";
import { useMovie } from "./hooks/useMovie";
import type { Movie } from "./interfaces/Movies";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { movieList, errorMessage, isLoading, searchMovies } = useMovie();

  useEffect(() => {
    if (searchTerm) {
      searchMovies({ searchTerm });
    }
  }, [searchTerm, searchMovies]);
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
        {movieList.length > 0 && (
          <div className="movies-list">
            <ol>
              {movieList.map((movie: Movie) => (
                <li key={movie.id} className="text-white">
                  {movie.title}
                </li>
              ))}
            </ol>
          </div>
        )}
        /* {isLoading ? <h6 className="text-white">loading</h6> : null} */
      </div>
    </>
  );
};

export default App;
