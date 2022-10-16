import { HiSearch } from "react-icons/hi";
const Search = ({ searchFilter }) => {
  const changeText = (e) => {
    searchFilter(e.target.value);
  };
  const inputSearch = () => {
    return (
      <div className="search">
        <HiSearch />
        <input
          type="search"
          className="search--input"
          placeholder="Search for country..."
          onChange={changeText}
        />
      </div>
    );
  };

  return <>{inputSearch()}</>;
};

export default Search;
