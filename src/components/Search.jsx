const Search = ({ search, setSearch }) => {
  return (
    <div className="search">
      <div>
        <img src="/search.png" alt="Search" />

        <input
          type="text"
          placeholder="Search through thousands of movies"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
      </div>
    </div>
  );
};

export default Search;
