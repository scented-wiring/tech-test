import React, { useState } from "react";
import "../styles/Search.css";
import getImages from "../requests/getImages";

const Search = () => {
  const [value, setValue] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();
    getImages(value);
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
