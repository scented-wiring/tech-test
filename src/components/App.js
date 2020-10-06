import React, { useState } from "react";
import "../styles/App.css";
import Search from "./Search";
import SearchResults from "./SearchResults";

const App = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [searchSubmit, setSearchSubmit] = useState(false);

  return (
    <div className="App">
      <img
        src="https://cdn.cnn.com/cnnnext/dam/assets/200424060716-nasa-worm-logo.jpg"
        alt="NASA logo"
        className="logo"
      ></img>
      <Search
        setSearchResults={setSearchResults}
        setSearchSubmit={setSearchSubmit}
      />
      <SearchResults results={searchResults} submit={searchSubmit} />
    </div>
  );
};

export default App;
