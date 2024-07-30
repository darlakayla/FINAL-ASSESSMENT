import React, { useState } from 'react';


const SearchFilter = ({ setSearchQuery }) => {
  const [query, setQuery] = useState('');

  const handleChange = (e) => {
    const newQuery = e.target.value;
    setQuery(newQuery);
    setSearchQuery(newQuery);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search citizens..."
        value={query}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchFilter;
