import React from "react";

function SearchBar({ value, onChange }) {
  return (
    <input
      type="text"
      className="form-control mb-4 search-bar"
      placeholder="Buscar película..."
      value={value}
      onChange={onChange}
    />
  );
}
export default SearchBar;
