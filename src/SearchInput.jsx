import { useState } from "react";

function SearchInput({ handleSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div>
      <h1>VerseHub</h1>
      <div className="searchinput-wrapper">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSearch(searchTerm);
            setSearchTerm("");
          }}
        >
          <div className="search">
            <input
              type="text"
              placeholder="Search your song"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <button>Search</button>
        </form>
      </div>
    </div>
  );
}

export default SearchInput;
