import React from "react";

function SearchBar({ searchQuery, setSearchQuery }) {
  return (
    <div>
      <input
        type="text"
        placeholder="Search Products..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="p-2 border rounded-md min-w-[20rem] mb-4"
      />
    </div>
  );
}

export default SearchBar;
