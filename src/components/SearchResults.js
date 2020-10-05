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
          <a href={image} target="_blank" rel="noopener noreferrer" key={image}>
            <img
              className="card-image"
              src={image}
              alt="spaceImage"
              key={image}
            />
          </a>
        ))}
      </div>
    );
  }
};

export default SearchResults;
