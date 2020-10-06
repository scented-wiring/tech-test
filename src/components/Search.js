import React, { useState } from "react";
import "../styles/Search.css";
import getImages from "../requests/getImages";
import PropTypes from "prop-types";

const Search = ({ setSearchResults }) => {
  const [value, setValue] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSearchResults(await getImages(value));
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

Search.propTypes = {
  setSearchResults: PropTypes.func,
};

export default Search;
