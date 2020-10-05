import React, { useState } from "react";
import "../styles/App.css";
import Search from "./Search";

const App = () => {
  const [searchResults, setSearchResults] = useState();

  return (
    <div className="App">
      <img
        src="https://cdn.cnn.com/cnnnext/dam/assets/200424060716-nasa-worm-logo.jpg"
        alt="NASA logo"
        className="logo"
      ></img>
      <Search setSearchResults={setSearchResults} />
    </div>
  );
};

export default App;
