import { useState } from "react";
import SearchInput from "./SearchInput";
import { options } from "./options";
import SearchResults from "./SearchResults";

const BASE_URL = "https://genius-song-lyrics1.p.rapidapi.com/";

function App() {
  // idle | loading | success |  error
  const [status, setStatus] = useState("idle");
  const [searchResults, setSearchResults] = useState([]);

  async function handleSearch(searchTerm) {
    setStatus("loading");
    const response = await fetch(`${BASE_URL}search/?q=${searchTerm}`, options);
    const json = await response.json();
    console.log(json.hits);
    setSearchResults(json.hits);

    if (json.hits) {
      setStatus("success");
    } else {
      setStatus("error");
    }
  }
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
