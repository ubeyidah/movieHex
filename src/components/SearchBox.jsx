"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const SearchBox = () => {
  const [search, setSearch] = useState("");
  const router = useRouter();
  const submitSearch = (e) => {
    e.preventDefault();
    if (search) {
      router.push(`/search/${search}`);
      setSearch("");
    }
  };
  return (
    <form className="max-w-6xl py-3 px-2 flex mx-auto" onSubmit={submitSearch}>
      <input
        type="text"
        placeholder="Search movie..."
        className="flex-1 border rounded-tl-md outline-none rounded-bl-md border-lime-600 pl-4 text-sm"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button
        type="submit"
        className="px-5 py-2 bg-lime-600 text-white rounded-tr-md rounded-br-md"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBox;
