import React from "react";

const Search = () => {
  const handleSearch = (e) => {
    console.log(e.target.value);
  };
  return (
    <div className="p-10 text-center dark:bg-black">
      <input
        type="text"
        placeholder="Search for news..."
        className="rounded outline outline-blue-300 w-1/2 h-10 px-2"
        onChange={handleSearch}
      />
    </div>
  );
};

export default Search;
