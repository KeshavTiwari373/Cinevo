import Hero from "./components/Hero";
import Search from "./components/Search.jsx";
import { useState } from "react";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <main>
      <div className="pattern" />
      <div className="wrapper">
        <Hero />
        <Search search={searchQuery} setSearch={setSearchQuery} />
        <h1 className="text-white text-3xl">{searchQuery}</h1>
      </div>
    </main>
  );
}

export default App;
