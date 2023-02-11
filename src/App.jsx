import { useState } from "react";
import SearchInput from "./SearchInput";
import SearchResults from "./SearchResults";
import useGetSongs from "./useGetSongs";

function App() {
  const [handleSearch, searchResults, status] = useGetSongs();

  return (
    <main>
      <section className="search">
        <h1>VerseHub</h1>
        <SearchInput handleSearch={handleSearch} />
      </section>
      <SearchResults searchResults={searchResults} />
    </main>
  );
}

export default App;
