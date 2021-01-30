import React, { useState } from "react";
import "../styles/App.css";
import Search from "./Search";
import SearchResults from "./SearchResults";

const App = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [searchSubmit, setSearchSubmit] = useState(false);
  const [query, setQuery] = useState(null);

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
        setQuery={setQuery}
      />
      <SearchResults
        results={searchResults}
        submit={searchSubmit}
        query={query}
      />
    </div>
  );
};

export default App;
