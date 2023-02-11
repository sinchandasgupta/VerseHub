import { useState } from "react";
import { options } from "./options";

const BASE_URL = "https://genius-song-lyrics1.p.rapidapi.com/";

function useGetSongs() {
  // idle | loading | success |  error
  const [status, setStatus] = useState("idle");
  const [searchResults, setSearchResults] = useState([]);

  async function handleSearch(searchTerm) {
    setStatus("loading");
    const response = await fetch(`${BASE_URL}search/?q=${searchTerm}`, options);
    const json = await response.json();
    // console.log(json.hits);
    setSearchResults(json.hits);

    if (json.hits) {
      setStatus("success");
    } else {
      setStatus("error");
    }
  }
  return [handleSearch, searchResults, status];
}

export default useGetSongs;
