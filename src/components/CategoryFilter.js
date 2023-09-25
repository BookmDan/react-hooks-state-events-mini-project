import React from "react";
import { CATEGORIES } from "../data"

function CategoryFilter() {
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {CATEGORIES.map((category) => (
        <button key ={category}>{category} </button>
      ))}
      {/* render <button> elements for each category here */}
    </div>
  );
}

export default CategoryFilter;
