import React, { useState } from "react";
import "../styles/Search.css";
import getImages from "../requests/getImages";

const Search = ({ setSearchResults }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setSearchResults(getImages(value));
  };

  return (
    <>
      <form className="Form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="Input"
          onChange={(e) => setValue(e.target.value)}
        ></input>
        <button className="Button" type="submit">
          Search
        </button>
      </form>
    </>
  );
};

export default Search;
