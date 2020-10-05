import React from "react";
import "../styles/SearchResults.css";

const SearchResults = () => {
  return (
    <div className="search-results">
      <p>Search Results: </p>
      <img
        className="search-results-image"
        src="https://images.unsplash.com/photo-1522030299830-16b8d3d049fe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
        alt="space"
      ></img>
    </div>
  );
};

export default SearchResults;
