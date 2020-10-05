import React from "react";
import "../styles/SearchResults.css";

const SearchResults = ({ results }) => {
  if (!results.length) {
    return (
      <div className="search-results">
        <p>No results.</p>
      </div>
    );
  } else {
    return (
      <div id="images-wrapper">
        {results.map((image) => (
          <img className="card-image" src={image} alt="spaceImage" />
        ))}
      </div>
    );
  }
};

export default SearchResults;
