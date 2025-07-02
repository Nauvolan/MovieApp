import React from "react";
import SearchIcon from "../assets/img/search.png";

interface SearchProps {
  searchTerm?: string;
  setSearchTerm?: (term: string) => void;
}

const Search: React.FC<SearchProps> = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="search">
      <div>
        <img src={SearchIcon} alt="search" />
        <input
          type="text"
          placeholder="Search for a movie, series, or episode"
          value={searchTerm}
          onChange={(e) => setSearchTerm && setSearchTerm(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Search;
