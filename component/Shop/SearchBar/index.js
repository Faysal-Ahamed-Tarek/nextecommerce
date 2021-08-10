import React from "react";
import CategorySearch from "./Categories";
import NameSearch from "./Name";

export default function SearchBar() {
  return (
    <>
      <div className="Shop_sidebar bg-gray-100 rounded p-4 ">
      <NameSearch />
      <CategorySearch />
      </div>
    </>
  );
}
