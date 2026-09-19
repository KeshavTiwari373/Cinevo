import Hero from "./components/Hero";
import MovieCard from "./components/MovieCard.jsx";
import Search from "./components/Search.jsx";
import Spinner from "./components/Spinner.jsx";
import { useDebounce } from "react-use";
import { updateSearchCount } from "./components/appwrite.js";

import { useEffect, useState } from "react";

const API_BASE_URL = "https://api.themoviedb.org/3";

const API_KEY = import.meta.env.VITE_TMDB_API_Key;

const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${API_KEY}`,
  },
};

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [movieList, setMovieList] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [debounceSearchQuery, setDebounceSearchQuery] = useState("");

  useDebounce(() => setDebounceSearchQuery(searchQuery), 500, [searchQuery]);

  const fetchMovies = async (query = "") => {
    setLoading(true);
    setErrorMessage("");

    try {
      const endpoint = query
        ? `${API_BASE_URL}/search/movie?query=${encodeURIComponent(query)}`
        : `${API_BASE_URL}/discover/movie?sort_by=popularity.desc`;

      const response = await fetch(endpoint, API_OPTIONS);

      if (!response.ok) {
        throw new Error("Failed to fetch movies");
      }

      const data = await response.json();

      if (data.results === "false") {
        setErrorMessage(
          data.error || "Failed to fetch movies. Please try again later.",
        );
        setMovieList([]);
        return;
      }

      setMovieList(data.results || []);

      if (debounceSearchQuery.trim() !== "" && data.results.length > 0) {
        await updateSearchCount(debounceSearchQuery, data.results[0]);
      }

      // console.log(data);
    } catch (error) {
      console.error(`Error fetching movies: {error}`);
      setErrorMessage("Failed to fetch movies. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies(debounceSearchQuery);
  }, [debounceSearchQuery]);

  return (
    <main>
      <div className="pattern" />
      <div className="wrapper">
        <Hero />
        <Search search={searchQuery} setSearch={setSearchQuery} />
        <section className="all-movies">
          <h2 className="mt-10">All Movies</h2>
          {isLoading ? (
            <Spinner />
          ) : errorMessage ? (
            <p className="text-red-500">{errorMessage}</p>
          ) : (
            <ul>
              {movieList.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
            </ul>
          )}
        </section>
      </div>
    </main>
  );
}

export default App;
