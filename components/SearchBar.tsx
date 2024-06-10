"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState<
    { title: string; link: string }[]
  >([]);

  useEffect(() => {
    const fetchSuggestions = async () => {
      if (query.length >= 3) {
        const response = await fetch(`/api/search?q=${query}`);
        const data = await response.json();
        setSuggestions(data);
      } else {
        setSuggestions([]);
      }
    };

    fetchSuggestions();
  }, [query]);

  const closeSearch = () => {
    setSuggestions([]);
  };

  return (
    <>
      <div className="md:w-80 lg:w-96 relative text-right pr-6 lg:pr-0">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search..."
          className="p-2 border rounded"
        />
        {suggestions.length > 0 && (
          <div className="absolute right-0 -ml-4 lg:ml-0 top-full left-0 text-left w-full bg-white border rounded shadow-lg">
            <ul>
              {suggestions.slice(0, 10).map((suggestion, index) => (
                <li key={index}>
                  <Link
                    onClick={closeSearch}
                    href={suggestion.link}
                    className="block p-2 hover:bg-gray-100"
                  >
                    {suggestion.title}
                  </Link>
                </li>
              ))}
              {suggestions.length > 10 && (
                <li>
                  <Link
                    href={`/search?q=${query}`}
                    className="block p-2 text-blue-500 hover:bg-gray-100"
                  >
                    View All
                  </Link>
                </li>
              )}
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default SearchBar;
