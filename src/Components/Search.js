const Search = ({ searchFilter }) => {
  const changeText = (e) => {
    searchFilter(e.target.value);
  };
  const inputSearch = () => {
    return (
      <input
        type="search"
        className="search"
        placeholder="Search for country..."
        onChange={changeText}
      />
    );
  };

  return <>{inputSearch()}</>;
};

export default Search;
