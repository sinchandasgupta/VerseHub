function SearchResults({ searchResults }) {
  return (
    <section className="results">
      {searchResults.map(({ result }) => (
        <div key={result.id} className="result-card">
          <p className="song-title">{result.title}</p>
          <p className="song-artist_name">
            {result.artist_names.split(" ").length > 10
              ? result.primary_artist.name
              : result.artist_names}
          </p>
        </div>
      ))}
    </section>
  );
}

export default SearchResults;
