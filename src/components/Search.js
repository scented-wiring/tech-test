import React, { useState } from "react";
import "../styles/Search.css";

function Search() {
  const [value, setValue] = useState(0);

  return (
    <>
      <form className="Form">
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
}

export default Search;
