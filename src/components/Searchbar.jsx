import { BiSearch } from "react-icons/bi";
import { useState } from "react";

const Searchbar = () => {
  const [query, setQuery] = useState("");

  const onChange = (e) => {
    setQuery(e.target.value);
  };

  // Get query from link if it exists
  const getQuery = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const q = urlParams.get("q");
    if (q === query) {
      return;
    }
    if (q !== null) {
      setQuery(q);
    }
  };

  getQuery();

  return (
    <form
      className="search-bar"
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <input type="text" onChange={onChange} value={`${query}`} />
      <button type="submit">
        <BiSearch />
      </button>
    </form>
  );
};

export default Searchbar;
