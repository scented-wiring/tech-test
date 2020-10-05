import React from "react";
import "../styles/App.css";
import Search from "./Search";

function App() {
  return (
    <div className="App" data-testid="app">
      <img
        src="https://cdn.cnn.com/cnnnext/dam/assets/200424060716-nasa-worm-logo.jpg"
        alt="NASA logo"
        className="logo"
      ></img>
      <Search />
    </div>
  );
}

export default App;
