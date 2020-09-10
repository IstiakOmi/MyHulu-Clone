import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Results from "./components/Results";
import requests from "./requests";

function App() {
  const [selectedOption, setSelectedOption] = useState(requests.fetchTrending);
  return (
    <div className="app">
      {/* Header */}
      <Header />

      {/* Nav */}
      <Nav setSelectedOption={setSelectedOption} />

      {/* Results */}
      <Results selectedOption={selectedOption} />
    </div>
  );
}

export default App;
