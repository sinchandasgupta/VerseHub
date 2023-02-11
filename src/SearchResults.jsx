function SearchResults({ searchResults }) {
  return (
    <>
      {searchResults.map(({ result }) => (
        <div key={result.id} className="result-card">
          <p>{result.title}</p>
          <p>
            {result.artist_names.split(" ").length > 10
              ? result.primary_artist.name
              : result.artist_names}
          </p>
        </div>
      ))}
    </>
  );
}

export default SearchResults;
